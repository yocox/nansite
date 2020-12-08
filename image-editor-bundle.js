/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${i}--\x3e`,s=new RegExp(`${i}|${n}`);class r{constructor(t,e){this.parts=[],this.element=e;const n=[],r=[],a=document.createTreeWalker(e.content,133,null,!1);let h=0,u=-1,p=0;const{strings:d,values:{length:f}}=t;for(;p<f;){const t=a.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)o(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=d[p],i=c.exec(e)[2],n=i.toLowerCase()+"$lit$",r=t.getAttribute(n);t.removeAttribute(n);const o=r.split(s);this.parts.push({type:"attribute",index:u,name:i,strings:o}),p+=o.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,r=e.split(s),a=r.length-1;for(let e=0;e<a;e++){let n,s=r[e];if(""===s)n=l();else{const t=c.exec(s);null!==t&&o(t[2],"$lit$")&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(s)}i.insertBefore(n,t),this.parts.push({type:"node",index:++u})}""===r[a]?(i.insertBefore(l(),t),n.push(t)):t.data=r[a],p+=a}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&u!==h||(u++,e.insertBefore(l(),t)),h=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(n.push(t),u--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=r.pop()}for(const t of n)t.parentNode.removeChild(t)}}const o=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},a=t=>-1!==t.index,l=()=>document.createComment(""),c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:i},parts:n}=t,s=document.createTreeWalker(i,133,null,!1);let r=p(n),o=n[r],a=-1,l=0;const c=[];let h=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,r=p(n,r),o=n[r]}c.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},p=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(a(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const d=new WeakMap,f=t=>"function"==typeof t&&d.has(t),m={},y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(t,e,i){this.t=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.t)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],n=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let r,o=0,l=0,c=s.nextNode();for(;o<n.length;)if(r=n[o],a(r)){for(;l<r.index;)l++,"TEMPLATE"===c.nodeName&&(i.push(c),s.currentNode=c.content),null===(c=s.nextNode())&&(s.currentNode=i.pop(),c=s.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(c,r.name,r.strings,this.options));o++}else this.t.push(void 0),o++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const g=` ${i} `;class w{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let r=0;r<t;r++){const t=this.strings[r],o=t.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===t.indexOf("--\x3e",o+1);const a=c.exec(t);e+=null===a?t+(s?g:n):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const v=t=>null===t||!("object"==typeof t||"function"==typeof t),_=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new k(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let n=0;n<e;n++){i+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(v(t)||!_(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===m||v(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.s(this.startNode=l()),t.s(this.endNode=l())}insertAfterPart(t){t.s(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.i);){const t=this.i;this.i=m,t(this)}const t=this.i;t!==m&&(v(t)?t!==this.value&&this.o(t):t instanceof w?this.l(t):t instanceof Node?this.h(t):_(t)?this.u(t):t===y?(this.value=y,this.clear()):this.o(t))}s(t){this.endNode.parentNode.insertBefore(t,this.endNode)}h(t){this.value!==t&&(this.clear(),this.s(t),this.value=t)}o(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.h(document.createTextNode(i)),this.value=t}l(t){const e=this.options.templateFactory(t);if(this.value instanceof b&&this.value.template===e)this.value.update(t.values);else{const i=new b(e,t.processor,this.options),n=i._clone();i.update(t.values),this.h(n),this.value=i}}u(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const s of t)i=e[n],void 0===i&&(i=new C(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(s),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class S{constructor(t,e,i){if(this.value=void 0,this.i=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.i=t}commit(){for(;f(this.i);){const t=this.i;this.i=m,t(this)}if(this.i===m)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=m}}class P extends x{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends k{}let $=!1;(()=>{try{const t={get capture(){return $=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class A{constructor(t,e,i){this.value=void 0,this.i=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.p=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;f(this.i);){const t=this.i;this.i=m,t(this)}if(this.i===m)return;const t=this.i,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.p,this.m),n&&(this.m=T(t),this.element.addEventListener(this.eventName,this.p,this.m)),this.value=t,this.i=m}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const T=t=>t&&($?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function O(t){let e=N.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},N.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join(i);return n=e.keyString.get(s),void 0===n&&(n=new r(t,t.getTemplateElement()),e.keyString.set(s,n)),e.stringsArray.set(t.strings,n),n}const N=new Map,z=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const M=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,n){const s=e[0];if("."===s){return new P(t,e.slice(1),i).parts}return"@"===s?[new A(t,e.slice(1),n.eventContext)]:"?"===s?[new S(t,e.slice(1),i)]:new x(t,e,i).parts}handleTextExpression(t){return new C(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const j=(t,...e)=>new w(t,e,"html",M)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,B=(t,e)=>`${t}--${e}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const F=t=>e=>{const n=B(e.type,t);let s=N.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},N.set(n,s));let o=s.stringsArray.get(e.strings);if(void 0!==o)return o;const a=e.strings.join(i);if(o=s.keyString.get(a),void 0===o){const i=e.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(i,t),o=new r(e,i),s.keyString.set(a,o)}return s.stringsArray.set(e.strings,o),o},L=["html","svg"],D=new Set,R=(t,e,i)=>{D.add(t);const n=i?i.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:r}=s;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=s[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{L.forEach(e=>{const i=N.get(B(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),h(t,i)})})})(t);const a=n.content;i?function(t,e,i=null){const{element:{content:n},parts:s}=t;if(null==i)return void n.appendChild(e);const r=document.createTreeWalker(n,133,null,!1);let o=p(s),a=0,l=-1;for(;r.nextNode();){for(l++,r.currentNode===i&&(a=u(e),i.parentNode.insertBefore(e,i));-1!==o&&s[o].index===l;){if(a>0){for(;-1!==o;)s[o].index+=a,o=p(s,o);return}o=p(s,o)}}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),h(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const H={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},V=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:V};class q extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this._requestUpdate(t,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||J}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=V){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||H,s="function"==typeof n?n:n.fromAttribute;return s?s(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||H.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=J){const n=this.constructor,s=n._attributeNameForProperty(t,i);if(void 0!==s){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const n=this.constructor,s=n.getPropertyOptions(t);n._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}q.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const U="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class W{constructor(t,e){if(e!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(U?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Y=(t,...e)=>{const i=e.reduce((e,i,n)=>e+(t=>{if(t instanceof W)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[n+1],t[0]);return new W(i,K)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Z={};class G extends q{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),n=[];i.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?U?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Z&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Z}}G.finalized=!0,G.render=(t,i,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const s=n.scopeName,r=z.has(i),o=I&&11===i.nodeType&&!!i.host,a=o&&!D.has(s),l=a?document.createDocumentFragment():i;if(((t,i,n)=>{let s=z.get(i);void 0===s&&(e(i,i.firstChild),z.set(i,s=new C(Object.assign({templateFactory:O},n))),s.appendInto(i)),s.setValue(t),s.commit()})(t,l,Object.assign({templateFactory:F(s)},n)),a){const t=z.get(l);z.delete(l);const n=t.value instanceof b?t.value.template:void 0;R(s,l,n),e(i,i.firstChild),i.appendChild(l),z.set(i,t)}!r&&o&&window.ShadyCSS.styleElement(i.host)};class X extends HTMLElement{static get version(){return"1.6.1"}}customElements.define("vaadin-lumo-styles",X);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Q,tt=null,et=window.HTMLImports&&window.HTMLImports.whenReady||null;function it(t){requestAnimationFrame((function(){et?et(t):(tt||(tt=new Promise(t=>{Q=t}),"complete"===document.readyState?Q():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&Q()})),tt.then((function(){t&&t()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const nt="__shadyCSSCachedStyle";let st=null,rt=null;class ot{constructor(){this.customStyles=[],this.enqueued=!1,it(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&rt&&(this.enqueued=!0,it(rt))}addCustomStyle(t){t.g||(t.g=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[nt])return t[nt];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const i=t[e];if(i[nt])continue;const n=this.getStyleForCustomStyle(i);if(n){const t=n.v||n;st&&st(t),i[nt]=t}}return t}}ot.prototype.addCustomStyle=ot.prototype.addCustomStyle,ot.prototype.getStyleForCustomStyle=ot.prototype.getStyleForCustomStyle,ot.prototype.processStyles=ot.prototype.processStyles,Object.defineProperties(ot.prototype,{transformCallback:{get:()=>st,set(t){st=t}},validateCallback:{get:()=>rt,set(t){let e=!1;rt||(e=!0),rt=t,e&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const at=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,lt=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,ct=/@media\s(.*)/;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function ht(t,e){for(let i in e)null===i?t.style.removeProperty(i):t.style.setProperty(i,e[i])}function ut(t,e){const i=window.getComputedStyle(t).getPropertyValue(e);return i?i.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const pt=!(window.ShadyDOM&&window.ShadyDOM.inUse);let dt,ft;function mt(t){dt=(!t||!t.shimcssproperties)&&(pt||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(ft=window.ShadyCSS.cssBuild);const yt=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?dt=window.ShadyCSS.nativeCss:window.ShadyCSS?(mt(window.ShadyCSS),window.ShadyCSS=void 0):mt(window.WebComponents&&window.WebComponents.flags);const bt=dt,gt=new ot;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,i){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,i){},styleSubtree(t,e){gt.processStyles(),ht(t,e)},styleElement(t){gt.processStyles()},styleDocument(t){gt.processStyles(),ht(document.body,t)},getComputedStyleValue:(t,e)=>ut(t,e),flushCustomStyles(){},nativeCss:bt,nativeShadow:pt,cssBuild:ft,disableRuntime:yt}),window.ShadyCSS.CustomStyleInterface=gt,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(t,e){return t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let wt,vt,_t=/(url\()([^)]*)(\))/g,xt=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function kt(t,e){if(t&&xt.test(t))return t;if("//"===t)return t;if(void 0===wt){wt=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",wt="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),wt)try{return new URL(t,e).href}catch(e){return t}return vt||(vt=document.implementation.createHTMLDocument("temp"),vt.base=vt.createElement("base"),vt.head.appendChild(vt.base),vt.anchor=vt.createElement("a"),vt.body.appendChild(vt.anchor)),vt.base.href=e,vt.anchor.href=t,vt.anchor.href||t}function Ct(t,e){return t.replace(_t,(function(t,i,n,s){return i+"'"+kt(n.replace(/["']/g,""),e)+"'"+s}))}function St(t){return t.substring(0,t.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Pt=!window.ShadyDOM||!window.ShadyDOM.inUse,Et=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),Pt&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})());let $t=window.Polymer&&window.Polymer.rootPath||St(document.baseURI||window.location.href),At=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Tt=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,Ot=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Nt=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,zt=window.Polymer&&window.Polymer.legacyOptimizations||!1,Mt=window.Polymer&&window.Polymer.legacyWarnings||!1,jt=window.Polymer&&window.Polymer.syncInitialRender||!1,Bt=window.Polymer&&window.Polymer.legacyUndefined||!1,It=window.Polymer&&window.Polymer.orderedComputed||!1,Ft=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Lt=window.Polymer&&window.Polymer.fastDomIf||!1,Dt=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,Rt=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Ht=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,Vt={},Jt={};function qt(t,e){Vt[t]=Jt[t.toLowerCase()]=e}function Ut(t){return Vt[t]||Jt[t.toLowerCase()]}class Kt extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let i=Ut(t);return i&&e?i.querySelector(e):i}return null}attributeChangedCallback(t,e,i,n){e!==i&&this.register()}get assetpath(){if(!this._){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=kt(this.getAttribute("assetpath")||"",t.baseURI);this._=St(e)}return this._}register(t){if(t=t||this.id){if(Ot&&void 0!==Ut(t))throw qt(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,qt(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}Kt.prototype.modules=Vt,customElements.define("dom-module",Kt);function Wt(t){return Kt.import(t)}function Yt(t){const e=Ct((t.body?t.body:t).textContent,t.baseURI),i=document.createElement("style");return i.textContent=e,i}function Zt(t){const e=t.trim().split(/\s+/),i=[];for(let t=0;t<e.length;t++)i.push(...Gt(e[t]));return i}function Gt(t){const e=Wt(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...Qt(e));const i=e.querySelector("template");i&&t.push(...Xt(i,e.assetpath)),e._styles=t}return e._styles}function Xt(t,e){if(!t._styles){const i=[],n=t.content.querySelectorAll("style");for(let t=0;t<n.length;t++){let s=n[t],r=s.getAttribute("include");r&&i.push(...Zt(r).filter((function(t,e,i){return i.indexOf(t)===e}))),e&&(s.textContent=Ct(s.textContent,e)),i.push(s)}t._styles=i}return t._styles}function Qt(t){const e=[],i=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<i.length;t++){let n=i[t];if(n.import){const t=n.import,i=n.hasAttribute("shady-unscoped");if(i&&!t._unscopedStyle){const e=Yt(t);e.setAttribute("shady-unscoped",""),t._unscopedStyle=e}else t._style||(t._style=Yt(t));e.push(i?t._unscopedStyle:t._style)}}return e}function te(t){let e=Wt(t);if(e&&void 0===e._cssText){let t=function(t){let e="",i=Qt(t);for(let t=0;t<i.length;t++)e+=i[t].textContent;return e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(e),i=e.querySelector("template");i&&(t+=function(t,e){let i="";const n=Xt(t,e);for(let t=0;t<n.length;t++){let e=n[t];e.parentNode&&e.parentNode.removeChild(e),i+=e.textContent}return i}(i,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}const ee=window.ShadyCSS.CustomStyleInterface;class ie extends HTMLElement{constructor(){super(),this._style=null,ee.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute("include");return e&&(t.removeAttribute("include"),t.textContent=function(t){let e=t.trim().split(/\s+/),i="";for(let t=0;t<e.length;t++)i+=te(e[t]);return i}(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",ie);const ne=document.createElement("template");ne.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ne.content);const se=document.createElement("template");se.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(se.content);const re=document.createElement("template");re.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(re.content);const oe=document.createElement("template");oe.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(oe.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class ae{constructor(t){this.value=t.toString()}toString(){return this.value}}function le(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof ae)return function(t){if(t instanceof ae)return t.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+t)}(t);throw new Error("non-template value passed to Polymer's html function: "+t)}const ce=function(t,...e){const i=document.createElement("template");return i.innerHTML=e.reduce((e,i,n)=>e+le(i)+t[n+1],t[0]),i},he=ce`<dom-module id="lumo-split-layout" theme-for="vaadin-split-layout">
  <template>
    <style>
      [part="splitter"] {
        min-width: var(--lumo-space-s);
        min-height: var(--lumo-space-s);
        background-color: var(--lumo-contrast-5pct);
        transition: 0.1s background-color;
      }

      [part="handle"] {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--lumo-size-m);
        height: var(--lumo-size-m);
      }

      [part="handle"]::after {
        content: "";
        display: block;
        width: 4px;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-30pct);
        transition: 0.1s opacity, 0.1s background-color;
      }

      :host([orientation="vertical"]) [part="handle"]::after {
        width: 100%;
        height: 4px;
      }

      /* Hover style */

      [part="splitter"]:hover [part="handle"]::after {
        background-color: var(--lumo-contrast-40pct);
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        [part="splitter"]:hover [part="handle"]::after {
          background-color: var(--lumo-contrast-30pct);
        }
      }

      /* Active style */

      [part="splitter"]:active [part="handle"]::after {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Small/minimal */

      :host([theme~="small"]) > [part="splitter"] {
        border-left: 1px solid var(--lumo-contrast-10pct);
        border-top: 1px solid var(--lumo-contrast-10pct);
      }

      :host([theme~="small"]) > [part="splitter"],
      :host([theme~="minimal"]) > [part="splitter"] {
        min-width: 0;
        min-height: 0;
        background-color: transparent;
      }

      :host([theme~="small"]) > [part="splitter"]::after,
      :host([theme~="minimal"]) > [part="splitter"]::after {
        content: "";
        position: absolute;
        top: -4px;
        right: -4px;
        bottom: -4px;
        left: -4px;
      }

      :host([theme~="small"]) > [part="splitter"] > [part="handle"]::after,
      :host([theme~="minimal"]) > [part="splitter"] > [part="handle"]::after {
        opacity: 0;
      }

      :host([theme~="small"]) > [part="splitter"]:hover > [part="handle"]::after,
      :host([theme~="small"]) > [part="splitter"]:active > [part="handle"]::after,
      :host([theme~="minimal"]) > [part="splitter"]:hover > [part="handle"]::after,
      :host([theme~="minimal"]) > [part="splitter"]:active > [part="handle"]::after {
        opacity: 1;
      }

      /* RTL specific styles */

      :host([theme~="small"][dir="rtl"]) > [part="splitter"] {
        border-left: auto;
        border-right: 1px solid var(--lumo-contrast-10pct);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(he.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let ue=0;const pe=function(t){let e=t.k;e||(e=new WeakMap,t.k=e);let i=ue++;return function(n){let s=n.C;if(s&&s[i])return n;let r=e,o=r.get(n);if(!o){o=t(n),r.set(n,o);let e=Object.create(o.C||s||null);e[i]=!0,o.C=e}return o}},de=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function fe(t){return t.indexOf(".")>=0}function me(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function ye(t,e){return 0===t.indexOf(e+".")}function be(t,e){return 0===e.indexOf(t+".")}function ge(t,e,i){return e+i.slice(t.length)}function we(t){if(Array.isArray(t)){let e=[];for(let i=0;i<t.length;i++){let n=t[i].toString().split(".");for(let t=0;t<n.length;t++)e.push(n[t])}return e.join(".")}return t}function ve(t){return Array.isArray(t)?we(t).split("."):t.toString().split(".")}function _e(t,e,i){let n=t,s=ve(e);for(let t=0;t<s.length;t++){if(!n)return;n=n[s[t]]}return i&&(i.path=s.join(".")),n}function xe(t,e,i){let n=t,s=ve(e),r=s[s.length-1];if(s.length>1){for(let t=0;t<s.length-1;t++){if(n=n[s[t]],!n)return}n[r]=i}else n[e]=i;return s.join(".")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ke={},Ce=/-[a-z]/g,Se=/([A-Z])/g;function Pe(t){return ke[t]||(ke[t]=t.indexOf("-")<0?t:t.replace(Ce,t=>t[1].toUpperCase()))}function Ee(t){return ke[t]||(ke[t]=t.replace(Se,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let $e=0,Ae=0,Te=[],Oe=0,Ne=!1,ze=document.createTextNode("");new window.MutationObserver((function(){Ne=!1;const t=Te.length;for(let e=0;e<t;e++){let t=Te[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}Te.splice(0,t),Ae+=t})).observe(ze,{characterData:!0});const Me={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},je={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},Be={run:t=>(Ne||(Ne=!0,ze.textContent=Oe++),Te.push(t),$e++),cancel(t){const e=t-Ae;if(e>=0){if(!Te[e])throw new Error("invalid async handle: "+t);Te[e]=null}}},Ie=Be,Fe=pe(t=>class extends t{static createProperties(t){const e=this.prototype;for(let i in t)i in e||e._createPropertyAccessor(i)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.S=Object.assign({},this.S)),this.S[t]||(this.S[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.P=Object.assign({},this.P));let e=this.P[t];return e||(e=this.constructor.attributeNameForProperty(t),this.P[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.A[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.T=!1,this.O=!1,this.N=!1,this.A={},this.M=null,this.j=null,this.B=null,this.I=0,this.F=!1,this._initializeProperties()}ready(){this.O=!0,this._flushProperties()}_initializeProperties(){for(let t in this.S)this.hasOwnProperty(t)&&(this.B=this.B||{},this.B[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.A[t]}_setPendingProperty(t,e,i){let n=this.A[t],s=this._shouldPropertyChange(t,e,n);return s&&(this.M||(this.M={},this.j={}),this.j&&!(t in this.j)&&(this.j[t]=n),this.A[t]=e,this.M[t]=e),s}_isPropertyPending(t){return!(!this.M||!this.M.hasOwnProperty(t))}_invalidateProperties(){!this.N&&this.O&&(this.N=!0,Ie.run(()=>{this.N&&(this.N=!1,this._flushProperties())}))}_enableProperties(){this.T||(this.T=!0,this.B&&(this._initializeInstanceProperties(this.B),this.B=null),this.ready())}_flushProperties(){this.I++;const t=this.A,e=this.M,i=this.j;this._shouldPropertiesChange(t,e,i)&&(this.M=null,this.j=null,this._propertiesChanged(t,e,i)),this.I--}_shouldPropertiesChange(t,e,i){return Boolean(e)}_propertiesChanged(t,e,i){}_shouldPropertyChange(t,e,i){return i!==e&&(i==i||e==e)}attributeChangedCallback(t,e,i,n){e!==i&&this._attributeToProperty(t,i),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,i,n)}_attributeToProperty(t,e,i){if(!this.F){const n=this.P,s=n&&n[t]||t;this[s]=this._deserializeValue(e,i||this.constructor.typeForProperty(s))}}_propertyToAttribute(t,e,i){this.F=!0,i=arguments.length<3?this[t]:i,this._valueToNodeAttribute(this,i,e||this.constructor.attributeNameForProperty(t)),this.F=!1}_valueToNodeAttribute(t,e,i){const n=this._serializeValue(e);"class"!==i&&"name"!==i&&"slot"!==i||(t=de(t)),void 0===n?t.removeAttribute(i):t.setAttribute(i,n)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}),Le={};let De=HTMLElement.prototype;for(;De;){let t=Object.getOwnPropertyNames(De);for(let e=0;e<t.length;e++)Le[t[e]]=!0;De=Object.getPrototypeOf(De)}const Re=pe(t=>{const e=Fe(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(Pe(t[e]))}static attributeNameForProperty(t){return Ee(t)}_initializeProperties(){this.L&&(this._initializeProtoProperties(this.L),this.L=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const i=this;i.hasAttribute(t)||this._valueToNodeAttribute(i,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let i;switch(e){case Object:try{i=JSON.parse(t)}catch(e){i=t}break;case Array:try{i=JSON.parse(t)}catch(e){i=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+t)}break;case Date:i=isNaN(t)?String(t):Number(t),i=new Date(i);break;default:i=super._deserializeValue(t,e)}return i}_definePropertyAccessor(t,e){!function(t,e){if(!Le[e]){let i=t[e];void 0!==i&&(t.A?t._setPendingProperty(e,i):(t.L?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.L=Object.create(t.L)):t.L={},t.L[e]=i))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.S&&this.S[t]}_isPropertyPending(t){return Boolean(this.M&&t in this.M)}}}),He={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ve=!1,Je=!1;function qe(t){(function(){if(!Ve){Ve=!0;const t=document.createElement("textarea");t.placeholder="a",Je=t.placeholder===t.textContent}return Je})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}function Ue(t){let e=t.getAttribute("is");if(e&&He[e]){let i=t;for(i.removeAttribute("is"),t=i.ownerDocument.createElement(e),i.parentNode.replaceChild(t,i),t.appendChild(i);i.attributes.length;)t.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return t}function Ke(t,e){let i=e.parentInfo&&Ke(t,e.parentInfo);if(!i)return t;for(let t=i.firstChild,n=0;t;t=t.nextSibling)if(e.parentIndex===n++)return t}function We(t,e,i,n){n.id&&(e[n.id]=i)}function Ye(t,e,i){if(i.events&&i.events.length)for(let n,s=0,r=i.events;s<r.length&&(n=r[s]);s++)t._addMethodEventListenerToNode(e,n.name,n.value,t)}function Ze(t,e,i,n){i.templateInfo&&(e._templateInfo=i.templateInfo,e._parentTemplateInfo=n)}const Ge=pe(t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let i=t._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(e),i.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,i,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,i){return this._parseTemplateNode(t.content,e,i)}static _parseTemplateNode(t,e,i){let n=!1,s=t;return"template"!=s.localName||s.hasAttribute("preserve-content")?"slot"===s.localName&&(e.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(s,e,i)||n,qe(s),s.firstChild&&this._parseTemplateChildNodes(s,e,i),s.hasAttributes&&s.hasAttributes()&&(n=this._parseTemplateNodeAttributes(s,e,i)||n),n||i.noted}static _parseTemplateChildNodes(t,e,i){if("script"!==t.localName&&"style"!==t.localName)for(let n,s=t.firstChild,r=0;s;s=n){if("template"==s.localName&&(s=Ue(s)),n=s.nextSibling,s.nodeType===Node.TEXT_NODE){let i=n;for(;i&&i.nodeType===Node.TEXT_NODE;)s.textContent+=i.textContent,n=i.nextSibling,t.removeChild(i),i=n;if(e.stripWhiteSpace&&!s.textContent.trim()){t.removeChild(s);continue}}let o={parentIndex:r,parentInfo:i};this._parseTemplateNode(s,e,o)&&(o.infoIndex=e.nodeInfoList.push(o)-1),s.parentNode&&r++}}static _parseTemplateNestedTemplate(t,e,i){let n=t,s=this._parseTemplate(n,e);return(s.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),i.templateInfo=s,!0}static _parseTemplateNodeAttributes(t,e,i){let n=!1,s=Array.from(t.attributes);for(let r,o=s.length-1;r=s[o];o--)n=this._parseTemplateNodeAttribute(t,e,i,r.name,r.value)||n;return n}static _parseTemplateNodeAttribute(t,e,i,n,s){return"on-"===n.slice(0,3)?(t.removeAttribute(n),i.events=i.events||[],i.events.push({name:n.slice(3),value:s}),!0):"id"===n&&(i.id=s,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let i=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,n=e.content||t.content,s=document.importNode(n,!0);s.D=!e.hasInsertionPoint;let r=s.nodeList=new Array(i.length);s.$={};for(let t,n=0,o=i.length;n<o&&(t=i[n]);n++){let i=r[n]=Ke(s,t);We(0,s.$,i,t),Ze(0,i,t,e),Ye(this,i,t)}return s=s,s}_addMethodEventListenerToNode(t,e,i,n){let s=function(t,e,i){return t=t._methodHost||t,function(e){t[i]?t[i](e,e.detail):console.warn("listener method `"+i+"` not defined")}}(n=n||t,0,i);return this._addEventListenerToNode(t,e,s),s}_addEventListenerToNode(t,e,i){t.addEventListener(e,i)}_removeEventListenerFromNode(t,e,i){t.removeEventListener(e,i)}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Xe=0;const Qe=[],ti={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},ei=/[A-Z]/;function ii(t,e,i){let n=t[e];if(n){if(!t.hasOwnProperty(e)&&(n=t[e]=Object.create(t[e]),i))for(let t in n){let e=n[t],i=n[t]=Array(e.length);for(let t=0;t<e.length;t++)i[t]=e[t]}}else n=t[e]={};return n}function ni(t,e,i,n,s,r){if(e){let o=!1;const a=Xe++;for(let l in i){let c=e[s?me(l):l];if(c)for(let e,h=0,u=c.length;h<u&&(e=c[h]);h++)e.info&&e.info.lastRun===a||s&&!ri(l,e.trigger)||(e.info&&(e.info.lastRun=a),e.fn(t,l,i,n,e.info,s,r),o=!0)}return o}return!1}function si(t,e,i,n,s,r,o,a){let l=!1,c=e[o?me(n):n];if(c)for(let e,h=0,u=c.length;h<u&&(e=c[h]);h++)e.info&&e.info.lastRun===i||o&&!ri(n,e.trigger)||(e.info&&(e.info.lastRun=i),e.fn(t,n,s,r,e.info,o,a),l=!0);return l}function ri(t,e){if(e){let i=e.name;return i==t||!(!e.structured||!ye(i,t))||!(!e.wildcard||!be(i,t))}return!0}function oi(t,e,i,n,s){let r="string"==typeof s.method?t[s.method]:s.method,o=s.property;r?r.call(t,t.A[o],n[o]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function ai(t,e,i){let n=me(e);if(n!==e){return li(t,Ee(n)+"-changed",i[e],e),!0}return!1}function li(t,e,i,n){let s={value:i,queueProperty:!0};n&&(s.path=n),de(t).dispatchEvent(new CustomEvent(e,{detail:s}))}function ci(t,e,i,n,s,r){let o=(r?me(e):e)!=e?e:null,a=o?_e(t,o):t.A[e];o&&void 0===a&&(a=i[e]),li(t,s.eventName,a,o)}function hi(t,e,i,n,s){let r=t.A[e];At&&(r=At(r,s.attrName,"attribute",t)),t._propertyToAttribute(e,s.attrName,r)}function ui(t,e,i,n){let s=t[ti.COMPUTE];if(s)if(It){Xe++;const r=function(t){let e=t.constructor.R;if(!e){e=new Map;const i=t[ti.COMPUTE];let n,{counts:s,ready:r,total:o}=function(t){const e=t.H,i={},n=t[ti.COMPUTE],s=[];let r=0;for(let t in e){const n=e[t];r+=i[t]=n.args.filter(t=>!t.literal).length+(n.dynamicFn?1:0)}for(let t in n)e[t]||s.push(t);return{counts:i,ready:s,total:r}}(t);for(;n=r.shift();){e.set(n,e.size);const t=i[n];t&&t.forEach(t=>{const e=t.info.methodInfo;--o,0==--s[e]&&r.push(e)})}if(0!==o){const e=t;console.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.R=e}return e}(t),o=[];for(let t in e)di(t,s,o,r,n);let a;for(;a=o.shift();)fi(t,"",e,i,a)&&di(a.methodInfo,s,o,r,n);Object.assign(i,t.j),Object.assign(e,t.M),t.M=null}else{let r=e;for(;ni(t,s,r,i,n);)Object.assign(i,t.j),Object.assign(e,t.M),r=t.M,t.M=null}}const pi=(t,e,i)=>{let n=0,s=e.length-1,r=-1;for(;n<=s;){const o=n+s>>1,a=i.get(e[o].methodInfo)-i.get(t.methodInfo);if(a<0)n=o+1;else{if(!(a>0)){r=o;break}s=o-1}}r<0&&(r=s+1),e.splice(r,0,t)},di=(t,e,i,n,s)=>{const r=e[s?me(t):t];if(r)for(let e=0;e<r.length;e++){const o=r[e];o.info.lastRun===Xe||s&&!ri(t,o.trigger)||(o.info.lastRun=Xe,pi(o.info,i,n))}};function fi(t,e,i,n,s){let r=_i(t,e,i,n,s);if(r===Qe)return!1;let o=s.methodInfo;return t.S&&t.S[o]?t._setPendingProperty(o,r,!0):(t[o]=r,!1)}function mi(t,e,i,n,s,r,o){i.bindings=i.bindings||[];let a={kind:n,target:s,parts:r,literal:o,isCompound:1!==r.length};if(i.bindings.push(a),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(a)){let{event:t,negate:e}=a.parts[0];a.listenerEvent=t||Ee(s)+"-changed",a.listenerNegate=e}let l=e.nodeInfoList.length;for(let i=0;i<a.parts.length;i++){let n=a.parts[i];n.compoundIndex=i,yi(t,e,a,n,l)}}function yi(t,e,i,n,s){if(!n.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let r=n.dependencies,o={index:s,binding:i,part:n,evaluator:t};for(let i=0;i<r.length;i++){let n=r[i];"string"==typeof n&&(n=Pi(n),n.wildcard=!0),t._addTemplatePropertyEffect(e,n.rootProperty,{fn:bi,info:o,trigger:n})}}}function bi(t,e,i,n,s,r,o){let a=o[s.index],l=s.binding,c=s.part;if(r&&c.source&&e.length>c.source.length&&"property"==l.kind&&!l.isCompound&&a.V&&a.S&&a.S[l.target]){let n=i[e];e=ge(c.source,l.target,e),a._setPendingPropertyOrPath(e,n,!1,!0)&&t._enqueueClient(a)}else{let o=s.evaluator._evaluateBinding(t,c,e,i,n,r);o!==Qe&&function(t,e,i,n,s){s=function(t,e,i,n){if(i.isCompound){let s=t.J[i.target];s[n.compoundIndex]=e,e=s.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,s,i,n),At&&(s=At(s,i.target,i.kind,e));if("attribute"==i.kind)t._valueToNodeAttribute(e,s,i.target);else{let n=i.target;e.V&&e.S&&e.S[n]?e[ti.READ_ONLY]&&e[ti.READ_ONLY][n]||e._setPendingProperty(n,s)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,n,s)}}(t,a,l,c,o)}}function gi(t,e){if(e.isCompound){let i=t.J||(t.J={}),n=e.parts,s=new Array(n.length);for(let t=0;t<n.length;t++)s[t]=n[t].literal;let r=e.target;i[r]=s,e.literal&&"property"==e.kind&&("className"===r&&(t=de(t)),t[r]=e.literal)}}function wi(t,e,i){if(i.listenerEvent){let n=i.parts[0];t.addEventListener(i.listenerEvent,(function(t){!function(t,e,i,n,s){let r,o=t.detail,a=o&&o.path;a?(n=ge(i,n,a),r=o&&o.value):r=t.currentTarget[i],r=s?!r:r,e[ti.READ_ONLY]&&e[ti.READ_ONLY][n]||!e._setPendingPropertyOrPath(n,r,!0,Boolean(a))||o&&o.queueProperty||e._invalidateProperties()}(t,e,i.target,n.source,n.negate)}))}}function vi(t,e,i,n,s,r){r=e.static||r&&("object"!=typeof r||r[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:s,dynamicFn:r};for(let s,r=0;r<e.args.length&&(s=e.args[r]);r++)s.literal||t._addPropertyEffect(s.rootProperty,i,{fn:n,info:o,trigger:s});return r&&t._addPropertyEffect(e.methodName,i,{fn:n,info:o}),o}function _i(t,e,i,n,s){let r=t._methodHost||t,o=r[s.methodName];if(o){let n=t._marshalArgs(s.args,e,i);return n===Qe?Qe:o.apply(r,n)}s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const xi=[],ki=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function Ci(t){let e="";for(let i=0;i<t.length;i++){e+=t[i].literal||""}return e}function Si(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:xi};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let i=Pi(t);return i.literal||(e.static=!1),i}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function Pi(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:e,value:"",literal:!1},n=e[0];switch("-"===n&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=e.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(e),i.literal=!0}return i.literal||(i.rootProperty=me(e),i.structured=fe(e),i.structured&&(i.wildcard=".*"==e.slice(-2),i.wildcard&&(i.name=e.slice(0,-2)))),i}function Ei(t,e,i){let n=_e(t,i);return void 0===n&&(n=e[i]),n}function $i(t,e,i,n){const s={indexSplices:n};Bt&&!t._overrideLegacyUndefined&&(e.splices=s),t.notifyPath(i+".splices",s),t.notifyPath(i+".length",e.length),Bt&&!t._overrideLegacyUndefined&&(s.indexSplices=[])}function Ai(t,e,i,n,s,r){$i(t,e,i,[{index:n,addedCount:s,removed:r,object:e,type:"splice"}])}const Ti=pe(t=>{const e=Ge(Re(t));return class extends e{constructor(){super(),this.V=!0,this.q,this.U,this.K,this.W,this.Y,this.J,this.Z,this.G,this.X,this.A,this.M,this.j,this.tt,this.H,this.et,this.it,this.nt,this.st,this.rt,this.ot,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return ti}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.q=!1,this.U=null,this.K=null,this.W=null,this.Y=!1,this.J=this.J||null,this.Z=this.Z||null,this.G={},this.X=!1}_registerHost(){if(Oi.length){let t=Oi[Oi.length-1];t._enqueueClient(this),this.Z=t}}_initializeProtoProperties(t){this.A=Object.create(t),this.M=Object.create(t),this.j={}}_initializeInstanceProperties(t){let e=this[ti.READ_ONLY];for(let i in t)e&&e[i]||(this.M=this.M||{},this.j=this.j||{},this.A[i]=this.M[i]=t[i])}_addPropertyEffect(t,e,i){this._createPropertyAccessor(t,e==ti.READ_ONLY);let n=ii(this,e,!0)[t];n||(n=this[e][t]=[]),n.push(i)}_removePropertyEffect(t,e,i){let n=ii(this,e,!0)[t],s=n.indexOf(i);s>=0&&n.splice(s,1)}_hasPropertyEffect(t,e){let i=this[e];return Boolean(i&&i[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,ti.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,ti.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,ti.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,ti.COMPUTE)}_setPendingPropertyOrPath(t,e,i,n){if(n||me(Array.isArray(t)?t[0]:t)!==t){if(!n){let i=_e(this,t);if(!(t=xe(this,t,e))||!super._shouldPropertyChange(t,e,i))return!1}if(this.Y=!0,this._setPendingProperty(t,e,i))return function(t,e,i){let n=t.W;if(n){let s;for(let r in n){let o=n[r];be(r,e)?(s=ge(r,o,e),t._setPendingPropertyOrPath(s,i,!0,!0)):be(o,e)&&(s=ge(o,r,e),t._setPendingPropertyOrPath(s,i,!0,!0))}}}(this,t,e),!0}else{if(this.S&&this.S[t])return this._setPendingProperty(t,e,i);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,i){i===t[e]&&"object"!=typeof i||("className"===e&&(t=de(t)),t[e]=i)}_setPendingProperty(t,e,i){let n=this.Y&&fe(t),s=n?this.G:this.A;return!!this._shouldPropertyChange(t,e,s[t])&&(this.M||(this.M={},this.j={}),t in this.j||(this.j[t]=this.A[t]),n?this.G[t]=e:this.A[t]=e,this.M[t]=e,(n||this[ti.NOTIFY]&&this[ti.NOTIFY][t])&&(this.K=this.K||{},this.K[t]=i),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.O&&this._flushProperties()}_enqueueClient(t){this.U=this.U||[],t!==this&&this.U.push(t)}_flushClients(){this.q?this.at():(this.q=!0,this._readyClients(),this.O=!0)}at(){let t=this.U;if(t){this.U=null;for(let e=0;e<t.length;e++){let i=t[e];i.T?i.M&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.at()}setProperties(t,e){for(let i in t)!e&&this[ti.READ_ONLY]&&this[ti.READ_ONLY][i]||this._setPendingPropertyOrPath(i,t[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.q||this._flushClients(),this.M&&this._flushProperties()}_propertiesChanged(t,e,i){let n,s=this.Y;this.Y=!1,ui(this,e,i,s),n=this.K,this.K=null,this._propagatePropertyChanges(e,i,s),this._flushClients(),ni(this,this[ti.REFLECT],e,i,s),ni(this,this[ti.OBSERVE],e,i,s),n&&function(t,e,i,n,s){let r,o,a=t[ti.NOTIFY],l=Xe++;for(let o in e)e[o]&&(a&&si(t,a,l,o,i,n,s)||s&&ai(t,o,i))&&(r=!0);r&&(o=t.Z)&&o._invalidateProperties&&o._invalidateProperties()}(this,n,e,i,s),1==this.I&&(this.G={})}_propagatePropertyChanges(t,e,i){this[ti.PROPAGATE]&&ni(this,this[ti.PROPAGATE],t,e,i),this.ot&&this._runEffectsForTemplate(this.ot,t,e,i)}_runEffectsForTemplate(t,e,i,n){const s=(e,n)=>{ni(this,t.propertyEffects,e,i,n,t.nodeList);for(let s=t.firstChild;s;s=s.nextSibling)this._runEffectsForTemplate(s,e,i,n)};t.runEffects?t.runEffects(s,e,n):s(e,n)}linkPaths(t,e){t=we(t),e=we(e),this.W=this.W||{},this.W[t]=e}unlinkPaths(t){t=we(t),this.W&&delete this.W[t]}notifySplices(t,e){let i={path:""};$i(this,_e(this,t,i),i.path,e)}get(t,e){return _e(e||this,t)}set(t,e,i){i?xe(i,t,e):this[ti.READ_ONLY]&&this[ti.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let i={path:""},n=_e(this,t,i),s=n.length,r=n.push(...e);return e.length&&Ai(this,n,i.path,s,e.length,[]),r}pop(t){let e={path:""},i=_e(this,t,e),n=Boolean(i.length),s=i.pop();return n&&Ai(this,i,e.path,i.length,0,[s]),s}splice(t,e,i,...n){let s,r={path:""},o=_e(this,t,r);return e<0?e=o.length-Math.floor(-e):e&&(e=Math.floor(e)),s=2===arguments.length?o.splice(e):o.splice(e,i,...n),(n.length||s.length)&&Ai(this,o,r.path,e,n.length,s),s}shift(t){let e={path:""},i=_e(this,t,e),n=Boolean(i.length),s=i.shift();return n&&Ai(this,i,e.path,0,0,[s]),s}unshift(t,...e){let i={path:""},n=_e(this,t,i),s=n.unshift(...e);return e.length&&Ai(this,n,i.path,0,e.length,[]),s}notifyPath(t,e){let i;if(1==arguments.length){let n={path:""};e=_e(this,t,n),i=n.path}else i=Array.isArray(t)?we(t):t;this._setPendingPropertyOrPath(i,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var i;this._addPropertyEffect(t,ti.READ_ONLY),e&&(this["_set"+(i=t,i[0].toUpperCase()+i.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,i){let n={property:t,method:e,dynamicFn:Boolean(i)};this._addPropertyEffect(t,ti.OBSERVE,{fn:oi,info:n,trigger:{name:t}}),i&&this._addPropertyEffect(e,ti.OBSERVE,{fn:oi,info:n,trigger:{name:e}})}_createMethodObserver(t,e){let i=Si(t);if(!i)throw new Error("Malformed observer expression '"+t+"'");vi(this,i,ti.OBSERVE,_i,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,ti.NOTIFY,{fn:ci,info:{eventName:Ee(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,ti.REFLECT,{fn:hi,info:{attrName:e}})}_createComputedProperty(t,e,i){let n=Si(e);if(!n)throw new Error("Malformed computed expression '"+e+"'");const s=vi(this,n,ti.COMPUTE,fi,t,i);ii(this,"__computeInfo")[t]=s}_marshalArgs(t,e,i){const n=this.A,s=[];for(let r=0,o=t.length;r<o;r++){let{name:o,structured:a,wildcard:l,value:c,literal:h}=t[r];if(!h)if(l){const t=be(o,e),s=Ei(n,i,t?e:o);c={path:t?e:o,value:s,base:t?_e(n,o):s}}else c=a?Ei(n,i,o):n[o];if(Bt&&!this._overrideLegacyUndefined&&void 0===c&&t.length>1)return Qe;s[r]=c}return s}static addPropertyEffect(t,e,i){this.prototype._addPropertyEffect(t,e,i)}static createPropertyObserver(t,e,i){this.prototype._createPropertyObserver(t,e,i)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,i){this.prototype._createComputedProperty(t,e,i)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let i=this.constructor._parseTemplate(t),n=this.lt==i;if(!n)for(let t in i.propertyEffects)this._createPropertyAccessor(t);if(e)if(i=Object.create(i),i.wasPreBound=n,this.ot){const e=t._parentTemplateInfo||this.ot,n=e.lastChild;i.parent=e,e.lastChild=i,i.previousSibling=n,n?n.nextSibling=i:e.firstChild=i}else this.ot=i;else this.lt=i;return i}static _addTemplatePropertyEffect(t,e,i){(t.hostProps=t.hostProps||{})[e]=!0;let n=t.propertyEffects=t.propertyEffects||{};(n[e]=n[e]||[]).push(i)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),Oi.push(this);let i=super._stampTemplate(t,e);if(Oi.pop(),e.nodeList=i.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=i.firstChild;e;e=e.nextSibling)t.push(e)}return i.templateInfo=e,function(t,e){let{nodeList:i,nodeInfoList:n}=e;if(n.length)for(let e=0;e<n.length;e++){let s=n[e],r=i[e],o=s.bindings;if(o)for(let e=0;e<o.length;e++){let i=o[e];gi(r,i),wi(r,t,i)}r.Z=t}}(this,e),this.q&&(this._runEffectsForTemplate(e,this.A,null,!1),this._flushClients()),i}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:i,nextSibling:n,parent:s}=e;i?i.nextSibling=n:s&&(s.firstChild=n),n?n.previousSibling=i:s&&(s.lastChild=i),e.nextSibling=e.previousSibling=null;let r=e.childNodes;for(let t=0;t<r.length;t++){let e=r[t];de(de(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,i,n){let s=e._parseTemplateNode.call(this,t,i,n);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,i);e&&(t.textContent=Ci(e)||" ",mi(this,i,n,"text","textContent",e),s=!0)}return s}static _parseTemplateNodeAttribute(t,i,n,s,r){let o=this._parseBindings(r,i);if(o){let e=s,r="property";ei.test(s)?r="attribute":"$"==s[s.length-1]&&(s=s.slice(0,-1),r="attribute");let a=Ci(o);return a&&"attribute"==r&&("class"==s&&t.hasAttribute("class")&&(a+=" "+t.getAttribute(s)),t.setAttribute(s,a)),"attribute"==r&&"disable-upgrade$"==e&&t.setAttribute(s,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===r&&(s=Pe(s)),mi(this,i,n,r,s,o,a),!0}return e._parseTemplateNodeAttribute.call(this,t,i,n,s,r)}static _parseTemplateNestedTemplate(t,i,n){let s=e._parseTemplateNestedTemplate.call(this,t,i,n);const r=t.parentNode,o=n.templateInfo,a="dom-if"===r.localName,l="dom-repeat"===r.localName;Ft&&(a||l)&&(r.removeChild(t),(n=n.parentInfo).templateInfo=o,n.noted=!0,s=!1);let c=o.hostProps;if(Lt&&a)c&&(i.hostProps=Object.assign(i.hostProps||{},c),Ft||(n.parentInfo.noted=!0));else{let t="{";for(let e in c){mi(this,i,n,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}}return s}static _parseBindings(t,e){let i,n=[],s=0;for(;null!==(i=ki.exec(t));){i.index>s&&n.push({literal:t.slice(s,i.index)});let r=i[1][0],o=Boolean(i[2]),a=i[3].trim(),l=!1,c="",h=-1;"{"==r&&(h=a.indexOf("::"))>0&&(c=a.substring(h+2),a=a.substring(0,h),l=!0);let u=Si(a),p=[];if(u){let{args:t,methodName:i}=u;for(let e=0;e<t.length;e++){let i=t[e];i.literal||p.push(i)}let n=e.dynamicFns;(n&&n[i]||u.static)&&(p.push(i),u.dynamicFn=!0)}else p.push(a);n.push({source:a,mode:r,negate:o,customEvent:l,signature:u,dependencies:p,event:c}),s=ki.lastIndex}if(s&&s<t.length){let e=t.substring(s);e&&n.push({literal:e})}return n.length?n:null}static _evaluateBinding(t,e,i,n,s,r){let o;return o=e.signature?_i(t,i,n,0,e.signature):i!=e.source?_e(t,e.source):r&&fe(i)?_e(t,i):t.A[i],e.negate&&(o=!o),o}}}),Oi=[];const Ni=pe(t=>{const e=Fe(t);function i(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof s?e:null}function n(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const i=t.properties;i&&(e=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(t){const e={};for(let i in t){const n=t[i];e[i]="function"==typeof n?{type:n}:n}return e}(i))}t.ct=e}return t.ct}class s extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const t=this._properties;this.ht=t?Object.keys(t).map(t=>this.prototype._addPropertyToAttributeMap(t)):[]}return this.ht}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=i(this);t&&t.finalize(),this.ut=!0,this._finalizeClass()}}static _finalizeClass(){const t=n(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=i(this);this.pt=Object.assign({},t&&t._properties,n(this))}return this.pt}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s}),zi=window.ShadyCSS&&window.ShadyCSS.cssBuild,Mi=pe(t=>{const e=Ni(Ti(t));function i(t,e,i,n){i.computed&&(i.readOnly=!0),i.computed&&(t._hasReadOnlyEffect(e)?console.warn(`Cannot redefine computed property '${e}'.`):t._createComputedProperty(e,i.computed,n)),i.readOnly&&!t._hasReadOnlyEffect(e)?t._createReadOnlyProperty(e,!i.computed):!1===i.readOnly&&t._hasReadOnlyEffect(e)&&console.warn(`Cannot make readOnly property '${e}' non-readOnly.`),i.reflectToAttribute&&!t._hasReflectEffect(e)?t._createReflectedProperty(e):!1===i.reflectToAttribute&&t._hasReflectEffect(e)&&console.warn(`Cannot make reflected property '${e}' non-reflected.`),i.notify&&!t._hasNotifyEffect(e)?t._createNotifyingProperty(e):!1===i.notify&&t._hasNotifyEffect(e)&&console.warn(`Cannot make notify property '${e}' non-notify.`),i.observer&&t._createPropertyObserver(e,i.observer,n[i.observer]),t._addPropertyToAttributeMap(e)}function n(t,e,i,n){if(!zi){const s=e.content.querySelectorAll("style"),r=Xt(e),o=function(t){let e=Wt(t);return e?Qt(e):[]}(i),a=e.content.firstElementChild;for(let i=0;i<o.length;i++){let s=o[i];s.textContent=t._processStyleText(s.textContent,n),e.content.insertBefore(s,a)}let l=0;for(let e=0;e<r.length;e++){let i=r[e],o=s[l];o!==i?(i=i.cloneNode(!0),o.parentNode.insertBefore(i,o)):l++,i.textContent=t._processStyleText(i.textContent,n)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,i),Ht&&zi&&Et){const i=e.content.querySelectorAll("style");if(i){let e="";Array.from(i).forEach(t=>{e+=t.textContent,t.parentNode.removeChild(t)}),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}}return class extends e{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){e._finalizeClass.call(this);const t=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.dt=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.dt);var i;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):zt||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let e in t)i(this.prototype,e,t[e],t)}static createObservers(t,e){const i=this.prototype;for(let n=0;n<t.length;n++)i._createMethodObserver(t[n],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!Ot||Nt)&&(e=Kt.import(t,"template"),Ot&&!e))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+t);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=St(t.url);else{const t=Kt.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=$t,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.ft=null;let e=t._properties;for(let i in e){let n=e[i];"value"in n&&(t.ft=t.ft||{},t.ft[i]=n)}}return t.ft}(this.constructor);if(t)for(let e in t){let i=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return Ct(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.yt){e.yt=!0;const i=this.importPath;n(this,e,t,i?kt(i):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=de(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),jt&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=kt(this.importPath)),kt(t,e)}static _parseTemplateContent(t,i,n){return i.dynamicFns=i.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,i,n)}static _addTemplatePropertyEffect(t,i,n){return!Mt||i in this._properties||n.info.part.signature&&n.info.part.signature.static||n.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,i,n)}}}),ji=Mi(HTMLElement);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Bi{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,Ii.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Ii.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,i){return t instanceof Bi?t._cancelAsync():t=new Bi,t.setConfig(e,i),t}}let Ii=new Set;const Fi=function(t){Ii.add(t)},Li=function(){const t=Boolean(Ii.size);return Ii.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Di="string"==typeof document.head.style.touchAction,Ri="__polymerGesturesHandled",Hi="__polymerGesturesTouchAction",Vi=["mousedown","mousemove","mouseup","click"],Ji=[0,1,4,2],qi=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function Ui(t){return Vi.indexOf(t)>-1}let Ki=!1;function Wi(t){if(!Ui(t)&&"touchend"!==t)return Di&&Ki&&Tt?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){Ki=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let Yi=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Zi=[],Gi={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Xi={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Qi(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let i=t.getRootNode();if(t.id){let n=i.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<n.length;t++)e.push(n[t])}}return e}let tn=function(t){let e=t.sourceCapabilities;var i;if((!e||e.firesTouchEvents)&&(t[Ri]={skip:!0},"click"===t.type)){let e=!1,n=an(t);for(let t=0;t<n.length;t++){if(n[t].nodeType===Node.ELEMENT_NODE)if("label"===n[t].localName)Zi.push(n[t]);else if(i=n[t],Gi[i.localName]){let i=Qi(n[t]);for(let t=0;t<i.length;t++)e=e||Zi.indexOf(i[t])>-1}if(n[t]===sn.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function en(t){let e=Yi?["click"]:Vi;for(let i,n=0;n<e.length;n++)i=e[n],t?(Zi.length=0,document.addEventListener(i,tn,!0)):document.removeEventListener(i,tn,!0)}function nn(t){let e=t.type;if(!Ui(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!qi&&(e=Ji[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let sn={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function rn(t,e,i){t.movefn=e,t.upfn=i,document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}function on(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",(function(t){sn.mouse.mouseIgnoreJob||en(!0),sn.mouse.target=an(t)[0],sn.mouse.mouseIgnoreJob=Bi.debounce(sn.mouse.mouseIgnoreJob,Me.after(2500),(function(){en(),sn.mouse.target=null,sn.mouse.mouseIgnoreJob=null}))}),!!Ki&&{passive:!0});const an=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],ln={},cn=[];function hn(t){const e=an(t);return e.length>0?e[0]:t.target}function un(t){let e,i=t.type,n=t.currentTarget.bt;if(!n)return;let s=n[i];if(s){if(!t[Ri]&&(t[Ri]={},"touch"===i.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===i&&1===t.touches.length&&(sn.touch.id=e.identifier),sn.touch.id!==e.identifier)return;Di||"touchstart"!==i&&"touchmove"!==i||function(t){let e=t.changedTouches[0],i=t.type;if("touchstart"===i)sn.touch.x=e.clientX,sn.touch.y=e.clientY,sn.touch.scrollDecided=!1;else if("touchmove"===i){if(sn.touch.scrollDecided)return;sn.touch.scrollDecided=!0;let i=function(t){let e="auto",i=an(t);for(let t,n=0;n<i.length;n++)if(t=i[n],t[Hi]){e=t[Hi];break}return e}(t),n=!1,s=Math.abs(sn.touch.x-e.clientX),r=Math.abs(sn.touch.y-e.clientY);t.cancelable&&("none"===i?n=!0:"pan-x"===i?n=r>s:"pan-y"===i&&(n=s>r)),n?t.preventDefault():bn("track")}}(t)}if(e=t[Ri],!e.skip){for(let i,n=0;n<cn.length;n++)i=cn[n],s[i.name]&&!e[i.name]&&i.flow&&i.flow.start.indexOf(t.type)>-1&&i.reset&&i.reset();for(let n,r=0;r<cn.length;r++)n=cn[r],s[n.name]&&!e[n.name]&&(e[n.name]=!0,n[i](t))}}}function pn(t,e,i){return!!ln[e]&&(function(t,e,i){let n=ln[e],s=n.deps,r=n.name,o=t.bt;o||(t.bt=o={});for(let e,i,n=0;n<s.length;n++)e=s[n],Yi&&Ui(e)&&"click"!==e||(i=o[e],i||(o[e]=i={_count:0}),0===i._count&&t.addEventListener(e,un,Wi(e)),i[r]=(i[r]||0)+1,i._count=(i._count||0)+1);t.addEventListener(e,i),n.touchAction&&mn(t,n.touchAction)}(t,e,i),!0)}function dn(t,e,i){return!!ln[e]&&(function(t,e,i){let n=ln[e],s=n.deps,r=n.name,o=t.bt;if(o)for(let e,i,n=0;n<s.length;n++)e=s[n],i=o[e],i&&i[r]&&(i[r]=(i[r]||1)-1,i._count=(i._count||1)-1,0===i._count&&t.removeEventListener(e,un,Wi(e)));t.removeEventListener(e,i)}(t,e,i),!0)}function fn(t){cn.push(t);for(let e=0;e<t.emits.length;e++)ln[t.emits[e]]=t}function mn(t,e){Di&&t instanceof HTMLElement&&Be.run(()=>{t.style.touchAction=e}),t[Hi]=e}function yn(t,e,i){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,de(t).dispatchEvent(n),n.defaultPrevented){let t=i.preventer||i.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function bn(t){let e=function(t){for(let e,i=0;i<cn.length;i++){e=cn[i];for(let i,n=0;n<e.emits.length;n++)if(i=e.emits[n],i===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function gn(t,e,i,n){e&&yn(e,t,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(t){return bn(t)}})}function wn(t,e,i){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),s=Math.abs(t.y-i);return n>=5||s>=5}function vn(t,e,i){if(!e)return;let n,s=t.moves[t.moves.length-2],r=t.moves[t.moves.length-1],o=r.x-t.x,a=r.y-t.y,l=0;s&&(n=r.x-s.x,l=r.y-s.y),yn(e,"track",{state:t.state,x:i.clientX,y:i.clientY,dx:o,dy:a,ddx:n,ddy:l,sourceEvent:i,hover:function(){return function(t,e){let i=document.elementFromPoint(t,e),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let s=n;if(n=n.shadowRoot.elementFromPoint(t,e),s===n)break;n&&(i=n)}return i}(i.clientX,i.clientY)}})}function _n(t,e,i){let n=Math.abs(e.clientX-t.x),s=Math.abs(e.clientY-t.y),r=hn(i||e);!r||Xi[r.localName]&&r.hasAttribute("disabled")||(isNaN(n)||isNaN(s)||n<=25&&s<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=hn(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let i=e.getBoundingClientRect(),n=t.pageX,s=t.pageY;return!(n>=i.left&&n<=i.right&&s>=i.top&&s<=i.bottom)}return!1}(e))&&(t.prevent||yn(r,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/fn({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){on(this.info)},mousedown:function(t){if(!nn(t))return;let e=hn(t),i=this;rn(this.info,(function(t){nn(t)||(gn("up",e,t),on(i.info))}),(function(t){nn(t)&&gn("up",e,t),on(i.info)})),gn("down",e,t)},touchstart:function(t){gn("down",hn(t),t.changedTouches[0],t)},touchend:function(t){gn("up",hn(t),t.changedTouches[0],t)}}),fn({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,on(this.info)},mousedown:function(t){if(!nn(t))return;let e=hn(t),i=this,n=function(t){let n=t.clientX,s=t.clientY;wn(i.info,n,s)&&(i.info.state=i.info.started?"mouseup"===t.type?"end":"track":"start","start"===i.info.state&&bn("tap"),i.info.addMove({x:n,y:s}),nn(t)||(i.info.state="end",on(i.info)),e&&vn(i.info,e,t),i.info.started=!0)};rn(this.info,n,(function(t){i.info.started&&n(t),on(i.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=hn(t),i=t.changedTouches[0],n=i.clientX,s=i.clientY;wn(this.info,n,s)&&("start"===this.info.state&&bn("tap"),this.info.addMove({x:n,y:s}),vn(this.info,e,i),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=hn(t),i=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),vn(this.info,e,i))}}),fn({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){nn(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){nn(t)&&_n(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){_n(this.info,t.changedTouches[0],t)}});const xn=pe(t=>class extends t{_addEventListenerToNode(t,e,i){pn(t,e,i)||super._addEventListenerToNode(t,e,i)}_removeEventListenerFromNode(t,e,i){dn(t,e,i)||super._removeEventListenerFromNode(t,e,i)}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function kn(t,e,i){return{index:t,removed:e,addedCount:i}}function Cn(t,e,i,n,s,r){let o,a=0,l=0,c=Math.min(i-e,r-s);if(0==e&&0==s&&(a=function(t,e,i){for(let n=0;n<i;n++)if(!Pn(t[n],e[n]))return n;return i}(t,n,c)),i==t.length&&r==n.length&&(l=function(t,e,i){let n=t.length,s=e.length,r=0;for(;r<i&&Pn(t[--n],e[--s]);)r++;return r}(t,n,c-a)),s+=a,r-=l,(i-=l)-(e+=a)==0&&r-s==0)return[];if(e==i){for(o=kn(e,[],0);s<r;)o.removed.push(n[s++]);return[o]}if(s==r)return[kn(e,[],i-e)];let h=function(t){let e=t.length-1,i=t[0].length-1,n=t[e][i],s=[];for(;e>0||i>0;){if(0==e){s.push(2),i--;continue}if(0==i){s.push(3),e--;continue}let r,o=t[e-1][i-1],a=t[e-1][i],l=t[e][i-1];r=a<l?a<o?a:o:l<o?l:o,r==o?(o==n?s.push(0):(s.push(1),n=o),e--,i--):r==a?(s.push(3),e--,n=a):(s.push(2),i--,n=l)}return s.reverse(),s}(function(t,e,i,n,s,r){let o=r-s+1,a=i-e+1,l=new Array(o);for(let t=0;t<o;t++)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;t++)l[0][t]=t;for(let i=1;i<o;i++)for(let r=1;r<a;r++)if(Pn(t[e+r-1],n[s+i-1]))l[i][r]=l[i-1][r-1];else{let t=l[i-1][r]+1,e=l[i][r-1]+1;l[i][r]=t<e?t:e}return l}(t,e,i,n,s,r));o=void 0;let u=[],p=e,d=s;for(let t=0;t<h.length;t++)switch(h[t]){case 0:o&&(u.push(o),o=void 0),p++,d++;break;case 1:o||(o=kn(p,[],0)),o.addedCount++,p++,o.removed.push(n[d]),d++;break;case 2:o||(o=kn(p,[],0)),o.addedCount++,p++;break;case 3:o||(o=kn(p,[],0)),o.removed.push(n[d]),d++}return o&&u.push(o),u}function Sn(t,e){return Cn(t,0,t.length,e,0,e.length)}function Pn(t,e){return t===e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function En(t){return"slot"===t.localName}let $n=class{static getFlattenedNodes(t){const e=de(t);return En(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>En(t)?de(t=t).assignedNodes({flatten:!0}):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){En(this._target)?this._listenSlots([this._target]):de(this._target).children&&(this._listenSlots(de(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){En(this._target)?this._unlistenSlots([this._target]):de(this._target).children&&(this._unlistenSlots(de(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Be.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let i=t[e];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),i=Sn(e,this._effectiveNodes);for(let e,n=0;n<i.length&&(e=i[n]);n++)for(let i,n=0;n<e.removed.length&&(i=e.removed[n]);n++)t.removedNodes.push(i);for(let n,s=0;s<i.length&&(n=i[s]);s++)for(let i=n.index;i<n.index+n.addedCount;i++)t.addedNodes.push(e[i]);this._effectiveNodes=e;let n=!1;return(t.addedNodes.length||t.removedNodes.length)&&(n=!0,this.callback.call(this._target,t)),n}_listenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];En(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let i=t[e];En(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class An{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function Tn(t){return function t(e,i){let n=i.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=n.trim(),e.parent){let t=e.previous?e.previous.end:e.parent.start;n=i.substring(t,e.start-1),n=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t}))}(n),n=n.replace(jn.multipleSpaces," "),n=n.substring(n.lastIndexOf(";")+1);let s=e.parsedSelector=e.selector=n.trim();e.atRule=0===s.indexOf(Fn),e.atRule?0===s.indexOf(In)?e.type=Nn.MEDIA_RULE:s.match(jn.keyframesRule)&&(e.type=Nn.KEYFRAMES_RULE,e.keyframesName=e.selector.split(jn.multipleSpaces).pop()):0===s.indexOf(Bn)?e.type=Nn.MIXIN_RULE:e.type=Nn.STYLE_RULE}let s=e.rules;if(s)for(let e,n=0,r=s.length;n<r&&(e=s[n]);n++)t(e,i);return e}(function(t){let e=new An;e.start=0,e.end=t.length;let i=e;for(let n=0,s=t.length;n<s;n++)if(t[n]===zn){i.rules||(i.rules=[]);let t=i,e=t.rules[t.rules.length-1]||null;i=new An,i.start=n+1,i.parent=t,i.previous=e,t.rules.push(i)}else t[n]===Mn&&(i.end=n+1,i=i.parent||e);return e}(t=t.replace(jn.comments,"").replace(jn.port,"")),t)}function On(t,e,i=""){let n="";if(t.cssText||t.rules){let i=t.rules;if(i&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(Bn)}(i))for(let t,s=0,r=i.length;s<r&&(t=i[s]);s++)n=On(t,e,n);else n=e?t.cssText:function(t){return function(t){return t.replace(jn.mixinApply,"").replace(jn.varApply,"")}(t=function(t){return t.replace(jn.customProp,"").replace(jn.mixinProp,"")}(t))}(t.cssText),n=n.trim(),n&&(n="  "+n+"\n")}return n&&(t.selector&&(i+=t.selector+" "+zn+"\n"),i+=n,t.selector&&(i+=Mn+"\n\n")),i}const Nn={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},zn="{",Mn="}",jn={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Bn="--",In="@media",Fn="@",Ln=new Set;function Dn(t){const e=t.textContent;if(!Ln.has(e)){Ln.add(e);const t=document.createElement("style");t.setAttribute("shady-unscoped",""),t.textContent=e,document.head.appendChild(t)}}function Rn(t){return t.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Hn(t,e){return t?("string"==typeof t&&(t=Tn(t)),e&&Jn(t,e),On(t,bt)):""}function Vn(t){return!t.gt&&t.textContent&&(t.gt=Tn(t.textContent)),t.gt||null}function Jn(t,e,i,n){if(!t)return;let s=!1,r=t.type;if(n&&r===Nn.MEDIA_RULE){let e=t.selector.match(ct);e&&(window.matchMedia(e[1]).matches||(s=!0))}r===Nn.STYLE_RULE?e(t):i&&r===Nn.KEYFRAMES_RULE?i(t):r===Nn.MIXIN_RULE&&(s=!0);let o=t.rules;if(o&&!s)for(let t,s=0,r=o.length;s<r&&(t=o[s]);s++)Jn(t,e,i,n)}window.ShadyDOM&&window.ShadyDOM.wrap;function qn(t){if(void 0!==ft)return ft;if(void 0===t.wt){const e=t.getAttribute("css-build");if(e)t.wt=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if("css-build"===t[0])return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),t.wt=e}}return t.wt||""}function Un(t){return""!==qn(t)}const Kn=/;\s*/m,Wn=/^\s*(initial)|(inherit)\s*$/,Yn=/\s*!important/;class Zn{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let Gn=null;class Xn{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Zn}detectMixin(t){return function(t){const e=lt.test(t)||at.test(t);return lt.lastIndex=0,at.lastIndex=0,e}(t)}gatherStyles(t){const e=function(t){const e=[],i=t.querySelectorAll("style");for(let t=0;t<i.length;t++){const n=i[t];Rn(n)?pt||(Dn(n),n.parentNode.removeChild(n)):(e.push(n.textContent),n.parentNode.removeChild(n))}return e.join("").trim()}(t.content);if(e){const i=document.createElement("style");return i.textContent=e,t.content.insertBefore(i,t.content.firstChild),i}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const i=t._gatheredStyle;return i?this.transformStyle(i,e):null}transformStyle(t,e=""){let i=Vn(t);return this.transformRules(i,e),t.textContent=Hn(i),i}transformCustomStyle(t){let e=Vn(t);return Jn(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=Hn(e),e}transformRules(t,e){this._currentElement=e,Jn(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(at,(t,i,n,s)=>this._produceCssProperties(t,i,n,s,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const i={};let n=!1;return Jn(e,e=>{n=n||e===t,n||e.selector===t.selector&&Object.assign(i,this._cssTextToMap(e.parsedCssText))}),i}_consumeCssProperties(t,e){let i=null;for(;i=lt.exec(t);){let n=i[0],s=i[1],r=i.index,o=r+n.indexOf("@apply"),a=r+n.length,l=t.slice(0,o),c=t.slice(a),h=e?this._fallbacksFromPreviousRules(e):{};Object.assign(h,this._cssTextToMap(l));let u=this._atApplyToCssProperties(s,h);t=`${l}${u}${c}`,lt.lastIndex=r+u.length}return t}_atApplyToCssProperties(t,e){t=t.replace(Kn,"");let i=[],n=this._map.get(t);if(n||(this._map.set(t,{}),n=this._map.get(t)),n){let s,r,o;this._currentElement&&(n.dependants[this._currentElement]=!0);const a=n.properties;for(s in a)o=e&&e[s],r=[s,": var(",t,"_-_",s],o&&r.push(",",o.replace(Yn,"")),r.push(")"),Yn.test(a[s])&&r.push(" !important"),i.push(r.join(""))}return i.join("; ")}_replaceInitialOrInherit(t,e){let i=Wn.exec(e);return i&&(e=i[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let i,n,s=t.split(";"),r={};for(let t,o,a=0;a<s.length;a++)t=s[a],t&&(o=t.split(":"),o.length>1&&(i=o[0].trim(),n=o.slice(1).join(":"),e&&(n=this._replaceInitialOrInherit(i,n)),r[i]=n));return r}_invalidateMixinEntry(t){if(Gn)for(let e in t.dependants)e!==this._currentElement&&Gn(e)}_produceCssProperties(t,e,i,n,s){if(i&&function t(e,i){let n=e.indexOf("var(");if(-1===n)return i(e,"","","");let s=function(t,e){let i=0;for(let n=e,s=t.length;n<s;n++)if("("===t[n])i++;else if(")"===t[n]&&0==--i)return n;return-1}(e,n+3),r=e.substring(n+4,s),o=e.substring(0,n),a=t(e.substring(s+1),i),l=r.indexOf(",");return-1===l?i(o,r.trim(),"",a):i(o,r.substring(0,l).trim(),r.substring(l+1).trim(),a)}(i,(t,e)=>{e&&this._map.get(e)&&(n=`@apply ${e};`)}),!n)return t;let r=this._consumeCssProperties(""+n,s),o=t.slice(0,t.indexOf("--")),a=this._cssTextToMap(r,!0),l=a,c=this._map.get(e),h=c&&c.properties;h?l=Object.assign(Object.create(h),a):this._map.set(e,l);let u,p,d=[],f=!1;for(u in l)p=a[u],void 0===p&&(p="initial"),h&&!(u in h)&&(f=!0),d.push(`${e}_-_${u}: ${p}`);return f&&this._invalidateMixinEntry(c),c&&(c.properties=l),i&&(o=`${t};${o}`),`${o}${d.join("; ")};`}}Xn.prototype.detectMixin=Xn.prototype.detectMixin,Xn.prototype.transformStyle=Xn.prototype.transformStyle,Xn.prototype.transformCustomStyle=Xn.prototype.transformCustomStyle,Xn.prototype.transformRules=Xn.prototype.transformRules,Xn.prototype.transformRule=Xn.prototype.transformRule,Xn.prototype.transformTemplate=Xn.prototype.transformTemplate,Xn.prototype._separator="_-_",Object.defineProperty(Xn.prototype,"invalidCallback",{get:()=>Gn,set(t){Gn=t}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Qn={},ts="_applyShimCurrentVersion",es="_applyShimNextVersion",is=Promise.resolve();
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ns(t){let e=Qn[t];e&&function(t){t[ts]=t[ts]||0,t._applyShimValidatingVersion=t._applyShimValidatingVersion||0,t[es]=(t[es]||0)+1}(e)}function ss(t){return t[ts]===t[es]}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const rs=new Xn;class os{constructor(){this.customStyleInterface=null,rs.invalidCallback=ns}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{rs.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),Un(t))return;Qn[e]=t;let i=rs.transformTemplate(t,e);t._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let i=t[e],n=this.customStyleInterface.getStyleForCustomStyle(i);n&&rs.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&ht(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,i="",n="";return e?e.indexOf("-")>-1?i=e:(n=e,i=t.getAttribute&&t.getAttribute("is")||""):(i=t.is,n=t.extends),{is:i,typeExtension:n}}(t),i=Qn[e];if((!i||!Un(i))&&i&&!ss(i)){(function(t){return!ss(t)&&t._applyShimValidatingVersion===t[es]})(i)||(this.prepareTemplate(i,e),function(t){t._applyShimValidatingVersion=t[es],t._validating||(t._validating=!0,is.then((function(){t[ts]=t[es],t._validating=!1})))}(i));let n=t.shadowRoot;if(n){let t=n.querySelector("style");t&&(t.gt=i._styleAst,t.textContent=Hn(i._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new os;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,i,n){t.flushCustomStyles(),t.prepareTemplate(e,i)},prepareTemplateStyles(t,e,i){window.ShadyCSS.prepareTemplate(t,e,i)},prepareTemplateDom(t,e){},styleSubtree(e,i){t.flushCustomStyles(),t.styleSubtree(e,i)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>ut(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:bt,nativeShadow:pt,cssBuild:ft,disableRuntime:yt},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=rs;
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const as=/:host\(:dir\((ltr|rtl)\)\)/g,ls=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,cs=/:dir\((?:ltr|rtl)\)/,hs=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),us=[];let ps=null,ds="";function fs(){ds=document.documentElement.getAttribute("dir")}function ms(t){if(!t.vt){t.setAttribute("dir",ds)}}function ys(){fs(),ds=document.documentElement.getAttribute("dir");for(let t=0;t<us.length;t++)ms(us[t])}const bs=pe(t=>{hs||ps||(fs(),ps=new MutationObserver(ys),ps.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Re(t);class i extends e{static _processStyleText(t,i){return t=e._processStyleText.call(this,t,i),!hs&&cs.test(t)&&(t=this._replaceDirInCssText(t),this._t=!0),t}static _replaceDirInCssText(t){let e=t;return e=e.replace(as,':host([dir="$1"])'),e=e.replace(ls,':host([dir="$2"]) $1'),e}constructor(){super(),this.vt=!1}ready(){super.ready(),this.vt=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor._t&&(ps&&ps.takeRecords().length&&ys(),us.push(this),ms(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor._t){const t=us.indexOf(this);t>-1&&us.splice(t,1)}}}return i._t=!1,i});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function gs(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?gs():window.addEventListener("DOMContentLoaded",gs)
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/;const ws=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=Li()}while(t||e)},vs=Element.prototype,_s=vs.matches||vs.matchesSelector||vs.mozMatchesSelector||vs.msMatchesSelector||vs.oMatchesSelector||vs.webkitMatchesSelector,xs=function(t,e){return _s.call(t,e)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class ks{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new $n(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(de(this.node).contains(t))return!0;let e=t,i=t.ownerDocument;for(;e&&e!==i&&e!==this.node;)e=de(e).parentNode||de(e).host;return e===this.node}getOwnerRoot(){return de(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?de(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=de(this.node).assignedSlot;for(;e;)t.push(e),e=de(e).assignedSlot;return t}importNode(t,e){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return de(i).importNode(t,e)}getEffectiveChildNodes(){return $n.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),i=[];for(let n,s=0,r=e.length;s<r&&(n=e[s]);s++)n.nodeType===Node.ELEMENT_NODE&&xs(n,t)&&i.push(n);return i}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function Cs(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},configurable:!0})}}class Ss{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}ks.prototype.cloneNode,ks.prototype.appendChild,ks.prototype.insertBefore,ks.prototype.removeChild,ks.prototype.replaceChild,ks.prototype.setAttribute,ks.prototype.removeAttribute,ks.prototype.querySelector,ks.prototype.querySelectorAll,ks.prototype.parentNode,ks.prototype.firstChild,ks.prototype.lastChild,ks.prototype.nextSibling,ks.prototype.previousSibling,ks.prototype.firstElementChild,ks.prototype.lastElementChild,ks.prototype.nextElementSibling,ks.prototype.previousElementSibling,ks.prototype.childNodes,ks.prototype.children,ks.prototype.classList,ks.prototype.textContent,ks.prototype.innerHTML;let Ps=ks;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(ks.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=ks.prototype[e])}),Cs(t.prototype,["classList"]),Ps=t,Object.defineProperties(Ss.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&Es(t).getOwnerRoot(),i=this.path;for(let t=0;t<i.length;t++){const n=i[t];if(Es(n).getOwnerRoot()===e)return n}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let i=0;i<e.length;i++){let n=e[i];t[n]=function(){return this.node[n].apply(this.node,arguments)}}}(ks.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),Cs(ks.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let i=0;i<e.length;i++){let n=e[i];Object.defineProperty(t,n,{get:function(){return this.node[n]},set:function(t){this.node[n]=t},configurable:!0})}}(ks.prototype,["textContent","innerHTML","className"]);const Es=function(t){if((t=t||document)instanceof Ps)return t;if(t instanceof Ss)return t;let e=t.xt;return e||(e=t instanceof Event?new Ss(t):new Ps(t),t.xt=e),e},$s=window.ShadyDOM,As=window.ShadyCSS;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ts(t,e){return de(t).getRootNode()===e}
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const Os=t=>{for(;t;){const e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]};pe(t=>{const e=Mi(t);let i=Os(e);return class extends e{constructor(){super(),this.kt}static get observedAttributes(){return i.call(this).concat("disable-upgrade")}_initializeProperties(){this.hasAttribute("disable-upgrade")?this.kt=!0:super._initializeProperties()}_enableProperties(){this.kt||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.kt&&this._isPropertyPending(t))}attributeChangedCallback(t,e,i,n){"disable-upgrade"==t?this.kt&&null==i&&(super._initializeProperties(),this.kt=!1,de(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(t,e,i,n)}connectedCallback(){this.kt||super.connectedCallback()}disconnectedCallback(){this.kt||super.disconnectedCallback()}}});let Ns=window.ShadyCSS;const zs=pe(t=>{const e=xn(Mi(t)),i=zi?e:bs(e),n=Os(i),s={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends i{constructor(){super(),this.isAttached,this.Ct,this._debouncers,this.kt,this.St,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}Pt(t,e,i){(this.P&&this.P[t]||"disable-upgrade"===t)&&this.attributeChangedCallback(t,e,i,null)}setAttribute(t,e){if(Rt&&!this._legacyForceObservedAttributes){const i=this.getAttribute(t);super.setAttribute(t,e),this.Pt(t,i,String(e))}else super.setAttribute(t,e)}removeAttribute(t){if(Rt&&!this._legacyForceObservedAttributes){const e=this.getAttribute(t);super.removeAttribute(t),this.Pt(t,e,null)}else super.removeAttribute(t)}static get observedAttributes(){return Rt&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.ht=[],this.prototype),this.ht):n.call(this).concat("disable-upgrade")}_enableProperties(){this.kt||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.kt&&this._isPropertyPending(t))}connectedCallback(){this.St&&this._takeAttributes(),this.kt||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.kt||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(t,e,i,n){e!==i&&("disable-upgrade"==t?this.kt&&null==i&&(this._initializeProperties(),this.kt=!1,de(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(t,e,i,n),this.attributeChanged(t,e,i)))}attributeChanged(t,e,i){}_initializeProperties(){if(zt&&this.hasAttribute("disable-upgrade"))this.kt=!0;else{let t=Object.getPrototypeOf(this);t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))||(this._registered(),t.Et=!0),super._initializeProperties(),this.root=this,this.created(),Rt&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.St=!0)),this._applyListeners()}}_takeAttributes(){const t=this.attributes;for(let e=0,i=t.length;e<i;e++){const i=t[e];this.Pt(i.name,null,i.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,i){this._propertyToAttribute(t,e,i)}serializeValueToAttribute(t,e,i){this._valueToNodeAttribute(i||this,t,e)}extend(t,e){if(!t||!e)return t||e;let i=Object.getOwnPropertyNames(e);for(let n,s=0;s<i.length&&(n=i[s]);s++){let i=Object.getOwnPropertyDescriptor(e,n);i&&Object.defineProperty(t,n,i)}return t}mixin(t,e){for(let i in e)t[i]=e[i];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,i){i=i||{},e=null==e?{}:e;let n=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});n.detail=e;let s=i.node||this;return de(s).dispatchEvent(n),n}listen(t,e,i){t=t||this;let n=this.Ct||(this.Ct=new WeakMap),s=n.get(t);s||(s={},n.set(t,s));let r=e+i;s[r]||(s[r]=this._addMethodEventListenerToNode(t,e,i,this))}unlisten(t,e,i){t=t||this;let n=this.Ct&&this.Ct.get(t),s=e+i,r=n&&n[s];r&&(this._removeEventListenerFromNode(t,e,r),n[s]=null)}setScrollDirection(t,e){mn(e||this,s[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=de(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=Es(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Es(this).getEffectiveChildNodes()}queryDistributedElements(t){return Es(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let i,n=0;i=t[n];n++)i.nodeType!==Node.COMMENT_NODE&&e.push(i.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?Es(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&de(this).contains(t)&&de(this).getRootNode()===de(t).getRootNode()}isLocalDescendant(t){return this.root===de(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!$s||!As)return null;if(!$s.handlesDynamicScoping)return null;const i=As.ScopingShim;if(!i)return null;const n=i.scopeForNode(t),s=de(t).getRootNode(),r=t=>{if(!Ts(t,s))return;const e=Array.from($s.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){const r=e[t];if(!Ts(r,s))continue;const o=i.currentScopeForNode(r);o!==n&&(""!==o&&i.unscopeNode(r,o),i.scopeNode(r,n))}};if(r(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const i=t[e];for(let t=0;t<i.addedNodes.length;t++){const e=i.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&r(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return Ns.getComputedStyleValue(this,t)}debounce(t,e,i){return this._debouncers=this._debouncers||{},this._debouncers[t]=Bi.debounce(this._debouncers[t],i>0?Me.after(i):Be,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?Me.run(t.bind(this),e):~Be.run(t.bind(this))}cancelAsync(t){t<0?Be.cancel(~t):Me.cancel(t)}create(t,e){let i=document.createElement(t);if(e)if(i.setProperties)i.setProperties(e);else for(let t in e)i[t]=e[t];return i}elementMatches(t,e){return xs(e||this,t)}toggleAttribute(t,e){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(e=!i.hasAttribute(t)),e?(de(i).setAttribute(t,""),!0):(de(i).removeAttribute(t),!1)}toggleClass(t,e,i){i=i||this,1==arguments.length&&(e=!i.classList.contains(t)),e?i.classList.add(t):i.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,i,n){n=n||this,this.transform("translate3d("+t+","+e+","+i+")",n)}arrayDelete(t,e){let i;if(Array.isArray(t)){if(i=t.indexOf(e),i>=0)return t.splice(i,1)}else{if(i=_e(this,t).indexOf(e),i>=0)return this.splice(t,i,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return r.prototype.is="",r}),Ms={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},js={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Bs=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},js);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Is(t,e,i,n){!function(t,e,i){const n=t._noAccessors,s=Object.getOwnPropertyNames(t);for(let r=0;r<s.length;r++){let o=s[r];if(!(o in i))if(n)e[o]=t[o];else{let i=Object.getOwnPropertyDescriptor(t,o);i&&(i.configurable=!0,Object.defineProperty(e,o,i))}}}(e,t,n);for(let t in Ms)e[t]&&(i[t]=i[t]||[],i[t].push(e[t]))}function Fs(t,e){for(const i in e){const n=t[i],s=e[i];t[i]=!("value"in s)&&n&&"value"in n?Object.assign({value:n.value},s):s}}const Ls=zs(HTMLElement);function Ds(t,e,i){let n;const s={};class r extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(n)for(let t,e=0;e<n.length;e++)t=n[e],t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else e._finalizeClass.call(this)}static get properties(){const e={};if(n)for(let t=0;t<n.length;t++)Fs(e,n[t].properties);return Fs(e,t.properties),e}static get observers(){let e=[];if(n)for(let t,i=0;i<n.length;i++)t=n[i],t.observers&&(e=e.concat(t.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();const t=s.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}_registered(){const t=r.prototype;if(!t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))){t.Et=!0,super._registered(),zt&&o(t);const e=Object.getPrototypeOf(this);let i=s.beforeRegister;if(i)for(let t=0;t<i.length;t++)i[t].call(e);if(i=s.registered,i)for(let t=0;t<i.length;t++)i[t].call(e)}}_applyListeners(){super._applyListeners();const t=s.listeners;if(t)for(let e=0;e<t.length;e++){const i=t[e];if(i)for(let t in i)this._addMethodEventListenerToNode(this,t,i[t])}}_ensureAttributes(){const t=s.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){const i=t[e];for(let t in i)this._ensureAttribute(t,i[t])}super._ensureAttributes()}ready(){super.ready();let t=s.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();let t=s.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();let t=s.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,i){super.attributeChanged();let n=s.attributeChanged;if(n)for(let s=0;s<n.length;s++)n[s].call(this,t,e,i)}}if(i){Array.isArray(i)||(i=[i]);let t=e.prototype.behaviors;n=function t(e,i,n){i=i||[];for(let s=e.length-1;s>=0;s--){let r=e[s];r?Array.isArray(r)?t(r,i):i.indexOf(r)<0&&(!n||n.indexOf(r)<0)&&i.unshift(r):console.warn("behavior is null, check for missing or 404 import")}return i}(i,null,t),r.prototype.behaviors=t?t.concat(i):n}const o=e=>{n&&function(t,e,i){for(let n=0;n<e.length;n++)Is(t,e[n],i,Bs)}(e,n,s),Is(e,t,s,js)};return zt||o(r.prototype),r.generatedFrom=t,r}const Rs=function(t){let e;return e="function"==typeof t?t:Rs.Class(t),t._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=t._legacyForceObservedAttributes),customElements.define(e.is,e),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Hs(t,e,i,n,s){let r;s&&(r="object"==typeof i&&null!==i,r&&(n=t.G[e]));let o=n!==i&&(n==n||i==i);return r&&o&&(t.G[e]=i),o}Rs.Class=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let i=e?e(Ls):Ls;return i=Ds(t,i,t.behaviors),i.is=i.prototype.is=t.is,i};const Vs=pe(t=>class extends t{_shouldPropertyChange(t,e,i){return Hs(this,t,e,i,!0)}}),Js=pe(t=>class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,i){return Hs(this,t,e,i,this.mutableData)}});Vs._mutablePropertyChange=Hs;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let qs=null;function Us(){return qs}Us.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Us,writable:!0}});const Ks=Ti(Us),Ws=Vs(Ks);const Ys=Ti(class{});function Zs(t,e){for(let i=0;i<e.length;i++){let n=e[i];if(Boolean(t)!=Boolean(n.$t))if(n.nodeType===Node.TEXT_NODE)t?(n.At=n.textContent,n.textContent=""):n.textContent=n.At;else if("slot"===n.localName)if(t)n.Tt=document.createComment("hidden-slot"),de(de(n).parentNode).replaceChild(n.Tt,n);else{const t=n.Tt;t&&de(de(t).parentNode).replaceChild(n,t)}else n.style&&(t?(n.Ot=n.style.display,n.style.display="none"):n.style.display=n.Ot);n.$t=t,n._showHideChildren&&n._showHideChildren(t)}}class Gs extends Ys{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.Z);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.Nt=this;this.zt&&this.zt.$t&&this._showHideChildren(!0);let i=this.Mt;(t&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.Mt.forwardHostProp)for(let t in this.jt)this._setPendingProperty(t,this.Z["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.Z._enqueueClient(this)}_addEventListenerToNode(t,e,i){if(this._methodHost&&this.Mt.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,i(t)});else{let n=this.Z.Z;n&&n._addEventListenerToNode(t,e,i)}}_showHideChildren(t){Zs(t,this.children)}_setUnmanagedPropertyToNode(t,e,i){t.$t&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.At=i:super._setUnmanagedPropertyToNode(t,e,i)}get parentModel(){let t=this.Bt;if(!t){let e;t=this;do{t=t.Z.Z}while((e=t.Mt)&&!e.parentModel);this.Bt=t}return t}dispatchEvent(t){return!0}}Gs.prototype.Z,Gs.prototype.Mt,Gs.prototype._methodHost,Gs.prototype.zt,Gs.prototype.jt;const Xs=Vs(Gs);function Qs(t){let e=t.Z;return e&&e._methodHost||e}function tr(t,e,i){let n=i.mutableData?Xs:Gs;sr.mixin&&(n=sr.mixin(n));let s=class extends n{};return s.prototype.Mt=i,s.prototype._bindTemplate(t),function(t,e,i,n){let s=i.hostProps||{};for(let e in n.instanceProps){delete s[e];let i=n.notifyInstanceProp;i&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:nr(e,i)})}if(n.forwardHostProp&&e.Z)for(let e in s)i.hasHostProps||(i.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,i){t.Z._setPendingPropertyOrPath("_host_"+e,i[e],!0,!0)}})}(s,t,e,i),s}function er(t,e,i,n){let s=i.forwardHostProp;if(s&&e.hasHostProps){const r="template"==t.localName;let o=e.templatizeTemplateClass;if(!o){if(r){let t=i.mutableData?Ws:Ks;class n extends t{}o=e.templatizeTemplateClass=n}else{const i=t.constructor;class n extends i{}o=e.templatizeTemplateClass=n}let a=e.hostProps;for(let t in a)o.prototype._addPropertyEffect("_host_"+t,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:ir(t,s)}),o.prototype._createNotifyingProperty("_host_"+t);Mt&&n&&function(t,e,i){const n=i.constructor._properties,{propertyEffects:s}=t,{instanceProps:r}=e;for(let t in s)if(!(n[t]||r&&r[t])){const e=s[t];for(let i=0;i<e.length;i++){const{part:n}=e[i].info;if(!n.signature||!n.signature.static){console.warn(`Property '${t}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(e,i,n)}if(t.L&&Object.assign(t.A,t.L),r)!function(t,e){qs=t,Object.setPrototypeOf(t,e.prototype),new e,qs=null}(t,o),t.G={},t.M=null,t.j=null,t._enableProperties();else{Object.setPrototypeOf(t,o.prototype);const i=e.hostProps;for(let e in i)if(e="_host_"+e,e in t){const i=t[e];delete t[e],t.A[e]=i}}}}function ir(t,e){return function(t,i,n){e.call(t.zt,i.substring("_host_".length),n[i])}}function nr(t,e){return function(t,i,n){e.call(t.zt,t,i,n[i])}}function sr(t,e,i){if(Ot&&!Qs(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},t.zt)throw new Error("A <template> can only be templatized once");t.zt=e;let n=(e?e.constructor:Gs)._parseTemplate(t),s=n.templatizeInstanceClass;s||(s=tr(t,n,i),n.templatizeInstanceClass=s);const r=Qs(t);er(t,n,i,r);let o=class extends s{};return o.prototype._methodHost=r,o.prototype.Z=t,o.prototype.zt=e,o.prototype.jt=n.hostProps,o=o,o}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let rr=!1;function or(){if(zt&&!Pt){if(!rr){rr=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ar=xn(Js(Ti(HTMLElement)));customElements.define("dom-bind",class extends ar{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),Ot)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.It=null}attributeChangedCallback(t,e,i,n){this.mutableData=!0}connectedCallback(){or()||(this.style.display="none"),this.render()}disconnectedCallback(){this.Ft()}Lt(){de(de(this).parentNode).insertBefore(this.root,this)}Ft(){if(this.It)for(let t=0;t<this.It.length;t++)this.root.appendChild(this.It[t])}render(){let t;if(!this.It){if(t=t||this.querySelector("template"),!t){let e=new MutationObserver(()=>{if(t=this.querySelector("template"),!t)throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.It=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.It[this.It.length]=t;this._enableProperties()}this.Lt(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const lr=Js(ji);class cr extends lr{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Dt,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.Dt=[],this.Rt=null,this.Ht={},this.Vt=null,this.Jt=null,this.qt=!1,this.Ut=!1,this.Kt=!1,this.Wt=0,this.Yt=null,this.Zt=null,this.Gt=null,this.Xt=null,this.Qt=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.Qt=!0;for(let t=0;t<this.Dt.length;t++)this.te(t)}connectedCallback(){if(super.connectedCallback(),or()||(this.style.display="none"),this.Qt){this.Qt=!1;let t=de(de(this).parentNode);for(let e=0;e<this.Dt.length;e++)this.ee(e,t)}}ie(){if(!this.Xt){const t=this;let e=this.template=t._templateInfo?t:this.querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.ne()});return t.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.Xt=sr(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(t,e){let i=this.Dt;for(let n,s=0;s<i.length&&(n=i[s]);s++)n.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,i){if((n=this.as)===(s=e)||ye(n,s)||be(n,s)){let n=t[this.itemsIndexAs];e==this.as&&(this.items[n]=i);let s=ge(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,e);this.notifyPath(s,i)}var n,s}})}return!0}se(){return this.Z._methodHost||this.Z}re(t){if("string"==typeof t){let e=t,i=this.se();return function(){return i[e].apply(i,arguments)}}return t}oe(t){this.Yt=this.re(t),this.items&&this.ae(this.ne)}le(t){this.Zt=this.re(t),this.items&&this.ae(this.ne)}ce(t){return Math.ceil(1e3/t)}he(){this.Gt=this.observe&&this.observe.replace(".*",".").split(" ")}ue(t){if(this.Yt||this.Zt)if(t){if(this.Gt){let e=this.Gt;for(let i=0;i<e.length;i++)0===t.indexOf(e[i])&&this.ae(this.ne,this.delay)}}else this.ae(this.ne,this.delay)}pe(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.de(t.path,t.value)||("items"===t.path&&(this.qt=!0),this.ae(this.ne))}ae(t,e=0){this.Rt=Bi.debounce(this.Rt,e>0?Me.after(e):Be,t.bind(this)),Fi(this.Rt)}render(){this.ae(this.ne),ws()}ne(){if(!this.ie())return;let t=this.items||[];const e=this.fe(t),i=this.me(e.length);this.ye(t,i,e),this.initialCount&&(this.Ut||this.Kt)&&(cancelAnimationFrame(this.Wt),this.Wt=requestAnimationFrame(()=>this.be())),this._setRenderedItemCount(this.Dt.length),Dt&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}fe(t){let e=new Array(t.length);for(let i=0;i<t.length;i++)e[i]=i;return this.Zt&&(e=e.filter((e,i,n)=>this.Zt(t[e],i,n))),this.Yt&&e.sort((e,i)=>this.Yt(t[e],t[i])),e}me(t){let e=t;const i=this.Dt.length;if(this.initialCount){let n;!this.Vt||this.qt&&!this.reuseChunkedInstances?(e=Math.min(t,this.initialCount),n=Math.max(e-i,0),this.Vt=n||1):(n=Math.min(Math.max(t-i,0),this.Vt),e=Math.min(i+n,t)),this.Ut=n===this.Vt,this.Kt=e<t,this.Jt=performance.now()}return this.qt=!1,e}be(){if(this.Ut){const t=performance.now()-this.Jt,e=this._targetFrameTime/t;this.Vt=Math.round(this.Vt*e)||1}this.Kt&&this.ae(this.ne)}ye(t,e,i){const n=this.Ht={};let s;for(s=0;s<e;s++){let e=this.Dt[s],r=i[s],o=t[r];n[r]=s,e?(e._setPendingProperty(this.as,o),e._setPendingProperty(this.indexAs,s),e._setPendingProperty(this.itemsIndexAs,r),e._flushProperties()):this.ge(o,s,r)}for(let t=this.Dt.length-1;t>=s;t--)this.we(t)}te(t){let e=this.Dt[t];const i=de(e.root);for(let t=0;t<e.children.length;t++){let n=e.children[t];i.appendChild(n)}return e}ee(t,e){let i=this.Dt[t];e.insertBefore(i.root,this)}we(t){this.te(t),this.Dt.splice(t,1)}ve(t,e,i){let n={};return n[this.as]=t,n[this.indexAs]=e,n[this.itemsIndexAs]=i,new this.Xt(n)}ge(t,e,i){const n=this.ve(t,e,i);let s=this.Dt[e+1],r=s?s.children[0]:this;return de(de(this).parentNode).insertBefore(n.root,r),this.Dt[e]=n,n}_showHideChildren(t){for(let e=0;e<this.Dt.length;e++)this.Dt[e]._showHideChildren(t)}de(t,e){let i=t.slice(6),n=i.indexOf("."),s=n<0?i:i.substring(0,n);if(s==parseInt(s,10)){let t=n<0?"":i.substring(n+1);this.ue(t);let r=this.Ht[s],o=this.Dt[r];if(o){let i=this.as+(t?"."+t:"");o._setPendingPropertyOrPath(i,e,!1,!0),o._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return function(t,e){let i;for(;e;)if(i=e.Z?e:e.Nt){if(i.Z==t)return i;e=i.Z}else e=de(e).parentNode;return null}(this.template,t)}}customElements.define(cr.is,cr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class hr extends ji{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.Rt=null,this._lastIf=!1,this.$t=!1,this._e,this._templateInfo}ae(){this.Rt=Bi.debounce(this.Rt,Be,()=>this.ne()),Fi(this.Rt)}disconnectedCallback(){super.disconnectedCallback();const t=de(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||de(t).host)||this.xe()}connectedCallback(){super.connectedCallback(),or()||(this.style.display="none"),this.if&&this.ae()}ke(){if(!this._e){const t=this;let e=t._templateInfo?t:de(t).querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!de(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.ne()});return t.observe(this,{childList:!0}),!1}this._e=e}return!0}Ce(){let t=de(this).parentNode;if(this.Se()){let e=this.Pe();if(e&&e.length){if(de(this).previousSibling!==e[e.length-1])for(let i,n=0;n<e.length&&(i=e[n]);n++)de(t).insertBefore(i,this)}}else{if(!t)return!1;if(!this.ke())return!1;this.Ee(t)}return!0}render(){ws()}ne(){if(this.if){if(!this.Ce())return}else this.restamp&&this.xe();this._showHideChildren(),Dt&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}Se(){}Pe(){}Ee(t){}xe(){}_showHideChildren(){}}const ur=Lt?class extends hr{constructor(){super(),this.$e=null,this.Ae=null}Se(){return Boolean(this.$e)}Pe(){return this.$e.templateInfo.childNodes}Ee(t){const e=this.Z||this;if(Ot&&!this.Z)throw new Error("strictTemplatePolicy: template owner not trusted");const i=e._bindTemplate(this._e,!0);i.runEffects=(t,e,i)=>{let n=this.Ae;if(this.if)n&&(this.Ae=null,this._showHideChildren(),e=Object.assign(n.changedProps,e)),t(e,i);else if(this.$e)if(n||(n=this.Ae={runEffects:t,changedProps:{}}),i)for(const t in e){const e=me(t);n.changedProps[e]=this.Z[e]}else Object.assign(n.changedProps,e)},this.$e=e._stampTemplate(this._e,i),de(t).insertBefore(this.$e,this)}Te(){const t=this.Ae;t&&(this.Ae=null,t.runEffects(t.changedProps,!1))}xe(){const t=this.Z||this;this.$e&&(t._removeBoundDom(this.$e),this.$e=null,this.Ae=null)}_showHideChildren(){const t=this.$t||!this.if;this.$e&&Boolean(this.$e.Oe)!==t&&(this.$e.Oe=t,Zs(t,this.$e.templateInfo.childNodes)),t||this.Te()}}:class extends hr{constructor(){super(),this.Xt=null,this.$e=null,this.Ne=null}Se(){return Boolean(this.$e)}Pe(){return this.$e.children}Ee(t){this.Xt||(this.Xt=sr(this._e,this,{mutableData:!0,forwardHostProp:function(t,e){this.$e&&(this.if?this.$e.forwardHostProp(t,e):(this.Ne=this.Ne||Object.create(null),this.Ne[me(t)]=!0))}})),this.$e=new this.Xt,de(t).insertBefore(this.$e.root,this)}xe(){if(this.$e){let t=this.$e.children;if(t&&t.length){let e=de(t[0]).parentNode;if(e){e=de(e);for(let i,n=0;n<t.length&&(i=t[n]);n++)e.removeChild(i)}}this.Ne=null,this.$e=null}}Te(){let t=this.Ne;if(t){this.Ne=null;for(let e in t)this.$e._setPendingProperty(e,this.Z[e]);this.$e._flushProperties()}}_showHideChildren(){const t=this.$t||!this.if;this.$e&&Boolean(this.$e.Oe)!==t&&(this.$e.Oe=t,this.$e._showHideChildren(t)),t||this.Te()}};customElements.define(ur.is,ur);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let pr=pe(t=>{let e=Mi(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.ze=null,this.Me=null,this.je=null}Be(t,e){let i=e.path;if(i==JSCompiler_renameProperty("items",this)){let i=e.base||[],n=this.ze;if(t!==this.Me&&this.clearSelection(),n){let t=Sn(i,n);this.Ie(t)}this.ze=i,this.Me=t}else if(e.path==JSCompiler_renameProperty("items",this)+".splices")this.Ie(e.value.indexSplices);else{let t=i.slice((JSCompiler_renameProperty("items",this)+".").length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.Fe(e)}}Ie(t){let e=this.je;for(let i=0;i<t.length;i++){let n=t[i];e.forEach((t,i)=>{t<n.index||(t>=n.index+n.removed.length?e.set(i,t+n.addedCount-n.removed.length):e.set(i,-1))});for(let t=0;t<n.addedCount;t++){let i=n.index+t;e.has(this.items[i])&&e.set(this.items[i],i)}}this.Le();let i=0;e.forEach((t,n)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,e.delete(n)):i++})}Le(){if(this.W={},this.multi){let t=0;this.je.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.je.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.W={},this.je=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.je.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}Fe(t){let e=this.De(t);if(e>=0){let t=0;this.je.forEach((i,n)=>{e==t++&&this.deselect(n)})}}De(t){let e=this.W[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(t){let e=this.je.get(t);if(e>=0){let i;this.je.delete(t),this.multi&&(i=this.De(e)),this.Le(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.je.clear(),this.je.set(e,t),this.Le(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(ji);class dr extends pr{static get is(){return"array-selector"}static get template(){return null}}customElements.define(dr.is,dr);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
zs(HTMLElement).prototype;
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var fr=new Set;const mr={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(fr.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)}),this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&-1===t._interestedResizables.indexOf(this)&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){this._notifyingDescendant?t.stopPropagation():Pt||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=Es(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function e(){document.removeEventListener("readystatechange",e),t()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(t){t!==this&&t._findParent()}),this):(fr.forEach((function(t){t!==this&&t._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?fr.delete(this):fr.add(this)}},yr=t=>class extends t{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),"theme"===t&&this._setTheme(i)}},br=t=>class extends(yr(t)){static finalize(){super.finalize();const t=this.prototype._template,e=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,i=Object.getPrototypeOf(this.prototype)._template;i&&!e&&Array.from(i.content.querySelectorAll("style[include]")).forEach(e=>{this._includeStyle(e.getAttribute("include"),t)}),this._includeMatchingThemes(t)}static _includeMatchingThemes(t){const e=Kt.prototype.modules;let i=!1;const n=this.is+"-default-theme";Object.keys(e).sort((t,e)=>{const i=0===t.indexOf("vaadin-"),n=0===e.indexOf("vaadin-"),s=["lumo-","material-"],r=s.filter(e=>0===t.indexOf(e)).length>0,o=s.filter(t=>0===e.indexOf(t)).length>0;return i!==n?i?-1:1:r!==o?r?-1:1:0}).forEach(s=>{if(s!==n){const n=e[s].getAttribute("theme-for");n&&n.split(" ").forEach(e=>{new RegExp("^"+e.split("*").join(".*")+"$").test(this.is)&&(i=!0,this._includeStyle(s,t))})}}),!i&&e[n]&&this._includeStyle(n,t)}static _includeStyle(t,e){if(e&&!e.content.querySelector(`style[include="${t}"]`)){const i=document.createElement("style");i.setAttribute("include",t),e.content.appendChild(i)}}}
/**
@license
Copyright (c) 2020 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/;class gr{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,i){const{scrollLeft:n}=i;if("rtl"!==e||!t)return n;switch(t){case"negative":return i.scrollWidth-i.clientWidth+n;case"reverse":return i.scrollWidth-i.clientWidth-n}return n}static setNormalizedScrollLeft(t,e,i,n){if("rtl"===e&&t)switch(t){case"negative":i.scrollLeft=i.clientWidth-i.scrollWidth+n;break;case"reverse":i.scrollLeft=i.scrollWidth-i.clientWidth-n;break;default:i.scrollLeft=n}else i.scrollLeft=n}}const wr=[];let vr;new MutationObserver((function(){const t=xr();wr.forEach(e=>{_r(e,t)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const _r=function(t,e){e?t.setAttribute("dir",e):t.removeAttribute("dir")},xr=function(){return document.documentElement.getAttribute("dir")},kr=t=>class extends t{static get properties(){return{dir:{type:String,readOnly:!0}}}static finalize(){super.finalize(),vr||(vr=gr.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.Re(),_r(this,xr()))}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"dir"!==t)return;const n=i===xr()&&-1===wr.indexOf(this),s=!i&&e&&-1===wr.indexOf(this),r=i!==xr()&&e===xr();n||s?(this.Re(),_r(this,xr())):r&&this.Re(!1)}disconnectedCallback(){super.disconnectedCallback(),this.Re(!1),this.removeAttribute("dir")}Re(t=!0){t?-1===wr.indexOf(this)&&wr.push(this):wr.indexOf(this)>-1&&wr.splice(wr.indexOf(this),1)}He(t){return gr.getNormalizedScrollLeft(vr,this.getAttribute("dir")||"ltr",t)}Ve(t,e){return gr.setNormalizedScrollLeft(vr,this.getAttribute("dir")||"ltr",t,e)}},Cr=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Sr=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Pr(t,e){if("function"!=typeof t)return;const i=Cr.exec(t.toString());if(i)try{t=new Function(i[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const Er=function(t,e){if(window.Vaadin.developmentMode)return Pr(t,e)};function $r(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(Sr?!function(){if(Sr){if(Object.keys(Sr).map(t=>Sr[t]).filter(t=>t.productionMode).length>0)return!0}return!1}():!Pr((function(){return!0})))}catch(t){return!1}}());const Ar=function(){return Er($r)};let Tr;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Ar&&Ar()};const Or=new Set,Nr=t=>class extends(kr(t)){static finalize(){super.finalize();const{is:t}=this;t&&!Or.has(t)&&(window.Vaadin.registrations.push(this),Or.add(t),window.Vaadin.developmentModeCallback&&(Tr=Bi.debounce(Tr,je,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Fi(Tr)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}
/**
@license
Copyright (c) 2016 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/;class zr extends(Nr(br(xn(function(t,e){return Ds({},zs(e),t)}([mr],ji))))){static get template(){return ce`
    <style>
      :host {
        display: flex;
        overflow: hidden !important;
        transform: translateZ(0);
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([orientation="vertical"]) {
        flex-direction: column;
      }

      :host ::slotted(*) {
        flex: 1 1 auto;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      [part="splitter"] {
        flex: none;
        position: relative;
        z-index: 1;
        overflow: visible;
        min-width: 8px;
        min-height: 8px;
      }

      :host(:not([orientation="vertical"])) > [part="splitter"] {
        cursor: ew-resize;
      }

      :host([orientation="vertical"]) > [part="splitter"] {
        cursor: ns-resize;
      }

      [part="handle"] {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
      }
    </style>
    <slot id="primary" name="primary"></slot>
    <div part="splitter" id="splitter" on-track="_onHandleTrack" on-down="_setPointerEventsNone" on-up="_restorePointerEvents">
      <div part="handle"></div>
    </div>
    <slot id="secondary" name="secondary"></slot>

    <div hidden="">
      <!-- Workaround to fix a Shady style scoping issue caused by dynamic slot naming of the child elements (primary/secondary) -->
      <slot></slot>
    </div>
`}static get is(){return"vaadin-split-layout"}static get version(){return"4.3.0"}static get properties(){return{orientation:{type:String,reflectToAttribute:!0,value:"horizontal"},_previousPrimaryPointerEvents:String,_previousSecondaryPointerEvents:String}}ready(){super.ready(),new $n(this,this._processChildren)}_processChildren(){this.getEffectiveChildren().forEach((t,e)=>{0===e?(this._primaryChild=t,t.setAttribute("slot","primary")):1==e?(this._secondaryChild=t,t.setAttribute("slot","secondary")):t.removeAttribute("slot")})}_setFlexBasis(t,e,i){0===(e=Math.max(0,Math.min(e,i)))&&(e=1e-6),t.style.flex="1 1 "+e+"px"}_setPointerEventsNone(t){this._primaryChild&&this._secondaryChild&&(this._previousPrimaryPointerEvents=this._primaryChild.style.pointerEvents,this._previousSecondaryPointerEvents=this._secondaryChild.style.pointerEvents,this._primaryChild.style.pointerEvents="none",this._secondaryChild.style.pointerEvents="none",t.preventDefault())}_restorePointerEvents(){this._primaryChild&&this._secondaryChild&&(this._primaryChild.style.pointerEvents=this._previousPrimaryPointerEvents,this._secondaryChild.style.pointerEvents=this._previousSecondaryPointerEvents)}_onHandleTrack(t){if(!this._primaryChild||!this._secondaryChild)return;var e="vertical"===this.orientation?"height":"width";if("start"===t.detail.state)return void(this._startSize={container:this.getBoundingClientRect()[e]-this.$.splitter.getBoundingClientRect()[e],primary:this._primaryChild.getBoundingClientRect()[e],secondary:this._secondaryChild.getBoundingClientRect()[e]});var i="vertical"===this.orientation?t.detail.dy:t.detail.dx;const n="vertical"!==this.orientation&&"rtl"===this.getAttribute("dir")?-i:i;this._setFlexBasis(this._primaryChild,this._startSize.primary+n,this._startSize.container),this._setFlexBasis(this._secondaryChild,this._startSize.secondary-n,this._startSize.container),this.notifyResize(),"end"===t.detail.state&&(this.dispatchEvent(new CustomEvent("splitter-dragend")),delete this._startSize)}notifyResize(){super.notifyResize()}}customElements.define(zr.is,zr);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Mr=ce`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;Mr.setAttribute("style","display: none;"),document.head.appendChild(Mr.content);var jr=document.createElement("style");jr.textContent="[hidden] { display: none !important; }",document.head.appendChild(jr);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Br={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(t){this._setFocused("focus"===t.type)},_disabledChanged:function(t,e){this.setAttribute("aria-disabled",t?"true":"false"),this.style.pointerEvents=t?"none":"",t?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class Ir{constructor(t){Ir[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return Ir.types[t]&&Ir.types[t][e]}set value(t){var e=this.type,i=this.key;e&&i&&(e=Ir.types[e]=Ir.types[e]||{},null==t?delete e[i]:e[i]=t)}get list(){if(this.type){var t=Ir.types[this.type];return t?Object.keys(t).map((function(t){return Fr[this.type][t]}),this):[]}}byKey(t){return this.key=t,this.value}}Ir[" "]=function(){},Ir.types={};var Fr=Ir.types;Rs({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},Je:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},qe:function(t,e,i){var n=new Ir({type:t,key:e});return void 0!==i&&i!==n.value?n.value=i:this.value!==n.value&&(this.value=n.value),n},get list(){return this.Je&&this.Je.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new Ir({type:this.type,key:t}).value}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
let Lr=null;const Dr={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){Lr=new Ir({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return Lr&&Lr.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(t){return void 0===t&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(t),!this.invalid},_getValidity:function(t){return!this.hasValidator()||this._validator.validate(t)}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
if(Rs({_template:ce`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        border: 1px solid;
        padding: 2px;
        -moz-appearance: textarea;
        -webkit-appearance: textarea;
        overflow: hidden;
      }

      .mirror-text {
        visibility: hidden;
        word-wrap: break-word;
        @apply --iron-autogrow-textarea;
      }

      .fit {
        // @apply --layout-fix;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      textarea {
        position: relative;
        outline: none;
        border: none;
        resize: none;
        background: inherit;
        color: inherit;
        /* see comments in template */
        width: 100%;
        height: 100%;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        text-align: inherit;
        @apply --iron-autogrow-textarea;
      }

      textarea::-webkit-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea::-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-ms-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }
    </style>

    <!-- the mirror sizes the input/textarea so it grows with typing -->
    <!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML -->
    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>

    <!-- size the input/textarea with a div, because the textarea has intrinsic size in ff -->
    <div class="textarea-container fit">
      <textarea id="textarea" name$="[[name]]" aria-label$="[[label]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" autocapitalize$="[[autocapitalize]]" inputmode$="[[inputmode]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" disabled$="[[disabled]]" rows$="[[rows]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]"></textarea>
    </div>
`,is:"iron-autogrow-textarea",behaviors:[Dr,Br],properties:{value:{observer:"_valueChanged",type:String,notify:!0},bindValue:{observer:"_bindValueChanged",type:String,notify:!0},rows:{type:Number,value:1,observer:"_updateCached"},maxRows:{type:Number,value:0,observer:"_updateCached"},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,value:!1},autocapitalize:{type:String,value:"none"},inputmode:{type:String},placeholder:{type:String},readonly:{type:String},required:{type:Boolean},minlength:{type:Number},maxlength:{type:Number},label:{type:String}},listeners:{input:"_onInput"},get textarea(){return this.$.textarea},get selectionStart(){return this.$.textarea.selectionStart},get selectionEnd(){return this.$.textarea.selectionEnd},set selectionStart(t){this.$.textarea.selectionStart=t},set selectionEnd(t){this.$.textarea.selectionEnd=t},attached:function(){navigator.userAgent.match(/iP(?:[oa]d|hone)/)&&!navigator.userAgent.match(/OS 1[3456789]/)&&(this.$.textarea.style.marginLeft="-3px")},validate:function(){var t=this.$.textarea.validity.valid;return t&&(this.required&&""===this.value?t=!1:this.hasValidator()&&(t=Dr.validate.call(this,this.value))),this.invalid=!t,this.fire("iron-input-validate"),t},_bindValueChanged:function(t){this.value=t},_valueChanged:function(t){var e=this.textarea;e&&(e.value!==t&&(e.value=t||0===t?t:""),this.bindValue=t,this.$.mirror.innerHTML=this._valueForMirror(),this.fire("bind-value-changed",{value:this.bindValue}))},_onInput:function(t){var e=Es(t).path;this.value=e?e[0].value:t.target.value},_constrain:function(t){var e;for(t=t||[""],e=this.maxRows>0&&t.length>this.maxRows?t.slice(0,this.maxRows):t.slice(0);this.rows>0&&e.length<this.rows;)e.push("");return e.join("<br/>")+"&#160;"},_valueForMirror:function(){var t=this.textarea;if(t)return this.tokens=t&&t.value?t.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""],this._constrain(this.tokens)},_updateCached:function(){this.$.mirror.innerHTML=this._constrain(this.tokens)}}),!window.polymerSkipLoadingFontRoboto){const t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.crossOrigin="anonymous",t.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(t)}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Rr=ce`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;Rr.setAttribute("style","display: none;"),document.head.appendChild(Rr.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Hr={attached:function(){this.fire("addon-attached")},update:function(t){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Rs({_template:ce`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[Hr],properties:{_charCounterStr:{type:String,value:"0"}},update:function(t){if(t.inputElement){t.value=t.value||"";var e=t.value.toString().length.toString();t.inputElement.hasAttribute("maxlength")&&(e+="/"+t.inputElement.getAttribute("maxlength")),this._charCounterStr=e}}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Vr=ce`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;Vr.setAttribute("style","display: none;"),document.head.appendChild(Vr.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Jr=ce`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;Jr.setAttribute("style","display: none;"),document.head.appendChild(Jr.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const qr=ce`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;qr.setAttribute("style","display: none;"),document.head.appendChild(qr.content),Rs({_template:ce`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }


      .input-content ::slotted(label):before,
      .input-content ::slotted(.paper-input-label):before {
        @apply --paper-input-container-label-before;
      }

      .input-content ::slotted(label):after,
      .input-content ::slotted(.paper-input-label):after {
        @apply --paper-input-container-label-after;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return Pe(this.attrForValue)},get _inputElement(){return Es(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.Ue=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(t){this._addons||(this._addons=[]);var e=t.target;-1===this._addons.indexOf(e)&&(this._addons.push(e),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(t){this._handleValueAndAutoValidate(t.target)},_onValueChanged:function(t){var e=t.target;this.Ue&&(this.Ue=!1,void 0===e.value||""===e.value)||this._handleValueAndAutoValidate(t.target)},_handleValue:function(t){var e=this._inputElementValue;e||0===e||"number"===t.type&&!t.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:t,value:e,invalid:this.invalid})},_handleValueAndAutoValidate:function(t){var e;this.autoValidate&&t&&(e=t.validate?t.validate(this._inputElementValue):t.checkValidity(),this.invalid=!e);this._handleValue(t)},_onIronInputValidate:function(t){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(t){for(var e,i=0;e=this._addons[i];i++)e.update(t)},_computeInputContentClass:function(t,e,i,n,s){var r="input-content";if(t)s&&(r+=" label-is-hidden"),n&&(r+=" is-invalid");else{var o=this.querySelector("label");e||s?(r+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",n?r+=" is-invalid":i&&(r+=" label-is-highlighted")):(o&&(this.$.labelAndInputContainer.style.position="relative"),n&&(r+=" is-invalid"))}return i&&(r+=" focused"),r},_computeUnderlineClass:function(t,e){var i="underline";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i},_computeAddOnContentClass:function(t,e){var i="add-on-content";return e?i+=" is-invalid":t&&(i+=" is-highlighted"),i}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Rs({_template:ce`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,is:"paper-input-error",behaviors:[Hr],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(t){this._setInvalid(t.invalid)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Ur={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Kr={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},Wr={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},Yr={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},Zr=/[a-z0-9*]/,Gr=/U\+/,Xr=/^arrow/,Qr=/^space(bar)?/,to=/^escape$/;function eo(t,e){var i="";if(t){var n=t.toLowerCase();" "===n||Qr.test(n)?i="space":to.test(n)?i="esc":1==n.length?e&&!Zr.test(n)||(i=n):i=Xr.test(n)?n.replace("arrow",""):"multiply"==n?"*":n}return i}function io(t,e){return t.key?eo(t.key,e):t.detail&&t.detail.key?eo(t.detail.key,e):(i=t.keyIdentifier,n="",i&&(i in Kr?n=Kr[i]:Gr.test(i)?(i=parseInt(i.replace("U+","0x"),16),n=String.fromCharCode(i).toLowerCase()):n=i.toLowerCase()),n||function(t){var e="";return Number(t)&&(e=t>=65&&t<=90?String.fromCharCode(32+t):t>=112&&t<=123?"f"+(t-112+1):t>=48&&t<=57?String(t-48):t>=96&&t<=105?String(t-96):Wr[t]),e}(t.keyCode)||"");var i,n}function no(t,e){return io(e,t.hasModifiers)===t.key&&(!t.hasModifiers||!!e.shiftKey==!!t.shiftKey&&!!e.ctrlKey==!!t.ctrlKey&&!!e.altKey==!!t.altKey&&!!e.metaKey==!!t.metaKey)}function so(t){return t.trim().split(" ").map((function(t){return function(t){return 1===t.length?{combo:t,key:t,event:"keydown"}:t.split("+").reduce((function(t,e){var i=e.split(":"),n=i[0],s=i[1];return n in Yr?(t[Yr[n]]=!0,t.hasModifiers=!0):(t.key=n,t.event=s||"keydown"),t}),{combo:t.split(":").shift()})}(t)}))}const ro={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(t,e){this._imperativeKeyBindings[t]=e,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(t,e){for(var i=so(e),n=0;n<i.length;++n)if(no(i[n],t))return!0;return!1},_collectKeyBindings:function(){var t=this.behaviors.map((function(t){return t.keyBindings}));return-1===t.indexOf(this.keyBindings)&&t.push(this.keyBindings),t},_prepKeyBindings:function(){for(var t in this._keyBindings={},this._collectKeyBindings().forEach((function(t){for(var e in t)this._addKeyBinding(e,t[e])}),this),this._imperativeKeyBindings)this._addKeyBinding(t,this._imperativeKeyBindings[t]);for(var e in this._keyBindings)this._keyBindings[e].sort((function(t,e){var i=t[0].hasModifiers;return i===e[0].hasModifiers?0:i?-1:1}))},_addKeyBinding:function(t,e){so(t).forEach((function(t){this._keyBindings[t.event]=this._keyBindings[t.event]||[],this._keyBindings[t.event].push([t,e])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(t){var e=this._keyBindings[t],i=this._onKeyBindingEvent.bind(this,e);this._boundKeyHandlers.push([this.keyEventTarget,t,i]),this.keyEventTarget.addEventListener(t,i)}),this)},_unlistenKeyEventListeners:function(){for(var t,e,i,n;this._boundKeyHandlers.length;)e=(t=this._boundKeyHandlers.pop())[0],i=t[1],n=t[2],e.removeEventListener(i,n)},_onKeyBindingEvent:function(t,e){if(this.stopKeyboardEventPropagation&&e.stopPropagation(),!e.defaultPrevented)for(var i=0;i<t.length;i++){var n=t[i][0],s=t[i][1];if(no(n,e)&&(this._triggerKeyHandler(n,s,e),e.defaultPrevented))return}},_triggerKeyHandler:function(t,e,i){var n=Object.create(t);n.keyboardEvent=i;var s=new CustomEvent(t.event,{detail:n,cancelable:!0});this[e].call(this,s),s.defaultPrevented&&i.preventDefault()}},oo={NextLabelID:1,NextAddonID:1,NextInputID:1},ao={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!ji&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(t,e){return t=t?t+" "+e:e},_onAddonAttached:function(t){var e=Es(t).rootTarget;if(e.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,e.id);else{var i="paper-input-add-on-"+oo.NextAddonID++;e.id=i,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,i)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(t){Br._focusBlurHandler.call(this,t),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(t){var e=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",e),this._shiftTabPressed=!1}),1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(t){try{var e=this.inputElement.selectionStart;this.value=t,this.inputElement.selectionStart=e,this.inputElement.selectionEnd=e}catch(e){this.value=t}},_computeAlwaysFloatLabel:function(t,e){return e||t},_updateAriaLabelledBy:function(){var t,e=Es(this.root).querySelector("label");e?(e.id?t=e.id:(t="paper-input-label-"+oo.NextLabelID++,e.id=t),this._ariaLabelledBy=t):this._ariaLabelledBy=""},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+oo.NextInputID++)},_onChange:function(t){this.shadowRoot&&this.fire(t.type,{sourceEvent:t},{node:this,bubbles:t.bubbles,cancelable:t.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var t=document.activeElement;t instanceof HTMLElement&&t!==document.body&&t!==document.documentElement||this._focusableElement.focus()}}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Rs({_template:ce`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container no-label-float$="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <iron-autogrow-textarea class="paper-input-input" slot="input" id$="[[_inputId]]" aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" bind-value="{{value}}" invalid="{{invalid}}" validator$="[[validator]]" disabled$="[[disabled]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" autocapitalize$="[[autocapitalize]]" rows$="[[rows]]" max-rows$="[[maxRows]]" on-change="_onChange"></iron-autogrow-textarea>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
`,is:"paper-textarea",behaviors:[[Br,ro,ao],Ur],properties:{_ariaLabelledBy:{observer:"_ariaLabelledByChanged",type:String},_ariaDescribedBy:{observer:"_ariaDescribedByChanged",type:String},value:{type:String},rows:{type:Number,value:1},maxRows:{type:Number,value:0}},get selectionStart(){return this.$.input.textarea.selectionStart},set selectionStart(t){this.$.input.textarea.selectionStart=t},get selectionEnd(){return this.$.input.textarea.selectionEnd},set selectionEnd(t){this.$.input.textarea.selectionEnd=t},_ariaLabelledByChanged:function(t){this._focusableElement.setAttribute("aria-labelledby",t)},_ariaDescribedByChanged:function(t){this._focusableElement.setAttribute("aria-describedby",t)},get _focusableElement(){return this.inputElement.textarea}});const lo=[{left:.8359073359073359,top:.3303684879288437,text:"請問您要\n紅茶還是\n咖啡呢？",comment:""},{left:.6332046332046332,top:.33799237611181704,text:"阿，我要紅茶",comment:""},{left:.861003861003861,top:.6073697585768743,text:"大家都是\n女性呢",comment:""},{left:.4980694980694981,top:.3252858958068615,text:"不過這樣不用在意\n別人的眼光也好",comment:""},{left:.8861003861003861,top:.7852604828462516,text:"呼啊",comment:""},{left:.3359073359073359,top:.747141041931385,text:"好想睡覺喔",comment:""}];class co extends G{static get styles(){return Y`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 100%;
      }
      .editor {
        width: 100%;
        height: 600px;
      }
      .im-side {
        width: 800px;
        position: relative;
      }
      .tb-side {
        width: 100%;
        height: auto;
      }
      .im {
        /* position: absolute; */
        width: 100%;
        height: auto;
      }
      .labels {
        position: absolute;
        left: 0px;
        top: 0px;
        /* background-color: rgba(100, 0, 0, 0.3); */
      }
      .label {
        position: absolute;
        background-color: darkred;
        color: white;
        padding: 2px 8px;
        font-size: 1.5em;
        box-shadow: 1px 1px 3px rgba(1,0,0,0.5),
                    inset 1px 1px 1px #ffffff70,
                    inset -1px -1px 1px #00000070;
        border-radius: 2px;
        user-select: none;
      }
      .bbox {
        position: absolute;
        border: solid 2px red;
        box-shadow: 1px 1px 1px blue;
      }
      .grid {
        display: grid;
        grid-template-columns: 48px 60% auto;
        grid-gap: 4px;
      }
      .cell {
        border-radius: 3px;
        padding: 4px 8px;
        background-color: #f0f0f0;
        scrollbar-width: 0px;
      }
      .cell-idx {
        user-select: none;
        cursor: grab;
      }
      .drop-hover {
        background-color: rgba(127, 0, 0, 0.4);
      }
      .thead {
        border-radius: 3px;
        background-color: lightgray;
      }
      .tarea {
        border: none;
        width: 100%;
        padding: 0px;
        margin: -4px 0px 0px -4px;
      }
      .hovered-label {
        filter: brightness(2.0);
      }
    `}static get properties(){return{page_num:{type:Number},img_src:{type:String},items:{type:Array,attribute:!1},_hovered_idx:{type:Number}}}constructor(){super(),this.img_src="",this.items=lo,this._hovered_idx=-1,this._moving_label={target:null,origClientX:0,origClientY:0,origLeft:0,origTop:0}}_add_label(t,e){this.items=[...this.items,{left:t,top:e,text:"",comment:""}]}_on_wheel(t){t.shiftKey&&(console.log("P"),t.preventDefault)}_update_labels_size(){const t=this.shadowRoot.querySelector("#im"),e=this.shadowRoot.querySelector("#labels");console.log(t.width),e.style.width=t.getBoundingClientRect().width+"px",console.log(e.style.width),e.style.height=t.getBoundingClientRect().height+"px"}_on_image_load(t){this._update_labels_size()}_on_mouseover_item(t){const e=t.target.dataset.idx;this._hovered_idx=e}_on_mouseout_item(t){this._hovered_idx=-1}_on_click_image(t){const e=this.shadowRoot.querySelector("#im"),i=t.offsetX/e.clientWidth,n=t.offsetY/e.clientHeight;i<0||i>1||n<0||n>1||(this._add_label(i,n),console.log(this.items.length))}_on_text_change(t){console.log(t.target.tagName,t.target.id);const e=t.target.dataset.idx;"text"==t.target.dataset.column?this.items[e].text=t.target.value:this.items[e].comment=t.target.value,console.log(this.items)}_on_text_focus(t){const e=t.target.dataset.idx;this.shadowRoot.querySelector("#label-"+e).scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}_on_text_dragstart(t){t.dataTransfer.setData("srcIdx",t.target.dataset.idx)}_on_text_drop(t){const e=t.dataTransfer.getData("srcIdx"),i=t.target.dataset.idx;console.log(`drop ${e} -> ${i}`),this._move(Number(e),Number(i))}_on_text_dragenter(t){}_move(t,e){if(t!=e)if(t<e){const i=this.items[t],n=this.items.slice(0,t),s=this.items.slice(t+1,e+1),r=this.items.slice(e+1),o=new Array;o.push(...n,...s,i,...r),this.items=o}else{const i=this.items[t],n=this.items.slice(0,e),s=this.items.slice(e,t),r=this.items.slice(t+1),o=new Array;o.push(...n,i,...s,...r),this.items=o}}_on_text_dragover(t){t.preventDefault(),t.stopPropagation()}_on_label_click(t){t.stopPropagation()}_on_label_rightclick(t){t.stopPropagation(),t.preventDefault(),null==this._moving_label.target&&(this.items.splice(Number(t.target.dataset.idx),1),this.items=[...this.items])}_on_label_mousedown(t){if(0!=t.button)return;const e=Number(t.target.dataset.idx);this._moving_label.target=t.target,this._moving_label.origClientX=t.clientX,this._moving_label.origClientY=t.clientY,this._moving_label.origLeft=this.items[e].left,this._moving_label.origTop=this.items[e].top}_on_label_mouseup(t){0==t.button&&(this._moving_label.target=null)}_on_label_mousemove(t){if(null==this._moving_label.target)return;const e=t.clientX-this._moving_label.origClientX,i=t.clientY-this._moving_label.origClientY,n=this.shadowRoot.querySelector("#labels"),s=e/n.clientWidth,r=i/n.clientHeight,o=Number(this._moving_label.target.dataset.idx);this.items[o].left=this._moving_label.origLeft+s,this.items[o].top=this._moving_label.origTop+r,this.items=[...this.items]}render(){return j`
      <h1>Page ${this.page_num} - ${this.items.length} texts</h1>
      <vaadin-split-layout class="editor" @iron-resize=${this._update_labels_size}>
        <div id="im-side" class="im-side">
          <img id="im" class="im" src="${this.img_src}" @load=${this._on_image_load}>
          <!-- Labels -->
          <div id="labels" 
               class="labels"
               @click="${this._on_click_image}"
               @mouseup=${this._on_label_mouseup}
               @mousemove=${this._on_label_mousemove}
          >
            ${this.items.map((t,e)=>j`
                <div id='label-${e}'
                     data-idx=${e}
                     class=${"label"+(this._hovered_idx==e?" hovered-label":"")}
                     style="left: ${100*t.left}%; bottom: ${100*(1-t.top)}%"
                     @mouseover=${this._on_mouseover_item}
                     @mouseout=${this._on_mouseout_item}
                     @click=${this._on_label_click}
                     @contextmenu=${this._on_label_rightclick}
                     @mousedown=${this._on_label_mousedown}
                >
                  ${e+1}
                </div>
              `)}
          </div>
        </div>
        <!-- Tables -->
        <div class="tb-side">
          <div id="grid" class="grid">
            <div class="cell thead">ID</div>
            <div class="cell thead">譯文</div>
            <div class="cell thead">註解</div>
            ${this.items.map((t,e)=>j`
                <label
                  class=${"cell cell-idx"+(this._hovered_idx==e?" hovered-label":"")}
                  @mouseover=${this._on_mouseover_item}
                  @mouseout=${this._on_mouseout_item}
                  @dragstart=${this._on_text_dragstart}
                  @dragover=${this._on_text_dragover}
                  @drop=${this._on_text_drop}
                  data-idx=${e}
                  draggable="true"
                >${e+1}</label>
                <div 
                  class=${"cell"+(this._hovered_idx==e?" hovered-label":"")}
                  @mouseover=${this._on_mouseover_item}
                  @mouseout=${this._on_mouseout_item}
                  data-idx=${e}
                >
                  <iron-autogrow-textarea 
                    data-idx=${e}
                    data-column='text' 
                    class="tarea"
                    value="${t.text}"
                    @value-changed=${this._on_text_change}
                    @focus=${this._on_text_focus}
                  >
                  </iron-autogrow-textarea>
                </div>
                <div
                  class=${"cell"+(this._hovered_idx==e?" hovered-label":"")}
                  @mouseover=${this._on_mouseover_item}
                  @mouseout=${this._on_mouseout_item}
                  data-idx=${e}
                >
                  <iron-autogrow-textarea data-idx=${e} data-column='comment' class="tarea" value="${t.comment}" @value-changed=${this._on_text_change}></iron-autogrow-textarea>
                </div>
              `)}
          </div>
        </div>
      </vaadin-split-layout>
      <slot></slot>
    `}}window.customElements.define("image-editor",co);export{co as ImageEditor};
