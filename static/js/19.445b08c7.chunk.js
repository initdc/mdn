(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[19],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var c=n(15),r=n(25),a=n(3),i=n(8),o=n.n(i),s=n(12),l=n(1),u=n.n(l),j=n(2),h=n(4),d=n(14),f=n(6),b=n(9),p=n(7),O=n(10),x=(n(89),n(0));function m(){var e=Object(j.f)(),t=Object(j.g)(),n=Object(b.a)(),i=e.pathname.endsWith("/")?e.pathname.slice(0,-1):e.pathname,l=i.replace("/".concat(n,"/_sitemap"),"/".concat(n,"/docs")).toLowerCase();u.a.useEffect((function(){document.title="Sitemap"}),[]);var h=Object(d.a)("/".concat(n,"/search-index.json"),function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("".concat(n.status," on ").concat(n.url));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{revalidateOnFocus:!1}),f=h.data,m=h.error,k=u.a.useState(null),y=Object(a.a)(k,2),S=y[0],N=y[1];u.a.useEffect((function(){if(f){var e=Object(r.a)(f).sort((function(e,t){return e.url.localeCompare(t.url)}));N(e)}}),[f]);var C=u.a.useState(new Map),L=Object(a.a)(C,2),T=L[0],F=L[1];u.a.useEffect((function(){var e=new Map;if(S){var t,n=Object(c.a)(S);try{var r=function(){var n=t.value.url.split("/"),c=n.slice(0,3);n.slice(3).forEach((function(t,n){c.push(t);var r=c.join("/");e.set(r,(e.get(r)||0)+1)}))};for(n.s();!(t=n.n()).done;)r()}catch(a){n.e(a)}finally{n.f()}F(e)}}),[S]);var I=u.a.useState(null),U=Object(a.a)(I,2),D=U[0],_=U[1];u.a.useEffect((function(){if(S){var e=S.find((function(e){return e.url.toLowerCase()===l}));_(e||null)}}),[l,S]);var G=u.a.useState(""),A=Object(a.a)(G,2),Y=A[0],B=A[1];u.a.useEffect((function(){B("")}),[i]);var H=u.a.useState(!1),R=Object(a.a)(H,2),W=R[0],J=R[1],M=u.a.useState(null),P=Object(a.a)(M,2),V=P[0],X=P[1];u.a.useEffect((function(){if(S){var e=l.split("/").length,t=S.filter((function(t){return!(!t.url.toLowerCase().startsWith(l)||e+1!==t.url.split("/").length)&&!!t.url.split("/").slice(-1)[0].toLowerCase().startsWith(Y.toLowerCase())}));X(t)}}),[l,S,Y]);var q=u.a.useState(0),z=Object(a.a)(q,2),K=z[0],Q=z[1];u.a.useEffect((function(){Q(0)}),[Y]),u.a.useEffect((function(){if(W&&V&&V.length>=1){var e=V[K].url.split("/").slice(3);B(""),J(!1),t("/".concat(n,"/_sitemap/").concat(e.join("/")))}}),[n,V,W,t,K]);var Z=u.a.useState(null),$=Object(a.a)(Z,2),ee=$[0],te=$[1],ne=u.a.useState(null),ce=Object(a.a)(ne,2),re=ce[0],ae=ce[1];function ie(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(s.a)(o.a.mark((function e(t){var n,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Going to try to open ".concat(t," in your editor")),te(t),(n=new URLSearchParams).set("url",t),e.prev=4,e.next=7,fetch("/_open?".concat(n.toString()));case 7:if((c=e.sent).ok){e.next=17;break}if(!(c.status>=500)){e.next=13;break}ae(new Error("".concat(c.status,": ").concat(c.statusText))),e.next=17;break;case 13:return e.next=15,c.text();case 15:r=e.sent,ae(new Error("".concat(c.status,": ").concat(r)));case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(4),ae(e.t0);case 22:case"end":return e.stop()}}),e,null,[[4,19]])})))).apply(this,arguments)}return u.a.useEffect((function(){var e;return ee&&(e=setTimeout((function(){te(null)}),3e3)),function(){e&&clearTimeout(e)}}),[ee]),Object(x.jsx)(O.b,{children:Object(x.jsxs)("div",{id:"sitemap",children:[m&&Object(x.jsxs)("div",{className:"notecard error",children:[Object(x.jsx)("h4",{children:"Error"}),Object(x.jsx)("p",{children:Object(x.jsx)("code",{children:m.toString()})})]}),re&&Object(x.jsxs)("div",{className:"notecard error",children:[Object(x.jsx)("h4",{children:"Error opening in your editor"}),Object(x.jsx)("p",{children:Object(x.jsx)("code",{children:re.toString()})})]}),!f&&!m&&Object(x.jsx)(p.a,{}),Object(x.jsx)("div",{className:"opening-in-your-editor",children:ee&&Object(x.jsxs)(x.Fragment,{children:["Opening"," ",Object(x.jsx)("code",{children:ee.slice(ee.length-50,ee.length)})," ","in your editor..."]})}),V&&Object(x.jsx)(w,{pathname:i,thisDoc:D,openInYourEditor:ie}),V&&Object(x.jsx)(g,{pathname:i,searchFilter:Y,onUpdate:function(e,t){B(e),J(t)},onGoUp:function(){var e=i.split("/");if(e.length>=4){var n=e.slice(0,-1);t(n.join("/"))}},onChangeHighlight:function(e){if("up"===e){var t=K-1;V&&(t=(t%V.length+V.length)%V.length),Q(t)}else{var n=K+1;V&&(n%=V.length),Q(n)}}}),V&&0===V.length&&(Y?Object(x.jsx)("em",{children:"nothing found"}):Object(x.jsx)("em",{children:"has no further sub-documents"})),V&&!Y&&Object(x.jsx)(v,{pathname:i}),V&&V.length>0&&Object(x.jsx)(E,{filtered:V,childCounts:T,highlightIndex:K,openInYourEditor:ie}),Object(x.jsx)("p",{className:"footer-note",children:"Note, this sitemap only shows documents. Not any other applications."})]})})}function v(e){var t=e.pathname.split("/").slice(0,-1);if(t.length<=2)return null;var n=t[t.length-1];return Object(x.jsx)("p",{children:Object(x.jsxs)(h.b,{to:t.join("/"),children:["\u2196\ufe0f Back up to"," ",t.length<=3?Object(x.jsx)("em",{children:"root"}):Object(x.jsx)("code",{children:n})]})})}function g(e){var t=e.pathname,n=e.searchFilter,c=e.onUpdate,r=e.onGoUp,i=e.onChangeHighlight,o=u.a.useState(!1),s=Object(a.a)(o,2),l=s[0],j=s[1],h=u.a.useState(0),d=Object(a.a)(h,2),f=d[0],b=d[1];u.a.useEffect((function(){f>=2&&(b(0),r())}),[f,r]);var p=u.a.useRef(null),O=u.a.useCallback((function(e){if(p.current&&e.target){var t=e.target;t===p.current&&("ArrowDown"===e.key?i("down"):"ArrowUp"===e.key&&i("up")),"INPUT"===t.tagName||"TEXTAREA"===t.tagName?("Backspace"===e.key&&e.target===p.current?n.trim()||b((function(e){return e+1})):b(0),"Escape"===e.key&&p.current.blur()):"T"!==e.key&&"t"!==e.key||(p.current.focus(),b(0))}}),[i,n]);u.a.useEffect((function(){return window.document.addEventListener("keyup",O),function(){window.document.removeEventListener("keyup",O)}}),[O]);var m=t.replace("/_sitemap","/docs");return Object(x.jsxs)("form",{className:"filter-form",onSubmit:function(e){e.preventDefault(),c(n.trim(),!0)},children:[Object(x.jsx)("code",{children:m}),"/",Object(x.jsx)("input",{type:"search",ref:p,value:n,onChange:function(e){c(e.target.value,!1)},onFocus:function(){j(!0)},onBlur:function(){j(!1)}})," ",!l&&Object(x.jsxs)("small",{className:"keyboard-tip",children:["Tip! press ",Object(x.jsx)("kbd",{children:"t"})," on your keyboard to focus on search filter"]})]})}function w(e){var t=e.pathname,n=e.thisDoc,c=e.openInYourEditor,r=Object(b.a)(),a=t.split("/").slice(3),i=t.split("/").slice(0,2);i.push("_sitemap");var o=!f.b.includes(window.location.hostname);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("ul",{className:"breadcrumb",children:[Object(x.jsx)("li",{className:"first",children:a.length?Object(x.jsx)(h.b,{to:i.join("/"),children:"root"}):Object(x.jsx)("em",{children:"root"})}),a.map((function(e,t){var n=t===a.length-1;return i.push(e),Object(x.jsx)("li",{className:n?"last":void 0,children:n?Object(x.jsx)("code",{children:e}):Object(x.jsx)(h.b,{to:i.join("/"),children:Object(x.jsx)("code",{children:e})})},"".concat(e).concat(t))})),Object(x.jsxs)("li",{className:"this-doc",children:[Object(x.jsx)("b",{children:"Go to:"})," ",n?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(h.b,{to:n.url,children:Object(x.jsx)("em",{children:n.title})})," ",f.a&&!o&&Object(x.jsxs)("small",{children:["(",Object(x.jsx)("a",{href:n.url,role:"img","aria-label":"Editor pen",onClick:function(e){e.preventDefault(),c(n.url)},title:"Open in your editor",children:"Edit"}),")"]})]}):Object(x.jsx)(h.b,{to:"/".concat(r,"/"),children:"Home page"})]})]})})}function E(e){var t=e.filtered,n=e.childCounts,c=e.highlightIndex,r=e.openInYourEditor,a=Object(b.a)(),i=!f.b.includes(window.location.hostname);return Object(x.jsx)("div",{className:"tree",children:Object(x.jsx)("ul",{children:t.map((function(e,t){var o=n.get(e.url)||0;return Object(x.jsxs)("li",{className:c===t?"highlight":void 0,children:[Object(x.jsx)(h.b,{to:e.url.replace("/docs/","/_sitemap/"),title:e.title,children:Object(x.jsx)("code",{children:e.url.replace("/".concat(a,"/docs"),"")})})," ",Object(x.jsxs)("small",{children:["(",1===o?"1 document":"".concat(o.toLocaleString()," documents")," | ",Object(x.jsx)(h.b,{to:e.url,title:"Go to: ".concat(e.title),children:"View"}),!i&&" | ",!i&&Object(x.jsx)(h.b,{to:e.url,title:"Edit: ".concat(e.title),onClick:function(t){t.preventDefault(),r(e.url)},children:"Edit"}),")"]})]},e.url)}))})})}},89:function(e,t,n){}}]);
//# sourceMappingURL=19.445b08c7.chunk.js.map