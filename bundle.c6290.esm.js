!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/uv-index/",e(e.s="Pq/i")}({"0CKn":function(t,e,n){"use strict";function r(t,e){const[n,r]=Object(_.e)((()=>{const n=window.localStorage.getItem(t);if(n)try{return JSON.parse(n)}catch(e){console.error("localStorage error:",t,n,e)}return window.localStorage.setItem(t,JSON.stringify(e)),e}));return Object(_.b)((()=>{window.localStorage.setItem(t,JSON.stringify(n))}),[t,n]),[n,r]}function o(){const[t,e]=Object(_.e)("visible"===document.visibilityState),n=Object(_.a)((()=>{e("visible"===document.visibilityState)}),[]);return Object(_.b)((()=>(document.addEventListener("visibilitychange",n),()=>{document.removeEventListener("visibilitychange",n)})),[n]),t}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var _=n("QRet")},"6pMa":function(t,e){"use strict";e.a={main:"main__dJNG4",index:"index__1HYPa",info:"info__jtkT4",location:"location__MTRKc",time:"time__yg1Nj"}},EHQy:function(t,e){"use strict";e.a={screen:"screen__18Awd",content:"content__EZIp+",current:"current__C4udU"}},G98f:function(t,e,n){"use strict";(function(t){function r(){const[e,n]=Object(o.e)(!1),[r,f]=Object(_.a)("uLat",a),[d,p]=Object(_.a)("uLong",s),[h,v]=Object(_.a)("uAddress",null),[m,y]=Object(_.a)("uAll",[]),[b,g]=Object(_.a)("uNow",{}),w=Object(_.b)(),k=Object(i.c)(b.time);Object(o.b)((()=>{w&&!k&&n(!0)}),[w,k]),Object(o.b)((()=>{(async()=>{const t=await async function(t,e){const n=`https://nominatim.openstreetmap.org/reverse?lat=${t}&lon=${e}&format=json`,r=await fetch(n),{address:o}=await r.json();return o}(r,d),e=Object(i.a)(t,r,d);e&&e!==h&&(v(e),n(!0))})()}),[r,d,h,v]),Object(o.b)((()=>{e&&(async()=>{const t=await async function(t,e){const n=`https://currentuvindex.com/api/v1/uvi?latitude=${t}&longitude=${e}`,r=await fetch(n);return await r.json()}(r,d);g(t.now),y([t.now,...t.forecast]),n(!1)})()}),[e,r,d,y,g]);return t("div",{className:l.a.screen},t("div",{className:l.a.content},t("div",{className:l.a.current},t(u.a,{address:h,now:b,onLocationClick:()=>{var t;var e;"function"==typeof(null===(t=navigator.geolocation)||void 0===t?void 0:t.getCurrentPosition)?null===(e=navigator.geolocation)||void 0===e||e.getCurrentPosition((t=>{const e=t.coords.longitude;f(t.coords.latitude),p(e)})):(f(a),p(s))}})),t(c.a,{all:m,now:b})))}n.d(e,"a",(function(){return r}));var o=n("QRet"),_=n("0CKn"),i=n("Tnk2"),u=n("oeQ3"),c=n("yxpL"),l=n("EHQy");const a=45.475901,s=-122.649002}).call(this,n("hosL").h)},MV5A:function(){},"Pq/i":function(t,e,n){"use strict";n.r(e);var r=n("hosL");const{h:o,render:_,hydrate:i}=r,u=t=>t&&t.default?t.default:t,c=t=>"/"===t[t.length-1]?t:t+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(c(n.p)+"sw-esm.js"),"function"==typeof u(n("QfWi"))){let t=document.getElementById("preact_root")||document.body.firstElementChild,e=()=>{let e=u(n("QfWi")),r={};const i=document.querySelector('[type="__PREACT_CLI_DATA__"]');i&&(r=JSON.parse(decodeURI(i.innerHTML)).preRenderData||r);const l={preRenderData:r};r.url&&c(r.url);_(o(e,{CLI_DATA:l}),document.body,t)};0,e()}},QP3f:function(t){t.exports=JSON.parse('{"a":"1.0.0"}')},QRet:function(t,e,n){"use strict";function r(t,e){k.__h&&k.__h(v,t,g||e),g=0;var n=v.__H||(v.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function o(t){return g=1,function(t,e,n){var o=r(h++,2);if(o.t=t,!o.__c&&(o.__=[n?n(e):p(void 0,e),function(t){var e=o.__N?o.__N[0]:o.__[0],n=o.t(e,t);e!==n&&(o.__N=[n,o.__[1]],o.__c.setState({}))}],o.__c=v,!v.u)){var _=function(t,e,n){if(!o.__c.__H)return!0;var r=o.__c.__H.__.filter((function(t){return!!t.__c}));if(r.every((function(t){return!t.__N})))return!i||i.call(this,t,e,n);var _=!1;return r.forEach((function(t){if(t.__N){var e=t.__[0];t.__=t.__N,t.__N=void 0,e!==t.__[0]&&(_=!0)}})),!(!_&&o.__c.props===t)&&(!i||i.call(this,t,e,n))};v.u=!0;var i=v.shouldComponentUpdate,u=v.componentWillUpdate;v.componentWillUpdate=function(t,e,n){if(this.__e){var r=i;i=void 0,_(t,e,n),i=r}u&&u.call(this,t,e,n)},v.shouldComponentUpdate=_}return o.__N||o.__}(p,t)}function _(t,e){var n=r(h++,3);!k.__s&&d(n.__H,e)&&(n.__=t,n.i=e,v.__H.__h.push(n))}function i(t){return g=5,u((function(){return{current:t}}),[])}function u(t,e){var n=r(h++,7);return d(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function c(t,e){return g=8,u((function(){return t}),e)}function l(){for(var t;t=w.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(s),t.__H.__h.forEach(f),t.__H.__h=[]}catch(e){t.__H.__h=[],k.__e(e,t.__v)}}function a(t){var e,n=function(){clearTimeout(r),x&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);x&&(e=requestAnimationFrame(n))}function s(t){var e=v,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),v=e}function f(t){var e=v;t.__c=t.__(),v=e}function d(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function p(t,e){return"function"==typeof e?e(t):e}n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return _})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return o}));var h,v,m,y,b=n("hosL"),g=0,w=[],k=b.options,O=k.__b,j=k.__r,P=k.diffed,N=k.__c,S=k.unmount,C=k.__;k.__b=function(t){v=null,O&&O(t)},k.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),C&&C(t,e)},k.__r=function(t){j&&j(t),h=0;var e=(v=t.__c).__H;e&&(m===v?(e.__h=[],v.__h=[],e.__.forEach((function(t){t.__N&&(t.__=t.__N),t.i=t.__N=void 0}))):(e.__h.forEach(s),e.__h.forEach(f),e.__h=[],h=0)),m=v},k.diffed=function(t){P&&P(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(1!==w.push(e)&&y===k.requestAnimationFrame||((y=k.requestAnimationFrame)||a)(l)),e.__H.__.forEach((function(t){t.i&&(t.__H=t.i),t.i=void 0}))),m=v=null},k.__c=function(t,e){e.some((function(t){try{t.__h.forEach(s),t.__h=t.__h.filter((function(t){return!t.__||f(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],k.__e(n,t.__v)}})),N&&N(t,e)},k.unmount=function(t){S&&S(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((function(t){try{s(t)}catch(t){e=t}})),n.__H=void 0,e&&k.__e(e,n.__v))};var x="function"==typeof requestAnimationFrame},QfWi:function(t,e,n){"use strict";n.r(e),function(t){function r(){return t(o.a,null)}n.d(e,"default",(function(){return r}));var o=n("G98f");n("MV5A")}.call(this,n("hosL").h)},Tnk2:function(t,e,n){"use strict";function r(t){const e=new Date(t),n=new Date;return n.setHours(n.getHours(),0,0,0),n.getTime()===e.getTime()}function o(t){return new Date(t).toLocaleDateString("en-US",{day:"numeric",month:"short",weekday:"short"})}function _(t){return new Date(t).toLocaleTimeString("en-US",{hour:"numeric"})}function i(t){return t>=11?"extreme":t>=8?"very":t>=6?"high":t>=3?"moderate":"low"}function u(t,e,n){return t.city&&t.state?`${t.city}, ${t.state}`:t.country?t.country:`${e.toFixed(3)}, ${n.toFixed(3)}`}n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return _})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return u}))},ezOz:function(t,e){"use strict";e.a={main:"main__ocEXZ",graph:"graph__cOP5k",day:"day__UeyGM",hours:"hours__6RzIe",label:"label__FQG82",hour:"hour__F50aj",bar:"bar__98oJv",fill:"fill__gjsbc",time:"time__3vXgI",popup:"popup__+TJFR",version:"version__c4TP+"}},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function _(t,e,n){var r,o,_,u={};for(_ in e)"key"==_?r=e[_]:"ref"==_?o=e[_]:u[_]=e[_];if(arguments.length>2&&(u.children=arguments.length>3?L.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(_ in t.defaultProps)void 0===u[_]&&(u[_]=t.defaultProps[_]);return i(t,u,r,o,null)}function i(t,e,n,r,o){var _={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==o?++D:o,__i:-1,__u:0};return null==o&&null!=E.vnode&&E.vnode(_),_}function u(){return{current:null}}function c(t){return t.children}function l(t,e){this.props=t,this.context=e}function a(t,e){if(null==e)return t.__?a(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?a(t):null}function s(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return s(t)}}function f(t){(!t.__d&&(t.__d=!0)&&M.push(t)&&!d.__r++||A!==E.debounceRendering)&&((A=E.debounceRendering)||F)(d)}function d(){var t,e,n,o,_,i,u,c;for(M.sort(R);t=M.shift();)t.__d&&(e=M.length,o=void 0,i=(_=(n=t).__v).__e,u=[],c=[],n.__P&&((o=r({},_)).__v=_.__v+1,E.vnode&&E.vnode(o),k(n.__P,o,_,n.__n,n.__P.namespaceURI,32&_.__u?[i]:null,u,null==i?a(_):i,!!(32&_.__u),c),o.__v=_.__v,o.__.__k[o.__i]=o,O(u,o,c),o.__e!=i&&s(o)),M.length>e&&M.sort(R));d.__r=0}function p(t,e,n,r,o,_,i,u,c,l,s){var f,d,p,m,y,b=r&&r.__k||q,g=e.length;for(n.__d=c,h(n,e,b),c=n.__d,f=0;f<g;f++)null!=(p=n.__k[f])&&"boolean"!=typeof p&&"function"!=typeof p&&(d=-1===p.__i?J:b[p.__i]||J,p.__i=f,k(t,p,d,o,_,i,u,c,l,s),m=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&P(d.ref,null,p),s.push(p.ref,p.__c||m,p)),null==y&&null!=m&&(y=m),65536&p.__u||d.__k===p.__k?(c&&"string"==typeof p.type&&!t.contains(c)&&(c=a(d)),c=v(p,c,t)):"function"==typeof p.type&&void 0!==p.__d?c=p.__d:m&&(c=m.nextSibling),p.__d=void 0,p.__u&=-196609);n.__d=c,n.__e=y}function h(t,e,n){var r,o,_,u,l,s=e.length,f=n.length,d=f,p=0;for(t.__k=[],r=0;r<s;r++)u=r+p,null!=(o=t.__k[r]=null==(o=e[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?i(null,o,null,null,null):B(o)?i(c,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?i(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=t,o.__b=t.__b+1,l=y(o,n,u,d),o.__i=l,_=null,-1!==l&&(d--,(_=n[l])&&(_.__u|=131072)),null==_||null===_.__v?(-1==l&&p--,"function"!=typeof o.type&&(o.__u|=65536)):l!==u&&(l==u-1?p=l-u:l==u+1?p++:l>u?d>s-u?p+=l-u:p--:l<u&&p++,l!==r+p&&(o.__u|=65536))):(_=n[u])&&null==_.key&&_.__e&&!(131072&_.__u)&&(_.__e==t.__d&&(t.__d=a(_)),N(_,_,!1),n[u]=null,d--);if(d)for(r=0;r<f;r++)null!=(_=n[r])&&!(131072&_.__u)&&(_.__e==t.__d&&(t.__d=a(_)),N(_,_))}function v(t,e,n){var r,o;if("function"==typeof t.type){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,e=v(r[o],e,n));return e}t.__e!=e&&(n.insertBefore(t.__e,e||null),e=t.__e);do{e=e&&e.nextSibling}while(null!=e&&8===e.nodeType);return e}function m(t,e){return e=e||[],null==t||"boolean"==typeof t||(B(t)?t.some((function(t){m(t,e)})):e.push(t)),e}function y(t,e,n,r){var o=t.key,_=t.type,i=n-1,u=n+1,c=e[n];if(null===c||c&&o==c.key&&_===c.type&&!(131072&c.__u))return n;if(r>(null==c||131072&c.__u?0:1))for(;i>=0||u<e.length;){if(i>=0){if((c=e[i])&&!(131072&c.__u)&&o==c.key&&_===c.type)return i;i--}if(u<e.length){if((c=e[u])&&!(131072&c.__u)&&o==c.key&&_===c.type)return u;u++}}return-1}function b(t,e,n){"-"===e[0]?t.setProperty(e,null==n?"":n):t[e]=null==n?"":"number"!=typeof n||z.test(e)?n:n+"px"}function g(t,e,n,r,o){var _;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||b(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||b(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])_=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||"onFocusOut"===e||"onFocusIn"===e?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+_]=n,n?r?n.u=r.u:(n.u=$,t.addEventListener(e,_?I:W,_)):t.removeEventListener(e,_?I:W,_);else{if("http://www.w3.org/2000/svg"==o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=e&&"height"!=e&&"href"!=e&&"list"!=e&&"form"!=e&&"tabIndex"!=e&&"download"!=e&&"rowSpan"!=e&&"colSpan"!=e&&"role"!=e&&"popover"!=e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null==n||!1===n&&"-"!==e[4]?t.removeAttribute(e):t.setAttribute(e,"popover"==e&&1==n?"":n))}}function w(t){return function(e){if(this.l){var n=this.l[e.type+t];if(null==e.t)e.t=$++;else if(e.t<n.u)return;return n(E.event?E.event(e):e)}}}function k(t,e,n,o,_,i,u,a,s,f){var d,h,v,m,y,b,g,w,k,O,P,N,C,x,T,H,L=e.type;if(void 0!==e.constructor)return null;128&n.__u&&(s=!!(32&n.__u),i=[a=e.__e=n.__e]),(d=E.__b)&&d(e);t:if("function"==typeof L)try{if(w=e.props,k="prototype"in L&&L.prototype.render,O=(d=L.contextType)&&o[d.__c],P=d?O?O.props.value:d.__:o,n.__c?g=(h=e.__c=n.__c).__=h.__E:(k?e.__c=h=new L(w,P):(e.__c=h=new l(w,P),h.constructor=L,h.render=S),O&&O.sub(h),h.props=w,h.state||(h.state={}),h.context=P,h.__n=o,v=h.__d=!0,h.__h=[],h._sb=[]),k&&null==h.__s&&(h.__s=h.state),k&&null!=L.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=r({},h.__s)),r(h.__s,L.getDerivedStateFromProps(w,h.__s))),m=h.props,y=h.state,h.__v=e,v)k&&null==L.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),k&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(k&&null==L.getDerivedStateFromProps&&w!==m&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(w,P),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(w,h.__s,P)||e.__v===n.__v)){for(e.__v!==n.__v&&(h.props=w,h.state=h.__s,h.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),N=0;N<h._sb.length;N++)h.__h.push(h._sb[N]);h._sb=[],h.__h.length&&u.push(h);break t}null!=h.componentWillUpdate&&h.componentWillUpdate(w,h.__s,P),k&&null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(m,y,b)}))}if(h.context=P,h.props=w,h.__P=t,h.__e=!1,C=E.__r,x=0,k){for(h.state=h.__s,h.__d=!1,C&&C(e),d=h.render(h.props,h.state,h.context),T=0;T<h._sb.length;T++)h.__h.push(h._sb[T]);h._sb=[]}else do{h.__d=!1,C&&C(e),d=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++x<25);h.state=h.__s,null!=h.getChildContext&&(o=r(r({},o),h.getChildContext())),k&&!v&&null!=h.getSnapshotBeforeUpdate&&(b=h.getSnapshotBeforeUpdate(m,y)),p(t,B(H=null!=d&&d.type===c&&null==d.key?d.props.children:d)?H:[H],e,n,o,_,i,u,a,s,f),h.base=e.__e,e.__u&=-161,h.__h.length&&u.push(h),g&&(h.__E=h.__=null)}catch(t){e.__v=null,s||null!=i?(e.__e=a,e.__u|=s?160:32,i[i.indexOf(a)]=null):(e.__e=n.__e,e.__k=n.__k),E.__e(t,e,n)}else null==i&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=j(n.__e,e,n,o,_,i,u,s,f);(d=E.diffed)&&d(e)}function O(t,e,n){e.__d=void 0;for(var r=0;r<n.length;r++)P(n[r],n[++r],n[++r]);E.__c&&E.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){E.__e(t,e.__v)}}))}function j(t,e,n,r,_,i,u,c,l){var s,f,d,h,v,m,y,b=n.props,w=e.props,k=e.type;if("svg"===k?_="http://www.w3.org/2000/svg":"math"===k?_="http://www.w3.org/1998/Math/MathML":_||(_="http://www.w3.org/1999/xhtml"),null!=i)for(s=0;s<i.length;s++)if((v=i[s])&&"setAttribute"in v==!!k&&(k?v.localName===k:3===v.nodeType)){t=v,i[s]=null;break}if(null==t){if(null===k)return document.createTextNode(w);t=document.createElementNS(_,k,w.is&&w),i=null,c=!1}if(null===k)b===w||c&&t.data===w||(t.data=w);else{if(i=i&&L.call(t.childNodes),b=n.props||J,!c&&null!=i)for(b={},s=0;s<t.attributes.length;s++)b[(v=t.attributes[s]).name]=v.value;for(s in b)if(v=b[s],"children"==s);else if("dangerouslySetInnerHTML"==s)d=v;else if("key"!==s&&!(s in w)){if("value"==s&&"defaultValue"in w||"checked"==s&&"defaultChecked"in w)continue;g(t,s,null,v,_)}for(s in w)v=w[s],"children"==s?h=v:"dangerouslySetInnerHTML"==s?f=v:"value"==s?m=v:"checked"==s?y=v:"key"===s||c&&"function"!=typeof v||b[s]===v||g(t,s,v,b[s],_);if(f)c||d&&(f.__html===d.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(d&&(t.innerHTML=""),p(t,B(h)?h:[h],e,n,r,"foreignObject"===k?"http://www.w3.org/1999/xhtml":_,i,u,i?i[0]:n.__k&&a(n,0),c,l),null!=i)for(s=i.length;s--;)null!=i[s]&&o(i[s]);c||(s="value",void 0!==m&&(m!==t[s]||"progress"===k&&!m||"option"===k&&m!==b[s])&&g(t,s,m,b[s],_),s="checked",void 0!==y&&y!==t[s]&&g(t,s,y,b[s],_))}return t}function P(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){E.__e(t,n)}}function N(t,e,n){var r,_;if(E.unmount&&E.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||P(r,null,e)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){E.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(_=0;_<r.length;_++)r[_]&&N(r[_],e,n||"function"!=typeof t.type);n||null==t.__e||o(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function S(t,e,n){return this.constructor(t,n)}function C(t,e,n){var r,o,i,u;E.__&&E.__(t,e),o=(r="function"==typeof n)?null:n&&n.__k||e.__k,i=[],u=[],k(e,t=(!r&&n||e).__k=_(c,null,[t]),o||J,J,e.namespaceURI,!r&&n?[n]:o?null:e.firstChild?L.call(e.childNodes):null,i,!r&&n?n:o?o.__e:e.firstChild,r,u),O(i,t,u)}function x(t,e){C(t,e,x)}function T(t,e,n){var o,_,u,c,l=r({},t.props);for(u in t.type&&t.type.defaultProps&&(c=t.type.defaultProps),e)"key"==u?o=e[u]:"ref"==u?_=e[u]:l[u]=void 0===e[u]&&void 0!==c?c[u]:e[u];return arguments.length>2&&(l.children=arguments.length>3?L.call(arguments,2):n),i(t.type,l,o||t.key,_||t.ref,null)}function H(t,e){var n={__c:e="__cC"+Q++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some((function(t){t.__e=!0,f(t)}))},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n&&n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"Component",(function(){return l})),n.d(e,"Fragment",(function(){return c})),n.d(e,"cloneElement",(function(){return T})),n.d(e,"createContext",(function(){return H})),n.d(e,"createElement",(function(){return _})),n.d(e,"createRef",(function(){return u})),n.d(e,"h",(function(){return _})),n.d(e,"hydrate",(function(){return x})),n.d(e,"isValidElement",(function(){return U})),n.d(e,"options",(function(){return E})),n.d(e,"render",(function(){return C})),n.d(e,"toChildArray",(function(){return m}));var L,E,D,U,M,A,F,R,$,W,I,Q,J={},q=[],z=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B=Array.isArray;L=q.slice,E={__e:function(t,e,n,r){for(var o,_,i;e=e.__;)if((o=e.__c)&&!o.__)try{if((_=o.constructor)&&null!=_.getDerivedStateFromError&&(o.setState(_.getDerivedStateFromError(t)),i=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),i=o.__d),i)return o.__E=o}catch(e){t=e}throw t}},D=0,U=function(t){return null!=t&&null==t.constructor},l.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this._sb.push(e),f(this))},l.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),f(this))},l.prototype.render=c,M=[],F="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,R=function(t,e){return t.__v.__b-e.__v.__b},d.__r=0,$=0,W=w(!1),I=w(!0),Q=0},oeQ3:function(t,e,n){"use strict";(function(t){function r({address:e,now:n,onLocationClick:r}){const i=Object(o.d)(n.time),u=Object(o.e)(n.time),c=Object(o.b)(n.uvi);return t("div",{className:_.a.main},t("div",{className:`${_.a.index} ${c}`},n.uvi),t("div",{className:_.a.info},t("div",null,t("div",null,t("span",null,i),t("span",{className:_.a.time},u)),t("div",{className:_.a.location,onClick:r},e))))}n.d(e,"a",(function(){return r}));var o=n("Tnk2"),_=n("6pMa")}).call(this,n("hosL").h)},yxpL:function(t,e,n){"use strict";(function(t){function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){_(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i({all:e}){const n=Object(u.c)((()=>function(t){const e=t.sort((({time:t})=>t)).map((t=>o(o({},t),{},{at:t.time,day:Object(l.d)(t.time),level:Object(l.b)(t.uvi),time:Object(l.e)(t.time),hour:new Date(t.time).getHours()})));return[...Map.groupBy(e,(({day:t})=>t)).values()]}(e)),[e]),[r,_]=Object(u.e)(null),[i,f]=Object(u.e)(),d=Object(u.d)(),p=Object(c.b)();Object(u.b)((()=>{console.log("SCROLL",d.current.scrollLeft),d.current.scrollLeft=0}),[p]);const h=e=>{const n=2+e.uvi/11*98;const r=e.hour%2?" ":e.time;return t("div",{key:e.at,id:e.at,className:s.a.hour},t("div",{className:s.a.bar},t("div",{className:`${s.a.fill} ${e.level}`,style:{height:`${n}%`},onClick:()=>((t,e)=>{clearTimeout(i),_({level:e,uvi:t}),f(setTimeout((()=>_(null)),2e3))})(e.uvi,e.level)})),t("div",{className:s.a.time},r))};return t("div",{className:s.a.main},t("div",{ref:d,className:s.a.graph},n.map((e=>(e=>{const n=24===e.length?e[0].day:" ";return t("div",{key:e[0].at,className:s.a.day},t("div",{className:s.a.hours},e.map((t=>h(t)))),t("div",{className:s.a.label},n))})(e)))),r&&t("div",{className:s.a.popup},t("div",{className:r.level},r.uvi)),t("div",{className:s.a.version},`v${a.a}`))}n.d(e,"a",(function(){return i}));var u=n("QRet"),c=n("0CKn"),l=n("Tnk2"),a=n("QP3f"),s=n("ezOz")}).call(this,n("hosL").h)}});
//# sourceMappingURL=bundle.c6290.esm.js.map