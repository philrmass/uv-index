!function(n){function t(_){if(e[_])return e[_].exports;var r=e[_]={i:_,l:!1,exports:{}};return n[_].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,_){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:_})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var _=Object.create(null);if(t.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(_,r,function(t){return n[t]}.bind(null,r));return _},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="/uv-index/",t(t.s="Pq/i")}({"0CKn":function(n,t,e){"use strict";function _(n,t){const[e,_]=Object(o.d)((()=>{const e=window.localStorage.getItem(n);if(e)try{return JSON.parse(e)}catch(t){console.error("localStorage error:",n,e,t)}return window.localStorage.setItem(n,JSON.stringify(t)),t}));return Object(o.b)((()=>{window.localStorage.setItem(n,JSON.stringify(e))}),[n,e]),[e,_]}function r(){const[n,t]=Object(o.d)("visible"===document.visibilityState),e=Object(o.a)((()=>{t("visible"===document.visibilityState)}),[]);return Object(o.b)((()=>(document.addEventListener("visibilitychange",e),()=>{document.removeEventListener("visibilitychange",e)})),[e]),n}e.d(t,"a",(function(){return _})),e.d(t,"b",(function(){return r}));var o=e("QRet")},"6pMa":function(n,t){"use strict";t.a={main:"main__dJNG4",index:"index__1HYPa",info:"info__jtkT4",version:"version__4kLr3"}},EHQy:function(n,t){"use strict";t.a={screen:"screen__18Awd",content:"content__EZIp+",current:"current__C4udU"}},G98f:function(n,t,e){"use strict";(function(n){function _(){const[t,e]=Object(r.d)(!1),[_,a]=Object(o.a)("uLat",s),[d,p]=Object(o.a)("uLong",f),[h,v]=Object(o.a)("uAddress",null),[m,y]=Object(o.a)("uAll",[]),[g,b]=Object(o.a)("uNow",{}),k=Object(o.b)(),w=Object(i.c)(g.time);return Object(r.b)((()=>{if(k){var n;var t;if("function"==typeof(null===(n=navigator.geolocation)||void 0===n?void 0:n.getCurrentPosition))null===(t=navigator.geolocation)||void 0===t||t.getCurrentPosition((n=>{const t=n.coords.longitude;a(n.coords.latitude),p(t)}));else a(s),p(f);w||e(!0)}}),[k,w,a,p]),Object(r.b)((()=>{(async()=>{const n=await async function(n,t){const e=`https://nominatim.openstreetmap.org/reverse?lat=${n}&lon=${t}&format=json`,_=await fetch(e),{address:r}=await _.json();return r}(_,d),t=Object(i.a)(n,_,d);t&&t!==h&&(v(t),e(!0))})()}),[_,d,h,v]),Object(r.b)((()=>{t&&(async()=>{const n=await async function(n,t){const e=`https://currentuvindex.com/api/v1/uvi?latitude=${n}&longitude=${t}`,_=await fetch(e);return await _.json()}(_,d);b(n.now),y((()=>{return t=n.forecast,[...t];var t})),e(!1)})()}),[t,_,d,y,b]),n("div",{className:c.a.screen},n("div",{className:c.a.content},n("div",{className:c.a.current},n(u.a,{address:h,now:g,setRefresh:e})),n(l.a,{all:m,now:g})))}e.d(t,"a",(function(){return _}));var r=e("QRet"),o=e("0CKn"),i=e("Tnk2"),u=e("oeQ3"),l=e("yxpL"),c=e("EHQy");const s=45.475901,f=-122.649002}).call(this,e("hosL").h)},MV5A:function(){},"Pq/i":function(n,t,e){"use strict";e.r(t);var _=e("hosL");const{h:r,render:o,hydrate:i}=_,u=n=>n&&n.default?n.default:n,l=n=>"/"===n[n.length-1]?n:n+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(l(e.p)+"sw-esm.js"),"function"==typeof u(e("QfWi"))){let n=document.getElementById("preact_root")||document.body.firstElementChild,t=()=>{let t=u(e("QfWi")),_={};const i=document.querySelector('[type="__PREACT_CLI_DATA__"]');i&&(_=JSON.parse(decodeURI(i.innerHTML)).preRenderData||_);const c={preRenderData:_};_.url&&l(_.url);o(r(t,{CLI_DATA:c}),document.body,n)};0,t()}},QP3f:function(n){n.exports=JSON.parse('{"a":"0.2.0"}')},QRet:function(n,t,e){"use strict";function _(n,t){w.__h&&w.__h(v,n,b||t),b=0;var e=v.__H||(v.__H={__:[],__h:[]});return n>=e.__.length&&e.__.push({}),e.__[n]}function r(n){return b=1,function(n,t,e){var r=_(h++,2);if(r.t=n,!r.__c&&(r.__=[e?e(t):p(void 0,t),function(n){var t=r.__N?r.__N[0]:r.__[0],e=r.t(t,n);t!==e&&(r.__N=[e,r.__[1]],r.__c.setState({}))}],r.__c=v,!v.u)){var o=function(n,t,e){if(!r.__c.__H)return!0;var _=r.__c.__H.__.filter((function(n){return!!n.__c}));if(_.every((function(n){return!n.__N})))return!i||i.call(this,n,t,e);var o=!1;return _.forEach((function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(o=!0)}})),!(!o&&r.__c.props===n)&&(!i||i.call(this,n,t,e))};v.u=!0;var i=v.shouldComponentUpdate,u=v.componentWillUpdate;v.componentWillUpdate=function(n,t,e){if(this.__e){var _=i;i=void 0,o(n,t,e),i=_}u&&u.call(this,n,t,e)},v.shouldComponentUpdate=o}return r.__N||r.__}(p,n)}function o(n,t){var e=_(h++,3);!w.__s&&d(e.__H,t)&&(e.__=n,e.i=t,v.__H.__h.push(e))}function i(n){return b=5,u((function(){return{current:n}}),[])}function u(n,t){var e=_(h++,7);return d(e.__H,t)&&(e.__=n(),e.__H=t,e.__h=n),e.__}function l(n,t){return b=8,u((function(){return n}),t)}function c(){for(var n;n=k.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(f),n.__H.__h.forEach(a),n.__H.__h=[]}catch(t){n.__H.__h=[],w.__e(t,n.__v)}}function s(n){var t,e=function(){clearTimeout(_),j&&cancelAnimationFrame(t),setTimeout(n)},_=setTimeout(e,100);j&&(t=requestAnimationFrame(e))}function f(n){var t=v,e=n.__c;"function"==typeof e&&(n.__c=void 0,e()),v=t}function a(n){var t=v;n.__c=n.__(),v=t}function d(n,t){return!n||n.length!==t.length||t.some((function(t,e){return t!==n[e]}))}function p(n,t){return"function"==typeof t?t(n):t}e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return r}));var h,v,m,y,g=e("hosL"),b=0,k=[],w=g.options,x=w.__b,O=w.__r,S=w.diffed,C=w.__c,P=w.unmount,N=w.__;w.__b=function(n){v=null,x&&x(n)},w.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),N&&N(n,t)},w.__r=function(n){O&&O(n),h=0;var t=(v=n.__c).__H;t&&(m===v?(t.__h=[],v.__h=[],t.__.forEach((function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0}))):(t.__h.forEach(f),t.__h.forEach(a),t.__h=[],h=0)),m=v},w.diffed=function(n){S&&S(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==k.push(t)&&y===w.requestAnimationFrame||((y=w.requestAnimationFrame)||s)(c)),t.__H.__.forEach((function(n){n.i&&(n.__H=n.i),n.i=void 0}))),m=v=null},w.__c=function(n,t){t.some((function(n){try{n.__h.forEach(f),n.__h=n.__h.filter((function(n){return!n.__||a(n)}))}catch(e){t.some((function(n){n.__h&&(n.__h=[])})),t=[],w.__e(e,n.__v)}})),C&&C(n,t)},w.unmount=function(n){P&&P(n);var t,e=n.__c;e&&e.__H&&(e.__H.__.forEach((function(n){try{f(n)}catch(n){t=n}})),e.__H=void 0,t&&w.__e(t,e.__v))};var j="function"==typeof requestAnimationFrame},QfWi:function(n,t,e){"use strict";e.r(t),function(n){function _(){return n(r.a,null)}e.d(t,"default",(function(){return _}));var r=e("G98f");e("MV5A")}.call(this,e("hosL").h)},Tnk2:function(n,t,e){"use strict";function _(n){const t=new Date(n),e=new Date;return e.setHours(e.getHours(),0,0,0),e.getTime()===t.getTime()}function r(n){return new Date(n).toLocaleDateString("en-US",{day:"numeric",hour:"numeric",month:"short",weekday:"short"})}function o(n){return n>=11?"extreme":n>=8?"very":n>=6?"high":n>=3?"moderate":"low"}function i(n,t,e){return n.city&&n.state?`${n.city}, ${n.state}`:n.country?n.country:`${t.toFixed(3)}, ${e.toFixed(3)}`}e.d(t,"c",(function(){return _})),e.d(t,"d",(function(){return r})),e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return i}))},ezOz:function(n,t){"use strict";t.a={main:"main__ocEXZ",graph:"graph__cOP5k"}},hosL:function(n,t,e){"use strict";function _(n,t){for(var e in t)n[e]=t[e];return n}function r(n){var t=n.parentNode;t&&t.removeChild(n)}function o(n,t,e){var _,r,o,u={};for(o in t)"key"==o?_=t[o]:"ref"==o?r=t[o]:u[o]=t[o];if(arguments.length>2&&(u.children=arguments.length>3?L.call(arguments,2):e),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===u[o]&&(u[o]=n.defaultProps[o]);return i(n,u,_,r,null)}function i(n,t,e,_,r){var o={type:n,props:t,key:e,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++U:r,__i:-1,__u:0};return null==r&&null!=T.vnode&&T.vnode(o),o}function u(){return{current:null}}function l(n){return n.children}function c(n,t){this.props=n,this.context=t}function s(n,t){if(null==t)return n.__?s(n.__,n.__i+1):null;for(var e;t<n.__k.length;t++)if(null!=(e=n.__k[t])&&null!=e.__e)return e.__e;return"function"==typeof n.type?s(n):null}function f(n){var t,e;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,t=0;t<n.__k.length;t++)if(null!=(e=n.__k[t])&&null!=e.__e){n.__e=n.__c.base=e.__e;break}return f(n)}}function a(n){(!n.__d&&(n.__d=!0)&&M.push(n)&&!d.__r++||D!==T.debounceRendering)&&((D=T.debounceRendering)||$)(d)}function d(){var n,t,e,r,o,i,u,l;for(M.sort(W);n=M.shift();)n.__d&&(t=M.length,r=void 0,i=(o=(e=n).__v).__e,u=[],l=[],e.__P&&((r=_({},o)).__v=o.__v+1,T.vnode&&T.vnode(r),w(e.__P,r,o,e.__n,e.__P.namespaceURI,32&o.__u?[i]:null,u,null==i?s(o):i,!!(32&o.__u),l),r.__v=o.__v,r.__.__k[r.__i]=r,x(u,r,l),r.__e!=i&&f(r)),M.length>t&&M.sort(W));d.__r=0}function p(n,t,e,_,r,o,i,u,l,c,f){var a,d,p,m,y,g=_&&_.__k||q,b=t.length;for(e.__d=l,h(e,t,g),l=e.__d,a=0;a<b;a++)null!=(p=e.__k[a])&&"boolean"!=typeof p&&"function"!=typeof p&&(d=-1===p.__i?J:g[p.__i]||J,p.__i=a,w(n,p,d,r,o,i,u,l,c,f),m=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&S(d.ref,null,p),f.push(p.ref,p.__c||m,p)),null==y&&null!=m&&(y=m),65536&p.__u||d.__k===p.__k?(l&&"string"==typeof p.type&&!n.contains(l)&&(l=s(d)),l=v(p,l,n)):"function"==typeof p.type&&void 0!==p.__d?l=p.__d:m&&(l=m.nextSibling),p.__d=void 0,p.__u&=-196609);e.__d=l,e.__e=y}function h(n,t,e){var _,r,o,u,c,f=t.length,a=e.length,d=a,p=0;for(n.__k=[],_=0;_<f;_++)u=_+p,null!=(r=n.__k[_]=null==(r=t[_])||"boolean"==typeof r||"function"==typeof r?null:"string"==typeof r||"number"==typeof r||"bigint"==typeof r||r.constructor==String?i(null,r,null,null,null):B(r)?i(l,{children:r},null,null,null):void 0===r.constructor&&r.__b>0?i(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)?(r.__=n,r.__b=n.__b+1,c=y(r,e,u,d),r.__i=c,o=null,-1!==c&&(d--,(o=e[c])&&(o.__u|=131072)),null==o||null===o.__v?(-1==c&&p--,"function"!=typeof r.type&&(r.__u|=65536)):c!==u&&(c==u-1?p=c-u:c==u+1?p++:c>u?d>f-u?p+=c-u:p--:c<u&&p++,c!==_+p&&(r.__u|=65536))):(o=e[u])&&null==o.key&&o.__e&&!(131072&o.__u)&&(o.__e==n.__d&&(n.__d=s(o)),C(o,o,!1),e[u]=null,d--);if(d)for(_=0;_<a;_++)null!=(o=e[_])&&!(131072&o.__u)&&(o.__e==n.__d&&(n.__d=s(o)),C(o,o))}function v(n,t,e){var _,r;if("function"==typeof n.type){for(_=n.__k,r=0;_&&r<_.length;r++)_[r]&&(_[r].__=n,t=v(_[r],t,e));return t}n.__e!=t&&(e.insertBefore(n.__e,t||null),t=n.__e);do{t=t&&t.nextSibling}while(null!=t&&8===t.nodeType);return t}function m(n,t){return t=t||[],null==n||"boolean"==typeof n||(B(n)?n.some((function(n){m(n,t)})):t.push(n)),t}function y(n,t,e,_){var r=n.key,o=n.type,i=e-1,u=e+1,l=t[e];if(null===l||l&&r==l.key&&o===l.type&&!(131072&l.__u))return e;if(_>(null==l||131072&l.__u?0:1))for(;i>=0||u<t.length;){if(i>=0){if((l=t[i])&&!(131072&l.__u)&&r==l.key&&o===l.type)return i;i--}if(u<t.length){if((l=t[u])&&!(131072&l.__u)&&r==l.key&&o===l.type)return u;u++}}return-1}function g(n,t,e){"-"===t[0]?n.setProperty(t,null==e?"":e):n[t]=null==e?"":"number"!=typeof e||z.test(t)?e:e+"px"}function b(n,t,e,_,r){var o;n:if("style"===t)if("string"==typeof e)n.style.cssText=e;else{if("string"==typeof _&&(n.style.cssText=_=""),_)for(t in _)e&&t in e||g(n.style,t,"");if(e)for(t in e)_&&e[t]===_[t]||g(n.style,t,e[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in n||"onFocusOut"===t||"onFocusIn"===t?t.toLowerCase().slice(2):t.slice(2),n.l||(n.l={}),n.l[t+o]=e,e?_?e.u=_.u:(e.u=R,n.addEventListener(t,o?I:F,o)):n.removeEventListener(t,o?I:F,o);else{if("http://www.w3.org/2000/svg"==r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&"popover"!=t&&t in n)try{n[t]=null==e?"":e;break n}catch(n){}"function"==typeof e||(null==e||!1===e&&"-"!==t[4]?n.removeAttribute(t):n.setAttribute(t,"popover"==t&&1==e?"":e))}}function k(n){return function(t){if(this.l){var e=this.l[t.type+n];if(null==t.t)t.t=R++;else if(t.t<e.u)return;return e(T.event?T.event(t):t)}}}function w(n,t,e,r,o,i,u,s,f,a){var d,h,v,m,y,g,b,k,w,x,S,C,N,j,H,E,L=t.type;if(void 0!==t.constructor)return null;128&e.__u&&(f=!!(32&e.__u),i=[s=t.__e=e.__e]),(d=T.__b)&&d(t);n:if("function"==typeof L)try{if(k=t.props,w="prototype"in L&&L.prototype.render,x=(d=L.contextType)&&r[d.__c],S=d?x?x.props.value:d.__:r,e.__c?b=(h=t.__c=e.__c).__=h.__E:(w?t.__c=h=new L(k,S):(t.__c=h=new c(k,S),h.constructor=L,h.render=P),x&&x.sub(h),h.props=k,h.state||(h.state={}),h.context=S,h.__n=r,v=h.__d=!0,h.__h=[],h._sb=[]),w&&null==h.__s&&(h.__s=h.state),w&&null!=L.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=_({},h.__s)),_(h.__s,L.getDerivedStateFromProps(k,h.__s))),m=h.props,y=h.state,h.__v=t,v)w&&null==L.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),w&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(w&&null==L.getDerivedStateFromProps&&k!==m&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,S),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,S)||t.__v===e.__v)){for(t.__v!==e.__v&&(h.props=k,h.state=h.__s,h.__d=!1),t.__e=e.__e,t.__k=e.__k,t.__k.forEach((function(n){n&&(n.__=t)})),C=0;C<h._sb.length;C++)h.__h.push(h._sb[C]);h._sb=[],h.__h.length&&u.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,S),w&&null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(m,y,g)}))}if(h.context=S,h.props=k,h.__P=n,h.__e=!1,N=T.__r,j=0,w){for(h.state=h.__s,h.__d=!1,N&&N(t),d=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,N&&N(t),d=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++j<25);h.state=h.__s,null!=h.getChildContext&&(r=_(_({},r),h.getChildContext())),w&&!v&&null!=h.getSnapshotBeforeUpdate&&(g=h.getSnapshotBeforeUpdate(m,y)),p(n,B(E=null!=d&&d.type===l&&null==d.key?d.props.children:d)?E:[E],t,e,r,o,i,u,s,f,a),h.base=t.__e,t.__u&=-161,h.__h.length&&u.push(h),b&&(h.__E=h.__=null)}catch(n){t.__v=null,f||null!=i?(t.__e=s,t.__u|=f?160:32,i[i.indexOf(s)]=null):(t.__e=e.__e,t.__k=e.__k),T.__e(n,t,e)}else null==i&&t.__v===e.__v?(t.__k=e.__k,t.__e=e.__e):t.__e=O(e.__e,t,e,r,o,i,u,f,a);(d=T.diffed)&&d(t)}function x(n,t,e){t.__d=void 0;for(var _=0;_<e.length;_++)S(e[_],e[++_],e[++_]);T.__c&&T.__c(t,n),n.some((function(t){try{n=t.__h,t.__h=[],n.some((function(n){n.call(t)}))}catch(n){T.__e(n,t.__v)}}))}function O(n,t,e,_,o,i,u,l,c){var f,a,d,h,v,m,y,g=e.props,k=t.props,w=t.type;if("svg"===w?o="http://www.w3.org/2000/svg":"math"===w?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=i)for(f=0;f<i.length;f++)if((v=i[f])&&"setAttribute"in v==!!w&&(w?v.localName===w:3===v.nodeType)){n=v,i[f]=null;break}if(null==n){if(null===w)return document.createTextNode(k);n=document.createElementNS(o,w,k.is&&k),i=null,l=!1}if(null===w)g===k||l&&n.data===k||(n.data=k);else{if(i=i&&L.call(n.childNodes),g=e.props||J,!l&&null!=i)for(g={},f=0;f<n.attributes.length;f++)g[(v=n.attributes[f]).name]=v.value;for(f in g)if(v=g[f],"children"==f);else if("dangerouslySetInnerHTML"==f)d=v;else if("key"!==f&&!(f in k)){if("value"==f&&"defaultValue"in k||"checked"==f&&"defaultChecked"in k)continue;b(n,f,null,v,o)}for(f in k)v=k[f],"children"==f?h=v:"dangerouslySetInnerHTML"==f?a=v:"value"==f?m=v:"checked"==f?y=v:"key"===f||l&&"function"!=typeof v||g[f]===v||b(n,f,v,g[f],o);if(a)l||d&&(a.__html===d.__html||a.__html===n.innerHTML)||(n.innerHTML=a.__html),t.__k=[];else if(d&&(n.innerHTML=""),p(n,B(h)?h:[h],t,e,_,"foreignObject"===w?"http://www.w3.org/1999/xhtml":o,i,u,i?i[0]:e.__k&&s(e,0),l,c),null!=i)for(f=i.length;f--;)null!=i[f]&&r(i[f]);l||(f="value",void 0!==m&&(m!==n[f]||"progress"===w&&!m||"option"===w&&m!==g[f])&&b(n,f,m,g[f],o),f="checked",void 0!==y&&y!==n[f]&&b(n,f,y,g[f],o))}return n}function S(n,t,e){try{"function"==typeof n?n(t):n.current=t}catch(n){T.__e(n,e)}}function C(n,t,e){var _,o;if(T.unmount&&T.unmount(n),(_=n.ref)&&(_.current&&_.current!==n.__e||S(_,null,t)),null!=(_=n.__c)){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(n){T.__e(n,t)}_.base=_.__P=null}if(_=n.__k)for(o=0;o<_.length;o++)_[o]&&C(_[o],t,e||"function"!=typeof n.type);e||null==n.__e||r(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function P(n,t,e){return this.constructor(n,e)}function N(n,t,e){var _,r,i,u;T.__&&T.__(n,t),r=(_="function"==typeof e)?null:e&&e.__k||t.__k,i=[],u=[],w(t,n=(!_&&e||t).__k=o(l,null,[n]),r||J,J,t.namespaceURI,!_&&e?[e]:r?null:t.firstChild?L.call(t.childNodes):null,i,!_&&e?e:r?r.__e:t.firstChild,_,u),x(i,n,u)}function j(n,t){N(n,t,j)}function H(n,t,e){var r,o,u,l,c=_({},n.props);for(u in n.type&&n.type.defaultProps&&(l=n.type.defaultProps),t)"key"==u?r=t[u]:"ref"==u?o=t[u]:c[u]=void 0===t[u]&&void 0!==l?l[u]:t[u];return arguments.length>2&&(c.children=arguments.length>3?L.call(arguments,2):e),i(n.type,c,r||n.key,o||n.ref,null)}function E(n,t){var e={__c:t="__cC"+Q++,__:n,Consumer:function(n,t){return n.children(t)},Provider:function(n){var e,_;return this.getChildContext||(e=[],(_={})[t]=this,this.getChildContext=function(){return _},this.componentWillUnmount=function(){e=null},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&e.some((function(n){n.__e=!0,a(n)}))},this.sub=function(n){e.push(n);var t=n.componentWillUnmount;n.componentWillUnmount=function(){e&&e.splice(e.indexOf(n),1),t&&t.call(n)}}),n.children}};return e.Provider.__=e.Consumer.contextType=e}e.r(t),e.d(t,"Component",(function(){return c})),e.d(t,"Fragment",(function(){return l})),e.d(t,"cloneElement",(function(){return H})),e.d(t,"createContext",(function(){return E})),e.d(t,"createElement",(function(){return o})),e.d(t,"createRef",(function(){return u})),e.d(t,"h",(function(){return o})),e.d(t,"hydrate",(function(){return j})),e.d(t,"isValidElement",(function(){return A})),e.d(t,"options",(function(){return T})),e.d(t,"render",(function(){return N})),e.d(t,"toChildArray",(function(){return m}));var L,T,U,A,M,D,$,W,R,F,I,Q,J={},q=[],z=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B=Array.isArray;L=q.slice,T={__e:function(n,t,e,_){for(var r,o,i;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&null!=o.getDerivedStateFromError&&(r.setState(o.getDerivedStateFromError(n)),i=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(n,_||{}),i=r.__d),i)return r.__E=r}catch(t){n=t}throw n}},U=0,A=function(n){return null!=n&&null==n.constructor},c.prototype.setState=function(n,t){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=_({},this.state),"function"==typeof n&&(n=n(_({},e),this.props)),n&&_(e,n),null!=n&&this.__v&&(t&&this._sb.push(t),a(this))},c.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),a(this))},c.prototype.render=l,M=[],$="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,W=function(n,t){return n.__v.__b-t.__v.__b},d.__r=0,R=0,F=k(!1),I=k(!0),Q=0},oeQ3:function(n,t,e){"use strict";(function(n){function _({address:t,now:e,setRefresh:_}){const u=Object(r.d)(e.time),l=Object(r.c)(e.time),c=Object(r.b)(e.uvi);return n("div",{className:i.a.main},n("div",{className:`${i.a.index} ${c}`},e.uvi),n("div",{className:i.a.info},n("div",null,n("div",null,u),n("div",null,t)),!l&&n("button",{onClick:()=>_(!0)},"Refresh")),n("div",{className:i.a.version},`v${o.a}`))}e.d(t,"a",(function(){return _}));var r=e("Tnk2"),o=e("QP3f"),i=e("6pMa")}).call(this,e("hosL").h)},yxpL:function(n,t,e){"use strict";(function(n){function _({all:t,now:e}){return n("div",{className:r.a.main},n("div",{className:r.a.graph},e.time,n("div",null,`All-Start (${t.length}): ${JSON.stringify(t.slice(0,1))}`),n("div",null,`All-End (${t.length}): ${JSON.stringify(t.slice(-1))}`)))}e.d(t,"a",(function(){return _}));var r=e("ezOz")}).call(this,e("hosL").h)}});
//# sourceMappingURL=bundle.155b2.esm.js.map