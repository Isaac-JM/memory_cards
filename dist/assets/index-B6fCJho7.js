var Et=Object.defineProperty;var At=(r,e,t)=>e in r?Et(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var m=(r,e,t)=>(At(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=globalThis,ue=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,be=Symbol(),we=new WeakMap;let Ve=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==be)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ue&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=we.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&we.set(t,e))}return e}toString(){return this.cssText}};const St=r=>new Ve(typeof r=="string"?r:r+"",void 0,be),x=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((o,a,i)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+r[i+1],r[0]);return new Ve(t,r,be)},Ct=(r,e)=>{if(ue)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const o=document.createElement("style"),a=X.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=t.cssText,r.appendChild(o)}},ve=ue?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return St(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Rt,defineProperty:zt,getOwnPropertyDescriptor:jt,getOwnPropertyNames:Pt,getOwnPropertySymbols:Nt,getPrototypeOf:Lt}=Object,A=globalThis,ye=A.trustedTypes,Ut=ye?ye.emptyScript:"",ie=A.reactiveElementPolyfillSupport,I=(r,e)=>r,de={toAttribute(r,e){switch(e){case Boolean:r=r?Ut:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},qe=(r,e)=>!Rt(r,e),xe={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:qe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);class P extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=xe){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),a=this.getPropertyDescriptor(e,o,t);a!==void 0&&zt(this.prototype,e,a)}}static getPropertyDescriptor(e,t,o){const{get:a,set:i}=jt(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get(){return a==null?void 0:a.call(this)},set(s){const c=a==null?void 0:a.call(this);i.call(this,s),this.requestUpdate(e,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??xe}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;const e=Lt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){const t=this.properties,o=[...Pt(t),...Nt(t)];for(const a of o)this.createProperty(a,t[a])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,a]of t)this.elementProperties.set(o,a)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const a=this._$Eu(t,o);a!==void 0&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const a of o)t.unshift(ve(a))}else e!==void 0&&t.push(ve(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ct(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostConnected)==null?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostDisconnected)==null?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){var i;const o=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,o);if(a!==void 0&&o.reflect===!0){const s=(((i=o.converter)==null?void 0:i.toAttribute)!==void 0?o.converter:de).toAttribute(t,o.type);this._$Em=e,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$Em=null}}_$AK(e,t){var i;const o=this.constructor,a=o._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const s=o.getPropertyOptions(a),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:de;this._$Em=a,this[a]=c.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,o){if(e!==void 0){if(o??(o=this.constructor.getPropertyOptions(e)),!(o.hasChanged??qe)(this[e],t))return;this.P(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[i,s]of a)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(o=this._$EO)==null||o.forEach(a=>{var i;return(i=a.hostUpdate)==null?void 0:i.call(a)}),this.update(t)):this._$EU()}catch(a){throw e=!1,this._$EU(),a}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(o=>{var a;return(a=o.hostUpdated)==null?void 0:a.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[I("elementProperties")]=new Map,P[I("finalized")]=new Map,ie==null||ie({ReactiveElement:P}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,Q=M.trustedTypes,_e=Q?Q.createPolicy("lit-html",{createHTML:r=>r}):void 0,We="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,Ke="?"+$,Ot=`<${Ke}>`,z=document,B=()=>z.createComment(""),F=r=>r===null||typeof r!="object"&&typeof r!="function",Xe=Array.isArray,Tt=r=>Xe(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ne=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ke=/-->/g,$e=/>/g,C=RegExp(`>|${ne}(?:([^\\s"'>=/]+)(${ne}*=${ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ee=/'/g,Ae=/"/g,Ye=/^(?:script|style|textarea|title)$/i,It=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),g=It(1),L=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Se=new WeakMap,R=z.createTreeWalker(z,129);function Ge(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return _e!==void 0?_e.createHTML(e):e}const Mt=(r,e)=>{const t=r.length-1,o=[];let a,i=e===2?"<svg>":"",s=T;for(let c=0;c<t;c++){const n=r[c];let l,d,h=-1,p=0;for(;p<n.length&&(s.lastIndex=p,d=s.exec(n),d!==null);)p=s.lastIndex,s===T?d[1]==="!--"?s=ke:d[1]!==void 0?s=$e:d[2]!==void 0?(Ye.test(d[2])&&(a=RegExp("</"+d[2],"g")),s=C):d[3]!==void 0&&(s=C):s===C?d[0]===">"?(s=a??T,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,l=d[1],s=d[3]===void 0?C:d[3]==='"'?Ae:Ee):s===Ae||s===Ee?s=C:s===ke||s===$e?s=T:(s=C,a=void 0);const u=s===C&&r[c+1].startsWith("/>")?" ":"";i+=s===T?n+Ot:h>=0?(o.push(l),n.slice(0,h)+We+n.slice(h)+$+u):n+$+(h===-2?c:u)}return[Ge(r,i+(r[t]||"<?>")+(e===2?"</svg>":"")),o]};class D{constructor({strings:e,_$litType$:t},o){let a;this.parts=[];let i=0,s=0;const c=e.length-1,n=this.parts,[l,d]=Mt(e,t);if(this.el=D.createElement(l,o),R.currentNode=this.el.content,t===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(a=R.nextNode())!==null&&n.length<c;){if(a.nodeType===1){if(a.hasAttributes())for(const h of a.getAttributeNames())if(h.endsWith(We)){const p=d[s++],u=a.getAttribute(h).split($),S=/([.?@])?(.*)/.exec(p);n.push({type:1,index:i,name:S[2],strings:u,ctor:S[1]==="."?Bt:S[1]==="?"?Ft:S[1]==="@"?Dt:oe}),a.removeAttribute(h)}else h.startsWith($)&&(n.push({type:6,index:i}),a.removeAttribute(h));if(Ye.test(a.tagName)){const h=a.textContent.split($),p=h.length-1;if(p>0){a.textContent=Q?Q.emptyScript:"";for(let u=0;u<p;u++)a.append(h[u],B()),R.nextNode(),n.push({type:2,index:++i});a.append(h[p],B())}}}else if(a.nodeType===8)if(a.data===Ke)n.push({type:2,index:i});else{let h=-1;for(;(h=a.data.indexOf($,h+1))!==-1;)n.push({type:7,index:i}),h+=$.length-1}i++}}static createElement(e,t){const o=z.createElement("template");return o.innerHTML=e,o}}function U(r,e,t=r,o){var s,c;if(e===L)return e;let a=o!==void 0?(s=t._$Co)==null?void 0:s[o]:t._$Cl;const i=F(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==i&&((c=a==null?void 0:a._$AO)==null||c.call(a,!1),i===void 0?a=void 0:(a=new i(r),a._$AT(r,t,o)),o!==void 0?(t._$Co??(t._$Co=[]))[o]=a:t._$Cl=a),a!==void 0&&(e=U(r,a._$AS(r,e.values),a,o)),e}class Ht{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,a=((e==null?void 0:e.creationScope)??z).importNode(t,!0);R.currentNode=a;let i=R.nextNode(),s=0,c=0,n=o[0];for(;n!==void 0;){if(s===n.index){let l;n.type===2?l=new q(i,i.nextSibling,this,e):n.type===1?l=new n.ctor(i,n.name,n.strings,this,e):n.type===6&&(l=new Vt(i,this,e)),this._$AV.push(l),n=o[++c]}s!==(n==null?void 0:n.index)&&(i=R.nextNode(),s++)}return R.currentNode=z,a}p(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class q{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,o,a){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=U(this,e,t),F(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==L&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Tt(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==b&&F(this._$AH)?this._$AA.nextSibling.data=e:this.T(z.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=D.createElement(Ge(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===a)this._$AH.p(t);else{const s=new Ht(a,this),c=s.u(this.options);s.p(t),this.T(c),this._$AH=s}}_$AC(e){let t=Se.get(e.strings);return t===void 0&&Se.set(e.strings,t=new D(e)),t}k(e){Xe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,a=0;for(const i of e)a===t.length?t.push(o=new q(this.S(B()),this.S(B()),this,this.options)):o=t[a],o._$AI(i),a++;a<t.length&&(this._$AR(o&&o._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,t);e&&e!==this._$AB;){const a=e.nextSibling;e.remove(),e=a}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class oe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,a,i){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=b}_$AI(e,t=this,o,a){const i=this.strings;let s=!1;if(i===void 0)e=U(this,e,t,0),s=!F(e)||e!==this._$AH&&e!==L,s&&(this._$AH=e);else{const c=e;let n,l;for(e=i[0],n=0;n<i.length-1;n++)l=U(this,c[o+n],t,n),l===L&&(l=this._$AH[n]),s||(s=!F(l)||l!==this._$AH[n]),l===b?e=b:e!==b&&(e+=(l??"")+i[n+1]),this._$AH[n]=l}s&&!a&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Bt extends oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}}class Ft extends oe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}}class Dt extends oe{constructor(e,t,o,a,i){super(e,t,o,a,i),this.type=5}_$AI(e,t=this){if((e=U(this,e,t,0)??b)===L)return;const o=this._$AH,a=e===b&&o!==b||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==b&&(o===b||a);a&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Vt{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){U(this,e)}}const se=M.litHtmlPolyfillSupport;se==null||se(D,q),(M.litHtmlVersions??(M.litHtmlVersions=[])).push("3.1.2");const qt=(r,e,t)=>{const o=(t==null?void 0:t.renderBefore)??e;let a=o._$litPart$;if(a===void 0){const i=(t==null?void 0:t.renderBefore)??null;o._$litPart$=a=new q(e.insertBefore(B(),i),i,void 0,t??{})}return a._$AI(r),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class f extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return L}}var De;f._$litElement$=!0,f.finalized=!0,(De=globalThis.litElementHydrateSupport)==null||De.call(globalThis,{LitElement:f});const le=globalThis.litElementPolyfillSupport;le==null||le({LitElement:f});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");const _=x` /*
! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured sans font-family by default.
5. Use the user's configured sans font-feature-settings by default.
6. Use the user's configured sans font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from html so users can set them as a class directly on the html element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured mono font-family by default.
2. Use the user's configured mono font-feature-settings by default.
3. Use the user's configured mono font-variation-settings by default.
4. Correct the odd em font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent sub and sup elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional :invalid styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to inherit in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements display: block by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add vertical-align: middle to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.container {
  width: 100%;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.not-sr-only {
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

.pointer-events-none {
  pointer-events: none;
}

.pointer-events-auto {
  pointer-events: auto;
}

.\\!visible {
  visibility: visible !important;
}

.visible {
  visibility: visible;
}

.invisible {
  visibility: hidden;
}

.collapse {
  visibility: collapse;
}

.static {
  position: static;
}

.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.\\!relative {
  position: relative !important;
}

.relative {
  position: relative;
}

.sticky {
  position: sticky;
}

.-inset-1 {
  inset: -0.25rem;
}

.end-1 {
  inset-inline-end: 0.25rem;
}

.isolate {
  isolation: isolate;
}

.isolation-auto {
  isolation: auto;
}

.z-10 {
  z-index: 10;
}

.col-span-1 {
  grid-column: span 1 / span 1;
}

.col-span-3 {
  grid-column: span 3 / span 3;
}

.col-span-4 {
  grid-column: span 4 / span 4;
}

.float-start {
  float: inline-start;
}

.float-end {
  float: inline-end;
}

.float-right {
  float: right;
}

.float-left {
  float: left;
}

.float-none {
  float: none;
}

.clear-start {
  clear: inline-start;
}

.clear-end {
  clear: inline-end;
}

.clear-left {
  clear: left;
}

.clear-right {
  clear: right;
}

.clear-both {
  clear: both;
}

.clear-none {
  clear: none;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.ms-2 {
  margin-inline-start: 0.5rem;
}

.ms-auto {
  margin-inline-start: auto;
}

.mt-0 {
  margin-top: 0px;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-4 {
  margin-top: 1rem;
}

.box-border {
  box-sizing: border-box;
}

.box-content {
  box-sizing: content-box;
}

.line-clamp-none {
  overflow: visible;
  display: block;
  -webkit-box-orient: horizontal;
  -webkit-line-clamp: none;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.table {
  display: table;
}

.inline-table {
  display: inline-table;
}

.table-caption {
  display: table-caption;
}

.table-cell {
  display: table-cell;
}

.table-column {
  display: table-column;
}

.table-column-group {
  display: table-column-group;
}

.table-footer-group {
  display: table-footer-group;
}

.table-header-group {
  display: table-header-group;
}

.table-row-group {
  display: table-row-group;
}

.table-row {
  display: table-row;
}

.flow-root {
  display: flow-root;
}

.grid {
  display: grid;
}

.inline-grid {
  display: inline-grid;
}

.contents {
  display: contents;
}

.list-item {
  display: list-item;
}

.hidden {
  display: none;
}

.h-10 {
  height: 2.5rem;
}

.h-12 {
  height: 3rem;
}

.h-2 {
  height: 0.5rem;
}

.h-3 {
  height: 0.75rem;
}

.h-4 {
  height: 1rem;
}

.h-5 {
  height: 1.25rem;
}

.h-8 {
  height: 2rem;
}

.h-\\[100vh\\] {
  height: 100vh;
}

.h-\\[200px\\] {
  height: 200px;
}

.h-\\[78vh\\] {
  height: 78vh;
}

.h-\\[89vh\\] {
  height: 89vh;
}

.h-\\[90vh\\] {
  height: 90vh;
}

.h-auto {
  height: auto;
}

.h-full {
  height: 100%;
}

.w-10 {
  width: 2.5rem;
}

.w-2 {
  width: 0.5rem;
}

.w-3 {
  width: 0.75rem;
}

.w-4 {
  width: 1rem;
}

.w-44 {
  width: 11rem;
}

.w-5 {
  width: 1.25rem;
}

.w-\\[100vw\\] {
  width: 100vw;
}

.w-\\[200px\\] {
  width: 200px;
}

.w-\\[99vw\\] {
  width: 99vw;
}

.w-\\[this-is\\\\\\\\\\] {
  width: this-is\\\\;
}

.w-\\[this-is\\] {
  width: this-is;
}

.w-\\[weird-and-invalid\\] {
  width: weird-and-invalid;
}

.w-auto {
  width: auto;
}

.w-full {
  width: 100%;
}

.max-w-screen-xl {
  max-width: 1280px;
}

.max-w-sm {
  max-width: 24rem;
}

.flex-shrink {
  flex-shrink: 1;
}

.shrink {
  flex-shrink: 1;
}

.flex-grow {
  flex-grow: 1;
}

.grow {
  flex-grow: 1;
}

.table-auto {
  table-layout: auto;
}

.table-fixed {
  table-layout: fixed;
}

.caption-top {
  caption-side: top;
}

.caption-bottom {
  caption-side: bottom;
}

.border-collapse {
  border-collapse: collapse;
}

.border-separate {
  border-collapse: separate;
}

.\\!transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform-cpu {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform-gpu {
  transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform-none {
  transform: none;
}

.cursor-pointer {
  cursor: pointer;
}

.touch-auto {
  touch-action: auto;
}

.touch-none {
  touch-action: none;
}

.touch-pan-x {
  --tw-pan-x: pan-x;
  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
}

.touch-pan-left {
  --tw-pan-x: pan-left;
  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
}

.touch-pan-right {
  --tw-pan-x: pan-right;
  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
}

.touch-pan-y {
  --tw-pan-y: pan-y;
  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
}

.touch-pan-up {
  --tw-pan-y: pan-up;
  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
}

.touch-pan-down {
  --tw-pan-y: pan-down;
  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
}

.touch-pinch-zoom {
  --tw-pinch-zoom: pinch-zoom;
  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
}

.touch-manipulation {
  touch-action: manipulation;
}

.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.select-text {
  -webkit-user-select: text;
     -moz-user-select: text;
          user-select: text;
}

.select-all {
  -webkit-user-select: all;
     -moz-user-select: all;
          user-select: all;
}

.select-auto {
  -webkit-user-select: auto;
     -moz-user-select: auto;
          user-select: auto;
}

.resize-none {
  resize: none;
}

.resize-y {
  resize: vertical;
}

.resize-x {
  resize: horizontal;
}

.resize {
  resize: both;
}

.snap-none {
  scroll-snap-type: none;
}

.snap-x {
  scroll-snap-type: x var(--tw-scroll-snap-strictness);
}

.snap-y {
  scroll-snap-type: y var(--tw-scroll-snap-strictness);
}

.snap-both {
  scroll-snap-type: both var(--tw-scroll-snap-strictness);
}

.snap-mandatory {
  --tw-scroll-snap-strictness: mandatory;
}

.snap-proximity {
  --tw-scroll-snap-strictness: proximity;
}

.snap-start {
  scroll-snap-align: start;
}

.snap-end {
  scroll-snap-align: end;
}

.snap-center {
  scroll-snap-align: center;
}

.snap-align-none {
  scroll-snap-align: none;
}

.snap-normal {
  scroll-snap-stop: normal;
}

.snap-always {
  scroll-snap-stop: always;
}

.list-inside {
  list-style-position: inside;
}

.list-outside {
  list-style-position: outside;
}

.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

.appearance-auto {
  -webkit-appearance: auto;
     -moz-appearance: auto;
          appearance: auto;
}

.break-before-auto {
  -moz-column-break-before: auto;
       break-before: auto;
}

.break-before-avoid {
  -moz-column-break-before: avoid;
       break-before: avoid;
}

.break-before-all {
  -moz-column-break-before: all;
       break-before: all;
}

.break-before-avoid-page {
  -moz-column-break-before: avoid;
       break-before: avoid-page;
}

.break-before-page {
  -moz-column-break-before: page;
       break-before: page;
}

.break-before-left {
  -moz-column-break-before: left;
       break-before: left;
}

.break-before-right {
  -moz-column-break-before: right;
       break-before: right;
}

.break-before-column {
  -moz-column-break-before: column;
       break-before: column;
}

.break-inside-auto {
  -moz-column-break-inside: auto;
       break-inside: auto;
}

.break-inside-avoid {
  -moz-column-break-inside: avoid;
       break-inside: avoid;
}

.break-inside-avoid-page {
  break-inside: avoid-page;
}

.break-inside-avoid-column {
  -moz-column-break-inside: avoid;
       break-inside: avoid-column;
}

.break-after-auto {
  -moz-column-break-after: auto;
       break-after: auto;
}

.break-after-avoid {
  -moz-column-break-after: avoid;
       break-after: avoid;
}

.break-after-all {
  -moz-column-break-after: all;
       break-after: all;
}

.break-after-avoid-page {
  -moz-column-break-after: avoid;
       break-after: avoid-page;
}

.break-after-page {
  -moz-column-break-after: page;
       break-after: page;
}

.break-after-left {
  -moz-column-break-after: left;
       break-after: left;
}

.break-after-right {
  -moz-column-break-after: right;
       break-after: right;
}

.break-after-column {
  -moz-column-break-after: column;
       break-after: column;
}

.grid-flow-row {
  grid-auto-flow: row;
}

.grid-flow-col {
  grid-auto-flow: column;
}

.grid-flow-dense {
  grid-auto-flow: dense;
}

.grid-flow-row-dense {
  grid-auto-flow: row dense;
}

.grid-flow-col-dense {
  grid-auto-flow: column dense;
}

.grid-cols-10 {
  grid-template-columns: repeat(10, minmax(0, 1fr));
}

.grid-cols-12 {
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.grid-cols-9 {
  grid-template-columns: repeat(9, minmax(0, 1fr));
}

.flex-row {
  flex-direction: row;
}

.flex-row-reverse {
  flex-direction: row-reverse;
}

.flex-col {
  flex-direction: column;
}

.flex-col-reverse {
  flex-direction: column-reverse;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse;
}

.flex-nowrap {
  flex-wrap: nowrap;
}

.place-content-center {
  place-content: center;
}

.place-content-start {
  place-content: start;
}

.place-content-end {
  place-content: end;
}

.place-content-between {
  place-content: space-between;
}

.place-content-around {
  place-content: space-around;
}

.place-content-evenly {
  place-content: space-evenly;
}

.place-content-baseline {
  place-content: baseline;
}

.place-content-stretch {
  place-content: stretch;
}

.place-items-start {
  place-items: start;
}

.place-items-end {
  place-items: end;
}

.place-items-center {
  place-items: center;
}

.place-items-baseline {
  place-items: baseline;
}

.place-items-stretch {
  place-items: stretch;
}

.content-normal {
  align-content: normal;
}

.content-center {
  align-content: center;
}

.content-start {
  align-content: flex-start;
}

.content-end {
  align-content: flex-end;
}

.content-between {
  align-content: space-between;
}

.content-around {
  align-content: space-around;
}

.content-evenly {
  align-content: space-evenly;
}

.content-baseline {
  align-content: baseline;
}

.content-stretch {
  align-content: stretch;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.items-baseline {
  align-items: baseline;
}

.items-stretch {
  align-items: stretch;
}

.justify-normal {
  justify-content: normal;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.justify-evenly {
  justify-content: space-evenly;
}

.justify-stretch {
  justify-content: stretch;
}

.justify-items-start {
  justify-items: start;
}

.justify-items-end {
  justify-items: end;
}

.justify-items-center {
  justify-items: center;
}

.justify-items-stretch {
  justify-items: stretch;
}

.gap-2 {
  gap: 0.5rem;
}

.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2rem * var(--tw-space-x-reverse));
  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}

.space-y-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 1;
}

.space-x-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 1;
}

.divide-x > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
}

.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}

.divide-y-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 1;
}

.divide-x-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 1;
}

.divide-solid > :not([hidden]) ~ :not([hidden]) {
  border-style: solid;
}

.divide-dashed > :not([hidden]) ~ :not([hidden]) {
  border-style: dashed;
}

.divide-dotted > :not([hidden]) ~ :not([hidden]) {
  border-style: dotted;
}

.divide-double > :not([hidden]) ~ :not([hidden]) {
  border-style: double;
}

.divide-none > :not([hidden]) ~ :not([hidden]) {
  border-style: none;
}

.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-divide-opacity));
}

.divide-gray-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-divide-opacity));
}

