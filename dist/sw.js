if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let n={};const a=e=>i(e,o),d={module:{uri:o},exports:n,require:a};s[o]=Promise.all(c.map((e=>d[e]||a(e)))).then((e=>(r(...e),n)))}}define(["./workbox-5d8171ce"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_redirects",revision:"d38a2b58df330c85e0029eecf71d7c26"},{url:"assets/index-BloFrsSn.js",revision:"5bfcc66dd25e08651b8cf036acfb3ba0"},{url:"assets/index-C2u8ukp1.css",revision:"0b9010db132812b06f66aa96acc444c3"},{url:"assets/manifest-3la8oy2D.json",revision:"671b5e48fb80715b9e49fbbca08cfad9"},{url:"index.html",revision:"662f170534c29e0c91d390e12cd0529b"},{url:"lit.svg",revision:"a5843b3cf19cbbb05e2a3e4554b101d5"},{url:"logo_game.png",revision:"4c9c26e96237c5286457b5617de4ca2e"},{url:"logo.png",revision:"966755f7e97f97920acf06254c2c3444"},{url:"logout.png",revision:"ec8b8c4d5f21388e36083ee503e052ce"},{url:"sw.js",revision:"52f1c1a1e1a723e808c6a86cb274d788"},{url:"sw.js.map",revision:"ee8a03ac353cce0e4e84bb240a3b3631"},{url:"tw.js",revision:"e62a06f73865ea7fcff97c5b5c82d842"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"workbox-5c5512d8.js",revision:"70f2f173c4020a92160d79ae8bef9173"},{url:"workbox-5c5512d8.js.map",revision:"d695f0fd59e8d9d2082854d2e3d286ea"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.registerRoute(/^https?.*/,new e.NetworkFirst({cacheName:"offlineCache",plugins:[new e.ExpirationPlugin({maxEntries:200})]}),"GET")}));
//# sourceMappingURL=sw.js.map
