const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PublicLayout-Bg-Z2LED.js","assets/AppLogo.vue_vue_type_script_setup_true_lang-szP5zZMJ.js","assets/useWhatsApp-C5AZ2giU.js","assets/PortalLayout-Cq2Jqa1y.js","assets/HomeView-DVEHOcZy.js","assets/especialidades.service-wuDmNOrM.js","assets/AppSkeleton.vue_vue_type_script_setup_true_lang-C3Tb2KJz.js","assets/Depoimentos.vue_vue_type_script_setup_true_lang-PZSA9-ud.js","assets/AppRating.vue_vue_type_script_setup_true_lang-CF4ckTP2.js","assets/formatadores-BzGOgOfa.js","assets/pt-BR-IzZaxBgt.js","assets/CtaAgendamento.vue_vue_type_script_setup_true_lang-oBIzlS66.js","assets/SobreView-DhHPvTqH.js","assets/EspecialidadesView-CoxtdxXN.js","assets/EquipeView-BNKlCc2T.js","assets/medicos.service-TX90pPr6.js","assets/DepoimentosView-Bnb12bsY.js","assets/ContatoView-Bgn9rwf3.js","assets/AppInput.vue_vue_type_script_setup_true_lang-CQFIMejG.js","assets/AppTextarea.vue_vue_type_script_setup_true_lang-Ccl7Q81V.js","assets/useToast-CA_dLoGB.js","assets/LoginView-BjYBIjh_.js","assets/AuthCallbackView-wP2VArpZ.js","assets/DashboardView-DhWczgec.js","assets/agendamento.store--yJF65FS.js","assets/agendamentos.service-BjcsjjzW.js","assets/AgendarView-D__i4bMJ.js","assets/MeusAgendamentosView-0rWaYUWB.js","assets/PerfilView-Bn_mOcGv.js","assets/AvaliacoesView-B5Y4LOqU.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},ls=[],un=()=>{},Dp=()=>!1,Ia=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),wa=t=>t.startsWith("onUpdate:"),Ze=Object.assign,Wl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Cv=Object.prototype.hasOwnProperty,Se=(t,e)=>Cv.call(t,e),oe=Array.isArray,us=t=>ji(t)==="[object Map]",Vp=t=>ji(t)==="[object Set]",lf=t=>ji(t)==="[object Date]",fe=t=>typeof t=="function",xe=t=>typeof t=="string",Bt=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",xp=t=>(Ae(t)||fe(t))&&fe(t.then)&&fe(t.catch),Lp=Object.prototype.toString,ji=t=>Lp.call(t),kv=t=>ji(t).slice(8,-1),Mp=t=>ji(t)==="[object Object]",Aa=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ci=Hl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ra=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ov=/-\w/g,Ct=Ra(t=>t.replace(Ov,e=>e.slice(1).toUpperCase())),Nv=/\B([A-Z])/g,Kr=Ra(t=>t.replace(Nv,"-$1").toLowerCase()),ba=Ra(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ac=Ra(t=>t?`on${ba(t)}`:""),cn=(t,e)=>!Object.is(t,e),Rc=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Up=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Dv=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Vv=t=>{const e=xe(t)?Number(t):NaN;return isNaN(e)?t:e};let uf;const Sa=()=>uf||(uf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kl(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=xe(r)?Uv(r):Kl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(xe(t)||Ae(t))return t}const xv=/;(?![^(]*\))/g,Lv=/:([^]+)/,Mv=/\/\*[^]*?\*\//g;function Uv(t){const e={};return t.replace(Mv,"").split(xv).forEach(n=>{if(n){const r=n.split(Lv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Pa(t){let e="";if(xe(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=Pa(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bv=Hl(Fv);function Fp(t){return!!t||t===""}function jv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Gl(t[r],e[r]);return n}function Gl(t,e){if(t===e)return!0;let n=lf(t),r=lf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Bt(t),r=Bt(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?jv(t,e):!1;if(n=Ae(t),r=Ae(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Gl(t[o],e[o]))return!1}}return String(t)===String(e)}const Bp=t=>!!(t&&t.__v_isRef===!0),el=t=>xe(t)?t:t==null?"":oe(t)||Ae(t)&&(t.toString===Lp||!fe(t.toString))?Bp(t)?el(t.value):JSON.stringify(t,jp,2):String(t),jp=(t,e)=>Bp(e)?jp(t,e.value):us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[bc(r,i)+" =>"]=s,n),{})}:Vp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>bc(n))}:Bt(e)?bc(e):Ae(e)&&!oe(e)&&!Mp(e)?String(e):e,bc=(t,e="")=>{var n;return Bt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tt;class $p{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=tt,!e&&tt&&(this.index=(tt.scopes||(tt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=tt;try{return tt=this,e()}finally{tt=n}}}on(){++this._on===1&&(this.prevScope=tt,tt=this)}off(){if(this._on>0&&--this._on===0){if(tt===this)tt=this.prevScope;else{let e=tt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function qp(t){return new $p(t)}function Hp(){return tt}function $v(t,e=!1){tt&&tt.cleanups.push(t)}let Oe;const Sc=new WeakSet;class Wp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tt&&tt.active&&tt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Sc.has(this)&&(Sc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hf(this),zp(this);const e=Oe,n=Qt;Oe=this,Qt=!0;try{return this.fn()}finally{Qp(this),Oe=e,Qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Yl(e);this.deps=this.depsTail=void 0,hf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Sc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){tl(this)&&this.run()}get dirty(){return tl(this)}}let Kp=0,li,ui;function Gp(t,e=!1){if(t.flags|=8,e){t.next=ui,ui=t;return}t.next=li,li=t}function zl(){Kp++}function Ql(){if(--Kp>0)return;if(ui){let e=ui;for(ui=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;li;){let e=li;for(li=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function zp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Qp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Yl(r),qv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function tl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Yp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Yp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===wi)||(t.globalVersion=wi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!tl(t))))return;t.flags|=2;const e=t.dep,n=Oe,r=Qt;Oe=t,Qt=!0;try{zp(t);const s=t.fn(t._value);(e.version===0||cn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Oe=n,Qt=r,Qp(t),t.flags&=-3}}function Yl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Yl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function qv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qt=!0;const Jp=[];function Vn(){Jp.push(Qt),Qt=!1}function xn(){const t=Jp.pop();Qt=t===void 0?!0:t}function hf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let wi=0;class Hv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Jl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Oe||!Qt||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new Hv(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,Xp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=r)}return n}trigger(e){this.version++,wi++,this.notify(e)}notify(e){zl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ql()}}}function Xp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Xp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Wo=new WeakMap,Vr=Symbol(""),nl=Symbol(""),Ai=Symbol("");function mt(t,e,n){if(Qt&&Oe){let r=Wo.get(t);r||Wo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Jl),s.map=r,s.key=n),s.track()}}function bn(t,e,n,r,s,i){const o=Wo.get(t);if(!o){wi++;return}const c=l=>{l&&l.trigger()};if(zl(),e==="clear")o.forEach(c);else{const l=oe(t),u=l&&Aa(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Ai||!Bt(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Ai)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Vr)),us(t)&&c(o.get(nl)));break;case"delete":l||(c(o.get(Vr)),us(t)&&c(o.get(nl)));break;case"set":us(t)&&c(o.get(Vr));break}}Ql()}function Wv(t,e){const n=Wo.get(t);return n&&n.get(e)}function ts(t){const e=ye(t);return e===t?e:(mt(e,"iterate",Ai),Ft(t)?e:e.map(Yt))}function Ca(t){return mt(t=ye(t),"iterate",Ai),t}function on(t,e){return Ln(t)?_s(hn(t)?Yt(e):e):Yt(e)}const Kv={__proto__:null,[Symbol.iterator](){return Pc(this,Symbol.iterator,t=>on(this,t))},concat(...t){return ts(this).concat(...t.map(e=>oe(e)?ts(e):e))},entries(){return Pc(this,"entries",t=>(t[1]=on(this,t[1]),t))},every(t,e){return In(this,"every",t,e,void 0,arguments)},filter(t,e){return In(this,"filter",t,e,n=>n.map(r=>on(this,r)),arguments)},find(t,e){return In(this,"find",t,e,n=>on(this,n),arguments)},findIndex(t,e){return In(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return In(this,"findLast",t,e,n=>on(this,n),arguments)},findLastIndex(t,e){return In(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return In(this,"forEach",t,e,void 0,arguments)},includes(...t){return Cc(this,"includes",t)},indexOf(...t){return Cc(this,"indexOf",t)},join(t){return ts(this).join(t)},lastIndexOf(...t){return Cc(this,"lastIndexOf",t)},map(t,e){return In(this,"map",t,e,void 0,arguments)},pop(){return Gs(this,"pop")},push(...t){return Gs(this,"push",t)},reduce(t,...e){return ff(this,"reduce",t,e)},reduceRight(t,...e){return ff(this,"reduceRight",t,e)},shift(){return Gs(this,"shift")},some(t,e){return In(this,"some",t,e,void 0,arguments)},splice(...t){return Gs(this,"splice",t)},toReversed(){return ts(this).toReversed()},toSorted(t){return ts(this).toSorted(t)},toSpliced(...t){return ts(this).toSpliced(...t)},unshift(...t){return Gs(this,"unshift",t)},values(){return Pc(this,"values",t=>on(this,t))}};function Pc(t,e,n){const r=Ca(t),s=r[e]();return r!==t&&!Ft(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Gv=Array.prototype;function In(t,e,n,r,s,i){const o=Ca(t),c=o!==t&&!Ft(t),l=o[e];if(l!==Gv[e]){const p=l.apply(t,i);return c?Yt(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,on(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function ff(t,e,n,r){const s=Ca(t),i=s!==t&&!Ft(t);let o=n,c=!1;s!==t&&(i?(c=r.length===0,o=function(u,f,p){return c&&(c=!1,u=on(t,u)),n.call(this,u,on(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const l=s[e](o,...r);return c?on(t,l):l}function Cc(t,e,n){const r=ye(t);mt(r,"iterate",Ai);const s=r[e](...n);return(s===-1||s===!1)&&ka(n[0])?(n[0]=ye(n[0]),r[e](...n)):s}function Gs(t,e,n=[]){Vn(),zl();const r=ye(t)[e].apply(t,n);return Ql(),xn(),r}const zv=Hl("__proto__,__v_isRef,__isVue"),Zp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bt));function Qv(t){Bt(t)||(t=String(t));const e=ye(this);return mt(e,"has",t),e.hasOwnProperty(t)}class em{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?iE:sm:i?rm:nm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=oe(e);if(!s){let l;if(o&&(l=Kv[n]))return l;if(n==="hasOwnProperty")return Qv}const c=Reflect.get(e,n,Le(e)?e:r);if((Bt(n)?Zp.has(n):zv(n))||(s||mt(e,"get",n),i))return c;if(Le(c)){const l=o&&Aa(n)?c:c.value;return s&&Ae(l)?sl(l):l}return Ae(c)?s?sl(c):$i(c):c}}class tm extends em{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=oe(e)&&Aa(n);if(!this._isShallow){const u=Ln(i);if(!Ft(r)&&!Ln(r)&&(i=ye(i),r=ye(r)),!o&&Le(i)&&!Le(r))return u||(i.value=r),!0}const c=o?Number(n)<e.length:Se(e,n),l=Reflect.set(e,n,r,Le(e)?e:s);return e===ye(s)&&(c?cn(r,i)&&bn(e,"set",n,r):bn(e,"add",n,r)),l}deleteProperty(e,n){const r=Se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&bn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Bt(n)||!Zp.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",oe(e)?"length":Vr),Reflect.ownKeys(e)}}class Yv extends em{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Jv=new tm,Xv=new Yv,Zv=new tm(!0);const rl=t=>t,wo=t=>Reflect.getPrototypeOf(t);function eE(t,e,n){return function(...r){const s=this.__v_raw,i=ye(s),o=us(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?rl:e?_s:Yt;return!e&&mt(i,"iterate",l?nl:Vr),Ze(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function Ao(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function tE(t,e){const n={get(s){const i=this.__v_raw,o=ye(i),c=ye(s);t||(cn(s,c)&&mt(o,"get",s),mt(o,"get",c));const{has:l}=wo(o),u=e?rl:t?_s:Yt;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&mt(ye(s),"iterate",Vr),s.size},has(s){const i=this.__v_raw,o=ye(i),c=ye(s);return t||(cn(s,c)&&mt(o,"has",s),mt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=ye(c),u=e?rl:t?_s:Yt;return!t&&mt(l,"iterate",Vr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Ze(n,t?{add:Ao("add"),set:Ao("set"),delete:Ao("delete"),clear:Ao("clear")}:{add(s){const i=ye(this),o=wo(i),c=ye(s),l=!e&&!Ft(s)&&!Ln(s)?c:s;return o.has.call(i,l)||cn(s,l)&&o.has.call(i,s)||cn(c,l)&&o.has.call(i,c)||(i.add(l),bn(i,"add",l,l)),this},set(s,i){!e&&!Ft(i)&&!Ln(i)&&(i=ye(i));const o=ye(this),{has:c,get:l}=wo(o);let u=c.call(o,s);u||(s=ye(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?cn(i,f)&&bn(o,"set",s,i):bn(o,"add",s,i),this},delete(s){const i=ye(this),{has:o,get:c}=wo(i);let l=o.call(i,s);l||(s=ye(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&bn(i,"delete",s,void 0),u},clear(){const s=ye(this),i=s.size!==0,o=s.clear();return i&&bn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=eE(s,t,e)}),n}function Xl(t,e){const n=tE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,i)}const nE={get:Xl(!1,!1)},rE={get:Xl(!1,!0)},sE={get:Xl(!0,!1)};const nm=new WeakMap,rm=new WeakMap,sm=new WeakMap,iE=new WeakMap;function oE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function aE(t){return t.__v_skip||!Object.isExtensible(t)?0:oE(kv(t))}function $i(t){return Ln(t)?t:Zl(t,!1,Jv,nE,nm)}function im(t){return Zl(t,!1,Zv,rE,rm)}function sl(t){return Zl(t,!0,Xv,sE,sm)}function Zl(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=aE(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function hn(t){return Ln(t)?hn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ln(t){return!!(t&&t.__v_isReadonly)}function Ft(t){return!!(t&&t.__v_isShallow)}function ka(t){return t?!!t.__v_raw:!1}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function eu(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&Up(t,"__v_skip",!0),t}const Yt=t=>Ae(t)?$i(t):t,_s=t=>Ae(t)?sl(t):t;function Le(t){return t?t.__v_isRef===!0:!1}function ar(t){return om(t,!1)}function cE(t){return om(t,!0)}function om(t,e){return Le(t)?t:new lE(t,e)}class lE{constructor(e,n){this.dep=new Jl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ye(e),this._value=n?e:Yt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ft(e)||Ln(e);e=r?e:ye(e),cn(e,n)&&(this._rawValue=e,this._value=r?e:Yt(e),this.dep.trigger())}}function Nn(t){return Le(t)?t.value:t}const uE={get:(t,e,n)=>e==="__v_raw"?t:Nn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Le(s)&&!Le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function am(t){return hn(t)?t:new Proxy(t,uE)}function hE(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=cm(t,n);return e}class fE{constructor(e,n,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=Bt(n)?n:String(n),this._raw=ye(e);let s=!0,i=e;if(!oe(e)||Bt(this._key)||!Aa(this._key))do s=!ka(i)||Ft(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Nn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Le(this._raw[this._key])){const n=this._object[this._key];if(Le(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Wv(this._raw,this._key)}}class dE{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function pE(t,e,n){return Le(t)?t:fe(t)?new dE(t):Ae(t)&&arguments.length>1?cm(t,e,n):ar(t)}function cm(t,e,n){return new fE(t,e,n)}class mE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Jl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return Gp(this,!0),!0}get value(){const e=this.dep.track();return Yp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gE(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new mE(r,s,n)}const Ro={},Ko=new WeakMap;let Pr;function _E(t,e=!1,n=Pr){if(n){let r=Ko.get(n);r||Ko.set(n,r=[]),r.push(t)}}function yE(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=B=>s?B:Ft(B)||s===!1||s===0?tr(B,1):tr(B);let f,p,m,_,S=!1,k=!1;if(Le(t)?(p=()=>t.value,S=Ft(t)):hn(t)?(p=()=>u(t),S=!0):oe(t)?(k=!0,S=t.some(B=>hn(B)||Ft(B)),p=()=>t.map(B=>{if(Le(B))return B.value;if(hn(B))return u(B);if(fe(B))return l?l(B,2):B()})):fe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Vn();try{m()}finally{xn()}}const B=Pr;Pr=f;try{return l?l(t,3,[_]):t(_)}finally{Pr=B}}:p=un,e&&s){const B=p,X=s===!0?1/0:s;p=()=>tr(B(),X)}const O=Hp(),q=()=>{f.stop(),O&&O.active&&Wl(O.effects,f)};if(i&&e){const B=e;e=(...X)=>{B(...X),q()}}let L=k?new Array(t.length).fill(Ro):Ro;const F=B=>{if(!(!(f.flags&1)||!f.dirty&&!B))if(e){const X=f.run();if(s||S||(k?X.some((ne,R)=>cn(ne,L[R])):cn(X,L))){m&&m();const ne=Pr;Pr=f;try{const R=[X,L===Ro?void 0:k&&L[0]===Ro?[]:L,_];L=X,l?l(e,3,R):e(...R)}finally{Pr=ne}}}else f.run()};return c&&c(F),f=new Wp(p),f.scheduler=o?()=>o(F,!1):F,_=B=>_E(B,!1,f),m=f.onStop=()=>{const B=Ko.get(f);if(B){if(l)l(B,4);else for(const X of B)X();Ko.delete(f)}},e?r?F(!0):L=f.run():o?o(F.bind(null,!0),!0):f.run(),q.pause=f.pause.bind(f),q.resume=f.resume.bind(f),q.stop=q,q}function tr(t,e=1/0,n){if(e<=0||!Ae(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Le(t))tr(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)tr(t[r],e,n);else if(Vp(t)||us(t))t.forEach(r=>{tr(r,e,n)});else if(Mp(t)){for(const r in t)tr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&tr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qi(t,e,n,r){try{return r?t(...r):t()}catch(s){Oa(s,e,n)}}function Jt(t,e,n,r){if(fe(t)){const s=qi(t,e,n,r);return s&&xp(s)&&s.catch(i=>{Oa(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Jt(t[i],e,n,r));return s}}function Oa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Vn(),qi(i,null,10,[t,l,u]),xn();return}}vE(t,n,s,r,o)}function vE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let rn=-1;const hs=[];let Zn=null,rs=0;const lm=Promise.resolve();let Go=null;function tu(t){const e=Go||lm;return t?e.then(this?t.bind(this):t):e}function EE(t){let e=rn+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=Ri(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function nu(t){if(!(t.flags&1)){const e=Ri(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=Ri(n)?Rt.push(t):Rt.splice(EE(e),0,t),t.flags|=1,um()}}function um(){Go||(Go=lm.then(fm))}function TE(t){oe(t)?hs.push(...t):Zn&&t.id===-1?Zn.splice(rs+1,0,t):t.flags&1||(hs.push(t),t.flags|=1),um()}function df(t,e,n=rn+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function hm(t){if(hs.length){const e=[...new Set(hs)].sort((n,r)=>Ri(n)-Ri(r));if(hs.length=0,Zn){Zn.push(...e);return}for(Zn=e,rs=0;rs<Zn.length;rs++){const n=Zn[rs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Zn=null,rs=0}}const Ri=t=>t.id==null?t.flags&2?-1:1/0:t.id;function fm(t){try{for(rn=0;rn<Rt.length;rn++){const e=Rt[rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;rn<Rt.length;rn++){const e=Rt[rn];e&&(e.flags&=-2)}rn=-1,Rt.length=0,hm(),Go=null,(Rt.length||hs.length)&&fm()}}let Pt=null,dm=null;function zo(t){const e=Pt;return Pt=t,dm=t&&t.type.__scopeId||null,e}function Qo(t,e=Pt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Xo(-1);const i=zo(e);let o;try{o=t(...s)}finally{zo(i),r._d&&Xo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Rr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Vn(),Jt(l,n,8,[t.el,c,t,e]),xn())}}function Do(t,e){if(yt){let n=yt.provides;const r=yt.parent&&yt.parent.provides;r===n&&(n=yt.provides=Object.create(r)),n[t]=e}}function Wt(t,e,n=!1){const r=Hi();if(r||xr){let s=xr?xr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function IE(){return!!(Hi()||xr)}const wE=Symbol.for("v-scx"),AE=()=>Wt(wE);function hi(t,e,n){return pm(t,e,n)}function pm(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,c=Ze({},n),l=e&&r||!e&&i!=="post";let u;if(Ci){if(i==="sync"){const _=AE();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=un,_.resume=un,_.pause=un,_}}const f=yt;c.call=(_,S,k)=>Jt(_,f,S,k);let p=!1;i==="post"?c.scheduler=_=>{Ot(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,S)=>{S?_():nu(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=yE(t,e,c);return Ci&&(u?u.push(m):l&&m()),m}function RE(t,e,n){const r=this.proxy,s=xe(t)?t.includes(".")?mm(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Wi(this),c=pm(s,i.bind(r),n);return o(),c}function mm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const bE=Symbol("_vte"),gm=t=>t.__isTeleport,sn=Symbol("_leaveCb"),zs=Symbol("_enterCb");function _m(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return su(()=>{t.isMounted=!0}),Rm(()=>{t.isUnmounting=!0}),t}const Ht=[Function,Array],ym={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ht,onEnter:Ht,onAfterEnter:Ht,onEnterCancelled:Ht,onBeforeLeave:Ht,onLeave:Ht,onAfterLeave:Ht,onLeaveCancelled:Ht,onBeforeAppear:Ht,onAppear:Ht,onAfterAppear:Ht,onAppearCancelled:Ht},vm=t=>{const e=t.subTree;return e.component?vm(e.component):e},SE={name:"BaseTransition",props:ym,setup(t,{slots:e}){const n=Hi(),r=_m();return()=>{const s=e.default&&ru(e.default(),!0),i=s&&s.length?Em(s):n.subTree?Ym():void 0;if(!i)return;const o=ye(t),{mode:c}=o;if(r.isLeaving)return kc(i);const l=pf(i);if(!l)return kc(i);let u=bi(l,o,r,n,p=>u=p);l.type!==_t&&Ur(l,u);let f=n.subTree&&pf(n.subTree);if(f&&f.type!==_t&&!kr(f,l)&&vm(n).type!==_t){let p=bi(f,o,r,n);if(Ur(f,p),c==="out-in"&&l.type!==_t)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},kc(i);c==="in-out"&&l.type!==_t?p.delayLeave=(m,_,S)=>{const k=Tm(r,f);k[String(f.key)]=f,m[sn]=()=>{_(),m[sn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Em(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==_t){e=n;break}}return e}const PE=SE;function Tm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function bi(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:_,onAfterLeave:S,onLeaveCancelled:k,onBeforeAppear:O,onAppear:q,onAfterAppear:L,onAppearCancelled:F}=e,B=String(t.key),X=Tm(n,t),ne=(y,I)=>{y&&Jt(y,r,9,I)},R=(y,I)=>{const b=I[1];ne(y,I),oe(y)?y.every(w=>w.length<=1)&&b():y.length<=1&&b()},v={mode:o,persisted:c,beforeEnter(y){let I=l;if(!n.isMounted)if(i)I=O||l;else return;y[sn]&&y[sn](!0);const b=X[B];b&&kr(t,b)&&b.el[sn]&&b.el[sn](),ne(I,[y])},enter(y){if(X[B]===t)return;let I=u,b=f,w=p;if(!n.isMounted)if(i)I=q||u,b=L||f,w=F||p;else return;let T=!1;y[zs]=Ke=>{T||(T=!0,Ke?ne(w,[y]):ne(b,[y]),v.delayedLeave&&v.delayedLeave(),y[zs]=void 0)};const Re=y[zs].bind(null,!1);I?R(I,[y,Re]):Re()},leave(y,I){const b=String(t.key);if(y[zs]&&y[zs](!0),n.isUnmounting)return I();ne(m,[y]);let w=!1;y[sn]=Re=>{w||(w=!0,I(),Re?ne(k,[y]):ne(S,[y]),y[sn]=void 0,X[b]===t&&delete X[b])};const T=y[sn].bind(null,!1);X[b]=t,_?R(_,[y,T]):T()},clone(y){const I=bi(y,e,n,r,s);return s&&s(I),I}};return v}function kc(t){if(Da(t))return t=dr(t),t.children=null,t}function pf(t){if(!Da(t))return gm(t.type)&&t.children?Em(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function Ur(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ur(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ru(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===bt?(o.patchFlag&128&&s++,r=r.concat(ru(o.children,e,c))):(e||o.type!==_t)&&r.push(c!=null?dr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Na(t,e){return fe(t)?Ze({name:t.name},e,{setup:t}):t}function cO(){const t=Hi();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function Im(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function mf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Yo=new WeakMap;function fi(t,e,n,r,s=!1){if(oe(t)){t.forEach((k,O)=>fi(k,e&&(oe(e)?e[O]:e),n,r,s));return}if(fs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&fi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?cu(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Ne?c.refs={}:c.refs,p=c.setupState,m=ye(p),_=p===Ne?Dp:k=>mf(f,k)?!1:Se(m,k),S=(k,O)=>!(O&&mf(f,O));if(u!=null&&u!==l){if(gf(e),xe(u))f[u]=null,_(u)&&(p[u]=null);else if(Le(u)){const k=e;S(u,k.k)&&(u.value=null),k.k&&(f[k.k]=null)}}if(fe(l))qi(l,c,12,[o,f]);else{const k=xe(l),O=Le(l);if(k||O){const q=()=>{if(t.f){const L=k?_(l)?p[l]:f[l]:S()||!t.k?l.value:f[t.k];if(s)oe(L)&&Wl(L,i);else if(oe(L))L.includes(i)||L.push(i);else if(k)f[l]=[i],_(l)&&(p[l]=f[l]);else{const F=[i];S(l,t.k)&&(l.value=F),t.k&&(f[t.k]=F)}}else k?(f[l]=o,_(l)&&(p[l]=o)):O&&(S(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const L=()=>{q(),Yo.delete(t)};L.id=-1,Yo.set(t,L),Ot(L,n)}else gf(t),q()}}}function gf(t){const e=Yo.get(t);e&&(e.flags|=8,Yo.delete(t))}Sa().requestIdleCallback;Sa().cancelIdleCallback;const fs=t=>!!t.type.__asyncLoader,Da=t=>t.type.__isKeepAlive;function CE(t,e){wm(t,"a",e)}function kE(t,e){wm(t,"da",e)}function wm(t,e,n=yt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Va(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Da(s.parent.vnode)&&OE(r,e,n,s),s=s.parent}}function OE(t,e,n,r){const s=Va(e,t,r,!0);bm(()=>{Wl(r[e],s)},n)}function Va(t,e,n=yt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Vn();const c=Wi(n),l=Jt(e,n,t,o);return c(),xn(),l});return r?s.unshift(i):s.push(i),i}}const jn=t=>(e,n=yt)=>{(!Ci||t==="sp")&&Va(t,(...r)=>e(...r),n)},NE=jn("bm"),su=jn("m"),DE=jn("bu"),Am=jn("u"),Rm=jn("bum"),bm=jn("um"),VE=jn("sp"),xE=jn("rtg"),LE=jn("rtc");function ME(t,e=yt){Va("ec",t,e)}const Sm="components";function UE(t,e){return Cm(Sm,t,!0,e)||t}const Pm=Symbol.for("v-ndc");function FE(t){return xe(t)?Cm(Sm,t,!1)||t:t||Pm}function Cm(t,e,n=!0,r=!1){const s=Pt||yt;if(s){const i=s.type;{const c=RT(i,!1);if(c&&(c===e||c===Ct(e)||c===ba(Ct(e))))return i}const o=_f(s[t]||i[t],e)||_f(s.appContext[t],e);return!o&&r?i:o}}function _f(t,e){return t&&(t[e]||t[Ct(e)]||t[ba(Ct(e))])}function BE(t,e,n,r){let s;const i=n,o=oe(t);if(o||xe(t)){const c=o&&hn(t);let l=!1,u=!1;c&&(l=!Ft(t),u=Ln(t),t=Ca(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?_s(Yt(t[f])):Yt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}function lO(t,e,n={},r,s){if(Pt.ce||Pt.parent&&fs(Pt.parent)&&Pt.parent.ce){const u=Object.keys(n).length>0;return Sn(),Zo(bt,null,[Je("slot",n,r)],u?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),Sn();const o=i&&km(i(n)),c=n.key||o&&o.key,l=Zo(bt,{key:(c&&!Bt(c)?c:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function km(t){return t.some(e=>Pi(e)?!(e.type===_t||e.type===bt&&!km(e.children)):!0)?t:null}const il=t=>t?Jm(t)?cu(t):il(t.parent):null,di=Ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>il(t.parent),$root:t=>il(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Nm(t),$forceUpdate:t=>t.f||(t.f=()=>{nu(t.update)}),$nextTick:t=>t.n||(t.n=tu.bind(t.proxy)),$watch:t=>RE.bind(t)}),Oc=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Se(t,e),jE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Oc(r,e))return o[e]=1,r[e];if(s!==Ne&&Se(s,e))return o[e]=2,s[e];if(Se(i,e))return o[e]=3,i[e];if(n!==Ne&&Se(n,e))return o[e]=4,n[e];ol&&(o[e]=0)}}const u=di[e];let f,p;if(u)return e==="$attrs"&&mt(t.attrs,"get",""),u(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==Ne&&Se(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Se(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Oc(s,e)?(s[e]=n,!0):r!==Ne&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==Ne&&c[0]!=="$"&&Se(t,c)||Oc(e,c)||Se(i,c)||Se(r,c)||Se(di,c)||Se(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yf(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ol=!0;function $E(t){const e=Nm(t),n=t.proxy,r=t.ctx;ol=!1,e.beforeCreate&&vf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:S,activated:k,deactivated:O,beforeDestroy:q,beforeUnmount:L,destroyed:F,unmounted:B,render:X,renderTracked:ne,renderTriggered:R,errorCaptured:v,serverPrefetch:y,expose:I,inheritAttrs:b,components:w,directives:T,filters:Re}=e;if(u&&qE(u,r,null),o)for(const le in o){const ge=o[le];fe(ge)&&(r[le]=ge.bind(n))}if(s){const le=s.call(n,n);Ae(le)&&(t.data=$i(le))}if(ol=!0,i)for(const le in i){const ge=i[le],Dt=fe(ge)?ge.bind(n,n):fe(ge.get)?ge.get.bind(n,n):un,Gt=!fe(ge)&&fe(ge.set)?ge.set.bind(n):un,jt=St({get:Dt,set:Gt});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>jt.value,set:Me=>jt.value=Me})}if(c)for(const le in c)Om(c[le],r,n,le);if(l){const le=fe(l)?l.call(n):l;Reflect.ownKeys(le).forEach(ge=>{Do(ge,le[ge])})}f&&vf(f,t,"c");function Pe(le,ge){oe(ge)?ge.forEach(Dt=>le(Dt.bind(n))):ge&&le(ge.bind(n))}if(Pe(NE,p),Pe(su,m),Pe(DE,_),Pe(Am,S),Pe(CE,k),Pe(kE,O),Pe(ME,v),Pe(LE,ne),Pe(xE,R),Pe(Rm,L),Pe(bm,B),Pe(VE,y),oe(I))if(I.length){const le=t.exposed||(t.exposed={});I.forEach(ge=>{Object.defineProperty(le,ge,{get:()=>n[ge],set:Dt=>n[ge]=Dt,enumerable:!0})})}else t.exposed||(t.exposed={});X&&t.render===un&&(t.render=X),b!=null&&(t.inheritAttrs=b),w&&(t.components=w),T&&(t.directives=T),y&&Im(t)}function qE(t,e,n=un){oe(t)&&(t=al(t));for(const r in t){const s=t[r];let i;Ae(s)?"default"in s?i=Wt(s.from||r,s.default,!0):i=Wt(s.from||r):i=Wt(s),Le(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function vf(t,e,n){Jt(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Om(t,e,n,r){let s=r.includes(".")?mm(n,r):()=>n[r];if(xe(t)){const i=e[t];fe(i)&&hi(s,i)}else if(fe(t))hi(s,t.bind(n));else if(Ae(t))if(oe(t))t.forEach(i=>Om(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&hi(s,i,t)}}function Nm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Jo(l,u,o,!0)),Jo(l,e,o)),Ae(e)&&i.set(e,l),l}function Jo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Jo(t,i,n,!0),s&&s.forEach(o=>Jo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=HE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const HE={data:Ef,props:Tf,emits:Tf,methods:Zs,computed:Zs,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:Zs,directives:Zs,watch:KE,provide:Ef,inject:WE};function Ef(t,e){return e?t?function(){return Ze(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function WE(t,e){return Zs(al(t),al(e))}function al(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function Zs(t,e){return t?Ze(Object.create(null),t,e):e}function Tf(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:Ze(Object.create(null),yf(t),yf(e??{})):e}function KE(t,e){if(!t)return e;if(!e)return t;const n=Ze(Object.create(null),t);for(const r in e)n[r]=wt(t[r],e[r]);return n}function Dm(){return{app:null,config:{isNativeTag:Dp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let GE=0;function zE(t,e){return function(r,s=null){fe(r)||(r=Ze({},r)),s!=null&&!Ae(s)&&(s=null);const i=Dm(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:GE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ST,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&fe(f.install)?(o.add(f),f.install(u,...p)):fe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const _=u._ceVNode||Je(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,u._container=f,f.__vue_app__=u,cu(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Jt(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=xr;xr=u;try{return f()}finally{xr=p}}};return u}}let xr=null;const QE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ct(e)}Modifiers`]||t[`${Kr(e)}Modifiers`];function YE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&QE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>xe(f)?f.trim():f)),o.number&&(s=n.map(Dv)));let c,l=r[c=Ac(e)]||r[c=Ac(Ct(e))];!l&&i&&(l=r[c=Ac(Kr(e))]),l&&Jt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Jt(u,t,6,s)}}const JE=new WeakMap;function Vm(t,e,n=!1){const r=n?JE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const l=u=>{const f=Vm(u,e,!0);f&&(c=!0,Ze(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ae(t)&&r.set(t,null),null):(oe(i)?i.forEach(l=>o[l]=null):Ze(o,i),Ae(t)&&r.set(t,o),o)}function xa(t,e){return!t||!Ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,Kr(e))||Se(t,e))}function If(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:_,ctx:S,inheritAttrs:k}=t,O=zo(t);let q,L;try{if(n.shapeFlag&4){const B=s||r,X=B;q=an(u.call(X,B,f,p,_,m,S)),L=c}else{const B=e;q=an(B.length>1?B(p,{attrs:c,slots:o,emit:l}):B(p,null)),L=e.props?c:XE(c)}}catch(B){pi.length=0,Oa(B,t,1),q=Je(_t)}let F=q;if(L&&k!==!1){const B=Object.keys(L),{shapeFlag:X}=F;B.length&&X&7&&(i&&B.some(wa)&&(L=ZE(L,i)),F=dr(F,L,!1,!0))}return n.dirs&&(F=dr(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&Ur(F,n.transition),q=F,zo(O),q}const XE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ia(n))&&((e||(e={}))[n]=t[n]);return e},ZE=(t,e)=>{const n={};for(const r in t)(!wa(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function eT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?wf(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(xm(o,r,m)&&!xa(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?wf(r,o,u):!0:!!o;return!1}function wf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(xm(e,t,i)&&!xa(n,i))return!0}return!1}function xm(t,e,n){const r=t[n],s=e[n];return n==="style"&&Ae(r)&&Ae(s)?!Gl(r,s):r!==s}function tT({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Lm={},Mm=()=>Object.create(Lm),Um=t=>Object.getPrototypeOf(t)===Lm;function nT(t,e,n,r=!1){const s={},i=Mm();t.propsDefaults=Object.create(null),Fm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:im(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function rT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=ye(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(xa(t.emitsOptions,m))continue;const _=e[m];if(l)if(Se(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const S=Ct(m);s[S]=cl(l,c,S,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{Fm(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Se(e,p)&&((f=Kr(p))===p||!Se(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=cl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Se(e,p))&&(delete i[p],u=!0)}u&&bn(t.attrs,"set","")}function Fm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(ci(l))continue;const u=e[l];let f;s&&Se(s,f=Ct(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:xa(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=ye(n),u=c||Ne;for(let f=0;f<i.length;f++){const p=i[f];n[p]=cl(s,l,p,u[p],t,!Se(u,p))}}return o}function cl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Se(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Wi(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Kr(n))&&(r=!0))}return r}const sT=new WeakMap;function Bm(t,e,n=!1){const r=n?sT:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!fe(t)){const f=p=>{l=!0;const[m,_]=Bm(p,e,!0);Ze(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ae(t)&&r.set(t,ls),ls;if(oe(i))for(let f=0;f<i.length;f++){const p=Ct(i[f]);Af(p)&&(o[p]=Ne)}else if(i)for(const f in i){const p=Ct(f);if(Af(p)){const m=i[f],_=o[p]=oe(m)||fe(m)?{type:m}:Ze({},m),S=_.type;let k=!1,O=!0;if(oe(S))for(let q=0;q<S.length;++q){const L=S[q],F=fe(L)&&L.name;if(F==="Boolean"){k=!0;break}else F==="String"&&(O=!1)}else k=fe(S)&&S.name==="Boolean";_[0]=k,_[1]=O,(k||Se(_,"default"))&&c.push(p)}}const u=[o,c];return Ae(t)&&r.set(t,u),u}function Af(t){return t[0]!=="$"&&!ci(t)}const iu=t=>t==="_"||t==="_ctx"||t==="$stable",ou=t=>oe(t)?t.map(an):[an(t)],iT=(t,e,n)=>{if(e._n)return e;const r=Qo((...s)=>ou(e(...s)),n);return r._c=!1,r},jm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(iu(s))continue;const i=t[s];if(fe(i))e[s]=iT(s,i,r);else if(i!=null){const o=ou(i);e[s]=()=>o}}},$m=(t,e)=>{const n=ou(e);t.slots.default=()=>n},qm=(t,e,n)=>{for(const r in e)(n||!iu(r))&&(t[r]=e[r])},oT=(t,e,n)=>{const r=t.slots=Mm();if(t.vnode.shapeFlag&32){const s=e._;s?(qm(r,e,n),n&&Up(r,"_",s,!0)):jm(e,r)}else e&&$m(t,e)},aT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:qm(s,e,n):(i=!e.$stable,jm(e,s)),o=e}else e&&($m(t,e),o={default:1});if(i)for(const c in s)!iu(c)&&o[c]==null&&delete s[c]},Ot=fT;function cT(t){return lT(t)}function lT(t,e){const n=Sa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=un,insertStaticContent:S}=t,k=(E,A,P,D=null,M=null,x=null,G=void 0,K=null,H=!!A.dynamicChildren)=>{if(E===A)return;E&&!kr(E,A)&&(D=V(E),Me(E,M,x,!0),E=null),A.patchFlag===-2&&(H=!1,A.dynamicChildren=null);const{type:j,ref:ie,shapeFlag:Q}=A;switch(j){case La:O(E,A,P,D);break;case _t:q(E,A,P,D);break;case Vo:E==null&&L(A,P,D,G);break;case bt:w(E,A,P,D,M,x,G,K,H);break;default:Q&1?X(E,A,P,D,M,x,G,K,H):Q&6?T(E,A,P,D,M,x,G,K,H):(Q&64||Q&128)&&j.process(E,A,P,D,M,x,G,K,H,ee)}ie!=null&&M?fi(ie,E&&E.ref,x,A||E,!A):ie==null&&E&&E.ref!=null&&fi(E.ref,null,x,E,!0)},O=(E,A,P,D)=>{if(E==null)r(A.el=c(A.children),P,D);else{const M=A.el=E.el;A.children!==E.children&&u(M,A.children)}},q=(E,A,P,D)=>{E==null?r(A.el=l(A.children||""),P,D):A.el=E.el},L=(E,A,P,D)=>{[E.el,E.anchor]=S(E.children,A,P,D,E.el,E.anchor)},F=({el:E,anchor:A},P,D)=>{let M;for(;E&&E!==A;)M=m(E),r(E,P,D),E=M;r(A,P,D)},B=({el:E,anchor:A})=>{let P;for(;E&&E!==A;)P=m(E),s(E),E=P;s(A)},X=(E,A,P,D,M,x,G,K,H)=>{if(A.type==="svg"?G="svg":A.type==="math"&&(G="mathml"),E==null)ne(A,P,D,M,x,G,K,H);else{const j=E.el&&E.el._isVueCE?E.el:null;try{j&&j._beginPatch(),y(E,A,M,x,G,K,H)}finally{j&&j._endPatch()}}},ne=(E,A,P,D,M,x,G,K)=>{let H,j;const{props:ie,shapeFlag:Q,transition:te,dirs:ae}=E;if(H=E.el=o(E.type,x,ie&&ie.is,ie),Q&8?f(H,E.children):Q&16&&v(E.children,H,null,D,M,Nc(E,x),G,K),ae&&Rr(E,null,D,"created"),R(H,E,E.scopeId,G,D),ie){for(const pe in ie)pe!=="value"&&!ci(pe)&&i(H,pe,null,ie[pe],x,D);"value"in ie&&i(H,"value",null,ie.value,x),(j=ie.onVnodeBeforeMount)&&tn(j,D,E)}ae&&Rr(E,null,D,"beforeMount");const ce=uT(M,te);ce&&te.beforeEnter(H),r(H,A,P),((j=ie&&ie.onVnodeMounted)||ce||ae)&&Ot(()=>{try{j&&tn(j,D,E),ce&&te.enter(H),ae&&Rr(E,null,D,"mounted")}finally{}},M)},R=(E,A,P,D,M)=>{if(P&&_(E,P),D)for(let x=0;x<D.length;x++)_(E,D[x]);if(M){let x=M.subTree;if(A===x||Gm(x.type)&&(x.ssContent===A||x.ssFallback===A)){const G=M.vnode;R(E,G,G.scopeId,G.slotScopeIds,M.parent)}}},v=(E,A,P,D,M,x,G,K,H=0)=>{for(let j=H;j<E.length;j++){const ie=E[j]=K?Rn(E[j]):an(E[j]);k(null,ie,A,P,D,M,x,G,K)}},y=(E,A,P,D,M,x,G)=>{const K=A.el=E.el;let{patchFlag:H,dynamicChildren:j,dirs:ie}=A;H|=E.patchFlag&16;const Q=E.props||Ne,te=A.props||Ne;let ae;if(P&&br(P,!1),(ae=te.onVnodeBeforeUpdate)&&tn(ae,P,A,E),ie&&Rr(A,E,P,"beforeUpdate"),P&&br(P,!0),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&f(K,""),j?I(E.dynamicChildren,j,K,P,D,Nc(A,M),x):G||ge(E,A,K,null,P,D,Nc(A,M),x,!1),H>0){if(H&16)b(K,Q,te,P,M);else if(H&2&&Q.class!==te.class&&i(K,"class",null,te.class,M),H&4&&i(K,"style",Q.style,te.style,M),H&8){const ce=A.dynamicProps;for(let pe=0;pe<ce.length;pe++){const we=ce[pe],Fe=Q[we],ze=te[we];(ze!==Fe||we==="value")&&i(K,we,Fe,ze,M,P)}}H&1&&E.children!==A.children&&f(K,A.children)}else!G&&j==null&&b(K,Q,te,P,M);((ae=te.onVnodeUpdated)||ie)&&Ot(()=>{ae&&tn(ae,P,A,E),ie&&Rr(A,E,P,"updated")},D)},I=(E,A,P,D,M,x,G)=>{for(let K=0;K<A.length;K++){const H=E[K],j=A[K],ie=H.el&&(H.type===bt||!kr(H,j)||H.shapeFlag&198)?p(H.el):P;k(H,j,ie,null,D,M,x,G,!0)}},b=(E,A,P,D,M)=>{if(A!==P){if(A!==Ne)for(const x in A)!ci(x)&&!(x in P)&&i(E,x,A[x],null,M,D);for(const x in P){if(ci(x))continue;const G=P[x],K=A[x];G!==K&&x!=="value"&&i(E,x,K,G,M,D)}"value"in P&&i(E,"value",A.value,P.value,M)}},w=(E,A,P,D,M,x,G,K,H)=>{const j=A.el=E?E.el:c(""),ie=A.anchor=E?E.anchor:c("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:ae}=A;ae&&(K=K?K.concat(ae):ae),E==null?(r(j,P,D),r(ie,P,D),v(A.children||[],P,ie,M,x,G,K,H)):Q>0&&Q&64&&te&&E.dynamicChildren&&E.dynamicChildren.length===te.length?(I(E.dynamicChildren,te,P,M,x,G,K),(A.key!=null||M&&A===M.subTree)&&Hm(E,A,!0)):ge(E,A,P,ie,M,x,G,K,H)},T=(E,A,P,D,M,x,G,K,H)=>{A.slotScopeIds=K,E==null?A.shapeFlag&512?M.ctx.activate(A,P,D,G,H):Re(A,P,D,M,x,G,H):Ke(E,A,H)},Re=(E,A,P,D,M,x,G)=>{const K=E.component=ET(E,D,M);if(Da(E)&&(K.ctx.renderer=ee),TT(K,!1,G),K.asyncDep){if(M&&M.registerDep(K,Pe,G),!E.el){const H=K.subTree=Je(_t);q(null,H,A,P),E.placeholder=H.el}}else Pe(K,E,A,P,M,x,G)},Ke=(E,A,P)=>{const D=A.component=E.component;if(eT(E,A,P))if(D.asyncDep&&!D.asyncResolved){le(D,A,P);return}else D.next=A,D.update();else A.el=E.el,D.vnode=A},Pe=(E,A,P,D,M,x,G)=>{const K=()=>{if(E.isMounted){let{next:Q,bu:te,u:ae,parent:ce,vnode:pe}=E;{const lt=Wm(E);if(lt){Q&&(Q.el=pe.el,le(E,Q,G)),lt.asyncDep.then(()=>{Ot(()=>{E.isUnmounted||j()},M)});return}}let we=Q,Fe;br(E,!1),Q?(Q.el=pe.el,le(E,Q,G)):Q=pe,te&&Rc(te),(Fe=Q.props&&Q.props.onVnodeBeforeUpdate)&&tn(Fe,ce,Q,pe),br(E,!0);const ze=If(E),$t=E.subTree;E.subTree=ze,k($t,ze,p($t.el),V($t),E,M,x),Q.el=ze.el,we===null&&tT(E,ze.el),ae&&Ot(ae,M),(Fe=Q.props&&Q.props.onVnodeUpdated)&&Ot(()=>tn(Fe,ce,Q,pe),M)}else{let Q;const{el:te,props:ae}=A,{bm:ce,m:pe,parent:we,root:Fe,type:ze}=E,$t=fs(A);br(E,!1),ce&&Rc(ce),!$t&&(Q=ae&&ae.onVnodeBeforeMount)&&tn(Q,we,A),br(E,!0);{Fe.ce&&Fe.ce._hasShadowRoot()&&Fe.ce._injectChildStyle(ze,E.parent?E.parent.type:void 0);const lt=E.subTree=If(E);k(null,lt,P,D,E,M,x),A.el=lt.el}if(pe&&Ot(pe,M),!$t&&(Q=ae&&ae.onVnodeMounted)){const lt=A;Ot(()=>tn(Q,we,lt),M)}(A.shapeFlag&256||we&&fs(we.vnode)&&we.vnode.shapeFlag&256)&&E.a&&Ot(E.a,M),E.isMounted=!0,A=P=D=null}};E.scope.on();const H=E.effect=new Wp(K);E.scope.off();const j=E.update=H.run.bind(H),ie=E.job=H.runIfDirty.bind(H);ie.i=E,ie.id=E.uid,H.scheduler=()=>nu(ie),br(E,!0),j()},le=(E,A,P)=>{A.component=E;const D=E.vnode.props;E.vnode=A,E.next=null,rT(E,A.props,D,P),aT(E,A.children,P),Vn(),df(E),xn()},ge=(E,A,P,D,M,x,G,K,H=!1)=>{const j=E&&E.children,ie=E?E.shapeFlag:0,Q=A.children,{patchFlag:te,shapeFlag:ae}=A;if(te>0){if(te&128){Gt(j,Q,P,D,M,x,G,K,H);return}else if(te&256){Dt(j,Q,P,D,M,x,G,K,H);return}}ae&8?(ie&16&&kt(j,M,x),Q!==j&&f(P,Q)):ie&16?ae&16?Gt(j,Q,P,D,M,x,G,K,H):kt(j,M,x,!0):(ie&8&&f(P,""),ae&16&&v(Q,P,D,M,x,G,K,H))},Dt=(E,A,P,D,M,x,G,K,H)=>{E=E||ls,A=A||ls;const j=E.length,ie=A.length,Q=Math.min(j,ie);let te;for(te=0;te<Q;te++){const ae=A[te]=H?Rn(A[te]):an(A[te]);k(E[te],ae,P,null,M,x,G,K,H)}j>ie?kt(E,M,x,!0,!1,Q):v(A,P,D,M,x,G,K,H,Q)},Gt=(E,A,P,D,M,x,G,K,H)=>{let j=0;const ie=A.length;let Q=E.length-1,te=ie-1;for(;j<=Q&&j<=te;){const ae=E[j],ce=A[j]=H?Rn(A[j]):an(A[j]);if(kr(ae,ce))k(ae,ce,P,null,M,x,G,K,H);else break;j++}for(;j<=Q&&j<=te;){const ae=E[Q],ce=A[te]=H?Rn(A[te]):an(A[te]);if(kr(ae,ce))k(ae,ce,P,null,M,x,G,K,H);else break;Q--,te--}if(j>Q){if(j<=te){const ae=te+1,ce=ae<ie?A[ae].el:D;for(;j<=te;)k(null,A[j]=H?Rn(A[j]):an(A[j]),P,ce,M,x,G,K,H),j++}}else if(j>te)for(;j<=Q;)Me(E[j],M,x,!0),j++;else{const ae=j,ce=j,pe=new Map;for(j=ce;j<=te;j++){const rt=A[j]=H?Rn(A[j]):an(A[j]);rt.key!=null&&pe.set(rt.key,j)}let we,Fe=0;const ze=te-ce+1;let $t=!1,lt=0;const Hn=new Array(ze);for(j=0;j<ze;j++)Hn[j]=0;for(j=ae;j<=Q;j++){const rt=E[j];if(Fe>=ze){Me(rt,M,x,!0);continue}let qt;if(rt.key!=null)qt=pe.get(rt.key);else for(we=ce;we<=te;we++)if(Hn[we-ce]===0&&kr(rt,A[we])){qt=we;break}qt===void 0?Me(rt,M,x,!0):(Hn[qt-ce]=j+1,qt>=lt?lt=qt:$t=!0,k(rt,A[qt],P,null,M,x,G,K,H),Fe++)}const Vs=$t?hT(Hn):ls;for(we=Vs.length-1,j=ze-1;j>=0;j--){const rt=ce+j,qt=A[rt],oo=A[rt+1],Yr=rt+1<ie?oo.el||Km(oo):D;Hn[j]===0?k(null,qt,P,Yr,M,x,G,K,H):$t&&(we<0||j!==Vs[we]?jt(qt,P,Yr,2):we--)}}},jt=(E,A,P,D,M=null)=>{const{el:x,type:G,transition:K,children:H,shapeFlag:j}=E;if(j&6){jt(E.component.subTree,A,P,D);return}if(j&128){E.suspense.move(A,P,D);return}if(j&64){G.move(E,A,P,ee);return}if(G===bt){r(x,A,P);for(let Q=0;Q<H.length;Q++)jt(H[Q],A,P,D);r(E.anchor,A,P);return}if(G===Vo){F(E,A,P);return}if(D!==2&&j&1&&K)if(D===0)K.beforeEnter(x),r(x,A,P),Ot(()=>K.enter(x),M);else{const{leave:Q,delayLeave:te,afterLeave:ae}=K,ce=()=>{E.ctx.isUnmounted?s(x):r(x,A,P)},pe=()=>{x._isLeaving&&x[sn](!0),Q(x,()=>{ce(),ae&&ae()})};te?te(x,ce,pe):pe()}else r(x,A,P)},Me=(E,A,P,D=!1,M=!1)=>{const{type:x,props:G,ref:K,children:H,dynamicChildren:j,shapeFlag:ie,patchFlag:Q,dirs:te,cacheIndex:ae,memo:ce}=E;if(Q===-2&&(M=!1),K!=null&&(Vn(),fi(K,null,P,E,!0),xn()),ae!=null&&(A.renderCache[ae]=void 0),ie&256){A.ctx.deactivate(E);return}const pe=ie&1&&te,we=!fs(E);let Fe;if(we&&(Fe=G&&G.onVnodeBeforeUnmount)&&tn(Fe,A,E),ie&6)Vt(E.component,P,D);else{if(ie&128){E.suspense.unmount(P,D);return}pe&&Rr(E,null,A,"beforeUnmount"),ie&64?E.type.remove(E,A,P,ee,D):j&&!j.hasOnce&&(x!==bt||Q>0&&Q&64)?kt(j,A,P,!1,!0):(x===bt&&Q&384||!M&&ie&16)&&kt(H,A,P),D&&Ue(E)}const ze=ce!=null&&ae==null;(we&&(Fe=G&&G.onVnodeUnmounted)||pe||ze)&&Ot(()=>{Fe&&tn(Fe,A,E),pe&&Rr(E,null,A,"unmounted"),ze&&(E.el=null)},P)},Ue=E=>{const{type:A,el:P,anchor:D,transition:M}=E;if(A===bt){qn(P,D);return}if(A===Vo){B(E);return}const x=()=>{s(P),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(E.shapeFlag&1&&M&&!M.persisted){const{leave:G,delayLeave:K}=M,H=()=>G(P,x);K?K(E.el,x,H):H()}else x()},qn=(E,A)=>{let P;for(;E!==A;)P=m(E),s(E),E=P;s(A)},Vt=(E,A,P)=>{const{bum:D,scope:M,job:x,subTree:G,um:K,m:H,a:j}=E;Rf(H),Rf(j),D&&Rc(D),M.stop(),x&&(x.flags|=8,Me(G,E,A,P)),K&&Ot(K,A),Ot(()=>{E.isUnmounted=!0},A)},kt=(E,A,P,D=!1,M=!1,x=0)=>{for(let G=x;G<E.length;G++)Me(E[G],A,P,D,M)},V=E=>{if(E.shapeFlag&6)return V(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const A=m(E.anchor||E.el),P=A&&A[bE];return P?m(P):A};let Y=!1;const z=(E,A,P)=>{let D;E==null?A._vnode&&(Me(A._vnode,null,null,!0),D=A._vnode.component):k(A._vnode||null,E,A,null,null,null,P),A._vnode=E,Y||(Y=!0,df(D),hm(),Y=!1)},ee={p:k,um:Me,m:jt,r:Ue,mt:Re,mc:v,pc:ge,pbc:I,n:V,o:t};return{render:z,hydrate:void 0,createApp:zE(z)}}function Nc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function br({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function uT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Hm(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Rn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Hm(o,c)),c.type===La&&(c.patchFlag===-1&&(c=s[i]=Rn(c)),c.el=o.el),c.type===_t&&!c.el&&(c.el=o.el)}}function hT(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Wm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wm(e)}function Rf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Km(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Km(e.subTree):null}const Gm=t=>t.__isSuspense;function fT(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):TE(t)}const bt=Symbol.for("v-fgt"),La=Symbol.for("v-txt"),_t=Symbol.for("v-cmt"),Vo=Symbol.for("v-stc"),pi=[];let Lt=null;function Sn(t=!1){pi.push(Lt=t?null:[])}function dT(){pi.pop(),Lt=pi[pi.length-1]||null}let Si=1;function Xo(t,e=!1){Si+=t,t<0&&Lt&&e&&(Lt.hasOnce=!0)}function zm(t){return t.dynamicChildren=Si>0?Lt||ls:null,dT(),Si>0&&Lt&&Lt.push(t),t}function ei(t,e,n,r,s,i){return zm(Or(t,e,n,r,s,i,!0))}function Zo(t,e,n,r,s){return zm(Je(t,e,n,r,s,!0))}function Pi(t){return t?t.__v_isVNode===!0:!1}function kr(t,e){return t.type===e.type&&t.key===e.key}const Qm=({key:t})=>t??null,xo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||Le(t)||fe(t)?{i:Pt,r:t,k:e,f:!!n}:t:null);function Or(t,e=null,n=null,r=0,s=null,i=t===bt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qm(e),ref:e&&xo(e),scopeId:dm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pt};return c?(au(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=xe(n)?8:16),Si>0&&!o&&Lt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Lt.push(l),l}const Je=pT;function pT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Pm)&&(t=_t),Pi(t)){const c=dr(t,e,!0);return n&&au(c,n),Si>0&&!i&&Lt&&(c.shapeFlag&6?Lt[Lt.indexOf(t)]=c:Lt.push(c)),c.patchFlag=-2,c}if(bT(t)&&(t=t.__vccOpts),e){e=mT(e);let{class:c,style:l}=e;c&&!xe(c)&&(e.class=Pa(c)),Ae(l)&&(ka(l)&&!oe(l)&&(l=Ze({},l)),e.style=Kl(l))}const o=xe(t)?1:Gm(t)?128:gm(t)?64:Ae(t)?4:fe(t)?2:0;return Or(t,e,n,r,s,o,i,!0)}function mT(t){return t?ka(t)||Um(t)?Ze({},t):t:null}function dr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?_T(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Qm(u),ref:e&&e.ref?n&&i?oe(i)?i.concat(xo(e)):[i,xo(e)]:xo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&dr(t.ssContent),ssFallback:t.ssFallback&&dr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Ur(f,l.clone(f)),f}function gT(t=" ",e=0){return Je(La,null,t,e)}function uO(t,e){const n=Je(Vo,null,t);return n.staticCount=e,n}function Ym(t="",e=!1){return e?(Sn(),Zo(_t,null,t)):Je(_t,null,t)}function an(t){return t==null||typeof t=="boolean"?Je(_t):oe(t)?Je(bt,null,t.slice()):Pi(t)?Rn(t):Je(La,null,String(t))}function Rn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:dr(t)}function au(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),au(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Um(e)?e._ctx=Pt:s===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Pt},n=32):(e=String(e),r&64?(n=16,e=[gT(e)]):n=8);t.children=e,t.shapeFlag|=n}function _T(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Pa([e.class,r.class]));else if(s==="style")e.style=Kl([e.style,r.style]);else if(Ia(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!wa(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function tn(t,e,n,r=null){Jt(t,e,7,[n,r])}const yT=Dm();let vT=0;function ET(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||yT,i={uid:vT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $p(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bm(r,s),emitsOptions:Vm(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=YE.bind(null,i),t.ce&&t.ce(i),i}let yt=null;const Hi=()=>yt||Pt;let ea,ll;{const t=Sa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ea=e("__VUE_INSTANCE_SETTERS__",n=>yt=n),ll=e("__VUE_SSR_SETTERS__",n=>Ci=n)}const Wi=t=>{const e=yt;return ea(t),t.scope.on(),()=>{t.scope.off(),ea(e)}},bf=()=>{yt&&yt.scope.off(),ea(null)};function Jm(t){return t.vnode.shapeFlag&4}let Ci=!1;function TT(t,e=!1,n=!1){e&&ll(e);const{props:r,children:s}=t.vnode,i=Jm(t);nT(t,r,i,e),oT(t,s,n||e);const o=i?IT(t,e):void 0;return e&&ll(!1),o}function IT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,jE);const{setup:r}=n;if(r){Vn();const s=t.setupContext=r.length>1?AT(t):null,i=Wi(t),o=qi(r,t,0,[t.props,s]),c=xp(o);if(xn(),i(),(c||t.sp)&&!fs(t)&&Im(t),c){if(o.then(bf,bf),e)return o.then(l=>{Sf(t,l)}).catch(l=>{Oa(l,t,0)});t.asyncDep=o}else Sf(t,o)}else Xm(t)}function Sf(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=am(e)),Xm(t)}function Xm(t,e,n){const r=t.type;t.render||(t.render=r.render||un);{const s=Wi(t);Vn();try{$E(t)}finally{xn(),s()}}}const wT={get(t,e){return mt(t,"get",""),t[e]}};function AT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,wT),slots:t.slots,emit:t.emit,expose:e}}function cu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(am(eu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in di)return di[n](t)},has(e,n){return n in e||n in di}})):t.proxy}function RT(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function bT(t){return fe(t)&&"__vccOpts"in t}const St=(t,e)=>gE(t,e,Ci);function lu(t,e,n){try{Xo(-1);const r=arguments.length;return r===2?Ae(e)&&!oe(e)?Pi(e)?Je(t,null,[e]):Je(t,e):Je(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Pi(n)&&(n=[n]),Je(t,e,n))}finally{Xo(1)}}const ST="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ul;const Pf=typeof window<"u"&&window.trustedTypes;if(Pf)try{ul=Pf.createPolicy("vue",{createHTML:t=>t})}catch{}const Zm=ul?t=>ul.createHTML(t):t=>t,PT="http://www.w3.org/2000/svg",CT="http://www.w3.org/1998/Math/MathML",An=typeof document<"u"?document:null,Cf=An&&An.createElement("template"),kT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?An.createElementNS(PT,t):e==="mathml"?An.createElementNS(CT,t):n?An.createElement(t,{is:n}):An.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Cf.innerHTML=Zm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Cf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},zn="transition",Qs="animation",ys=Symbol("_vtc"),eg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},tg=Ze({},ym,eg),OT=t=>(t.displayName="Transition",t.props=tg,t),NT=OT((t,{slots:e})=>lu(PE,ng(t),e)),Sr=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},kf=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function ng(t){const e={};for(const w in t)w in eg||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,S=DT(s),k=S&&S[0],O=S&&S[1],{onBeforeEnter:q,onEnter:L,onEnterCancelled:F,onLeave:B,onLeaveCancelled:X,onBeforeAppear:ne=q,onAppear:R=L,onAppearCancelled:v=F}=e,y=(w,T,Re,Ke)=>{w._enterCancelled=Ke,Jn(w,T?f:c),Jn(w,T?u:o),Re&&Re()},I=(w,T)=>{w._isLeaving=!1,Jn(w,p),Jn(w,_),Jn(w,m),T&&T()},b=w=>(T,Re)=>{const Ke=w?R:L,Pe=()=>y(T,w,Re);Sr(Ke,[T,Pe]),Of(()=>{Jn(T,w?l:i),nn(T,w?f:c),kf(Ke)||Nf(T,r,k,Pe)})};return Ze(e,{onBeforeEnter(w){Sr(q,[w]),nn(w,i),nn(w,o)},onBeforeAppear(w){Sr(ne,[w]),nn(w,l),nn(w,u)},onEnter:b(!1),onAppear:b(!0),onLeave(w,T){w._isLeaving=!0;const Re=()=>I(w,T);nn(w,p),w._enterCancelled?(nn(w,m),hl(w)):(hl(w),nn(w,m)),Of(()=>{w._isLeaving&&(Jn(w,p),nn(w,_),kf(B)||Nf(w,r,O,Re))}),Sr(B,[w,Re])},onEnterCancelled(w){y(w,!1,void 0,!0),Sr(F,[w])},onAppearCancelled(w){y(w,!0,void 0,!0),Sr(v,[w])},onLeaveCancelled(w){I(w),Sr(X,[w])}})}function DT(t){if(t==null)return null;if(Ae(t))return[Dc(t.enter),Dc(t.leave)];{const e=Dc(t);return[e,e]}}function Dc(t){return Vv(t)}function nn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ys]||(t[ys]=new Set)).add(e)}function Jn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ys];n&&(n.delete(e),n.size||(t[ys]=void 0))}function Of(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let VT=0;function Nf(t,e,n,r){const s=t._endId=++VT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=rg(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,m),i()},m=_=>{_.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(u,m)}function rg(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${zn}Delay`),i=r(`${zn}Duration`),o=Df(s,i),c=r(`${Qs}Delay`),l=r(`${Qs}Duration`),u=Df(c,l);let f=null,p=0,m=0;e===zn?o>0&&(f=zn,p=o,m=i.length):e===Qs?u>0&&(f=Qs,p=u,m=l.length):(p=Math.max(o,u),f=p>0?o>u?zn:Qs:null,m=f?f===zn?i.length:l.length:0);const _=f===zn&&/\b(?:transform|all)(?:,|$)/.test(r(`${zn}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:_}}function Df(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Vf(n)+Vf(t[r])))}function Vf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function hl(t){return(t?t.ownerDocument:document).body.offsetHeight}function xT(t,e,n){const r=t[ys];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const xf=Symbol("_vod"),LT=Symbol("_vsh"),MT=Symbol(""),UT=/(?:^|;)\s*display\s*:/;function FT(t,e,n){const r=t.style,s=xe(n);let i=!1;if(n&&!s){if(e)if(xe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&ti(r,c,"")}else for(const o in e)n[o]==null&&ti(r,o,"");for(const o in n){o==="display"&&(i=!0);const c=n[o];c!=null?jT(t,o,!xe(e)&&e?e[o]:void 0,c)||ti(r,o,c):ti(r,o,"")}}else if(s){if(e!==n){const o=r[MT];o&&(n+=";"+o),r.cssText=n,i=UT.test(n)}}else e&&t.removeAttribute("style");xf in t&&(t[xf]=i?r.display:"",t[LT]&&(r.display="none"))}const Lf=/\s*!important$/;function ti(t,e,n){if(oe(n))n.forEach(r=>ti(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=BT(t,e);Lf.test(n)?t.setProperty(Kr(r),n.replace(Lf,""),"important"):t[r]=n}}const Mf=["Webkit","Moz","ms"],Vc={};function BT(t,e){const n=Vc[e];if(n)return n;let r=Ct(e);if(r!=="filter"&&r in t)return Vc[e]=r;r=ba(r);for(let s=0;s<Mf.length;s++){const i=Mf[s]+r;if(i in t)return Vc[e]=i}return e}function jT(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&xe(r)&&n===r}const Uf="http://www.w3.org/1999/xlink";function Ff(t,e,n,r,s,i=Bv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Uf,e.slice(6,e.length)):t.setAttributeNS(Uf,e,n):n==null||i&&!Fp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Bt(n)?String(n):n)}function Bf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Zm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Fp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function $T(t,e,n,r){t.addEventListener(e,n,r)}function qT(t,e,n,r){t.removeEventListener(e,n,r)}const jf=Symbol("_vei");function HT(t,e,n,r,s=null){const i=t[jf]||(t[jf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=WT(e);if(r){const u=i[e]=zT(r,s);$T(t,c,u,l)}else o&&(qT(t,c,o,l),i[e]=void 0)}}const $f=/(?:Once|Passive|Capture)$/;function WT(t){let e;if($f.test(t)){e={};let r;for(;r=t.match($f);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kr(t.slice(2)),e]}let xc=0;const KT=Promise.resolve(),GT=()=>xc||(KT.then(()=>xc=0),xc=Date.now());function zT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Jt(QT(r,n.value),e,5,[r])};return n.value=t,n.attached=GT(),n}function QT(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const qf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,YT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?xT(t,r,o):e==="style"?FT(t,n,r):Ia(e)?wa(e)||HT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):JT(t,e,r,o))?(Bf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ff(t,e,r,o,i,e!=="value")):t._isVueCE&&(XT(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!xe(r)))?Bf(t,Ct(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ff(t,e,r,o))};function JT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&qf(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qf(e)&&xe(n)?!1:e in t}function XT(t,e){const n=t._def.props;if(!n)return!1;const r=Ct(e);return Array.isArray(n)?n.some(s=>Ct(s)===r):Object.keys(n).some(s=>Ct(s)===r)}const sg=new WeakMap,ig=new WeakMap,ta=Symbol("_moveCb"),Hf=Symbol("_enterCb"),ZT=t=>(delete t.props.mode,t),eI=ZT({name:"TransitionGroup",props:Ze({},tg,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Hi(),r=_m();let s,i;return Am(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!iI(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(nI),s.forEach(rI);const c=s.filter(sI);hl(n.vnode.el),c.forEach(l=>{const u=l.el,f=u.style;nn(u,o),f.transform=f.webkitTransform=f.transitionDuration="";const p=u[ta]=m=>{m&&m.target!==u||(!m||m.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",p),u[ta]=null,Jn(u,o))};u.addEventListener("transitionend",p)}),s=[]}),()=>{const o=ye(t),c=ng(o);let l=o.tag||bt;if(s=[],i)for(let u=0;u<i.length;u++){const f=i[u];f.el&&f.el instanceof Element&&(s.push(f),Ur(f,bi(f,c,r,n)),sg.set(f,og(f.el)))}i=e.default?ru(e.default()):[];for(let u=0;u<i.length;u++){const f=i[u];f.key!=null&&Ur(f,bi(f,c,r,n))}return Je(l,null,i)}}}),tI=eI;function nI(t){const e=t.el;e[ta]&&e[ta](),e[Hf]&&e[Hf]()}function rI(t){ig.set(t,og(t.el))}function sI(t){const e=sg.get(t),n=ig.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el,o=i.style,c=i.getBoundingClientRect();let l=1,u=1;return i.offsetWidth&&(l=c.width/i.offsetWidth),i.offsetHeight&&(u=c.height/i.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(u)||u===0)&&(u=1),Math.abs(l-1)<.01&&(l=1),Math.abs(u-1)<.01&&(u=1),o.transform=o.webkitTransform=`translate(${r/l}px,${s/u}px)`,o.transitionDuration="0s",t}}function og(t){const e=t.getBoundingClientRect();return{left:e.left,top:e.top}}function iI(t,e,n){const r=t.cloneNode(),s=t[ys];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=rg(r);return i.removeChild(r),o}const oI=["ctrl","shift","alt","meta"],aI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>oI.some(n=>t[`${n}Key`]&&!e.includes(n))},hO=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=aI[e[o]];if(c&&c(s,e))return}return t(s,...i)})},cI=Ze({patchProp:YT},kT);let Wf;function lI(){return Wf||(Wf=cT(cI))}const uI=(...t)=>{const e=lI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=fI(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,hI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function hI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function fI(t){return xe(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ag;const Ma=t=>ag=t,cg=Symbol();function fl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var mi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(mi||(mi={}));function dI(){const t=qp(!0),e=t.run(()=>ar({}));let n=[],r=[];const s=eu({install(i){Ma(s),s._a=i,i.provide(cg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const lg=()=>{};function Kf(t,e,n,r=lg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Hp()&&$v(s),s}function ns(t,...e){t.slice().forEach(n=>{n(...e)})}const pI=t=>t(),Gf=Symbol(),Lc=Symbol();function dl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];fl(s)&&fl(r)&&t.hasOwnProperty(n)&&!Le(r)&&!hn(r)?t[n]=dl(s,r):t[n]=r}return t}const mI=Symbol();function gI(t){return!fl(t)||!t.hasOwnProperty(mI)}const{assign:Xn}=Object;function _I(t){return!!(Le(t)&&t.effect)}function yI(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=hE(n.state.value[t]);return Xn(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=eu(St(()=>{Ma(n);const _=n._s.get(t);return o[m].call(_,_)})),p),{}))}return l=ug(t,u,e,n,r,!0),l}function ug(t,e,n={},r,s,i){let o;const c=Xn({actions:{}},n),l={deep:!0};let u,f,p=[],m=[],_;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={});let k;function O(v){let y;u=f=!1,typeof v=="function"?(v(r.state.value[t]),y={type:mi.patchFunction,storeId:t,events:_}):(dl(r.state.value[t],v),y={type:mi.patchObject,payload:v,storeId:t,events:_});const I=k=Symbol();tu().then(()=>{k===I&&(u=!0)}),f=!0,ns(p,y,r.state.value[t])}const q=i?function(){const{state:y}=n,I=y?y():{};this.$patch(b=>{Xn(b,I)})}:lg;function L(){o.stop(),p=[],m=[],r._s.delete(t)}const F=(v,y="")=>{if(Gf in v)return v[Lc]=y,v;const I=function(){Ma(r);const b=Array.from(arguments),w=[],T=[];function Re(le){w.push(le)}function Ke(le){T.push(le)}ns(m,{args:b,name:I[Lc],store:X,after:Re,onError:Ke});let Pe;try{Pe=v.apply(this&&this.$id===t?this:X,b)}catch(le){throw ns(T,le),le}return Pe instanceof Promise?Pe.then(le=>(ns(w,le),le)).catch(le=>(ns(T,le),Promise.reject(le))):(ns(w,Pe),Pe)};return I[Gf]=!0,I[Lc]=y,I},B={_p:r,$id:t,$onAction:Kf.bind(null,m),$patch:O,$reset:q,$subscribe(v,y={}){const I=Kf(p,v,y.detached,()=>b()),b=o.run(()=>hi(()=>r.state.value[t],w=>{(y.flush==="sync"?f:u)&&v({storeId:t,type:mi.direct,events:_},w)},Xn({},l,y)));return I},$dispose:L},X=$i(B);r._s.set(t,X);const R=(r._a&&r._a.runWithContext||pI)(()=>r._e.run(()=>(o=qp()).run(()=>e({action:F}))));for(const v in R){const y=R[v];if(Le(y)&&!_I(y)||hn(y))i||(S&&gI(y)&&(Le(y)?y.value=S[v]:dl(y,S[v])),r.state.value[t][v]=y);else if(typeof y=="function"){const I=F(y,v);R[v]=I,c.actions[v]=y}}return Xn(X,R),Xn(ye(X),R),Object.defineProperty(X,"$state",{get:()=>r.state.value[t],set:v=>{O(y=>{Xn(y,v)})}}),r._p.forEach(v=>{Xn(X,o.run(()=>v({store:X,app:r._a,pinia:r,options:c})))}),S&&i&&n.hydrate&&n.hydrate(X.$state,S),u=!0,f=!0,X}/*! #__NO_SIDE_EFFECTS__ */function hg(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(c,l){const u=IE();return c=c||(u?Wt(cg,null):null),c&&Ma(c),c=ag,c._s.has(r)||(i?ug(r,e,s,c):yI(r,s,c)),c._s.get(r)}return o.$id=r,o}function vI(t){{const e=ye(t),n={};for(const r in e){const s=e[r];s.effect?n[r]=St({get:()=>t[r],set(i){t[r]=i}}):(Le(s)||hn(s))&&(n[r]=pE(t,r))}return n}}var zf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},EI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},dg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):EI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new TI;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const II=function(t){const e=fg(t);return dg.encodeByteArray(e,!0)},na=function(t){return II(t).replace(/\./g,"")},pg=function(t){try{return dg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=()=>wI().__FIREBASE_DEFAULTS__,RI=()=>{if(typeof process>"u"||typeof zf>"u")return;const t=zf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pg(t[1]);return e&&JSON.parse(e)},Ua=()=>{try{return AI()||RI()||bI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mg=t=>{var e,n;return(n=(e=Ua())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gg=t=>{const e=mg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_g=()=>{var t;return(t=Ua())===null||t===void 0?void 0:t.config},yg=t=>{var e;return(e=Ua())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[na(JSON.stringify(n)),na(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function CI(){var t;const e=(t=Ua())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function OI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DI(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VI(){return!CI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xI(){try{return typeof indexedDB=="object"}catch{return!1}}function LI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=MI,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ki.prototype.create)}}class Ki{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?UI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new vn(s,c,r)}}function UI(t,e){return t.replace(FI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const FI=/\{\$([^}]+)}/g;function BI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ra(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Qf(i)&&Qf(o)){if(!ra(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ni(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ri(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jI(t,e){const n=new $I(t,e);return n.subscribe.bind(n)}class $I{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Mc),s.error===void 0&&(s.error=Mc),s.complete===void 0&&(s.complete=Mc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t){return t&&t._delegate?t._delegate:t}class pr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new SI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KI(e))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cr){return this.instances.has(e)}getOptions(e=Cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cr){return this.component?this.component.multipleInstances?e:Cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WI(t){return t===Cr?void 0:t}function KI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const zI={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},QI=ve.INFO,YI={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},JI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=YI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uu{constructor(e){this.name=e,this._logLevel=QI,this._logHandler=JI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const XI=(t,e)=>e.some(n=>t instanceof n);let Yf,Jf;function ZI(){return Yf||(Yf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ew(){return Jf||(Jf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eg=new WeakMap,pl=new WeakMap,Tg=new WeakMap,Uc=new WeakMap,hu=new WeakMap;function tw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(lr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Eg.set(n,t)}).catch(()=>{}),hu.set(e,t),e}function nw(t){if(pl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});pl.set(t,e)}let ml={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Tg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rw(t){ml=t(ml)}function sw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fc(this),e,...n);return Tg.set(r,e.sort?e.sort():[e]),lr(r)}:ew().includes(t)?function(...e){return t.apply(Fc(this),e),lr(Eg.get(this))}:function(...e){return lr(t.apply(Fc(this),e))}}function iw(t){return typeof t=="function"?sw(t):(t instanceof IDBTransaction&&nw(t),XI(t,ZI())?new Proxy(t,ml):t)}function lr(t){if(t instanceof IDBRequest)return tw(t);if(Uc.has(t))return Uc.get(t);const e=iw(t);return e!==t&&(Uc.set(t,e),hu.set(e,t)),e}const Fc=t=>hu.get(t);function ow(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=lr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(lr(o.result),l.oldVersion,l.newVersion,lr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const aw=["get","getKey","getAll","getAllKeys","count"],cw=["put","add","delete","clear"],Bc=new Map;function Xf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bc.get(e))return Bc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=cw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||aw.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Bc.set(e,i),i}rw(t=>({...t,get:(e,n,r)=>Xf(e,n)||t.get(e,n,r),has:(e,n)=>!!Xf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gl="@firebase/app",Zf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new uu("@firebase/app"),hw="@firebase/app-compat",fw="@firebase/analytics-compat",dw="@firebase/analytics",pw="@firebase/app-check-compat",mw="@firebase/app-check",gw="@firebase/auth",_w="@firebase/auth-compat",yw="@firebase/database",vw="@firebase/data-connect",Ew="@firebase/database-compat",Tw="@firebase/functions",Iw="@firebase/functions-compat",ww="@firebase/installations",Aw="@firebase/installations-compat",Rw="@firebase/messaging",bw="@firebase/messaging-compat",Sw="@firebase/performance",Pw="@firebase/performance-compat",Cw="@firebase/remote-config",kw="@firebase/remote-config-compat",Ow="@firebase/storage",Nw="@firebase/storage-compat",Dw="@firebase/firestore",Vw="@firebase/vertexai-preview",xw="@firebase/firestore-compat",Lw="firebase",Mw="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="[DEFAULT]",Uw={[gl]:"fire-core",[hw]:"fire-core-compat",[dw]:"fire-analytics",[fw]:"fire-analytics-compat",[mw]:"fire-app-check",[pw]:"fire-app-check-compat",[gw]:"fire-auth",[_w]:"fire-auth-compat",[yw]:"fire-rtdb",[vw]:"fire-data-connect",[Ew]:"fire-rtdb-compat",[Tw]:"fire-fn",[Iw]:"fire-fn-compat",[ww]:"fire-iid",[Aw]:"fire-iid-compat",[Rw]:"fire-fcm",[bw]:"fire-fcm-compat",[Sw]:"fire-perf",[Pw]:"fire-perf-compat",[Cw]:"fire-rc",[kw]:"fire-rc-compat",[Ow]:"fire-gcs",[Nw]:"fire-gcs-compat",[Dw]:"fire-fst",[xw]:"fire-fst-compat",[Vw]:"fire-vertex","fire-js":"fire-js",[Lw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new Map,Fw=new Map,yl=new Map;function ed(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fr(t){const e=t.name;if(yl.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;yl.set(e,t);for(const n of sa.values())ed(n,t);for(const n of Fw.values())ed(n,t);return!0}function Fa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new Ki("app","Firebase",Bw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=Mw;function Ig(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_l,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ur.create("bad-app-name",{appName:String(s)});if(n||(n=_g()),!n)throw ur.create("no-options");const i=sa.get(s);if(i){if(ra(n,i.options)&&ra(r,i.config))return i;throw ur.create("duplicate-app",{appName:s})}const o=new GI(s);for(const l of yl.values())o.addComponent(l);const c=new jw(n,r,o);return sa.set(s,c),c}function fu(t=_l){const e=sa.get(t);if(!e&&t===_l&&_g())return Ig();if(!e)throw ur.create("no-app",{appName:t});return e}function fn(t,e,n){var r;let s=(r=Uw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(c.join(" "));return}Fr(new pr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="firebase-heartbeat-database",qw=1,ki="firebase-heartbeat-store";let jc=null;function wg(){return jc||(jc=ow($w,qw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ki)}catch(n){console.warn(n)}}}}).catch(t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})})),jc}async function Hw(t){try{const n=(await wg()).transaction(ki),r=await n.objectStore(ki).get(Ag(t));return await n.done,r}catch(e){if(e instanceof vn)Mn.warn(e.message);else{const n=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(n.message)}}}async function td(t,e){try{const r=(await wg()).transaction(ki,"readwrite");await r.objectStore(ki).put(e,Ag(t)),await r.done}catch(n){if(n instanceof vn)Mn.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mn.warn(r.message)}}}function Ag(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=1024,Kw=30*24*60*60*1e3;class Gw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=nd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Kw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=nd(),{heartbeatsToSend:r,unsentEntries:s}=zw(this._heartbeatsCache.heartbeats),i=na(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Mn.warn(n),""}}}function nd(){return new Date().toISOString().substring(0,10)}function zw(t,e=Ww){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),rd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),rd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xI()?LI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Hw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function rd(t){return na(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t){Fr(new pr("platform-logger",e=>new lw(e),"PRIVATE")),Fr(new pr("heartbeat",e=>new Gw(e),"PRIVATE")),fn(gl,Zf,t),fn(gl,Zf,"esm2017"),fn("fire-js","")}Yw("");function du(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Rg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jw=Rg,bg=new Ki("auth","Firebase",Rg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new uu("@firebase/auth");function Xw(t,...e){ia.logLevel<=ve.WARN&&ia.warn(`Auth (${Gr}): ${t}`,...e)}function Lo(t,...e){ia.logLevel<=ve.ERROR&&ia.error(`Auth (${Gr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw pu(t,...e)}function dn(t,...e){return pu(t,...e)}function Sg(t,e,n){const r=Object.assign(Object.assign({},Jw()),{[e]:n});return new Ki("auth","Firebase",r).create(e,{appName:t.name})}function hr(t){return Sg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bg.create(t,...e)}function re(t,e,...n){if(!t)throw pu(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lo(e),new Error(e)}function Un(t,e){t||Cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Zw(){return sd()==="http:"||sd()==="https:"}function sd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zw()||OI()||"connection"in navigator)?navigator.onLine:!0}function tA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=PI()||NI()}get(){return eA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=new zi(3e4,6e4);function yr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $n(t,e,n,r,s={}){return Cg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Gi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return kI()||(u.referrerPolicy="no-referrer"),Pg.fetch()(kg(t,t.config.apiHost,n,c),u)})}async function Cg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nA),e);try{const s=new iA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw bo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw bo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Sg(t,f,u);Xt(t,f)}}catch(s){if(s instanceof vn)throw s;Xt(t,"network-request-failed",{message:String(s)})}}async function Ba(t,e,n,r,s={}){const i=await $n(t,e,n,r,s);return"mfaPendingCredential"in i&&Xt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function kg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?mu(t.config,s):`${t.config.apiScheme}://${s}`}function sA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),rA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=dn(t,e,r);return s.customData._tokenResponse=n,s}function id(t){return t!==void 0&&t.enterprise!==void 0}class oA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function aA(t,e){return $n(t,"GET","/v2/recaptchaConfig",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(t,e){return $n(t,"POST","/v1/accounts:delete",e)}async function Og(t,e){return $n(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lA(t,e=!1){const n=Be(t),r=await n.getIdToken(e),s=gu(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:gi($c(s.auth_time)),issuedAtTime:gi($c(s.iat)),expirationTime:gi($c(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $c(t){return Number(t)*1e3}function gu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Lo("JWT malformed, contained fewer than 3 sections"),null;try{const s=pg(n);return s?JSON.parse(s):(Lo("Failed to decode base64 JWT payload"),null)}catch(s){return Lo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function od(t){const e=gu(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&uA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gi(this.lastLoginAt),this.creationTime=gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Oi(t,Og(n,{idToken:r}));re(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ng(i.providerUserInfo):[],c=dA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new vl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function fA(t){const e=Be(t);await aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ng(t){return t.map(e=>{var{providerId:n}=e,r=du(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pA(t,e){const n=await Cg(t,{},async()=>{const r=Gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=kg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Pg.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mA(t,e){return $n(t,"POST","/v2/accounts:revokeToken",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):od(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=od(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await pA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ds;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ds,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=du(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Oi(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lA(this,e)}reload(){return fA(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await aa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pn(this.auth.app))return Promise.reject(hr(this.auth));const e=await this.getIdToken();return await Oi(this,cA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,q=(u=n.createdAt)!==null&&u!==void 0?u:void 0,L=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:F,emailVerified:B,isAnonymous:X,providerData:ne,stsTokenManager:R}=n;re(F&&R,e,"internal-error");const v=ds.fromJSON(this.name,R);re(typeof F=="string",e,"internal-error"),Qn(p,e.name),Qn(m,e.name),re(typeof B=="boolean",e,"internal-error"),re(typeof X=="boolean",e,"internal-error"),Qn(_,e.name),Qn(S,e.name),Qn(k,e.name),Qn(O,e.name),Qn(q,e.name),Qn(L,e.name);const y=new kn({uid:F,auth:e,email:m,emailVerified:B,displayName:p,isAnonymous:X,photoURL:S,phoneNumber:_,tenantId:k,stsTokenManager:v,createdAt:q,lastLoginAt:L});return ne&&Array.isArray(ne)&&(y.providerData=ne.map(I=>Object.assign({},I))),O&&(y._redirectEventId=O),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new ds;s.updateFromServerResponse(n);const i=new kn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await aa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ng(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new ds;c.updateFromIdToken(r);const l=new kn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=new Map;function On(t){Un(t instanceof Function,"Expected a class definition");let e=ad.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ad.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dg.type="NONE";const cd=Dg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t,e,n){return`firebase:${t}:${e}:${n}`}class ps{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Mo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ps(On(cd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||On(cd);const o=Mo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){const p=kn._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ps(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ps(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fg(e))return"Blackberry";if(Bg(e))return"Webos";if(xg(e))return"Safari";if((e.includes("chrome/")||Lg(e))&&!e.includes("edge/"))return"Chrome";if(Ug(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vg(t=Et()){return/firefox\//i.test(t)}function xg(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lg(t=Et()){return/crios\//i.test(t)}function Mg(t=Et()){return/iemobile/i.test(t)}function Ug(t=Et()){return/android/i.test(t)}function Fg(t=Et()){return/blackberry/i.test(t)}function Bg(t=Et()){return/webos/i.test(t)}function _u(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gA(t=Et()){var e;return _u(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _A(){return DI()&&document.documentMode===10}function jg(t=Et()){return _u(t)||Ug(t)||Bg(t)||Fg(t)||/windows phone/i.test(t)||Mg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t,e=[]){let n;switch(t){case"Browser":n=ld(Et());break;case"Worker":n=`${ld(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(t,e={}){return $n(t,"GET","/v2/passwordPolicy",yr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=6;class TA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:EA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ud(this),this.idTokenSubscription=new ud(this),this.beforeStateQueue=new yA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Og(this,{idToken:e}),r=await kn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await aa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pn(this.app))return Promise.reject(hr(this));const n=e?Be(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pn(this.app)?Promise.reject(hr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pn(this.app)?Promise.reject(hr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vA(this),n=new TA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ki("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$g(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Xw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cs(t){return Be(t)}class ud{constructor(e){this.auth=e,this.observer=null,this.addObserver=jI(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wA(t){ja=t}function qg(t){return ja.loadJS(t)}function AA(){return ja.recaptchaEnterpriseScript}function RA(){return ja.gapiScript}function bA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const SA="recaptcha-enterprise",PA="NO_RECAPTCHA";class CA{constructor(e){this.type=SA,this.auth=Cs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{aA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new oA(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;id(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(PA)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&id(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=AA();l.length!==0&&(l+=c),qg(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function hd(t,e,n,r=!1){const s=new CA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function El(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await hd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await hd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t,e){const n=Fa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ra(i,e??{}))return s;Xt(s,"already-initialized")}return n.initialize({options:e})}function OA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function NA(t,e,n){const r=Cs(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Hg(e),{host:o,port:c}=DA(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),VA()}function Hg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DA(t){const e=Hg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:fd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:fd(o)}}}function fd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function VA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}async function xA(t,e){return $n(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(t,e){return Ba(t,"POST","/v1/accounts:signInWithPassword",yr(t,e))}async function MA(t,e){return $n(t,"POST","/v1/accounts:sendOobCode",yr(t,e))}async function UA(t,e){return MA(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA(t,e){return Ba(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}async function BA(t,e){return Ba(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends yu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ni(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ni(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return El(e,n,"signInWithPassword",LA);case"emailLink":return FA(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return El(e,r,"signUpPassword",xA);case"emailLink":return BA(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(t,e){return Ba(t,"POST","/v1/accounts:signInWithIdp",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA="http://localhost";class Br extends yu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=du(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Br(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ms(e,n)}buildRequest(){const e={requestUri:jA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qA(t){const e=ni(ri(t)).link,n=e?ni(ri(e)).deep_link_id:null,r=ni(ri(t)).deep_link_id;return(r?ni(ri(r)).link:null)||r||n||e||t}class $a{constructor(e){var n,r,s,i,o,c;const l=ni(ri(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=$A((s=l.mode)!==null&&s!==void 0?s:null);re(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=qA(e);try{return new $a(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.providerId=ks.PROVIDER_ID}static credential(e,n){return Ni._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$a.parseLink(n);return re(r,"argument-error"),Ni._fromEmailAndCode(e,r.code,r.tenantId)}}ks.PROVIDER_ID="password";ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends Wg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Qi{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Br._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Qi{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Qi{constructor(){super("twitter.com")}static credential(e,n){return Br._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await kn._fromIdTokenResponse(e,r,s),o=dd(r);return new vs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=dd(r);return new vs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function dd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ca.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ca(e,n,r,s)}}function Kg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ca._fromErrorAndOperation(t,i,e,r):i})}async function HA(t,e,n=!1){const r=await Oi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(t,e,n=!1){const{auth:r}=t;if(Pn(r.app))return Promise.reject(hr(r));const s="reauthenticate";try{const i=await Oi(t,Kg(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=gu(i.idToken);re(o,r,"internal-error");const{sub:c}=o;return re(t.uid===c,r,"user-mismatch"),vs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gg(t,e,n=!1){if(Pn(t.app))return Promise.reject(hr(t));const r="signIn",s=await Kg(t,r,e),i=await vs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function KA(t,e){return Gg(Cs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t,e,n){var r;re(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),re(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(re(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(re(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zA(t,e,n){const r=Cs(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function i(o,c){re(c.handleCodeInApp,r,"argument-error"),c&&GA(r,o,c)}i(s,n),await El(r,s,"getOobCode",UA)}function QA(t,e){const n=$a.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function YA(t,e,n){if(Pn(t.app))return Promise.reject(hr(t));const r=Be(t),s=ks.credentialWithLink(e,n||oa());return re(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),KA(r,s)}function JA(t,e,n,r){return Be(t).onIdTokenChanged(e,n,r)}function XA(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}function ZA(t,e,n,r){return Be(t).onAuthStateChanged(e,n,r)}function eR(t){return Be(t).signOut()}const la="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(la,"1"),this.storage.removeItem(la),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=1e3,nR=10;class Qg extends zg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_A()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,nR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qg.type="LOCAL";const rR=Qg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg extends zg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yg.type="SESSION";const Jg=Yg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new qa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await sR(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=vu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function oR(t){pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function aR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lR(){return Xg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="firebaseLocalStorageDb",uR=1,ua="firebaseLocalStorage",e_="fbase_key";class Yi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ha(t,e){return t.transaction([ua],e?"readwrite":"readonly").objectStore(ua)}function hR(){const t=indexedDB.deleteDatabase(Zg);return new Yi(t).toPromise()}function Tl(){const t=indexedDB.open(Zg,uR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ua,{keyPath:e_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ua)?e(r):(r.close(),await hR(),e(await Tl()))})})}async function pd(t,e,n){const r=Ha(t,!0).put({[e_]:e,value:n});return new Yi(r).toPromise()}async function fR(t,e){const n=Ha(t,!1).get(e),r=await new Yi(n).toPromise();return r===void 0?null:r.value}function md(t,e){const n=Ha(t,!0).delete(e);return new Yi(n).toPromise()}const dR=800,pR=3;class t_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qa._getInstance(lR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aR(),!this.activeServiceWorker)return;this.sender=new iR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tl();return await pd(e,la,"1"),await md(e,la),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>fR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>md(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ha(s,!1).getAll();return new Yi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}t_.type="LOCAL";const mR=t_;new zi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(t,e){return e?On(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends yu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _R(t){return Gg(t.auth,new Eu(t),t.bypassAuthState)}function yR(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),WA(n,new Eu(t),t.bypassAuthState)}async function vR(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),HA(n,new Eu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _R;case"linkViaPopup":case"linkViaRedirect":return vR;case"reauthViaPopup":case"reauthViaRedirect":return yR;default:Xt(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=new zi(2e3,1e4);class cs extends n_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cs.currentPopupAction&&cs.currentPopupAction.cancel(),cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=vu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ER.get())};e()}}cs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR="pendingRedirect",Uo=new Map;class IR extends n_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Uo.get(this.auth._key());if(!e){try{const r=await wR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Uo.set(this.auth._key(),e)}return this.bypassAuthState||Uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wR(t,e){const n=bR(e),r=RR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function AR(t,e){Uo.set(t._key(),e)}function RR(t){return On(t._redirectPersistence)}function bR(t){return Mo(TR,t.config.apiKey,t.name)}async function SR(t,e,n=!1){if(Pn(t.app))return Promise.reject(hr(t));const r=Cs(t),s=gR(r,e),o=await new IR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=10*60*1e3;class CR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!r_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PR&&this.cachedEventUids.clear(),this.cachedEventUids.has(gd(e))}saveEventToCache(e){this.cachedEventUids.add(gd(e)),this.lastProcessedEventTime=Date.now()}}function gd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function r_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return r_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(t,e={}){return $n(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DR=/^https?/;async function VR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OR(t);for(const n of e)try{if(xR(n))return}catch{}Xt(t,"unauthorized-domain")}function xR(t){const e=oa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!DR.test(n))return!1;if(NR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=new zi(3e4,6e4);function _d(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MR(t){return new Promise((e,n)=>{var r,s,i;function o(){_d(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_d(),n(dn(t,"network-request-failed"))},timeout:LR.get()})}if(!((s=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pn().gapi)===null||i===void 0)&&i.load)o();else{const c=bA("iframefcb");return pn()[c]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},qg(`${RA()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Fo=null,e})}let Fo=null;function UR(t){return Fo=Fo||MR(t),Fo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=new zi(5e3,15e3),BR="__/auth/iframe",jR="emulator/auth/iframe",$R={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HR(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mu(e,jR):`https://${t.config.authDomain}/${BR}`,r={apiKey:e.apiKey,appName:t.name,v:Gr},s=qR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Gi(r).slice(1)}`}async function WR(t){const e=await UR(t),n=pn().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:HR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$R,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),c=pn().setTimeout(()=>{i(o)},FR.get());function l(){pn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GR=500,zR=600,QR="_blank",YR="http://localhost";class yd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JR(t,e,n,r=GR,s=zR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},KR),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Et().toLowerCase();n&&(c=Lg(u)?QR:n),Vg(u)&&(e=e||YR,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,S])=>`${m}${_}=${S},`,"");if(gA(u)&&c!=="_self")return XR(e||"",c),new yd(null);const p=window.open(e||"",c,f);re(p,t,"popup-blocked");try{p.focus()}catch{}return new yd(p)}function XR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR="__/auth/handler",eb="emulator/auth/handler",tb=encodeURIComponent("fac");async function vd(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gr,eventId:s};if(e instanceof Wg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",BI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Qi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${tb}=${encodeURIComponent(l)}`:"";return`${nb(t)}?${Gi(c).slice(1)}${u}`}function nb({config:t}){return t.emulator?mu(t,eb):`https://${t.authDomain}/${ZR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="webStorageSupport";class rb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jg,this._completeRedirectFn=SR,this._overrideRedirectResult=AR}async _openPopup(e,n,r,s){var i;Un((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await vd(e,n,r,oa(),s);return JR(e,o,vu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await vd(e,n,r,oa(),s);return oR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Un(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await WR(e),r=new CR(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qc,{type:qc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[qc];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jg()||xg()||_u()}}const sb=rb;var Ed="@firebase/auth",Td="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ab(t){Fr(new pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$g(t)},u=new IA(r,s,i,l);return OA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fr(new pr("auth-internal",e=>{const n=Cs(e.getProvider("auth").getImmediate());return(r=>new ib(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(Ed,Td,ob(t)),fn(Ed,Td,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=5*60,lb=yg("authIdTokenMaxAge")||cb;let Id=null;const ub=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lb)return;const s=n==null?void 0:n.token;Id!==s&&(Id=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hb(t=fu()){const e=Fa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kA(t,{popupRedirectResolver:sb,persistence:[mR,rR,Jg]}),r=yg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=ub(i.toString());XA(n,o,()=>o(n.currentUser)),JA(n,c=>o(c))}}const s=mg("auth");return s&&NA(n,`http://${s}`),n}function fb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}wA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",fb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ab("Browser");var db="firebase",pb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(db,pb,"app");var wd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lr,s_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,v){function y(){}y.prototype=v.prototype,R.D=v.prototype,R.prototype=new y,R.prototype.constructor=R,R.C=function(I,b,w){for(var T=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)T[Re-2]=arguments[Re];return v.prototype[b].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,v,y){y||(y=0);var I=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)I[b]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(b=0;16>b;++b)I[b]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=R.g[0],y=R.g[1],b=R.g[2];var w=R.g[3],T=v+(w^y&(b^w))+I[0]+3614090360&4294967295;v=y+(T<<7&4294967295|T>>>25),T=w+(b^v&(y^b))+I[1]+3905402710&4294967295,w=v+(T<<12&4294967295|T>>>20),T=b+(y^w&(v^y))+I[2]+606105819&4294967295,b=w+(T<<17&4294967295|T>>>15),T=y+(v^b&(w^v))+I[3]+3250441966&4294967295,y=b+(T<<22&4294967295|T>>>10),T=v+(w^y&(b^w))+I[4]+4118548399&4294967295,v=y+(T<<7&4294967295|T>>>25),T=w+(b^v&(y^b))+I[5]+1200080426&4294967295,w=v+(T<<12&4294967295|T>>>20),T=b+(y^w&(v^y))+I[6]+2821735955&4294967295,b=w+(T<<17&4294967295|T>>>15),T=y+(v^b&(w^v))+I[7]+4249261313&4294967295,y=b+(T<<22&4294967295|T>>>10),T=v+(w^y&(b^w))+I[8]+1770035416&4294967295,v=y+(T<<7&4294967295|T>>>25),T=w+(b^v&(y^b))+I[9]+2336552879&4294967295,w=v+(T<<12&4294967295|T>>>20),T=b+(y^w&(v^y))+I[10]+4294925233&4294967295,b=w+(T<<17&4294967295|T>>>15),T=y+(v^b&(w^v))+I[11]+2304563134&4294967295,y=b+(T<<22&4294967295|T>>>10),T=v+(w^y&(b^w))+I[12]+1804603682&4294967295,v=y+(T<<7&4294967295|T>>>25),T=w+(b^v&(y^b))+I[13]+4254626195&4294967295,w=v+(T<<12&4294967295|T>>>20),T=b+(y^w&(v^y))+I[14]+2792965006&4294967295,b=w+(T<<17&4294967295|T>>>15),T=y+(v^b&(w^v))+I[15]+1236535329&4294967295,y=b+(T<<22&4294967295|T>>>10),T=v+(b^w&(y^b))+I[1]+4129170786&4294967295,v=y+(T<<5&4294967295|T>>>27),T=w+(y^b&(v^y))+I[6]+3225465664&4294967295,w=v+(T<<9&4294967295|T>>>23),T=b+(v^y&(w^v))+I[11]+643717713&4294967295,b=w+(T<<14&4294967295|T>>>18),T=y+(w^v&(b^w))+I[0]+3921069994&4294967295,y=b+(T<<20&4294967295|T>>>12),T=v+(b^w&(y^b))+I[5]+3593408605&4294967295,v=y+(T<<5&4294967295|T>>>27),T=w+(y^b&(v^y))+I[10]+38016083&4294967295,w=v+(T<<9&4294967295|T>>>23),T=b+(v^y&(w^v))+I[15]+3634488961&4294967295,b=w+(T<<14&4294967295|T>>>18),T=y+(w^v&(b^w))+I[4]+3889429448&4294967295,y=b+(T<<20&4294967295|T>>>12),T=v+(b^w&(y^b))+I[9]+568446438&4294967295,v=y+(T<<5&4294967295|T>>>27),T=w+(y^b&(v^y))+I[14]+3275163606&4294967295,w=v+(T<<9&4294967295|T>>>23),T=b+(v^y&(w^v))+I[3]+4107603335&4294967295,b=w+(T<<14&4294967295|T>>>18),T=y+(w^v&(b^w))+I[8]+1163531501&4294967295,y=b+(T<<20&4294967295|T>>>12),T=v+(b^w&(y^b))+I[13]+2850285829&4294967295,v=y+(T<<5&4294967295|T>>>27),T=w+(y^b&(v^y))+I[2]+4243563512&4294967295,w=v+(T<<9&4294967295|T>>>23),T=b+(v^y&(w^v))+I[7]+1735328473&4294967295,b=w+(T<<14&4294967295|T>>>18),T=y+(w^v&(b^w))+I[12]+2368359562&4294967295,y=b+(T<<20&4294967295|T>>>12),T=v+(y^b^w)+I[5]+4294588738&4294967295,v=y+(T<<4&4294967295|T>>>28),T=w+(v^y^b)+I[8]+2272392833&4294967295,w=v+(T<<11&4294967295|T>>>21),T=b+(w^v^y)+I[11]+1839030562&4294967295,b=w+(T<<16&4294967295|T>>>16),T=y+(b^w^v)+I[14]+4259657740&4294967295,y=b+(T<<23&4294967295|T>>>9),T=v+(y^b^w)+I[1]+2763975236&4294967295,v=y+(T<<4&4294967295|T>>>28),T=w+(v^y^b)+I[4]+1272893353&4294967295,w=v+(T<<11&4294967295|T>>>21),T=b+(w^v^y)+I[7]+4139469664&4294967295,b=w+(T<<16&4294967295|T>>>16),T=y+(b^w^v)+I[10]+3200236656&4294967295,y=b+(T<<23&4294967295|T>>>9),T=v+(y^b^w)+I[13]+681279174&4294967295,v=y+(T<<4&4294967295|T>>>28),T=w+(v^y^b)+I[0]+3936430074&4294967295,w=v+(T<<11&4294967295|T>>>21),T=b+(w^v^y)+I[3]+3572445317&4294967295,b=w+(T<<16&4294967295|T>>>16),T=y+(b^w^v)+I[6]+76029189&4294967295,y=b+(T<<23&4294967295|T>>>9),T=v+(y^b^w)+I[9]+3654602809&4294967295,v=y+(T<<4&4294967295|T>>>28),T=w+(v^y^b)+I[12]+3873151461&4294967295,w=v+(T<<11&4294967295|T>>>21),T=b+(w^v^y)+I[15]+530742520&4294967295,b=w+(T<<16&4294967295|T>>>16),T=y+(b^w^v)+I[2]+3299628645&4294967295,y=b+(T<<23&4294967295|T>>>9),T=v+(b^(y|~w))+I[0]+4096336452&4294967295,v=y+(T<<6&4294967295|T>>>26),T=w+(y^(v|~b))+I[7]+1126891415&4294967295,w=v+(T<<10&4294967295|T>>>22),T=b+(v^(w|~y))+I[14]+2878612391&4294967295,b=w+(T<<15&4294967295|T>>>17),T=y+(w^(b|~v))+I[5]+4237533241&4294967295,y=b+(T<<21&4294967295|T>>>11),T=v+(b^(y|~w))+I[12]+1700485571&4294967295,v=y+(T<<6&4294967295|T>>>26),T=w+(y^(v|~b))+I[3]+2399980690&4294967295,w=v+(T<<10&4294967295|T>>>22),T=b+(v^(w|~y))+I[10]+4293915773&4294967295,b=w+(T<<15&4294967295|T>>>17),T=y+(w^(b|~v))+I[1]+2240044497&4294967295,y=b+(T<<21&4294967295|T>>>11),T=v+(b^(y|~w))+I[8]+1873313359&4294967295,v=y+(T<<6&4294967295|T>>>26),T=w+(y^(v|~b))+I[15]+4264355552&4294967295,w=v+(T<<10&4294967295|T>>>22),T=b+(v^(w|~y))+I[6]+2734768916&4294967295,b=w+(T<<15&4294967295|T>>>17),T=y+(w^(b|~v))+I[13]+1309151649&4294967295,y=b+(T<<21&4294967295|T>>>11),T=v+(b^(y|~w))+I[4]+4149444226&4294967295,v=y+(T<<6&4294967295|T>>>26),T=w+(y^(v|~b))+I[11]+3174756917&4294967295,w=v+(T<<10&4294967295|T>>>22),T=b+(v^(w|~y))+I[2]+718787259&4294967295,b=w+(T<<15&4294967295|T>>>17),T=y+(w^(b|~v))+I[9]+3951481745&4294967295,R.g[0]=R.g[0]+v&4294967295,R.g[1]=R.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,R.g[2]=R.g[2]+b&4294967295,R.g[3]=R.g[3]+w&4294967295}r.prototype.u=function(R,v){v===void 0&&(v=R.length);for(var y=v-this.blockSize,I=this.B,b=this.h,w=0;w<v;){if(b==0)for(;w<=y;)s(this,R,w),w+=this.blockSize;if(typeof R=="string"){for(;w<v;)if(I[b++]=R.charCodeAt(w++),b==this.blockSize){s(this,I),b=0;break}}else for(;w<v;)if(I[b++]=R[w++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var v=1;v<R.length-8;++v)R[v]=0;var y=8*this.o;for(v=R.length-8;v<R.length;++v)R[v]=y&255,y/=256;for(this.u(R),R=Array(16),v=y=0;4>v;++v)for(var I=0;32>I;I+=8)R[y++]=this.g[v]>>>I&255;return R};function i(R,v){var y=c;return Object.prototype.hasOwnProperty.call(y,R)?y[R]:y[R]=v(R)}function o(R,v){this.h=v;for(var y=[],I=!0,b=R.length-1;0<=b;b--){var w=R[b]|0;I&&w==v||(y[b]=w,I=!1)}this.g=y}var c={};function l(R){return-128<=R&&128>R?i(R,function(v){return new o([v|0],0>v?-1:0)}):new o([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return O(u(-R));for(var v=[],y=1,I=0;R>=y;I++)v[I]=R/y|0,y*=4294967296;return new o(v,0)}function f(R,v){if(R.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R.charAt(0)=="-")return O(f(R.substring(1),v));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),I=p,b=0;b<R.length;b+=8){var w=Math.min(8,R.length-b),T=parseInt(R.substring(b,b+w),v);8>w?(w=u(Math.pow(v,w)),I=I.j(w).add(u(T))):(I=I.j(y),I=I.add(u(T)))}return I}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-O(this).m();for(var R=0,v=1,y=0;y<this.g.length;y++){var I=this.i(y);R+=(0<=I?I:4294967296+I)*v,v*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(S(this))return"0";if(k(this))return"-"+O(this).toString(R);for(var v=u(Math.pow(R,6)),y=this,I="";;){var b=B(y,v).g;y=q(y,b.j(v));var w=((0<y.g.length?y.g[0]:y.h)>>>0).toString(R);if(y=b,S(y))return w+I;for(;6>w.length;)w="0"+w;I=w+I}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function S(R){if(R.h!=0)return!1;for(var v=0;v<R.g.length;v++)if(R.g[v]!=0)return!1;return!0}function k(R){return R.h==-1}t.l=function(R){return R=q(this,R),k(R)?-1:S(R)?0:1};function O(R){for(var v=R.g.length,y=[],I=0;I<v;I++)y[I]=~R.g[I];return new o(y,~R.h).add(m)}t.abs=function(){return k(this)?O(this):this},t.add=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0,b=0;b<=v;b++){var w=I+(this.i(b)&65535)+(R.i(b)&65535),T=(w>>>16)+(this.i(b)>>>16)+(R.i(b)>>>16);I=T>>>16,w&=65535,T&=65535,y[b]=T<<16|w}return new o(y,y[y.length-1]&-2147483648?-1:0)};function q(R,v){return R.add(O(v))}t.j=function(R){if(S(this)||S(R))return p;if(k(this))return k(R)?O(this).j(O(R)):O(O(this).j(R));if(k(R))return O(this.j(O(R)));if(0>this.l(_)&&0>R.l(_))return u(this.m()*R.m());for(var v=this.g.length+R.g.length,y=[],I=0;I<2*v;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<R.g.length;b++){var w=this.i(I)>>>16,T=this.i(I)&65535,Re=R.i(b)>>>16,Ke=R.i(b)&65535;y[2*I+2*b]+=T*Ke,L(y,2*I+2*b),y[2*I+2*b+1]+=w*Ke,L(y,2*I+2*b+1),y[2*I+2*b+1]+=T*Re,L(y,2*I+2*b+1),y[2*I+2*b+2]+=w*Re,L(y,2*I+2*b+2)}for(I=0;I<v;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=v;I<2*v;I++)y[I]=0;return new o(y,0)};function L(R,v){for(;(R[v]&65535)!=R[v];)R[v+1]+=R[v]>>>16,R[v]&=65535,v++}function F(R,v){this.g=R,this.h=v}function B(R,v){if(S(v))throw Error("division by zero");if(S(R))return new F(p,p);if(k(R))return v=B(O(R),v),new F(O(v.g),O(v.h));if(k(v))return v=B(R,O(v)),new F(O(v.g),v.h);if(30<R.g.length){if(k(R)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var y=m,I=v;0>=I.l(R);)y=X(y),I=X(I);var b=ne(y,1),w=ne(I,1);for(I=ne(I,2),y=ne(y,2);!S(I);){var T=w.add(I);0>=T.l(R)&&(b=b.add(y),w=T),I=ne(I,1),y=ne(y,1)}return v=q(R,b.j(v)),new F(b,v)}for(b=p;0<=R.l(v);){for(y=Math.max(1,Math.floor(R.m()/v.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),w=u(y),T=w.j(v);k(T)||0<T.l(R);)y-=I,w=u(y),T=w.j(v);S(w)&&(w=m),b=b.add(w),R=q(R,T)}return new F(b,R)}t.A=function(R){return B(this,R).h},t.and=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)&R.i(I);return new o(y,this.h&R.h)},t.or=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)|R.i(I);return new o(y,this.h|R.h)},t.xor=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)^R.i(I);return new o(y,this.h^R.h)};function X(R){for(var v=R.g.length+1,y=[],I=0;I<v;I++)y[I]=R.i(I)<<1|R.i(I-1)>>>31;return new o(y,R.h)}function ne(R,v){var y=v>>5;v%=32;for(var I=R.g.length-y,b=[],w=0;w<I;w++)b[w]=0<v?R.i(w+y)>>>v|R.i(w+y+1)<<32-v:R.i(w+y);return new o(b,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,s_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Lr=o}).apply(typeof wd<"u"?wd:typeof self<"u"?self:typeof window<"u"?window:{});var So=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var i_,si,o_,Bo,Il,a_,c_,l_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof So=="object"&&So];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in d))break e;d=d[C]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,C={next:function(){if(!g&&d<a.length){var N=d++;return{value:h(N,a[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function _(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,C,N){for(var W=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)W[ke-2]=arguments[ke];return h.prototype[C].apply(g,W)}}function k(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function O(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const C=a.length||0,N=g.length||0;a.length=C+N;for(let W=0;W<N;W++)a[C+W]=g[W]}else a.push(g)}}class q{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function L(a){return/^[\s\xa0]*$/.test(a)}function F(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function B(a){return B[" "](a),a}B[" "]=function(){};var X=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function ne(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function R(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function v(a){const h={};for(const d in a)h[d]=a[d];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)a[d]=g[d];for(let N=0;N<y.length;N++)d=y[N],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function b(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function w(a){c.setTimeout(()=>{throw a},0)}function T(){var a=Dt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Re{constructor(){this.h=this.g=null}add(h,d){const g=Ke.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Ke=new q(()=>new Pe,a=>a.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let le,ge=!1,Dt=new Re,Gt=()=>{const a=c.Promise.resolve(void 0);le=()=>{a.then(jt)}};var jt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){w(d)}var h=Ke;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ge=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var qn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,h),c.removeEventListener("test",d,h)}catch{}return a}();function Vt(a,h){if(Ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(X){e:{try{B(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:kt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Vt.aa.h.call(this)}}S(Vt,Ue);var kt={2:"touch",3:"pen",4:"mouse"};Vt.prototype.h=function(){Vt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),Y=0;function z(a,h,d,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=C,this.key=++Y,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function me(a){this.src=a,this.g={},this.h=0}me.prototype.add=function(a,h,d,g,C){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var W=A(a,h,g,C);return-1<W?(h=a[W],d||(h.fa=!1)):(h=new z(h,this.src,N,!!g,C),h.fa=d,a.push(h)),h};function E(a,h){var d=h.type;if(d in a.g){var g=a.g[d],C=Array.prototype.indexOf.call(g,h,void 0),N;(N=0<=C)&&Array.prototype.splice.call(g,C,1),N&&(ee(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function A(a,h,d,g){for(var C=0;C<a.length;++C){var N=a[C];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==g)return C}return-1}var P="closure_lm_"+(1e6*Math.random()|0),D={};function M(a,h,d,g,C){if(Array.isArray(h)){for(var N=0;N<h.length;N++)M(a,h[N],d,g,C);return null}return d=ae(d),a&&a[V]?a.K(h,d,u(g)?!!g.capture:!1,C):x(a,h,d,!1,g,C)}function x(a,h,d,g,C,N){if(!h)throw Error("Invalid event type");var W=u(C)?!!C.capture:!!C,ke=Q(a);if(ke||(a[P]=ke=new me(a)),d=ke.add(h,d,g,W,N),d.proxy)return d;if(g=G(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)qn||(C=W),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(j(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return h.call(a.src,a.listener,d)}const h=ie;return a}function K(a,h,d,g,C){if(Array.isArray(h))for(var N=0;N<h.length;N++)K(a,h[N],d,g,C);else g=u(g)?!!g.capture:!!g,d=ae(d),a&&a[V]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],d=A(N,d,g,C),-1<d&&(ee(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=Q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=A(h,d,g,C)),(d=-1<a?h[a]:null)&&H(d))}function H(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[V])E(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(j(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Q(h))?(E(d,a),d.h==0&&(d.src=null,h[P]=null)):ee(a)}}}function j(a){return a in D?D[a]:D[a]="on"+a}function ie(a,h){if(a.da)a=!0;else{h=new Vt(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&H(a),a=d.call(g,h)}return a}function Q(a){return a=a[P],a instanceof me?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function ce(){Me.call(this),this.i=new me(this),this.M=this,this.F=null}S(ce,Me),ce.prototype[V]=!0,ce.prototype.removeEventListener=function(a,h,d,g){K(this,a,h,d,g)};function pe(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ue(h,a);else if(h instanceof Ue)h.target=h.target||a;else{var C=h;h=new Ue(g,a),I(h,C)}if(C=!0,d)for(var N=d.length-1;0<=N;N--){var W=h.g=d[N];C=we(W,g,!0,h)&&C}if(W=h.g=a,C=we(W,g,!0,h)&&C,C=we(W,g,!1,h)&&C,d)for(N=0;N<d.length;N++)W=h.g=d[N],C=we(W,g,!1,h)&&C}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)ee(d[g]);delete a.g[h],a.h--}}this.F=null},ce.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},ce.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function we(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,N=0;N<h.length;++N){var W=h[N];if(W&&!W.da&&W.capture==d){var ke=W.listener,st=W.ha||W.src;W.fa&&E(a.i,W),C=ke.call(st,g)!==!1&&C}}return C&&!g.defaultPrevented}function Fe(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function ze(a){a.g=Fe(()=>{a.g=null,a.i&&(a.i=!1,ze(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class $t extends Me{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ze(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lt(a){Me.call(this),this.h=a,this.g={}}S(lt,Me);var Hn=[];function Vs(a){ne(a.g,function(h,d){this.g.hasOwnProperty(d)&&H(h)},a),a.g={}}lt.prototype.N=function(){lt.aa.N.call(this),Vs(this)},lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rt=c.JSON.stringify,qt=c.JSON.parse,oo=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Yr(){}Yr.prototype.h=null;function _h(a){return a.h||(a.h=a.i())}function yh(){}var xs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function uc(){Ue.call(this,"d")}S(uc,Ue);function hc(){Ue.call(this,"c")}S(hc,Ue);var Tr={},vh=null;function ao(){return vh=vh||new ce}Tr.La="serverreachability";function Eh(a){Ue.call(this,Tr.La,a)}S(Eh,Ue);function Ls(a){const h=ao();pe(h,new Eh(h))}Tr.STAT_EVENT="statevent";function Th(a,h){Ue.call(this,Tr.STAT_EVENT,a),this.stat=h}S(Th,Ue);function Tt(a){const h=ao();pe(h,new Th(h,a))}Tr.Ma="timingevent";function Ih(a,h){Ue.call(this,Tr.Ma,a),this.size=h}S(Ih,Ue);function Ms(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function Us(){this.g=!0}Us.prototype.xa=function(){this.g=!1};function ov(a,h,d,g,C,N){a.info(function(){if(a.g)if(N)for(var W="",ke=N.split("&"),st=0;st<ke.length;st++){var Te=ke[st].split("=");if(1<Te.length){var ut=Te[0];Te=Te[1];var ht=ut.split("_");W=2<=ht.length&&ht[1]=="type"?W+(ut+"="+Te+"&"):W+(ut+"=redacted&")}}else W=null;else W=N;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+d+`
`+W})}function av(a,h,d,g,C,N,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+d+`
`+N+" "+W})}function Jr(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+lv(a,d)+(g?" "+g:"")})}function cv(a,h){a.info(function(){return"TIMEOUT: "+h})}Us.prototype.info=function(){};function lv(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var W=1;W<C.length;W++)C[W]=""}}}}return rt(d)}catch{return h}}var co={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fc;function lo(){}S(lo,Yr),lo.prototype.g=function(){return new XMLHttpRequest},lo.prototype.i=function(){return{}},fc=new lo;function Wn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ah}function Ah(){this.i=null,this.g="",this.h=!1}var Rh={},dc={};function pc(a,h,d){a.L=1,a.v=po(En(h)),a.m=d,a.P=!0,bh(a,null)}function bh(a,h){a.F=Date.now(),uo(a),a.A=En(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Bh(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Ah,a.g=sf(a.j,d?h:null,!a.m),0<a.O&&(a.M=new $t(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Hn[0]=C.toString()),C=Hn);for(var N=0;N<C.length;N++){var W=M(d,C[N],g||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ls(),ov(a.i,a.u,a.A,a.l,a.R,a.m)}Wn.prototype.ca=function(a){a=a.target;const h=this.M;h&&Tn(a)==3?h.j():this.Y(a)},Wn.prototype.Y=function(a){try{if(a==this.g)e:{const ht=Tn(this.g);var h=this.g.Ba();const es=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||Gh(this.g)))){this.J||ht!=4||h==7||(h==8||0>=es?Ls(3):Ls(2)),mc(this);var d=this.g.Z();this.X=d;t:if(Sh(this)){var g=Gh(this.g);a="";var C=g.length,N=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ir(this),Fs(this);var W="";break t}this.h.i=new c.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(N&&h==C-1)});g.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,av(this.i,this.u,this.A,this.l,this.R,ht,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,st=this.g;if((ke=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(ke)){var Te=ke;break t}}Te=null}if(d=Te)Jr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gc(this,d);else{this.o=!1,this.s=3,Tt(12),Ir(this),Fs(this);break e}}if(this.P){d=!0;let zt;for(;!this.J&&this.C<W.length;)if(zt=uv(this,W),zt==dc){ht==4&&(this.s=4,Tt(14),d=!1),Jr(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Rh){this.s=4,Tt(15),Jr(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else Jr(this.i,this.l,zt,null),gc(this,zt);if(Sh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||W.length!=0||this.h.h||(this.s=1,Tt(16),d=!1),this.o=this.o&&d,!d)Jr(this.i,this.l,W,"[Invalid Chunked Response]"),Ir(this),Fs(this);else if(0<W.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Ic(ut),ut.M=!0,Tt(11))}}else Jr(this.i,this.l,W,null),gc(this,W);ht==4&&Ir(this),this.o&&!this.J&&(ht==4?ef(this.j,this):(this.o=!1,uo(this)))}else Sv(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),Ir(this),Fs(this)}}}catch{}finally{}};function Sh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function uv(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?dc:(d=Number(h.substring(d,g)),isNaN(d)?Rh:(g+=1,g+d>h.length?dc:(h=h.slice(g,g+d),a.C=g+d,h)))}Wn.prototype.cancel=function(){this.J=!0,Ir(this)};function uo(a){a.S=Date.now()+a.I,Ph(a,a.I)}function Ph(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ms(m(a.ba,a),h)}function mc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Wn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(cv(this.i,this.A),this.L!=2&&(Ls(),Tt(17)),Ir(this),this.s=2,Fs(this)):Ph(this,this.S-a)};function Fs(a){a.j.G==0||a.J||ef(a.j,a)}function Ir(a){mc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Vs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function gc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||_c(d.h,a))){if(!a.K&&_c(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Eo(d),yo(d);else break e;Tc(d),Tt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ms(m(d.Za,d),6e3));if(1>=Oh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ar(d,11)}else if((a.K||d.g==a)&&Eo(d),!L(h))for(C=d.Da.g.parse(h),h=0;h<C.length;h++){let Te=C[h];if(d.T=Te[0],Te=Te[1],d.G==2)if(Te[0]=="c"){d.K=Te[1],d.ia=Te[2];const ut=Te[3];ut!=null&&(d.la=ut,d.j.info("VER="+d.la));const ht=Te[4];ht!=null&&(d.Aa=ht,d.j.info("SVER="+d.Aa));const es=Te[5];es!=null&&typeof es=="number"&&0<es&&(g=1.5*es,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const zt=a.g;if(zt){const Io=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Io){var N=g.h;N.g||Io.indexOf("spdy")==-1&&Io.indexOf("quic")==-1&&Io.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(yc(N,N.h),N.h=null))}if(g.D){const wc=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;wc&&(g.ya=wc,De(g.I,g.D,wc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var W=a;if(g.qa=rf(g,g.J?g.ia:null,g.W),W.K){Nh(g.h,W);var ke=W,st=g.L;st&&(ke.I=st),ke.B&&(mc(ke),uo(ke)),g.g=W}else Xh(g);0<d.i.length&&vo(d)}else Te[0]!="stop"&&Te[0]!="close"||Ar(d,7);else d.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?Ar(d,7):Ec(d):Te[0]!="noop"&&d.l&&d.l.ta(Te),d.v=0)}}Ls(4)}catch{}}var hv=class{constructor(a,h){this.g=a,this.map=h}};function Ch(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function kh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Oh(a){return a.h?1:a.g?a.g.size:0}function _c(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function yc(a,h){a.g?a.g.add(h):a.h=h}function Nh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Ch.prototype.cancel=function(){if(this.i=Dh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Dh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return k(a.i)}function fv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function dv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function Vh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=dv(a),g=fv(a),C=g.length,N=0;N<C;N++)h.call(void 0,g[N],d&&d[N],a)}var xh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pv(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),C=null;if(0<=g){var N=a[d].substring(0,g);C=a[d].substring(g+1)}else N=a[d];h(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function wr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof wr){this.h=a.h,ho(this,a.j),this.o=a.o,this.g=a.g,fo(this,a.s),this.l=a.l;var h=a.i,d=new $s;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Lh(this,d),this.m=a.m}else a&&(h=String(a).match(xh))?(this.h=!1,ho(this,h[1]||"",!0),this.o=Bs(h[2]||""),this.g=Bs(h[3]||"",!0),fo(this,h[4]),this.l=Bs(h[5]||"",!0),Lh(this,h[6]||"",!0),this.m=Bs(h[7]||"")):(this.h=!1,this.i=new $s(null,this.h))}wr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(js(h,Mh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(js(h,Mh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(js(d,d.charAt(0)=="/"?_v:gv,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",js(d,vv)),a.join("")};function En(a){return new wr(a)}function ho(a,h,d){a.j=d?Bs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function fo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Lh(a,h,d){h instanceof $s?(a.i=h,Ev(a.i,a.h)):(d||(h=js(h,yv)),a.i=new $s(h,a.h))}function De(a,h,d){a.i.set(h,d)}function po(a){return De(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Bs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function js(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,mv),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function mv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Mh=/[#\/\?@]/g,gv=/[#\?:]/g,_v=/[#\?]/g,yv=/[#\?@]/g,vv=/#/g;function $s(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Kn(a){a.g||(a.g=new Map,a.h=0,a.i&&pv(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=$s.prototype,t.add=function(a,h){Kn(this),this.i=null,a=Xr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Uh(a,h){Kn(a),h=Xr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Fh(a,h){return Kn(a),h=Xr(a,h),a.g.has(h)}t.forEach=function(a,h){Kn(this),this.g.forEach(function(d,g){d.forEach(function(C){a.call(h,C,g,this)},this)},this)},t.na=function(){Kn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const C=a[g];for(let N=0;N<C.length;N++)d.push(h[g])}return d},t.V=function(a){Kn(this);let h=[];if(typeof a=="string")Fh(this,a)&&(h=h.concat(this.g.get(Xr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Kn(this),this.i=null,a=Xr(this,a),Fh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Bh(a,h,d){Uh(a,h),0<d.length&&(a.i=null,a.g.set(Xr(a,h),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const N=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var C=N;W[g]!==""&&(C+="="+encodeURIComponent(String(W[g]))),a.push(C)}}return this.i=a.join("&")};function Xr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Ev(a,h){h&&!a.j&&(Kn(a),a.i=null,a.g.forEach(function(d,g){var C=g.toLowerCase();g!=C&&(Uh(this,g),Bh(this,C,d))},a)),a.j=h}function Tv(a,h){const d=new Us;if(c.Image){const g=new Image;g.onload=_(Gn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Gn,d,"TestLoadImage: error",!1,h,g),g.onabort=_(Gn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Gn,d,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Iv(a,h){const d=new Us,g=new AbortController,C=setTimeout(()=>{g.abort(),Gn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(C),N.ok?Gn(d,"TestPingServer: ok",!0,h):Gn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Gn(d,"TestPingServer: error",!1,h)})}function Gn(a,h,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function wv(){this.g=new oo}function Av(a,h,d){const g=d||"";try{Vh(a,function(C,N){let W=C;u(C)&&(W=rt(C)),h.push(g+N+"="+encodeURIComponent(W))})}catch(C){throw h.push(g+"type="+encodeURIComponent("_badmap")),C}}function mo(a){this.l=a.Ub||null,this.j=a.eb||!1}S(mo,Yr),mo.prototype.g=function(){return new go(this.l,this.j)},mo.prototype.i=function(a){return function(){return a}}({});function go(a,h){ce.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(go,ce),t=go.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Hs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function jh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?qs(this):Hs(this),this.readyState==3&&jh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,qs(this))},t.Qa=function(a){this.g&&(this.response=a,qs(this))},t.ga=function(){this.g&&qs(this)};function qs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Hs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Hs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(go.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $h(a){let h="";return ne(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function vc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=$h(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):De(a,h,d))}function $e(a){ce.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S($e,ce);var Rv=/^https?$/i,bv=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fc.g(),this.v=this.o?_h(this.o):_h(fc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){qh(this,N);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())d.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(bv,h,void 0))||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,W]of d)this.g.setRequestHeader(N,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kh(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){qh(this,N)}};function qh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Hh(a),_o(a)}function Hh(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),_o(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_o(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Wh(this):this.bb())},t.bb=function(){Wh(this)};function Wh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tn(a)!=4||a.Z()!=2)){if(a.u&&Tn(a)==4)Fe(a.Ea,0,a);else if(pe(a,"readystatechange"),Tn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=W===0){var C=String(a.D).match(xh)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),g=!Rv.test(C?C.toLowerCase():"")}d=g}if(d)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var N=2<Tn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Hh(a)}}finally{_o(a)}}}}function _o(a,h){if(a.g){Kh(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||pe(a,"ready");try{d.onreadystatechange=g}catch{}}}function Kh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Tn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),qt(h)}};function Gh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Sv(a){const h={};a=(a.g&&2<=Tn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(L(a[g]))continue;var d=b(a[g]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[C]||[];h[C]=N,N.push(d)}R(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ws(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function zh(a){this.Aa=0,this.i=[],this.j=new Us,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ws("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ws("baseRetryDelayMs",5e3,a),this.cb=Ws("retryDelaySeedMs",1e4,a),this.Wa=Ws("forwardChannelMaxRetries",2,a),this.wa=Ws("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ch(a&&a.concurrentRequestLimit),this.Da=new wv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zh.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){Tt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=rf(this,null,this.W),vo(this)};function Ec(a){if(Qh(a),a.G==3){var h=a.U++,d=En(a.I);if(De(d,"SID",a.K),De(d,"RID",h),De(d,"TYPE","terminate"),Ks(a,d),h=new Wn(a,a.j,h),h.L=2,h.v=po(En(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=h.v,d=!0),d||(h.g=sf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),uo(h)}nf(a)}function yo(a){a.g&&(Ic(a),a.g.cancel(),a.g=null)}function Qh(a){yo(a),a.u&&(c.clearTimeout(a.u),a.u=null),Eo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function vo(a){if(!kh(a.h)&&!a.s){a.s=!0;var h=a.Ga;le||Gt(),ge||(le(),ge=!0),Dt.add(h,a),a.B=0}}function Pv(a,h){return Oh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ms(m(a.Ga,a,h),tf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Wn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=v(N),I(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Jh(this,C,h),d=En(this.I),De(d,"RID",a),De(d,"CVER",22),this.D&&De(d,"X-HTTP-Session-Id",this.D),Ks(this,d),N&&(this.O?h="headers="+encodeURIComponent(String($h(N)))+"&"+h:this.m&&vc(d,this.m,N)),yc(this.h,C),this.Ua&&De(d,"TYPE","init"),this.P?(De(d,"$req",h),De(d,"SID","null"),C.T=!0,pc(C,d,null)):pc(C,d,h),this.G=2}}else this.G==3&&(a?Yh(this,a):this.i.length==0||kh(this.h)||Yh(this))};function Yh(a,h){var d;h?d=h.l:d=a.U++;const g=En(a.I);De(g,"SID",a.K),De(g,"RID",d),De(g,"AID",a.T),Ks(a,g),a.m&&a.o&&vc(g,a.m,a.o),d=new Wn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Jh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),yc(a.h,d),pc(d,g,h)}function Ks(a,h){a.H&&ne(a.H,function(d,g){De(h,g,d)}),a.l&&Vh({},function(d,g){De(h,g,d)})}function Jh(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let N=-1;for(;;){const W=["count="+d];N==-1?0<d?(N=C[0].g,W.push("ofs="+N)):N=0:W.push("ofs="+N);let ke=!0;for(let st=0;st<d;st++){let Te=C[st].g;const ut=C[st].map;if(Te-=N,0>Te)N=Math.max(0,C[st].g-100),ke=!1;else try{Av(ut,W,"req"+Te+"_")}catch{g&&g(ut)}}if(ke){g=W.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function Xh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;le||Gt(),ge||(le(),ge=!0),Dt.add(h,a),a.v=0}}function Tc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ms(m(a.Fa,a),tf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Zh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ms(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),yo(this),Zh(this))};function Ic(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Zh(a){a.g=new Wn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=En(a.qa);De(h,"RID","rpc"),De(h,"SID",a.K),De(h,"AID",a.T),De(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&De(h,"TO",a.ja),De(h,"TYPE","xmlhttp"),Ks(a,h),a.m&&a.o&&vc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=po(En(h)),d.m=null,d.P=!0,bh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,yo(this),Tc(this),Tt(19))};function Eo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function ef(a,h){var d=null;if(a.g==h){Eo(a),Ic(a),a.g=null;var g=2}else if(_c(a.h,h))d=h.D,Nh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;g=ao(),pe(g,new Ih(g,d)),vo(a)}else Xh(a);else if(C=h.s,C==3||C==0&&0<h.X||!(g==1&&Pv(a,h)||g==2&&Tc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),C){case 1:Ar(a,5);break;case 4:Ar(a,10);break;case 3:Ar(a,6);break;default:Ar(a,2)}}}function tf(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Ar(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const C=!g;g=new wr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ho(g,"https"),po(g),C?Tv(g.toString(),d):Iv(g.toString(),d)}else Tt(2);a.G=0,a.l&&a.l.sa(h),nf(a),Qh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function nf(a){if(a.G=0,a.ka=[],a.l){const h=Dh(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function rf(a,h,d){var g=d instanceof wr?En(d):new wr(d);if(g.g!="")h&&(g.g=h+"."+g.g),fo(g,g.s);else{var C=c.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var N=new wr(null);g&&ho(N,g),h&&(N.g=h),C&&fo(N,C),d&&(N.l=d),g=N}return d=a.D,h=a.ya,d&&h&&De(g,d,h),De(g,"VER",a.la),Ks(a,g),g}function sf(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new $e(new mo({eb:d})):new $e(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function of(){}t=of.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function To(){}To.prototype.g=function(a,h){return new xt(a,h)};function xt(a,h){ce.call(this),this.g=new zh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!L(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!L(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Zr(this)}S(xt,ce),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Ec(this.g)},xt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=rt(a),a=d);h.i.push(new hv(h.Ya++,a)),h.G==3&&vo(h)},xt.prototype.N=function(){this.g.l=null,delete this.j,Ec(this.g),delete this.g,xt.aa.N.call(this)};function af(a){uc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(af,uc);function cf(){hc.call(this),this.status=1}S(cf,hc);function Zr(a){this.g=a}S(Zr,of),Zr.prototype.ua=function(){pe(this.g,"a")},Zr.prototype.ta=function(a){pe(this.g,new af(a))},Zr.prototype.sa=function(a){pe(this.g,new cf)},Zr.prototype.ra=function(){pe(this.g,"b")},To.prototype.createWebChannel=To.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,l_=function(){return new To},c_=function(){return ao()},a_=Tr,Il={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},co.NO_ERROR=0,co.TIMEOUT=8,co.HTTP_ERROR=6,Bo=co,wh.COMPLETE="complete",o_=wh,yh.EventType=xs,xs.OPEN="a",xs.CLOSE="b",xs.ERROR="c",xs.MESSAGE="d",ce.prototype.listen=ce.prototype.K,si=yh,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,i_=$e}).apply(typeof So<"u"?So:typeof self<"u"?self:typeof window<"u"?window:{});const Ad="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new uu("@firebase/firestore");function Ys(){return jr.logLevel}function Z(t,...e){if(jr.logLevel<=ve.DEBUG){const n=e.map(Tu);jr.debug(`Firestore (${Os}): ${t}`,...n)}}function Fn(t,...e){if(jr.logLevel<=ve.ERROR){const n=e.map(Tu);jr.error(`Firestore (${Os}): ${t}`,...n)}}function Es(t,...e){if(jr.logLevel<=ve.WARN){const n=e.map(Tu);jr.warn(`Firestore (${Os}): ${t}`,...n)}}function Tu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: `+t;throw Fn(e),new Error(e)}function Ce(t,e){t||ue()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class gb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _b{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new u_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new pt(e)}}class yb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new yb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Eb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ce(this.o===void 0);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new Eb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Ib(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function Ts(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new Xe(0,0))}static max(){return new he(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Di.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Di?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends Di{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const wb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Di{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return wb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new J(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new J(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Ve.fromString(e))}static fromName(e){return new se(Ve.fromString(e).popFirst(5))}static empty(){return new se(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Ve(e.slice()))}}function Ab(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new mr(s,se.empty(),e)}function Rb(t){return new mr(t.readTime,t.key,-1)}class mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mr(he.min(),se.empty(),-1)}static max(){return new mr(he.max(),se.empty(),-1)}}function bb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==Sb)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Cb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Iu.oe=-1;function Wa(t){return t==null}function ha(t){return t===0&&1/t==-1/0}function kb(t){return typeof t=="number"&&Number.isInteger(t)&&!ha(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function f_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Po(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Po(this.root,e,this.comparator,!1)}getReverseIterator(){return new Po(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Po(this.root,e,this.comparator,!0)}}class Po{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=i??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new it(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bd(this.data.getIterator())}getIteratorFrom(e){return new bd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class bd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new at(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new d_("Invalid base64 string: "+i):i}}(e);return new ct(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const Ob=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gr(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=Ob.exec(t);if(Ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $r(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Au(t){const e=t.mapValue.fields.__previous_value__;return wu(e)?Au(e):e}function Vi(t){const e=gr(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class xi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co={mapValue:{}};function qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wu(t)?4:Vb(t)?9007199254740991:Db(t)?10:11:ue()}function yn(t,e){if(t===e)return!0;const n=qr(t);if(n!==qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vi(t).isEqual(Vi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=gr(s.timestampValue),c=gr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return $r(s.bytesValue).isEqual($r(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),c=Ge(i.doubleValue);return o===c?ha(o)===ha(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Ts(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Rd(o)!==Rd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!yn(o[l],c[l])))return!1;return!0}(t,e);default:return ue()}}function Li(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function Is(t,e){if(t===e)return 0;const n=qr(t),r=qr(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ge(i.integerValue||i.doubleValue),l=Ge(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Sd(t.timestampValue,e.timestampValue);case 4:return Sd(Vi(t),Vi(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const c=$r(i),l=$r(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=Ie(c[u],l[u]);if(f!==0)return f}return Ie(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ie(Ge(i.latitude),Ge(o.latitude));return c!==0?c:Ie(Ge(i.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Pd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,f;const p=i.fields||{},m=o.fields||{},_=(c=p.value)===null||c===void 0?void 0:c.arrayValue,S=(l=m.value)===null||l===void 0?void 0:l.arrayValue,k=Ie(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:Pd(_,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Co.mapValue&&o===Co.mapValue)return 0;if(i===Co.mapValue)return 1;if(o===Co.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Ie(l[p],f[p]);if(m!==0)return m;const _=Is(c[l[p]],u[f[p]]);if(_!==0)return _}return Ie(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ue()}}function Sd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=gr(t),r=gr(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function Pd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Is(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function ws(t){return wl(t)}function wl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=gr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return $r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=wl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${wl(n.fields[o])}`;return s+"}"}(t.mapValue):ue()}function Cd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Al(t){return!!t&&"integerValue"in t}function Ru(t){return!!t&&"arrayValue"in t}function kd(t){return!!t&&"nullValue"in t}function Od(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jo(t){return!!t&&"mapValue"in t}function Db(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function _i(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=_i(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_i(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Vb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!jo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_i(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=_i(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());jo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];jo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){zr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Nt(_i(this.value))}}function p_(t){const e=[];return zr(t.fields,(n,r)=>{const s=new ot([n]);if(jo(r)){const i=p_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new gt(e,0,he.min(),he.min(),he.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,he.min(),he.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,he.min(),he.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n){this.position=e,this.inclusive=n}}function Nd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=Is(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n="asc"){this.field=e,this.dir=n}}function xb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{}class Ye extends m_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Mb(e,n,r):n==="array-contains"?new Bb(e,r):n==="in"?new jb(e,r):n==="not-in"?new $b(e,r):n==="array-contains-any"?new qb(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ub(e,r):new Fb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Is(n,this.value)):n!==null&&qr(this.value)===qr(n)&&this.matchesComparison(Is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends m_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Zt(e,n)}matches(e){return g_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function g_(t){return t.op==="and"}function __(t){return Lb(t)&&g_(t)}function Lb(t){for(const e of t.filters)if(e instanceof Zt)return!1;return!0}function Rl(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+ws(t.value);if(__(t))return t.filters.map(e=>Rl(e)).join(",");{const e=t.filters.map(n=>Rl(n)).join(",");return`${t.op}(${e})`}}function y_(t,e){return t instanceof Ye?function(r,s){return s instanceof Ye&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)}(t,e):t instanceof Zt?function(r,s){return s instanceof Zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&y_(o,s.filters[c]),!0):!1}(t,e):void ue()}function v_(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${ws(n.value)}`}(t):t instanceof Zt?function(n){return n.op.toString()+" {"+n.getFilters().map(v_).join(" ,")+"}"}(t):"Filter"}class Mb extends Ye{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ub extends Ye{constructor(e,n){super(e,"in",n),this.keys=E_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Fb extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=E_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function E_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class Bb extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ru(n)&&Li(n.arrayValue,this.value)}}class jb extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Li(this.value.arrayValue,n)}}class $b extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Li(this.value.arrayValue,n)}}class qb extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ru(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Li(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Vd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Hb(t,e,n,r,s,i,o)}function bu(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Wa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ws(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ws(r)).join(",")),e.ue=n}return e.ue}function Su(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!y_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dd(t.startAt,e.startAt)&&Dd(t.endAt,e.endAt)}function bl(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Wb(t,e,n,r,s,i,o,c){return new Zi(t,e,n,r,s,i,o,c)}function Ka(t){return new Zi(t)}function xd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function T_(t){return t.collectionGroup!==null}function yi(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new at(ot.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new da(i,r))}),n.has(ot.keyField().canonicalString())||e.ce.push(new da(ot.keyField(),r))}return e.ce}function mn(t){const e=de(t);return e.le||(e.le=Kb(e,yi(t))),e.le}function Kb(t,e){if(t.limitType==="F")return Vd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new da(s.field,i)});const n=t.endAt?new fa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fa(t.startAt.position,t.startAt.inclusive):null;return Vd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Sl(t,e){const n=t.filters.concat([e]);return new Zi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function pa(t,e,n){return new Zi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ga(t,e){return Su(mn(t),mn(e))&&t.limitType===e.limitType}function I_(t){return`${bu(mn(t))}|lt:${t.limitType}`}function ss(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>v_(s)).join(", ")}]`),Wa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ws(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ws(s)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function za(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of yi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Nd(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,yi(r),s)||r.endAt&&!function(o,c,l){const u=Nd(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,yi(r),s))}(t,e)}function Gb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function w_(t){return(e,n)=>{let r=!1;for(const s of yi(t)){const i=zb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function zb(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Is(l,u):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){zr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return f_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=new je(se.comparator);function Bn(){return Qb}const A_=new je(se.comparator);function ii(...t){let e=A_;for(const n of t)e=e.insert(n.key,n);return e}function R_(t){let e=A_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Nr(){return vi()}function b_(){return vi()}function vi(){return new Ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const Yb=new je(se.comparator),Jb=new at(se.comparator);function _e(...t){let e=Jb;for(const n of t)e=e.add(n);return e}const Xb=new at(Ie);function Zb(){return Xb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ha(e)?"-0":e}}function S_(t){return{integerValue:""+t}}function e0(t,e){return kb(e)?S_(e):Pu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this._=void 0}}function t0(t,e,n){return t instanceof Mi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&wu(i)&&(i=Au(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ui?C_(t,e):t instanceof Fi?k_(t,e):function(s,i){const o=P_(s,i),c=Ld(o)+Ld(s.Pe);return Al(o)&&Al(s.Pe)?S_(c):Pu(s.serializer,c)}(t,e)}function n0(t,e,n){return t instanceof Ui?C_(t,e):t instanceof Fi?k_(t,e):n}function P_(t,e){return t instanceof ma?function(r){return Al(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Mi extends Qa{}class Ui extends Qa{constructor(e){super(),this.elements=e}}function C_(t,e){const n=O_(e);for(const r of t.elements)n.some(s=>yn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Fi extends Qa{constructor(e){super(),this.elements=e}}function k_(t,e){let n=O_(e);for(const r of t.elements)n=n.filter(s=>!yn(s,r));return{arrayValue:{values:n}}}class ma extends Qa{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ld(t){return Ge(t.integerValue||t.doubleValue)}function O_(t){return Ru(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n){this.field=e,this.transform=n}}function s0(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ui&&s instanceof Ui||r instanceof Fi&&s instanceof Fi?Ts(r.elements,s.elements,yn):r instanceof ma&&s instanceof ma?yn(r.Pe,s.Pe):r instanceof Mi&&s instanceof Mi}(t.transform,e.transform)}class i0{constructor(e,n){this.version=e,this.transformResults=n}}class gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new gn}static exists(e){return new gn(void 0,e)}static updateTime(e){return new gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $o(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ya{}function N_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new V_(t.key,gn.none()):new eo(t.key,t.data,gn.none());{const n=t.data,r=Nt.empty();let s=new at(ot.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new vr(t.key,r,new Mt(s.toArray()),gn.none())}}function o0(t,e,n){t instanceof eo?function(s,i,o){const c=s.value.clone(),l=Ud(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof vr?function(s,i,o){if(!$o(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Ud(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(D_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ei(t,e,n,r){return t instanceof eo?function(i,o,c,l){if(!$o(i.precondition,o))return c;const u=i.value.clone(),f=Fd(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof vr?function(i,o,c,l){if(!$o(i.precondition,o))return c;const u=Fd(i.fieldTransforms,l,o),f=o.data;return f.setAll(D_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return $o(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function a0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=P_(r.transform,s||null);i!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,i))}return n||null}function Md(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ts(r,s,(i,o)=>s0(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class eo extends Ya{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vr extends Ya{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function D_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ud(t,e,n){const r=new Map;Ce(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,n0(o,c,n[s]))}return r}function Fd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,t0(i,o,e))}return r}class V_ extends Ya{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class c0 extends Ya{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&o0(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ei(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ei(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=b_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=N_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,(n,r)=>Md(n,r))&&Ts(this.baseMutations,e.baseMutations,(n,r)=>Md(n,r))}}class Cu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length);let s=function(){return Yb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Cu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,Ee;function f0(t){switch(t){default:return ue();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function x_(t){if(t===void 0)return Fn("GRPC error has no .code"),U.UNKNOWN;switch(t){case Qe.OK:return U.OK;case Qe.CANCELLED:return U.CANCELLED;case Qe.UNKNOWN:return U.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return U.INTERNAL;case Qe.UNAVAILABLE:return U.UNAVAILABLE;case Qe.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Qe.NOT_FOUND:return U.NOT_FOUND;case Qe.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Qe.ABORTED:return U.ABORTED;case Qe.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Qe.DATA_LOSS:return U.DATA_LOSS;default:return ue()}}(Ee=Qe||(Qe={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=new Lr([4294967295,4294967295],0);function Bd(t){const e=d0().encode(t),n=new s_;return n.update(e),new Uint8Array(n.digest())}function jd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Lr([n,r],0),new Lr([s,i],0)]}class ku{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new oi(`Invalid padding: ${n}`);if(r<0)throw new oi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new oi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new oi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Lr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Lr.fromNumber(r)));return s.compare(p0)===1&&(s=new Lr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Bd(e),[r,s]=jd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ku(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Bd(e),[r,s]=jd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class oi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,to.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ja(he.min(),s,new je(Ie),Bn(),_e())}}class to{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new to(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class L_{constructor(e,n){this.targetId=e,this.me=n}}class M_{constructor(e,n,r=ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class $d{constructor(){this.fe=0,this.ge=Hd(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),n=_e(),r=_e();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue()}}),new to(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Hd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class m0{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bn(),this.qe=qd(),this.Qe=new je(Ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(bl(i))if(r===0){const o=new se(i.path);this.Ue(n,o,gt.newNoDocument(o,he.min()))}else Ce(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=$r(r).toUint8Array()}catch(l){if(l instanceof d_)return Es("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new ku(o,s,i)}catch(l){return Es(l instanceof oi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&bl(c.target)){const l=new se(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,gt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=_e();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ja(e,n,this.Qe,this.ke,r);return this.ke=Bn(),this.qe=qd(),this.Qe=new je(Ie),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new $d,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(Ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new $d),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function qd(){return new je(se.comparator)}function Hd(){return new je(se.comparator)}const g0={asc:"ASCENDING",desc:"DESCENDING"},_0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},y0={and:"AND",or:"OR"};class v0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pl(t,e){return t.useProto3Json||Wa(e)?e:{value:e}}function ga(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function U_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function E0(t,e){return ga(t,e.toTimestamp())}function _n(t){return Ce(!!t),he.fromTimestamp(function(n){const r=gr(n);return new Xe(r.seconds,r.nanos)}(t))}function Ou(t,e){return Cl(t,e).canonicalString()}function Cl(t,e){const n=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function F_(t){const e=Ve.fromString(t);return Ce(H_(e)),e}function kl(t,e){return Ou(t.databaseId,e.path)}function Hc(t,e){const n=F_(e);if(n.get(1)!==t.databaseId.projectId)throw new J(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(j_(n))}function B_(t,e){return Ou(t.databaseId,e)}function T0(t){const e=F_(t);return e.length===4?Ve.emptyPath():j_(e)}function Ol(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function j_(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Wd(t,e,n){return{name:kl(t,e),fields:n.value.mapValue.fields}}function I0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Ce(f===void 0||typeof f=="string"),ct.fromBase64String(f||"")):(Ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ct.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const f=u.code===void 0?U.UNKNOWN:x_(u.code);return new J(f,u.message||"")}(o);n=new M_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hc(t,r.document.name),i=_n(r.document.updateTime),o=r.document.createTime?_n(r.document.createTime):he.min(),c=new Nt({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new qo(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hc(t,r.document),i=r.readTime?_n(r.readTime):he.min(),o=gt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new qo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hc(t,r.document),i=r.removedTargetIds||[];n=new qo([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new h0(s,i),c=r.targetId;n=new L_(c,o)}}return n}function w0(t,e){let n;if(e instanceof eo)n={update:Wd(t,e.key,e.value)};else if(e instanceof V_)n={delete:kl(t,e.key)};else if(e instanceof vr)n={update:Wd(t,e.key,e.data),updateMask:N0(e.fieldMask)};else{if(!(e instanceof c0))return ue();n={verify:kl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Mi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ui)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Fi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ma)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:E0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function A0(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?_n(s.updateTime):_n(i);return o.isEqual(he.min())&&(o=_n(i)),new i0(o,s.transformResults||[])}(n,e))):[]}function R0(t,e){return{documents:[B_(t,e.path)]}}function b0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=B_(t,s);const i=function(u){if(u.length!==0)return q_(Zt.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:is(m.field),direction:C0(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Pl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function S0(t){let e=T0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=$_(p);return m instanceof Zt&&__(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(S){return new da(os(S.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,Wa(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,_=p.values||[];return new fa(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new fa(_,m)}(n.endAt)),Wb(e,s,o,i,c,"F",l,u)}function P0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=os(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=os(n.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=os(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=os(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(os(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Zt.create(n.compositeFilter.filters.map(r=>$_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function C0(t){return g0[t]}function k0(t){return _0[t]}function O0(t){return y0[t]}function is(t){return{fieldPath:t.canonicalString()}}function os(t){return ot.fromServerFormat(t.fieldPath)}function q_(t){return t instanceof Ye?function(n){if(n.op==="=="){if(Od(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NAN"}};if(kd(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Od(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NOT_NAN"}};if(kd(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:is(n.field),op:k0(n.op),value:n.value}}}(t):t instanceof Zt?function(n){const r=n.getFilters().map(s=>q_(s));return r.length===1?r[0]:{compositeFilter:{op:O0(n.op),filters:r}}}(t):ue()}function N0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function H_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,r,s,i=he.min(),o=he.min(),c=ct.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e){this.ct=e}}function V0(t){const e=S0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(){this.un=new L0}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(mr.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(mr.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class L0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(Ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new As(0)}static kn(){return new As(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(){this.changes=new Ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ei(r.mutation,s,Mt.empty(),Xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=Nr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ii();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Nr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Bn();const o=vi(),c=function(){return vi()}();return n.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof vr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ei(f.mutation,u,f.mutation.getFieldMask(),Xe.now())):o.set(u.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return c.set(u,new U0(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=vi();let s=new je((o,c)=>o-c),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Mt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=b_();f.forEach(m=>{if(!i.has(m)){const _=N_(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):T_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Nr());let c=-1,l=i;return o.next(u=>$.forEach(u,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,_e())).next(f=>({batchId:c,changes:R_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=ii();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ii();return this.indexManager.getCollectionParents(e,i).next(c=>$.forEach(c,l=>{const u=function(p,m){return new Zi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,gt.newInvalidDocument(f)))});let c=ii();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&Ei(f.mutation,u,Mt.empty(),Xe.now()),za(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:_n(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:V0(s.bundledQuery),readTime:_n(s.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(){this.overlays=new je(se.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Nr();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Nr(),i=n.length+1,o=new se(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Nr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Nr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>c.set(u,f)),!(c.size()>=s)););return $.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new u0(n,r));let i=this.Ir.get(n);i===void 0&&(i=_e(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this.Tr=new at(nt.Er),this.dr=new at(nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new nt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new se(new Ve([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new se(new Ve([])),r=new nt(n,e),s=new nt(n,e+1);let i=_e();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new nt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return se.comparator(e.key,n.key)||Ie(e.wr,n.wr)}static Ar(e,n){return Ie(e.wr,n.wr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new at(nt.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new l0(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new nt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(Ie);return n.forEach(s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new nt(new se(i),0);let c=new at(Ie);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.wr)),!0)},o),$.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new nt(n,0),s=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.Mr=e,this.docs=function(){return new je(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Bn();const o=n.path,c=new se(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||bb(Rb(f),r)<=0||(s.has(f.key)||za(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new W0(this)}getSize(e){return $.resolve(this.size)}}class W0 extends M0{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e){this.persistence=e,this.Nr=new Ns(n=>bu(n),Su),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Nu,this.targetCount=0,this.kr=As.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new As(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Iu(0),this.Kr=!1,this.Kr=!0,this.$r=new $0,this.referenceDelegate=e(this),this.Ur=new K0(this),this.indexManager=new x0,this.remoteDocumentCache=function(s){return new H0(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new D0(n),this.Gr=new B0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new j0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new q0(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new z0(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class z0 extends Pb{constructor(e){super(),this.currentSequenceNumber=e}}class Du{constructor(e){this.persistence=e,this.Jr=new Nu,this.Yr=null}static Zr(e){return new Du(e)}get Xr(){if(this.Yr)return this.Yr;throw ue()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const s=se.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Vu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return VI()?8:Cb(Et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Q0;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Ys()<=ve.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",ss(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Ys()<=ve.DEBUG&&Z("QueryEngine","Query:",ss(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ys()<=ve.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",ss(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):$.resolve())}Yi(e,n){if(xd(n))return $.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=pa(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(n,c);return this.ns(n,u,o,l.readTime)?this.Yi(e,pa(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,r,s){return xd(n)||s.isEqual(he.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?$.resolve(null):(Ys()<=ve.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ss(n)),this.rs(e,o,n,Ab(s,-1)).next(c=>c))})}ts(e,n){let r=new at(w_(e));return n.forEach((s,i)=>{za(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Ys()<=ve.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",ss(n)),this.Ji.getDocumentsMatchingQuery(e,n,mr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new je(Ie),this._s=new Ns(i=>bu(i),Su),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new F0(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function X0(t,e,n,r){return new J0(t,e,n,r)}async function W_(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=_e();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:c}))})})}function Z0(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,f){const p=u.batch,m=p.keys();let _=$.resolve();return m.forEach(S=>{_=_.next(()=>f.getEntry(l,S)).next(k=>{const O=u.docVersions.get(S);Ce(O!==null),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=_e();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function K_(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function eS(t,e){const n=de(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ct.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(k,O,q){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(m,_,f)&&c.push(n.Ur.updateTargetData(i,_))});let l=Bn(),u=_e();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(tS(i,o,e.documentUpdates).next(f=>{l=f.Ps,u=f.Is})),!r.isEqual(he.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return $.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=s,i))}function tS(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Bn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Z("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function nS(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rS(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Nl(t,e,n){const r=de(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Xi(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Kd(t,e,n){const r=de(t);let s=he.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const p=de(l),m=p._s.get(f);return m!==void 0?$.resolve(p.os.get(m)):p.Ur.getTargetData(u,f)}(r,o,mn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:_e())).next(c=>(sS(r,Gb(e),c),{documents:c,Ts:i})))}function sS(t,e,n){let r=t.us.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Gd{constructor(){this.activeTargetIds=Zb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iS{constructor(){this.so=new Gd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Gd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko=null;function Wc(){return ko===null?ko=function(){return 268435456+Math.round(2147483648*Math.random())}():ko++,"0x"+ko.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class lS extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=Wc(),l=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,s).then(f=>(Z("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw Es("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Os}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=aS[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Wc();return new Promise((o,c)=>{const l=new i_;l.setWithCredentials(!0),l.listenOnce(o_.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Bo.NO_ERROR:const f=l.getResponseJson();Z(ft,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Bo.TIMEOUT:Z(ft,`RPC '${e}' ${i} timed out`),c(new J(U.DEADLINE_EXCEEDED,"Request time out"));break;case Bo.HTTP_ERROR:const p=l.getStatus();if(Z(ft,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const S=function(O){const q=O.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(q)>=0?q:U.UNKNOWN}(_.status);c(new J(S,_.message))}else c(new J(U.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new J(U.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{Z(ft,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);Z(ft,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=Wc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=l_(),c=c_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Z(ft,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let m=!1,_=!1;const S=new cS({Io:O=>{_?Z(ft,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(Z(ft,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(ft,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},To:()=>p.close()}),k=(O,q,L)=>{O.listen(q,F=>{try{L(F)}catch(B){setTimeout(()=>{throw B},0)}})};return k(p,si.EventType.OPEN,()=>{_||(Z(ft,`RPC '${e}' stream ${s} transport opened.`),S.yo())}),k(p,si.EventType.CLOSE,()=>{_||(_=!0,Z(ft,`RPC '${e}' stream ${s} transport closed`),S.So())}),k(p,si.EventType.ERROR,O=>{_||(_=!0,Es(ft,`RPC '${e}' stream ${s} transport errored:`,O),S.So(new J(U.UNAVAILABLE,"The operation could not be completed")))}),k(p,si.EventType.MESSAGE,O=>{var q;if(!_){const L=O.data[0];Ce(!!L);const F=L,B=F.error||((q=F[0])===null||q===void 0?void 0:q.error);if(B){Z(ft,`RPC '${e}' stream ${s} received error:`,B);const X=B.status;let ne=function(y){const I=Qe[y];if(I!==void 0)return x_(I)}(X),R=B.message;ne===void 0&&(ne=U.INTERNAL,R="Unknown error status: "+X+" with message "+B.message),_=!0,S.So(new J(ne,R)),p.close()}else Z(ft,`RPC '${e}' stream ${s} received:`,L),S.bo(L)}}),k(c,a_.STAT_EVENT,O=>{O.stat===Il.PROXY?Z(ft,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Il.NOPROXY&&Z(ft,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Kc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(t){return new v0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new G_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new J(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uS extends z_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=I0(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?_n(o.readTime):he.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Ol(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=bl(l)?{documents:R0(i,l)}:{query:b0(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=U_(i,o.resumeToken);const u=Pl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){c.readTime=ga(i,o.snapshotVersion.toTimestamp());const u=Pl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=P0(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Ol(this.serializer),n.removeTarget=e,this.a_(n)}}class hS extends z_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=A0(e.writeResults,e.commitTime),r=_n(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ol(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>w0(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new J(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Cl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(U.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Cl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(U.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class dS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Fn(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Qr(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=de(l);u.L_.add(4),await no(u),u.q_.set("Unknown"),u.L_.delete(4),await Za(u)}(this))})}),this.q_=new dS(r,s)}}async function Za(t){if(Qr(t))for(const e of t.B_)await e(!0)}async function no(t){for(const e of t.B_)await e(!1)}function Q_(t,e){const n=de(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Uu(n)?Mu(n):Ds(n).r_()&&Lu(n,e))}function xu(t,e){const n=de(t),r=Ds(n);n.N_.delete(e),r.r_()&&Y_(n,e),n.N_.size===0&&(r.r_()?r.o_():Qr(n)&&n.q_.set("Unknown"))}function Lu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ds(t).A_(e)}function Y_(t,e){t.Q_.xe(e),Ds(t).R_(e)}function Mu(t){t.Q_=new m0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ds(t).start(),t.q_.v_()}function Uu(t){return Qr(t)&&!Ds(t).n_()&&t.N_.size>0}function Qr(t){return de(t).L_.size===0}function J_(t){t.Q_=void 0}async function mS(t){t.q_.set("Online")}async function gS(t){t.N_.forEach((e,n)=>{Lu(t,e)})}async function _S(t,e){J_(t),Uu(t)?(t.q_.M_(e),Mu(t)):t.q_.set("Unknown")}async function yS(t,e,n){if(t.q_.set("Online"),e instanceof M_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _a(t,r)}else if(e instanceof qo?t.Q_.Ke(e):e instanceof L_?t.Q_.He(e):t.Q_.We(e),!n.isEqual(he.min()))try{const r=await K_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(u);f&&i.N_.set(u,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(ct.EMPTY_BYTE_STRING,f.snapshotVersion)),Y_(i,l);const p=new cr(f.target,l,u,f.sequenceNumber);Lu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await _a(t,r)}}async function _a(t,e,n){if(!Xi(e))throw e;t.L_.add(1),await no(t),t.q_.set("Offline"),n||(n=()=>K_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Za(t)})}function X_(t,e){return e().catch(n=>_a(t,n,e))}async function ec(t){const e=de(t),n=_r(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;vS(e);)try{const s=await nS(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,ES(e,s)}catch(s){await _a(e,s)}Z_(e)&&ey(e)}function vS(t){return Qr(t)&&t.O_.length<10}function ES(t,e){t.O_.push(e);const n=_r(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Z_(t){return Qr(t)&&!_r(t).n_()&&t.O_.length>0}function ey(t){_r(t).start()}async function TS(t){_r(t).p_()}async function IS(t){const e=_r(t);for(const n of t.O_)e.m_(n.mutations)}async function wS(t,e,n){const r=t.O_.shift(),s=Cu.from(r,e,n);await X_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ec(t)}async function AS(t,e){e&&_r(t).V_&&await async function(r,s){if(function(o){return f0(o)&&o!==U.ABORTED}(s.code)){const i=r.O_.shift();_r(r).s_(),await X_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ec(r)}}(t,e),Z_(t)&&ey(t)}async function Qd(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Qr(n);n.L_.add(3),await no(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Za(n)}async function RS(t,e){const n=de(t);e?(n.L_.delete(2),await Za(n)):e||(n.L_.add(2),await no(n),n.q_.set("Unknown"))}function Ds(t){return t.K_||(t.K_=function(n,r,s){const i=de(n);return i.w_(),new uS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:mS.bind(null,t),Ro:gS.bind(null,t),mo:_S.bind(null,t),d_:yS.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Uu(t)?Mu(t):t.q_.set("Unknown")):(await t.K_.stop(),J_(t))})),t.K_}function _r(t){return t.U_||(t.U_=function(n,r,s){const i=de(n);return i.w_(),new hS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:TS.bind(null,t),mo:AS.bind(null,t),f_:IS.bind(null,t),g_:wS.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ec(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Fu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bu(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),Xi(t))return new J(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=ii(),this.sortedSet=new je(this.comparator)}static emptySet(e){return new gs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.W_=new je(se.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ue():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Rs{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Rs(e,n,gs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ga(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class SS{constructor(){this.queries=Jd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=Jd(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new J(U.ABORTED,"Firestore shutting down"))}}function Jd(){return new Ns(t=>I_(t),Ga)}async function ju(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new bS,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Bu(o,`Initialization of query '${ss(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&qu(n)}async function $u(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function PS(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&qu(n)}function CS(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function qu(t){t.Y_.forEach(e=>{e.next()})}var Dl,Xd;(Xd=Dl||(Dl={})).ea="default",Xd.Cache="cache";class Hu{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Dl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.key=e}}class ny{constructor(e){this.key=e}}class kS{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=_e(),this.mutatedKeys=_e(),this.Aa=w_(e),this.Ra=new gs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Yd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),_=za(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let O=!1;m&&_?m.data.isEqual(_.data)?S!==k&&(r.track({type:3,doc:_}),O=!0):this.ga(m,_)||(r.track({type:2,doc:_}),O=!0,(l&&this.Aa(_,l)>0||u&&this.Aa(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),O=!0):m&&!_&&(r.track({type:1,doc:m}),O=!0,(l||u)&&(c=!0)),O&&(_?(o=o.add(_),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(_,S){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return k(_)-k(S)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new Rs(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Yd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=_e(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new ny(r))}),this.da.forEach(r=>{e.has(r)||n.push(new ty(r))}),n}ba(e){this.Ta=e.Ts,this.da=_e();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Rs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class OS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class NS{constructor(e){this.key=e,this.va=!1}}class DS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ns(c=>I_(c),Ga),this.Ma=new Map,this.xa=new Set,this.Oa=new je(se.comparator),this.Na=new Map,this.La=new Nu,this.Ba={},this.ka=new Map,this.qa=As.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function VS(t,e,n=!0){const r=cy(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await ry(r,e,n,!0),s}async function xS(t,e){const n=cy(t);await ry(n,e,!0,!1)}async function ry(t,e,n,r){const s=await rS(t.localStore,mn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await LS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Q_(t.remoteStore,s),c}async function LS(t,e,n,r,s){t.Ka=(p,m,_)=>async function(k,O,q,L){let F=O.view.ma(q);F.ns&&(F=await Kd(k.localStore,O.query,!1).then(({documents:R})=>O.view.ma(R,F)));const B=L&&L.targetChanges.get(O.targetId),X=L&&L.targetMismatches.get(O.targetId)!=null,ne=O.view.applyChanges(F,k.isPrimaryClient,B,X);return ep(k,O.targetId,ne.wa),ne.snapshot}(t,p,m,_);const i=await Kd(t.localStore,e,!0),o=new kS(e,i.Ts),c=o.ma(i.documents),l=to.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);ep(t,n,u.wa);const f=new OS(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function MS(t,e,n){const r=de(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Ga(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Nl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&xu(r.remoteStore,s.targetId),Vl(r,s.targetId)}).catch(Ji)):(Vl(r,s.targetId),await Nl(r.localStore,s.targetId,!0))}async function US(t,e){const n=de(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xu(n.remoteStore,r.targetId))}async function FS(t,e,n){const r=KS(t);try{const s=await function(o,c){const l=de(o),u=Xe.now(),f=c.reduce((_,S)=>_.add(S.key),_e());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=Bn(),k=_e();return l.cs.getEntries(_,f).next(O=>{S=O,S.forEach((q,L)=>{L.isValidDocument()||(k=k.add(q))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,S)).next(O=>{p=O;const q=[];for(const L of c){const F=a0(L,p.get(L.key).overlayedDocument);F!=null&&q.push(new vr(L.key,F,p_(F.value.mapValue),gn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,q,c)}).next(O=>{m=O;const q=O.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(_,O.batchId,q)})}).then(()=>({batchId:m.batchId,changes:R_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new je(Ie)),u=u.insert(c,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await ro(r,s.changes),await ec(r.remoteStore)}catch(s){const i=Bu(s,"Failed to persist write");n.reject(i)}}async function sy(t,e){const n=de(t);try{const r=await eS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ce(o.va):s.removedDocuments.size>0&&(Ce(o.va),o.va=!1))}),await ro(n,r,e)}catch(r){await Ji(r)}}function Zd(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=de(o);l.onlineState=c;let u=!1;l.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(c)&&(u=!0)}),u&&qu(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BS(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new je(se.comparator);o=o.insert(i,gt.newNoDocument(i,he.min()));const c=_e().add(i),l=new Ja(he.min(),new Map,new je(Ie),o,c);await sy(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Wu(r)}else await Nl(r.localStore,e,!1).then(()=>Vl(r,e,n)).catch(Ji)}async function jS(t,e){const n=de(t),r=e.batch.batchId;try{const s=await Z0(n.localStore,e);oy(n,r,null),iy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ro(n,s)}catch(s){await Ji(s)}}async function $S(t,e,n){const r=de(t);try{const s=await function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Ce(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(r.localStore,e);oy(r,e,n),iy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ro(r,s)}catch(s){await Ji(s)}}function iy(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function oy(t,e,n){const r=de(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Vl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||ay(t,r)})}function ay(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(xu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Wu(t))}function ep(t,e,n){for(const r of n)r instanceof ty?(t.La.addReference(r.key,e),qS(t,r)):r instanceof ny?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||ay(t,r.key)):ue()}function qS(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),Wu(t))}function Wu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new se(Ve.fromString(e)),r=t.qa.next();t.Na.set(r,new NS(n)),t.Oa=t.Oa.insert(n,r),Q_(t.remoteStore,new cr(mn(Ka(n.path)),r,"TargetPurposeLimboResolution",Iu.oe))}}async function ro(t,e,n){const r=de(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Vu.Wi(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const f=de(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(u,m=>$.forEach(m.$i,_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>$.forEach(m.Ui,_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Xi(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=f.os.get(m),S=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(m,k)}}}(r.localStore,i))}async function HS(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await W_(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new J(U.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ro(n,r.hs)}}function WS(t,e){const n=de(t),r=n.Na.get(e);if(r&&r.va)return _e().add(r.key);{let s=_e();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function cy(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BS.bind(null,e),e.Ca.d_=PS.bind(null,e.eventManager),e.Ca.$a=CS.bind(null,e.eventManager),e}function KS(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$S.bind(null,e),e}class ya{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xa(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return X0(this.persistence,new Y0,e.initialUser,this.serializer)}Ga(e){return new G0(Du.Zr,this.serializer)}Wa(e){return new iS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ya.provider={build:()=>new ya};class xl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HS.bind(null,this.syncEngine),await RS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SS}()}createDatastore(e){const n=Xa(e.databaseInfo.databaseId),r=function(i){return new lS(i)}(e.databaseInfo);return function(i,o,c,l){return new fS(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new pS(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Zd(this.syncEngine,n,0),function(){return zd.D()?new zd:new oS}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,f){const p=new DS(s,i,o,c,l,u);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);Z("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await no(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}xl.provider={build:()=>new xl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=h_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Bu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gc(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await W_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function tp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zS(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Qd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Qd(e.remoteStore,s)),t._onlineComponents=e}async function zS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Es("Error using user provided cache. Falling back to memory cache: "+n),await Gc(t,new ya)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await Gc(t,new ya);return t._offlineComponents}async function ly(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await tp(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await tp(t,new xl))),t._onlineComponents}function QS(t){return ly(t).then(e=>e.syncEngine)}async function va(t){const e=await ly(t),n=e.eventManager;return n.onListen=VS.bind(null,e.syncEngine),n.onUnlisten=MS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=US.bind(null,e.syncEngine),n}function YS(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new Ku({next:m=>{f.Za(),o.enqueueAndForget(()=>$u(i,p));const _=m.docs.has(c);!_&&m.fromCache?u.reject(new J(U.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new J(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Hu(Ka(c.path),f,{includeMetadataChanges:!0,_a:!0});return ju(i,p)}(await va(t),t.asyncQueue,e,n,r)),r.promise}function JS(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new Ku({next:m=>{f.Za(),o.enqueueAndForget(()=>$u(i,p)),m.fromCache&&l.source==="server"?u.reject(new J(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Hu(c,f,{includeMetadataChanges:!0,_a:!0});return ju(i,p)}(await va(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t,e,n){if(!n)throw new J(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XS(t,e,n,r){if(e===!0&&r===!0)throw new J(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rp(t){if(!se.isDocumentKey(t))throw new J(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sp(t){if(se.isDocumentKey(t))throw new J(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function tc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function Kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tc(t);throw new J(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ip({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ip(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mb;switch(r.type){case"firstParty":return new vb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=np.get(n);r&&(Z("ComponentProvider","Removing Datastore"),np.delete(n),r.terminate())}(this),Promise.resolve()}}function ZS(t,e,n,r={}){var s;const i=(t=Kt(t,nc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=pt.MOCK_USER;else{c=vg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new J(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new pt(u)}t._authCredentials=new gb(new u_(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Er(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class fr extends Er{constructor(e,n,r){super(e,n,Ka(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new se(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function fy(t,e,...n){if(t=Be(t),hy("collection","path",e),t instanceof nc){const r=Ve.fromString(e,...n);return sp(r),new fr(t,null,r)}{if(!(t instanceof vt||t instanceof fr))throw new J(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return sp(r),new fr(t.firestore,null,r)}}function dy(t,e,...n){if(t=Be(t),arguments.length===1&&(e=h_.newId()),hy("doc","path",e),t instanceof nc){const r=Ve.fromString(e,...n);return rp(r),new vt(t,null,new se(r))}{if(!(t instanceof vt||t instanceof fr))throw new J(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return rp(r),new vt(t.firestore,t instanceof fr?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new G_(this,"async_queue_retry"),this.Vu=()=>{const r=Kc();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Kc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Dn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Xi(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Fn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Fu.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ue()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function ap(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Hr extends nc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new op,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new op(e),this._firestoreClient=void 0,await e}}}function eP(t,e){const n=typeof t=="object"?t:fu(),r=typeof t=="string"?t:"(default)",s=Fa(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=gg("firestore");i&&ZS(s,...i)}return s}function rc(t){if(t._terminated)throw new J(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||tP(t),t._firestoreClient}function tP(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,f){return new Nb(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,uy(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new GS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bs(ct.fromBase64String(e))}catch(n){throw new J(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bs(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=/^__.*__$/;class rP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new eo(e,this.data,n,this.fieldTransforms)}}class py{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new vr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function my(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class Qu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Qu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ea(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(my(this.Cu)&&nP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class sP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xa(e)}Qu(e,n,r,s=!1){return new Qu({Cu:e,methodName:n,qu:r,path:ot.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yu(t){const e=t._freezeSettings(),n=Xa(t._databaseId);return new sP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function iP(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Xu("Data must be an object, but it was:",o,r);const c=gy(r,o);let l,u;if(i.merge)l=new Mt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Ll(e,p,n);if(!o.contains(m))throw new J(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);yy(f,m)||f.push(m)}l=new Mt(f),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new rP(new Nt(c),l,u)}class oc extends ic{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oc}}class Ju extends ic{_toFieldTransform(e){return new r0(e.path,new Mi)}isEqual(e){return e instanceof Ju}}function oP(t,e,n,r){const s=t.Qu(1,e,n);Xu("Data must be an object, but it was:",s,r);const i=[],o=Nt.empty();zr(r,(l,u)=>{const f=Zu(e,l,n);u=Be(u);const p=s.Nu(f);if(u instanceof oc)i.push(f);else{const m=so(u,p);m!=null&&(i.push(f),o.set(f,m))}});const c=new Mt(i);return new py(o,c,s.fieldTransforms)}function aP(t,e,n,r,s,i){const o=t.Qu(1,e,n),c=[Ll(e,r,n)],l=[s];if(i.length%2!=0)throw new J(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Ll(e,i[m])),l.push(i[m+1]);const u=[],f=Nt.empty();for(let m=c.length-1;m>=0;--m)if(!yy(u,c[m])){const _=c[m];let S=l[m];S=Be(S);const k=o.Nu(_);if(S instanceof oc)u.push(_);else{const O=so(S,k);O!=null&&(u.push(_),f.set(_,O))}}const p=new Mt(u);return new py(f,p,o.fieldTransforms)}function cP(t,e,n,r=!1){return so(n,t.Qu(r?4:3,e))}function so(t,e){if(_y(t=Be(t)))return Xu("Unsupported field value:",e,t),gy(t,e);if(t instanceof ic)return function(r,s){if(!my(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=so(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return e0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Xe.fromDate(r);return{timestampValue:ga(s.serializer,i)}}if(r instanceof Xe){const i=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ga(s.serializer,i)}}if(r instanceof Gu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bs)return{bytesValue:U_(s.serializer,r._byteString)};if(r instanceof vt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ou(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof zu)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Pu(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${tc(r)}`)}(t,e)}function gy(t,e){const n={};return f_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zr(t,(r,s)=>{const i=so(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function _y(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof Gu||t instanceof bs||t instanceof vt||t instanceof ic||t instanceof zu)}function Xu(t,e,n){if(!_y(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=tc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Ll(t,e,n){if((e=Be(e))instanceof sc)return e._internalPath;if(typeof e=="string")return Zu(t,e);throw Ea("Field path arguments must be of type string or ",t,!1,void 0,n)}const lP=new RegExp("[~\\*/\\[\\]]");function Zu(t,e,n){if(e.search(lP)>=0)throw Ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sc(...e.split("."))._internalPath}catch{throw Ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ea(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new J(U.INVALID_ARGUMENT,c+t+l)}function yy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(eh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uP extends vy{data(){return super.data()}}function eh(t,e){return typeof e=="string"?Zu(t,e):e instanceof sc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class th{}class Ty extends th{}function hP(t,e,...n){let r=[];e instanceof th&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof nh).length,c=i.filter(l=>l instanceof ac).length;if(o>1||o>0&&c>0)throw new J(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ac extends Ty{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ac(e,n,r)}_apply(e){const n=this._parse(e);return Iy(e._query,n),new Er(e.firestore,e.converter,Sl(e._query,n))}_parse(e){const n=Yu(e.firestore);return function(i,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new J(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){lp(p,f);const _=[];for(const S of p)_.push(cp(l,i,S));m={arrayValue:{values:_}}}else m=cp(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||lp(p,f),m=cP(c,o,p,f==="in"||f==="not-in");return Ye.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fP(t,e,n){const r=e,s=eh("where",t);return ac._create(s,r,n)}class nh extends th{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new nh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Iy(o,l),o=Sl(o,l)}(e._query,n),new Er(e.firestore,e.converter,Sl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class rh extends Ty{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new rh(e,n,r)}_apply(e){return new Er(e.firestore,e.converter,pa(e._query,this._limit,this._limitType))}}function dP(t){return rh._create("limit",t,"F")}function cp(t,e,n){if(typeof(n=Be(n))=="string"){if(n==="")throw new J(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!T_(e)&&n.indexOf("/")!==-1)throw new J(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!se.isDocumentKey(r))throw new J(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cd(t,new se(r))}if(n instanceof vt)return Cd(t,n._key);throw new J(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tc(n)}.`)}function lp(t,e){if(!Array.isArray(t)||t.length===0)throw new J(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Iy(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class pP{convertValue(e,n="none"){switch(qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return zr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ge(o.doubleValue));return new zu(i)}convertGeoPoint(e){return new Gu(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Au(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vi(e));default:return null}}convertTimestamp(e){const n=gr(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Ce(H_(r));const s=new xi(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||Fn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wy extends vy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ho(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(eh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ho extends wy{data(e={}){return super.data(e)}}class Ay{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ai(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ho(this._firestore,this._userDataWriter,r.key,r,new ai(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Ho(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ai(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Ho(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ai(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:gP(c.type),doc:l,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function gP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t){t=Kt(t,vt);const e=Kt(t.firestore,Hr);return YS(rc(e),t._key).then(n=>by(e,t,n))}class sh extends pP{constructor(e){super(),this.firestore=e}convertBytes(e){return new bs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function yP(t){t=Kt(t,Er);const e=Kt(t.firestore,Hr),n=rc(e),r=new sh(e);return Ey(t._query),JS(n,t._query).then(s=>new Ay(e,r,t,s))}function vP(t,e,n){t=Kt(t,vt);const r=Kt(t.firestore,Hr),s=mP(t.converter,e);return Ry(r,[iP(Yu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,gn.none())])}function EP(t,e,n,...r){t=Kt(t,vt);const s=Kt(t.firestore,Hr),i=Yu(s);let o;return o=typeof(e=Be(e))=="string"||e instanceof sc?aP(i,"updateDoc",t._key,e,n,r):oP(i,"updateDoc",t._key,e),Ry(s,[o.toMutation(t._key,gn.exists(!0))])}function mO(t,...e){var n,r,s;t=Be(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||ap(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(ap(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,u,f;if(t instanceof vt)u=Kt(t.firestore,Hr),f=Ka(t._key.path),l={next:p=>{e[o]&&e[o](by(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Kt(t,Er);u=Kt(p.firestore,Hr),f=p._query;const m=new sh(u);l={next:_=>{e[o]&&e[o](new Ay(u,m,p,_))},error:e[o+1],complete:e[o+2]},Ey(t._query)}return function(m,_,S,k){const O=new Ku(k),q=new Hu(_,O,S);return m.asyncQueue.enqueueAndForget(async()=>ju(await va(m),q)),()=>{O.Za(),m.asyncQueue.enqueueAndForget(async()=>$u(await va(m),q))}}(rc(u),f,c,l)}function Ry(t,e){return function(r,s){const i=new Dn;return r.asyncQueue.enqueueAndForget(async()=>FS(await QS(r),s,i)),i.promise}(rc(t),e)}function by(t,e,n){const r=n.docs.get(e._key),s=new sh(t);return new wy(t,s,e._key,r,new ai(n.hasPendingWrites,n.fromCache),e.converter)}function Ml(){return new Ju("serverTimestamp")}(function(e,n=!0){(function(s){Os=s})(Gr),Fr(new pr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Hr(new _b(r.getProvider("auth-internal")),new Tb(r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new J(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),fn(Ad,"4.7.3",e),fn(Ad,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="firebasestorage.googleapis.com",Py="storageBucket",TP=2*60*1e3,IP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends vn{constructor(e,n,r=0){super(zc(e),`Firebase Storage: ${n} (${zc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,We.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return zc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var He;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(He||(He={}));function zc(t){return"storage/"+t}function ih(){const t="An unknown error occurred, please check the error payload for server response.";return new We(He.UNKNOWN,t)}function wP(t){return new We(He.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function AP(t){return new We(He.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function RP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new We(He.UNAUTHENTICATED,t)}function bP(){return new We(He.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function SP(t){return new We(He.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function PP(){return new We(He.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function CP(){return new We(He.CANCELED,"User canceled the upload/download.")}function kP(t){return new We(He.INVALID_URL,"Invalid URL '"+t+"'.")}function OP(t){return new We(He.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function NP(){return new We(He.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Py+"' property when initializing the app?")}function DP(){return new We(He.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function VP(){return new We(He.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function xP(t){return new We(He.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ul(t){return new We(He.INVALID_ARGUMENT,t)}function Cy(){return new We(He.APP_DELETED,"The Firebase app was deleted.")}function LP(t){return new We(He.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ti(t,e){return new We(He.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Js(t){throw new We(He.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ut.makeFromUrl(e,n)}catch{return new Ut(e,"")}if(r.path==="")return r;throw OP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(B){B.path_=decodeURIComponent(B.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${f}/b/${s}/o${m}`,"i"),S={bucket:1,path:3},k=n===Sy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",q=new RegExp(`^https?://${k}/${s}/${O}`,"i"),F=[{regex:c,indices:l,postModify:i},{regex:_,indices:S,postModify:u},{regex:q,indices:{bucket:1,path:2},postModify:u}];for(let B=0;B<F.length;B++){const X=F[B],ne=X.regex.exec(e);if(ne){const R=ne[X.indices.bucket];let v=ne[X.indices.path];v||(v=""),r=new Ut(R,v),X.postModify(r);break}}if(r==null)throw kP(e);return r}}class MP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function f(...O){u||(u=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(_,l())},O)}function m(){i&&clearTimeout(i)}function _(O,...q){if(u){m();return}if(O){m(),f.call(null,O,...q);return}if(l()||o){m(),f.call(null,O,...q);return}r<64&&(r*=2);let F;c===1?(c=2,F=0):F=(r+Math.random())*1e3,p(F)}let S=!1;function k(O){S||(S=!0,m(),!u&&(s!==null?(O||(c=2),clearTimeout(s),p(0)):O||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,k(!0)},n),k}function FP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(t){return t!==void 0}function jP(t){return typeof t=="object"&&!Array.isArray(t)}function oh(t){return typeof t=="string"||t instanceof String}function up(t){return ah()&&t instanceof Blob}function ah(){return typeof Blob<"u"}function hp(t,e,n,r){if(r<e)throw Ul(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ul(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ky(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Mr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Mr||(Mr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e,n,r,s,i,o,c,l,u,f,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,S)=>{this.resolve_=_,this.reject_=S,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Oo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Mr.NO_ERROR,l=i.getStatus();if(!c||$P(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Mr.ABORT;r(!1,new Oo(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Oo(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());BP(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=ih();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Cy():CP();o(l)}else{const l=PP();o(l)}};this.canceled_?n(!1,new Oo(!1,null,!0)):this.backoffId_=UP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&FP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Oo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function HP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function WP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function KP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function GP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function zP(t,e,n,r,s,i,o=!0){const c=ky(t.urlParams),l=t.url+c,u=Object.assign({},t.headers);return KP(u,e),HP(u,n),WP(u,i),GP(u,r),new qP(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function YP(...t){const e=QP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ah())return new Blob(t);throw new We(He.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function JP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(t){if(typeof atob>"u")throw xP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Qc{constructor(e,n){this.data=e,this.contentType=n||null}}function ZP(t,e){switch(t){case ln.RAW:return new Qc(Oy(e));case ln.BASE64:case ln.BASE64URL:return new Qc(Ny(t,e));case ln.DATA_URL:return new Qc(tC(e),nC(e))}throw ih()}function Oy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function eC(t){let e;try{e=decodeURIComponent(t)}catch{throw Ti(ln.DATA_URL,"Malformed data URL.")}return Oy(e)}function Ny(t,e){switch(t){case ln.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ti(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case ln.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ti(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=XP(e)}catch(s){throw s.message.includes("polyfill")?s:Ti(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Dy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ti(ln.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=rC(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function tC(t){const e=new Dy(t);return e.base64?Ny(ln.BASE64,e.rest):eC(e.rest)}function nC(t){return new Dy(t).contentType}function rC(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n){let r=0,s="";up(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(up(this.data_)){const r=this.data_,s=JP(r,e,n);return s===null?null:new or(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new or(r,!0)}}static getBlob(...e){if(ah()){const n=e.map(r=>r instanceof or?r.data_:r);return new or(YP.apply(null,n))}else{const n=e.map(o=>oh(o)?ZP(ln.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new or(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t){let e;try{e=JSON.parse(t)}catch{return null}return jP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function iC(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function xy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t,e){return e}class It{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||oC}}let No=null;function aC(t){return!oh(t)||t.length<2?t:xy(t)}function Ly(){if(No)return No;const t=[];t.push(new It("bucket")),t.push(new It("generation")),t.push(new It("metageneration")),t.push(new It("name","fullPath",!0));function e(i,o){return aC(o)}const n=new It("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new It("size");return s.xform=r,t.push(s),t.push(new It("timeCreated")),t.push(new It("updated")),t.push(new It("md5Hash",null,!0)),t.push(new It("cacheControl",null,!0)),t.push(new It("contentDisposition",null,!0)),t.push(new It("contentEncoding",null,!0)),t.push(new It("contentLanguage",null,!0)),t.push(new It("contentType",null,!0)),t.push(new It("metadata","customMetadata",!0)),No=t,No}function cC(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ut(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function lC(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return cC(r,t),r}function My(t,e,n){const r=Vy(e);return r===null?null:lC(t,r,n)}function uC(t,e,n,r){const s=Vy(e);if(s===null||!oh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const f=t.bucket,p=t.fullPath,m="/b/"+o(f)+"/o/"+o(p),_=ch(m,n,r),S=ky({alt:"media",token:u});return _+S})[0]}function hC(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Uy{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(t){if(!t)throw ih()}function fC(t,e){function n(r,s){const i=My(t,s,e);return Fy(i!==null),i}return n}function dC(t,e){function n(r,s){const i=My(t,s,e);return Fy(i!==null),uC(i,s,t.host,t._protocol)}return n}function By(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=bP():s=RP():n.getStatus()===402?s=AP(t.bucket):n.getStatus()===403?s=SP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function pC(t){const e=By(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=wP(t.path)),i.serverResponse=s.serverResponse,i}return n}function mC(t,e,n){const r=e.fullServerUrl(),s=ch(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new Uy(s,i,dC(t,n),o);return c.errorHandler=pC(e),c}function gC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _C(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=gC(null,e)),r}function yC(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let F="";for(let B=0;B<2;B++)F=F+Math.random().toString().slice(2);return F}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const u=_C(e,r,s),f=hC(u,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",_=or.getBlob(p,r,m);if(_===null)throw DP();const S={name:u.fullPath},k=ch(i,t.host,t._protocol),O="POST",q=t.maxUploadRetryTime,L=new Uy(k,O,fC(t,n),q);return L.urlParams=S,L.headers=o,L.body=_.uploadData(),L.errorHandler=By(e),L}class vC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Mr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Mr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Mr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Js("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Js("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Js("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Js("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Js("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class EC extends vC{initXhr(){this.xhr_.responseType="text"}}function jy(){return new EC}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n){this._service=e,n instanceof Ut?this._location=n:this._location=Ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Wr(e,n)}get root(){const e=new Ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xy(this._location.path)}get storage(){return this._service}get parent(){const e=sC(this._location.path);if(e===null)return null;const n=new Ut(this._location.bucket,e);return new Wr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw LP(e)}}function TC(t,e,n){t._throwIfRoot("uploadBytes");const r=yC(t.storage,t._location,Ly(),new or(e,!0),n);return t.storage.makeRequestWithTokens(r,jy).then(s=>({metadata:s,ref:t}))}function IC(t){t._throwIfRoot("getDownloadURL");const e=mC(t.storage,t._location,Ly());return t.storage.makeRequestWithTokens(e,jy).then(n=>{if(n===null)throw VP();return n})}function wC(t,e){const n=iC(t._location.path,e),r=new Ut(t._location.bucket,n);return new Wr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t){return/^[A-Za-z]+:\/\//.test(t)}function RC(t,e){return new Wr(t,e)}function $y(t,e){if(t instanceof lh){const n=t;if(n._bucket==null)throw NP();const r=new Wr(n,n._bucket);return e!=null?$y(r,e):r}else return e!==void 0?wC(t,e):t}function bC(t,e){if(e&&AC(e)){if(t instanceof lh)return RC(t,e);throw Ul("To use ref(service, url), the first argument must be a Storage instance.")}else return $y(t,e)}function fp(t,e){const n=e==null?void 0:e[Py];return n==null?null:Ut.makeFromBucketSpec(n,t)}function SC(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:vg(s,t.app.options.projectId))}class lh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Sy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TP,this._maxUploadRetryTime=IP,this._requests=new Set,s!=null?this._bucket=Ut.makeFromBucketSpec(s,this._host):this._bucket=fp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ut.makeFromBucketSpec(this._url,e):this._bucket=fp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new MP(Cy());{const o=zP(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const dp="@firebase/storage",pp="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="storage";function PC(t,e,n){return t=Be(t),TC(t,e,n)}function CC(t){return t=Be(t),IC(t)}function kC(t,e){return t=Be(t),bC(t,e)}function OC(t=fu(),e){t=Be(t);const r=Fa(t,qy).getImmediate({identifier:e}),s=gg("storage");return s&&NC(r,...s),r}function NC(t,e,n,r={}){SC(t,e,n,r)}function DC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new lh(n,r,s,e,Gr)}function VC(){Fr(new pr(qy,DC,"PUBLIC").setMultipleInstances(!0)),fn(dp,pp,""),fn(dp,pp,"esm2017")}VC();const Hy={apiKey:"AIzaSyCgyyYCUU-XcIra5RM7twBY8vc85R0DDHs",authDomain:"dr-richard-97cc3.firebaseapp.com",projectId:"dr-richard-97cc3",storageBucket:"dr-richard-97cc3.firebasestorage.app",messagingSenderId:"309283476838",appId:"1:309283476838:web:41a3fc159c66526f42e4a7"};function xC(t){return typeof t!="string"||!t.trim()?!0:/^(AIzaSy\.\.\.|seu-projeto|123456789|1:123456789:web:abcdef)$/i.test(t.trim())}const mp=Object.entries(Hy).filter(([,t])=>xC(t)).map(([t])=>t);if(mp.length>0)throw new Error(`[Firebase] Configuração ausente ou inválida: ${mp.join(", ")}. Crie frontend/.env com as variáveis VITE_FIREBASE_* do console Firebase e reinicie o Vite.`);const uh=Ig(Hy),io=hb(uh),hh=eP(uh),LC=OC(uh),fh={especialidades:"especialidades",medicos:"medicos",horariosDisponiveis:"horarios_disponiveis",pacientes:"pacientes",agendamentos:"agendamentos",avaliacoes:"avaliacoes",contatos:"contatos"};function gO(t){const e=typeof t=="object"&&t!==null&&"code"in t?String(t.code):"",n={"auth/invalid-email":"E-mail inválido. Confira e tente novamente.","auth/user-disabled":"Sua conta foi desativada. Entre em contato com a clínica.","auth/expired-action-code":"O link expirou. Solicite um novo acesso.","auth/invalid-action-code":"Link inválido ou já utilizado. Solicite um novo.","auth/configuration-not-found":"Login por e-mail ainda não configurado. Ative o provedor E-mail/Senha no Firebase Authentication.","auth/network-request-failed":"Sem conexão. Verifique sua internet e tente novamente.","auth/too-many-requests":"Muitas tentativas. Aguarde alguns minutos e tente de novo.","permission-denied":"Você não tem permissão para esta operação.",unavailable:"Serviço indisponível no momento. Tente novamente em instantes."};return e&&n[e]?n[e]:t instanceof Error&&t.message?t.message:"Ocorreu um erro inesperado. Tente novamente em instantes."}const Ta="clinica.dr.richard.email_login";async function MC(t){await zA(io,t,{url:"http://localhost:3000/auth/callback",handleCodeInApp:!0}),window.localStorage.setItem(Ta,t)}function _O(t){return QA(io,t)}async function UC(t,e){const n=window.localStorage.getItem(Ta)||e||"";if(!n)throw new Error("Informe o e-mail para confirmar o acesso.");const r=await YA(io,n,t);return window.localStorage.removeItem(Ta),r.user}async function FC(){await eR(io)}function yO(){return window.localStorage.getItem(Ta)}function BC(t){return ZA(io,t)}function Fl(t){return t instanceof Xe?t.toDate().toISOString():Array.isArray(t)?t.map(Fl):t&&typeof t=="object"?Object.fromEntries(Object.entries(t).map(([e,n])=>[e,Fl(n)])):t}function Wy(t){const e=Fl(t.data());return{id:t.id,...e}}async function Ky(t){const e=hP(fy(hh,fh.pacientes),fP("user_id","==",t),dP(1)),n=await yP(e);return n.empty?null:Wy(n.docs[0])}async function jC(t){const e=await Ky(t.user_id);if(e)return e;const n=dy(fy(hh,fh.pacientes));await vP(n,{user_id:t.user_id,nome:t.nome,email:t.email,telefone:t.telefone??null,cpf:t.cpf??null,data_nascimento:t.data_nascimento??null,foto_url:t.foto_url??null,created_at:Ml(),updated_at:Ml()});const r=await _P(n);return Wy(r)}async function vO(t,e){const n=dy(hh,fh.pacientes,t);await EP(n,{...e,updated_at:Ml()})}async function EO(t,e){var i;const n=((i=e.name.split(".").pop())==null?void 0:i.toLowerCase())||"jpg",r=`pacientes/${t}/avatar-${Date.now()}.${n}`,s=kC(LC,r);return await PC(s,e,{contentType:e.type||"image/jpeg"}),CC(s)}const Gy=hg("auth",()=>{const t=ar(null),e=ar(null),n=ar(!0),r=ar(!1),s=St(()=>t.value!==null),i=St(()=>{var m,_,S;return((m=e.value)==null?void 0:m.nome)||((_=t.value)==null?void 0:_.displayName)||((S=t.value)==null?void 0:S.email)||""});let o=null;function c(){return r.value?Promise.resolve():(r.value=!0,new Promise(m=>{o=BC(async _=>{if(t.value=_,_)try{let S=await Ky(_.uid);S||(S=await jC({user_id:_.uid,email:_.email??"",nome:_.displayName||(_.email?_.email.split("@")[0]:"Paciente")})),e.value=S}catch(S){console.error("[auth] falha ao carregar paciente",S),e.value=null}else e.value=null;n.value=!1,m()})}))}async function l(m){await MC(m)}async function u(m,_){await UC(m,_)}async function f(){await FC(),e.value=null,t.value=null}function p(){o&&(o(),o=null),r.value=!1}return{usuario:t,paciente:e,carregando:n,inicializado:r,autenticado:s,nomePaciente:i,inicializar:c,enviarMagicLink:l,concluirMagicLink:u,sair:f,destruir:p}}),$C=hg("toast",()=>{const t=ar([]);function e(l){const u=`t_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,f={id:u,duracaoMs:4e3,...l};return t.value.push(f),f.duracaoMs&&f.duracaoMs>0&&window.setTimeout(()=>n(u),f.duracaoMs),u}function n(l){t.value=t.value.filter(u=>u.id!==l)}function r(l,u,f){return e({tipo:l,titulo:u,mensagem:f})}return{toasts:t,adicionar:e,remover:n,sucesso:(l,u)=>r("sucesso",l,u),erro:(l,u)=>r("erro",l,u),info:(l,u)=>r("info",l,u),aviso:(l,u)=>r("aviso",l,u)}}),qC={class:"fixed top-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-sm pointer-events-none",role:"region","aria-label":"Notificações","aria-live":"polite"},HC={class:"flex items-start gap-3"},WC={class:"font-semibold text-sm flex-1"},KC=["onClick"],GC={key:0,class:"text-xs text-slate-600 mt-1"},zC=Na({__name:"AppToaster",setup(t){const e=$C(),{toasts:n}=vI(e),r={sucesso:"bg-secondary-50 border-secondary-200 text-secondary-700",erro:"bg-danger-50 border-danger-200 text-danger-600",info:"bg-primary-50 border-primary-200 text-primary-700",aviso:"bg-amber-50 border-amber-200 text-amber-700"};return(s,i)=>(Sn(),ei("div",qC,[Je(tI,{name:"page-fade",tag:"div",class:"flex flex-col gap-2"},{default:Qo(()=>[(Sn(!0),ei(bt,null,BE(Nn(n),o=>(Sn(),ei("div",{key:o.id,class:Pa(["pointer-events-auto rounded-2xl border shadow-elevated p-4 bg-white",r[o.tipo]]),role:"status"},[Or("div",HC,[Or("div",WC,el(o.titulo),1),Or("button",{type:"button",class:"text-current opacity-60 hover:opacity-100 transition","aria-label":"Fechar notificação",onClick:c=>Nn(e).remover(o.id)},[...i[0]||(i[0]=[Or("svg",{class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[Or("path",{d:"M4.3 4.3a1 1 0 011.4 0L10 8.6l4.3-4.3a1 1 0 011.4 1.4L11.4 10l4.3 4.3a1 1 0 01-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 01-1.4-1.4L8.6 10 4.3 5.7a1 1 0 010-1.4z"})],-1)])],8,KC)]),o.mensagem?(Sn(),ei("p",GC,el(o.mensagem),1)):Ym("",!0)],2))),128))]),_:1})]))}}),QC={class:"min-h-screen bg-light text-dark antialiased"},YC=Na({__name:"App",setup(t){const e=Gy();return su(async()=>{await e.inicializar()}),(n,r)=>{const s=UE("router-view");return Sn(),ei("div",QC,[Je(s,null,{default:Qo(({Component:i})=>[Je(NT,{name:"page-fade",mode:"out-in"},{default:Qo(()=>[(Sn(),Zo(FE(i)))]),_:2},1024)]),_:1}),Je(zC)])}}}),JC="modulepreload",XC=function(t){return"/"+t},gp={},dt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=XC(l),l in gp)return;gp[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":JC,u||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),u)return new Promise((m,_)=>{p.addEventListener("load",m),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const as=typeof document<"u";function zy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ZC(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&zy(t.default)}const be=Object.assign;function Yc(t,e){const n={};for(const r in e){const s=e[r];n[r]=en(s)?s.map(t):t(s)}return n}const Ii=()=>{},en=Array.isArray;function _p(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Qy=/#/g,ek=/&/g,tk=/\//g,nk=/=/g,rk=/\?/g,Yy=/\+/g,sk=/%5B/g,ik=/%5D/g,Jy=/%5E/g,ok=/%60/g,Xy=/%7B/g,ak=/%7C/g,Zy=/%7D/g,ck=/%20/g;function dh(t){return t==null?"":encodeURI(""+t).replace(ak,"|").replace(sk,"[").replace(ik,"]")}function lk(t){return dh(t).replace(Xy,"{").replace(Zy,"}").replace(Jy,"^")}function Bl(t){return dh(t).replace(Yy,"%2B").replace(ck,"+").replace(Qy,"%23").replace(ek,"%26").replace(ok,"`").replace(Xy,"{").replace(Zy,"}").replace(Jy,"^")}function uk(t){return Bl(t).replace(nk,"%3D")}function hk(t){return dh(t).replace(Qy,"%23").replace(rk,"%3F")}function fk(t){return hk(t).replace(tk,"%2F")}function Bi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const dk=/\/$/,pk=t=>t.replace(dk,"");function Jc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=yk(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Bi(o)}}function mk(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function yp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gk(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ss(e.matched[r],n.matched[s])&&ev(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ev(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!_k(t[n],e[n]))return!1;return!0}function _k(t,e){return en(t)?vp(t,e):en(e)?vp(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function vp(t,e){return en(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function yk(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Yn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let jl=function(t){return t.pop="pop",t.push="push",t}({}),Xc=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function vk(t){if(!t)if(as){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pk(t)}const Ek=/^[^#]+#/;function Tk(t,e){return t.replace(Ek,"#")+e}function Ik(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const cc=()=>({left:window.scrollX,top:window.scrollY});function wk(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ik(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ep(t,e){return(history.state?history.state.position-e:-1)+t}const $l=new Map;function Ak(t,e){$l.set(t,e)}function Rk(t){const e=$l.get(t);return $l.delete(t),e}function bk(t){return typeof t=="string"||t&&typeof t=="object"}function tv(t){return typeof t=="string"||typeof t=="symbol"}let qe=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const nv=Symbol("");qe.MATCHER_NOT_FOUND+"",qe.NAVIGATION_GUARD_REDIRECT+"",qe.NAVIGATION_ABORTED+"",qe.NAVIGATION_CANCELLED+"",qe.NAVIGATION_DUPLICATED+"";function Ps(t,e){return be(new Error,{type:t,[nv]:!0},e)}function wn(t,e){return t instanceof Error&&nv in t&&(e==null||!!(t.type&e))}const Sk=["params","query","hash"];function Pk(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Sk)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Ck(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Yy," "),i=s.indexOf("="),o=Bi(i<0?s:s.slice(0,i)),c=i<0?null:Bi(s.slice(i+1));if(o in e){let l=e[o];en(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function Tp(t){let e="";for(let n in t){const r=t[n];if(n=uk(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(en(r)?r.map(s=>s&&Bl(s)):[r&&Bl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function kk(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=en(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Ok=Symbol(""),Ip=Symbol(""),lc=Symbol(""),ph=Symbol(""),ql=Symbol("");function Xs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function er(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Ps(qe.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?l(m):bk(m)?l(Ps(qe.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function Zc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(zy(l)){const u=(l.__vccOpts||l)[e];u&&i.push(er(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=ZC(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const m=(p.__vccOpts||p)[e];return m&&er(m,n,r,o,c,s)()}))}}return i}function Nk(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Ss(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Ss(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Dk=()=>location.protocol+"//"+location.host;function rv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),yp(c,"")}return yp(n,t)+r+s}function Vk(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=rv(t,location),S=n.value,k=e.value;let O=0;if(m){if(n.value=_,e.value=m,o&&o===S){o=null;return}O=k?m.position-k.position:0}else r(_);s.forEach(q=>{q(n.value,S,{delta:O,type:jl.pop,direction:O?O>0?Xc.forward:Xc.back:Xc.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const S=s.indexOf(m);S>-1&&s.splice(S,1)};return i.push(_),_}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(be({},m.state,{scroll:cc()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:p}}function wp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?cc():null}}function xk(t){const{history:e,location:n}=window,r={value:rv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:Dk()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,u){i(l,be({},e.state,wp(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const f=be({},s.value,e.state,{forward:l,scroll:cc()});i(f.current,f,!0),i(l,be({},wp(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function Lk(t){t=vk(t);const e=xk(t),n=Vk(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=be({location:"",base:t,go:r,createHref:Tk.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Dr=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var et=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(et||{});const Mk={type:Dr.Static,value:""},Uk=/[a-zA-Z0-9_]/;function Fk(t){if(!t)return[[]];if(t==="/")return[[Mk]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=et.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===et.Static?i.push({type:Dr.Static,value:u}):n===et.Param||n===et.ParamRegExp||n===et.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Dr.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==et.ParamRegExp){r=n,n=et.EscapeNext;continue}switch(n){case et.Static:l==="/"?(u&&p(),o()):l===":"?(p(),n=et.Param):m();break;case et.EscapeNext:m(),n=r;break;case et.Param:l==="("?n=et.ParamRegExp:Uk.test(l)?m():(p(),n=et.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case et.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=et.ParamRegExpEnd:f+=l;break;case et.ParamRegExpEnd:p(),n=et.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===et.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const Ap="[^/]+?",Bk={sensitive:!1,strict:!1,start:!0,end:!0};var At=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(At||{});const jk=/[.+*?^${}()[\]/\\]/g;function $k(t,e){const n=be({},Bk,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[At.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=At.Segment+(n.sensitive?At.BonusCaseSensitive:0);if(m.type===Dr.Static)p||(s+="/"),s+=m.value.replace(jk,"\\$&"),_+=At.Static;else if(m.type===Dr.Param){const{value:S,repeatable:k,optional:O,regexp:q}=m;i.push({name:S,repeatable:k,optional:O});const L=q||Ap;if(L!==Ap){_+=At.BonusCustomRegExp;try{`${L}`}catch(B){throw new Error(`Invalid custom RegExp for param "${S}" (${L}): `+B.message)}}let F=k?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;p||(F=O&&u.length<2?`(?:/${F})`:"/"+F),O&&(F+="?"),s+=F,_+=At.Dynamic,O&&(_+=At.BonusOptional),k&&(_+=At.BonusRepeatable),L===".*"&&(_+=At.BonusWildcard)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=At.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",S=i[m-1];p[S.name]=_&&S.repeatable?_.split("/"):_}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===Dr.Static)f+=_.value;else if(_.type===Dr.Param){const{value:S,repeatable:k,optional:O}=_,q=S in u?u[S]:"";if(en(q)&&!k)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const L=en(q)?q.join("/"):q;if(!L)if(O)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=L}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function qk(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===At.Static+At.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===At.Static+At.Segment?1:-1:0}function sv(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=qk(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Rp(r))return 1;if(Rp(s))return-1}return s.length-r.length}function Rp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Hk={strict:!1,end:!0,sensitive:!1};function Wk(t,e,n){const r=$k(Fk(t.path),n),s=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Kk(t,e){const n=[],r=new Map;e=_p(Hk,e);function s(p){return r.get(p)}function i(p,m,_){const S=!_,k=Sp(p);k.aliasOf=_&&_.record;const O=_p(e,p),q=[k];if("alias"in p){const B=typeof p.alias=="string"?[p.alias]:p.alias;for(const X of B)q.push(Sp(be({},k,{components:_?_.record.components:k.components,path:X,aliasOf:_?_.record:k})))}let L,F;for(const B of q){const{path:X}=B;if(m&&X[0]!=="/"){const ne=m.record.path,R=ne[ne.length-1]==="/"?"":"/";B.path=m.record.path+(X&&R+X)}if(L=Wk(B,m,O),_?_.alias.push(L):(F=F||L,F!==L&&F.alias.push(L),S&&p.name&&!Pp(L)&&o(p.name)),iv(L)&&l(L),k.children){const ne=k.children;for(let R=0;R<ne.length;R++)i(ne[R],L,_&&_.children[R])}_=_||L}return F?()=>{o(F)}:Ii}function o(p){if(tv(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=Qk(p,n);n.splice(m,0,p),p.record.name&&!Pp(p)&&r.set(p.record.name,p)}function u(p,m){let _,S={},k,O;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Ps(qe.MATCHER_NOT_FOUND,{location:p});O=_.record.name,S=be(bp(m.params,_.keys.filter(F=>!F.optional).concat(_.parent?_.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),p.params&&bp(p.params,_.keys.map(F=>F.name))),k=_.stringify(S)}else if(p.path!=null)k=p.path,_=n.find(F=>F.re.test(k)),_&&(S=_.parse(k),O=_.record.name);else{if(_=m.name?r.get(m.name):n.find(F=>F.re.test(m.path)),!_)throw Ps(qe.MATCHER_NOT_FOUND,{location:p,currentLocation:m});O=_.record.name,S=be({},m.params,p.params),k=_.stringify(S)}const q=[];let L=_;for(;L;)q.unshift(L.record),L=L.parent;return{name:O,path:k,params:S,matched:q,meta:zk(q)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function bp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Sp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Gk(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Gk(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Pp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function zk(t){return t.reduce((e,n)=>be(e,n.meta),{})}function Qk(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;sv(t,e[i])<0?r=i:n=i+1}const s=Yk(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Yk(t){let e=t;for(;e=e.parent;)if(iv(e)&&sv(t,e)===0)return e}function iv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Cp(t){const e=Wt(lc),n=Wt(ph),r=St(()=>{const l=Nn(t.to);return e.resolve(l)}),s=St(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Ss.bind(null,f));if(m>-1)return m;const _=kp(l[u-2]);return u>1&&kp(f)===_&&p[p.length-1].path!==_?p.findIndex(Ss.bind(null,l[u-2])):m}),i=St(()=>s.value>-1&&tO(n.params,r.value.params)),o=St(()=>s.value>-1&&s.value===n.matched.length-1&&ev(n.params,r.value.params));function c(l={}){if(eO(l)){const u=e[Nn(t.replace)?"replace":"push"](Nn(t.to)).catch(Ii);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:St(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function Jk(t){return t.length===1?t[0]:t}const Xk=Na({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Cp,setup(t,{slots:e}){const n=$i(Cp(t)),{options:r}=Wt(lc),s=St(()=>({[Op(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Op(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Jk(e.default(n));return t.custom?i:lu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Zk=Xk;function eO(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function tO(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!en(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function kp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Op=(t,e,n)=>t??e??n,nO=Na({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Wt(ql),s=St(()=>t.route||r.value),i=Wt(Ip,0),o=St(()=>{let u=Nn(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=St(()=>s.value.matched[o.value]);Do(Ip,St(()=>o.value+1)),Do(Ok,c),Do(ql,s);const l=ar();return hi(()=>[l.value,c.value,t.name],([u,f,p],[m,_,S])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!Ss(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return Np(n.default,{Component:m,route:u});const _=p.props[f],S=_?_===!0?u.params:typeof _=="function"?_(u):_:null,O=lu(m,be({},S,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Np(n.default,{Component:O,route:u})||O}}});function Np(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rO=nO;function sO(t){const e=Kk(t.routes,t),n=t.parseQuery||Ck,r=t.stringifyQuery||Tp,s=t.history,i=Xs(),o=Xs(),c=Xs(),l=cE(Yn);let u=Yn;as&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Yc.bind(null,V=>""+V),p=Yc.bind(null,fk),m=Yc.bind(null,Bi);function _(V,Y){let z,ee;return tv(V)?(z=e.getRecordMatcher(V),ee=Y):ee=V,e.addRoute(ee,z)}function S(V){const Y=e.getRecordMatcher(V);Y&&e.removeRoute(Y)}function k(){return e.getRoutes().map(V=>V.record)}function O(V){return!!e.getRecordMatcher(V)}function q(V,Y){if(Y=be({},Y||l.value),typeof V=="string"){const P=Jc(n,V,Y.path),D=e.resolve({path:P.path},Y),M=s.createHref(P.fullPath);return be(P,D,{params:m(D.params),hash:Bi(P.hash),redirectedFrom:void 0,href:M})}let z;if(V.path!=null)z=be({},V,{path:Jc(n,V.path,Y.path).path});else{const P=be({},V.params);for(const D in P)P[D]==null&&delete P[D];z=be({},V,{params:p(P)}),Y.params=p(Y.params)}const ee=e.resolve(z,Y),me=V.hash||"";ee.params=f(m(ee.params));const E=mk(r,be({},V,{hash:lk(me),path:ee.path})),A=s.createHref(E);return be({fullPath:E,hash:me,query:r===Tp?kk(V.query):V.query||{}},ee,{redirectedFrom:void 0,href:A})}function L(V){return typeof V=="string"?Jc(n,V,l.value.path):be({},V)}function F(V,Y){if(u!==V)return Ps(qe.NAVIGATION_CANCELLED,{from:Y,to:V})}function B(V){return R(V)}function X(V){return B(be(L(V),{replace:!0}))}function ne(V,Y){const z=V.matched[V.matched.length-1];if(z&&z.redirect){const{redirect:ee}=z;let me=typeof ee=="function"?ee(V,Y):ee;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=L(me):{path:me},me.params={}),be({query:V.query,hash:V.hash,params:me.path!=null?{}:V.params},me)}}function R(V,Y){const z=u=q(V),ee=l.value,me=V.state,E=V.force,A=V.replace===!0,P=ne(z,ee);if(P)return R(be(L(P),{state:typeof P=="object"?be({},me,P.state):me,force:E,replace:A}),Y||z);const D=z;D.redirectedFrom=Y;let M;return!E&&gk(r,ee,z)&&(M=Ps(qe.NAVIGATION_DUPLICATED,{to:D,from:ee}),jt(ee,ee,!0,!1)),(M?Promise.resolve(M):I(D,ee)).catch(x=>wn(x)?wn(x,qe.NAVIGATION_GUARD_REDIRECT)?x:Gt(x):ge(x,D,ee)).then(x=>{if(x){if(wn(x,qe.NAVIGATION_GUARD_REDIRECT))return R(be({replace:A},L(x.to),{state:typeof x.to=="object"?be({},me,x.to.state):me,force:E}),Y||D)}else x=w(D,ee,!0,A,me);return b(D,ee,x),x})}function v(V,Y){const z=F(V,Y);return z?Promise.reject(z):Promise.resolve()}function y(V){const Y=qn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(V):V()}function I(V,Y){let z;const[ee,me,E]=Nk(V,Y);z=Zc(ee.reverse(),"beforeRouteLeave",V,Y);for(const P of ee)P.leaveGuards.forEach(D=>{z.push(er(D,V,Y))});const A=v.bind(null,V,Y);return z.push(A),kt(z).then(()=>{z=[];for(const P of i.list())z.push(er(P,V,Y));return z.push(A),kt(z)}).then(()=>{z=Zc(me,"beforeRouteUpdate",V,Y);for(const P of me)P.updateGuards.forEach(D=>{z.push(er(D,V,Y))});return z.push(A),kt(z)}).then(()=>{z=[];for(const P of E)if(P.beforeEnter)if(en(P.beforeEnter))for(const D of P.beforeEnter)z.push(er(D,V,Y));else z.push(er(P.beforeEnter,V,Y));return z.push(A),kt(z)}).then(()=>(V.matched.forEach(P=>P.enterCallbacks={}),z=Zc(E,"beforeRouteEnter",V,Y,y),z.push(A),kt(z))).then(()=>{z=[];for(const P of o.list())z.push(er(P,V,Y));return z.push(A),kt(z)}).catch(P=>wn(P,qe.NAVIGATION_CANCELLED)?P:Promise.reject(P))}function b(V,Y,z){c.list().forEach(ee=>y(()=>ee(V,Y,z)))}function w(V,Y,z,ee,me){const E=F(V,Y);if(E)return E;const A=Y===Yn,P=as?history.state:{};z&&(ee||A?s.replace(V.fullPath,be({scroll:A&&P&&P.scroll},me)):s.push(V.fullPath,me)),l.value=V,jt(V,Y,z,A),Gt()}let T;function Re(){T||(T=s.listen((V,Y,z)=>{if(!Vt.listening)return;const ee=q(V),me=ne(ee,Vt.currentRoute.value);if(me){R(be(me,{replace:!0,force:!0}),ee).catch(Ii);return}u=ee;const E=l.value;as&&Ak(Ep(E.fullPath,z.delta),cc()),I(ee,E).catch(A=>wn(A,qe.NAVIGATION_ABORTED|qe.NAVIGATION_CANCELLED)?A:wn(A,qe.NAVIGATION_GUARD_REDIRECT)?(R(be(L(A.to),{force:!0}),ee).then(P=>{wn(P,qe.NAVIGATION_ABORTED|qe.NAVIGATION_DUPLICATED)&&!z.delta&&z.type===jl.pop&&s.go(-1,!1)}).catch(Ii),Promise.reject()):(z.delta&&s.go(-z.delta,!1),ge(A,ee,E))).then(A=>{A=A||w(ee,E,!1),A&&(z.delta&&!wn(A,qe.NAVIGATION_CANCELLED)?s.go(-z.delta,!1):z.type===jl.pop&&wn(A,qe.NAVIGATION_ABORTED|qe.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(ee,E,A)}).catch(Ii)}))}let Ke=Xs(),Pe=Xs(),le;function ge(V,Y,z){Gt(V);const ee=Pe.list();return ee.length?ee.forEach(me=>me(V,Y,z)):console.error(V),Promise.reject(V)}function Dt(){return le&&l.value!==Yn?Promise.resolve():new Promise((V,Y)=>{Ke.add([V,Y])})}function Gt(V){return le||(le=!V,Re(),Ke.list().forEach(([Y,z])=>V?z(V):Y()),Ke.reset()),V}function jt(V,Y,z,ee){const{scrollBehavior:me}=t;if(!as||!me)return Promise.resolve();const E=!z&&Rk(Ep(V.fullPath,0))||(ee||!z)&&history.state&&history.state.scroll||null;return tu().then(()=>me(V,Y,E)).then(A=>A&&wk(A)).catch(A=>ge(A,V,Y))}const Me=V=>s.go(V);let Ue;const qn=new Set,Vt={currentRoute:l,listening:!0,addRoute:_,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:k,resolve:q,options:t,push:B,replace:X,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Pe.add,isReady:Dt,install(V){V.component("RouterLink",Zk),V.component("RouterView",rO),V.config.globalProperties.$router=Vt,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Nn(l)}),as&&!Ue&&l.value===Yn&&(Ue=!0,B(s.location).catch(ee=>{}));const Y={};for(const ee in Yn)Object.defineProperty(Y,ee,{get:()=>l.value[ee],enumerable:!0});V.provide(lc,Vt),V.provide(ph,im(Y)),V.provide(ql,l);const z=V.unmount;qn.add(V),V.unmount=function(){qn.delete(V),qn.size<1&&(u=Yn,T&&T(),T=null,l.value=Yn,Ue=!1,le=!1),z()}}};function kt(V){return V.reduce((Y,z)=>Y.then(()=>y(z)),Promise.resolve())}return Vt}function TO(){return Wt(lc)}function IO(t){return Wt(ph)}const iO=()=>dt(()=>import("./PublicLayout-Bg-Z2LED.js"),__vite__mapDeps([0,1,2])),oO=()=>dt(()=>import("./PortalLayout-Cq2Jqa1y.js"),__vite__mapDeps([3,1])),aO=[{path:"/",component:iO,children:[{path:"",name:"home",component:()=>dt(()=>import("./HomeView-DVEHOcZy.js"),__vite__mapDeps([4,5,6,7,8,9,10,11,2])),meta:{titulo:"Clínica Dr. Richard — Saúde com cuidado e modernidade"}},{path:"sobre",name:"sobre",component:()=>dt(()=>import("./SobreView-DhHPvTqH.js"),__vite__mapDeps([12,11,2])),meta:{titulo:"Sobre a Clínica — Dr. Richard"}},{path:"especialidades",name:"especialidades",component:()=>dt(()=>import("./EspecialidadesView-CoxtdxXN.js"),__vite__mapDeps([13,11,2])),meta:{titulo:"Especialidades — Clínica Dr. Richard"}},{path:"equipe",name:"equipe",component:()=>dt(()=>import("./EquipeView-BNKlCc2T.js"),__vite__mapDeps([14,15,6,11,2])),meta:{titulo:"Nossa Equipe — Clínica Dr. Richard"}},{path:"depoimentos",name:"depoimentos",component:()=>dt(()=>import("./DepoimentosView-Bnb12bsY.js"),__vite__mapDeps([16,7,8,6,9,10,11,2])),meta:{titulo:"Depoimentos — Clínica Dr. Richard"}},{path:"contato",name:"contato",component:()=>dt(()=>import("./ContatoView-Bgn9rwf3.js"),__vite__mapDeps([17,18,19,20,2])),meta:{titulo:"Contato — Clínica Dr. Richard"}},{path:"login",name:"login",component:()=>dt(()=>import("./LoginView-BjYBIjh_.js"),__vite__mapDeps([21,18,20])),meta:{titulo:"Acesso do Paciente — Clínica Dr. Richard",somenteAnonimos:!0}},{path:"auth/callback",name:"auth-callback",component:()=>dt(()=>import("./AuthCallbackView-wP2VArpZ.js"),__vite__mapDeps([22,18,20])),meta:{titulo:"Confirmando acesso…"}}]},{path:"/portal",component:oO,meta:{protegida:!0},children:[{path:"",name:"portal-dashboard",component:()=>dt(()=>import("./DashboardView-DhWczgec.js"),__vite__mapDeps([23,6,24,5,15,25,9,10])),meta:{titulo:"Meu Painel — Clínica Dr. Richard"}},{path:"agendar",name:"portal-agendar",component:()=>dt(()=>import("./AgendarView-D__i4bMJ.js"),__vite__mapDeps([26,20,19,6,24,5,15,25,10])),meta:{titulo:"Agendar Consulta — Clínica Dr. Richard"}},{path:"agendamentos",name:"portal-agendamentos",component:()=>dt(()=>import("./MeusAgendamentosView-0rWaYUWB.js"),__vite__mapDeps([27,20,6,24,5,15,25,9,10])),meta:{titulo:"Meus Agendamentos — Clínica Dr. Richard"}},{path:"perfil",name:"portal-perfil",component:()=>dt(()=>import("./PerfilView-Bn_mOcGv.js"),__vite__mapDeps([28,20,18])),meta:{titulo:"Meu Perfil — Clínica Dr. Richard"}},{path:"avaliacoes",name:"portal-avaliacoes",component:()=>dt(()=>import("./AvaliacoesView-B5Y4LOqU.js"),__vite__mapDeps([29,20,8,19,6,25,15,5,9,10])),meta:{titulo:"Avaliações — Clínica Dr. Richard"}}]},{path:"/:pathMatch(.*)*",name:"nao-encontrada",component:()=>dt(()=>import("./NaoEncontradaView-N_gW19kK.js"),[]),meta:{titulo:"Página não encontrada"}}],mh=sO({history:Lk(),routes:aO,scrollBehavior(t,e,n){return n||{top:0,behavior:"smooth"}}});mh.beforeEach(async t=>{const e=Gy();return e.inicializado||await e.inicializar(),t.meta.protegida&&!e.autenticado?{name:"login",query:{redirect:t.fullPath,motivo:"sessao"}}:t.meta.somenteAnonimos&&e.autenticado?{name:"portal-dashboard"}:!0});mh.afterEach(t=>{const e=t.meta.titulo??"Clínica Dr. Richard";document.title=e});const gh=uI(YC);gh.use(dI());gh.use(mh);gh.mount("#app");"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js")});export{vP as A,Ml as B,fh as C,hO as D,$i as E,bt as F,gO as G,_O as H,yO as I,Le as J,fP as K,hP as L,yP as M,Wy as N,hg as O,Ky as P,vO as Q,hi as R,EO as S,NT as T,cO as U,_P as V,EP as W,mO as X,Kl as Y,$C as Z,Gy as a,Or as b,ei as c,Na as d,Je as e,BE as f,gT as g,Nn as h,Zo as i,Ym as j,ar as k,uO as l,TO as m,Pa as n,Sn as o,St as p,lO as q,UE as r,vI as s,el as t,IO as u,su as v,Qo as w,dy as x,fy as y,hh as z};
