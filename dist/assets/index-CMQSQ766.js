const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PublicLayout-n-DWCjp6.js","assets/AppLogo.vue_vue_type_script_setup_true_lang-DKVDuqHy.js","assets/useWhatsApp-C5AZ2giU.js","assets/PortalLayout-pEnT5Y84.js","assets/HomeView-C09Swh6d.js","assets/especialidades.service-DjDtRg2W.js","assets/AppSkeleton.vue_vue_type_script_setup_true_lang-DcQjlGSf.js","assets/Depoimentos.vue_vue_type_script_setup_true_lang-yOtA5QAA.js","assets/AppRating.vue_vue_type_script_setup_true_lang-wCIQlCdV.js","assets/formatadores-BzGOgOfa.js","assets/pt-BR-IzZaxBgt.js","assets/CtaAgendamento.vue_vue_type_script_setup_true_lang-BCwIjxRe.js","assets/SobreView-DigDEZ-3.js","assets/EspecialidadesView-Bjek-ic2.js","assets/EquipeView-xNIeiLzp.js","assets/medicos.service-PDMKpYD7.js","assets/DepoimentosView-DNWjhWD_.js","assets/ContatoView-DKJgPP-V.js","assets/AppInput.vue_vue_type_script_setup_true_lang-D9qA8Vlz.js","assets/AppTextarea.vue_vue_type_script_setup_true_lang-fW-KUz0-.js","assets/useToast-BFJxntej.js","assets/LoginView-CC_WXZMT.js","assets/AuthCallbackView-Buoh4DEa.js","assets/DashboardView-DDPdRYP5.js","assets/agendamento.store-C2fK6Oe7.js","assets/agendamentos.service-DbwGETXq.js","assets/AgendarView-BjvkjvrM.js","assets/MeusAgendamentosView-C2XX0eOn.js","assets/PerfilView-BIhkXEqb.js","assets/AvaliacoesView-dQptF_0z.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ll(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},ss=[],on=()=>{},Ep=()=>!1,ga=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),_a=t=>t.startsWith("onUpdate:"),Ye=Object.assign,Ml=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},nv=Object.prototype.hasOwnProperty,Se=(t,e)=>nv.call(t,e),oe=Array.isArray,is=t=>Vi(t)==="[object Map]",Tp=t=>Vi(t)==="[object Set]",Qh=t=>Vi(t)==="[object Date]",fe=t=>typeof t=="function",xe=t=>typeof t=="string",Lt=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",Ip=t=>(Ae(t)||fe(t))&&fe(t.then)&&fe(t.catch),wp=Object.prototype.toString,Vi=t=>wp.call(t),rv=t=>Vi(t).slice(8,-1),Ap=t=>Vi(t)==="[object Object]",ya=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ni=Ll(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),va=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sv=/-\w/g,bt=va(t=>t.replace(sv,e=>e.slice(1).toUpperCase())),iv=/\B([A-Z])/g,jr=va(t=>t.replace(iv,"-$1").toLowerCase()),Ea=va(t=>t.charAt(0).toUpperCase()+t.slice(1)),yc=va(t=>t?`on${Ea(t)}`:""),sn=(t,e)=>!Object.is(t,e),vc=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Rp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ov=t=>{const e=parseFloat(t);return isNaN(e)?t:e},av=t=>{const e=xe(t)?Number(t):NaN;return isNaN(e)?t:e};let Yh;const Ta=()=>Yh||(Yh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fl(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=xe(r)?hv(r):Fl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(xe(t)||Ae(t))return t}const cv=/;(?![^(]*\))/g,lv=/:([^]+)/,uv=/\/\*[^]*?\*\//g;function hv(t){const e={};return t.replace(uv,"").split(cv).forEach(n=>{if(n){const r=n.split(lv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ia(t){let e="";if(xe(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=Ia(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const fv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dv=Ll(fv);function bp(t){return!!t||t===""}function pv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ul(t[r],e[r]);return n}function Ul(t,e){if(t===e)return!0;let n=Qh(t),r=Qh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Lt(t),r=Lt(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?pv(t,e):!1;if(n=Ae(t),r=Ae(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Ul(t[o],e[o]))return!1}}return String(t)===String(e)}const Sp=t=>!!(t&&t.__v_isRef===!0),Gc=t=>xe(t)?t:t==null?"":oe(t)||Ae(t)&&(t.toString===wp||!fe(t.toString))?Sp(t)?Gc(t.value):JSON.stringify(t,Pp,2):String(t),Pp=(t,e)=>Sp(e)?Pp(t,e.value):is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ec(r,i)+" =>"]=s,n),{})}:Tp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ec(n))}:Lt(e)?Ec(e):Ae(e)&&!oe(e)&&!Ap(e)?String(e):e,Ec=(t,e="")=>{var n;return Lt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ze;class Cp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ze,!e&&Ze&&(this.index=(Ze.scopes||(Ze.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ze;try{return Ze=this,e()}finally{Ze=n}}}on(){++this._on===1&&(this.prevScope=Ze,Ze=this)}off(){if(this._on>0&&--this._on===0){if(Ze===this)Ze=this.prevScope;else{let e=Ze;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function kp(t){return new Cp(t)}function Op(){return Ze}function mv(t,e=!1){Ze&&Ze.cleanups.push(t)}let Oe;const Tc=new WeakSet;class Np{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ze&&Ze.active&&Ze.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Tc.has(this)&&(Tc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jh(this),xp(this);const e=Oe,n=Kt;Oe=this,Kt=!0;try{return this.fn()}finally{Lp(this),Oe=e,Kt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$l(e);this.deps=this.depsTail=void 0,Jh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Tc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zc(this)&&this.run()}get dirty(){return zc(this)}}let Dp=0,ri,si;function Vp(t,e=!1){if(t.flags|=8,e){t.next=si,si=t;return}t.next=ri,ri=t}function Bl(){Dp++}function jl(){if(--Dp>0)return;if(si){let e=si;for(si=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ri;){let e=ri;for(ri=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function xp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Lp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),$l(r),gv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function zc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Mp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Mp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===gi)||(t.globalVersion=gi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!zc(t))))return;t.flags|=2;const e=t.dep,n=Oe,r=Kt;Oe=t,Kt=!0;try{xp(t);const s=t.fn(t._value);(e.version===0||sn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Oe=n,Kt=r,Lp(t),t.flags&=-3}}function $l(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)$l(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function gv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Kt=!0;const Fp=[];function Nn(){Fp.push(Kt),Kt=!1}function Dn(){const t=Fp.pop();Kt=t===void 0?!0:t}function Jh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let gi=0;class _v{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ql{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Oe||!Kt||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new _v(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,Up(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=r)}return n}trigger(e){this.version++,gi++,this.notify(e)}notify(e){Bl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{jl()}}}function Up(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Up(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Mo=new WeakMap,Or=Symbol(""),Qc=Symbol(""),_i=Symbol("");function dt(t,e,n){if(Kt&&Oe){let r=Mo.get(t);r||Mo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new ql),s.map=r,s.key=n),s.track()}}function An(t,e,n,r,s,i){const o=Mo.get(t);if(!o){gi++;return}const c=l=>{l&&l.trigger()};if(Bl(),e==="clear")o.forEach(c);else{const l=oe(t),u=l&&ya(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===_i||!Lt(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(_i)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Or)),is(t)&&c(o.get(Qc)));break;case"delete":l||(c(o.get(Or)),is(t)&&c(o.get(Qc)));break;case"set":is(t)&&c(o.get(Or));break}}jl()}function yv(t,e){const n=Mo.get(t);return n&&n.get(e)}function Yr(t){const e=ye(t);return e===t?e:(dt(e,"iterate",_i),xt(t)?e:e.map(Gt))}function wa(t){return dt(t=ye(t),"iterate",_i),t}function nn(t,e){return Vn(t)?fs(an(t)?Gt(e):e):Gt(e)}const vv={__proto__:null,[Symbol.iterator](){return Ic(this,Symbol.iterator,t=>nn(this,t))},concat(...t){return Yr(this).concat(...t.map(e=>oe(e)?Yr(e):e))},entries(){return Ic(this,"entries",t=>(t[1]=nn(this,t[1]),t))},every(t,e){return En(this,"every",t,e,void 0,arguments)},filter(t,e){return En(this,"filter",t,e,n=>n.map(r=>nn(this,r)),arguments)},find(t,e){return En(this,"find",t,e,n=>nn(this,n),arguments)},findIndex(t,e){return En(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return En(this,"findLast",t,e,n=>nn(this,n),arguments)},findLastIndex(t,e){return En(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return En(this,"forEach",t,e,void 0,arguments)},includes(...t){return wc(this,"includes",t)},indexOf(...t){return wc(this,"indexOf",t)},join(t){return Yr(this).join(t)},lastIndexOf(...t){return wc(this,"lastIndexOf",t)},map(t,e){return En(this,"map",t,e,void 0,arguments)},pop(){return $s(this,"pop")},push(...t){return $s(this,"push",t)},reduce(t,...e){return Xh(this,"reduce",t,e)},reduceRight(t,...e){return Xh(this,"reduceRight",t,e)},shift(){return $s(this,"shift")},some(t,e){return En(this,"some",t,e,void 0,arguments)},splice(...t){return $s(this,"splice",t)},toReversed(){return Yr(this).toReversed()},toSorted(t){return Yr(this).toSorted(t)},toSpliced(...t){return Yr(this).toSpliced(...t)},unshift(...t){return $s(this,"unshift",t)},values(){return Ic(this,"values",t=>nn(this,t))}};function Ic(t,e,n){const r=wa(t),s=r[e]();return r!==t&&!xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Ev=Array.prototype;function En(t,e,n,r,s,i){const o=wa(t),c=o!==t&&!xt(t),l=o[e];if(l!==Ev[e]){const p=l.apply(t,i);return c?Gt(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,nn(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Xh(t,e,n,r){const s=wa(t),i=s!==t&&!xt(t);let o=n,c=!1;s!==t&&(i?(c=r.length===0,o=function(u,f,p){return c&&(c=!1,u=nn(t,u)),n.call(this,u,nn(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const l=s[e](o,...r);return c?nn(t,l):l}function wc(t,e,n){const r=ye(t);dt(r,"iterate",_i);const s=r[e](...n);return(s===-1||s===!1)&&Aa(n[0])?(n[0]=ye(n[0]),r[e](...n)):s}function $s(t,e,n=[]){Nn(),Bl();const r=ye(t)[e].apply(t,n);return jl(),Dn(),r}const Tv=Ll("__proto__,__v_isRef,__isVue"),Bp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Lt));function Iv(t){Lt(t)||(t=String(t));const e=ye(this);return dt(e,"has",t),e.hasOwnProperty(t)}class jp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Nv:Wp:i?Hp:qp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=oe(e);if(!s){let l;if(o&&(l=vv[n]))return l;if(n==="hasOwnProperty")return Iv}const c=Reflect.get(e,n,Le(e)?e:r);if((Lt(n)?Bp.has(n):Tv(n))||(s||dt(e,"get",n),i))return c;if(Le(c)){const l=o&&ya(n)?c:c.value;return s&&Ae(l)?Jc(l):l}return Ae(c)?s?Jc(c):xi(c):c}}class $p extends jp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=oe(e)&&ya(n);if(!this._isShallow){const u=Vn(i);if(!xt(r)&&!Vn(r)&&(i=ye(i),r=ye(r)),!o&&Le(i)&&!Le(r))return u||(i.value=r),!0}const c=o?Number(n)<e.length:Se(e,n),l=Reflect.set(e,n,r,Le(e)?e:s);return e===ye(s)&&(c?sn(r,i)&&An(e,"set",n,r):An(e,"add",n,r)),l}deleteProperty(e,n){const r=Se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&An(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Lt(n)||!Bp.has(n))&&dt(e,"has",n),r}ownKeys(e){return dt(e,"iterate",oe(e)?"length":Or),Reflect.ownKeys(e)}}class wv extends jp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Av=new $p,Rv=new wv,bv=new $p(!0);const Yc=t=>t,go=t=>Reflect.getPrototypeOf(t);function Sv(t,e,n){return function(...r){const s=this.__v_raw,i=ye(s),o=is(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?Yc:e?fs:Gt;return!e&&dt(i,"iterate",l?Qc:Or),Ye(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function _o(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Pv(t,e){const n={get(s){const i=this.__v_raw,o=ye(i),c=ye(s);t||(sn(s,c)&&dt(o,"get",s),dt(o,"get",c));const{has:l}=go(o),u=e?Yc:t?fs:Gt;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&dt(ye(s),"iterate",Or),s.size},has(s){const i=this.__v_raw,o=ye(i),c=ye(s);return t||(sn(s,c)&&dt(o,"has",s),dt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=ye(c),u=e?Yc:t?fs:Gt;return!t&&dt(l,"iterate",Or),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return Ye(n,t?{add:_o("add"),set:_o("set"),delete:_o("delete"),clear:_o("clear")}:{add(s){const i=ye(this),o=go(i),c=ye(s),l=!e&&!xt(s)&&!Vn(s)?c:s;return o.has.call(i,l)||sn(s,l)&&o.has.call(i,s)||sn(c,l)&&o.has.call(i,c)||(i.add(l),An(i,"add",l,l)),this},set(s,i){!e&&!xt(i)&&!Vn(i)&&(i=ye(i));const o=ye(this),{has:c,get:l}=go(o);let u=c.call(o,s);u||(s=ye(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?sn(i,f)&&An(o,"set",s,i):An(o,"add",s,i),this},delete(s){const i=ye(this),{has:o,get:c}=go(i);let l=o.call(i,s);l||(s=ye(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&An(i,"delete",s,void 0),u},clear(){const s=ye(this),i=s.size!==0,o=s.clear();return i&&An(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Sv(s,t,e)}),n}function Hl(t,e){const n=Pv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,i)}const Cv={get:Hl(!1,!1)},kv={get:Hl(!1,!0)},Ov={get:Hl(!0,!1)};const qp=new WeakMap,Hp=new WeakMap,Wp=new WeakMap,Nv=new WeakMap;function Dv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vv(t){return t.__v_skip||!Object.isExtensible(t)?0:Dv(rv(t))}function xi(t){return Vn(t)?t:Wl(t,!1,Av,Cv,qp)}function Kp(t){return Wl(t,!1,bv,kv,Hp)}function Jc(t){return Wl(t,!0,Rv,Ov,Wp)}function Wl(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Vv(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function an(t){return Vn(t)?an(t.__v_raw):!!(t&&t.__v_isReactive)}function Vn(t){return!!(t&&t.__v_isReadonly)}function xt(t){return!!(t&&t.__v_isShallow)}function Aa(t){return t?!!t.__v_raw:!1}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function Kl(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&Rp(t,"__v_skip",!0),t}const Gt=t=>Ae(t)?xi(t):t,fs=t=>Ae(t)?Jc(t):t;function Le(t){return t?t.__v_isRef===!0:!1}function sr(t){return Gp(t,!1)}function xv(t){return Gp(t,!0)}function Gp(t,e){return Le(t)?t:new Lv(t,e)}class Lv{constructor(e,n){this.dep=new ql,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ye(e),this._value=n?e:Gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||xt(e)||Vn(e);e=r?e:ye(e),sn(e,n)&&(this._rawValue=e,this._value=r?e:Gt(e),this.dep.trigger())}}function kn(t){return Le(t)?t.value:t}const Mv={get:(t,e,n)=>e==="__v_raw"?t:kn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Le(s)&&!Le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function zp(t){return an(t)?t:new Proxy(t,Mv)}function Fv(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=Qp(t,n);return e}class Uv{constructor(e,n,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=Lt(n)?n:String(n),this._raw=ye(e);let s=!0,i=e;if(!oe(e)||Lt(this._key)||!ya(this._key))do s=!Aa(i)||xt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=kn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Le(this._raw[this._key])){const n=this._object[this._key];if(Le(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return yv(this._raw,this._key)}}class Bv{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function jv(t,e,n){return Le(t)?t:fe(t)?new Bv(t):Ae(t)&&arguments.length>1?Qp(t,e,n):sr(t)}function Qp(t,e,n){return new Uv(t,e,n)}class $v{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ql(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=gi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return Vp(this,!0),!0}get value(){const e=this.dep.track();return Mp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function qv(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new $v(r,s,n)}const yo={},Fo=new WeakMap;let Rr;function Hv(t,e=!1,n=Rr){if(n){let r=Fo.get(n);r||Fo.set(n,r=[]),r.push(t)}}function Wv(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=j=>s?j:xt(j)||s===!1||s===0?Zn(j,1):Zn(j);let f,p,m,y,S=!1,k=!1;if(Le(t)?(p=()=>t.value,S=xt(t)):an(t)?(p=()=>u(t),S=!0):oe(t)?(k=!0,S=t.some(j=>an(j)||xt(j)),p=()=>t.map(j=>{if(Le(j))return j.value;if(an(j))return u(j);if(fe(j))return l?l(j,2):j()})):fe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Nn();try{m()}finally{Dn()}}const j=Rr;Rr=f;try{return l?l(t,3,[y]):t(y)}finally{Rr=j}}:p=on,e&&s){const j=p,X=s===!0?1/0:s;p=()=>Zn(j(),X)}const O=Op(),q=()=>{f.stop(),O&&O.active&&Ml(O.effects,f)};if(i&&e){const j=e;e=(...X)=>{j(...X),q()}}let F=k?new Array(t.length).fill(yo):yo;const B=j=>{if(!(!(f.flags&1)||!f.dirty&&!j))if(e){const X=f.run();if(s||S||(k?X.some((ne,R)=>sn(ne,F[R])):sn(X,F))){m&&m();const ne=Rr;Rr=f;try{const R=[X,F===yo?void 0:k&&F[0]===yo?[]:F,y];F=X,l?l(e,3,R):e(...R)}finally{Rr=ne}}}else f.run()};return c&&c(B),f=new Np(p),f.scheduler=o?()=>o(B,!1):B,y=j=>Hv(j,!1,f),m=f.onStop=()=>{const j=Fo.get(f);if(j){if(l)l(j,4);else for(const X of j)X();Fo.delete(f)}},e?r?B(!0):F=f.run():o?o(B.bind(null,!0),!0):f.run(),q.pause=f.pause.bind(f),q.resume=f.resume.bind(f),q.stop=q,q}function Zn(t,e=1/0,n){if(e<=0||!Ae(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Le(t))Zn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)Zn(t[r],e,n);else if(Tp(t)||is(t))t.forEach(r=>{Zn(r,e,n)});else if(Ap(t)){for(const r in t)Zn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Zn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Li(t,e,n,r){try{return r?t(...r):t()}catch(s){Ra(s,e,n)}}function zt(t,e,n,r){if(fe(t)){const s=Li(t,e,n,r);return s&&Ip(s)&&s.catch(i=>{Ra(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(zt(t[i],e,n,r));return s}}function Ra(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Nn(),Li(i,null,10,[t,l,u]),Dn();return}}Kv(t,n,s,r,o)}function Kv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const It=[];let en=-1;const os=[];let Jn=null,Xr=0;const Yp=Promise.resolve();let Uo=null;function Gl(t){const e=Uo||Yp;return t?e.then(this?t.bind(this):t):e}function Gv(t){let e=en+1,n=It.length;for(;e<n;){const r=e+n>>>1,s=It[r],i=yi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function zl(t){if(!(t.flags&1)){const e=yi(t),n=It[It.length-1];!n||!(t.flags&2)&&e>=yi(n)?It.push(t):It.splice(Gv(e),0,t),t.flags|=1,Jp()}}function Jp(){Uo||(Uo=Yp.then(Zp))}function zv(t){oe(t)?os.push(...t):Jn&&t.id===-1?Jn.splice(Xr+1,0,t):t.flags&1||(os.push(t),t.flags|=1),Jp()}function Zh(t,e,n=en+1){for(;n<It.length;n++){const r=It[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;It.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Xp(t){if(os.length){const e=[...new Set(os)].sort((n,r)=>yi(n)-yi(r));if(os.length=0,Jn){Jn.push(...e);return}for(Jn=e,Xr=0;Xr<Jn.length;Xr++){const n=Jn[Xr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Jn=null,Xr=0}}const yi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Zp(t){try{for(en=0;en<It.length;en++){const e=It[en];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Li(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;en<It.length;en++){const e=It[en];e&&(e.flags&=-2)}en=-1,It.length=0,Xp(),Uo=null,(It.length||os.length)&&Zp()}}let Rt=null,em=null;function Bo(t){const e=Rt;return Rt=t,em=t&&t.type.__scopeId||null,e}function jo(t,e=Rt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ho(-1);const i=Bo(e);let o;try{o=t(...s)}finally{Bo(i),r._d&&Ho(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ir(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Nn(),zt(l,n,8,[t.el,c,t,e]),Dn())}}function Ro(t,e){if(gt){let n=gt.provides;const r=gt.parent&&gt.parent.provides;r===n&&(n=gt.provides=Object.create(r)),n[t]=e}}function jt(t,e,n=!1){const r=Mi();if(r||Nr){let s=Nr?Nr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function Qv(){return!!(Mi()||Nr)}const Yv=Symbol.for("v-scx"),Jv=()=>jt(Yv);function ii(t,e,n){return tm(t,e,n)}function tm(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,c=Ye({},n),l=e&&r||!e&&i!=="post";let u;if(Ii){if(i==="sync"){const y=Jv();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=on,y.resume=on,y.pause=on,y}}const f=gt;c.call=(y,S,k)=>zt(y,f,S,k);let p=!1;i==="post"?c.scheduler=y=>{Pt(y,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(y,S)=>{S?y():zl(y)}),c.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const m=Wv(t,e,c);return Ii&&(u?u.push(m):l&&m()),m}function Xv(t,e,n){const r=this.proxy,s=xe(t)?t.includes(".")?nm(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Fi(this),c=tm(s,i.bind(r),n);return o(),c}function nm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Zv=Symbol("_vte"),rm=t=>t.__isTeleport,tn=Symbol("_leaveCb"),qs=Symbol("_enterCb");function sm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yl(()=>{t.isMounted=!0}),fm(()=>{t.isUnmounting=!0}),t}const Bt=[Function,Array],im={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bt,onEnter:Bt,onAfterEnter:Bt,onEnterCancelled:Bt,onBeforeLeave:Bt,onLeave:Bt,onAfterLeave:Bt,onLeaveCancelled:Bt,onBeforeAppear:Bt,onAppear:Bt,onAfterAppear:Bt,onAppearCancelled:Bt},om=t=>{const e=t.subTree;return e.component?om(e.component):e},eE={name:"BaseTransition",props:im,setup(t,{slots:e}){const n=Mi(),r=sm();return()=>{const s=e.default&&Ql(e.default(),!0),i=s&&s.length?am(s):n.subTree?Mm():void 0;if(!i)return;const o=ye(t),{mode:c}=o;if(r.isLeaving)return Ac(i);const l=ef(i);if(!l)return Ac(i);let u=vi(l,o,r,n,p=>u=p);l.type!==mt&&Vr(l,u);let f=n.subTree&&ef(n.subTree);if(f&&f.type!==mt&&!Sr(f,l)&&om(n).type!==mt){let p=vi(f,o,r,n);if(Vr(f,p),c==="out-in"&&l.type!==mt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Ac(i);c==="in-out"&&l.type!==mt?p.delayLeave=(m,y,S)=>{const k=cm(r,f);k[String(f.key)]=f,m[tn]=()=>{y(),m[tn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function am(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==mt){e=n;break}}return e}const tE=eE;function cm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function vi(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:y,onAfterLeave:S,onLeaveCancelled:k,onBeforeAppear:O,onAppear:q,onAfterAppear:F,onAppearCancelled:B}=e,j=String(t.key),X=cm(n,t),ne=(_,I)=>{_&&zt(_,r,9,I)},R=(_,I)=>{const b=I[1];ne(_,I),oe(_)?_.every(w=>w.length<=1)&&b():_.length<=1&&b()},v={mode:o,persisted:c,beforeEnter(_){let I=l;if(!n.isMounted)if(i)I=O||l;else return;_[tn]&&_[tn](!0);const b=X[j];b&&Sr(t,b)&&b.el[tn]&&b.el[tn](),ne(I,[_])},enter(_){if(X[j]===t)return;let I=u,b=f,w=p;if(!n.isMounted)if(i)I=q||u,b=F||f,w=B||p;else return;let T=!1;_[qs]=qe=>{T||(T=!0,qe?ne(w,[_]):ne(b,[_]),v.delayedLeave&&v.delayedLeave(),_[qs]=void 0)};const Re=_[qs].bind(null,!1);I?R(I,[_,Re]):Re()},leave(_,I){const b=String(t.key);if(_[qs]&&_[qs](!0),n.isUnmounting)return I();ne(m,[_]);let w=!1;_[tn]=Re=>{w||(w=!0,I(),Re?ne(k,[_]):ne(S,[_]),_[tn]=void 0,X[b]===t&&delete X[b])};const T=_[tn].bind(null,!1);X[b]=t,y?R(y,[_,T]):T()},clone(_){const I=vi(_,e,n,r,s);return s&&s(I),I}};return v}function Ac(t){if(Sa(t))return t=ur(t),t.children=null,t}function ef(t){if(!Sa(t))return rm(t.type)&&t.children?am(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function Vr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Vr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ql(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===wt?(o.patchFlag&128&&s++,r=r.concat(Ql(o.children,e,c))):(e||o.type!==mt)&&r.push(c!=null?ur(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ba(t,e){return fe(t)?Ye({name:t.name},e,{setup:t}):t}function JC(){const t=Mi();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function lm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function tf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const $o=new WeakMap;function oi(t,e,n,r,s=!1){if(oe(t)){t.forEach((k,O)=>oi(k,e&&(oe(e)?e[O]:e),n,r,s));return}if(as(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&oi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?eu(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Ne?c.refs={}:c.refs,p=c.setupState,m=ye(p),y=p===Ne?Ep:k=>tf(f,k)?!1:Se(m,k),S=(k,O)=>!(O&&tf(f,O));if(u!=null&&u!==l){if(nf(e),xe(u))f[u]=null,y(u)&&(p[u]=null);else if(Le(u)){const k=e;S(u,k.k)&&(u.value=null),k.k&&(f[k.k]=null)}}if(fe(l))Li(l,c,12,[o,f]);else{const k=xe(l),O=Le(l);if(k||O){const q=()=>{if(t.f){const F=k?y(l)?p[l]:f[l]:S()||!t.k?l.value:f[t.k];if(s)oe(F)&&Ml(F,i);else if(oe(F))F.includes(i)||F.push(i);else if(k)f[l]=[i],y(l)&&(p[l]=f[l]);else{const B=[i];S(l,t.k)&&(l.value=B),t.k&&(f[t.k]=B)}}else k?(f[l]=o,y(l)&&(p[l]=o)):O&&(S(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const F=()=>{q(),$o.delete(t)};F.id=-1,$o.set(t,F),Pt(F,n)}else nf(t),q()}}}function nf(t){const e=$o.get(t);e&&(e.flags|=8,$o.delete(t))}Ta().requestIdleCallback;Ta().cancelIdleCallback;const as=t=>!!t.type.__asyncLoader,Sa=t=>t.type.__isKeepAlive;function nE(t,e){um(t,"a",e)}function rE(t,e){um(t,"da",e)}function um(t,e,n=gt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Pa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Sa(s.parent.vnode)&&sE(r,e,n,s),s=s.parent}}function sE(t,e,n,r){const s=Pa(e,t,r,!0);dm(()=>{Ml(r[e],s)},n)}function Pa(t,e,n=gt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Nn();const c=Fi(n),l=zt(e,n,t,o);return c(),Dn(),l});return r?s.unshift(i):s.push(i),i}}const Un=t=>(e,n=gt)=>{(!Ii||t==="sp")&&Pa(t,(...r)=>e(...r),n)},iE=Un("bm"),Yl=Un("m"),oE=Un("bu"),hm=Un("u"),fm=Un("bum"),dm=Un("um"),aE=Un("sp"),cE=Un("rtg"),lE=Un("rtc");function uE(t,e=gt){Pa("ec",t,e)}const pm="components";function hE(t,e){return gm(pm,t,!0,e)||t}const mm=Symbol.for("v-ndc");function fE(t){return xe(t)?gm(pm,t,!1)||t:t||mm}function gm(t,e,n=!0,r=!1){const s=Rt||gt;if(s){const i=s.type;{const c=XE(i,!1);if(c&&(c===e||c===bt(e)||c===Ea(bt(e))))return i}const o=rf(s[t]||i[t],e)||rf(s.appContext[t],e);return!o&&r?i:o}}function rf(t,e){return t&&(t[e]||t[bt(e)]||t[Ea(bt(e))])}function dE(t,e,n,r){let s;const i=n,o=oe(t);if(o||xe(t)){const c=o&&an(t);let l=!1,u=!1;c&&(l=!xt(t),u=Vn(t),t=wa(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?fs(Gt(t[f])):Gt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}function XC(t,e,n={},r,s){if(Rt.ce||Rt.parent&&as(Rt.parent)&&Rt.parent.ce){const u=Object.keys(n).length>0;return Rn(),Wo(wt,null,[ze("slot",n,r)],u?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),Rn();const o=i&&_m(i(n)),c=n.key||o&&o.key,l=Wo(wt,{key:(c&&!Lt(c)?c:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function _m(t){return t.some(e=>Ti(e)?!(e.type===mt||e.type===wt&&!_m(e.children)):!0)?t:null}const Xc=t=>t?Fm(t)?eu(t):Xc(t.parent):null,ai=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xc(t.parent),$root:t=>Xc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>vm(t),$forceUpdate:t=>t.f||(t.f=()=>{zl(t.update)}),$nextTick:t=>t.n||(t.n=Gl.bind(t.proxy)),$watch:t=>Xv.bind(t)}),Rc=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Se(t,e),pE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Rc(r,e))return o[e]=1,r[e];if(s!==Ne&&Se(s,e))return o[e]=2,s[e];if(Se(i,e))return o[e]=3,i[e];if(n!==Ne&&Se(n,e))return o[e]=4,n[e];Zc&&(o[e]=0)}}const u=ai[e];let f,p;if(u)return e==="$attrs"&&dt(t.attrs,"get",""),u(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==Ne&&Se(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Se(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Rc(s,e)?(s[e]=n,!0):r!==Ne&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==Ne&&c[0]!=="$"&&Se(t,c)||Rc(e,c)||Se(i,c)||Se(r,c)||Se(ai,c)||Se(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function sf(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Zc=!0;function mE(t){const e=vm(t),n=t.proxy,r=t.ctx;Zc=!1,e.beforeCreate&&of(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:y,updated:S,activated:k,deactivated:O,beforeDestroy:q,beforeUnmount:F,destroyed:B,unmounted:j,render:X,renderTracked:ne,renderTriggered:R,errorCaptured:v,serverPrefetch:_,expose:I,inheritAttrs:b,components:w,directives:T,filters:Re}=e;if(u&&gE(u,r,null),o)for(const le in o){const ge=o[le];fe(ge)&&(r[le]=ge.bind(n))}if(s){const le=s.call(n,n);Ae(le)&&(t.data=xi(le))}if(Zc=!0,i)for(const le in i){const ge=i[le],kt=fe(ge)?ge.bind(n,n):fe(ge.get)?ge.get.bind(n,n):on,qt=!fe(ge)&&fe(ge.set)?ge.set.bind(n):on,Mt=At({get:kt,set:qt});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Me=>Mt.value=Me})}if(c)for(const le in c)ym(c[le],r,n,le);if(l){const le=fe(l)?l.call(n):l;Reflect.ownKeys(le).forEach(ge=>{Ro(ge,le[ge])})}f&&of(f,t,"c");function Pe(le,ge){oe(ge)?ge.forEach(kt=>le(kt.bind(n))):ge&&le(ge.bind(n))}if(Pe(iE,p),Pe(Yl,m),Pe(oE,y),Pe(hm,S),Pe(nE,k),Pe(rE,O),Pe(uE,v),Pe(lE,ne),Pe(cE,R),Pe(fm,F),Pe(dm,j),Pe(aE,_),oe(I))if(I.length){const le=t.exposed||(t.exposed={});I.forEach(ge=>{Object.defineProperty(le,ge,{get:()=>n[ge],set:kt=>n[ge]=kt,enumerable:!0})})}else t.exposed||(t.exposed={});X&&t.render===on&&(t.render=X),b!=null&&(t.inheritAttrs=b),w&&(t.components=w),T&&(t.directives=T),_&&lm(t)}function gE(t,e,n=on){oe(t)&&(t=el(t));for(const r in t){const s=t[r];let i;Ae(s)?"default"in s?i=jt(s.from||r,s.default,!0):i=jt(s.from||r):i=jt(s),Le(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function of(t,e,n){zt(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ym(t,e,n,r){let s=r.includes(".")?nm(n,r):()=>n[r];if(xe(t)){const i=e[t];fe(i)&&ii(s,i)}else if(fe(t))ii(s,t.bind(n));else if(Ae(t))if(oe(t))t.forEach(i=>ym(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&ii(s,i,t)}}function vm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>qo(l,u,o,!0)),qo(l,e,o)),Ae(e)&&i.set(e,l),l}function qo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&qo(t,i,n,!0),s&&s.forEach(o=>qo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=_E[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const _E={data:af,props:cf,emits:cf,methods:Gs,computed:Gs,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:Gs,directives:Gs,watch:vE,provide:af,inject:yE};function af(t,e){return e?t?function(){return Ye(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function yE(t,e){return Gs(el(t),el(e))}function el(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Et(t,e){return t?[...new Set([].concat(t,e))]:e}function Gs(t,e){return t?Ye(Object.create(null),t,e):e}function cf(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:Ye(Object.create(null),sf(t),sf(e??{})):e}function vE(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const r in e)n[r]=Et(t[r],e[r]);return n}function Em(){return{app:null,config:{isNativeTag:Ep,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let EE=0;function TE(t,e){return function(r,s=null){fe(r)||(r=Ye({},r)),s!=null&&!Ae(s)&&(s=null);const i=Em(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:EE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:eT,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&fe(f.install)?(o.add(f),f.install(u,...p)):fe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const y=u._ceVNode||ze(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(y,f,m),l=!0,u._container=f,f.__vue_app__=u,eu(y.component)}},onUnmount(f){c.push(f)},unmount(){l&&(zt(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Nr;Nr=u;try{return f()}finally{Nr=p}}};return u}}let Nr=null;const IE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${bt(e)}Modifiers`]||t[`${jr(e)}Modifiers`];function wE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&IE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>xe(f)?f.trim():f)),o.number&&(s=n.map(ov)));let c,l=r[c=yc(e)]||r[c=yc(bt(e))];!l&&i&&(l=r[c=yc(jr(e))]),l&&zt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,zt(u,t,6,s)}}const AE=new WeakMap;function Tm(t,e,n=!1){const r=n?AE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const l=u=>{const f=Tm(u,e,!0);f&&(c=!0,Ye(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ae(t)&&r.set(t,null),null):(oe(i)?i.forEach(l=>o[l]=null):Ye(o,i),Ae(t)&&r.set(t,o),o)}function Ca(t,e){return!t||!ga(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,jr(e))||Se(t,e))}function lf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:y,ctx:S,inheritAttrs:k}=t,O=Bo(t);let q,F;try{if(n.shapeFlag&4){const j=s||r,X=j;q=rn(u.call(X,j,f,p,y,m,S)),F=c}else{const j=e;q=rn(j.length>1?j(p,{attrs:c,slots:o,emit:l}):j(p,null)),F=e.props?c:RE(c)}}catch(j){ci.length=0,Ra(j,t,1),q=ze(mt)}let B=q;if(F&&k!==!1){const j=Object.keys(F),{shapeFlag:X}=B;j.length&&X&7&&(i&&j.some(_a)&&(F=bE(F,i)),B=ur(B,F,!1,!0))}return n.dirs&&(B=ur(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&Vr(B,n.transition),q=B,Bo(O),q}const RE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ga(n))&&((e||(e={}))[n]=t[n]);return e},bE=(t,e)=>{const n={};for(const r in t)(!_a(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function SE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?uf(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(Im(o,r,m)&&!Ca(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?uf(r,o,u):!0:!!o;return!1}function uf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Im(e,t,i)&&!Ca(n,i))return!0}return!1}function Im(t,e,n){const r=t[n],s=e[n];return n==="style"&&Ae(r)&&Ae(s)?!Ul(r,s):r!==s}function PE({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const wm={},Am=()=>Object.create(wm),Rm=t=>Object.getPrototypeOf(t)===wm;function CE(t,e,n,r=!1){const s={},i=Am();t.propsDefaults=Object.create(null),bm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Kp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function kE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=ye(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Ca(t.emitsOptions,m))continue;const y=e[m];if(l)if(Se(i,m))y!==i[m]&&(i[m]=y,u=!0);else{const S=bt(m);s[S]=tl(l,c,S,y,t,!1)}else y!==i[m]&&(i[m]=y,u=!0)}}}else{bm(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Se(e,p)&&((f=jr(p))===p||!Se(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=tl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Se(e,p))&&(delete i[p],u=!0)}u&&An(t.attrs,"set","")}function bm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(ni(l))continue;const u=e[l];let f;s&&Se(s,f=bt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Ca(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=ye(n),u=c||Ne;for(let f=0;f<i.length;f++){const p=i[f];n[p]=tl(s,l,p,u[p],t,!Se(u,p))}}return o}function tl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Se(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Fi(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===jr(n))&&(r=!0))}return r}const OE=new WeakMap;function Sm(t,e,n=!1){const r=n?OE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!fe(t)){const f=p=>{l=!0;const[m,y]=Sm(p,e,!0);Ye(o,m),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ae(t)&&r.set(t,ss),ss;if(oe(i))for(let f=0;f<i.length;f++){const p=bt(i[f]);hf(p)&&(o[p]=Ne)}else if(i)for(const f in i){const p=bt(f);if(hf(p)){const m=i[f],y=o[p]=oe(m)||fe(m)?{type:m}:Ye({},m),S=y.type;let k=!1,O=!0;if(oe(S))for(let q=0;q<S.length;++q){const F=S[q],B=fe(F)&&F.name;if(B==="Boolean"){k=!0;break}else B==="String"&&(O=!1)}else k=fe(S)&&S.name==="Boolean";y[0]=k,y[1]=O,(k||Se(y,"default"))&&c.push(p)}}const u=[o,c];return Ae(t)&&r.set(t,u),u}function hf(t){return t[0]!=="$"&&!ni(t)}const Jl=t=>t==="_"||t==="_ctx"||t==="$stable",Xl=t=>oe(t)?t.map(rn):[rn(t)],NE=(t,e,n)=>{if(e._n)return e;const r=jo((...s)=>Xl(e(...s)),n);return r._c=!1,r},Pm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Jl(s))continue;const i=t[s];if(fe(i))e[s]=NE(s,i,r);else if(i!=null){const o=Xl(i);e[s]=()=>o}}},Cm=(t,e)=>{const n=Xl(e);t.slots.default=()=>n},km=(t,e,n)=>{for(const r in e)(n||!Jl(r))&&(t[r]=e[r])},DE=(t,e,n)=>{const r=t.slots=Am();if(t.vnode.shapeFlag&32){const s=e._;s?(km(r,e,n),n&&Rp(r,"_",s,!0)):Pm(e,r)}else e&&Cm(t,e)},VE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:km(s,e,n):(i=!e.$stable,Pm(e,s)),o=e}else e&&(Cm(t,e),o={default:1});if(i)for(const c in s)!Jl(c)&&o[c]==null&&delete s[c]},Pt=UE;function xE(t){return LE(t)}function LE(t,e){const n=Ta();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:y=on,insertStaticContent:S}=t,k=(E,A,P,D=null,L=null,x=null,G=void 0,K=null,H=!!A.dynamicChildren)=>{if(E===A)return;E&&!Sr(E,A)&&(D=V(E),Me(E,L,x,!0),E=null),A.patchFlag===-2&&(H=!1,A.dynamicChildren=null);const{type:U,ref:ie,shapeFlag:Q}=A;switch(U){case ka:O(E,A,P,D);break;case mt:q(E,A,P,D);break;case bo:E==null&&F(A,P,D,G);break;case wt:w(E,A,P,D,L,x,G,K,H);break;default:Q&1?X(E,A,P,D,L,x,G,K,H):Q&6?T(E,A,P,D,L,x,G,K,H):(Q&64||Q&128)&&U.process(E,A,P,D,L,x,G,K,H,ee)}ie!=null&&L?oi(ie,E&&E.ref,x,A||E,!A):ie==null&&E&&E.ref!=null&&oi(E.ref,null,x,E,!0)},O=(E,A,P,D)=>{if(E==null)r(A.el=c(A.children),P,D);else{const L=A.el=E.el;A.children!==E.children&&u(L,A.children)}},q=(E,A,P,D)=>{E==null?r(A.el=l(A.children||""),P,D):A.el=E.el},F=(E,A,P,D)=>{[E.el,E.anchor]=S(E.children,A,P,D,E.el,E.anchor)},B=({el:E,anchor:A},P,D)=>{let L;for(;E&&E!==A;)L=m(E),r(E,P,D),E=L;r(A,P,D)},j=({el:E,anchor:A})=>{let P;for(;E&&E!==A;)P=m(E),s(E),E=P;s(A)},X=(E,A,P,D,L,x,G,K,H)=>{if(A.type==="svg"?G="svg":A.type==="math"&&(G="mathml"),E==null)ne(A,P,D,L,x,G,K,H);else{const U=E.el&&E.el._isVueCE?E.el:null;try{U&&U._beginPatch(),_(E,A,L,x,G,K,H)}finally{U&&U._endPatch()}}},ne=(E,A,P,D,L,x,G,K)=>{let H,U;const{props:ie,shapeFlag:Q,transition:te,dirs:ae}=E;if(H=E.el=o(E.type,x,ie&&ie.is,ie),Q&8?f(H,E.children):Q&16&&v(E.children,H,null,D,L,bc(E,x),G,K),ae&&Ir(E,null,D,"created"),R(H,E,E.scopeId,G,D),ie){for(const pe in ie)pe!=="value"&&!ni(pe)&&i(H,pe,null,ie[pe],x,D);"value"in ie&&i(H,"value",null,ie.value,x),(U=ie.onVnodeBeforeMount)&&Xt(U,D,E)}ae&&Ir(E,null,D,"beforeMount");const ce=ME(L,te);ce&&te.beforeEnter(H),r(H,A,P),((U=ie&&ie.onVnodeMounted)||ce||ae)&&Pt(()=>{try{U&&Xt(U,D,E),ce&&te.enter(H),ae&&Ir(E,null,D,"mounted")}finally{}},L)},R=(E,A,P,D,L)=>{if(P&&y(E,P),D)for(let x=0;x<D.length;x++)y(E,D[x]);if(L){let x=L.subTree;if(A===x||Vm(x.type)&&(x.ssContent===A||x.ssFallback===A)){const G=L.vnode;R(E,G,G.scopeId,G.slotScopeIds,L.parent)}}},v=(E,A,P,D,L,x,G,K,H=0)=>{for(let U=H;U<E.length;U++){const ie=E[U]=K?wn(E[U]):rn(E[U]);k(null,ie,A,P,D,L,x,G,K)}},_=(E,A,P,D,L,x,G)=>{const K=A.el=E.el;let{patchFlag:H,dynamicChildren:U,dirs:ie}=A;H|=E.patchFlag&16;const Q=E.props||Ne,te=A.props||Ne;let ae;if(P&&wr(P,!1),(ae=te.onVnodeBeforeUpdate)&&Xt(ae,P,A,E),ie&&Ir(A,E,P,"beforeUpdate"),P&&wr(P,!0),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&f(K,""),U?I(E.dynamicChildren,U,K,P,D,bc(A,L),x):G||ge(E,A,K,null,P,D,bc(A,L),x,!1),H>0){if(H&16)b(K,Q,te,P,L);else if(H&2&&Q.class!==te.class&&i(K,"class",null,te.class,L),H&4&&i(K,"style",Q.style,te.style,L),H&8){const ce=A.dynamicProps;for(let pe=0;pe<ce.length;pe++){const we=ce[pe],Ue=Q[we],We=te[we];(We!==Ue||we==="value")&&i(K,we,Ue,We,L,P)}}H&1&&E.children!==A.children&&f(K,A.children)}else!G&&U==null&&b(K,Q,te,P,L);((ae=te.onVnodeUpdated)||ie)&&Pt(()=>{ae&&Xt(ae,P,A,E),ie&&Ir(A,E,P,"updated")},D)},I=(E,A,P,D,L,x,G)=>{for(let K=0;K<A.length;K++){const H=E[K],U=A[K],ie=H.el&&(H.type===wt||!Sr(H,U)||H.shapeFlag&198)?p(H.el):P;k(H,U,ie,null,D,L,x,G,!0)}},b=(E,A,P,D,L)=>{if(A!==P){if(A!==Ne)for(const x in A)!ni(x)&&!(x in P)&&i(E,x,A[x],null,L,D);for(const x in P){if(ni(x))continue;const G=P[x],K=A[x];G!==K&&x!=="value"&&i(E,x,K,G,L,D)}"value"in P&&i(E,"value",A.value,P.value,L)}},w=(E,A,P,D,L,x,G,K,H)=>{const U=A.el=E?E.el:c(""),ie=A.anchor=E?E.anchor:c("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:ae}=A;ae&&(K=K?K.concat(ae):ae),E==null?(r(U,P,D),r(ie,P,D),v(A.children||[],P,ie,L,x,G,K,H)):Q>0&&Q&64&&te&&E.dynamicChildren&&E.dynamicChildren.length===te.length?(I(E.dynamicChildren,te,P,L,x,G,K),(A.key!=null||L&&A===L.subTree)&&Om(E,A,!0)):ge(E,A,P,ie,L,x,G,K,H)},T=(E,A,P,D,L,x,G,K,H)=>{A.slotScopeIds=K,E==null?A.shapeFlag&512?L.ctx.activate(A,P,D,G,H):Re(A,P,D,L,x,G,H):qe(E,A,H)},Re=(E,A,P,D,L,x,G)=>{const K=E.component=GE(E,D,L);if(Sa(E)&&(K.ctx.renderer=ee),zE(K,!1,G),K.asyncDep){if(L&&L.registerDep(K,Pe,G),!E.el){const H=K.subTree=ze(mt);q(null,H,A,P),E.placeholder=H.el}}else Pe(K,E,A,P,L,x,G)},qe=(E,A,P)=>{const D=A.component=E.component;if(SE(E,A,P))if(D.asyncDep&&!D.asyncResolved){le(D,A,P);return}else D.next=A,D.update();else A.el=E.el,D.vnode=A},Pe=(E,A,P,D,L,x,G)=>{const K=()=>{if(E.isMounted){let{next:Q,bu:te,u:ae,parent:ce,vnode:pe}=E;{const at=Nm(E);if(at){Q&&(Q.el=pe.el,le(E,Q,G)),at.asyncDep.then(()=>{Pt(()=>{E.isUnmounted||U()},L)});return}}let we=Q,Ue;wr(E,!1),Q?(Q.el=pe.el,le(E,Q,G)):Q=pe,te&&vc(te),(Ue=Q.props&&Q.props.onVnodeBeforeUpdate)&&Xt(Ue,ce,Q,pe),wr(E,!0);const We=lf(E),Ft=E.subTree;E.subTree=We,k(Ft,We,p(Ft.el),V(Ft),E,L,x),Q.el=We.el,we===null&&PE(E,We.el),ae&&Pt(ae,L),(Ue=Q.props&&Q.props.onVnodeUpdated)&&Pt(()=>Xt(Ue,ce,Q,pe),L)}else{let Q;const{el:te,props:ae}=A,{bm:ce,m:pe,parent:we,root:Ue,type:We}=E,Ft=as(A);wr(E,!1),ce&&vc(ce),!Ft&&(Q=ae&&ae.onVnodeBeforeMount)&&Xt(Q,we,A),wr(E,!0);{Ue.ce&&Ue.ce._hasShadowRoot()&&Ue.ce._injectChildStyle(We,E.parent?E.parent.type:void 0);const at=E.subTree=lf(E);k(null,at,P,D,E,L,x),A.el=at.el}if(pe&&Pt(pe,L),!Ft&&(Q=ae&&ae.onVnodeMounted)){const at=A;Pt(()=>Xt(Q,we,at),L)}(A.shapeFlag&256||we&&as(we.vnode)&&we.vnode.shapeFlag&256)&&E.a&&Pt(E.a,L),E.isMounted=!0,A=P=D=null}};E.scope.on();const H=E.effect=new Np(K);E.scope.off();const U=E.update=H.run.bind(H),ie=E.job=H.runIfDirty.bind(H);ie.i=E,ie.id=E.uid,H.scheduler=()=>zl(ie),wr(E,!0),U()},le=(E,A,P)=>{A.component=E;const D=E.vnode.props;E.vnode=A,E.next=null,kE(E,A.props,D,P),VE(E,A.children,P),Nn(),Zh(E),Dn()},ge=(E,A,P,D,L,x,G,K,H=!1)=>{const U=E&&E.children,ie=E?E.shapeFlag:0,Q=A.children,{patchFlag:te,shapeFlag:ae}=A;if(te>0){if(te&128){qt(U,Q,P,D,L,x,G,K,H);return}else if(te&256){kt(U,Q,P,D,L,x,G,K,H);return}}ae&8?(ie&16&&St(U,L,x),Q!==U&&f(P,Q)):ie&16?ae&16?qt(U,Q,P,D,L,x,G,K,H):St(U,L,x,!0):(ie&8&&f(P,""),ae&16&&v(Q,P,D,L,x,G,K,H))},kt=(E,A,P,D,L,x,G,K,H)=>{E=E||ss,A=A||ss;const U=E.length,ie=A.length,Q=Math.min(U,ie);let te;for(te=0;te<Q;te++){const ae=A[te]=H?wn(A[te]):rn(A[te]);k(E[te],ae,P,null,L,x,G,K,H)}U>ie?St(E,L,x,!0,!1,Q):v(A,P,D,L,x,G,K,H,Q)},qt=(E,A,P,D,L,x,G,K,H)=>{let U=0;const ie=A.length;let Q=E.length-1,te=ie-1;for(;U<=Q&&U<=te;){const ae=E[U],ce=A[U]=H?wn(A[U]):rn(A[U]);if(Sr(ae,ce))k(ae,ce,P,null,L,x,G,K,H);else break;U++}for(;U<=Q&&U<=te;){const ae=E[Q],ce=A[te]=H?wn(A[te]):rn(A[te]);if(Sr(ae,ce))k(ae,ce,P,null,L,x,G,K,H);else break;Q--,te--}if(U>Q){if(U<=te){const ae=te+1,ce=ae<ie?A[ae].el:D;for(;U<=te;)k(null,A[U]=H?wn(A[U]):rn(A[U]),P,ce,L,x,G,K,H),U++}}else if(U>te)for(;U<=Q;)Me(E[U],L,x,!0),U++;else{const ae=U,ce=U,pe=new Map;for(U=ce;U<=te;U++){const tt=A[U]=H?wn(A[U]):rn(A[U]);tt.key!=null&&pe.set(tt.key,U)}let we,Ue=0;const We=te-ce+1;let Ft=!1,at=0;const $n=new Array(We);for(U=0;U<We;U++)$n[U]=0;for(U=ae;U<=Q;U++){const tt=E[U];if(Ue>=We){Me(tt,L,x,!0);continue}let Ut;if(tt.key!=null)Ut=pe.get(tt.key);else for(we=ce;we<=te;we++)if($n[we-ce]===0&&Sr(tt,A[we])){Ut=we;break}Ut===void 0?Me(tt,L,x,!0):($n[Ut-ce]=U+1,Ut>=at?at=Ut:Ft=!0,k(tt,A[Ut],P,null,L,x,G,K,H),Ue++)}const Cs=Ft?FE($n):ss;for(we=Cs.length-1,U=We-1;U>=0;U--){const tt=ce+U,Ut=A[tt],Zi=A[tt+1],Wr=tt+1<ie?Zi.el||Dm(Zi):D;$n[U]===0?k(null,Ut,P,Wr,L,x,G,K,H):Ft&&(we<0||U!==Cs[we]?Mt(Ut,P,Wr,2):we--)}}},Mt=(E,A,P,D,L=null)=>{const{el:x,type:G,transition:K,children:H,shapeFlag:U}=E;if(U&6){Mt(E.component.subTree,A,P,D);return}if(U&128){E.suspense.move(A,P,D);return}if(U&64){G.move(E,A,P,ee);return}if(G===wt){r(x,A,P);for(let Q=0;Q<H.length;Q++)Mt(H[Q],A,P,D);r(E.anchor,A,P);return}if(G===bo){B(E,A,P);return}if(D!==2&&U&1&&K)if(D===0)K.beforeEnter(x),r(x,A,P),Pt(()=>K.enter(x),L);else{const{leave:Q,delayLeave:te,afterLeave:ae}=K,ce=()=>{E.ctx.isUnmounted?s(x):r(x,A,P)},pe=()=>{x._isLeaving&&x[tn](!0),Q(x,()=>{ce(),ae&&ae()})};te?te(x,ce,pe):pe()}else r(x,A,P)},Me=(E,A,P,D=!1,L=!1)=>{const{type:x,props:G,ref:K,children:H,dynamicChildren:U,shapeFlag:ie,patchFlag:Q,dirs:te,cacheIndex:ae,memo:ce}=E;if(Q===-2&&(L=!1),K!=null&&(Nn(),oi(K,null,P,E,!0),Dn()),ae!=null&&(A.renderCache[ae]=void 0),ie&256){A.ctx.deactivate(E);return}const pe=ie&1&&te,we=!as(E);let Ue;if(we&&(Ue=G&&G.onVnodeBeforeUnmount)&&Xt(Ue,A,E),ie&6)Ot(E.component,P,D);else{if(ie&128){E.suspense.unmount(P,D);return}pe&&Ir(E,null,A,"beforeUnmount"),ie&64?E.type.remove(E,A,P,ee,D):U&&!U.hasOnce&&(x!==wt||Q>0&&Q&64)?St(U,A,P,!1,!0):(x===wt&&Q&384||!L&&ie&16)&&St(H,A,P),D&&Fe(E)}const We=ce!=null&&ae==null;(we&&(Ue=G&&G.onVnodeUnmounted)||pe||We)&&Pt(()=>{Ue&&Xt(Ue,A,E),pe&&Ir(E,null,A,"unmounted"),We&&(E.el=null)},P)},Fe=E=>{const{type:A,el:P,anchor:D,transition:L}=E;if(A===wt){jn(P,D);return}if(A===bo){j(E);return}const x=()=>{s(P),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(E.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:K}=L,H=()=>G(P,x);K?K(E.el,x,H):H()}else x()},jn=(E,A)=>{let P;for(;E!==A;)P=m(E),s(E),E=P;s(A)},Ot=(E,A,P)=>{const{bum:D,scope:L,job:x,subTree:G,um:K,m:H,a:U}=E;ff(H),ff(U),D&&vc(D),L.stop(),x&&(x.flags|=8,Me(G,E,A,P)),K&&Pt(K,A),Pt(()=>{E.isUnmounted=!0},A)},St=(E,A,P,D=!1,L=!1,x=0)=>{for(let G=x;G<E.length;G++)Me(E[G],A,P,D,L)},V=E=>{if(E.shapeFlag&6)return V(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const A=m(E.anchor||E.el),P=A&&A[Zv];return P?m(P):A};let Y=!1;const z=(E,A,P)=>{let D;E==null?A._vnode&&(Me(A._vnode,null,null,!0),D=A._vnode.component):k(A._vnode||null,E,A,null,null,null,P),A._vnode=E,Y||(Y=!0,Zh(D),Xp(),Y=!1)},ee={p:k,um:Me,m:Mt,r:Fe,mt:Re,mc:v,pc:ge,pbc:I,n:V,o:t};return{render:z,hydrate:void 0,createApp:TE(z)}}function bc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function wr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ME(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Om(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=wn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Om(o,c)),c.type===ka&&(c.patchFlag===-1&&(c=s[i]=wn(c)),c.el=o.el),c.type===mt&&!c.el&&(c.el=o.el)}}function FE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Nm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Nm(e)}function ff(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Dm(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Dm(e.subTree):null}const Vm=t=>t.__isSuspense;function UE(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):zv(t)}const wt=Symbol.for("v-fgt"),ka=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),bo=Symbol.for("v-stc"),ci=[];let Dt=null;function Rn(t=!1){ci.push(Dt=t?null:[])}function BE(){ci.pop(),Dt=ci[ci.length-1]||null}let Ei=1;function Ho(t,e=!1){Ei+=t,t<0&&Dt&&e&&(Dt.hasOnce=!0)}function xm(t){return t.dynamicChildren=Ei>0?Dt||ss:null,BE(),Ei>0&&Dt&&Dt.push(t),t}function zs(t,e,n,r,s,i){return xm(Pr(t,e,n,r,s,i,!0))}function Wo(t,e,n,r,s){return xm(ze(t,e,n,r,s,!0))}function Ti(t){return t?t.__v_isVNode===!0:!1}function Sr(t,e){return t.type===e.type&&t.key===e.key}const Lm=({key:t})=>t??null,So=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||Le(t)||fe(t)?{i:Rt,r:t,k:e,f:!!n}:t:null);function Pr(t,e=null,n=null,r=0,s=null,i=t===wt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lm(e),ref:e&&So(e),scopeId:em,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Rt};return c?(Zl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=xe(n)?8:16),Ei>0&&!o&&Dt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Dt.push(l),l}const ze=jE;function jE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===mm)&&(t=mt),Ti(t)){const c=ur(t,e,!0);return n&&Zl(c,n),Ei>0&&!i&&Dt&&(c.shapeFlag&6?Dt[Dt.indexOf(t)]=c:Dt.push(c)),c.patchFlag=-2,c}if(ZE(t)&&(t=t.__vccOpts),e){e=$E(e);let{class:c,style:l}=e;c&&!xe(c)&&(e.class=Ia(c)),Ae(l)&&(Aa(l)&&!oe(l)&&(l=Ye({},l)),e.style=Fl(l))}const o=xe(t)?1:Vm(t)?128:rm(t)?64:Ae(t)?4:fe(t)?2:0;return Pr(t,e,n,r,s,o,i,!0)}function $E(t){return t?Aa(t)||Rm(t)?Ye({},t):t:null}function ur(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?HE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Lm(u),ref:e&&e.ref?n&&i?oe(i)?i.concat(So(e)):[i,So(e)]:So(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==wt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ur(t.ssContent),ssFallback:t.ssFallback&&ur(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Vr(f,l.clone(f)),f}function qE(t=" ",e=0){return ze(ka,null,t,e)}function ZC(t,e){const n=ze(bo,null,t);return n.staticCount=e,n}function Mm(t="",e=!1){return e?(Rn(),Wo(mt,null,t)):ze(mt,null,t)}function rn(t){return t==null||typeof t=="boolean"?ze(mt):oe(t)?ze(wt,null,t.slice()):Ti(t)?wn(t):ze(ka,null,String(t))}function wn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ur(t)}function Zl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Zl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Rm(e)?e._ctx=Rt:s===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Rt},n=32):(e=String(e),r&64?(n=16,e=[qE(e)]):n=8);t.children=e,t.shapeFlag|=n}function HE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ia([e.class,r.class]));else if(s==="style")e.style=Fl([e.style,r.style]);else if(ga(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!_a(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function Xt(t,e,n,r=null){zt(t,e,7,[n,r])}const WE=Em();let KE=0;function GE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||WE,i={uid:KE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sm(r,s),emitsOptions:Tm(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=wE.bind(null,i),t.ce&&t.ce(i),i}let gt=null;const Mi=()=>gt||Rt;let Ko,nl;{const t=Ta(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ko=e("__VUE_INSTANCE_SETTERS__",n=>gt=n),nl=e("__VUE_SSR_SETTERS__",n=>Ii=n)}const Fi=t=>{const e=gt;return Ko(t),t.scope.on(),()=>{t.scope.off(),Ko(e)}},df=()=>{gt&&gt.scope.off(),Ko(null)};function Fm(t){return t.vnode.shapeFlag&4}let Ii=!1;function zE(t,e=!1,n=!1){e&&nl(e);const{props:r,children:s}=t.vnode,i=Fm(t);CE(t,r,i,e),DE(t,s,n||e);const o=i?QE(t,e):void 0;return e&&nl(!1),o}function QE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,pE);const{setup:r}=n;if(r){Nn();const s=t.setupContext=r.length>1?JE(t):null,i=Fi(t),o=Li(r,t,0,[t.props,s]),c=Ip(o);if(Dn(),i(),(c||t.sp)&&!as(t)&&lm(t),c){if(o.then(df,df),e)return o.then(l=>{pf(t,l)}).catch(l=>{Ra(l,t,0)});t.asyncDep=o}else pf(t,o)}else Um(t)}function pf(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=zp(e)),Um(t)}function Um(t,e,n){const r=t.type;t.render||(t.render=r.render||on);{const s=Fi(t);Nn();try{mE(t)}finally{Dn(),s()}}}const YE={get(t,e){return dt(t,"get",""),t[e]}};function JE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,YE),slots:t.slots,emit:t.emit,expose:e}}function eu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(zp(Kl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ai)return ai[n](t)},has(e,n){return n in e||n in ai}})):t.proxy}function XE(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function ZE(t){return fe(t)&&"__vccOpts"in t}const At=(t,e)=>qv(t,e,Ii);function tu(t,e,n){try{Ho(-1);const r=arguments.length;return r===2?Ae(e)&&!oe(e)?Ti(e)?ze(t,null,[e]):ze(t,e):ze(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ti(n)&&(n=[n]),ze(t,e,n))}finally{Ho(1)}}const eT="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rl;const mf=typeof window<"u"&&window.trustedTypes;if(mf)try{rl=mf.createPolicy("vue",{createHTML:t=>t})}catch{}const Bm=rl?t=>rl.createHTML(t):t=>t,tT="http://www.w3.org/2000/svg",nT="http://www.w3.org/1998/Math/MathML",In=typeof document<"u"?document:null,gf=In&&In.createElement("template"),rT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?In.createElementNS(tT,t):e==="mathml"?In.createElementNS(nT,t):n?In.createElement(t,{is:n}):In.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>In.createTextNode(t),createComment:t=>In.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>In.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{gf.innerHTML=Bm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=gf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Kn="transition",Hs="animation",ds=Symbol("_vtc"),jm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$m=Ye({},im,jm),sT=t=>(t.displayName="Transition",t.props=$m,t),iT=sT((t,{slots:e})=>tu(tE,qm(t),e)),Ar=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},_f=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function qm(t){const e={};for(const w in t)w in jm||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=t,S=oT(s),k=S&&S[0],O=S&&S[1],{onBeforeEnter:q,onEnter:F,onEnterCancelled:B,onLeave:j,onLeaveCancelled:X,onBeforeAppear:ne=q,onAppear:R=F,onAppearCancelled:v=B}=e,_=(w,T,Re,qe)=>{w._enterCancelled=qe,Qn(w,T?f:c),Qn(w,T?u:o),Re&&Re()},I=(w,T)=>{w._isLeaving=!1,Qn(w,p),Qn(w,y),Qn(w,m),T&&T()},b=w=>(T,Re)=>{const qe=w?R:F,Pe=()=>_(T,w,Re);Ar(qe,[T,Pe]),yf(()=>{Qn(T,w?l:i),Zt(T,w?f:c),_f(qe)||vf(T,r,k,Pe)})};return Ye(e,{onBeforeEnter(w){Ar(q,[w]),Zt(w,i),Zt(w,o)},onBeforeAppear(w){Ar(ne,[w]),Zt(w,l),Zt(w,u)},onEnter:b(!1),onAppear:b(!0),onLeave(w,T){w._isLeaving=!0;const Re=()=>I(w,T);Zt(w,p),w._enterCancelled?(Zt(w,m),sl(w)):(sl(w),Zt(w,m)),yf(()=>{w._isLeaving&&(Qn(w,p),Zt(w,y),_f(j)||vf(w,r,O,Re))}),Ar(j,[w,Re])},onEnterCancelled(w){_(w,!1,void 0,!0),Ar(B,[w])},onAppearCancelled(w){_(w,!0,void 0,!0),Ar(v,[w])},onLeaveCancelled(w){I(w),Ar(X,[w])}})}function oT(t){if(t==null)return null;if(Ae(t))return[Sc(t.enter),Sc(t.leave)];{const e=Sc(t);return[e,e]}}function Sc(t){return av(t)}function Zt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ds]||(t[ds]=new Set)).add(e)}function Qn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ds];n&&(n.delete(e),n.size||(t[ds]=void 0))}function yf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let aT=0;function vf(t,e,n,r){const s=t._endId=++aT,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=Hm(t,e);if(!o)return r();const u=o+"end";let f=0;const p=()=>{t.removeEventListener(u,m),i()},m=y=>{y.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(u,m)}function Hm(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${Kn}Delay`),i=r(`${Kn}Duration`),o=Ef(s,i),c=r(`${Hs}Delay`),l=r(`${Hs}Duration`),u=Ef(c,l);let f=null,p=0,m=0;e===Kn?o>0&&(f=Kn,p=o,m=i.length):e===Hs?u>0&&(f=Hs,p=u,m=l.length):(p=Math.max(o,u),f=p>0?o>u?Kn:Hs:null,m=f?f===Kn?i.length:l.length:0);const y=f===Kn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Kn}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:y}}function Ef(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Tf(n)+Tf(t[r])))}function Tf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function sl(t){return(t?t.ownerDocument:document).body.offsetHeight}function cT(t,e,n){const r=t[ds];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const If=Symbol("_vod"),lT=Symbol("_vsh"),uT=Symbol(""),hT=/(?:^|;)\s*display\s*:/;function fT(t,e,n){const r=t.style,s=xe(n);let i=!1;if(n&&!s){if(e)if(xe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Qs(r,c,"")}else for(const o in e)n[o]==null&&Qs(r,o,"");for(const o in n){o==="display"&&(i=!0);const c=n[o];c!=null?pT(t,o,!xe(e)&&e?e[o]:void 0,c)||Qs(r,o,c):Qs(r,o,"")}}else if(s){if(e!==n){const o=r[uT];o&&(n+=";"+o),r.cssText=n,i=hT.test(n)}}else e&&t.removeAttribute("style");If in t&&(t[If]=i?r.display:"",t[lT]&&(r.display="none"))}const wf=/\s*!important$/;function Qs(t,e,n){if(oe(n))n.forEach(r=>Qs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=dT(t,e);wf.test(n)?t.setProperty(jr(r),n.replace(wf,""),"important"):t[r]=n}}const Af=["Webkit","Moz","ms"],Pc={};function dT(t,e){const n=Pc[e];if(n)return n;let r=bt(e);if(r!=="filter"&&r in t)return Pc[e]=r;r=Ea(r);for(let s=0;s<Af.length;s++){const i=Af[s]+r;if(i in t)return Pc[e]=i}return e}function pT(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&xe(r)&&n===r}const Rf="http://www.w3.org/1999/xlink";function bf(t,e,n,r,s,i=dv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Rf,e.slice(6,e.length)):t.setAttributeNS(Rf,e,n):n==null||i&&!bp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Lt(n)?String(n):n)}function Sf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Bm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=bp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function mT(t,e,n,r){t.addEventListener(e,n,r)}function gT(t,e,n,r){t.removeEventListener(e,n,r)}const Pf=Symbol("_vei");function _T(t,e,n,r,s=null){const i=t[Pf]||(t[Pf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=yT(e);if(r){const u=i[e]=TT(r,s);mT(t,c,u,l)}else o&&(gT(t,c,o,l),i[e]=void 0)}}const Cf=/(?:Once|Passive|Capture)$/;function yT(t){let e;if(Cf.test(t)){e={};let r;for(;r=t.match(Cf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):jr(t.slice(2)),e]}let Cc=0;const vT=Promise.resolve(),ET=()=>Cc||(vT.then(()=>Cc=0),Cc=Date.now());function TT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;zt(IT(r,n.value),e,5,[r])};return n.value=t,n.attached=ET(),n}function IT(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const kf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,wT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?cT(t,r,o):e==="style"?fT(t,n,r):ga(e)?_a(e)||_T(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):AT(t,e,r,o))?(Sf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&bf(t,e,r,o,i,e!=="value")):t._isVueCE&&(RT(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!xe(r)))?Sf(t,bt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),bf(t,e,r,o))};function AT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&kf(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return kf(e)&&xe(n)?!1:e in t}function RT(t,e){const n=t._def.props;if(!n)return!1;const r=bt(e);return Array.isArray(n)?n.some(s=>bt(s)===r):Object.keys(n).some(s=>bt(s)===r)}const Wm=new WeakMap,Km=new WeakMap,Go=Symbol("_moveCb"),Of=Symbol("_enterCb"),bT=t=>(delete t.props.mode,t),ST=bT({name:"TransitionGroup",props:Ye({},$m,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Mi(),r=sm();let s,i;return hm(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!NT(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(CT),s.forEach(kT);const c=s.filter(OT);sl(n.vnode.el),c.forEach(l=>{const u=l.el,f=u.style;Zt(u,o),f.transform=f.webkitTransform=f.transitionDuration="";const p=u[Go]=m=>{m&&m.target!==u||(!m||m.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",p),u[Go]=null,Qn(u,o))};u.addEventListener("transitionend",p)}),s=[]}),()=>{const o=ye(t),c=qm(o);let l=o.tag||wt;if(s=[],i)for(let u=0;u<i.length;u++){const f=i[u];f.el&&f.el instanceof Element&&(s.push(f),Vr(f,vi(f,c,r,n)),Wm.set(f,Gm(f.el)))}i=e.default?Ql(e.default()):[];for(let u=0;u<i.length;u++){const f=i[u];f.key!=null&&Vr(f,vi(f,c,r,n))}return ze(l,null,i)}}}),PT=ST;function CT(t){const e=t.el;e[Go]&&e[Go](),e[Of]&&e[Of]()}function kT(t){Km.set(t,Gm(t.el))}function OT(t){const e=Wm.get(t),n=Km.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el,o=i.style,c=i.getBoundingClientRect();let l=1,u=1;return i.offsetWidth&&(l=c.width/i.offsetWidth),i.offsetHeight&&(u=c.height/i.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(u)||u===0)&&(u=1),Math.abs(l-1)<.01&&(l=1),Math.abs(u-1)<.01&&(u=1),o.transform=o.webkitTransform=`translate(${r/l}px,${s/u}px)`,o.transitionDuration="0s",t}}function Gm(t){const e=t.getBoundingClientRect();return{left:e.left,top:e.top}}function NT(t,e,n){const r=t.cloneNode(),s=t[ds];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=Hm(r);return i.removeChild(r),o}const DT=["ctrl","shift","alt","meta"],VT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>DT.some(n=>t[`${n}Key`]&&!e.includes(n))},ek=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=VT[e[o]];if(c&&c(s,e))return}return t(s,...i)})},xT=Ye({patchProp:wT},rT);let Nf;function LT(){return Nf||(Nf=xE(xT))}const MT=(...t)=>{const e=LT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=UT(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,FT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function FT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function UT(t){return xe(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let zm;const Oa=t=>zm=t,Qm=Symbol();function il(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var li;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(li||(li={}));function BT(){const t=kp(!0),e=t.run(()=>sr({}));let n=[],r=[];const s=Kl({install(i){Oa(s),s._a=i,i.provide(Qm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ym=()=>{};function Df(t,e,n,r=Ym){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Op()&&mv(s),s}function Jr(t,...e){t.slice().forEach(n=>{n(...e)})}const jT=t=>t(),Vf=Symbol(),kc=Symbol();function ol(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];il(s)&&il(r)&&t.hasOwnProperty(n)&&!Le(r)&&!an(r)?t[n]=ol(s,r):t[n]=r}return t}const $T=Symbol();function qT(t){return!il(t)||!t.hasOwnProperty($T)}const{assign:Yn}=Object;function HT(t){return!!(Le(t)&&t.effect)}function WT(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=s?s():{});const f=Fv(n.state.value[t]);return Yn(f,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=Kl(At(()=>{Oa(n);const y=n._s.get(t);return o[m].call(y,y)})),p),{}))}return l=Jm(t,u,e,n,r,!0),l}function Jm(t,e,n={},r,s,i){let o;const c=Yn({actions:{}},n),l={deep:!0};let u,f,p=[],m=[],y;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={});let k;function O(v){let _;u=f=!1,typeof v=="function"?(v(r.state.value[t]),_={type:li.patchFunction,storeId:t,events:y}):(ol(r.state.value[t],v),_={type:li.patchObject,payload:v,storeId:t,events:y});const I=k=Symbol();Gl().then(()=>{k===I&&(u=!0)}),f=!0,Jr(p,_,r.state.value[t])}const q=i?function(){const{state:_}=n,I=_?_():{};this.$patch(b=>{Yn(b,I)})}:Ym;function F(){o.stop(),p=[],m=[],r._s.delete(t)}const B=(v,_="")=>{if(Vf in v)return v[kc]=_,v;const I=function(){Oa(r);const b=Array.from(arguments),w=[],T=[];function Re(le){w.push(le)}function qe(le){T.push(le)}Jr(m,{args:b,name:I[kc],store:X,after:Re,onError:qe});let Pe;try{Pe=v.apply(this&&this.$id===t?this:X,b)}catch(le){throw Jr(T,le),le}return Pe instanceof Promise?Pe.then(le=>(Jr(w,le),le)).catch(le=>(Jr(T,le),Promise.reject(le))):(Jr(w,Pe),Pe)};return I[Vf]=!0,I[kc]=_,I},j={_p:r,$id:t,$onAction:Df.bind(null,m),$patch:O,$reset:q,$subscribe(v,_={}){const I=Df(p,v,_.detached,()=>b()),b=o.run(()=>ii(()=>r.state.value[t],w=>{(_.flush==="sync"?f:u)&&v({storeId:t,type:li.direct,events:y},w)},Yn({},l,_)));return I},$dispose:F},X=xi(j);r._s.set(t,X);const R=(r._a&&r._a.runWithContext||jT)(()=>r._e.run(()=>(o=kp()).run(()=>e({action:B}))));for(const v in R){const _=R[v];if(Le(_)&&!HT(_)||an(_))i||(S&&qT(_)&&(Le(_)?_.value=S[v]:ol(_,S[v])),r.state.value[t][v]=_);else if(typeof _=="function"){const I=B(_,v);R[v]=I,c.actions[v]=_}}return Yn(X,R),Yn(ye(X),R),Object.defineProperty(X,"$state",{get:()=>r.state.value[t],set:v=>{O(_=>{Yn(_,v)})}}),r._p.forEach(v=>{Yn(X,o.run(()=>v({store:X,app:r._a,pinia:r,options:c})))}),S&&i&&n.hydrate&&n.hydrate(X.$state,S),u=!0,f=!0,X}/*! #__NO_SIDE_EFFECTS__ */function Xm(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(c,l){const u=Qv();return c=c||(u?jt(Qm,null):null),c&&Oa(c),c=zm,c._s.has(r)||(i?Jm(r,e,s,c):WT(r,s,c)),c._s.get(r)}return o.$id=r,o}function KT(t){{const e=ye(t),n={};for(const r in e){const s=e[r];s.effect?n[r]=At({get:()=>t[r],set(i){t[r]=i}}):(Le(s)||an(s))&&(n[r]=jv(t,r))}return n}}var xf={};/**
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
 */const Zm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},GT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},eg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,y=u&63;l||(y=64,o||(m=64)),r.push(n[f],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):GT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new zT;const m=i<<2|c>>4;if(r.push(m),u!==64){const y=c<<4&240|u>>2;if(r.push(y),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QT=function(t){const e=Zm(t);return eg.encodeByteArray(e,!0)},zo=function(t){return QT(t).replace(/\./g,"")},tg=function(t){try{return eg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function YT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const JT=()=>YT().__FIREBASE_DEFAULTS__,XT=()=>{if(typeof process>"u"||typeof xf>"u")return;const t=xf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tg(t[1]);return e&&JSON.parse(e)},Na=()=>{try{return JT()||XT()||ZT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ng=t=>{var e,n;return(n=(e=Na())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rg=t=>{const e=ng(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sg=()=>{var t;return(t=Na())===null||t===void 0?void 0:t.config},ig=t=>{var e;return(e=Na())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class eI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function og(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[zo(JSON.stringify(n)),zo(JSON.stringify(o)),""].join(".")}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function nI(){var t;const e=(t=Na())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oI(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aI(){return!nI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cI(){try{return typeof indexedDB=="object"}catch{return!1}}function lI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const uI="FirebaseError";class gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uI,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ui.prototype.create)}}class Ui{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?hI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new gn(s,c,r)}}function hI(t,e){return t.replace(fI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const fI=/\{\$([^}]+)}/g;function dI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Lf(i)&&Lf(o)){if(!Qo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Lf(t){return t!==null&&typeof t=="object"}/**
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
 */function Bi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ys(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Js(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function pI(t,e){const n=new mI(t,e);return n.subscribe.bind(n)}class mI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Oc),s.error===void 0&&(s.error=Oc),s.complete===void 0&&(s.complete=Oc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oc(){}/**
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
 */function Je(t){return t&&t._delegate?t._delegate:t}class hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const br="[DEFAULT]";/**
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
 */class _I{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new eI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vI(e))try{this.getOrInitializeService({instanceIdentifier:br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=br){return this.instances.has(e)}getOptions(e=br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=br){return this.component?this.component.multipleInstances?e:br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yI(t){return t===br?void 0:t}function vI(t){return t.instantiationMode==="EAGER"}/**
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
 */class EI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _I(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const TI={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},II=ve.INFO,wI={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},AI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=wI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nu{constructor(e){this.name=e,this._logLevel=II,this._logHandler=AI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const RI=(t,e)=>e.some(n=>t instanceof n);let Mf,Ff;function bI(){return Mf||(Mf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SI(){return Ff||(Ff=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ag=new WeakMap,al=new WeakMap,cg=new WeakMap,Nc=new WeakMap,ru=new WeakMap;function PI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(or(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ag.set(n,t)}).catch(()=>{}),ru.set(e,t),e}function CI(t){if(al.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});al.set(t,e)}let cl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return al.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kI(t){cl=t(cl)}function OI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dc(this),e,...n);return cg.set(r,e.sort?e.sort():[e]),or(r)}:SI().includes(t)?function(...e){return t.apply(Dc(this),e),or(ag.get(this))}:function(...e){return or(t.apply(Dc(this),e))}}function NI(t){return typeof t=="function"?OI(t):(t instanceof IDBTransaction&&CI(t),RI(t,bI())?new Proxy(t,cl):t)}function or(t){if(t instanceof IDBRequest)return PI(t);if(Nc.has(t))return Nc.get(t);const e=NI(t);return e!==t&&(Nc.set(t,e),ru.set(e,t)),e}const Dc=t=>ru.get(t);function DI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(or(o.result),l.oldVersion,l.newVersion,or(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const VI=["get","getKey","getAll","getAllKeys","count"],xI=["put","add","delete","clear"],Vc=new Map;function Uf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vc.get(e))return Vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=xI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||VI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Vc.set(e,i),i}kI(t=>({...t,get:(e,n,r)=>Uf(e,n)||t.get(e,n,r),has:(e,n)=>!!Uf(e,n)||t.has(e,n)}));/**
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
 */class LI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ll="@firebase/app",Bf="0.10.13";/**
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
 */const xn=new nu("@firebase/app"),FI="@firebase/app-compat",UI="@firebase/analytics-compat",BI="@firebase/analytics",jI="@firebase/app-check-compat",$I="@firebase/app-check",qI="@firebase/auth",HI="@firebase/auth-compat",WI="@firebase/database",KI="@firebase/data-connect",GI="@firebase/database-compat",zI="@firebase/functions",QI="@firebase/functions-compat",YI="@firebase/installations",JI="@firebase/installations-compat",XI="@firebase/messaging",ZI="@firebase/messaging-compat",ew="@firebase/performance",tw="@firebase/performance-compat",nw="@firebase/remote-config",rw="@firebase/remote-config-compat",sw="@firebase/storage",iw="@firebase/storage-compat",ow="@firebase/firestore",aw="@firebase/vertexai-preview",cw="@firebase/firestore-compat",lw="firebase",uw="10.14.1";/**
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
 */const ul="[DEFAULT]",hw={[ll]:"fire-core",[FI]:"fire-core-compat",[BI]:"fire-analytics",[UI]:"fire-analytics-compat",[$I]:"fire-app-check",[jI]:"fire-app-check-compat",[qI]:"fire-auth",[HI]:"fire-auth-compat",[WI]:"fire-rtdb",[KI]:"fire-data-connect",[GI]:"fire-rtdb-compat",[zI]:"fire-fn",[QI]:"fire-fn-compat",[YI]:"fire-iid",[JI]:"fire-iid-compat",[XI]:"fire-fcm",[ZI]:"fire-fcm-compat",[ew]:"fire-perf",[tw]:"fire-perf-compat",[nw]:"fire-rc",[rw]:"fire-rc-compat",[sw]:"fire-gcs",[iw]:"fire-gcs-compat",[ow]:"fire-fst",[cw]:"fire-fst-compat",[aw]:"fire-vertex","fire-js":"fire-js",[lw]:"fire-js-all"};/**
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
 */const Yo=new Map,fw=new Map,hl=new Map;function jf(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xr(t){const e=t.name;if(hl.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;hl.set(e,t);for(const n of Yo.values())jf(n,t);for(const n of fw.values())jf(n,t);return!0}function Da(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bn(t){return t.settings!==void 0}/**
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
 */const dw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ar=new Ui("app","Firebase",dw);/**
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
 */class pw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
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
 */const $r=uw;function lg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ul,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ar.create("bad-app-name",{appName:String(s)});if(n||(n=sg()),!n)throw ar.create("no-options");const i=Yo.get(s);if(i){if(Qo(n,i.options)&&Qo(r,i.config))return i;throw ar.create("duplicate-app",{appName:s})}const o=new EI(s);for(const l of hl.values())o.addComponent(l);const c=new pw(n,r,o);return Yo.set(s,c),c}function su(t=ul){const e=Yo.get(t);if(!e&&t===ul&&sg())return lg();if(!e)throw ar.create("no-app",{appName:t});return e}function cn(t,e,n){var r;let s=(r=hw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(c.join(" "));return}xr(new hr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const mw="firebase-heartbeat-database",gw=1,wi="firebase-heartbeat-store";let xc=null;function ug(){return xc||(xc=DI(mw,gw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),xc}async function _w(t){try{const n=(await ug()).transaction(wi),r=await n.objectStore(wi).get(hg(t));return await n.done,r}catch(e){if(e instanceof gn)xn.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function $f(t,e){try{const r=(await ug()).transaction(wi,"readwrite");await r.objectStore(wi).put(e,hg(t)),await r.done}catch(n){if(n instanceof gn)xn.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function hg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yw=1024,vw=30*24*60*60*1e3;class Ew{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Iw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=qf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=vw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qf(),{heartbeatsToSend:r,unsentEntries:s}=Tw(this._heartbeatsCache.heartbeats),i=zo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return xn.warn(n),""}}}function qf(){return new Date().toISOString().substring(0,10)}function Tw(t,e=yw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Hf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Hf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Iw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cI()?lI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _w(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $f(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $f(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Hf(t){return zo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ww(t){xr(new hr("platform-logger",e=>new LI(e),"PRIVATE")),xr(new hr("heartbeat",e=>new Ew(e),"PRIVATE")),cn(ll,Bf,t),cn(ll,Bf,"esm2017"),cn("fire-js","")}ww("");function iu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function fg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Aw=fg,dg=new Ui("auth","Firebase",fg());/**
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
 */const Jo=new nu("@firebase/auth");function Rw(t,...e){Jo.logLevel<=ve.WARN&&Jo.warn(`Auth (${$r}): ${t}`,...e)}function Po(t,...e){Jo.logLevel<=ve.ERROR&&Jo.error(`Auth (${$r}): ${t}`,...e)}/**
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
 */function Qt(t,...e){throw ou(t,...e)}function ln(t,...e){return ou(t,...e)}function pg(t,e,n){const r=Object.assign(Object.assign({},Aw()),{[e]:n});return new Ui("auth","Firebase",r).create(e,{appName:t.name})}function cr(t){return pg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ou(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dg.create(t,...e)}function re(t,e,...n){if(!t)throw ou(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Po(e),new Error(e)}function Ln(t,e){t||Sn(e)}/**
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
 */function Xo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bw(){return Wf()==="http:"||Wf()==="https:"}function Wf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Sw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bw()||sI()||"connection"in navigator)?navigator.onLine:!0}function Pw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=tI()||iI()}get(){return Sw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function au(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Cw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kw=new ji(3e4,6e4);function mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bn(t,e,n,r,s={}){return gg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Bi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return rI()||(u.referrerPolicy="no-referrer"),mg.fetch()(_g(t,t.config.apiHost,n,c),u)})}async function gg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Cw),e);try{const s=new Nw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw vo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw vo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw vo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw pg(t,f,u);Qt(t,f)}}catch(s){if(s instanceof gn)throw s;Qt(t,"network-request-failed",{message:String(s)})}}async function Va(t,e,n,r,s={}){const i=await Bn(t,e,n,r,s);return"mfaPendingCredential"in i&&Qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function _g(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?au(t.config,s):`${t.config.apiScheme}://${s}`}function Ow(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Nw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),kw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}function Kf(t){return t!==void 0&&t.enterprise!==void 0}class Dw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ow(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Vw(t,e){return Bn(t,"GET","/v2/recaptchaConfig",mr(t,e))}/**
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
 */async function xw(t,e){return Bn(t,"POST","/v1/accounts:delete",e)}async function yg(t,e){return Bn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lw(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=cu(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ui(Lc(s.auth_time)),issuedAtTime:ui(Lc(s.iat)),expirationTime:ui(Lc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Lc(t){return Number(t)*1e3}function cu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Po("JWT malformed, contained fewer than 3 sections"),null;try{const s=tg(n);return s?JSON.parse(s):(Po("Failed to decode base64 JWT payload"),null)}catch(s){return Po("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Gf(t){const e=cu(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ai(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gn&&Mw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Mw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Fw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ai(t,yg(n,{idToken:r}));re(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?vg(i.providerUserInfo):[],c=Bw(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new fl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Uw(t){const e=Je(t);await Zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Bw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function vg(t){return t.map(e=>{var{providerId:n}=e,r=iu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jw(t,e){const n=await gg(t,{},async()=>{const r=Bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=_g(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",mg.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $w(t,e){return Bn(t,"POST","/v2/accounts:revokeToken",mr(t,e))}/**
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
 */class cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=Gf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await jw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new cs;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cs,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
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
 */function Gn(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=iu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new fl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ai(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Lw(this,e)}reload(){return Uw(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bn(this.auth.app))return Promise.reject(cr(this.auth));const e=await this.getIdToken();return await Ai(this,xw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,q=(u=n.createdAt)!==null&&u!==void 0?u:void 0,F=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:B,emailVerified:j,isAnonymous:X,providerData:ne,stsTokenManager:R}=n;re(B&&R,e,"internal-error");const v=cs.fromJSON(this.name,R);re(typeof B=="string",e,"internal-error"),Gn(p,e.name),Gn(m,e.name),re(typeof j=="boolean",e,"internal-error"),re(typeof X=="boolean",e,"internal-error"),Gn(y,e.name),Gn(S,e.name),Gn(k,e.name),Gn(O,e.name),Gn(q,e.name),Gn(F,e.name);const _=new Pn({uid:B,auth:e,email:m,emailVerified:j,displayName:p,isAnonymous:X,photoURL:S,phoneNumber:y,tenantId:k,stsTokenManager:v,createdAt:q,lastLoginAt:F});return ne&&Array.isArray(ne)&&(_.providerData=ne.map(I=>Object.assign({},I))),O&&(_._redirectEventId=O),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new cs;s.updateFromServerResponse(n);const i=new Pn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Zo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?vg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new cs;c.updateFromIdToken(r);const l=new Pn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new fl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const zf=new Map;function Cn(t){Ln(t instanceof Function,"Expected a class definition");let e=zf.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zf.set(t,e),e)}/**
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
 */class Eg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Eg.type="NONE";const Qf=Eg;/**
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
 */function Co(t,e,n){return`firebase:${t}:${e}:${n}`}class ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Co(this.userKey,s.apiKey,i),this.fullPersistenceKey=Co("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ls(Cn(Qf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Cn(Qf);const o=Co(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){const p=Pn._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ls(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ls(i,e,r))}}/**
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
 */function Yf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ag(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bg(e))return"Blackberry";if(Sg(e))return"Webos";if(Ig(e))return"Safari";if((e.includes("chrome/")||wg(e))&&!e.includes("edge/"))return"Chrome";if(Rg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Tg(t=yt()){return/firefox\//i.test(t)}function Ig(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wg(t=yt()){return/crios\//i.test(t)}function Ag(t=yt()){return/iemobile/i.test(t)}function Rg(t=yt()){return/android/i.test(t)}function bg(t=yt()){return/blackberry/i.test(t)}function Sg(t=yt()){return/webos/i.test(t)}function lu(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qw(t=yt()){var e;return lu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hw(){return oI()&&document.documentMode===10}function Pg(t=yt()){return lu(t)||Rg(t)||Sg(t)||bg(t)||/windows phone/i.test(t)||Ag(t)}/**
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
 */function Cg(t,e=[]){let n;switch(t){case"Browser":n=Yf(yt());break;case"Worker":n=`${Yf(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${r}`}/**
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
 */class Ww{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Kw(t,e={}){return Bn(t,"GET","/v2/passwordPolicy",mr(t,e))}/**
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
 */const Gw=6;class zw{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Gw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Qw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jf(this),this.idTokenSubscription=new Jf(this),this.beforeStateQueue=new Ww(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ls.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yg(this,{idToken:e}),r=await Pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(bn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bn(this.app))return Promise.reject(cr(this));const n=e?Je(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bn(this.app)?Promise.reject(cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bn(this.app)?Promise.reject(cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Kw(this),n=new zw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ui("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $w(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await ls.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Rw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function As(t){return Je(t)}class Jf{constructor(e){this.auth=e,this.observer=null,this.addObserver=pI(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Yw(t){xa=t}function kg(t){return xa.loadJS(t)}function Jw(){return xa.recaptchaEnterpriseScript}function Xw(){return xa.gapiScript}function Zw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const eA="recaptcha-enterprise",tA="NO_RECAPTCHA";class nA{constructor(e){this.type=eA,this.auth=As(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Vw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new Dw(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Kf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(tA)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Kf(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Jw();l.length!==0&&(l+=c),kg(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Xf(t,e,n,r=!1){const s=new nA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function dl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Xf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Xf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function rA(t,e){const n=Da(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Qo(i,e??{}))return s;Qt(s,"already-initialized")}return n.initialize({options:e})}function sA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iA(t,e,n){const r=As(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Og(e),{host:o,port:c}=oA(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),aA()}function Og(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oA(t){const e=Og(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Zf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Zf(o)}}}function Zf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class uu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}async function cA(t,e){return Bn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lA(t,e){return Va(t,"POST","/v1/accounts:signInWithPassword",mr(t,e))}async function uA(t,e){return Bn(t,"POST","/v1/accounts:sendOobCode",mr(t,e))}async function hA(t,e){return uA(t,e)}/**
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
 */async function fA(t,e){return Va(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}async function dA(t,e){return Va(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}/**
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
 */class Ri extends uu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ri(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ri(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dl(e,n,"signInWithPassword",lA);case"emailLink":return fA(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dl(e,r,"signUpPassword",cA);case"emailLink":return dA(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function us(t,e){return Va(t,"POST","/v1/accounts:signInWithIdp",mr(t,e))}/**
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
 */const pA="http://localhost";class Lr extends uu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=iu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Lr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,us(e,n)}buildRequest(){const e={requestUri:pA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bi(n)}return e}}/**
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
 */function mA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gA(t){const e=Ys(Js(t)).link,n=e?Ys(Js(e)).deep_link_id:null,r=Ys(Js(t)).deep_link_id;return(r?Ys(Js(r)).link:null)||r||n||e||t}class La{constructor(e){var n,r,s,i,o,c;const l=Ys(Js(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=mA((s=l.mode)!==null&&s!==void 0?s:null);re(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=gA(e);try{return new La(n)}catch{return null}}}/**
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
 */class Rs{constructor(){this.providerId=Rs.PROVIDER_ID}static credential(e,n){return Ri._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=La.parseLink(n);return re(r,"argument-error"),Ri._fromEmailAndCode(e,r.code,r.tenantId)}}Rs.PROVIDER_ID="password";Rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ng{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $i extends Ng{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class er extends $i{constructor(){super("facebook.com")}static credential(e){return Lr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
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
 */class tr extends $i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Lr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";/**
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
 */class nr extends $i{constructor(){super("github.com")}static credential(e){return Lr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
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
 */class rr extends $i{constructor(){super("twitter.com")}static credential(e,n){return Lr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
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
 */class ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Pn._fromIdTokenResponse(e,r,s),o=ed(r);return new ps({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ed(r);return new ps({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ed(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ea extends gn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ea(e,n,r,s)}}function Dg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ea._fromErrorAndOperation(t,i,e,r):i})}async function _A(t,e,n=!1){const r=await Ai(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ps._forOperation(t,"link",r)}/**
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
 */async function yA(t,e,n=!1){const{auth:r}=t;if(bn(r.app))return Promise.reject(cr(r));const s="reauthenticate";try{const i=await Ai(t,Dg(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=cu(i.idToken);re(o,r,"internal-error");const{sub:c}=o;return re(t.uid===c,r,"user-mismatch"),ps._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),i}}/**
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
 */async function Vg(t,e,n=!1){if(bn(t.app))return Promise.reject(cr(t));const r="signIn",s=await Dg(t,r,e),i=await ps._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function vA(t,e){return Vg(As(t),e)}/**
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
 */function EA(t,e,n){var r;re(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),re(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(re(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(re(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function TA(t,e,n){const r=As(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function i(o,c){re(c.handleCodeInApp,r,"argument-error"),c&&EA(r,o,c)}i(s,n),await dl(r,s,"getOobCode",hA)}function IA(t,e){const n=La.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function wA(t,e,n){if(bn(t.app))return Promise.reject(cr(t));const r=Je(t),s=Rs.credentialWithLink(e,n||Xo());return re(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),vA(r,s)}function AA(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function RA(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function bA(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function SA(t){return Je(t).signOut()}const ta="__sak";/**
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
 */class xg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ta,"1"),this.storage.removeItem(ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const PA=1e3,CA=10;class Lg extends xg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Hw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,CA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},PA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lg.type="LOCAL";const kA=Lg;/**
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
 */class Mg extends xg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Mg.type="SESSION";const Fg=Mg;/**
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
 */function OA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ma(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await OA(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ma.receivers=[];/**
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
 */function hu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class NA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=hu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function un(){return window}function DA(t){un().location.href=t}/**
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
 */function Ug(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function VA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LA(){return Ug()?self:null}/**
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
 */const Bg="firebaseLocalStorageDb",MA=1,na="firebaseLocalStorage",jg="fbase_key";class qi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fa(t,e){return t.transaction([na],e?"readwrite":"readonly").objectStore(na)}function FA(){const t=indexedDB.deleteDatabase(Bg);return new qi(t).toPromise()}function pl(){const t=indexedDB.open(Bg,MA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(na,{keyPath:jg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(na)?e(r):(r.close(),await FA(),e(await pl()))})})}async function td(t,e,n){const r=Fa(t,!0).put({[jg]:e,value:n});return new qi(r).toPromise()}async function UA(t,e){const n=Fa(t,!1).get(e),r=await new qi(n).toPromise();return r===void 0?null:r.value}function nd(t,e){const n=Fa(t,!0).delete(e);return new qi(n).toPromise()}const BA=800,jA=3;class $g{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ug()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ma._getInstance(LA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await VA(),!this.activeServiceWorker)return;this.sender=new NA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pl();return await td(e,ta,"1"),await nd(e,ta),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>td(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Fa(s,!1).getAll();return new qi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$g.type="LOCAL";const $A=$g;new ji(3e4,6e4);/**
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
 */function qA(t,e){return e?Cn(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class fu extends uu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function HA(t){return Vg(t.auth,new fu(t),t.bypassAuthState)}function WA(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),yA(n,new fu(t),t.bypassAuthState)}async function KA(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),_A(n,new fu(t),t.bypassAuthState)}/**
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
 */class qg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HA;case"linkViaPopup":case"linkViaRedirect":return KA;case"reauthViaPopup":case"reauthViaRedirect":return WA;default:Qt(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const GA=new ji(2e3,1e4);class rs extends qg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,GA.get())};e()}}rs.currentPopupAction=null;/**
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
 */const zA="pendingRedirect",ko=new Map;class QA extends qg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ko.get(this.auth._key());if(!e){try{const r=await YA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ko.set(this.auth._key(),e)}return this.bypassAuthState||ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YA(t,e){const n=ZA(e),r=XA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function JA(t,e){ko.set(t._key(),e)}function XA(t){return Cn(t._redirectPersistence)}function ZA(t){return Co(zA,t.config.apiKey,t.name)}async function eR(t,e,n=!1){if(bn(t.app))return Promise.reject(cr(t));const r=As(t),s=qA(r,e),o=await new QA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const tR=10*60*1e3;class nR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Hg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tR&&this.cachedEventUids.clear(),this.cachedEventUids.has(rd(e))}saveEventToCache(e){this.cachedEventUids.add(rd(e)),this.lastProcessedEventTime=Date.now()}}function rd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hg(t);default:return!1}}/**
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
 */async function sR(t,e={}){return Bn(t,"GET","/v1/projects",e)}/**
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
 */const iR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oR=/^https?/;async function aR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sR(t);for(const n of e)try{if(cR(n))return}catch{}Qt(t,"unauthorized-domain")}function cR(t){const e=Xo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!oR.test(n))return!1;if(iR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const lR=new ji(3e4,6e4);function sd(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uR(t){return new Promise((e,n)=>{var r,s,i;function o(){sd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sd(),n(ln(t,"network-request-failed"))},timeout:lR.get()})}if(!((s=(r=un().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=un().gapi)===null||i===void 0)&&i.load)o();else{const c=Zw("iframefcb");return un()[c]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},kg(`${Xw()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Oo=null,e})}let Oo=null;function hR(t){return Oo=Oo||uR(t),Oo}/**
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
 */const fR=new ji(5e3,15e3),dR="__/auth/iframe",pR="emulator/auth/iframe",mR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _R(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?au(e,pR):`https://${t.config.authDomain}/${dR}`,r={apiKey:e.apiKey,appName:t.name,v:$r},s=gR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Bi(r).slice(1)}`}async function yR(t){const e=await hR(t),n=un().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:_R(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),c=un().setTimeout(()=>{i(o)},fR.get());function l(){un().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const vR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ER=500,TR=600,IR="_blank",wR="http://localhost";class id{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AR(t,e,n,r=ER,s=TR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},vR),{width:r.toString(),height:s.toString(),top:i,left:o}),u=yt().toLowerCase();n&&(c=wg(u)?IR:n),Tg(u)&&(e=e||wR,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[y,S])=>`${m}${y}=${S},`,"");if(qw(u)&&c!=="_self")return RR(e||"",c),new id(null);const p=window.open(e||"",c,f);re(p,t,"popup-blocked");try{p.focus()}catch{}return new id(p)}function RR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bR="__/auth/handler",SR="emulator/auth/handler",PR=encodeURIComponent("fac");async function od(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$r,eventId:s};if(e instanceof Ng){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof $i){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${PR}=${encodeURIComponent(l)}`:"";return`${CR(t)}?${Bi(c).slice(1)}${u}`}function CR({config:t}){return t.emulator?au(t,SR):`https://${t.authDomain}/${bR}`}/**
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
 */const Mc="webStorageSupport";class kR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fg,this._completeRedirectFn=eR,this._overrideRedirectResult=JA}async _openPopup(e,n,r,s){var i;Ln((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await od(e,n,r,Xo(),s);return AR(e,o,hu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await od(e,n,r,Xo(),s);return DA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ln(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yR(e),r=new nR(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mc,{type:Mc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Mc];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pg()||Ig()||lu()}}const OR=kR;var ad="@firebase/auth",cd="1.7.9";/**
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
 */class NR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function DR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VR(t){xr(new hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cg(t)},u=new Qw(r,s,i,l);return sA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xr(new hr("auth-internal",e=>{const n=As(e.getProvider("auth").getImmediate());return(r=>new NR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(ad,cd,DR(t)),cn(ad,cd,"esm2017")}/**
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
 */const xR=5*60,LR=ig("authIdTokenMaxAge")||xR;let ld=null;const MR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>LR)return;const s=n==null?void 0:n.token;ld!==s&&(ld=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function FR(t=su()){const e=Da(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rA(t,{popupRedirectResolver:OR,persistence:[$A,kA,Fg]}),r=ig("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=MR(i.toString());RA(n,o,()=>o(n.currentUser)),AA(n,c=>o(c))}}const s=ng("auth");return s&&iA(n,`http://${s}`),n}function UR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Yw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",UR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VR("Browser");var BR="firebase",jR="10.14.1";/**
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
 */cn(BR,jR,"app");var ud=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,Wg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,v){function _(){}_.prototype=v.prototype,R.D=v.prototype,R.prototype=new _,R.prototype.constructor=R,R.C=function(I,b,w){for(var T=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)T[Re-2]=arguments[Re];return v.prototype[b].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,v,_){_||(_=0);var I=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)I[b]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(b=0;16>b;++b)I[b]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=R.g[0],_=R.g[1],b=R.g[2];var w=R.g[3],T=v+(w^_&(b^w))+I[0]+3614090360&4294967295;v=_+(T<<7&4294967295|T>>>25),T=w+(b^v&(_^b))+I[1]+3905402710&4294967295,w=v+(T<<12&4294967295|T>>>20),T=b+(_^w&(v^_))+I[2]+606105819&4294967295,b=w+(T<<17&4294967295|T>>>15),T=_+(v^b&(w^v))+I[3]+3250441966&4294967295,_=b+(T<<22&4294967295|T>>>10),T=v+(w^_&(b^w))+I[4]+4118548399&4294967295,v=_+(T<<7&4294967295|T>>>25),T=w+(b^v&(_^b))+I[5]+1200080426&4294967295,w=v+(T<<12&4294967295|T>>>20),T=b+(_^w&(v^_))+I[6]+2821735955&4294967295,b=w+(T<<17&4294967295|T>>>15),T=_+(v^b&(w^v))+I[7]+4249261313&4294967295,_=b+(T<<22&4294967295|T>>>10),T=v+(w^_&(b^w))+I[8]+1770035416&4294967295,v=_+(T<<7&4294967295|T>>>25),T=w+(b^v&(_^b))+I[9]+2336552879&4294967295,w=v+(T<<12&4294967295|T>>>20),T=b+(_^w&(v^_))+I[10]+4294925233&4294967295,b=w+(T<<17&4294967295|T>>>15),T=_+(v^b&(w^v))+I[11]+2304563134&4294967295,_=b+(T<<22&4294967295|T>>>10),T=v+(w^_&(b^w))+I[12]+1804603682&4294967295,v=_+(T<<7&4294967295|T>>>25),T=w+(b^v&(_^b))+I[13]+4254626195&4294967295,w=v+(T<<12&4294967295|T>>>20),T=b+(_^w&(v^_))+I[14]+2792965006&4294967295,b=w+(T<<17&4294967295|T>>>15),T=_+(v^b&(w^v))+I[15]+1236535329&4294967295,_=b+(T<<22&4294967295|T>>>10),T=v+(b^w&(_^b))+I[1]+4129170786&4294967295,v=_+(T<<5&4294967295|T>>>27),T=w+(_^b&(v^_))+I[6]+3225465664&4294967295,w=v+(T<<9&4294967295|T>>>23),T=b+(v^_&(w^v))+I[11]+643717713&4294967295,b=w+(T<<14&4294967295|T>>>18),T=_+(w^v&(b^w))+I[0]+3921069994&4294967295,_=b+(T<<20&4294967295|T>>>12),T=v+(b^w&(_^b))+I[5]+3593408605&4294967295,v=_+(T<<5&4294967295|T>>>27),T=w+(_^b&(v^_))+I[10]+38016083&4294967295,w=v+(T<<9&4294967295|T>>>23),T=b+(v^_&(w^v))+I[15]+3634488961&4294967295,b=w+(T<<14&4294967295|T>>>18),T=_+(w^v&(b^w))+I[4]+3889429448&4294967295,_=b+(T<<20&4294967295|T>>>12),T=v+(b^w&(_^b))+I[9]+568446438&4294967295,v=_+(T<<5&4294967295|T>>>27),T=w+(_^b&(v^_))+I[14]+3275163606&4294967295,w=v+(T<<9&4294967295|T>>>23),T=b+(v^_&(w^v))+I[3]+4107603335&4294967295,b=w+(T<<14&4294967295|T>>>18),T=_+(w^v&(b^w))+I[8]+1163531501&4294967295,_=b+(T<<20&4294967295|T>>>12),T=v+(b^w&(_^b))+I[13]+2850285829&4294967295,v=_+(T<<5&4294967295|T>>>27),T=w+(_^b&(v^_))+I[2]+4243563512&4294967295,w=v+(T<<9&4294967295|T>>>23),T=b+(v^_&(w^v))+I[7]+1735328473&4294967295,b=w+(T<<14&4294967295|T>>>18),T=_+(w^v&(b^w))+I[12]+2368359562&4294967295,_=b+(T<<20&4294967295|T>>>12),T=v+(_^b^w)+I[5]+4294588738&4294967295,v=_+(T<<4&4294967295|T>>>28),T=w+(v^_^b)+I[8]+2272392833&4294967295,w=v+(T<<11&4294967295|T>>>21),T=b+(w^v^_)+I[11]+1839030562&4294967295,b=w+(T<<16&4294967295|T>>>16),T=_+(b^w^v)+I[14]+4259657740&4294967295,_=b+(T<<23&4294967295|T>>>9),T=v+(_^b^w)+I[1]+2763975236&4294967295,v=_+(T<<4&4294967295|T>>>28),T=w+(v^_^b)+I[4]+1272893353&4294967295,w=v+(T<<11&4294967295|T>>>21),T=b+(w^v^_)+I[7]+4139469664&4294967295,b=w+(T<<16&4294967295|T>>>16),T=_+(b^w^v)+I[10]+3200236656&4294967295,_=b+(T<<23&4294967295|T>>>9),T=v+(_^b^w)+I[13]+681279174&4294967295,v=_+(T<<4&4294967295|T>>>28),T=w+(v^_^b)+I[0]+3936430074&4294967295,w=v+(T<<11&4294967295|T>>>21),T=b+(w^v^_)+I[3]+3572445317&4294967295,b=w+(T<<16&4294967295|T>>>16),T=_+(b^w^v)+I[6]+76029189&4294967295,_=b+(T<<23&4294967295|T>>>9),T=v+(_^b^w)+I[9]+3654602809&4294967295,v=_+(T<<4&4294967295|T>>>28),T=w+(v^_^b)+I[12]+3873151461&4294967295,w=v+(T<<11&4294967295|T>>>21),T=b+(w^v^_)+I[15]+530742520&4294967295,b=w+(T<<16&4294967295|T>>>16),T=_+(b^w^v)+I[2]+3299628645&4294967295,_=b+(T<<23&4294967295|T>>>9),T=v+(b^(_|~w))+I[0]+4096336452&4294967295,v=_+(T<<6&4294967295|T>>>26),T=w+(_^(v|~b))+I[7]+1126891415&4294967295,w=v+(T<<10&4294967295|T>>>22),T=b+(v^(w|~_))+I[14]+2878612391&4294967295,b=w+(T<<15&4294967295|T>>>17),T=_+(w^(b|~v))+I[5]+4237533241&4294967295,_=b+(T<<21&4294967295|T>>>11),T=v+(b^(_|~w))+I[12]+1700485571&4294967295,v=_+(T<<6&4294967295|T>>>26),T=w+(_^(v|~b))+I[3]+2399980690&4294967295,w=v+(T<<10&4294967295|T>>>22),T=b+(v^(w|~_))+I[10]+4293915773&4294967295,b=w+(T<<15&4294967295|T>>>17),T=_+(w^(b|~v))+I[1]+2240044497&4294967295,_=b+(T<<21&4294967295|T>>>11),T=v+(b^(_|~w))+I[8]+1873313359&4294967295,v=_+(T<<6&4294967295|T>>>26),T=w+(_^(v|~b))+I[15]+4264355552&4294967295,w=v+(T<<10&4294967295|T>>>22),T=b+(v^(w|~_))+I[6]+2734768916&4294967295,b=w+(T<<15&4294967295|T>>>17),T=_+(w^(b|~v))+I[13]+1309151649&4294967295,_=b+(T<<21&4294967295|T>>>11),T=v+(b^(_|~w))+I[4]+4149444226&4294967295,v=_+(T<<6&4294967295|T>>>26),T=w+(_^(v|~b))+I[11]+3174756917&4294967295,w=v+(T<<10&4294967295|T>>>22),T=b+(v^(w|~_))+I[2]+718787259&4294967295,b=w+(T<<15&4294967295|T>>>17),T=_+(w^(b|~v))+I[9]+3951481745&4294967295,R.g[0]=R.g[0]+v&4294967295,R.g[1]=R.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,R.g[2]=R.g[2]+b&4294967295,R.g[3]=R.g[3]+w&4294967295}r.prototype.u=function(R,v){v===void 0&&(v=R.length);for(var _=v-this.blockSize,I=this.B,b=this.h,w=0;w<v;){if(b==0)for(;w<=_;)s(this,R,w),w+=this.blockSize;if(typeof R=="string"){for(;w<v;)if(I[b++]=R.charCodeAt(w++),b==this.blockSize){s(this,I),b=0;break}}else for(;w<v;)if(I[b++]=R[w++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var v=1;v<R.length-8;++v)R[v]=0;var _=8*this.o;for(v=R.length-8;v<R.length;++v)R[v]=_&255,_/=256;for(this.u(R),R=Array(16),v=_=0;4>v;++v)for(var I=0;32>I;I+=8)R[_++]=this.g[v]>>>I&255;return R};function i(R,v){var _=c;return Object.prototype.hasOwnProperty.call(_,R)?_[R]:_[R]=v(R)}function o(R,v){this.h=v;for(var _=[],I=!0,b=R.length-1;0<=b;b--){var w=R[b]|0;I&&w==v||(_[b]=w,I=!1)}this.g=_}var c={};function l(R){return-128<=R&&128>R?i(R,function(v){return new o([v|0],0>v?-1:0)}):new o([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return O(u(-R));for(var v=[],_=1,I=0;R>=_;I++)v[I]=R/_|0,_*=4294967296;return new o(v,0)}function f(R,v){if(R.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R.charAt(0)=="-")return O(f(R.substring(1),v));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(v,8)),I=p,b=0;b<R.length;b+=8){var w=Math.min(8,R.length-b),T=parseInt(R.substring(b,b+w),v);8>w?(w=u(Math.pow(v,w)),I=I.j(w).add(u(T))):(I=I.j(_),I=I.add(u(T)))}return I}var p=l(0),m=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-O(this).m();for(var R=0,v=1,_=0;_<this.g.length;_++){var I=this.i(_);R+=(0<=I?I:4294967296+I)*v,v*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(S(this))return"0";if(k(this))return"-"+O(this).toString(R);for(var v=u(Math.pow(R,6)),_=this,I="";;){var b=j(_,v).g;_=q(_,b.j(v));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(R);if(_=b,S(_))return w+I;for(;6>w.length;)w="0"+w;I=w+I}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function S(R){if(R.h!=0)return!1;for(var v=0;v<R.g.length;v++)if(R.g[v]!=0)return!1;return!0}function k(R){return R.h==-1}t.l=function(R){return R=q(this,R),k(R)?-1:S(R)?0:1};function O(R){for(var v=R.g.length,_=[],I=0;I<v;I++)_[I]=~R.g[I];return new o(_,~R.h).add(m)}t.abs=function(){return k(this)?O(this):this},t.add=function(R){for(var v=Math.max(this.g.length,R.g.length),_=[],I=0,b=0;b<=v;b++){var w=I+(this.i(b)&65535)+(R.i(b)&65535),T=(w>>>16)+(this.i(b)>>>16)+(R.i(b)>>>16);I=T>>>16,w&=65535,T&=65535,_[b]=T<<16|w}return new o(_,_[_.length-1]&-2147483648?-1:0)};function q(R,v){return R.add(O(v))}t.j=function(R){if(S(this)||S(R))return p;if(k(this))return k(R)?O(this).j(O(R)):O(O(this).j(R));if(k(R))return O(this.j(O(R)));if(0>this.l(y)&&0>R.l(y))return u(this.m()*R.m());for(var v=this.g.length+R.g.length,_=[],I=0;I<2*v;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<R.g.length;b++){var w=this.i(I)>>>16,T=this.i(I)&65535,Re=R.i(b)>>>16,qe=R.i(b)&65535;_[2*I+2*b]+=T*qe,F(_,2*I+2*b),_[2*I+2*b+1]+=w*qe,F(_,2*I+2*b+1),_[2*I+2*b+1]+=T*Re,F(_,2*I+2*b+1),_[2*I+2*b+2]+=w*Re,F(_,2*I+2*b+2)}for(I=0;I<v;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=v;I<2*v;I++)_[I]=0;return new o(_,0)};function F(R,v){for(;(R[v]&65535)!=R[v];)R[v+1]+=R[v]>>>16,R[v]&=65535,v++}function B(R,v){this.g=R,this.h=v}function j(R,v){if(S(v))throw Error("division by zero");if(S(R))return new B(p,p);if(k(R))return v=j(O(R),v),new B(O(v.g),O(v.h));if(k(v))return v=j(R,O(v)),new B(O(v.g),v.h);if(30<R.g.length){if(k(R)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var _=m,I=v;0>=I.l(R);)_=X(_),I=X(I);var b=ne(_,1),w=ne(I,1);for(I=ne(I,2),_=ne(_,2);!S(I);){var T=w.add(I);0>=T.l(R)&&(b=b.add(_),w=T),I=ne(I,1),_=ne(_,1)}return v=q(R,b.j(v)),new B(b,v)}for(b=p;0<=R.l(v);){for(_=Math.max(1,Math.floor(R.m()/v.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),w=u(_),T=w.j(v);k(T)||0<T.l(R);)_-=I,w=u(_),T=w.j(v);S(w)&&(w=m),b=b.add(w),R=q(R,T)}return new B(b,R)}t.A=function(R){return j(this,R).h},t.and=function(R){for(var v=Math.max(this.g.length,R.g.length),_=[],I=0;I<v;I++)_[I]=this.i(I)&R.i(I);return new o(_,this.h&R.h)},t.or=function(R){for(var v=Math.max(this.g.length,R.g.length),_=[],I=0;I<v;I++)_[I]=this.i(I)|R.i(I);return new o(_,this.h|R.h)},t.xor=function(R){for(var v=Math.max(this.g.length,R.g.length),_=[],I=0;I<v;I++)_[I]=this.i(I)^R.i(I);return new o(_,this.h^R.h)};function X(R){for(var v=R.g.length+1,_=[],I=0;I<v;I++)_[I]=R.i(I)<<1|R.i(I-1)>>>31;return new o(_,R.h)}function ne(R,v){var _=v>>5;v%=32;for(var I=R.g.length-_,b=[],w=0;w<I;w++)b[w]=0<v?R.i(w+_)>>>v|R.i(w+_+1)<<32-v:R.i(w+_);return new o(b,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Wg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Dr=o}).apply(typeof ud<"u"?ud:typeof self<"u"?self:typeof window<"u"?window:{});var Eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kg,Xs,Gg,No,ml,zg,Qg,Yg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Eo=="object"&&Eo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in d))break e;d=d[C]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,C={next:function(){if(!g&&d<a.length){var N=d++;return{value:h(N,a[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function y(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,C,N){for(var W=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)W[ke-2]=arguments[ke];return h.prototype[C].apply(g,W)}}function k(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function O(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const C=a.length||0,N=g.length||0;a.length=C+N;for(let W=0;W<N;W++)a[C+W]=g[W]}else a.push(g)}}class q{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function F(a){return/^[\s\xa0]*$/.test(a)}function B(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function j(a){return j[" "](a),a}j[" "]=function(){};var X=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function ne(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function R(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function v(a){const h={};for(const d in a)h[d]=a[d];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)a[d]=g[d];for(let N=0;N<_.length;N++)d=_[N],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function b(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function w(a){c.setTimeout(()=>{throw a},0)}function T(){var a=kt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Re{constructor(){this.h=this.g=null}add(h,d){const g=qe.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var qe=new q(()=>new Pe,a=>a.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let le,ge=!1,kt=new Re,qt=()=>{const a=c.Promise.resolve(void 0);le=()=>{a.then(Mt)}};var Mt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){w(d)}var h=qe;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ge=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var jn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,h),c.removeEventListener("test",d,h)}catch{}return a}();function Ot(a,h){if(Fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(X){e:{try{j(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:St[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ot.aa.h.call(this)}}S(Ot,Fe);var St={2:"touch",3:"pen",4:"mouse"};Ot.prototype.h=function(){Ot.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),Y=0;function z(a,h,d,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=C,this.key=++Y,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function me(a){this.src=a,this.g={},this.h=0}me.prototype.add=function(a,h,d,g,C){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var W=A(a,h,g,C);return-1<W?(h=a[W],d||(h.fa=!1)):(h=new z(h,this.src,N,!!g,C),h.fa=d,a.push(h)),h};function E(a,h){var d=h.type;if(d in a.g){var g=a.g[d],C=Array.prototype.indexOf.call(g,h,void 0),N;(N=0<=C)&&Array.prototype.splice.call(g,C,1),N&&(ee(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function A(a,h,d,g){for(var C=0;C<a.length;++C){var N=a[C];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==g)return C}return-1}var P="closure_lm_"+(1e6*Math.random()|0),D={};function L(a,h,d,g,C){if(Array.isArray(h)){for(var N=0;N<h.length;N++)L(a,h[N],d,g,C);return null}return d=ae(d),a&&a[V]?a.K(h,d,u(g)?!!g.capture:!1,C):x(a,h,d,!1,g,C)}function x(a,h,d,g,C,N){if(!h)throw Error("Invalid event type");var W=u(C)?!!C.capture:!!C,ke=Q(a);if(ke||(a[P]=ke=new me(a)),d=ke.add(h,d,g,W,N),d.proxy)return d;if(g=G(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)jn||(C=W),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(U(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function a(d){return h.call(a.src,a.listener,d)}const h=ie;return a}function K(a,h,d,g,C){if(Array.isArray(h))for(var N=0;N<h.length;N++)K(a,h[N],d,g,C);else g=u(g)?!!g.capture:!!g,d=ae(d),a&&a[V]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],d=A(N,d,g,C),-1<d&&(ee(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=Q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=A(h,d,g,C)),(d=-1<a?h[a]:null)&&H(d))}function H(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[V])E(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(U(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Q(h))?(E(d,a),d.h==0&&(d.src=null,h[P]=null)):ee(a)}}}function U(a){return a in D?D[a]:D[a]="on"+a}function ie(a,h){if(a.da)a=!0;else{h=new Ot(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&H(a),a=d.call(g,h)}return a}function Q(a){return a=a[P],a instanceof me?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function ce(){Me.call(this),this.i=new me(this),this.M=this,this.F=null}S(ce,Me),ce.prototype[V]=!0,ce.prototype.removeEventListener=function(a,h,d,g){K(this,a,h,d,g)};function pe(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Fe(h,a);else if(h instanceof Fe)h.target=h.target||a;else{var C=h;h=new Fe(g,a),I(h,C)}if(C=!0,d)for(var N=d.length-1;0<=N;N--){var W=h.g=d[N];C=we(W,g,!0,h)&&C}if(W=h.g=a,C=we(W,g,!0,h)&&C,C=we(W,g,!1,h)&&C,d)for(N=0;N<d.length;N++)W=h.g=d[N],C=we(W,g,!1,h)&&C}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)ee(d[g]);delete a.g[h],a.h--}}this.F=null},ce.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},ce.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function we(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,N=0;N<h.length;++N){var W=h[N];if(W&&!W.da&&W.capture==d){var ke=W.listener,nt=W.ha||W.src;W.fa&&E(a.i,W),C=ke.call(nt,g)!==!1&&C}}return C&&!g.defaultPrevented}function Ue(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function We(a){a.g=Ue(()=>{a.g=null,a.i&&(a.i=!1,We(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ft extends Me{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:We(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function at(a){Me.call(this),this.h=a,this.g={}}S(at,Me);var $n=[];function Cs(a){ne(a.g,function(h,d){this.g.hasOwnProperty(d)&&H(h)},a),a.g={}}at.prototype.N=function(){at.aa.N.call(this),Cs(this)},at.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tt=c.JSON.stringify,Ut=c.JSON.parse,Zi=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Wr(){}Wr.prototype.h=null;function sh(a){return a.h||(a.h=a.i())}function ih(){}var ks={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sc(){Fe.call(this,"d")}S(sc,Fe);function ic(){Fe.call(this,"c")}S(ic,Fe);var yr={},oh=null;function eo(){return oh=oh||new ce}yr.La="serverreachability";function ah(a){Fe.call(this,yr.La,a)}S(ah,Fe);function Os(a){const h=eo();pe(h,new ah(h))}yr.STAT_EVENT="statevent";function ch(a,h){Fe.call(this,yr.STAT_EVENT,a),this.stat=h}S(ch,Fe);function vt(a){const h=eo();pe(h,new ch(h,a))}yr.Ma="timingevent";function lh(a,h){Fe.call(this,yr.Ma,a),this.size=h}S(lh,Fe);function Ns(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function Ds(){this.g=!0}Ds.prototype.xa=function(){this.g=!1};function Dy(a,h,d,g,C,N){a.info(function(){if(a.g)if(N)for(var W="",ke=N.split("&"),nt=0;nt<ke.length;nt++){var Te=ke[nt].split("=");if(1<Te.length){var ct=Te[0];Te=Te[1];var lt=ct.split("_");W=2<=lt.length&&lt[1]=="type"?W+(ct+"="+Te+"&"):W+(ct+"=redacted&")}}else W=null;else W=N;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+d+`
`+W})}function Vy(a,h,d,g,C,N,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+d+`
`+N+" "+W})}function Kr(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Ly(a,d)+(g?" "+g:"")})}function xy(a,h){a.info(function(){return"TIMEOUT: "+h})}Ds.prototype.info=function(){};function Ly(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var W=1;W<C.length;W++)C[W]=""}}}}return tt(d)}catch{return h}}var to={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},uh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},oc;function no(){}S(no,Wr),no.prototype.g=function(){return new XMLHttpRequest},no.prototype.i=function(){return{}},oc=new no;function qn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new at(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new hh}function hh(){this.i=null,this.g="",this.h=!1}var fh={},ac={};function cc(a,h,d){a.L=1,a.v=oo(yn(h)),a.m=d,a.P=!0,dh(a,null)}function dh(a,h){a.F=Date.now(),ro(a),a.A=yn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Sh(d.i,"t",g),a.C=0,d=a.j.J,a.h=new hh,a.g=Wh(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Ft(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&($n[0]=C.toString()),C=$n);for(var N=0;N<C.length;N++){var W=L(d,C[N],g||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Os(),Dy(a.i,a.u,a.A,a.l,a.R,a.m)}qn.prototype.ca=function(a){a=a.target;const h=this.M;h&&vn(a)==3?h.j():this.Y(a)},qn.prototype.Y=function(a){try{if(a==this.g)e:{const lt=vn(this.g);var h=this.g.Ba();const Qr=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||Vh(this.g)))){this.J||lt!=4||h==7||(h==8||0>=Qr?Os(3):Os(2)),lc(this);var d=this.g.Z();this.X=d;t:if(ph(this)){var g=Vh(this.g);a="";var C=g.length,N=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vr(this),Vs(this);var W="";break t}this.h.i=new c.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(N&&h==C-1)});g.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,Vy(this.i,this.u,this.A,this.l,this.R,lt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,nt=this.g;if((ke=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(ke)){var Te=ke;break t}}Te=null}if(d=Te)Kr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uc(this,d);else{this.o=!1,this.s=3,vt(12),vr(this),Vs(this);break e}}if(this.P){d=!0;let Ht;for(;!this.J&&this.C<W.length;)if(Ht=My(this,W),Ht==ac){lt==4&&(this.s=4,vt(14),d=!1),Kr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==fh){this.s=4,vt(15),Kr(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else Kr(this.i,this.l,Ht,null),uc(this,Ht);if(ph(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||W.length!=0||this.h.h||(this.s=1,vt(16),d=!1),this.o=this.o&&d,!d)Kr(this.i,this.l,W,"[Invalid Chunked Response]"),vr(this),Vs(this);else if(0<W.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),gc(ct),ct.M=!0,vt(11))}}else Kr(this.i,this.l,W,null),uc(this,W);lt==4&&vr(this),this.o&&!this.J&&(lt==4?jh(this.j,this):(this.o=!1,ro(this)))}else ev(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),vr(this),Vs(this)}}}catch{}finally{}};function ph(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function My(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?ac:(d=Number(h.substring(d,g)),isNaN(d)?fh:(g+=1,g+d>h.length?ac:(h=h.slice(g,g+d),a.C=g+d,h)))}qn.prototype.cancel=function(){this.J=!0,vr(this)};function ro(a){a.S=Date.now()+a.I,mh(a,a.I)}function mh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ns(m(a.ba,a),h)}function lc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(xy(this.i,this.A),this.L!=2&&(Os(),vt(17)),vr(this),this.s=2,Vs(this)):mh(this,this.S-a)};function Vs(a){a.j.G==0||a.J||jh(a.j,a)}function vr(a){lc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Cs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function uc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||hc(d.h,a))){if(!a.K&&hc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)fo(d),uo(d);else break e;mc(d),vt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ns(m(d.Za,d),6e3));if(1>=yh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Tr(d,11)}else if((a.K||d.g==a)&&fo(d),!F(h))for(C=d.Da.g.parse(h),h=0;h<C.length;h++){let Te=C[h];if(d.T=Te[0],Te=Te[1],d.G==2)if(Te[0]=="c"){d.K=Te[1],d.ia=Te[2];const ct=Te[3];ct!=null&&(d.la=ct,d.j.info("VER="+d.la));const lt=Te[4];lt!=null&&(d.Aa=lt,d.j.info("SVER="+d.Aa));const Qr=Te[5];Qr!=null&&typeof Qr=="number"&&0<Qr&&(g=1.5*Qr,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ht=a.g;if(Ht){const mo=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mo){var N=g.h;N.g||mo.indexOf("spdy")==-1&&mo.indexOf("quic")==-1&&mo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(fc(N,N.h),N.h=null))}if(g.D){const _c=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;_c&&(g.ya=_c,De(g.I,g.D,_c))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var W=a;if(g.qa=Hh(g,g.J?g.ia:null,g.W),W.K){vh(g.h,W);var ke=W,nt=g.L;nt&&(ke.I=nt),ke.B&&(lc(ke),ro(ke)),g.g=W}else Uh(g);0<d.i.length&&ho(d)}else Te[0]!="stop"&&Te[0]!="close"||Tr(d,7);else d.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?Tr(d,7):pc(d):Te[0]!="noop"&&d.l&&d.l.ta(Te),d.v=0)}}Os(4)}catch{}}var Fy=class{constructor(a,h){this.g=a,this.map=h}};function gh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _h(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function yh(a){return a.h?1:a.g?a.g.size:0}function hc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function fc(a,h){a.g?a.g.add(h):a.h=h}function vh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}gh.prototype.cancel=function(){if(this.i=Eh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Eh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return k(a.i)}function Uy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function By(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function Th(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=By(a),g=Uy(a),C=g.length,N=0;N<C;N++)h.call(void 0,g[N],d&&d[N],a)}var Ih=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jy(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),C=null;if(0<=g){var N=a[d].substring(0,g);C=a[d].substring(g+1)}else N=a[d];h(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Er(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Er){this.h=a.h,so(this,a.j),this.o=a.o,this.g=a.g,io(this,a.s),this.l=a.l;var h=a.i,d=new Ms;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),wh(this,d),this.m=a.m}else a&&(h=String(a).match(Ih))?(this.h=!1,so(this,h[1]||"",!0),this.o=xs(h[2]||""),this.g=xs(h[3]||"",!0),io(this,h[4]),this.l=xs(h[5]||"",!0),wh(this,h[6]||"",!0),this.m=xs(h[7]||"")):(this.h=!1,this.i=new Ms(null,this.h))}Er.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ls(h,Ah,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ls(h,Ah,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ls(d,d.charAt(0)=="/"?Hy:qy,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ls(d,Ky)),a.join("")};function yn(a){return new Er(a)}function so(a,h,d){a.j=d?xs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function io(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function wh(a,h,d){h instanceof Ms?(a.i=h,Gy(a.i,a.h)):(d||(h=Ls(h,Wy)),a.i=new Ms(h,a.h))}function De(a,h,d){a.i.set(h,d)}function oo(a){return De(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function xs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ls(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,$y),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function $y(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ah=/[#\/\?@]/g,qy=/[#\?:]/g,Hy=/[#\?]/g,Wy=/[#\?@]/g,Ky=/#/g;function Ms(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&jy(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Ms.prototype,t.add=function(a,h){Hn(this),this.i=null,a=Gr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Rh(a,h){Hn(a),h=Gr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function bh(a,h){return Hn(a),h=Gr(a,h),a.g.has(h)}t.forEach=function(a,h){Hn(this),this.g.forEach(function(d,g){d.forEach(function(C){a.call(h,C,g,this)},this)},this)},t.na=function(){Hn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const C=a[g];for(let N=0;N<C.length;N++)d.push(h[g])}return d},t.V=function(a){Hn(this);let h=[];if(typeof a=="string")bh(this,a)&&(h=h.concat(this.g.get(Gr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Hn(this),this.i=null,a=Gr(this,a),bh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Sh(a,h,d){Rh(a,h),0<d.length&&(a.i=null,a.g.set(Gr(a,h),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const N=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var C=N;W[g]!==""&&(C+="="+encodeURIComponent(String(W[g]))),a.push(C)}}return this.i=a.join("&")};function Gr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Gy(a,h){h&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(d,g){var C=g.toLowerCase();g!=C&&(Rh(this,g),Sh(this,C,d))},a)),a.j=h}function zy(a,h){const d=new Ds;if(c.Image){const g=new Image;g.onload=y(Wn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=y(Wn,d,"TestLoadImage: error",!1,h,g),g.onabort=y(Wn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=y(Wn,d,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Qy(a,h){const d=new Ds,g=new AbortController,C=setTimeout(()=>{g.abort(),Wn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(C),N.ok?Wn(d,"TestPingServer: ok",!0,h):Wn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Wn(d,"TestPingServer: error",!1,h)})}function Wn(a,h,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function Yy(){this.g=new Zi}function Jy(a,h,d){const g=d||"";try{Th(a,function(C,N){let W=C;u(C)&&(W=tt(C)),h.push(g+N+"="+encodeURIComponent(W))})}catch(C){throw h.push(g+"type="+encodeURIComponent("_badmap")),C}}function ao(a){this.l=a.Ub||null,this.j=a.eb||!1}S(ao,Wr),ao.prototype.g=function(){return new co(this.l,this.j)},ao.prototype.i=function(a){return function(){return a}}({});function co(a,h){ce.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(co,ce),t=co.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Us(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Us(this)),this.g&&(this.readyState=3,Us(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ph(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ph(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Fs(this):Us(this),this.readyState==3&&Ph(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Fs(this))},t.Qa=function(a){this.g&&(this.response=a,Fs(this))},t.ga=function(){this.g&&Fs(this)};function Fs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Us(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Us(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(co.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ch(a){let h="";return ne(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function dc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Ch(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):De(a,h,d))}function je(a){ce.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(je,ce);var Xy=/^https?$/i,Zy=["POST","PUT"];t=je.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():oc.g(),this.v=this.o?sh(this.o):sh(oc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){kh(this,N);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())d.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Zy,h,void 0))||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,W]of d)this.g.setRequestHeader(N,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dh(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){kh(this,N)}};function kh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Oh(a),lo(a)}function Oh(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pe(this,"complete"),pe(this,"abort"),lo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),lo(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Nh(this):this.bb())},t.bb=function(){Nh(this)};function Nh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||vn(a)!=4||a.Z()!=2)){if(a.u&&vn(a)==4)Ue(a.Ea,0,a);else if(pe(a,"readystatechange"),vn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=W===0){var C=String(a.D).match(Ih)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),g=!Xy.test(C?C.toLowerCase():"")}d=g}if(d)pe(a,"complete"),pe(a,"success");else{a.m=6;try{var N=2<vn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Oh(a)}}finally{lo(a)}}}}function lo(a,h){if(a.g){Dh(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||pe(a,"ready");try{d.onreadystatechange=g}catch{}}}function Dh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function vn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ut(h)}};function Vh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ev(a){const h={};a=(a.g&&2<=vn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(F(a[g]))continue;var d=b(a[g]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[C]||[];h[C]=N,N.push(d)}R(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function xh(a){this.Aa=0,this.i=[],this.j=new Ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bs("baseRetryDelayMs",5e3,a),this.cb=Bs("retryDelaySeedMs",1e4,a),this.Wa=Bs("forwardChannelMaxRetries",2,a),this.wa=Bs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new gh(a&&a.concurrentRequestLimit),this.Da=new Yy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=xh.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){vt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Hh(this,null,this.W),ho(this)};function pc(a){if(Lh(a),a.G==3){var h=a.U++,d=yn(a.I);if(De(d,"SID",a.K),De(d,"RID",h),De(d,"TYPE","terminate"),js(a,d),h=new qn(a,a.j,h),h.L=2,h.v=oo(yn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=h.v,d=!0),d||(h.g=Wh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ro(h)}qh(a)}function uo(a){a.g&&(gc(a),a.g.cancel(),a.g=null)}function Lh(a){uo(a),a.u&&(c.clearTimeout(a.u),a.u=null),fo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function ho(a){if(!_h(a.h)&&!a.s){a.s=!0;var h=a.Ga;le||qt(),ge||(le(),ge=!0),kt.add(h,a),a.B=0}}function tv(a,h){return yh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ns(m(a.Ga,a,h),$h(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new qn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=v(N),I(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Fh(this,C,h),d=yn(this.I),De(d,"RID",a),De(d,"CVER",22),this.D&&De(d,"X-HTTP-Session-Id",this.D),js(this,d),N&&(this.O?h="headers="+encodeURIComponent(String(Ch(N)))+"&"+h:this.m&&dc(d,this.m,N)),fc(this.h,C),this.Ua&&De(d,"TYPE","init"),this.P?(De(d,"$req",h),De(d,"SID","null"),C.T=!0,cc(C,d,null)):cc(C,d,h),this.G=2}}else this.G==3&&(a?Mh(this,a):this.i.length==0||_h(this.h)||Mh(this))};function Mh(a,h){var d;h?d=h.l:d=a.U++;const g=yn(a.I);De(g,"SID",a.K),De(g,"RID",d),De(g,"AID",a.T),js(a,g),a.m&&a.o&&dc(g,a.m,a.o),d=new qn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Fh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),fc(a.h,d),cc(d,g,h)}function js(a,h){a.H&&ne(a.H,function(d,g){De(h,g,d)}),a.l&&Th({},function(d,g){De(h,g,d)})}function Fh(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let N=-1;for(;;){const W=["count="+d];N==-1?0<d?(N=C[0].g,W.push("ofs="+N)):N=0:W.push("ofs="+N);let ke=!0;for(let nt=0;nt<d;nt++){let Te=C[nt].g;const ct=C[nt].map;if(Te-=N,0>Te)N=Math.max(0,C[nt].g-100),ke=!1;else try{Jy(ct,W,"req"+Te+"_")}catch{g&&g(ct)}}if(ke){g=W.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function Uh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;le||qt(),ge||(le(),ge=!0),kt.add(h,a),a.v=0}}function mc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ns(m(a.Fa,a),$h(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Bh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ns(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),uo(this),Bh(this))};function gc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Bh(a){a.g=new qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=yn(a.qa);De(h,"RID","rpc"),De(h,"SID",a.K),De(h,"AID",a.T),De(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&De(h,"TO",a.ja),De(h,"TYPE","xmlhttp"),js(a,h),a.m&&a.o&&dc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=oo(yn(h)),d.m=null,d.P=!0,dh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,uo(this),mc(this),vt(19))};function fo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function jh(a,h){var d=null;if(a.g==h){fo(a),gc(a),a.g=null;var g=2}else if(hc(a.h,h))d=h.D,vh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;g=eo(),pe(g,new lh(g,d)),ho(a)}else Uh(a);else if(C=h.s,C==3||C==0&&0<h.X||!(g==1&&tv(a,h)||g==2&&mc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),C){case 1:Tr(a,5);break;case 4:Tr(a,10);break;case 3:Tr(a,6);break;default:Tr(a,2)}}}function $h(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Tr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const C=!g;g=new Er(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||so(g,"https"),oo(g),C?zy(g.toString(),d):Qy(g.toString(),d)}else vt(2);a.G=0,a.l&&a.l.sa(h),qh(a),Lh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function qh(a){if(a.G=0,a.ka=[],a.l){const h=Eh(a.h);(h.length!=0||a.i.length!=0)&&(O(a.ka,h),O(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Hh(a,h,d){var g=d instanceof Er?yn(d):new Er(d);if(g.g!="")h&&(g.g=h+"."+g.g),io(g,g.s);else{var C=c.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var N=new Er(null);g&&so(N,g),h&&(N.g=h),C&&io(N,C),d&&(N.l=d),g=N}return d=a.D,h=a.ya,d&&h&&De(g,d,h),De(g,"VER",a.la),js(a,g),g}function Wh(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new je(new ao({eb:d})):new je(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kh(){}t=Kh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function po(){}po.prototype.g=function(a,h){return new Nt(a,h)};function Nt(a,h){ce.call(this),this.g=new xh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!F(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!F(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new zr(this)}S(Nt,ce),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){pc(this.g)},Nt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=tt(a),a=d);h.i.push(new Fy(h.Ya++,a)),h.G==3&&ho(h)},Nt.prototype.N=function(){this.g.l=null,delete this.j,pc(this.g),delete this.g,Nt.aa.N.call(this)};function Gh(a){sc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(Gh,sc);function zh(){ic.call(this),this.status=1}S(zh,ic);function zr(a){this.g=a}S(zr,Kh),zr.prototype.ua=function(){pe(this.g,"a")},zr.prototype.ta=function(a){pe(this.g,new Gh(a))},zr.prototype.sa=function(a){pe(this.g,new zh)},zr.prototype.ra=function(){pe(this.g,"b")},po.prototype.createWebChannel=po.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,Yg=function(){return new po},Qg=function(){return eo()},zg=yr,ml={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},to.NO_ERROR=0,to.TIMEOUT=8,to.HTTP_ERROR=6,No=to,uh.COMPLETE="complete",Gg=uh,ih.EventType=ks,ks.OPEN="a",ks.CLOSE="b",ks.ERROR="c",ks.MESSAGE="d",ce.prototype.listen=ce.prototype.K,Xs=ih,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,Kg=je}).apply(typeof Eo<"u"?Eo:typeof self<"u"?self:typeof window<"u"?window:{});const hd="@firebase/firestore";/**
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
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let bs="10.14.0";/**
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
 */const Mr=new nu("@firebase/firestore");function Ws(){return Mr.logLevel}function Z(t,...e){if(Mr.logLevel<=ve.DEBUG){const n=e.map(du);Mr.debug(`Firestore (${bs}): ${t}`,...n)}}function Mn(t,...e){if(Mr.logLevel<=ve.ERROR){const n=e.map(du);Mr.error(`Firestore (${bs}): ${t}`,...n)}}function ms(t,...e){if(Mr.logLevel<=ve.WARN){const n=e.map(du);Mr.warn(`Firestore (${bs}): ${t}`,...n)}}function du(t){if(typeof t=="string")return t;try{/**
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
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${bs}) INTERNAL ASSERTION FAILED: `+t;throw Mn(e),new Error(e)}function Ce(t,e){t||ue()}function de(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class On{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Jg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $R{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class qR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HR{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new On;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new On,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new On)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new Jg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new ft(e)}}class WR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class KR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new WR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ce(this.o===void 0);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new GR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function QR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Xg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=QR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function gs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new Qe(0,0))}static max(){return new he(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class bi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ve extends bi{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const YR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends bi{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return YR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new J(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new J(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Ve.fromString(e))}static fromName(e){return new se(Ve.fromString(e).popFirst(5))}static empty(){return new se(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Ve(e.slice()))}}function JR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new fr(s,se.empty(),e)}function XR(t){return new fr(t.readTime,t.key,-1)}class fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fr(he.min(),se.empty(),-1)}static max(){return new fr(he.max(),se.empty(),-1)}}function ZR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const e0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class t0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Hi(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==e0)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function n0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Wi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class pu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}pu.oe=-1;function Ua(t){return t==null}function ra(t){return t===0&&1/t==-1/0}function r0(t){return typeof t=="number"&&Number.isInteger(t)&&!ra(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function fd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Be{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new To(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new To(this.root,e,this.comparator,!1)}getReverseIterator(){return new To(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new To(this.root,e,this.comparator,!0)}}class To{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dd(this.data.getIterator())}getIteratorFrom(e){return new dd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class dd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new it(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class e_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new e_("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const s0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dr(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=s0.exec(t);if(Ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
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
 */function mu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gu(t){const e=t.mapValue.fields.__previous_value__;return mu(e)?gu(e):e}function Si(t){const e=dr(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class i0{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class Pi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Pi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Pi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Io={mapValue:{}};function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mu(t)?4:a0(t)?9007199254740991:o0(t)?10:11:ue()}function pn(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Si(t).isEqual(Si(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=dr(s.timestampValue),c=dr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Fr(s.bytesValue).isEqual(Fr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),c=He(i.doubleValue);return o===c?ra(o)===ra(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return gs(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(fd(o)!==fd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!pn(o[l],c[l])))return!1;return!0}(t,e);default:return ue()}}function Ci(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function _s(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=He(i.integerValue||i.doubleValue),l=He(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return pd(t.timestampValue,e.timestampValue);case 4:return pd(Si(t),Si(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Fr(i),l=Fr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=Ie(c[u],l[u]);if(f!==0)return f}return Ie(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ie(He(i.latitude),He(o.latitude));return c!==0?c:Ie(He(i.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return md(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,f;const p=i.fields||{},m=o.fields||{},y=(c=p.value)===null||c===void 0?void 0:c.arrayValue,S=(l=m.value)===null||l===void 0?void 0:l.arrayValue,k=Ie(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:md(y,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Io.mapValue&&o===Io.mapValue)return 0;if(i===Io.mapValue)return 1;if(o===Io.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Ie(l[p],f[p]);if(m!==0)return m;const y=_s(c[l[p]],u[f[p]]);if(y!==0)return y}return Ie(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ue()}}function pd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=dr(t),r=dr(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function md(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=_s(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function ys(t){return gl(t)}function gl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=dr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=gl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${gl(n.fields[o])}`;return s+"}"}(t.mapValue):ue()}function gd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _l(t){return!!t&&"integerValue"in t}function _u(t){return!!t&&"arrayValue"in t}function _d(t){return!!t&&"nullValue"in t}function yd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Do(t){return!!t&&"mapValue"in t}function o0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function hi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=hi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function a0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Do(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hi(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=hi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Do(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Do(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){qr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ct(hi(this.value))}}function t_(t){const e=[];return qr(t.fields,(n,r)=>{const s=new st([n]);if(Do(r)){const i=t_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Vt(e)}/**
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
 */class pt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new pt(e,0,he.min(),he.min(),he.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,s){return new pt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new pt(e,2,n,he.min(),he.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,he.min(),he.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sa{constructor(e,n){this.position=e,this.inclusive=n}}function vd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=_s(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ed(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ia{constructor(e,n="asc"){this.field=e,this.dir=n}}function c0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class n_{}class Ge extends n_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new u0(e,n,r):n==="array-contains"?new d0(e,r):n==="in"?new p0(e,r):n==="not-in"?new m0(e,r):n==="array-contains-any"?new g0(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new h0(e,r):new f0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_s(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(_s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends n_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Yt(e,n)}matches(e){return r_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function r_(t){return t.op==="and"}function s_(t){return l0(t)&&r_(t)}function l0(t){for(const e of t.filters)if(e instanceof Yt)return!1;return!0}function yl(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(s_(t))return t.filters.map(e=>yl(e)).join(",");{const e=t.filters.map(n=>yl(n)).join(",");return`${t.op}(${e})`}}function i_(t,e){return t instanceof Ge?function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&pn(r.value,s.value)}(t,e):t instanceof Yt?function(r,s){return s instanceof Yt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&i_(o,s.filters[c]),!0):!1}(t,e):void ue()}function o_(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${ys(n.value)}`}(t):t instanceof Yt?function(n){return n.op.toString()+" {"+n.getFilters().map(o_).join(" ,")+"}"}(t):"Filter"}class u0 extends Ge{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class h0 extends Ge{constructor(e,n){super(e,"in",n),this.keys=a_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class f0 extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=a_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function a_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class d0 extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _u(n)&&Ci(n.arrayValue,this.value)}}class p0 extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ci(this.value.arrayValue,n)}}class m0 extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ci(this.value.arrayValue,n)}}class g0 extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_u(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ci(this.value.arrayValue,r))}}/**
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
 */class _0{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Td(t,e=null,n=[],r=[],s=null,i=null,o=null){return new _0(t,e,n,r,s,i,o)}function yu(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ys(r)).join(",")),e.ue=n}return e.ue}function vu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!c0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!i_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ed(t.startAt,e.startAt)&&Ed(t.endAt,e.endAt)}function vl(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ki{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function y0(t,e,n,r,s,i,o,c){return new Ki(t,e,n,r,s,i,o,c)}function Ba(t){return new Ki(t)}function Id(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function c_(t){return t.collectionGroup!==null}function fi(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new it(st.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ia(i,r))}),n.has(st.keyField().canonicalString())||e.ce.push(new ia(st.keyField(),r))}return e.ce}function hn(t){const e=de(t);return e.le||(e.le=v0(e,fi(t))),e.le}function v0(t,e){if(t.limitType==="F")return Td(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ia(s.field,i)});const n=t.endAt?new sa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new sa(t.startAt.position,t.startAt.inclusive):null;return Td(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function El(t,e){const n=t.filters.concat([e]);return new Ki(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function oa(t,e,n){return new Ki(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ja(t,e){return vu(hn(t),hn(e))&&t.limitType===e.limitType}function l_(t){return`${yu(hn(t))}|lt:${t.limitType}`}function Zr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>o_(s)).join(", ")}]`),Ua(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ys(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ys(s)).join(",")),`Target(${r})`}(hn(t))}; limitType=${t.limitType})`}function $a(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of fi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=vd(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,fi(r),s)||r.endAt&&!function(o,c,l){const u=vd(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,fi(r),s))}(t,e)}function E0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function u_(t){return(e,n)=>{let r=!1;for(const s of fi(t)){const i=T0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function T0(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?_s(l,u):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
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
 */class Ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){qr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Zg(this.inner)}size(){return this.innerSize}}/**
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
 */const I0=new Be(se.comparator);function Fn(){return I0}const h_=new Be(se.comparator);function Zs(...t){let e=h_;for(const n of t)e=e.insert(n.key,n);return e}function f_(t){let e=h_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Cr(){return di()}function d_(){return di()}function di(){return new Ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const w0=new Be(se.comparator),A0=new it(se.comparator);function _e(...t){let e=A0;for(const n of t)e=e.add(n);return e}const R0=new it(Ie);function b0(){return R0}/**
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
 */function Eu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ra(e)?"-0":e}}function p_(t){return{integerValue:""+t}}function S0(t,e){return r0(e)?p_(e):Eu(t,e)}/**
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
 */class qa{constructor(){this._=void 0}}function P0(t,e,n){return t instanceof ki?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&mu(i)&&(i=gu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Oi?g_(t,e):t instanceof Ni?__(t,e):function(s,i){const o=m_(s,i),c=wd(o)+wd(s.Pe);return _l(o)&&_l(s.Pe)?p_(c):Eu(s.serializer,c)}(t,e)}function C0(t,e,n){return t instanceof Oi?g_(t,e):t instanceof Ni?__(t,e):n}function m_(t,e){return t instanceof aa?function(r){return _l(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ki extends qa{}class Oi extends qa{constructor(e){super(),this.elements=e}}function g_(t,e){const n=y_(e);for(const r of t.elements)n.some(s=>pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ni extends qa{constructor(e){super(),this.elements=e}}function __(t,e){let n=y_(e);for(const r of t.elements)n=n.filter(s=>!pn(s,r));return{arrayValue:{values:n}}}class aa extends qa{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function wd(t){return He(t.integerValue||t.doubleValue)}function y_(t){return _u(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class k0{constructor(e,n){this.field=e,this.transform=n}}function O0(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Oi&&s instanceof Oi||r instanceof Ni&&s instanceof Ni?gs(r.elements,s.elements,pn):r instanceof aa&&s instanceof aa?pn(r.Pe,s.Pe):r instanceof ki&&s instanceof ki}(t.transform,e.transform)}class N0{constructor(e,n){this.version=e,this.transformResults=n}}class fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ha{}function v_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new T_(t.key,fn.none()):new Gi(t.key,t.data,fn.none());{const n=t.data,r=Ct.empty();let s=new it(st.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new gr(t.key,r,new Vt(s.toArray()),fn.none())}}function D0(t,e,n){t instanceof Gi?function(s,i,o){const c=s.value.clone(),l=Rd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof gr?function(s,i,o){if(!Vo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Rd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(E_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function pi(t,e,n,r){return t instanceof Gi?function(i,o,c,l){if(!Vo(i.precondition,o))return c;const u=i.value.clone(),f=bd(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof gr?function(i,o,c,l){if(!Vo(i.precondition,o))return c;const u=bd(i.fieldTransforms,l,o),f=o.data;return f.setAll(E_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Vo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function V0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=m_(r.transform,s||null);i!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,i))}return n||null}function Ad(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&gs(r,s,(i,o)=>O0(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Gi extends Ha{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class gr extends Ha{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function E_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Rd(t,e,n){const r=new Map;Ce(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,C0(o,c,n[s]))}return r}function bd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,P0(i,o,e))}return r}class T_ extends Ha{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class x0 extends Ha{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class L0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&D0(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=pi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=pi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=d_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=v_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&gs(this.mutations,e.mutations,(n,r)=>Ad(n,r))&&gs(this.baseMutations,e.baseMutations,(n,r)=>Ad(n,r))}}class Tu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length);let s=function(){return w0}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Tu(e,n,r,s)}}/**
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
 */class M0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class F0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ke,Ee;function U0(t){switch(t){default:return ue();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function I_(t){if(t===void 0)return Mn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ke.OK:return M.OK;case Ke.CANCELLED:return M.CANCELLED;case Ke.UNKNOWN:return M.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return M.INTERNAL;case Ke.UNAVAILABLE:return M.UNAVAILABLE;case Ke.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ke.NOT_FOUND:return M.NOT_FOUND;case Ke.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ke.ABORTED:return M.ABORTED;case Ke.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ke.DATA_LOSS:return M.DATA_LOSS;default:return ue()}}(Ee=Ke||(Ke={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function B0(){return new TextEncoder}/**
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
 */const j0=new Dr([4294967295,4294967295],0);function Sd(t){const e=B0().encode(t),n=new Wg;return n.update(e),new Uint8Array(n.digest())}function Pd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dr([n,r],0),new Dr([s,i],0)]}class Iu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ei(`Invalid padding: ${n}`);if(r<0)throw new ei(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ei(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ei(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Dr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Dr.fromNumber(r)));return s.compare(j0)===1&&(s=new Dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Sd(e),[r,s]=Pd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Iu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Sd(e),[r,s]=Pd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ei extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Wa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,zi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wa(he.min(),s,new Be(Ie),Fn(),_e())}}class zi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new zi(r,n,_e(),_e(),_e())}}/**
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
 */class xo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class w_{constructor(e,n){this.targetId=e,this.me=n}}class A_{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Cd{constructor(){this.fe=0,this.ge=Od(),this.pe=ot.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=_e(),n=_e(),r=_e();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue()}}),new zi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Od()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class $0{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fn(),this.qe=kd(),this.Qe=new Be(Ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(vl(i))if(r===0){const o=new se(i.path);this.Ue(n,o,pt.newNoDocument(o,he.min()))}else Ce(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Fr(r).toUint8Array()}catch(l){if(l instanceof e_)return ms("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Iu(o,s,i)}catch(l){return ms(l instanceof ei?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&vl(c.target)){const l=new se(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,pt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=_e();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Wa(e,n,this.Qe,this.ke,r);return this.ke=Fn(),this.qe=kd(),this.Qe=new Be(Ie),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Cd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new it(Ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Cd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function kd(){return new Be(se.comparator)}function Od(){return new Be(se.comparator)}const q0={asc:"ASCENDING",desc:"DESCENDING"},H0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},W0={and:"AND",or:"OR"};class K0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tl(t,e){return t.useProto3Json||Ua(e)?e:{value:e}}function ca(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function R_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function G0(t,e){return ca(t,e.toTimestamp())}function dn(t){return Ce(!!t),he.fromTimestamp(function(n){const r=dr(n);return new Qe(r.seconds,r.nanos)}(t))}function wu(t,e){return Il(t,e).canonicalString()}function Il(t,e){const n=function(s){return new Ve(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function b_(t){const e=Ve.fromString(t);return Ce(O_(e)),e}function wl(t,e){return wu(t.databaseId,e.path)}function Fc(t,e){const n=b_(e);if(n.get(1)!==t.databaseId.projectId)throw new J(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(P_(n))}function S_(t,e){return wu(t.databaseId,e)}function z0(t){const e=b_(t);return e.length===4?Ve.emptyPath():P_(e)}function Al(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function P_(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Nd(t,e,n){return{name:wl(t,e),fields:n.value.mapValue.fields}}function Q0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Ce(f===void 0||typeof f=="string"),ot.fromBase64String(f||"")):(Ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ot.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const f=u.code===void 0?M.UNKNOWN:I_(u.code);return new J(f,u.message||"")}(o);n=new A_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Fc(t,r.document.name),i=dn(r.document.updateTime),o=r.document.createTime?dn(r.document.createTime):he.min(),c=new Ct({mapValue:{fields:r.document.fields}}),l=pt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new xo(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Fc(t,r.document),i=r.readTime?dn(r.readTime):he.min(),o=pt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new xo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Fc(t,r.document),i=r.removedTargetIds||[];n=new xo([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new F0(s,i),c=r.targetId;n=new w_(c,o)}}return n}function Y0(t,e){let n;if(e instanceof Gi)n={update:Nd(t,e.key,e.value)};else if(e instanceof T_)n={delete:wl(t,e.key)};else if(e instanceof gr)n={update:Nd(t,e.key,e.data),updateMask:ib(e.fieldMask)};else{if(!(e instanceof x0))return ue();n={verify:wl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof ki)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Oi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ni)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof aa)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:G0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function J0(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?dn(s.updateTime):dn(i);return o.isEqual(he.min())&&(o=dn(i)),new N0(o,s.transformResults||[])}(n,e))):[]}function X0(t,e){return{documents:[S_(t,e.path)]}}function Z0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=S_(t,s);const i=function(u){if(u.length!==0)return k_(Yt.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:es(m.field),direction:nb(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Tl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function eb(t){let e=z0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=C_(p);return m instanceof Yt&&s_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(S){return new ia(ts(S.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,Ua(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,y=p.values||[];return new sa(y,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,y=p.values||[];return new sa(y,m)}(n.endAt)),y0(e,s,o,i,c,"F",l,u)}function tb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function C_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ts(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ts(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ts(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ts(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(ts(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yt.create(n.compositeFilter.filters.map(r=>C_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function nb(t){return q0[t]}function rb(t){return H0[t]}function sb(t){return W0[t]}function es(t){return{fieldPath:t.canonicalString()}}function ts(t){return st.fromServerFormat(t.fieldPath)}function k_(t){return t instanceof Ge?function(n){if(n.op==="=="){if(yd(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NAN"}};if(_d(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yd(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NOT_NAN"}};if(_d(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:es(n.field),op:rb(n.op),value:n.value}}}(t):t instanceof Yt?function(n){const r=n.getFilters().map(s=>k_(s));return r.length===1?r[0]:{compositeFilter:{op:sb(n.op),filters:r}}}(t):ue()}function ib(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function O_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ir{constructor(e,n,r,s,i=he.min(),o=he.min(),c=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ob{constructor(e){this.ct=e}}function ab(t){const e=eb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?oa(e,e.limit,"L"):e}/**
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
 */class cb{constructor(){this.un=new lb}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(fr.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(fr.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class lb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new it(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new it(Ve.comparator)).toArray()}}/**
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
 */class vs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new vs(0)}static kn(){return new vs(-1)}}/**
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
 */class ub{constructor(){this.changes=new Ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class fb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&pi(r.mutation,s,Vt.empty(),Qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=Cr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Zs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Fn();const o=di(),c=function(){return di()}();return n.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof gr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),pi(f.mutation,u,f.mutation.getFieldMask(),Qe.now())):o.set(u.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return c.set(u,new hb(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=di();let s=new Be((o,c)=>o-c),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Vt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=d_();f.forEach(m=>{if(!i.has(m)){const y=v_(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):c_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Cr());let c=-1,l=i;return o.next(u=>$.forEach(u,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,_e())).next(f=>({batchId:c,changes:f_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Zs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Zs();return this.indexManager.getCollectionParents(e,i).next(c=>$.forEach(c,l=>{const u=function(p,m){return new Ki(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,pt.newInvalidDocument(f)))});let c=Zs();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&pi(f.mutation,u,Vt.empty(),Qe.now()),$a(n,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class db{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:dn(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:ab(s.bundledQuery),readTime:dn(s.readTime)}}(n)),$.resolve()}}/**
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
 */class pb{constructor(){this.overlays=new Be(se.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Cr();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Cr(),i=n.length+1,o=new se(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Cr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Cr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>c.set(u,f)),!(c.size()>=s)););return $.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new M0(n,r));let i=this.Ir.get(n);i===void 0&&(i=_e(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class mb{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class Au{constructor(){this.Tr=new it(et.Er),this.dr=new it(et.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new et(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new et(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new se(new Ve([])),r=new et(n,e),s=new et(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new se(new Ve([])),r=new et(n,e),s=new et(n,e+1);let i=_e();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new et(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return se.comparator(e.key,n.key)||Ie(e.wr,n.wr)}static Ar(e,n){return Ie(e.wr,n.wr)||se.comparator(e.key,n.key)}}/**
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
 */class gb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new it(et.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new L0(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new et(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),s=new et(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(Ie);return n.forEach(s=>{const i=new et(s,0),o=new et(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new et(new se(i),0);let c=new it(Ie);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.wr)),!0)},o),$.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,s=>{const i=new et(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new et(n,0),s=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class _b{constructor(e){this.Mr=e,this.docs=function(){return new Be(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=Fn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():pt.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Fn();const o=n.path,c=new se(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||ZR(XR(f),r)<=0||(s.has(f.key)||$a(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new yb(this)}getSize(e){return $.resolve(this.size)}}class yb extends ub{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class vb{constructor(e){this.persistence=e,this.Nr=new Ss(n=>yu(n),vu),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Au,this.targetCount=0,this.kr=vs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
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
 */class Eb{constructor(e,n){this.qr={},this.overlays={},this.Qr=new pu(0),this.Kr=!1,this.Kr=!0,this.$r=new mb,this.referenceDelegate=e(this),this.Ur=new vb(this),this.indexManager=new cb,this.remoteDocumentCache=function(s){return new _b(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new ob(n),this.Gr=new db(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new gb(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new Tb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Tb extends t0{constructor(e){super(),this.currentSequenceNumber=e}}class Ru{constructor(e){this.persistence=e,this.Jr=new Au,this.Yr=null}static Zr(e){return new Ru(e)}get Xr(){if(this.Yr)return this.Yr;throw ue()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const s=se.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class bu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new bu(e,n.fromCache,r,s)}}/**
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
 */class Ib{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class wb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return aI()?8:n0(yt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Ib;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Ws()<=ve.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Zr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Ws()<=ve.DEBUG&&Z("QueryEngine","Query:",Zr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ws()<=ve.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Zr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hn(n))):$.resolve())}Yi(e,n){if(Id(n))return $.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=oa(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(n,c);return this.ns(n,u,o,l.readTime)?this.Yi(e,oa(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,r,s){return Id(n)||s.isEqual(he.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?$.resolve(null):(Ws()<=ve.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Zr(n)),this.rs(e,o,n,JR(s,-1)).next(c=>c))})}ts(e,n){let r=new it(u_(e));return n.forEach((s,i)=>{$a(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Ws()<=ve.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Zr(n)),this.Ji.getDocumentsMatchingQuery(e,n,fr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Ab{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Be(Ie),this._s=new Ss(i=>yu(i),vu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fb(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Rb(t,e,n,r){return new Ab(t,e,n,r)}async function N_(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=_e();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:c}))})})}function bb(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,f){const p=u.batch,m=p.keys();let y=$.resolve();return m.forEach(S=>{y=y.next(()=>f.getEntry(l,S)).next(k=>{const O=u.docVersions.get(S);Ce(O!==null),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))})}),y.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=_e();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function D_(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Sb(t,e){const n=de(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(ot.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),function(k,O,q){return k.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(m,y,f)&&c.push(n.Ur.updateTargetData(i,y))});let l=Fn(),u=_e();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(Pb(i,o,e.documentUpdates).next(f=>{l=f.Ps,u=f.Is})),!r.isEqual(he.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return $.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=s,i))}function Pb(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Fn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Z("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function Cb(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function kb(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Rl(t,e,n){const r=de(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Wi(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Dd(t,e,n){const r=de(t);let s=he.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const p=de(l),m=p._s.get(f);return m!==void 0?$.resolve(p.os.get(m)):p.Ur.getTargetData(u,f)}(r,o,hn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:he.min(),n?i:_e())).next(c=>(Ob(r,E0(e),c),{documents:c,Ts:i})))}function Ob(t,e,n){let r=t.us.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Vd{constructor(){this.activeTargetIds=b0()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Nb{constructor(){this.so=new Vd,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Vd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Db{_o(e){}shutdown(){}}/**
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
 */class xd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wo=null;function Uc(){return wo===null?wo=function(){return 268435456+Math.round(2147483648*Math.random())}():wo++,"0x"+wo.toString(16)}/**
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
 */const Vb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class xb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ut="WebChannelConnection";class Lb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=Uc(),l=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,s).then(f=>(Z("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw ms("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=Vb[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Uc();return new Promise((o,c)=>{const l=new Kg;l.setWithCredentials(!0),l.listenOnce(Gg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case No.NO_ERROR:const f=l.getResponseJson();Z(ut,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case No.TIMEOUT:Z(ut,`RPC '${e}' ${i} timed out`),c(new J(M.DEADLINE_EXCEEDED,"Request time out"));break;case No.HTTP_ERROR:const p=l.getStatus();if(Z(ut,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const S=function(O){const q=O.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(q)>=0?q:M.UNKNOWN}(y.status);c(new J(S,y.message))}else c(new J(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new J(M.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{Z(ut,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);Z(ut,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=Uc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Yg(),c=Qg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Z(ut,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let m=!1,y=!1;const S=new xb({Io:O=>{y?Z(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(m||(Z(ut,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(ut,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},To:()=>p.close()}),k=(O,q,F)=>{O.listen(q,B=>{try{F(B)}catch(j){setTimeout(()=>{throw j},0)}})};return k(p,Xs.EventType.OPEN,()=>{y||(Z(ut,`RPC '${e}' stream ${s} transport opened.`),S.yo())}),k(p,Xs.EventType.CLOSE,()=>{y||(y=!0,Z(ut,`RPC '${e}' stream ${s} transport closed`),S.So())}),k(p,Xs.EventType.ERROR,O=>{y||(y=!0,ms(ut,`RPC '${e}' stream ${s} transport errored:`,O),S.So(new J(M.UNAVAILABLE,"The operation could not be completed")))}),k(p,Xs.EventType.MESSAGE,O=>{var q;if(!y){const F=O.data[0];Ce(!!F);const B=F,j=B.error||((q=B[0])===null||q===void 0?void 0:q.error);if(j){Z(ut,`RPC '${e}' stream ${s} received error:`,j);const X=j.status;let ne=function(_){const I=Ke[_];if(I!==void 0)return I_(I)}(X),R=j.message;ne===void 0&&(ne=M.INTERNAL,R="Unknown error status: "+X+" with message "+j.message),y=!0,S.So(new J(ne,R)),p.close()}else Z(ut,`RPC '${e}' stream ${s} received:`,F),S.bo(F)}}),k(c,zg.STAT_EVENT,O=>{O.stat===ml.PROXY?Z(ut,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===ml.NOPROXY&&Z(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Bc(){return typeof document<"u"?document:null}/**
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
 */function Ka(t){return new K0(t,!0)}/**
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
 */class V_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class x_{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new V_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new J(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Mb extends x_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Q0(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?he.min():o.readTime?dn(o.readTime):he.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Al(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=vl(l)?{documents:X0(i,l)}:{query:Z0(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=R_(i,o.resumeToken);const u=Tl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(he.min())>0){c.readTime=ca(i,o.snapshotVersion.toTimestamp());const u=Tl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=tb(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Al(this.serializer),n.removeTarget=e,this.a_(n)}}class Fb extends x_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=J0(e.writeResults,e.commitTime),r=dn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Al(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Y0(this.serializer,r))};this.a_(n)}}/**
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
 */class Ub extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new J(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Il(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Il(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Bb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Mn(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class jb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Hr(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=de(l);u.L_.add(4),await Qi(u),u.q_.set("Unknown"),u.L_.delete(4),await Ga(u)}(this))})}),this.q_=new Bb(r,s)}}async function Ga(t){if(Hr(t))for(const e of t.B_)await e(!0)}async function Qi(t){for(const e of t.B_)await e(!1)}function L_(t,e){const n=de(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ku(n)?Cu(n):Ps(n).r_()&&Pu(n,e))}function Su(t,e){const n=de(t),r=Ps(n);n.N_.delete(e),r.r_()&&M_(n,e),n.N_.size===0&&(r.r_()?r.o_():Hr(n)&&n.q_.set("Unknown"))}function Pu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ps(t).A_(e)}function M_(t,e){t.Q_.xe(e),Ps(t).R_(e)}function Cu(t){t.Q_=new $0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ps(t).start(),t.q_.v_()}function ku(t){return Hr(t)&&!Ps(t).n_()&&t.N_.size>0}function Hr(t){return de(t).L_.size===0}function F_(t){t.Q_=void 0}async function $b(t){t.q_.set("Online")}async function qb(t){t.N_.forEach((e,n)=>{Pu(t,e)})}async function Hb(t,e){F_(t),ku(t)?(t.q_.M_(e),Cu(t)):t.q_.set("Unknown")}async function Wb(t,e,n){if(t.q_.set("Online"),e instanceof A_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await la(t,r)}else if(e instanceof xo?t.Q_.Ke(e):e instanceof w_?t.Q_.He(e):t.Q_.We(e),!n.isEqual(he.min()))try{const r=await D_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(u);f&&i.N_.set(u,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(ot.EMPTY_BYTE_STRING,f.snapshotVersion)),M_(i,l);const p=new ir(f.target,l,u,f.sequenceNumber);Pu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await la(t,r)}}async function la(t,e,n){if(!Wi(e))throw e;t.L_.add(1),await Qi(t),t.q_.set("Offline"),n||(n=()=>D_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ga(t)})}function U_(t,e){return e().catch(n=>la(t,n,e))}async function za(t){const e=de(t),n=pr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Kb(e);)try{const s=await Cb(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Gb(e,s)}catch(s){await la(e,s)}B_(e)&&j_(e)}function Kb(t){return Hr(t)&&t.O_.length<10}function Gb(t,e){t.O_.push(e);const n=pr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function B_(t){return Hr(t)&&!pr(t).n_()&&t.O_.length>0}function j_(t){pr(t).start()}async function zb(t){pr(t).p_()}async function Qb(t){const e=pr(t);for(const n of t.O_)e.m_(n.mutations)}async function Yb(t,e,n){const r=t.O_.shift(),s=Tu.from(r,e,n);await U_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await za(t)}async function Jb(t,e){e&&pr(t).V_&&await async function(r,s){if(function(o){return U0(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();pr(r).s_(),await U_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await za(r)}}(t,e),B_(t)&&j_(t)}async function Ld(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Hr(n);n.L_.add(3),await Qi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ga(n)}async function Xb(t,e){const n=de(t);e?(n.L_.delete(2),await Ga(n)):e||(n.L_.add(2),await Qi(n),n.q_.set("Unknown"))}function Ps(t){return t.K_||(t.K_=function(n,r,s){const i=de(n);return i.w_(),new Mb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:$b.bind(null,t),Ro:qb.bind(null,t),mo:Hb.bind(null,t),d_:Wb.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ku(t)?Cu(t):t.q_.set("Unknown")):(await t.K_.stop(),F_(t))})),t.K_}function pr(t){return t.U_||(t.U_=function(n,r,s){const i=de(n);return i.w_(),new Fb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:zb.bind(null,t),mo:Jb.bind(null,t),f_:Qb.bind(null,t),g_:Yb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await za(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Ou{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Ou(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nu(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),Wi(t))return new J(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class hs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Zs(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new hs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new hs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Md{constructor(){this.W_=new Be(se.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ue():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Es{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Es(e,n,hs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ja(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Zb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class eS{constructor(){this.queries=Fd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=Fd(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new J(M.ABORTED,"Firestore shutting down"))}}function Fd(){return new Ss(t=>l_(t),ja)}async function Du(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Zb,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Nu(o,`Initialization of query '${Zr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&xu(n)}async function Vu(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function tS(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&xu(n)}function nS(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function xu(t){t.Y_.forEach(e=>{e.next()})}var bl,Ud;(Ud=bl||(bl={})).ea="default",Ud.Cache="cache";class Lu{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==bl.Cache}}/**
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
 */class $_{constructor(e){this.key=e}}class q_{constructor(e){this.key=e}}class rS{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=_e(),this.mutatedKeys=_e(),this.Aa=u_(e),this.Ra=new hs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Md,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),y=$a(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),k=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let O=!1;m&&y?m.data.isEqual(y.data)?S!==k&&(r.track({type:3,doc:y}),O=!0):this.ga(m,y)||(r.track({type:2,doc:y}),O=!0,(l&&this.Aa(y,l)>0||u&&this.Aa(y,u)<0)&&(c=!0)):!m&&y?(r.track({type:0,doc:y}),O=!0):m&&!y&&(r.track({type:1,doc:m}),O=!0,(l||u)&&(c=!0)),O&&(y?(o=o.add(y),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(y,S){const k=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return k(y)-k(S)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new Es(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Md,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=_e(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new q_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new $_(r))}),n}ba(e){this.Ta=e.Ts,this.da=_e();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Es.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class sS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class iS{constructor(e){this.key=e,this.va=!1}}class oS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ss(c=>l_(c),ja),this.Ma=new Map,this.xa=new Set,this.Oa=new Be(se.comparator),this.Na=new Map,this.La=new Au,this.Ba={},this.ka=new Map,this.qa=vs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function aS(t,e,n=!0){const r=Q_(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await H_(r,e,n,!0),s}async function cS(t,e){const n=Q_(t);await H_(n,e,!0,!1)}async function H_(t,e,n,r){const s=await kb(t.localStore,hn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await lS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&L_(t.remoteStore,s),c}async function lS(t,e,n,r,s){t.Ka=(p,m,y)=>async function(k,O,q,F){let B=O.view.ma(q);B.ns&&(B=await Dd(k.localStore,O.query,!1).then(({documents:R})=>O.view.ma(R,B)));const j=F&&F.targetChanges.get(O.targetId),X=F&&F.targetMismatches.get(O.targetId)!=null,ne=O.view.applyChanges(B,k.isPrimaryClient,j,X);return jd(k,O.targetId,ne.wa),ne.snapshot}(t,p,m,y);const i=await Dd(t.localStore,e,!0),o=new rS(e,i.Ts),c=o.ma(i.documents),l=zi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);jd(t,n,u.wa);const f=new sS(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function uS(t,e,n){const r=de(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!ja(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Rl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Su(r.remoteStore,s.targetId),Sl(r,s.targetId)}).catch(Hi)):(Sl(r,s.targetId),await Rl(r.localStore,s.targetId,!0))}async function hS(t,e){const n=de(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Su(n.remoteStore,r.targetId))}async function fS(t,e,n){const r=vS(t);try{const s=await function(o,c){const l=de(o),u=Qe.now(),f=c.reduce((y,S)=>y.add(S.key),_e());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let S=Fn(),k=_e();return l.cs.getEntries(y,f).next(O=>{S=O,S.forEach((q,F)=>{F.isValidDocument()||(k=k.add(q))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,S)).next(O=>{p=O;const q=[];for(const F of c){const B=V0(F,p.get(F.key).overlayedDocument);B!=null&&q.push(new gr(F.key,B,t_(B.value.mapValue),fn.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,q,c)}).next(O=>{m=O;const q=O.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(y,O.batchId,q)})}).then(()=>({batchId:m.batchId,changes:f_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new Be(Ie)),u=u.insert(c,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await Yi(r,s.changes),await za(r.remoteStore)}catch(s){const i=Nu(s,"Failed to persist write");n.reject(i)}}async function W_(t,e){const n=de(t);try{const r=await Sb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ce(o.va):s.removedDocuments.size>0&&(Ce(o.va),o.va=!1))}),await Yi(n,r,e)}catch(r){await Hi(r)}}function Bd(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=de(o);l.onlineState=c;let u=!1;l.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(c)&&(u=!0)}),u&&xu(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dS(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Be(se.comparator);o=o.insert(i,pt.newNoDocument(i,he.min()));const c=_e().add(i),l=new Wa(he.min(),new Map,new Be(Ie),o,c);await W_(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Mu(r)}else await Rl(r.localStore,e,!1).then(()=>Sl(r,e,n)).catch(Hi)}async function pS(t,e){const n=de(t),r=e.batch.batchId;try{const s=await bb(n.localStore,e);G_(n,r,null),K_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yi(n,s)}catch(s){await Hi(s)}}async function mS(t,e,n){const r=de(t);try{const s=await function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Ce(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>l.localDocuments.getDocuments(u,f))})}(r.localStore,e);G_(r,e,n),K_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yi(r,s)}catch(s){await Hi(s)}}function K_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function G_(t,e,n){const r=de(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Sl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||z_(t,r)})}function z_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Su(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Mu(t))}function jd(t,e,n){for(const r of n)r instanceof $_?(t.La.addReference(r.key,e),gS(t,r)):r instanceof q_?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||z_(t,r.key)):ue()}function gS(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),Mu(t))}function Mu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new se(Ve.fromString(e)),r=t.qa.next();t.Na.set(r,new iS(n)),t.Oa=t.Oa.insert(n,r),L_(t.remoteStore,new ir(hn(Ba(n.path)),r,"TargetPurposeLimboResolution",pu.oe))}}async function Yi(t,e,n){const r=de(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=bu.Wi(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const f=de(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(u,m=>$.forEach(m.$i,y=>f.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>$.forEach(m.Ui,y=>f.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!Wi(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const y=f.os.get(m),S=y.snapshotVersion,k=y.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(m,k)}}}(r.localStore,i))}async function _S(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await N_(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new J(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yi(n,r.hs)}}function yS(t,e){const n=de(t),r=n.Na.get(e);if(r&&r.va)return _e().add(r.key);{let s=_e();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function Q_(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=W_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dS.bind(null,e),e.Ca.d_=tS.bind(null,e.eventManager),e.Ca.$a=nS.bind(null,e.eventManager),e}function vS(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mS.bind(null,e),e}class ua{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ka(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Rb(this.persistence,new wb,e.initialUser,this.serializer)}Ga(e){return new Eb(Ru.Zr,this.serializer)}Wa(e){return new Nb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ua.provider={build:()=>new ua};class Pl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_S.bind(null,this.syncEngine),await Xb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new eS}()}createDatastore(e){const n=Ka(e.databaseInfo.databaseId),r=function(i){return new Lb(i)}(e.databaseInfo);return function(i,o,c,l){return new Ub(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new jb(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Bd(this.syncEngine,n,0),function(){return xd.D()?new xd:new Db}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,f){const p=new oS(s,i,o,c,l,u);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=de(s);Z("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Qi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Pl.provider={build:()=>new Pl};/**
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
 */class Fu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ES{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=Xg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Nu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jc(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await N_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $d(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TS(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ld(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Ld(e.remoteStore,s)),t._onlineComponents=e}async function TS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await jc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ms("Error using user provided cache. Falling back to memory cache: "+n),await jc(t,new ua)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await jc(t,new ua);return t._offlineComponents}async function Y_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await $d(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await $d(t,new Pl))),t._onlineComponents}function IS(t){return Y_(t).then(e=>e.syncEngine)}async function ha(t){const e=await Y_(t),n=e.eventManager;return n.onListen=aS.bind(null,e.syncEngine),n.onUnlisten=uS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=cS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=hS.bind(null,e.syncEngine),n}function wS(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new Fu({next:m=>{f.Za(),o.enqueueAndForget(()=>Vu(i,p));const y=m.docs.has(c);!y&&m.fromCache?u.reject(new J(M.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&l&&l.source==="server"?u.reject(new J(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Lu(Ba(c.path),f,{includeMetadataChanges:!0,_a:!0});return Du(i,p)}(await ha(t),t.asyncQueue,e,n,r)),r.promise}function AS(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new Fu({next:m=>{f.Za(),o.enqueueAndForget(()=>Vu(i,p)),m.fromCache&&l.source==="server"?u.reject(new J(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Lu(c,f,{includeMetadataChanges:!0,_a:!0});return Du(i,p)}(await ha(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function J_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const qd=new Map;/**
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
 */function X_(t,e,n){if(!n)throw new J(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function RS(t,e,n,r){if(e===!0&&r===!0)throw new J(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hd(t){if(!se.isDocumentKey(t))throw new J(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wd(t){if(se.isDocumentKey(t))throw new J(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function $t(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qa(t);throw new J(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Kd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=J_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ya{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $R;switch(r.type){case"firstParty":return new KR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qd.get(n);r&&(Z("ComponentProvider","Removing Datastore"),qd.delete(n),r.terminate())}(this),Promise.resolve()}}function bS(t,e,n,r={}){var s;const i=(t=$t(t,Ya))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ms("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ft.MOCK_USER;else{c=og(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new J(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ft(u)}t._authCredentials=new qR(new Jg(c,l))}}/**
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
 */class _r{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _r(this.firestore,e,this._query)}}class _t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class lr extends _r{constructor(e,n,r){super(e,n,Ba(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new se(e))}withConverter(e){return new lr(this.firestore,e,this._path)}}function Z_(t,e,...n){if(t=Je(t),X_("collection","path",e),t instanceof Ya){const r=Ve.fromString(e,...n);return Wd(r),new lr(t,null,r)}{if(!(t instanceof _t||t instanceof lr))throw new J(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Wd(r),new lr(t.firestore,null,r)}}function ey(t,e,...n){if(t=Je(t),arguments.length===1&&(e=Xg.newId()),X_("doc","path",e),t instanceof Ya){const r=Ve.fromString(e,...n);return Hd(r),new _t(t,null,new se(r))}{if(!(t instanceof _t||t instanceof lr))throw new J(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Hd(r),new _t(t.firestore,t instanceof lr?t.converter:null,new se(r))}}/**
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
 */class Gd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new V_(this,"async_queue_retry"),this.Vu=()=>{const r=Bc();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Bc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new On;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Wi(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Mn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Ou.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ue()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function zd(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Br extends Ya{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Gd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gd(e),this._firestoreClient=void 0,await e}}}function SS(t,e){const n=typeof t=="object"?t:su(),r=typeof t=="string"?t:"(default)",s=Da(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=rg("firestore");i&&bS(s,...i)}return s}function Ja(t){if(t._terminated)throw new J(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||PS(t),t._firestoreClient}function PS(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,f){return new i0(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,J_(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new ES(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class Ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ts(ot.fromBase64String(e))}catch(n){throw new J(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ts(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Xa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Za{constructor(e){this._methodName=e}}/**
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
 */class Uu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
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
 */class Bu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const CS=/^__.*__$/;class kS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Gi(e,this.data,n,this.fieldTransforms)}}class ty{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ny(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class ju{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ju(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return fa(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ny(this.Cu)&&CS.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class OS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ka(e)}Qu(e,n,r,s=!1){return new ju({Cu:e,methodName:n,qu:r,path:st.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $u(t){const e=t._freezeSettings(),n=Ka(t._databaseId);return new OS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function NS(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Hu("Data must be an object, but it was:",o,r);const c=ry(r,o);let l,u;if(i.merge)l=new Vt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Cl(e,p,n);if(!o.contains(m))throw new J(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);iy(f,m)||f.push(m)}l=new Vt(f),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new kS(new Ct(c),l,u)}class ec extends Za{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ec}}class qu extends Za{_toFieldTransform(e){return new k0(e.path,new ki)}isEqual(e){return e instanceof qu}}function DS(t,e,n,r){const s=t.Qu(1,e,n);Hu("Data must be an object, but it was:",s,r);const i=[],o=Ct.empty();qr(r,(l,u)=>{const f=Wu(e,l,n);u=Je(u);const p=s.Nu(f);if(u instanceof ec)i.push(f);else{const m=Ji(u,p);m!=null&&(i.push(f),o.set(f,m))}});const c=new Vt(i);return new ty(o,c,s.fieldTransforms)}function VS(t,e,n,r,s,i){const o=t.Qu(1,e,n),c=[Cl(e,r,n)],l=[s];if(i.length%2!=0)throw new J(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Cl(e,i[m])),l.push(i[m+1]);const u=[],f=Ct.empty();for(let m=c.length-1;m>=0;--m)if(!iy(u,c[m])){const y=c[m];let S=l[m];S=Je(S);const k=o.Nu(y);if(S instanceof ec)u.push(y);else{const O=Ji(S,k);O!=null&&(u.push(y),f.set(y,O))}}const p=new Vt(u);return new ty(f,p,o.fieldTransforms)}function xS(t,e,n,r=!1){return Ji(n,t.Qu(r?4:3,e))}function Ji(t,e){if(sy(t=Je(t)))return Hu("Unsupported field value:",e,t),ry(t,e);if(t instanceof Za)return function(r,s){if(!ny(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Ji(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return S0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Qe.fromDate(r);return{timestampValue:ca(s.serializer,i)}}if(r instanceof Qe){const i=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ca(s.serializer,i)}}if(r instanceof Uu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ts)return{bytesValue:R_(s.serializer,r._byteString)};if(r instanceof _t){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Bu)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Eu(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Qa(r)}`)}(t,e)}function ry(t,e){const n={};return Zg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qr(t,(r,s)=>{const i=Ji(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function sy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof Uu||t instanceof Ts||t instanceof _t||t instanceof Za||t instanceof Bu)}function Hu(t,e,n){if(!sy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Qa(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Cl(t,e,n){if((e=Je(e))instanceof Xa)return e._internalPath;if(typeof e=="string")return Wu(t,e);throw fa("Field path arguments must be of type string or ",t,!1,void 0,n)}const LS=new RegExp("[~\\*/\\[\\]]");function Wu(t,e,n){if(e.search(LS)>=0)throw fa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xa(...e.split("."))._internalPath}catch{throw fa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new J(M.INVALID_ARGUMENT,c+t+l)}function iy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class oy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ku("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MS extends oy{data(){return super.data()}}function Ku(t,e){return typeof e=="string"?Wu(t,e):e instanceof Xa?e._internalPath:e._delegate._internalPath}/**
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
 */function ay(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gu{}class cy extends Gu{}function FS(t,e,...n){let r=[];e instanceof Gu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof zu).length,c=i.filter(l=>l instanceof tc).length;if(o>1||o>0&&c>0)throw new J(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class tc extends cy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new tc(e,n,r)}_apply(e){const n=this._parse(e);return ly(e._query,n),new _r(e.firestore,e.converter,El(e._query,n))}_parse(e){const n=$u(e.firestore);return function(i,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new J(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Yd(p,f);const y=[];for(const S of p)y.push(Qd(l,i,S));m={arrayValue:{values:y}}}else m=Qd(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Yd(p,f),m=xS(c,o,p,f==="in"||f==="not-in");return Ge.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function US(t,e,n){const r=e,s=Ku("where",t);return tc._create(s,r,n)}class zu extends Gu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Yt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)ly(o,l),o=El(o,l)}(e._query,n),new _r(e.firestore,e.converter,El(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qu extends cy{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Qu(e,n,r)}_apply(e){return new _r(e.firestore,e.converter,oa(e._query,this._limit,this._limitType))}}function BS(t){return Qu._create("limit",t,"F")}function Qd(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new J(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!c_(e)&&n.indexOf("/")!==-1)throw new J(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!se.isDocumentKey(r))throw new J(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return gd(t,new se(r))}if(n instanceof _t)return gd(t,n._key);throw new J(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qa(n)}.`)}function Yd(t,e){if(!Array.isArray(t)||t.length===0)throw new J(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ly(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class jS{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return qr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>He(o.doubleValue));return new Bu(i)}convertGeoPoint(e){return new Uu(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Si(e));default:return null}}convertTimestamp(e){const n=dr(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);Ce(O_(r));const s=new Pi(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||Mn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function $S(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class ti{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uy extends oy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Lo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ku("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Lo extends uy{data(e={}){return super.data(e)}}class hy{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ti(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Lo(this._firestore,this._userDataWriter,r.key,r,new ti(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Lo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ti(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Lo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ti(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:qS(c.type),doc:l,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
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
 */function HS(t){t=$t(t,_t);const e=$t(t.firestore,Br);return wS(Ja(e),t._key).then(n=>dy(e,t,n))}class Yu extends jS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function WS(t){t=$t(t,_r);const e=$t(t.firestore,Br),n=Ja(e),r=new Yu(e);return ay(t._query),AS(n,t._query).then(s=>new hy(e,r,t,s))}function KS(t,e,n){t=$t(t,_t);const r=$t(t.firestore,Br),s=$S(t.converter,e);return fy(r,[NS($u(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,fn.none())])}function GS(t,e,n,...r){t=$t(t,_t);const s=$t(t.firestore,Br),i=$u(s);let o;return o=typeof(e=Je(e))=="string"||e instanceof Xa?VS(i,"updateDoc",t._key,e,n,r):DS(i,"updateDoc",t._key,e),fy(s,[o.toMutation(t._key,fn.exists(!0))])}function sk(t,...e){var n,r,s;t=Je(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||zd(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(zd(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,u,f;if(t instanceof _t)u=$t(t.firestore,Br),f=Ba(t._key.path),l={next:p=>{e[o]&&e[o](dy(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=$t(t,_r);u=$t(p.firestore,Br),f=p._query;const m=new Yu(u);l={next:y=>{e[o]&&e[o](new hy(u,m,p,y))},error:e[o+1],complete:e[o+2]},ay(t._query)}return function(m,y,S,k){const O=new Fu(k),q=new Lu(y,O,S);return m.asyncQueue.enqueueAndForget(async()=>Du(await ha(m),q)),()=>{O.Za(),m.asyncQueue.enqueueAndForget(async()=>Vu(await ha(m),q))}}(Ja(u),f,c,l)}function fy(t,e){return function(r,s){const i=new On;return r.asyncQueue.enqueueAndForget(async()=>fS(await IS(r),s,i)),i.promise}(Ja(t),e)}function dy(t,e,n){const r=n.docs.get(e._key),s=new Yu(t);return new uy(t,s,e._key,r,new ti(n.hasPendingWrites,n.fromCache),e.converter)}function kl(){return new qu("serverTimestamp")}(function(e,n=!0){(function(s){bs=s})($r),xr(new hr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Br(new HR(r.getProvider("auth-internal")),new zR(r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new J(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pi(u.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),cn(hd,"4.7.3",e),cn(hd,"4.7.3","esm2017")})();/**
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
 */const py="firebasestorage.googleapis.com",zS="storageBucket",QS=2*60*1e3,YS=10*60*1e3;/**
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
 */class _n extends gn{constructor(e,n,r=0){super($c(e),`Firebase Storage: ${n} (${$c(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_n.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $c(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var mn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(mn||(mn={}));function $c(t){return"storage/"+t}function JS(){const t="An unknown error occurred, please check the error payload for server response.";return new _n(mn.UNKNOWN,t)}function XS(){return new _n(mn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ZS(){return new _n(mn.CANCELED,"User canceled the upload/download.")}function eP(t){return new _n(mn.INVALID_URL,"Invalid URL '"+t+"'.")}function tP(t){return new _n(mn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Jd(t){return new _n(mn.INVALID_ARGUMENT,t)}function my(){return new _n(mn.APP_DELETED,"The Firebase app was deleted.")}function nP(t){return new _n(mn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Wt.makeFromUrl(e,n)}catch{return new Wt(e,"")}if(r.path==="")return r;throw tP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(j){j.path_=decodeURIComponent(j.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${f}/b/${s}/o${m}`,"i"),S={bucket:1,path:3},k=n===py?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",q=new RegExp(`^https?://${k}/${s}/${O}`,"i"),B=[{regex:c,indices:l,postModify:i},{regex:y,indices:S,postModify:u},{regex:q,indices:{bucket:1,path:2},postModify:u}];for(let j=0;j<B.length;j++){const X=B[j],ne=X.regex.exec(e);if(ne){const R=ne[X.indices.bucket];let v=ne[X.indices.path];v||(v=""),r=new Wt(R,v),X.postModify(r);break}}if(r==null)throw eP(e);return r}}class rP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function sP(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function f(...O){u||(u=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(y,l())},O)}function m(){i&&clearTimeout(i)}function y(O,...q){if(u){m();return}if(O){m(),f.call(null,O,...q);return}if(l()||o){m(),f.call(null,O,...q);return}r<64&&(r*=2);let B;c===1?(c=2,B=0):B=(r+Math.random())*1e3,p(B)}let S=!1;function k(O){S||(S=!0,m(),!u&&(s!==null?(O||(c=2),clearTimeout(s),p(0)):O||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,k(!0)},n),k}function iP(t){t(!1)}/**
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
 */function oP(t){return t!==void 0}function Xd(t,e,n,r){if(r<e)throw Jd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Jd(`Invalid value for '${t}'. Expected ${n} or less.`)}function aP(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var da;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(da||(da={}));/**
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
 */function cP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class lP{constructor(e,n,r,s,i,o,c,l,u,f,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,S)=>{this.resolve_=y,this.reject_=S,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ao(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===da.NO_ERROR,l=i.getStatus();if(!c||cP(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===da.ABORT;r(!1,new Ao(!1,null,f));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ao(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());oP(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=JS();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?my():ZS();o(l)}else{const l=XS();o(l)}};this.canceled_?n(!1,new Ao(!1,null,!0)):this.backoffId_=sP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&iP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ao{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function uP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function dP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function pP(t,e,n,r,s,i,o=!0){const c=aP(t.urlParams),l=t.url+c,u=Object.assign({},t.headers);return fP(u,e),uP(u,n),hP(u,i),dP(u,r),new lP(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function mP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function gP(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class pa{constructor(e,n){this._service=e,n instanceof Wt?this._location=n:this._location=Wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new pa(e,n)}get root(){const e=new Wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return gP(this._location.path)}get storage(){return this._service}get parent(){const e=mP(this._location.path);if(e===null)return null;const n=new Wt(this._location.bucket,e);return new pa(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw nP(e)}}function Zd(t,e){const n=e==null?void 0:e[zS];return n==null?null:Wt.makeFromBucketSpec(n,t)}function _P(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:og(s,t.app.options.projectId))}class yP{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=py,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=QS,this._maxUploadRetryTime=YS,this._requests=new Set,s!=null?this._bucket=Wt.makeFromBucketSpec(s,this._host):this._bucket=Zd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Wt.makeFromBucketSpec(this._url,e):this._bucket=Zd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Xd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Xd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pa(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new rP(my());{const o=pP(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const ep="@firebase/storage",tp="0.13.2";/**
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
 */const gy="storage";function vP(t=su(),e){t=Je(t);const r=Da(t,gy).getImmediate({identifier:e}),s=rg("storage");return s&&EP(r,...s),r}function EP(t,e,n,r={}){_P(t,e,n,r)}function TP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new yP(n,r,s,e,$r)}function IP(){xr(new hr(gy,TP,"PUBLIC").setMultipleInstances(!0)),cn(ep,tp,""),cn(ep,tp,"esm2017")}IP();const _y={apiKey:"AIzaSyCgyyYCUU-XcIra5RM7twBY8vc85R0DDHs",authDomain:"dr-richard-97cc3.firebaseapp.com",projectId:"dr-richard-97cc3",storageBucket:"dr-richard-97cc3.firebasestorage.app",messagingSenderId:"309283476838",appId:"1:309283476838:web:41a3fc159c66526f42e4a7"};function wP(t){return typeof t!="string"||!t.trim()?!0:/^(AIzaSy\.\.\.|seu-projeto|123456789|1:123456789:web:abcdef)$/i.test(t.trim())}const np=Object.entries(_y).filter(([,t])=>wP(t)).map(([t])=>t);if(np.length>0)throw new Error(`[Firebase] Configuração ausente ou inválida: ${np.join(", ")}. Crie frontend/.env com as variáveis VITE_FIREBASE_* do console Firebase e reinicie o Vite.`);const Ju=lg(_y),Xi=FR(Ju),Xu=SS(Ju);vP(Ju);const Zu={especialidades:"especialidades",medicos:"medicos",horariosDisponiveis:"horarios_disponiveis",pacientes:"pacientes",agendamentos:"agendamentos",avaliacoes:"avaliacoes",contatos:"contatos"};function ik(t){const e=typeof t=="object"&&t!==null&&"code"in t?String(t.code):"",n={"auth/invalid-email":"E-mail inválido. Confira e tente novamente.","auth/user-disabled":"Sua conta foi desativada. Entre em contato com a clínica.","auth/expired-action-code":"O link expirou. Solicite um novo acesso.","auth/invalid-action-code":"Link inválido ou já utilizado. Solicite um novo.","auth/configuration-not-found":"Login por e-mail ainda não configurado. Ative o provedor E-mail/Senha no Firebase Authentication.","auth/network-request-failed":"Sem conexão. Verifique sua internet e tente novamente.","auth/too-many-requests":"Muitas tentativas. Aguarde alguns minutos e tente de novo.","permission-denied":"Você não tem permissão para esta operação.",unavailable:"Serviço indisponível no momento. Tente novamente em instantes."};return e&&n[e]?n[e]:t instanceof Error&&t.message?t.message:"Ocorreu um erro inesperado. Tente novamente em instantes."}const ma="clinica.dr.richard.email_login";async function AP(t){await TA(Xi,t,{url:"http://localhost:3000/auth/callback",handleCodeInApp:!0}),window.localStorage.setItem(ma,t)}function ok(t){return IA(Xi,t)}async function RP(t,e){const n=window.localStorage.getItem(ma)||e||"";if(!n)throw new Error("Informe o e-mail para confirmar o acesso.");const r=await wA(Xi,n,t);return window.localStorage.removeItem(ma),r.user}async function bP(){await SA(Xi)}function ak(){return window.localStorage.getItem(ma)}function SP(t){return bA(Xi,t)}function Ol(t){return t instanceof Qe?t.toDate().toISOString():Array.isArray(t)?t.map(Ol):t&&typeof t=="object"?Object.fromEntries(Object.entries(t).map(([e,n])=>[e,Ol(n)])):t}function yy(t){const e=Ol(t.data());return{id:t.id,...e}}async function vy(t){const e=FS(Z_(Xu,Zu.pacientes),US("user_id","==",t),BS(1)),n=await WS(e);return n.empty?null:yy(n.docs[0])}async function PP(t){const e=await vy(t.user_id);if(e)return e;const n=ey(Z_(Xu,Zu.pacientes));await KS(n,{user_id:t.user_id,nome:t.nome,email:t.email,telefone:t.telefone??null,cpf:t.cpf??null,data_nascimento:t.data_nascimento??null,foto_url:t.foto_url??null,created_at:kl(),updated_at:kl()});const r=await HS(n);return yy(r)}async function ck(t,e){const n=ey(Xu,Zu.pacientes,t);await GS(n,{...e,updated_at:kl()})}async function lk(t,e){return kP(e)}function CP(t){return new Promise((e,n)=>{const r=URL.createObjectURL(t),s=new Image;s.onload=()=>{URL.revokeObjectURL(r),e(s)},s.onerror=()=>{URL.revokeObjectURL(r),n(new Error("Não foi possível ler a imagem selecionada."))},s.src=r})}async function kP(t){const e=await CP(t),r=Math.min(1,512/Math.max(e.naturalWidth,e.naturalHeight)),s=Math.max(1,Math.round(e.naturalWidth*r)),i=Math.max(1,Math.round(e.naturalHeight*r)),o=document.createElement("canvas");o.width=s,o.height=i;const c=o.getContext("2d");if(!c)throw new Error("Não foi possível preparar a imagem.");return c.drawImage(e,0,0,s,i),o.toDataURL("image/jpeg",.82)}const Ey=Xm("auth",()=>{const t=sr(null),e=sr(null),n=sr(!0),r=sr(!1),s=At(()=>t.value!==null),i=At(()=>{var m,y,S;return((m=e.value)==null?void 0:m.nome)||((y=t.value)==null?void 0:y.displayName)||((S=t.value)==null?void 0:S.email)||""});let o=null;function c(){return r.value?Promise.resolve():(r.value=!0,new Promise(m=>{o=SP(async y=>{if(t.value=y,y)try{let S=await vy(y.uid);S||(S=await PP({user_id:y.uid,email:y.email??"",nome:y.displayName||(y.email?y.email.split("@")[0]:"Paciente")})),e.value=S}catch(S){console.error("[auth] falha ao carregar paciente",S),e.value=null}else e.value=null;n.value=!1,m()})}))}async function l(m){await AP(m)}async function u(m,y){await RP(m,y)}async function f(){await bP(),e.value=null,t.value=null}function p(){o&&(o(),o=null),r.value=!1}return{usuario:t,paciente:e,carregando:n,inicializado:r,autenticado:s,nomePaciente:i,inicializar:c,enviarMagicLink:l,concluirMagicLink:u,sair:f,destruir:p}}),OP=Xm("toast",()=>{const t=sr([]);function e(l){const u=`t_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,f={id:u,duracaoMs:4e3,...l};return t.value.push(f),f.duracaoMs&&f.duracaoMs>0&&window.setTimeout(()=>n(u),f.duracaoMs),u}function n(l){t.value=t.value.filter(u=>u.id!==l)}function r(l,u,f){return e({tipo:l,titulo:u,mensagem:f})}return{toasts:t,adicionar:e,remover:n,sucesso:(l,u)=>r("sucesso",l,u),erro:(l,u)=>r("erro",l,u),info:(l,u)=>r("info",l,u),aviso:(l,u)=>r("aviso",l,u)}}),NP={class:"fixed top-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-sm pointer-events-none",role:"region","aria-label":"Notificações","aria-live":"polite"},DP={class:"flex items-start gap-3"},VP={class:"font-semibold text-sm flex-1"},xP=["onClick"],LP={key:0,class:"text-xs text-slate-600 mt-1"},MP=ba({__name:"AppToaster",setup(t){const e=OP(),{toasts:n}=KT(e),r={sucesso:"bg-secondary-50 border-secondary-200 text-secondary-700",erro:"bg-danger-50 border-danger-200 text-danger-600",info:"bg-primary-50 border-primary-200 text-primary-700",aviso:"bg-amber-50 border-amber-200 text-amber-700"};return(s,i)=>(Rn(),zs("div",NP,[ze(PT,{name:"page-fade",tag:"div",class:"flex flex-col gap-2"},{default:jo(()=>[(Rn(!0),zs(wt,null,dE(kn(n),o=>(Rn(),zs("div",{key:o.id,class:Ia(["pointer-events-auto rounded-2xl border shadow-elevated p-4 bg-white",r[o.tipo]]),role:"status"},[Pr("div",DP,[Pr("div",VP,Gc(o.titulo),1),Pr("button",{type:"button",class:"text-current opacity-60 hover:opacity-100 transition","aria-label":"Fechar notificação",onClick:c=>kn(e).remover(o.id)},[...i[0]||(i[0]=[Pr("svg",{class:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor"},[Pr("path",{d:"M4.3 4.3a1 1 0 011.4 0L10 8.6l4.3-4.3a1 1 0 011.4 1.4L11.4 10l4.3 4.3a1 1 0 01-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 01-1.4-1.4L8.6 10 4.3 5.7a1 1 0 010-1.4z"})],-1)])],8,xP)]),o.mensagem?(Rn(),zs("p",LP,Gc(o.mensagem),1)):Mm("",!0)],2))),128))]),_:1})]))}}),FP={class:"min-h-screen bg-light text-dark antialiased"},UP=ba({__name:"App",setup(t){const e=Ey();return Yl(async()=>{await e.inicializar()}),(n,r)=>{const s=hE("router-view");return Rn(),zs("div",FP,[ze(s,null,{default:jo(({Component:i})=>[ze(iT,{name:"page-fade",mode:"out-in"},{default:jo(()=>[(Rn(),Wo(fE(i)))]),_:2},1024)]),_:1}),ze(MP)])}}}),BP="modulepreload",jP=function(t){return"/"+t},rp={},ht=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=jP(l),l in rp)return;rp[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":BP,u||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),u)return new Promise((m,y)=>{p.addEventListener("load",m),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ns=typeof document<"u";function Ty(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $P(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ty(t.default)}const be=Object.assign;function qc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Jt(s)?s.map(t):t(s)}return n}const mi=()=>{},Jt=Array.isArray;function sp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Iy=/#/g,qP=/&/g,HP=/\//g,WP=/=/g,KP=/\?/g,wy=/\+/g,GP=/%5B/g,zP=/%5D/g,Ay=/%5E/g,QP=/%60/g,Ry=/%7B/g,YP=/%7C/g,by=/%7D/g,JP=/%20/g;function eh(t){return t==null?"":encodeURI(""+t).replace(YP,"|").replace(GP,"[").replace(zP,"]")}function XP(t){return eh(t).replace(Ry,"{").replace(by,"}").replace(Ay,"^")}function Nl(t){return eh(t).replace(wy,"%2B").replace(JP,"+").replace(Iy,"%23").replace(qP,"%26").replace(QP,"`").replace(Ry,"{").replace(by,"}").replace(Ay,"^")}function ZP(t){return Nl(t).replace(WP,"%3D")}function eC(t){return eh(t).replace(Iy,"%23").replace(KP,"%3F")}function tC(t){return eC(t).replace(HP,"%2F")}function Di(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const nC=/\/$/,rC=t=>t.replace(nC,"");function Hc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=aC(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Di(o)}}function sC(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ip(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function iC(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Is(e.matched[r],n.matched[s])&&Sy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Is(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!oC(t[n],e[n]))return!1;return!0}function oC(t,e){return Jt(t)?op(t,e):Jt(e)?op(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function op(t,e){return Jt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function aC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Dl=function(t){return t.pop="pop",t.push="push",t}({}),Wc=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function cC(t){if(!t)if(ns){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),rC(t)}const lC=/^[^#]+#/;function uC(t,e){return t.replace(lC,"#")+e}function hC(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const nc=()=>({left:window.scrollX,top:window.scrollY});function fC(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=hC(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ap(t,e){return(history.state?history.state.position-e:-1)+t}const Vl=new Map;function dC(t,e){Vl.set(t,e)}function pC(t){const e=Vl.get(t);return Vl.delete(t),e}function mC(t){return typeof t=="string"||t&&typeof t=="object"}function Py(t){return typeof t=="string"||typeof t=="symbol"}let $e=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const Cy=Symbol("");$e.MATCHER_NOT_FOUND+"",$e.NAVIGATION_GUARD_REDIRECT+"",$e.NAVIGATION_ABORTED+"",$e.NAVIGATION_CANCELLED+"",$e.NAVIGATION_DUPLICATED+"";function ws(t,e){return be(new Error,{type:t,[Cy]:!0},e)}function Tn(t,e){return t instanceof Error&&Cy in t&&(e==null||!!(t.type&e))}const gC=["params","query","hash"];function _C(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of gC)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function yC(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(wy," "),i=s.indexOf("="),o=Di(i<0?s:s.slice(0,i)),c=i<0?null:Di(s.slice(i+1));if(o in e){let l=e[o];Jt(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function cp(t){let e="";for(let n in t){const r=t[n];if(n=ZP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Jt(r)?r.map(s=>s&&Nl(s)):[r&&Nl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function vC(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Jt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const EC=Symbol(""),lp=Symbol(""),rc=Symbol(""),th=Symbol(""),xl=Symbol("");function Ks(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Xn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(ws($e.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?l(m):mC(m)?l(ws($e.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function Kc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Ty(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Xn(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=$P(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const m=(p.__vccOpts||p)[e];return m&&Xn(m,n,r,o,c,s)()}))}}return i}function TC(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Is(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Is(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let IC=()=>location.protocol+"//"+location.host;function ky(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),ip(c,"")}return ip(n,t)+r+s}function wC(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const y=ky(t,location),S=n.value,k=e.value;let O=0;if(m){if(n.value=y,e.value=m,o&&o===S){o=null;return}O=k?m.position-k.position:0}else r(y);s.forEach(q=>{q(n.value,S,{delta:O,type:Dl.pop,direction:O?O>0?Wc.forward:Wc.back:Wc.unknown})})};function l(){o=n.value}function u(m){s.push(m);const y=()=>{const S=s.indexOf(m);S>-1&&s.splice(S,1)};return i.push(y),y}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(be({},m.state,{scroll:nc()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:p}}function up(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?nc():null}}function AC(t){const{history:e,location:n}=window,r={value:ky(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:IC()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(y){console.error(y),n[f?"replace":"assign"](m)}}function o(l,u){i(l,be({},e.state,up(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const f=be({},s.value,e.state,{forward:l,scroll:nc()});i(f.current,f,!0),i(l,be({},up(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function RC(t){t=cC(t);const e=AC(t),n=wC(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=be({location:"",base:t,go:r,createHref:uC.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let kr=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Xe=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Xe||{});const bC={type:kr.Static,value:""},SC=/[a-zA-Z0-9_]/;function PC(t){if(!t)return[[]];if(t==="/")return[[bC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=Xe.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===Xe.Static?i.push({type:kr.Static,value:u}):n===Xe.Param||n===Xe.ParamRegExp||n===Xe.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:kr.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==Xe.ParamRegExp){r=n,n=Xe.EscapeNext;continue}switch(n){case Xe.Static:l==="/"?(u&&p(),o()):l===":"?(p(),n=Xe.Param):m();break;case Xe.EscapeNext:m(),n=r;break;case Xe.Param:l==="("?n=Xe.ParamRegExp:SC.test(l)?m():(p(),n=Xe.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case Xe.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=Xe.ParamRegExpEnd:f+=l;break;case Xe.ParamRegExpEnd:p(),n=Xe.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===Xe.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const hp="[^/]+?",CC={sensitive:!1,strict:!1,start:!0,end:!0};var Tt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(Tt||{});const kC=/[.+*?^${}()[\]/\\]/g;function OC(t,e){const n=be({},CC,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[Tt.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let y=Tt.Segment+(n.sensitive?Tt.BonusCaseSensitive:0);if(m.type===kr.Static)p||(s+="/"),s+=m.value.replace(kC,"\\$&"),y+=Tt.Static;else if(m.type===kr.Param){const{value:S,repeatable:k,optional:O,regexp:q}=m;i.push({name:S,repeatable:k,optional:O});const F=q||hp;if(F!==hp){y+=Tt.BonusCustomRegExp;try{`${F}`}catch(j){throw new Error(`Invalid custom RegExp for param "${S}" (${F}): `+j.message)}}let B=k?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||(B=O&&u.length<2?`(?:/${B})`:"/"+B),O&&(B+="?"),s+=B,y+=Tt.Dynamic,O&&(y+=Tt.BonusOptional),k&&(y+=Tt.BonusRepeatable),F===".*"&&(y+=Tt.BonusWildcard)}f.push(y)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Tt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const y=f[m]||"",S=i[m-1];p[S.name]=y&&S.repeatable?y.split("/"):y}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of m)if(y.type===kr.Static)f+=y.value;else if(y.type===kr.Param){const{value:S,repeatable:k,optional:O}=y,q=S in u?u[S]:"";if(Jt(q)&&!k)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const F=Jt(q)?q.join("/"):q;if(!F)if(O)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=F}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function NC(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Tt.Static+Tt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Tt.Static+Tt.Segment?1:-1:0}function Oy(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=NC(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(fp(r))return 1;if(fp(s))return-1}return s.length-r.length}function fp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const DC={strict:!1,end:!0,sensitive:!1};function VC(t,e,n){const r=OC(PC(t.path),n),s=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function xC(t,e){const n=[],r=new Map;e=sp(DC,e);function s(p){return r.get(p)}function i(p,m,y){const S=!y,k=pp(p);k.aliasOf=y&&y.record;const O=sp(e,p),q=[k];if("alias"in p){const j=typeof p.alias=="string"?[p.alias]:p.alias;for(const X of j)q.push(pp(be({},k,{components:y?y.record.components:k.components,path:X,aliasOf:y?y.record:k})))}let F,B;for(const j of q){const{path:X}=j;if(m&&X[0]!=="/"){const ne=m.record.path,R=ne[ne.length-1]==="/"?"":"/";j.path=m.record.path+(X&&R+X)}if(F=VC(j,m,O),y?y.alias.push(F):(B=B||F,B!==F&&B.alias.push(F),S&&p.name&&!mp(F)&&o(p.name)),Ny(F)&&l(F),k.children){const ne=k.children;for(let R=0;R<ne.length;R++)i(ne[R],F,y&&y.children[R])}y=y||F}return B?()=>{o(B)}:mi}function o(p){if(Py(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=FC(p,n);n.splice(m,0,p),p.record.name&&!mp(p)&&r.set(p.record.name,p)}function u(p,m){let y,S={},k,O;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw ws($e.MATCHER_NOT_FOUND,{location:p});O=y.record.name,S=be(dp(m.params,y.keys.filter(B=>!B.optional).concat(y.parent?y.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),p.params&&dp(p.params,y.keys.map(B=>B.name))),k=y.stringify(S)}else if(p.path!=null)k=p.path,y=n.find(B=>B.re.test(k)),y&&(S=y.parse(k),O=y.record.name);else{if(y=m.name?r.get(m.name):n.find(B=>B.re.test(m.path)),!y)throw ws($e.MATCHER_NOT_FOUND,{location:p,currentLocation:m});O=y.record.name,S=be({},m.params,p.params),k=y.stringify(S)}const q=[];let F=y;for(;F;)q.unshift(F.record),F=F.parent;return{name:O,path:k,params:S,matched:q,meta:MC(q)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function dp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function pp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:LC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function LC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function mp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function MC(t){return t.reduce((e,n)=>be(e,n.meta),{})}function FC(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Oy(t,e[i])<0?r=i:n=i+1}const s=UC(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function UC(t){let e=t;for(;e=e.parent;)if(Ny(e)&&Oy(t,e)===0)return e}function Ny({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function gp(t){const e=jt(rc),n=jt(th),r=At(()=>{const l=kn(t.to);return e.resolve(l)}),s=At(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Is.bind(null,f));if(m>-1)return m;const y=_p(l[u-2]);return u>1&&_p(f)===y&&p[p.length-1].path!==y?p.findIndex(Is.bind(null,l[u-2])):m}),i=At(()=>s.value>-1&&HC(n.params,r.value.params)),o=At(()=>s.value>-1&&s.value===n.matched.length-1&&Sy(n.params,r.value.params));function c(l={}){if(qC(l)){const u=e[kn(t.replace)?"replace":"push"](kn(t.to)).catch(mi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:At(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function BC(t){return t.length===1?t[0]:t}const jC=ba({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:gp,setup(t,{slots:e}){const n=xi(gp(t)),{options:r}=jt(rc),s=At(()=>({[yp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[yp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&BC(e.default(n));return t.custom?i:tu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),$C=jC;function qC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function HC(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Jt(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function _p(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const yp=(t,e,n)=>t??e??n,WC=ba({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=jt(xl),s=At(()=>t.route||r.value),i=jt(lp,0),o=At(()=>{let u=kn(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=At(()=>s.value.matched[o.value]);Ro(lp,At(()=>o.value+1)),Ro(EC,c),Ro(xl,s);const l=sr();return ii(()=>[l.value,c.value,t.name],([u,f,p],[m,y,S])=>{f&&(f.instances[p]=u,y&&y!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),u&&f&&(!y||!Is(f,y)||!m)&&(f.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return vp(n.default,{Component:m,route:u});const y=p.props[f],S=y?y===!0?u.params:typeof y=="function"?y(u):y:null,O=tu(m,be({},S,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return vp(n.default,{Component:O,route:u})||O}}});function vp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const KC=WC;function GC(t){const e=xC(t.routes,t),n=t.parseQuery||yC,r=t.stringifyQuery||cp,s=t.history,i=Ks(),o=Ks(),c=Ks(),l=xv(zn);let u=zn;ns&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=qc.bind(null,V=>""+V),p=qc.bind(null,tC),m=qc.bind(null,Di);function y(V,Y){let z,ee;return Py(V)?(z=e.getRecordMatcher(V),ee=Y):ee=V,e.addRoute(ee,z)}function S(V){const Y=e.getRecordMatcher(V);Y&&e.removeRoute(Y)}function k(){return e.getRoutes().map(V=>V.record)}function O(V){return!!e.getRecordMatcher(V)}function q(V,Y){if(Y=be({},Y||l.value),typeof V=="string"){const P=Hc(n,V,Y.path),D=e.resolve({path:P.path},Y),L=s.createHref(P.fullPath);return be(P,D,{params:m(D.params),hash:Di(P.hash),redirectedFrom:void 0,href:L})}let z;if(V.path!=null)z=be({},V,{path:Hc(n,V.path,Y.path).path});else{const P=be({},V.params);for(const D in P)P[D]==null&&delete P[D];z=be({},V,{params:p(P)}),Y.params=p(Y.params)}const ee=e.resolve(z,Y),me=V.hash||"";ee.params=f(m(ee.params));const E=sC(r,be({},V,{hash:XP(me),path:ee.path})),A=s.createHref(E);return be({fullPath:E,hash:me,query:r===cp?vC(V.query):V.query||{}},ee,{redirectedFrom:void 0,href:A})}function F(V){return typeof V=="string"?Hc(n,V,l.value.path):be({},V)}function B(V,Y){if(u!==V)return ws($e.NAVIGATION_CANCELLED,{from:Y,to:V})}function j(V){return R(V)}function X(V){return j(be(F(V),{replace:!0}))}function ne(V,Y){const z=V.matched[V.matched.length-1];if(z&&z.redirect){const{redirect:ee}=z;let me=typeof ee=="function"?ee(V,Y):ee;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=F(me):{path:me},me.params={}),be({query:V.query,hash:V.hash,params:me.path!=null?{}:V.params},me)}}function R(V,Y){const z=u=q(V),ee=l.value,me=V.state,E=V.force,A=V.replace===!0,P=ne(z,ee);if(P)return R(be(F(P),{state:typeof P=="object"?be({},me,P.state):me,force:E,replace:A}),Y||z);const D=z;D.redirectedFrom=Y;let L;return!E&&iC(r,ee,z)&&(L=ws($e.NAVIGATION_DUPLICATED,{to:D,from:ee}),Mt(ee,ee,!0,!1)),(L?Promise.resolve(L):I(D,ee)).catch(x=>Tn(x)?Tn(x,$e.NAVIGATION_GUARD_REDIRECT)?x:qt(x):ge(x,D,ee)).then(x=>{if(x){if(Tn(x,$e.NAVIGATION_GUARD_REDIRECT))return R(be({replace:A},F(x.to),{state:typeof x.to=="object"?be({},me,x.to.state):me,force:E}),Y||D)}else x=w(D,ee,!0,A,me);return b(D,ee,x),x})}function v(V,Y){const z=B(V,Y);return z?Promise.reject(z):Promise.resolve()}function _(V){const Y=jn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(V):V()}function I(V,Y){let z;const[ee,me,E]=TC(V,Y);z=Kc(ee.reverse(),"beforeRouteLeave",V,Y);for(const P of ee)P.leaveGuards.forEach(D=>{z.push(Xn(D,V,Y))});const A=v.bind(null,V,Y);return z.push(A),St(z).then(()=>{z=[];for(const P of i.list())z.push(Xn(P,V,Y));return z.push(A),St(z)}).then(()=>{z=Kc(me,"beforeRouteUpdate",V,Y);for(const P of me)P.updateGuards.forEach(D=>{z.push(Xn(D,V,Y))});return z.push(A),St(z)}).then(()=>{z=[];for(const P of E)if(P.beforeEnter)if(Jt(P.beforeEnter))for(const D of P.beforeEnter)z.push(Xn(D,V,Y));else z.push(Xn(P.beforeEnter,V,Y));return z.push(A),St(z)}).then(()=>(V.matched.forEach(P=>P.enterCallbacks={}),z=Kc(E,"beforeRouteEnter",V,Y,_),z.push(A),St(z))).then(()=>{z=[];for(const P of o.list())z.push(Xn(P,V,Y));return z.push(A),St(z)}).catch(P=>Tn(P,$e.NAVIGATION_CANCELLED)?P:Promise.reject(P))}function b(V,Y,z){c.list().forEach(ee=>_(()=>ee(V,Y,z)))}function w(V,Y,z,ee,me){const E=B(V,Y);if(E)return E;const A=Y===zn,P=ns?history.state:{};z&&(ee||A?s.replace(V.fullPath,be({scroll:A&&P&&P.scroll},me)):s.push(V.fullPath,me)),l.value=V,Mt(V,Y,z,A),qt()}let T;function Re(){T||(T=s.listen((V,Y,z)=>{if(!Ot.listening)return;const ee=q(V),me=ne(ee,Ot.currentRoute.value);if(me){R(be(me,{replace:!0,force:!0}),ee).catch(mi);return}u=ee;const E=l.value;ns&&dC(ap(E.fullPath,z.delta),nc()),I(ee,E).catch(A=>Tn(A,$e.NAVIGATION_ABORTED|$e.NAVIGATION_CANCELLED)?A:Tn(A,$e.NAVIGATION_GUARD_REDIRECT)?(R(be(F(A.to),{force:!0}),ee).then(P=>{Tn(P,$e.NAVIGATION_ABORTED|$e.NAVIGATION_DUPLICATED)&&!z.delta&&z.type===Dl.pop&&s.go(-1,!1)}).catch(mi),Promise.reject()):(z.delta&&s.go(-z.delta,!1),ge(A,ee,E))).then(A=>{A=A||w(ee,E,!1),A&&(z.delta&&!Tn(A,$e.NAVIGATION_CANCELLED)?s.go(-z.delta,!1):z.type===Dl.pop&&Tn(A,$e.NAVIGATION_ABORTED|$e.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(ee,E,A)}).catch(mi)}))}let qe=Ks(),Pe=Ks(),le;function ge(V,Y,z){qt(V);const ee=Pe.list();return ee.length?ee.forEach(me=>me(V,Y,z)):console.error(V),Promise.reject(V)}function kt(){return le&&l.value!==zn?Promise.resolve():new Promise((V,Y)=>{qe.add([V,Y])})}function qt(V){return le||(le=!V,Re(),qe.list().forEach(([Y,z])=>V?z(V):Y()),qe.reset()),V}function Mt(V,Y,z,ee){const{scrollBehavior:me}=t;if(!ns||!me)return Promise.resolve();const E=!z&&pC(ap(V.fullPath,0))||(ee||!z)&&history.state&&history.state.scroll||null;return Gl().then(()=>me(V,Y,E)).then(A=>A&&fC(A)).catch(A=>ge(A,V,Y))}const Me=V=>s.go(V);let Fe;const jn=new Set,Ot={currentRoute:l,listening:!0,addRoute:y,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:k,resolve:q,options:t,push:j,replace:X,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Pe.add,isReady:kt,install(V){V.component("RouterLink",$C),V.component("RouterView",KC),V.config.globalProperties.$router=Ot,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>kn(l)}),ns&&!Fe&&l.value===zn&&(Fe=!0,j(s.location).catch(ee=>{}));const Y={};for(const ee in zn)Object.defineProperty(Y,ee,{get:()=>l.value[ee],enumerable:!0});V.provide(rc,Ot),V.provide(th,Kp(Y)),V.provide(xl,l);const z=V.unmount;jn.add(V),V.unmount=function(){jn.delete(V),jn.size<1&&(u=zn,T&&T(),T=null,l.value=zn,Fe=!1,le=!1),z()}}};function St(V){return V.reduce((Y,z)=>Y.then(()=>_(z)),Promise.resolve())}return Ot}function uk(){return jt(rc)}function hk(t){return jt(th)}const zC=()=>ht(()=>import("./PublicLayout-n-DWCjp6.js"),__vite__mapDeps([0,1,2])),QC=()=>ht(()=>import("./PortalLayout-pEnT5Y84.js"),__vite__mapDeps([3,1])),YC=[{path:"/",component:zC,children:[{path:"",name:"home",component:()=>ht(()=>import("./HomeView-C09Swh6d.js"),__vite__mapDeps([4,5,6,7,8,9,10,11,2])),meta:{titulo:"Clínica Dr. Richard — Saúde com cuidado e modernidade"}},{path:"sobre",name:"sobre",component:()=>ht(()=>import("./SobreView-DigDEZ-3.js"),__vite__mapDeps([12,11,2])),meta:{titulo:"Sobre a Clínica — Dr. Richard"}},{path:"especialidades",name:"especialidades",component:()=>ht(()=>import("./EspecialidadesView-Bjek-ic2.js"),__vite__mapDeps([13,11,2])),meta:{titulo:"Especialidades — Clínica Dr. Richard"}},{path:"equipe",name:"equipe",component:()=>ht(()=>import("./EquipeView-xNIeiLzp.js"),__vite__mapDeps([14,15,6,11,2])),meta:{titulo:"Nossa Equipe — Clínica Dr. Richard"}},{path:"depoimentos",name:"depoimentos",component:()=>ht(()=>import("./DepoimentosView-DNWjhWD_.js"),__vite__mapDeps([16,7,8,6,9,10,11,2])),meta:{titulo:"Depoimentos — Clínica Dr. Richard"}},{path:"contato",name:"contato",component:()=>ht(()=>import("./ContatoView-DKJgPP-V.js"),__vite__mapDeps([17,18,19,20,2])),meta:{titulo:"Contato — Clínica Dr. Richard"}},{path:"login",name:"login",component:()=>ht(()=>import("./LoginView-CC_WXZMT.js"),__vite__mapDeps([21,18,20])),meta:{titulo:"Acesso do Paciente — Clínica Dr. Richard",somenteAnonimos:!0}},{path:"auth/callback",name:"auth-callback",component:()=>ht(()=>import("./AuthCallbackView-Buoh4DEa.js"),__vite__mapDeps([22,18,20])),meta:{titulo:"Confirmando acesso…"}}]},{path:"/portal",component:QC,meta:{protegida:!0},children:[{path:"",name:"portal-dashboard",component:()=>ht(()=>import("./DashboardView-DDPdRYP5.js"),__vite__mapDeps([23,6,24,5,15,25,9,10])),meta:{titulo:"Meu Painel — Clínica Dr. Richard"}},{path:"agendar",name:"portal-agendar",component:()=>ht(()=>import("./AgendarView-BjvkjvrM.js"),__vite__mapDeps([26,20,19,6,24,5,15,25,10])),meta:{titulo:"Agendar Consulta — Clínica Dr. Richard"}},{path:"agendamentos",name:"portal-agendamentos",component:()=>ht(()=>import("./MeusAgendamentosView-C2XX0eOn.js"),__vite__mapDeps([27,20,6,24,5,15,25,9,10])),meta:{titulo:"Meus Agendamentos — Clínica Dr. Richard"}},{path:"perfil",name:"portal-perfil",component:()=>ht(()=>import("./PerfilView-BIhkXEqb.js"),__vite__mapDeps([28,20,18])),meta:{titulo:"Meu Perfil — Clínica Dr. Richard"}},{path:"avaliacoes",name:"portal-avaliacoes",component:()=>ht(()=>import("./AvaliacoesView-dQptF_0z.js"),__vite__mapDeps([29,20,8,19,6,25,15,5,9,10])),meta:{titulo:"Avaliações — Clínica Dr. Richard"}}]},{path:"/:pathMatch(.*)*",name:"nao-encontrada",component:()=>ht(()=>import("./NaoEncontradaView-C3nT9XHE.js"),[]),meta:{titulo:"Página não encontrada"}}],nh=GC({history:RC(),routes:YC,scrollBehavior(t,e,n){return n||{top:0,behavior:"smooth"}}});nh.beforeEach(async t=>{const e=Ey();return e.inicializado||await e.inicializar(),t.meta.protegida&&!e.autenticado?{name:"login",query:{redirect:t.fullPath,motivo:"sessao"}}:t.meta.somenteAnonimos&&e.autenticado?{name:"portal-dashboard"}:!0});nh.afterEach(t=>{const e=t.meta.titulo??"Clínica Dr. Richard";document.title=e});const rh=MT(UP);rh.use(BT());rh.use(nh);rh.mount("#app");"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js")});export{Z_ as A,Xu as B,Zu as C,KS as D,kl as E,wt as F,xi as G,ik as H,ok as I,ak as J,Le as K,US as L,FS as M,WS as N,yy as O,Xm as P,vy as Q,ck as R,ii as S,iT as T,lk as U,JC as V,HS as W,GS as X,sk as Y,Fl as Z,OP as _,Ey as a,Pr as b,zs as c,ba as d,ze as e,dE as f,qE as g,kn as h,Wo as i,Mm as j,sr as k,ZC as l,Yl as m,Ia as n,Rn as o,dm as p,uk as q,hE as r,KT as s,Gc as t,hk as u,At as v,jo as w,ek as x,XC as y,ey as z};
