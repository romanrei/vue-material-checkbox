!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-material-checkbox"]=t():e["vue-material-checkbox"]=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,o){function n(e){o(7)}var r=o(5)(o(1),o(6),n,"data-v-db8654d4",null);e.exports=r.exports},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default={model:{prop:"model",event:"change"},props:{id:{type:String,default:void 0},model:{type:String|Array,default:void 0},checked:Boolean,value:String,name:String,required:Boolean,disabled:Boolean,color:String},data:function(){return{uniqueId:""}},computed:{checkboxState:function(){return void 0===this.model?this.checked:Array.isArray(this.model)?-1!==this.model.indexOf(this.value):this.model},classes:function(){return{"checkbox-disabled":this.disabled,"checkbox-active":this.checkboxState}}},methods:{toggle:function(){if(!this.disabled){var e=this.model;if(Array.isArray(e)){e=e.slice();var t=e.indexOf(this.value);-1===t?e.push(this.value):e.splice(t,1)}else e=!this.checkboxState;this.$emit("change",e)}},genId:function(){void 0===this.id||("undefined"==typeof String?"undefined":n(String))?this.uniqueId="m-checkbox--"+Math.random().toString(36).substring(2,10):this.uniqueId=this.id}},watch:{checked:function(e){e!==this.checkboxState&&this.toggle()}},mounted:function(){this.genId(),this.checked&&!this.checkboxState&&this.toggle()}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"VueCheckbox",function(){return n});var n=o(0);t.default={install:function(e){e.component("checkbox",n)}}},function(e,t,o){t=e.exports=o(4)(),t.push([e.i,'.checkbox-container[data-v-db8654d4]{box-sizing:border-box;position:relative;display:flex;margin:1rem 0;width:100%;line-height:1.125em}.checkbox-container .checkbox_label[data-v-db8654d4]{padding-left:6px;order:1;cursor:pointer}.checkbox-container .checkbox-group[data-v-db8654d4],.checkbox-container .checkbox_label[data-v-db8654d4]{position:relative;display:flex;justify-content:center;align-items:center}.checkbox-container .checkbox-group>input[type=checkbox][data-v-db8654d4]{margin:0;padding:0;position:relative;height:1.125em;width:1.125em;font-size:inherit;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;cursor:pointer;background:#fff;border:2px solid #000;border-radius:2px;opacity:.54;transition:.12s cubic-bezier(.1,.1,1,.1);transition-property:border-color,opacity,background-color}.checkbox-container .checkbox-group>input[type=checkbox][data-v-db8654d4]:focus{outline:none}.checkbox-container .checkbox-group>input[type=checkbox][data-v-db8654d4]:checked{border-color:#009688;background-color:#009688;opacity:1}.checkbox-container .checkbox-group>input[type=checkbox][data-v-db8654d4]:after,.checkbox-container .checkbox-group>input[type=checkbox][data-v-db8654d4]:before{content:"";position:absolute;width:1.125em;height:1.125em;background-color:#fff;opacity:1;transition:transform .25s ease;transform-origin:0 0;top:-2px;left:-2px}.checkbox-container .checkbox-group>input[type=checkbox][data-v-db8654d4]:before{transform:translate(.28em,.435em) rotate(45deg) scale(.3,.1)}.checkbox-container .checkbox-group>input[type=checkbox][data-v-db8654d4]:after{transform:translate(.96em,.351em) rotate(135deg) scale(.58,.1)}.checkbox-container .checkbox-group>input[type=checkbox][data-v-db8654d4]:not(:checked):before{transform:translate(.505em,.455em) rotate(45deg) scale(.1)}.checkbox-container .checkbox-group>input[type=checkbox][data-v-db8654d4]:not(:checked):after{transform:translate(.575em,.525em) rotate(135deg) scale(.1)}.checkbox-disabled .checkbox-group>input[type=checkbox][data-v-db8654d4],.checkbox-disabled .checkbox_label[data-v-db8654d4]{opacity:.24}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<t.length;r++){var c=t[r];"number"==typeof c[0]&&n[c[0]]||(o&&!c[2]?c[2]=o:o&&(c[2]="("+c[2]+") and ("+o+")"),e.push(c))}},e}},function(e,t){e.exports=function(e,t,o,n,r){var i,c=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,c=e.default);var s="function"==typeof c?c.options:c;t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n);var d;if(r?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},s._ssrRegister=d):o&&(d=o),d){var u=s.functional,l=u?s.render:s.beforeCreate;u?s.render=function(e,t){return d.call(t),l(e,t)}:s.beforeCreate=l?[].concat(l,d):[d]}return{esModule:i,exports:c,options:s}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"checkbox-container",class:[e.classes]},[o("label",{staticClass:"checkbox_label",attrs:{for:e.id||e.uniqueId}},[e._t("default")],2),e._v(" "),o("div",{staticClass:"checkbox-group"},[o("input",{style:e.checkboxState?e.color&&"background-color: "+e.color+"; border-color: "+e.color+";":null,attrs:{type:"checkbox",id:e.id||e.uniqueId,name:e.name,disabled:e.disabled,required:e.required,color:e.color},domProps:{value:e.value,checked:e.checkboxState},on:{change:function(t){e.toggle()}}})])])},staticRenderFns:[]}},function(e,t,o){var n=o(3);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(8)("1253a36f",n,!0)},function(e,t,o){function n(e){for(var t=0;t<e.length;t++){var o=e[t],n=u[o.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](o.parts[r]);for(;r<o.parts.length;r++)n.parts.push(i(o.parts[r]));n.parts.length>o.parts.length&&(n.parts.length=o.parts.length)}else{for(var c=[],r=0;r<o.parts.length;r++)c.push(i(o.parts[r]));u[o.id]={id:o.id,refs:1,parts:c}}}}function r(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function i(e){var t,o,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(h)return b;n.parentNode.removeChild(n)}if(v){var i=f++;n=p||(p=r()),t=c.bind(null,n,i,!1),o=c.bind(null,n,i,!0)}else n=r(),t=a.bind(null,n),o=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}function c(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function a(e,t){var o=t.css,n=t.media,r=t.sourceMap;if(n&&e.setAttribute("media",n),r&&(o+="\n/*# sourceURL="+r.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=o(9),u={},l=s&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,b=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,o){h=o;var r=d(e,t);return n(r),function(t){for(var o=[],i=0;i<r.length;i++){var c=r[i],a=u[c.id];a.refs--,o.push(a)}t?(r=d(e,t),n(r)):r=[];for(var i=0;i<o.length;i++){var a=o[i];if(0===a.refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete u[a.id]}}}};var x=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var o=[],n={},r=0;r<t.length;r++){var i=t[r],c=i[0],a=i[1],s=i[2],d=i[3],u={id:e+":"+r,css:a,media:s,sourceMap:d};n[c]?n[c].parts.push(u):o.push(n[c]={id:c,parts:[u]})}return o}}])});