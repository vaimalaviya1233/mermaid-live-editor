import{S as n,i as s,s as i,o as r}from"../../chunks/index-3a0ec1f8.js";import{c as t}from"../../chunks/singletons-8d0d2f78.js";import{b as l}from"../../chunks/paths-6cd3a76e.js";t.disable_scroll_handling;const c=t.goto;t.invalidate;t.prefetch;t.prefetch_routes;t.before_navigate;t.after_navigate;function f(o){return r(async()=>{const e=window.location.hash.split("/");let a="edit";e.length>2&&(a=`${e[1]}#${e[2]}`),await c(`${l}/${a}`,{replaceState:!0})}),[]}class d extends n{constructor(e){super(),s(this,e,f,null,i,{})}}export{d as default};
