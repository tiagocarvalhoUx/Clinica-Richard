# =====================================================
# Multi-stage build — Frontend Clínica Dr. Richard
# Vue 3 + Vite + TypeScript + Firebase
# =====================================================

# ---------- Stage 1: dependências ----------
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# ---------- Stage 2: desenvolvimento ----------
FROM node:20-alpine AS development
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ---------- Stage 3: build ----------
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG VITE_FIREBASE_API_KEY
ARG VITE_FIREBASE_AUTH_DOMAIN
ARG VITE_FIREBASE_PROJECT_ID
ARG VITE_FIREBASE_STORAGE_BUCKET
ARG VITE_FIREBASE_MESSAGING_SENDER_ID
ARG VITE_FIREBASE_APP_ID
ARG VITE_SITE_URL
ARG VITE_WHATSAPP_NUMBER
ARG VITE_CLINICA_TELEFONE
ARG VITE_CLINICA_EMAIL
ARG VITE_CLINICA_ENDERECO
ENV VITE_FIREBASE_API_KEY=$VITE_FIREBASE_API_KEY
ENV VITE_FIREBASE_AUTH_DOMAIN=$VITE_FIREBASE_AUTH_DOMAIN
ENV VITE_FIREBASE_PROJECT_ID=$VITE_FIREBASE_PROJECT_ID
ENV VITE_FIREBASE_STORAGE_BUCKET=$VITE_FIREBASE_STORAGE_BUCKET
ENV VITE_FIREBASE_MESSAGING_SENDER_ID=$VITE_FIREBASE_MESSAGING_SENDER_ID
ENV VITE_FIREBASE_APP_ID=$VITE_FIREBASE_APP_ID
ENV VITE_SITE_URL=$VITE_SITE_URL
ENV VITE_WHATSAPP_NUMBER=$VITE_WHATSAPP_NUMBER
ENV VITE_CLINICA_TELEFONE=$VITE_CLINICA_TELEFONE
ENV VITE_CLINICA_EMAIL=$VITE_CLINICA_EMAIL
ENV VITE_CLINICA_ENDERECO=$VITE_CLINICA_ENDERECO
RUN npm run build

# ---------- Stage 4: produção ----------
FROM node:20-alpine AS production
WORKDIR /app
RUN apk add --no-cache wget \
    && addgroup -g 1001 -S nodejs \
    && adduser -S nodejs -u 1001
COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nodejs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nodejs:nodejs /app/vite.config.ts ./vite.config.ts
USER nodejs
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget --quiet --spider http://localhost:3000 || exit 1
CMD ["npm", "run", "preview"]
