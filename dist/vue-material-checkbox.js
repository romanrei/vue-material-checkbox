!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-material-checkbox"]=t():e["vue-material-checkbox"]=t()}(this,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var i=n(1);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(4).default)("1f75dcf8",i,!0,{})},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,"\n.__ripple__container {\n  color: inherit;\n  border-radius: inherit;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  z-index: 0;\n  pointer-events: none;\n  contain: strict;\n}\n.__ripple__animation {\n  color: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0;\n  transition: 0.4s cubic-bezier(0, 0, 0.2, 1);\n  pointer-events: none;\n  overflow: hidden;\n  will-change: transform, opacity;\n}\n.__ripple__animation--enter {\n  transition: none;\n}\n.__ripple__animation--visible {\n  opacity: 0.15;\n}\n.m-chckbox--container {\n  box-sizing: border-box;\n  display: inline-flex;\n  position: relative;\n  margin: 1rem 0;\n  margin-right: 1rem;\n  width: 100%;\n  line-height: 20px;\n  cursor: pointer;\n  align-items: center;\n}\n.m-chckbox--ripple {\n  box-sizing: border-box;\n  z-index: 1;\n  position: absolute;\n  width: 48px;\n  height: 48px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n}\n.m-chckbox--label {\n  position: relative;\n  padding-left: 1rem;\n  cursor: pointer;\n}\n.m-chckbox--group {\n  box-sizing: border-box;\n  position: relative;\n  border-radius: 2px;\n  border: 2px solid rgba(0,0,0,0.54);\n  height: 20px;\n  width: 20px;\n  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.m-chckbox--group input[type=checkbox] {\n  position: absolute;\n  -webkit-appearance: none;\n  appearance: none;\n  left: -999rem;\n}\n.m-chckbox--container.active .m-chckbox--group {\n  background-color: #009688;\n  border-color: #009688;\n}\n.m-chckbox--container.disabled {\n  cursor: not-allowed;\n}\n.m-chckbox--container.disabled .m-chckbox--group {\n  opacity: 0.14;\n}\n.m-chckbox--container.disabled .m-chckbox--label {\n  opacity: 0.24;\n  cursor: not-allowed;\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(o).concat([r]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";function i(e,t){e.style.transform=t,e.style.webkitTransform=t}n.r(t);var r="data-ripple",o=function(e,t,n){var o=n.value,a=void 0===o?{}:o;if("true"===t.getAttribute(r)){var s=document.createElement("span"),c=document.createElement("span");s.appendChild(c),s.className="__ripple__container",a.class&&(s.className+=" "+a.class);var u=t.clientWidth>t.clientHeight?t.clientWidth:t.clientHeight;c.className="__ripple__animation",c.style.width=u*(a.center?1:2)+"px",c.style.height=c.style.width,t.appendChild(s);var l=window.getComputedStyle(t);"absolute"!==l.position&&"fixed"!==l.position&&(t.style.position="relative");var d=t.getBoundingClientRect(),p=a.center?"50%":e.clientX-d.left+"px",f=a.center?"50%":e.clientY-d.top+"px";c.classList.add("__ripple__animation--enter"),c.classList.add("__ripple__animation--visible"),i(c,"translate(-50%, -50%) translate("+p+", "+f+") scale3d(0.01,0.01,0.01)"),c.dataset.activated=Date.now(),setTimeout(function(){c.classList.remove("__ripple__animation--enter"),i(c,"translate(-50%, -50%) translate("+p+", "+f+")  scale3d(0.99,0.99,0.99)")},0)}},a=function(e){if("true"===e.getAttribute(r)){var t=e.getElementsByClassName("__ripple__animation");if(0!==t.length){var n=t[t.length-1],i=400-(Date.now()-Number(n.dataset.activated));i=i<0?0:i,setTimeout(function(){n.classList.remove("__ripple__animation--visible"),setTimeout(function(){try{t.length<1&&(e.style.position=null),n.parentNode&&e.removeChild(n.parentNode)}catch(e){}},100)},i)}}};function s(e){return void 0===e.value||!!e.value}var c={name:"ripple",bind:function(e,t){e.setAttribute(r,s(t)),"ontouchstart"in window&&(e.addEventListener("touchend",function(){return a(e)},!1),e.addEventListener("touchcancel",function(){return a(e)},!1)),e.addEventListener("mousedown",function(n){return o(n,e,t)},!1),e.addEventListener("mouseup",function(){return a(e)},!1),e.addEventListener("mouseleave",function(){return a(e)},!1),e.addEventListener("dragstart",function(){return a(e)},!1)},unbind:function(e,t){e.removeEventListener("touchstart",function(n){return o(n,e,t)},!1),e.removeEventListener("mousedown",function(n){return o(n,e,t)},!1),e.removeEventListener("touchend",function(){return a(e)},!1),e.removeEventListener("touchcancel",function(){return a(e)},!1),e.removeEventListener("mouseup",function(){return a(e)},!1),e.removeEventListener("mouseleave",function(){return a(e)},!1),e.removeEventListener("dragstart",function(){return a(e)},!1)},update:function(e,t){t.value!==t.oldValue&&e.setAttribute(r,s(t))}},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var l=function(e,t,n,i,r,o,a,s){var c=typeof(e=e||{}).default;"object"!==c&&"function"!==c||(e=e.default);var u,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId=o),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=u):r&&(u=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(l.functional){l._injectStyles=u;var d=l.render;l.render=function(e,t){return u.call(t),d(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,u):[u]}return{exports:e,options:l}}({directives:{ripple:c},model:{prop:"model",event:"change"},props:{id:{type:String,default:void 0},model:{type:String|Array,default:void 0},checked:Boolean,value:String,name:String,required:Boolean,disabled:Boolean,color:String,size:Number,fontSize:Number},data:function(){return{uniqueId:""}},computed:{checkboxState:function(){return void 0===this.model?this.checked:Array.isArray(this.model)?-1!==this.model.indexOf(this.value):this.model},classes:function(){return{disabled:this.disabled,active:this.checkboxState}},mainStyle:function(){return this.checkboxState?this.color&&"background-color: "+this.color+"; border-color: "+this.color+";":""},sizeStyles:function(){return this.size?"width: "+this.size+"px; height: "+this.size+"px; ":""},rippleSizeStyles:function(){return this.size?"width: "+(this.size+28)+"px; height: "+(this.size+28)+"px;":""},fontSizeStyles:function(){return this.fontSize?"font-size: "+this.fontSize+"px":""}},methods:{toggle:function(){if(!this.disabled){var e=this.model;if(Array.isArray(e)){var t=e.indexOf(this.value);-1===t?e.push(this.value):e.splice(t,1)}else e=!this.checkboxState;this.$emit("change",e)}},genId:function(){void 0===this.id||"undefined"==typeof String||u(String)?this.uniqueId="m-checkbox--"+Math.random().toString(36).substring(2,10):this.uniqueId=this.id}},watch:{checked:function(e){e!==this.checkboxState&&this.toggle()}},mounted:function(){this.genId(),this.checked&&!this.checkboxState&&this.toggle()}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-chckbox--container",class:[e.classes]},[n("div",{staticClass:"m-chckbox--group",style:e.mainStyle+e.sizeStyles,on:{click:e.toggle}},[e.checkboxState?n("div",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"#fff",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}})])]):e._e(),e._v(" "),n("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"m-chckbox--ripple",style:e.rippleSizeStyles},[n("input",{attrs:{type:"checkbox",id:e.id||e.uniqueId,name:e.name,disabled:e.disabled,required:e.required,color:e.color},domProps:{value:e.value,checked:e.checkboxState}})])]),e._v(" "),n("label",{staticClass:"m-chckbox--label",style:e.fontSizeStyles,attrs:{for:e.id||e.uniqueId}},[e._t("default")],2)])},[],!1,function(e){n(0)},null,null).exports;function d(e){e.component("checkbox",l)}n.d(t,"default",function(){return d}),n.d(t,"VueCheckbox",function(){return l})},function(e,t,n){"use strict";function i(e,t){for(var n=[],i={},r=0;r<t.length;r++){var o=t[r],a=o[0],s={id:e+":"+r,css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}n.r(t),n.d(t,"default",function(){return h});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,l=function(){},d=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,r){u=n,d=r||{};var a=i(e,t);return m(a),function(t){for(var n=[],r=0;r<a.length;r++){var s=a[r];(c=o[s.id]).refs--,n.push(c)}t?m(a=i(e,t)):a=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete o[c.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],i=o[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(b(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var a=[];for(r=0;r<n.parts.length;r++)a.push(b(n.parts[r]));o[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function b(e){var t,n,i=document.querySelector("style["+p+'~="'+e.id+'"]');if(i){if(u)return l;i.parentNode.removeChild(i)}if(f){var r=c++;i=s||(s=v()),t=x.bind(null,i,r,!1),n=x.bind(null,i,r,!0)}else i=v(),t=function(e,t){var n=t.css,i=t.media,r=t.sourceMap;i&&e.setAttribute("media",i);d.ssrId&&e.setAttribute(p,t.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}var g,y=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function x(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}}])});