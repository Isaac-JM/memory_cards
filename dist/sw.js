if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,o)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const c=e=>i(e,t),d={module:{uri:t},exports:n,require:c};s[t]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(o(...e),n)))}}define(["./workbox-5c5512d8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-B6fCJho7.js",revision:"ad3759cf784da87025e4bb6df3e7fda0"},{url:"assets/index-C2u8ukp1.css",revision:"0b9010db132812b06f66aa96acc444c3"},{url:"index.html",revision:"b251cc03933128945d2b388eafa16231"},{url:"lit.svg",revision:"a5843b3cf19cbbb05e2a3e4554b101d5"},{url:"sw.js",revision:"6cbe69921e52558ea989777d1794e032"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"workbox-5c5512d8.js",revision:"70f2f173c4020a92160d79ae8bef9173"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
