import{S as C,i as F,s as G,k as v,q as k,a as h,e as q,l as g,m as E,r as $,h as p,c as R,b as u,G as P,u as S,J as w,F as H}from"../chunks/index-3a0ec1f8.js";import{s as J}from"../chunks/singletons-8d0d2f78.js";import"../chunks/paths-6cd3a76e.js";const O=()=>{const t=J,r={page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated};return Object.defineProperties(r,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},enumerable:!1},session:{get(){return A(),{}},enumerable:!1}}),r},z={subscribe(t){return O().page.subscribe(t)}};function A(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}function N(t){let r,a=t[0].error.frame+"",o;return{c(){r=v("pre"),o=k(a)},l(s){r=g(s,"PRE",{});var i=E(r);o=$(i,a),i.forEach(p)},m(s,i){u(s,r,i),P(r,o)},p(s,i){i&1&&a!==(a=s[0].error.frame+"")&&S(o,a)},d(s){s&&p(r)}}}function y(t){let r,a=t[0].error.stack+"",o;return{c(){r=v("pre"),o=k(a)},l(s){r=g(s,"PRE",{});var i=E(r);o=$(i,a),i.forEach(p)},m(s,i){u(s,r,i),P(r,o)},p(s,i){i&1&&a!==(a=s[0].error.stack+"")&&S(o,a)},d(s){s&&p(r)}}}function B(t){let r,a=t[0].status+"",o,s,i,b=t[0].error.message+"",_,d,c,m,l=t[0].error.frame&&N(t),n=t[0].error.stack&&y(t);return{c(){r=v("h1"),o=k(a),s=h(),i=v("pre"),_=k(b),d=h(),l&&l.c(),c=h(),n&&n.c(),m=q()},l(e){r=g(e,"H1",{});var f=E(r);o=$(f,a),f.forEach(p),s=R(e),i=g(e,"PRE",{});var j=E(i);_=$(j,b),j.forEach(p),d=R(e),l&&l.l(e),c=R(e),n&&n.l(e),m=q()},m(e,f){u(e,r,f),P(r,o),u(e,s,f),u(e,i,f),P(i,_),u(e,d,f),l&&l.m(e,f),u(e,c,f),n&&n.m(e,f),u(e,m,f)},p(e,[f]){f&1&&a!==(a=e[0].status+"")&&S(o,a),f&1&&b!==(b=e[0].error.message+"")&&S(_,b),e[0].error.frame?l?l.p(e,f):(l=N(e),l.c(),l.m(c.parentNode,c)):l&&(l.d(1),l=null),e[0].error.stack?n?n.p(e,f):(n=y(e),n.c(),n.m(m.parentNode,m)):n&&(n.d(1),n=null)},i:w,o:w,d(e){e&&p(r),e&&p(s),e&&p(i),e&&p(d),l&&l.d(e),e&&p(c),n&&n.d(e),e&&p(m)}}}function D(t,r,a){let o;return H(t,z,s=>a(0,o=s)),[o]}class M extends C{constructor(r){super(),F(this,r,D,B,G,{})}}export{M as default};