.place-self-auto {
  place-self: auto;
}

.place-self-start {
  place-self: start;
}

.place-self-end {
  place-self: end;
}

.place-self-center {
  place-self: center;
}

.place-self-stretch {
  place-self: stretch;
}

.self-auto {
  align-self: auto;
}

.self-start {
  align-self: flex-start;
}

.self-end {
  align-self: flex-end;
}

.self-center {
  align-self: center;
}

.self-stretch {
  align-self: stretch;
}

.self-baseline {
  align-self: baseline;
}

.justify-self-auto {
  justify-self: auto;
}

.justify-self-start {
  justify-self: start;
}

.justify-self-end {
  justify-self: end;
}

.justify-self-center {
  justify-self: center;
}

.justify-self-stretch {
  justify-self: stretch;
}

.overflow-auto {
  overflow: auto;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-clip {
  overflow: clip;
}

.overflow-visible {
  overflow: visible;
}

.overflow-scroll {
  overflow: scroll;
}

.overflow-x-auto {
  overflow-x: auto;
}

.overflow-y-auto {
  overflow-y: auto;
}

.overflow-x-hidden {
  overflow-x: hidden;
}

.overflow-y-hidden {
  overflow-y: hidden;
}

.overflow-x-clip {
  overflow-x: clip;
}

.overflow-y-clip {
  overflow-y: clip;
}

.overflow-x-visible {
  overflow-x: visible;
}

.overflow-y-visible {
  overflow-y: visible;
}

.overflow-x-scroll {
  overflow-x: scroll;
}

.overflow-y-scroll {
  overflow-y: scroll;
}

.overscroll-auto {
  overscroll-behavior: auto;
}

.overscroll-contain {
  overscroll-behavior: contain;
}

.overscroll-none {
  overscroll-behavior: none;
}

.overscroll-y-auto {
  overscroll-behavior-y: auto;
}

.overscroll-y-contain {
  overscroll-behavior-y: contain;
}

.overscroll-y-none {
  overscroll-behavior-y: none;
}

.overscroll-x-auto {
  overscroll-behavior-x: auto;
}

.overscroll-x-contain {
  overscroll-behavior-x: contain;
}

.overscroll-x-none {
  overscroll-behavior-x: none;
}

.scroll-auto {
  scroll-behavior: auto;
}

.scroll-smooth {
  scroll-behavior: smooth;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.overflow-ellipsis {
  text-overflow: ellipsis;
}

.text-ellipsis {
  text-overflow: ellipsis;
}

.text-clip {
  text-overflow: clip;
}

.hyphens-none {
  -webkit-hyphens: none;
          hyphens: none;
}

.hyphens-manual {
  -webkit-hyphens: manual;
          hyphens: manual;
}

.hyphens-auto {
  -webkit-hyphens: auto;
          hyphens: auto;
}

.whitespace-normal {
  white-space: normal;
}

.whitespace-nowrap {
  white-space: nowrap;
}

.whitespace-pre {
  white-space: pre;
}

.whitespace-pre-line {
  white-space: pre-line;
}

.whitespace-pre-wrap {
  white-space: pre-wrap;
}

.whitespace-break-spaces {
  white-space: break-spaces;
}

.text-wrap {
  text-wrap: wrap;
}

.text-nowrap {
  text-wrap: nowrap;
}

.text-balance {
  text-wrap: balance;
}

.text-pretty {
  text-wrap: pretty;
}

.break-normal {
  overflow-wrap: normal;
  word-break: normal;
}

.break-words {
  overflow-wrap: break-word;
}

.break-all {
  word-break: break-all;
}

.break-keep {
  word-break: keep-all;
}

.rounded {
  border-radius: 0.25rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-b {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.rounded-e {
  border-start-end-radius: 0.25rem;
  border-end-end-radius: 0.25rem;
}

.rounded-l {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.rounded-r {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.rounded-s {
  border-start-start-radius: 0.25rem;
  border-end-start-radius: 0.25rem;
}

.rounded-t {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.rounded-bl {
  border-bottom-left-radius: 0.25rem;
}

.rounded-br {
  border-bottom-right-radius: 0.25rem;
}

.rounded-ee {
  border-end-end-radius: 0.25rem;
}

.rounded-es {
  border-end-start-radius: 0.25rem;
}

.rounded-se {
  border-start-end-radius: 0.25rem;
}

.rounded-ss {
  border-start-start-radius: 0.25rem;
}

.rounded-tl {
  border-top-left-radius: 0.25rem;
}

.rounded-tr {
  border-top-right-radius: 0.25rem;
}

.border {
  border-width: 1px;
}

.border-0 {
  border-width: 0px;
}

.border-x {
  border-left-width: 1px;
  border-right-width: 1px;
}

.border-y {
  border-top-width: 1px;
  border-bottom-width: 1px;
}

.border-b {
  border-bottom-width: 1px;
}

.border-e {
  border-inline-end-width: 1px;
}

.border-l {
  border-left-width: 1px;
}

.border-r {
  border-right-width: 1px;
}

.border-s {
  border-inline-start-width: 1px;
}

.border-t {
  border-top-width: 1px;
}

.border-solid {
  border-style: solid;
}

.border-dashed {
  border-style: dashed;
}

.border-dotted {
  border-style: dotted;
}

.border-double {
  border-style: double;
}

.border-hidden {
  border-style: hidden;
}

.border-none {
  border-style: none;
}

.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}

.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}

.border-gray-600 {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}

.border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}

.bg-\\[rgb\\(255\\2c 0\\2c 0\\)\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(255 0 0 / var(--tw-bg-opacity));
}

.bg-blue-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(219 234 254 / var(--tw-bg-opacity));
}

.bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 219 254 / var(--tw-bg-opacity));
}

.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}

.bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}

.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}

.bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}

.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}

.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}

.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

.bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}

.bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(21 128 61 / var(--tw-bg-opacity));
}

.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity));
}

.bg-red-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 202 202 / var(--tw-bg-opacity));
}

.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}

.bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(185 28 28 / var(--tw-bg-opacity));
}

.bg-transparent {
  background-color: transparent;
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-yellow-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 249 195 / var(--tw-bg-opacity));
}

.bg-yellow-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(161 98 7 / var(--tw-bg-opacity));
}

.decoration-slice {
  -webkit-box-decoration-break: slice;
          box-decoration-break: slice;
}

.decoration-clone {
  -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
}

.box-decoration-slice {
  -webkit-box-decoration-break: slice;
          box-decoration-break: slice;
}

.box-decoration-clone {
  -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
}

.bg-fixed {
  background-attachment: fixed;
}

.bg-local {
  background-attachment: local;
}

.bg-scroll {
  background-attachment: scroll;
}

.bg-clip-border {
  background-clip: border-box;
}

.bg-clip-padding {
  background-clip: padding-box;
}

.bg-clip-content {
  background-clip: content-box;
}

.bg-clip-text {
  -webkit-background-clip: text;
          background-clip: text;
}

.bg-repeat {
  background-repeat: repeat;
}

