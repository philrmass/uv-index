!function(n){function t(_){if(e[_])return e[_].exports;var r=e[_]={i:_,l:!1,exports:{}};return n[_].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,_){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:_})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var _=Object.create(null);if(t.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(_,r,function(t){return n[t]}.bind(null,r));return _},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="/uv-index/",t(t.s="Pq/i")}({"0CKn":function(n,t,e){"use strict";function _(n,t){const[e,_]=Object(r.d)((()=>{const e=window.localStorage.getItem(n);if(e)try{return JSON.parse(e)}catch(t){console.error("localStorage error:",n,e,t)}return window.localStorage.setItem(n,JSON.stringify(t)),t}));return Object(r.b)((()=>{window.localStorage.setItem(n,JSON.stringify(e))}),[n,e]),[e,_]}e.d(t,"a",(function(){return _}));var r=e("QRet")},"6pMa":function(n,t){"use strict";t.a={main:"main__dJNG4",index:"index__1HYPa"}},EHQy:function(n,t){"use strict";t.a={screen:"screen__18Awd",content:"content__EZIp+",current:"current__C4udU"}},G98f:function(n,t,e){"use strict";(function(n){function _(){const[t,e]=Object(r.d)(!1),[_,c]=Object(o.a)("uLat",45.475901),[f,s]=Object(o.a)("uLong",-122.649002),[a,d]=Object(o.a)("uAll",[]),[p,h]=Object(o.a)("uNow",{});return Object(r.b)((()=>{t&&(async()=>{const n=await async function(n,t){const e=`https://currentuvindex.com/api/v1/uvi?latitude=${n}&longitude=${t}`,_=await fetch(e);return await _.json()}(_,f);h(n.now),d((()=>{return t=n.forecast,[...t];var t})),e(!1)})()}),[_,f,t,d,h]),n("div",{className:l.a.screen},n("div",{className:l.a.content},n("div",{className:l.a.current},n(u.a,{lat:_,long:f,now:p,setRefresh:e})),n(i.a,{all:a,now:p})))}e.d(t,"a",(function(){return _}));var r=e("QRet"),o=e("0CKn"),u=e("oeQ3"),i=e("yxpL"),l=e("EHQy")}).call(this,e("hosL").h)},MV5A:function(){},"Pq/i":function(n,t,e){"use strict";e.r(t);var _=e("hosL");const{h:r,render:o,hydrate:u}=_,i=n=>n&&n.default?n.default:n,l=n=>"/"===n[n.length-1]?n:n+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(l(e.p)+"sw-esm.js"),"function"==typeof i(e("QfWi"))){let n=document.getElementById("preact_root")||document.body.firstElementChild,t=()=>{let t=i(e("QfWi")),_={};const u=document.querySelector('[type="__PREACT_CLI_DATA__"]');u&&(_=JSON.parse(decodeURI(u.innerHTML)).preRenderData||_);const c={preRenderData:_};_.url&&l(_.url);o(r(t,{CLI_DATA:c}),document.body,n)};0,t()}},QP3f:function(n){n.exports=JSON.parse('{"a":"0.0.0"}')},QRet:function(n,t,e){"use strict";function _(n,t){w.__h&&w.__h(v,n,b||t),b=0;var e=v.__H||(v.__H={__:[],__h:[]});return n>=e.__.length&&e.__.push({}),e.__[n]}function r(n){return b=1,function(n,t,e){var r=_(h++,2);if(r.t=n,!r.__c&&(r.__=[e?e(t):p(void 0,t),function(n){var t=r.__N?r.__N[0]:r.__[0],e=r.t(t,n);t!==e&&(r.__N=[e,r.__[1]],r.__c.setState({}))}],r.__c=v,!v.u)){var o=function(n,t,e){if(!r.__c.__H)return!0;var _=r.__c.__H.__.filter((function(n){return!!n.__c}));if(_.every((function(n){return!n.__N})))return!u||u.call(this,n,t,e);var o=!1;return _.forEach((function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(o=!0)}})),!(!o&&r.__c.props===n)&&(!u||u.call(this,n,t,e))};v.u=!0;var u=v.shouldComponentUpdate,i=v.componentWillUpdate;v.componentWillUpdate=function(n,t,e){if(this.__e){var _=u;u=void 0,o(n,t,e),u=_}i&&i.call(this,n,t,e)},v.shouldComponentUpdate=o}return r.__N||r.__}(p,n)}function o(n,t){var e=_(h++,3);!w.__s&&d(e.__H,t)&&(e.__=n,e.i=t,v.__H.__h.push(e))}function u(n){return b=5,i((function(){return{current:n}}),[])}function i(n,t){var e=_(h++,7);return d(e.__H,t)&&(e.__=n(),e.__H=t,e.__h=n),e.__}function l(n,t){return b=8,i((function(){return n}),t)}function c(){for(var n;n=k.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(s),n.__H.__h.forEach(a),n.__H.__h=[]}catch(t){n.__H.__h=[],w.__e(t,n.__v)}}function f(n){var t,e=function(){clearTimeout(_),E&&cancelAnimationFrame(t),setTimeout(n)},_=setTimeout(e,100);E&&(t=requestAnimationFrame(e))}function s(n){var t=v,e=n.__c;"function"==typeof e&&(n.__c=void 0,e()),v=t}function a(n){var t=v;n.__c=n.__(),v=t}function d(n,t){return!n||n.length!==t.length||t.some((function(t,e){return t!==n[e]}))}function p(n,t){return"function"==typeof t?t(n):t}e.d(t,"a",(function(){return l})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return u})),e.d(t,"d",(function(){return r}));var h,v,m,y,g=e("hosL"),b=0,k=[],w=g.options,x=w.__b,C=w.__r,S=w.diffed,P=w.__c,N=w.unmount,H=w.__;w.__b=function(n){v=null,x&&x(n)},w.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),H&&H(n,t)},w.__r=function(n){C&&C(n),h=0;var t=(v=n.__c).__H;t&&(m===v?(t.__h=[],v.__h=[],t.__.forEach((function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0}))):(t.__h.forEach(s),t.__h.forEach(a),t.__h=[],h=0)),m=v},w.diffed=function(n){S&&S(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==k.push(t)&&y===w.requestAnimationFrame||((y=w.requestAnimationFrame)||f)(c)),t.__H.__.forEach((function(n){n.i&&(n.__H=n.i),n.i=void 0}))),m=v=null},w.__c=function(n,t){t.some((function(n){try{n.__h.forEach(s),n.__h=n.__h.filter((function(n){return!n.__||a(n)}))}catch(e){t.some((function(n){n.__h&&(n.__h=[])})),t=[],w.__e(e,n.__v)}})),P&&P(n,t)},w.unmount=function(n){N&&N(n);var t,e=n.__c;e&&e.__H&&(e.__H.__.forEach((function(n){try{s(n)}catch(n){t=n}})),e.__H=void 0,t&&w.__e(t,e.__v))};var E="function"==typeof requestAnimationFrame},QfWi:function(n,t,e){"use strict";e.r(t),function(n){function _(){return n(r.a,null)}e.d(t,"default",(function(){return _}));var r=e("G98f");e("MV5A")}.call(this,e("hosL").h)},ezOz:function(n,t){"use strict";t.a={main:"main__ocEXZ"}},hosL:function(n,t,e){"use strict";function _(n,t){for(var e in t)n[e]=t[e];return n}function r(n){var t=n.parentNode;t&&t.removeChild(n)}function o(n,t,e){var _,r,o,i={};for(o in t)"key"==o?_=t[o]:"ref"==o?r=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?U.call(arguments,2):e),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===i[o]&&(i[o]=n.defaultProps[o]);return u(n,i,_,r,null)}function u(n,t,e,_,r){var o={type:n,props:t,key:e,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++T:r,__i:-1,__u:0};return null==r&&null!=A.vnode&&A.vnode(o),o}function i(){return{current:null}}function l(n){return n.children}function c(n,t){this.props=n,this.context=t}function f(n,t){if(null==t)return n.__?f(n.__,n.__i+1):null;for(var e;t<n.__k.length;t++)if(null!=(e=n.__k[t])&&null!=e.__e)return e.__e;return"function"==typeof n.type?f(n):null}function s(n){var t,e;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,t=0;t<n.__k.length;t++)if(null!=(e=n.__k[t])&&null!=e.__e){n.__e=n.__c.base=e.__e;break}return s(n)}}function a(n){(!n.__d&&(n.__d=!0)&&j.push(n)&&!d.__r++||W!==A.debounceRendering)&&((W=A.debounceRendering)||R)(d)}function d(){var n,t,e,r,o,u,i,l;for(j.sort(D);n=j.shift();)n.__d&&(t=j.length,r=void 0,u=(o=(e=n).__v).__e,i=[],l=[],e.__P&&((r=_({},o)).__v=o.__v+1,A.vnode&&A.vnode(r),w(e.__P,r,o,e.__n,e.__P.namespaceURI,32&o.__u?[u]:null,i,null==u?f(o):u,!!(32&o.__u),l),r.__v=o.__v,r.__.__k[r.__i]=r,x(i,r,l),r.__e!=u&&s(r)),j.length>t&&j.sort(D));d.__r=0}function p(n,t,e,_,r,o,u,i,l,c,s){var a,d,p,m,y,g=_&&_.__k||q,b=t.length;for(e.__d=l,h(e,t,g),l=e.__d,a=0;a<b;a++)null!=(p=e.__k[a])&&"boolean"!=typeof p&&"function"!=typeof p&&(d=-1===p.__i?J:g[p.__i]||J,p.__i=a,w(n,p,d,r,o,u,i,l,c,s),m=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&S(d.ref,null,p),s.push(p.ref,p.__c||m,p)),null==y&&null!=m&&(y=m),65536&p.__u||d.__k===p.__k?(l&&"string"==typeof p.type&&!n.contains(l)&&(l=f(d)),l=v(p,l,n)):"function"==typeof p.type&&void 0!==p.__d?l=p.__d:m&&(l=m.nextSibling),p.__d=void 0,p.__u&=-196609);e.__d=l,e.__e=y}function h(n,t,e){var _,r,o,i,c,s=t.length,a=e.length,d=a,p=0;for(n.__k=[],_=0;_<s;_++)i=_+p,null!=(r=n.__k[_]=null==(r=t[_])||"boolean"==typeof r||"function"==typeof r?null:"string"==typeof r||"number"==typeof r||"bigint"==typeof r||r.constructor==String?u(null,r,null,null,null):B(r)?u(l,{children:r},null,null,null):void 0===r.constructor&&r.__b>0?u(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)?(r.__=n,r.__b=n.__b+1,c=y(r,e,i,d),r.__i=c,o=null,-1!==c&&(d--,(o=e[c])&&(o.__u|=131072)),null==o||null===o.__v?(-1==c&&p--,"function"!=typeof r.type&&(r.__u|=65536)):c!==i&&(c==i-1?p=c-i:c==i+1?p++:c>i?d>s-i?p+=c-i:p--:c<i&&p++,c!==_+p&&(r.__u|=65536))):(o=e[i])&&null==o.key&&o.__e&&!(131072&o.__u)&&(o.__e==n.__d&&(n.__d=f(o)),P(o,o,!1),e[i]=null,d--);if(d)for(_=0;_<a;_++)null!=(o=e[_])&&!(131072&o.__u)&&(o.__e==n.__d&&(n.__d=f(o)),P(o,o))}function v(n,t,e){var _,r;if("function"==typeof n.type){for(_=n.__k,r=0;_&&r<_.length;r++)_[r]&&(_[r].__=n,t=v(_[r],t,e));return t}n.__e!=t&&(e.insertBefore(n.__e,t||null),t=n.__e);do{t=t&&t.nextSibling}while(null!=t&&8===t.nodeType);return t}function m(n,t){return t=t||[],null==n||"boolean"==typeof n||(B(n)?n.some((function(n){m(n,t)})):t.push(n)),t}function y(n,t,e,_){var r=n.key,o=n.type,u=e-1,i=e+1,l=t[e];if(null===l||l&&r==l.key&&o===l.type&&!(131072&l.__u))return e;if(_>(null==l||131072&l.__u?0:1))for(;u>=0||i<t.length;){if(u>=0){if((l=t[u])&&!(131072&l.__u)&&r==l.key&&o===l.type)return u;u--}if(i<t.length){if((l=t[i])&&!(131072&l.__u)&&r==l.key&&o===l.type)return i;i++}}return-1}function g(n,t,e){"-"===t[0]?n.setProperty(t,null==e?"":e):n[t]=null==e?"":"number"!=typeof e||z.test(t)?e:e+"px"}function b(n,t,e,_,r){var o;n:if("style"===t)if("string"==typeof e)n.style.cssText=e;else{if("string"==typeof _&&(n.style.cssText=_=""),_)for(t in _)e&&t in e||g(n.style,t,"");if(e)for(t in e)_&&e[t]===_[t]||g(n.style,t,e[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in n||"onFocusOut"===t||"onFocusIn"===t?t.toLowerCase().slice(2):t.slice(2),n.l||(n.l={}),n.l[t+o]=e,e?_?e.u=_.u:(e.u=F,n.addEventListener(t,o?$:I,o)):n.removeEventListener(t,o?$:I,o);else{if("http://www.w3.org/2000/svg"==r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&"popover"!=t&&t in n)try{n[t]=null==e?"":e;break n}catch(n){}"function"==typeof e||(null==e||!1===e&&"-"!==t[4]?n.removeAttribute(t):n.setAttribute(t,"popover"==t&&1==e?"":e))}}function k(n){return function(t){if(this.l){var e=this.l[t.type+n];if(null==t.t)t.t=F++;else if(t.t<e.u)return;return e(A.event?A.event(t):t)}}}function w(n,t,e,r,o,u,i,f,s,a){var d,h,v,m,y,g,b,k,w,x,S,P,H,E,O,L,U=t.type;if(void 0!==t.constructor)return null;128&e.__u&&(s=!!(32&e.__u),u=[f=t.__e=e.__e]),(d=A.__b)&&d(t);n:if("function"==typeof U)try{if(k=t.props,w="prototype"in U&&U.prototype.render,x=(d=U.contextType)&&r[d.__c],S=d?x?x.props.value:d.__:r,e.__c?b=(h=t.__c=e.__c).__=h.__E:(w?t.__c=h=new U(k,S):(t.__c=h=new c(k,S),h.constructor=U,h.render=N),x&&x.sub(h),h.props=k,h.state||(h.state={}),h.context=S,h.__n=r,v=h.__d=!0,h.__h=[],h._sb=[]),w&&null==h.__s&&(h.__s=h.state),w&&null!=U.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=_({},h.__s)),_(h.__s,U.getDerivedStateFromProps(k,h.__s))),m=h.props,y=h.state,h.__v=t,v)w&&null==U.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),w&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(w&&null==U.getDerivedStateFromProps&&k!==m&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,S),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,S)||t.__v===e.__v)){for(t.__v!==e.__v&&(h.props=k,h.state=h.__s,h.__d=!1),t.__e=e.__e,t.__k=e.__k,t.__k.forEach((function(n){n&&(n.__=t)})),P=0;P<h._sb.length;P++)h.__h.push(h._sb[P]);h._sb=[],h.__h.length&&i.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,S),w&&null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(m,y,g)}))}if(h.context=S,h.props=k,h.__P=n,h.__e=!1,H=A.__r,E=0,w){for(h.state=h.__s,h.__d=!1,H&&H(t),d=h.render(h.props,h.state,h.context),O=0;O<h._sb.length;O++)h.__h.push(h._sb[O]);h._sb=[]}else do{h.__d=!1,H&&H(t),d=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++E<25);h.state=h.__s,null!=h.getChildContext&&(r=_(_({},r),h.getChildContext())),w&&!v&&null!=h.getSnapshotBeforeUpdate&&(g=h.getSnapshotBeforeUpdate(m,y)),p(n,B(L=null!=d&&d.type===l&&null==d.key?d.props.children:d)?L:[L],t,e,r,o,u,i,f,s,a),h.base=t.__e,t.__u&=-161,h.__h.length&&i.push(h),b&&(h.__E=h.__=null)}catch(n){t.__v=null,s||null!=u?(t.__e=f,t.__u|=s?160:32,u[u.indexOf(f)]=null):(t.__e=e.__e,t.__k=e.__k),A.__e(n,t,e)}else null==u&&t.__v===e.__v?(t.__k=e.__k,t.__e=e.__e):t.__e=C(e.__e,t,e,r,o,u,i,s,a);(d=A.diffed)&&d(t)}function x(n,t,e){t.__d=void 0;for(var _=0;_<e.length;_++)S(e[_],e[++_],e[++_]);A.__c&&A.__c(t,n),n.some((function(t){try{n=t.__h,t.__h=[],n.some((function(n){n.call(t)}))}catch(n){A.__e(n,t.__v)}}))}function C(n,t,e,_,o,u,i,l,c){var s,a,d,h,v,m,y,g=e.props,k=t.props,w=t.type;if("svg"===w?o="http://www.w3.org/2000/svg":"math"===w?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=u)for(s=0;s<u.length;s++)if((v=u[s])&&"setAttribute"in v==!!w&&(w?v.localName===w:3===v.nodeType)){n=v,u[s]=null;break}if(null==n){if(null===w)return document.createTextNode(k);n=document.createElementNS(o,w,k.is&&k),u=null,l=!1}if(null===w)g===k||l&&n.data===k||(n.data=k);else{if(u=u&&U.call(n.childNodes),g=e.props||J,!l&&null!=u)for(g={},s=0;s<n.attributes.length;s++)g[(v=n.attributes[s]).name]=v.value;for(s in g)if(v=g[s],"children"==s);else if("dangerouslySetInnerHTML"==s)d=v;else if("key"!==s&&!(s in k)){if("value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k)continue;b(n,s,null,v,o)}for(s in k)v=k[s],"children"==s?h=v:"dangerouslySetInnerHTML"==s?a=v:"value"==s?m=v:"checked"==s?y=v:"key"===s||l&&"function"!=typeof v||g[s]===v||b(n,s,v,g[s],o);if(a)l||d&&(a.__html===d.__html||a.__html===n.innerHTML)||(n.innerHTML=a.__html),t.__k=[];else if(d&&(n.innerHTML=""),p(n,B(h)?h:[h],t,e,_,"foreignObject"===w?"http://www.w3.org/1999/xhtml":o,u,i,u?u[0]:e.__k&&f(e,0),l,c),null!=u)for(s=u.length;s--;)null!=u[s]&&r(u[s]);l||(s="value",void 0!==m&&(m!==n[s]||"progress"===w&&!m||"option"===w&&m!==g[s])&&b(n,s,m,g[s],o),s="checked",void 0!==y&&y!==n[s]&&b(n,s,y,g[s],o))}return n}function S(n,t,e){try{"function"==typeof n?n(t):n.current=t}catch(n){A.__e(n,e)}}function P(n,t,e){var _,o;if(A.unmount&&A.unmount(n),(_=n.ref)&&(_.current&&_.current!==n.__e||S(_,null,t)),null!=(_=n.__c)){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(n){A.__e(n,t)}_.base=_.__P=null}if(_=n.__k)for(o=0;o<_.length;o++)_[o]&&P(_[o],t,e||"function"!=typeof n.type);e||null==n.__e||r(n.__e),n.__c=n.__=n.__e=n.__d=void 0}function N(n,t,e){return this.constructor(n,e)}function H(n,t,e){var _,r,u,i;A.__&&A.__(n,t),r=(_="function"==typeof e)?null:e&&e.__k||t.__k,u=[],i=[],w(t,n=(!_&&e||t).__k=o(l,null,[n]),r||J,J,t.namespaceURI,!_&&e?[e]:r?null:t.firstChild?U.call(t.childNodes):null,u,!_&&e?e:r?r.__e:t.firstChild,_,i),x(u,n,i)}function E(n,t){H(n,t,E)}function O(n,t,e){var r,o,i,l,c=_({},n.props);for(i in n.type&&n.type.defaultProps&&(l=n.type.defaultProps),t)"key"==i?r=t[i]:"ref"==i?o=t[i]:c[i]=void 0===t[i]&&void 0!==l?l[i]:t[i];return arguments.length>2&&(c.children=arguments.length>3?U.call(arguments,2):e),u(n.type,c,r||n.key,o||n.ref,null)}function L(n,t){var e={__c:t="__cC"+Q++,__:n,Consumer:function(n,t){return n.children(t)},Provider:function(n){var e,_;return this.getChildContext||(e=[],(_={})[t]=this,this.getChildContext=function(){return _},this.componentWillUnmount=function(){e=null},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&e.some((function(n){n.__e=!0,a(n)}))},this.sub=function(n){e.push(n);var t=n.componentWillUnmount;n.componentWillUnmount=function(){e&&e.splice(e.indexOf(n),1),t&&t.call(n)}}),n.children}};return e.Provider.__=e.Consumer.contextType=e}e.r(t),e.d(t,"Component",(function(){return c})),e.d(t,"Fragment",(function(){return l})),e.d(t,"cloneElement",(function(){return O})),e.d(t,"createContext",(function(){return L})),e.d(t,"createElement",(function(){return o})),e.d(t,"createRef",(function(){return i})),e.d(t,"h",(function(){return o})),e.d(t,"hydrate",(function(){return E})),e.d(t,"isValidElement",(function(){return M})),e.d(t,"options",(function(){return A})),e.d(t,"render",(function(){return H})),e.d(t,"toChildArray",(function(){return m}));var U,A,T,M,j,W,R,D,F,I,$,Q,J={},q=[],z=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B=Array.isArray;U=q.slice,A={__e:function(n,t,e,_){for(var r,o,u;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&null!=o.getDerivedStateFromError&&(r.setState(o.getDerivedStateFromError(n)),u=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(n,_||{}),u=r.__d),u)return r.__E=r}catch(t){n=t}throw n}},T=0,M=function(n){return null!=n&&null==n.constructor},c.prototype.setState=function(n,t){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=_({},this.state),"function"==typeof n&&(n=n(_({},e),this.props)),n&&_(e,n),null!=n&&this.__v&&(t&&this._sb.push(t),a(this))},c.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),a(this))},c.prototype.render=l,j=[],R="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,D=function(n,t){return n.__v.__b-t.__v.__b},d.__r=0,F=0,I=k(!1),$=k(!0),Q=0},oeQ3:function(n,t,e){"use strict";(function(n){function _({lat:t,long:e,now:_,setRefresh:u}){return n("div",{className:o.a.main},n("div",{className:o.a.index},_.uvi),n("div",null,`Lat: ${t}`),n("div",null,`Long: ${e}`),n("button",{onClick:()=>u(!0)},"Refresh"),n("div",null,`v${r.a}`))}e.d(t,"a",(function(){return _}));var r=e("QP3f"),o=e("6pMa")}).call(this,e("hosL").h)},yxpL:function(n,t,e){"use strict";(function(n){function _({all:t,now:e}){return n("div",{className:r.a.main},e.time,n("div",null,`All-Start (${t.length}): ${JSON.stringify(t.slice(0,2))}`),n("div",null,`All-End (${t.length}): ${JSON.stringify(t.slice(-2))}`))}e.d(t,"a",(function(){return _}));var r=e("ezOz")}).call(this,e("hosL").h)}});
//# sourceMappingURL=bundle.e8514.esm.js.map