.bg-no-repeat {
  background-repeat: no-repeat;
}

.bg-repeat-x {
  background-repeat: repeat-x;
}

.bg-repeat-y {
  background-repeat: repeat-y;
}

.bg-repeat-round {
  background-repeat: round;
}

.bg-repeat-space {
  background-repeat: space;
}

.bg-origin-border {
  background-origin: border-box;
}

.bg-origin-padding {
  background-origin: padding-box;
}

.bg-origin-content {
  background-origin: content-box;
}

.object-contain {
  -o-object-fit: contain;
     object-fit: contain;
}

.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}

.object-fill {
  -o-object-fit: fill;
     object-fit: fill;
}

.object-none {
  -o-object-fit: none;
     object-fit: none;
}

.object-scale-down {
  -o-object-fit: scale-down;
     object-fit: scale-down;
}

.p-0 {
  padding: 0px;
}

.p-2 {
  padding: 0.5rem;
}

.p-2\\.5 {
  padding: 0.625rem;
}

.p-4 {
  padding: 1rem;
}

.p-6 {
  padding: 1.5rem;
}

.p-8 {
  padding: 2rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}

.pt-2 {
  padding-top: 0.5rem;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-justify {
  text-align: justify;
}

.text-start {
  text-align: start;
}

.text-end {
  text-align: end;
}

.align-baseline {
  vertical-align: baseline;
}

.align-top {
  vertical-align: top;
}

.align-middle {
  vertical-align: middle;
}

.align-bottom {
  vertical-align: bottom;
}

.align-text-top {
  vertical-align: text-top;
}

.align-text-bottom {
  vertical-align: text-bottom;
}

.align-sub {
  vertical-align: sub;
}

.align-super {
  vertical-align: super;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.font-bold {
  font-weight: 700;
}

.font-medium {
  font-weight: 500;
}

.font-normal {
  font-weight: 400;
}

.font-semibold {
  font-weight: 600;
}

.uppercase {
  text-transform: uppercase;
}

.lowercase {
  text-transform: lowercase;
}

.capitalize {
  text-transform: capitalize;
}

.normal-case {
  text-transform: none;
}

.italic {
  font-style: italic;
}

.not-italic {
  font-style: normal;
}

.normal-nums {
  font-variant-numeric: normal;
}

.ordinal {
  --tw-ordinal: ordinal;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.slashed-zero {
  --tw-slashed-zero: slashed-zero;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.lining-nums {
  --tw-numeric-figure: lining-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.oldstyle-nums {
  --tw-numeric-figure: oldstyle-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.proportional-nums {
  --tw-numeric-spacing: proportional-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.tabular-nums {
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.diagonal-fractions {
  --tw-numeric-fraction: diagonal-fractions;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.stacked-fractions {
  --tw-numeric-fraction: stacked-fractions;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}

.tracking-tight {
  letter-spacing: -0.025em;
}

.text-\\[\\#336699\\]\\/\\[\\.35\\] {
  color: rgb(51 102 153 / .35);
}

.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}

.text-blue-700 {
  --tw-text-opacity: 1;
  color: rgb(29 78 216 / var(--tw-text-opacity));
}

.text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}

.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}

.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity));
}

.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.underline {
  text-decoration-line: underline;
}

.overline {
  text-decoration-line: overline;
}

.line-through {
  text-decoration-line: line-through;
}

.no-underline {
  text-decoration-line: none;
}

.decoration-solid {
  text-decoration-style: solid;
}

.decoration-double {
  text-decoration-style: double;
}

.decoration-dotted {
  text-decoration-style: dotted;
}

.decoration-dashed {
  text-decoration-style: dashed;
}

.decoration-wavy {
  text-decoration-style: wavy;
}

.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.subpixel-antialiased {
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}

.bg-blend-normal {
  background-blend-mode: normal;
}

.bg-blend-multiply {
  background-blend-mode: multiply;
}

.bg-blend-screen {
  background-blend-mode: screen;
}

.bg-blend-overlay {
  background-blend-mode: overlay;
}

.bg-blend-darken {
  background-blend-mode: darken;
}

.bg-blend-lighten {
  background-blend-mode: lighten;
}

.bg-blend-color-dodge {
  background-blend-mode: color-dodge;
}

.bg-blend-color-burn {
  background-blend-mode: color-burn;
}

.bg-blend-hard-light {
  background-blend-mode: hard-light;
}

.bg-blend-soft-light {
  background-blend-mode: soft-light;
}

.bg-blend-difference {
  background-blend-mode: difference;
}

.bg-blend-exclusion {
  background-blend-mode: exclusion;
}

.bg-blend-hue {
  background-blend-mode: hue;
}

.bg-blend-saturation {
  background-blend-mode: saturation;
}

.bg-blend-color {
  background-blend-mode: color;
}

.bg-blend-luminosity {
  background-blend-mode: luminosity;
}

.mix-blend-normal {
  mix-blend-mode: normal;
}

.mix-blend-multiply {
  mix-blend-mode: multiply;
}

.mix-blend-screen {
  mix-blend-mode: screen;
}

.mix-blend-overlay {
  mix-blend-mode: overlay;
}

.mix-blend-darken {
  mix-blend-mode: darken;
}

.mix-blend-lighten {
  mix-blend-mode: lighten;
}

.mix-blend-color-dodge {
  mix-blend-mode: color-dodge;
}

.mix-blend-color-burn {
  mix-blend-mode: color-burn;
}

.mix-blend-hard-light {
  mix-blend-mode: hard-light;
}

.mix-blend-soft-light {
  mix-blend-mode: soft-light;
}

.mix-blend-difference {
  mix-blend-mode: difference;
}

.mix-blend-exclusion {
  mix-blend-mode: exclusion;
}

.mix-blend-hue {
  mix-blend-mode: hue;
}

.mix-blend-saturation {
  mix-blend-mode: saturation;
}

.mix-blend-color {
  mix-blend-mode: color;
}

.mix-blend-luminosity {
  mix-blend-mode: luminosity;
}

.mix-blend-plus-lighter {
  mix-blend-mode: plus-lighter;
}

.\\!shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}

.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.outline {
  outline-style: solid;
}

.outline-dashed {
  outline-style: dashed;
}

.outline-dotted {
  outline-style: dotted;
}

.outline-double {
  outline-style: double;
}

.ring {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-inset {
  --tw-ring-inset: inset;
}

.ring-offset-gray-800 {
  --tw-ring-offset-color: #1f2937;
}

.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.drop-shadow {
  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.grayscale {
  --tw-grayscale: grayscale(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.invert {
  --tw-invert: invert(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.sepia {
  --tw-sepia: sepia(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.\\!filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.filter-none {
  filter: none;
}

.backdrop-blur {
  --tw-backdrop-blur: blur(8px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-grayscale {
  --tw-backdrop-grayscale: grayscale(100%);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-invert {
  --tw-backdrop-invert: invert(100%);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-sepia {
  --tw-backdrop-sepia: sepia(100%);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-filter {
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.backdrop-filter-none {
  -webkit-backdrop-filter: none;
          backdrop-filter: none;
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.content-\\[\\'this-is-also-valid\\]-weirdly-enough\\'\\] {
  --tw-content: 'this-is-also-valid]-weirdly-enough';
  content: var(--tw-content);
}

.forced-color-adjust-auto {
  forced-color-adjust: auto;
}

.forced-color-adjust-none {
  forced-color-adjust: none;
}

.\\[vite\\:css\\] {
  vite: css;
}

.\\[vite\\:html\\] {
  vite: html;
}

@media (min-width: 640px) {
  .sm\\:container {
    width: 100%;
  }

  @media (min-width: 640px) {
    .sm\\:container {
      max-width: 640px;
    }
  }

  @media (min-width: 768px) {
    .sm\\:container {
      max-width: 768px;
    }
  }

  @media (min-width: 1024px) {
    .sm\\:container {
      max-width: 1024px;
    }
  }

  @media (min-width: 1280px) {
    .sm\\:container {
      max-width: 1280px;
    }
  }

  @media (min-width: 1536px) {
    .sm\\:container {
      max-width: 1536px;
    }
  }
}

.hover\\:bg-blue-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(30 64 175 / var(--tw-bg-opacity));
}

.hover\\:bg-green-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(22 101 52 / var(--tw-bg-opacity));
}

.hover\\:bg-red-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(153 27 27 / var(--tw-bg-opacity));
}

.hover\\:bg-yellow-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(133 77 14 / var(--tw-bg-opacity));
}

.hover\\:font-bold:hover {
  font-weight: 700;
}

.before\\:hover\\:text-center:hover::before {
  content: var(--tw-content);
  text-align: center;
}

.hover\\:before\\:text-center:hover::before {
  content: var(--tw-content);
  text-align: center;
}

.focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(59 130 246 / var(--tw-border-opacity));
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-blue-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));
}

.focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));
}

.focus\\:hover\\:text-center:hover:focus {
  text-align: center;
}

.hover\\:focus\\:text-center:focus:hover {
  text-align: center;
}

@media (min-width: 640px) {
  .sm\\:p-6 {
    padding: 1.5rem;
  }

  .sm\\:underline {
    text-decoration-line: underline;
  }
}

@media (min-width: 768px) {
  .md\\:p-8 {
    padding: 2rem;
  }
}

@media (min-width: 1536px) {
  .\\32xl\\:w-\\[90vw\\] {
    width: 90vw;
  }
}

.rtl\\:space-x-reverse:where([dir="rtl"], [dir="rtl"] *) > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 1;
}

@media (prefers-color-scheme: dark) {
  .dark\\:border-gray-500 {
    --tw-border-opacity: 1;
    border-color: rgb(107 114 128 / var(--tw-border-opacity));
  }

  .dark\\:border-gray-700 {
    --tw-border-opacity: 1;
    border-color: rgb(55 65 81 / var(--tw-border-opacity));
  }

  .dark\\:bg-blue-600 {
    --tw-bg-opacity: 1;
    background-color: rgb(37 99 235 / var(--tw-bg-opacity));
  }

  .dark\\:bg-gray-600 {
    --tw-bg-opacity: 1;
    background-color: rgb(75 85 99 / var(--tw-bg-opacity));
  }

  .dark\\:bg-gray-800 {
    --tw-bg-opacity: 1;
    background-color: rgb(31 41 55 / var(--tw-bg-opacity));
  }

  .dark\\:text-gray-300 {
    --tw-text-opacity: 1;
    color: rgb(209 213 219 / var(--tw-text-opacity));
  }

  .dark\\:text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  .dark\\:placeholder-gray-400::-moz-placeholder {
    --tw-placeholder-opacity: 1;
    color: rgb(156 163 175 / var(--tw-placeholder-opacity));
  }

  .dark\\:placeholder-gray-400::placeholder {
    --tw-placeholder-opacity: 1;
    color: rgb(156 163 175 / var(--tw-placeholder-opacity));
  }

  .dark\\:hover\\:bg-blue-700:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(29 78 216 / var(--tw-bg-opacity));
  }

  .dark\\:focus\\:ring-blue-800:focus {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(30 64 175 / var(--tw-ring-opacity));
  }

  @media (min-width: 1024px) {
    .dark\\:lg\\:hover\\:\\[paint-order\\:markers\\]:hover {
      paint-order: markers;
    }
  }
} `;function Z(r){return r=r||[],Array.isArray(r)?r:[r]}function y(r){return`[Vaadin.Router] ${r}`}function Wt(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const ee="module",te="nomodule",he=[ee,te];function Ce(r){if(!r.match(/.+\.[m]?js$/))throw new Error(y(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function Je(r){if(!r||!v(r.path))throw new Error(y('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!j(r.action)&&!Array.isArray(r.children)&&!j(r.children)&&!re(e)&&!t.some(o=>v(r[o])))throw new Error(y(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(v(e))Ce(e);else if(he.some(o=>o in e))he.forEach(o=>o in e&&Ce(e[o]));else throw new Error(y('Expected route bundle to include either "'+te+'" or "'+ee+'" keys, or both'));r.redirect&&["bundle","component"].forEach(o=>{o in r&&console.warn(y(`Route config "${r.path}" has both "redirect" and "${o}" properties, and "redirect" will always override the latter. Did you mean to only use "${o}"?`))})}function Re(r){Z(r).forEach(e=>Je(e))}function ze(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===ee?t.setAttribute("type",ee):e===te&&t.setAttribute(te,""),t.async=!0),new Promise((o,a)=>{t.onreadystatechange=t.onload=i=>{t.__dynamicImportLoaded=!0,o(i)},t.onerror=i=>{t.parentNode&&t.parentNode.removeChild(t),a(i)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&o()})}function Kt(r){return v(r)?ze(r):Promise.race(he.filter(e=>e in r).map(e=>ze(r[e],e)))}function H(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function re(r){return typeof r=="object"&&!!r}function j(r){return typeof r=="function"}function v(r){return typeof r=="string"}function Qe(r){const e=new Error(y(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const N=new class{};function Xt(r){const e=r.port,t=r.protocol,i=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${i}`}function je(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let c=0;c<t.length;c++){const n=t[c];if(n.nodeName&&n.nodeName.toLowerCase()==="a"){e=n;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Xt(e))!==window.location.origin)return;const{pathname:a,search:i,hash:s}=e;H("go",{pathname:a,search:i,hash:s})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const Yt={activate(){window.document.addEventListener("click",je)},inactivate(){window.document.removeEventListener("click",je)}},Gt=/Trident/.test(navigator.userAgent);Gt&&!j(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function Pe(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:o}=window.location;H("go",{pathname:e,search:t,hash:o})}const Jt={activate(){window.addEventListener("popstate",Pe)},inactivate(){window.removeEventListener("popstate",Pe)}};var O=at,Qt=ge,Zt=or,er=tt,tr=ot,Ze="/",et="./",rr=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function ge(r,e){for(var t=[],o=0,a=0,i="",s=e&&e.delimiter||Ze,c=e&&e.delimiters||et,n=!1,l;(l=rr.exec(r))!==null;){var d=l[0],h=l[1],p=l.index;if(i+=r.slice(a,p),a=p+d.length,h){i+=h[1],n=!0;continue}var u="",S=r[a],vt=l[2],yt=l[3],xt=l[4],W=l[5];if(!n&&i.length){var ae=i.length-1;c.indexOf(i[ae])>-1&&(u=i[ae],i=i.slice(0,ae))}i&&(t.push(i),i="",n=!1);var _t=u!==""&&S!==void 0&&S!==u,kt=W==="+"||W==="*",$t=W==="?"||W==="*",fe=u||s,me=yt||xt;t.push({name:vt||o++,prefix:u,delimiter:fe,optional:$t,repeat:kt,partial:_t,pattern:me?ar(me):"[^"+k(fe)+"]+?"})}return(i||a<r.length)&&t.push(i+r.substr(a)),t}function or(r,e){return tt(ge(r,e))}function tt(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(o,a){for(var i="",s=a&&a.encode||encodeURIComponent,c=0;c<r.length;c++){var n=r[c];if(typeof n=="string"){i+=n;continue}var l=o?o[n.name]:void 0,d;if(Array.isArray(l)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but got array');if(l.length===0){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(d=s(l[h],n),!e[c].test(d))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'"');i+=(h===0?n.prefix:n.delimiter)+d}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(d=s(String(l),n),!e[c].test(d))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but got "'+d+'"');i+=n.prefix+d;continue}if(n.optional){n.partial&&(i+=n.prefix);continue}throw new TypeError('Expected "'+n.name+'" to be '+(n.repeat?"an array":"a string"))}return i}}function k(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ar(r){return r.replace(/([=!:$/()])/g,"\\$1")}function rt(r){return r&&r.sensitive?"":"i"}function ir(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var o=0;o<t.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function nr(r,e,t){for(var o=[],a=0;a<r.length;a++)o.push(at(r[a],e,t).source);return new RegExp("(?:"+o.join("|")+")",rt(t))}function sr(r,e,t){return ot(ge(r,t),e,t)}function ot(r,e,t){t=t||{};for(var o=t.strict,a=t.start!==!1,i=t.end!==!1,s=k(t.delimiter||Ze),c=t.delimiters||et,n=[].concat(t.endsWith||[]).map(k).concat("$").join("|"),l=a?"^":"",d=r.length===0,h=0;h<r.length;h++){var p=r[h];if(typeof p=="string")l+=k(p),d=h===r.length-1&&c.indexOf(p[p.length-1])>-1;else{var u=p.repeat?"(?:"+p.pattern+")(?:"+k(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;e&&e.push(p),p.optional?p.partial?l+=k(p.prefix)+"("+u+")?":l+="(?:"+k(p.prefix)+"("+u+"))?":l+=k(p.prefix)+"("+u+")"}}return i?(o||(l+="(?:"+s+")?"),l+=n==="$"?"$":"(?="+n+")"):(o||(l+="(?:"+s+"(?="+n+"))?"),d||(l+="(?="+s+"|"+n+")")),new RegExp(l,rt(t))}function at(r,e,t){return r instanceof RegExp?ir(r,e):Array.isArray(r)?nr(r,e,t):sr(r,e,t)}O.parse=Qt;O.compile=Zt;O.tokensToFunction=er;O.tokensToRegExp=tr;const{hasOwnProperty:lr}=Object.prototype,pe=new Map;pe.set("|false",{keys:[],pattern:/(?:)/});function Ne(r){try{return decodeURIComponent(r)}catch{return r}}function cr(r,e,t,o,a){t=!!t;const i=`${r}|${t}`;let s=pe.get(i);if(!s){const l=[];s={keys:l,pattern:O(r,l,{end:t,strict:r===""})},pe.set(i,s)}const c=s.pattern.exec(e);if(!c)return null;const n=Object.assign({},a);for(let l=1;l<c.length;l++){const d=s.keys[l-1],h=d.name,p=c[l];(p!==void 0||!lr.call(n,h))&&(d.repeat?n[h]=p?p.split(d.delimiter).map(Ne):[]:n[h]=p&&Ne(p))}return{path:c[0],keys:(o||[]).concat(s.keys),params:n}}function it(r,e,t,o,a){let i,s,c=0,n=r.path||"";return n.charAt(0)==="/"&&(t&&(n=n.substr(1)),t=!0),{next(l){if(r===l)return{done:!0};const d=r.__children=r.__children||r.children;if(!i&&(i=cr(n,e,!d,o,a),i))return{done:!1,value:{route:r,keys:i.keys,params:i.params,path:i.path}};if(i&&d)for(;c<d.length;){if(!s){const p=d[c];p.parent=r;let u=i.path.length;u>0&&e.charAt(u)==="/"&&(u+=1),s=it(p,e.substr(u),t,i.keys,i.params)}const h=s.next(l);if(!h.done)return{done:!1,value:h.value};s=null,c++}return{done:!0}}}}function dr(r){if(j(r.route.action))return r.route.action(r)}function hr(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function pr(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function ur(r,e){const{route:t,path:o}=e;if(t&&!t.__synthetic){const a={path:o,route:t};if(!r.chain)r.chain=[];else if(t.parent){let i=r.chain.length;for(;i--&&r.chain[i].route&&r.chain[i].route!==t.parent;)r.chain.pop()}r.chain.push(a)}}class V{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||dr,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){Re(e);const t=[...Z(e)];this.root.__children=t}addRoutes(e){return Re(e),this.root.__children.push(...Z(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,v(e)?{pathname:e}:e),o=it(this.root,this.__normalizePathname(t.pathname),this.baseUrl),a=this.resolveRoute;let i=null,s=null,c=t;function n(l,d=i.value.route,h){const p=h===null&&i.value.route;return i=s||o.next(p),s=null,!l&&(i.done||!hr(d,i.value.route))?(s=i,Promise.resolve(N)):i.done?Promise.reject(Qe(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,i.value),ur(c,i.value),Promise.resolve(a(c)).then(u=>u!=null&&u!==N?(c.result=u.result||u,c):n(l,d,u)))}return t.next=n,Promise.resolve().then(()=>n(!0,this.root)).catch(l=>{const d=pr(c);if(l?console.warn(d):l=new Error(d),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,o=this.constructor.__createUrl(e,t).href;if(o.slice(0,t.length)===t)return o.slice(t.length)}}V.pathToRegexp=O;const{pathToRegexp:Le}=V,Ue=new Map;function nt(r,e,t){const o=e.name||e.component;if(o&&(r.has(o)?r.get(o).push(e):r.set(o,[e])),Array.isArray(t))for(let a=0;a<t.length;a++){const i=t[a];i.parent=e,nt(r,i,i.__children||i.children)}}function Oe(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function Te(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function br(r,e={}){if(!(r instanceof V))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(o,a)=>{let i=Oe(t,o);if(!i&&(t.clear(),nt(t,r.root,r.root.__children),i=Oe(t,o),!i))throw new Error(`Route "${o}" not found`);let s=Ue.get(i.fullPath);if(!s){let n=Te(i),l=i.parent;for(;l;){const u=Te(l);u&&(n=u.replace(/\/$/,"")+"/"+n.replace(/^\//,"")),l=l.parent}const d=Le.parse(n),h=Le.tokensToFunction(d),p=Object.create(null);for(let u=0;u<d.length;u++)v(d[u])||(p[d[u].name]=!0);s={toPath:h,keys:p},Ue.set(n,s),i.fullPath=n}let c=s.toPath(a,e)||"/";if(e.stringifyQueryParams&&a){const n={},l=Object.keys(a);for(let h=0;h<l.length;h++){const p=l[h];s.keys[p]||(n[p]=a[p])}const d=e.stringifyQueryParams(n);d&&(c+=d.charAt(0)==="?"?d:`?${d}`)}return c}}let Ie=[];function gr(r){Ie.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),Ie=r}const fr=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},mr=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function Me(r,e){return r.classList.add(e),new Promise(t=>{if(fr(r)){const o=r.getBoundingClientRect(),a=`height: ${o.bottom-o.top}px; width: ${o.right-o.left}px`;r.setAttribute("style",`position: absolute; ${a}`),mr(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const wr=256;function ce(r){return r!=null}function vr(r){const e=Object.assign({},r);return delete e.next,e}function w({pathname:r="",search:e="",hash:t="",chain:o=[],params:a={},redirectFrom:i,resolver:s},c){const n=o.map(l=>l.route);return{baseUrl:s&&s.baseUrl||"",pathname:r,search:e,hash:t,routes:n,route:c||n.length&&n[n.length-1]||null,params:a,redirectFrom:i,getUrl:(l={})=>G(E.pathToRegexp.compile(st(n))(Object.assign({},a,l)),s)}}function He(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function yr(r,e){e.location=w(r);const t=r.chain.map(o=>o.route).indexOf(r.route);return r.chain[t].element=e,e}function Y(r,e,t){if(j(r))return r.apply(t,e)}function Be(r,e,t){return o=>{if(o&&(o.cancel||o.redirect))return o;if(t)return Y(t[r],e,t)}}function xr(r,e){if(!Array.isArray(r)&&!re(r))throw new Error(y(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=Z(r);for(let o=0;o<t.length;o++)Je(t[o]),e.__children.push(t[o])}function K(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function G(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function st(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class E extends V{constructor(e,t){const o=document.head.querySelector("base"),a=o&&o.getAttribute("href");super([],Object.assign({baseUrl:a&&V.__createUrl(a,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=s=>this.__resolveRoute(s);const i=E.NavigationTrigger;E.setTriggers.apply(E,Object.keys(i).map(s=>i[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=w({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let o=Promise.resolve();j(t.children)&&(o=o.then(()=>t.children(vr(e))).then(i=>{!ce(i)&&!j(t.children)&&(i=t.children),xr(i,t)}));const a={redirect:i=>He(e,i),component:i=>{const s=document.createElement(i);return this.__createdByRouter.set(s,!0),s}};return o.then(()=>{if(this.__isLatestRender(e))return Y(t.action,[e,a],t)}).then(i=>{if(ce(i)&&(i instanceof HTMLElement||i.redirect||i===N))return i;if(v(t.redirect))return a.redirect(t.redirect);if(t.bundle)return Kt(t.bundle).then(()=>{},()=>{throw new Error(y(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(i=>{if(ce(i))return i;if(v(t.component))return a.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const o=++this.__lastStartedRenderId,a=Object.assign({search:"",hash:""},v(e)?{pathname:e}:e,{__renderId:o});return this.ready=this.resolve(a).then(i=>this.__fullyResolveChain(i)).then(i=>{if(this.__isLatestRender(i)){const s=this.__previousContext;if(i===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=w(i),t&&this.__updateBrowserHistory(i,o===1),H("location-changed",{router:this,location:this.location}),i.__skipAttach)return this.__copyUnchangedElements(i,s),this.__previousContext=i,this.location;this.__addAppearingContent(i,s);const c=this.__animateIfNeeded(i);return this.__runOnAfterEnterCallbacks(i),this.__runOnAfterLeaveCallbacks(i,s),c.then(()=>{if(this.__isLatestRender(i))return this.__removeDisappearingContent(),this.__previousContext=i,this.location})}}).catch(i=>{if(o===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(a),K(this.__outlet&&this.__outlet.children),this.location=w(Object.assign(a,{resolver:this})),H("error",Object.assign({router:this,error:i},a)),i}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(o=>{const i=o!==t?o:e,c=G(st(o.chain),o.resolver)===o.pathname,n=(l,d=l.route,h)=>l.next(void 0,d,h).then(p=>p===null||p===N?c?l:d.parent!==null?n(l,d.parent,p):p:p);return n(o).then(l=>{if(l===null||l===N)throw Qe(i);return l&&l!==N&&l!==o?this.__fullyResolveChain(i,l):this.__amendWithOnBeforeCallbacks(o)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(yr(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(o=>this.__findComponentContextAfterAllRedirects(o)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(y(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Wt(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},o=t.chain||[],a=e.chain;let i=Promise.resolve();const s=()=>({cancel:!0}),c=n=>He(e,n);if(e.__divergedChainIndex=0,e.__skipAttach=!1,o.length){for(let n=0;n<Math.min(o.length,a.length)&&!(o[n].route!==a[n].route||o[n].path!==a[n].path&&o[n].element!==a[n].element||!this.__isReusableElement(o[n].element,a[n].element));n=++e.__divergedChainIndex);if(e.__skipAttach=a.length===o.length&&e.__divergedChainIndex==a.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let n=a.length-1;n>=0;n--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:s},o[n]);for(let n=0;n<a.length;n++)i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:s,redirect:c},a[n]),o[n].element.location=w(e,o[n].route)}else for(let n=o.length-1;n>=e.__divergedChainIndex;n--)i=this.__runOnBeforeLeaveCallbacks(i,e,{prevent:s},o[n])}if(!e.__skipAttach)for(let n=0;n<a.length;n++)n<e.__divergedChainIndex?n<o.length&&o[n].element&&(o[n].element.location=w(e,o[n].route)):(i=this.__runOnBeforeEnterCallbacks(i,e,{prevent:s,redirect:c},a[n]),a[n].element&&(a[n].element.location=w(e,a[n].route)));return i.then(n=>{if(n){if(n.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(n.redirect)return this.__redirect(n.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,o,a){const i=w(t);return e.then(s=>{if(this.__isLatestRender(t))return Be("onBeforeLeave",[i,o,this],a.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(e,t,o,a){const i=w(t,a.route);return e.then(s=>{if(this.__isLatestRender(t))return Be("onBeforeEnter",[i,o,this],a.element)(s)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,o){if(t>wr)throw new Error(y(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:o})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(y(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:o=""},a){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==o){const i=a?"replaceState":"pushState";window.history[i](null,document.title,e+t+o),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let o=this.__outlet;for(let a=0;a<e.__divergedChainIndex;a++){const i=t&&t.chain[a].element;if(i)if(i.parentNode===o)e.chain[a].element=i,o=i;else break}return o}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const o=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(o.children).filter(i=>this.__addedByRouter.get(i)&&i!==e.result);let a=o;for(let i=e.__divergedChainIndex;i<e.chain.length;i++){const s=e.chain[i].element;s&&(a.appendChild(s),this.__addedByRouter.set(s,!0),a===o&&this.__appearingContent.push(s),a=s)}}__removeDisappearingContent(){this.__disappearingContent&&K(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(K(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let o=t.chain.length-1;o>=e.__divergedChainIndex&&this.__isLatestRender(e);o--){const a=t.chain[o].element;if(a)try{const i=w(e);Y(a.onAfterLeave,[i,{},t.resolver],a)}finally{this.__disappearingContent.indexOf(a)>-1&&K(a.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const o=e.chain[t].element||{},a=w(e,e.chain[t].route);Y(o.onAfterEnter,[a,{},e.resolver],o)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],o=(this.__appearingContent||[])[0],a=[],i=e.chain;let s;for(let c=i.length;c>0;c--)if(i[c-1].route.animate){s=i[c-1].route.animate;break}if(t&&o&&s){const c=re(s)&&s.leave||"leaving",n=re(s)&&s.enter||"entering";a.push(Me(t,c)),a.push(Me(o,n))}return Promise.all(a).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:o,hash:a}=e?e.detail:window.location;v(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:o,hash:a},!0))}static setTriggers(...e){gr(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=br(this)),G(this.__urlForName(e,t),this)}urlForPath(e,t){return G(E.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:o,hash:a}=v(e)?this.__createUrl(e,"http://a"):e;return H("go",{pathname:t,search:o,hash:a})}}const _r=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,J=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function kr(){function r(){return!0}return lt(r)}function $r(){try{return Er()?!0:Ar()?J?!Sr():!kr():!1}catch{return!1}}function Er(){return localStorage.getItem("vaadin.developmentmode.force")}function Ar(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Sr(){return!!(J&&Object.keys(J).map(e=>J[e]).filter(e=>e.productionMode).length>0)}function lt(r,e){if(typeof r!="function")return;const t=_r.exec(r.toString());if(t)try{r=new Function(t[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return r(e)}window.Vaadin=window.Vaadin||{};const Fe=function(r,e){if(window.Vaadin.developmentMode)return lt(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=$r());function Cr(){}const Rr=function(){if(typeof Fe=="function")return Fe(Cr)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Rr();E.NavigationTrigger={POPSTATE:Jt,CLICK:Yt};class ct extends f{static get properties(){return{}}constructor(){super()}logout(){localStorage.removeItem("namePlayer"),localStorage.removeItem("score"),localStorage.removeItem("level");var e=document.createElement("a");e.href="/home",document.body.appendChild(e),e.click()}render(){return g`
    

<nav class="bg-white border-gray-200 ">
<div class="w-full flex flex-wrap items-center justify-between mx-auto p-4">
  <span class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="./logo_game.png" class="h-8" alt="logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Memory Cards</span>
  </span>

  <span class="cursor-pointer" @click="${this.logout}">
    <img src="./logout.png" class="h-8" alt="logout" />
  </span> 
 
</div>
</nav>

    `}}m(ct,"styles",[x``,_]);window.customElements.define("navbar-component",ct);class dt extends f{static get properties(){return{}}constructor(){super()}selectLevel(e){localStorage.setItem("level",e.target.value);const t=new CustomEvent("selectLevel",{detail:e.target.value,bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return g`
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="text-center">
      <h5 class="text-xl font-medium text-gray-900 dark:text-white">Level</h5>
    </div>

    <div class="pt-2">
        <form class="space-y-6" action="#">
        <button @click="${this.selectLevel}" type="button" class="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4   font-medium rounded-lg text-sm px-5 py-2.5 text-center" value="easy">Easy</button>
        <button @click="${this.selectLevel}" type="button" class="w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center" value="medium">Medium</button>
        <button @click="${this.selectLevel}" type="button" class="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center" value="hard">Hard</button>
        </form>
    </div>
</div>
    `}}m(dt,"styles",[x``,_]);window.customElements.define("level-selection",dt);class ht extends f{static get properties(){return{playerName:{type:String},score:{type:Number}}}constructor(){super(),this.playerName="",this.score=Number(localStorage.getItem("score"))?Number(localStorage.getItem("score")):0}selectLevel(e){localStorage.setItem("level",e.target.value);const t=new CustomEvent("selectLevel",{detail:e.target.value,bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return g`
    <div class="w-full p-2 bg-white border border-gray-200 rounded-lg shadow flex justify-around">
       <span>${this.playerName}</span>
       <span>Score: ${this.score}</span>
    </div>
    `}}m(ht,"styles",[x``,_]);window.customElements.define("score-game",ht);class pt extends f{static get properties(){return{number:{type:String},hidden:{type:Boolean},correct_number:{type:Number},select_card:{type:Boolean},next:{type:Number}}}constructor(){super(),this.number="",this.hidden=!1,this.correct_number=0,this.numberClass="",this.select_card=!1,this.next=0}async connectedCallback(){super.connectedCallback(),this.hidden_number()}hidden_number(){const e=localStorage.getItem("level");let t=0;switch(e){case"easy":t=1e4;break;case"medium":t=5e3;break;case"hard":t=2e3;break}setTimeout(()=>{this.hidden=!0},t)}selectCard(){if(this.select_card){this.correct_number==this.number?this.numberClass="bg-green-500":this.numberClass="bg-red-500",this.hidden=!1;const e=new CustomEvent("cardValue",{detail:this.number,bubbles:!0,composed:!0});this.dispatchEvent(e),this.requestUpdate()}}shouldUpdate(e){return e.has("next")&&this.next>0&&(this.hidden=!1,this.hidden_number(),this.numberClass="",this.requestUpdate()),!0}render(){return g`
  <div class="w-full h-full bg-blue-200 border border-gray-200 rounded-lg shadow flex items-center justify-center cursor-pointer ${this.numberClass}" @click="${this.selectCard}">
      <span style="font-size:100px" class="${this.hidden?"invisible":"block"}">${this.number}</span>
  </div>


    `}}m(pt,"styles",[x``,_]);window.customElements.define("card-number",pt);class ut extends f{static get properties(){return{correct_number:{type:Number},select_card:{type:Boolean},next:{type:Number}}}constructor(){super(),this.listNumbers=this.changeOrder([1,2,3,4,5,6,7,8,9]),this.correct_number=0,this.select_card=!1,this.next=0}changeOrder(e){for(let t=e.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[e[t],e[o]]=[e[o],e[t]]}return e}shouldUpdate(e){return e.has("next")&&this.next>0&&(this.listNumbers=this.changeOrder([1,2,3,4,5,6,7,8,9])),!0}render(){return g`
    <div class="w-full h-[78vh] p-2  border border-gray-200 rounded-lg shadow">
      <div class="grid grid-cols-12 h-full w-full gap-2">
      ${this.listNumbers.map(e=>g`
        <div class="col-span-4">
          <card-number number="${e}" correct_number=${this.correct_number} ?select_card=${this.select_card} next=${this.next}></card-number>
        </div>
      `)}
      </div>
    </div>
    `}}m(ut,"styles",[x``,_]);window.customElements.define("board-game",ut);class bt extends f{static get properties(){return{playerName:{type:String}}}constructor(){super(),this.playerName="",this.message="Memorize the cards...",this.select_card=!1,this.randomNumber=0,this.correct_number="",this.score=0,this.next=0,this.addEventListener("cardValue",this.checkNumber)}selectLevel(e){localStorage.setItem("level",e.target.value);const t=new CustomEvent("selectLevel",{detail:e.target.value,bubbles:!0,composed:!0});this.dispatchEvent(t)}changeMessage(){this.message="Memorize the cards...";const e=localStorage.getItem("level");let t=0;switch(this.next=this.next+1,e){case"easy":t=1e4;break;case"medium":t=5e3;break;case"hard":t=2e3;break}this.randomNumber=Math.floor(Math.random()*9)+1,setTimeout(()=>{this.message=`Where is the number ${this.randomNumber}?`,this.select_card=!0,this.requestUpdate()},t),this.requestUpdate()}async connectedCallback(){super.connectedCallback(),this.changeMessage()}checkNumber(e){if(this.select_card=!1,Number(e.detail)==this.randomNumber){const t=localStorage.getItem("level");switch(this.score=0,t){case"easy":this.score=Number(localStorage.getItem("score"))?Number(localStorage.getItem("score"))+10:10,localStorage.setItem("score",this.score);break;case"medium":this.score=Number(localStorage.getItem("score"))?Number(localStorage.getItem("score"))+20:20,localStorage.setItem("score",this.score);break;case"hard":this.score=Number(localStorage.getItem("score"))?Number(localStorage.getItem("score"))+30:30,localStorage.setItem("score",this.score);break}this.requestUpdate(),setTimeout(()=>{this.changeMessage()},2e3)}else this.score=0,setTimeout(()=>{const t=new CustomEvent("loseGame",{detail:!0,bubbles:!0,composed:!0});this.dispatchEvent(t)},2e3),this.requestUpdate()}render(){return g`
    <div class="w-[99vw]  2xl:w-[90vw] h-[89vh]  p-2 bg-white border border-gray-200 rounded-lg shadow ">
    <div class="text-center">
      <score-game playerName="${this.playerName}" score=${this.score}></score-game>
    </div>

    <div class="pt-2">
        <div class="text-center">
            <span>${this.message}</span>
        </div>
        <board-game correct_number="${this.randomNumber}" ?select_card=${this.select_card} next=${this.next}></board-game>
    </div>

</div>
    `}}m(bt,"styles",[x``,_]);window.customElements.define("dashboard-game",bt);class gt extends f{static get properties(){return{}}constructor(){super()}selectLose(e){const t=new CustomEvent("selectLose",{detail:e.target.value,bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return g`
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="text-center">
      <h5 class="text-xl font-medium text-gray-900 dark:text-white">You have failed..</h5>
    </div>

    <div class="pt-2">
        <form class="space-y-6" action="#">
        <button @click="${this.selectLose}" type="button" class="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4   font-medium rounded-lg text-sm px-5 py-2.5 text-center" value="repit">Repit</button>
        <button @click="${this.selectLose}" type="button" class="w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center" value="level">Change level</button>
        </form>
    </div>
</div>
    `}}m(gt,"styles",[x``,_]);window.customElements.define("lose-game",gt);class ft extends f{static get properties(){return{messageLogin:{type:Object},playerName:{type:String}}}constructor(){super(),this.messageLogin={},this.playerName="",this.lose=!1,this.level=localStorage.getItem("level")?localStorage.getItem("level"):"",this.addEventListener("selectLevel",e=>{this.level=e.detail,this.requestUpdate()}),this.addEventListener("selectLose",e=>{console.log(e.detail),e.detail=="repit"?this.lose=!1:(this.lose=!1,this.level=""),this.requestUpdate()}),this.addEventListener("loseGame",e=>{this.lose=!0,this.requestUpdate()})}render(){return g`
    <div class="h-[100vh] w-[100vw] bg-blue-100">
     <navbar-component ></navbar-component>

     <div class="flex items-center justify-center h-[90vh] w-full">
     ${this.lose?g`<lose-game></lose-game>`:this.level==""?g` <level-selection></level-selection>`:g`<dashboard-game playerName="${this.playerName}"></dashboard-game>`}
     
     </div>

     </div>
    
    </div>  
    `}}m(ft,"styles",[x``,_]);window.customElements.define("game-view",ft);class mt extends f{static get properties(){return{messageLogin:{type:Object}}}constructor(){super(),this.messageLogin={}}shouldUpdate(e){return e.has("messageLogin")&&Object.keys(this.messageLogin).length>0&&setTimeout(()=>this.messageLogin={},2e3),!0}sendEvent(e){const t=new CustomEvent("playerName",{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(t)}newPlayer(){const e=this.shadowRoot.getElementById("new-player").value;e!=""?this.sendEvent(e):this.messageLogin={message:"Invalid Name",color:"text-red-500"}}render(){return g`
    <div class="h-[100vh] w-[100vw] flex justify-center items-center bg-blue-100">
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div class="text-center">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">Memory Cards</h5>
              </div>

                  <div>
                  <form class="space-y-6" action="#">
                  <div class="flex justify-center">
                    <img src="./logo_game.png" class="h-[200px] w-[200px]">
                  </div>
                      <div>
                          <label for="player" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                          <input @click="${e=>this.messageLogin={}}" id="new-player" type="text" name="player" id="player" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Name" required />
                      </div>
                      <div class="text-sm font-medium ${this.messageLogin.color?this.messageLogin.color:""} dark:text-gray-300">
                      ${this.messageLogin.message?this.messageLogin.message:""}
                      </div>
                      <button @click="${this.newPlayer}" type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Start</button>
                  </form>
              </div>
          </div>
    </div>  
    `}}m(mt,"styles",[x``,_]);window.customElements.define("home-view",mt);class wt extends f{static get properties(){return{}}constructor(){super(),this.view="",this.addEventListener("playerName",e=>{localStorage.setItem("namePlayer",e.detail);var t=document.createElement("a");t.href="/game",document.body.appendChild(t),t.click()})}firstUpdated(){super.firstUpdated(),new E(this.shadowRoot.querySelector("#outlet")).setRoutes([{path:"/home",component:"home-view"},{path:"/game",component:"game-view"},{path:"(.*)",redirect:"/home"}])}render(){return g`<div id="outlet"></div>`}}m(wt,"styles",[x``,_]);window.customElements.define("app-view",wt);
