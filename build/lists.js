!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(3),a=r(o),l=n(8),s=n(1),i=n(2);!function(){function e(e,t){var n=void 0,r=void 0;switch(t.label){case"dl":n="",r=s.countChildrenWithTagNames(e,["DT","DD"]);break;case"ol":n="list",r=s.countChildrenWithTagNames(e,["LI"]);break;case"ul":n="list",r=s.countChildrenWithTagNames(e,["LI"])}var o={title:"LIST INFO",accName:l.getAccessibleName(e),role:n,props:r+" items"};return i.formatInfo(o)}var t=[{selector:"dl",color:"olive",label:"dl"},{selector:"ol",color:"purple",label:"ol"},{selector:"ul",color:"navy",label:"ul"}],n=t.map(function(e){return e.selector}).join(", "),r={msgTitle:"Lists",msgText:"No list elements ("+n+") found.",targetList:t,cssClass:s.listsCss,getInfo:e,dndFlag:!0},o=new a["default"]("a11yLists",r);o.run()}()},function(e,t,n){"use strict";function r(e){function t(e){for(var t=!0;t;){var n=e;if(r=o=a=l=s=void 0,t=!1,n.nodeType===Node.DOCUMENT_NODE)return!0;var r=window.getComputedStyle(n,null),o=r.getPropertyValue("display"),a=r.getPropertyValue("visibility"),l=n.getAttribute("hidden"),s=n.getAttribute("aria-hidden");if("none"===o||"hidden"===a||null!==l||"true"===s)return!1;e=n.parentNode,t=!0}}return t(e)}function o(e,t){for(var n=0,r=e.firstElementChild;r;)t.indexOf(r.tagName)>-1&&(n+=1),r=r.nextElementSibling;return n}function a(e,t){if("function"==typeof e.closest)for(var n=0;n<t.length;n++)if(e.closest(t[n]))return!0;return!1}function l(e){var t=e.targetList,n=e.cssClass,o=e.getInfo,a=e.dndFlag,l=0;return t.forEach(function(e){var t=document.querySelectorAll(e.selector);"function"==typeof e.filter&&(t=Array.prototype.filter.call(t,e.filter)),Array.prototype.forEach.call(t,function(t){var s,u;r(t)&&(s=t.getBoundingClientRect(),u=i.createOverlay(e,s,n),a&&i.addDragAndDrop(u),o&&(u.title=o(t,e)),document.body.appendChild(u),l+=1)})}),l}function s(e){var t="div."+e,n=document.querySelectorAll(t);Array.prototype.forEach.call(n,function(e){document.body.removeChild(e)})}Object.defineProperty(t,"__esModule",{value:!0}),t.countChildrenWithTagNames=o,t.isDescendantOf=a,t.addNodes=l,t.removeNodes=s;var i=n(6),u="a11yGfdXALm0";t.formsCss=u;var c="a11yGfdXALm1";t.headingsCss=c;var d="a11yGfdXALm2";t.imagesCss=d;var m="a11yGfdXALm3";t.landmarksCss=m;var f="a11yGfdXALm4";t.listsCss=f;var p="a11yGfdXALm5";t.interactiveCss=p},function(e,t){"use strict";function n(){var e,t="undefined"==typeof window.pageXOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollLeft?e:document.body).ScrollLeft:window.pageXOffset,n="undefined"==typeof window.pageYOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollTop?e:document.body).ScrollTop:window.pageYOffset;return{x:t,y:n}}function r(e,t,r){function o(t){t||(t=window.event);var r=n();e.style.left=t.clientX+r.x-d+"px",e.style.top=t.clientY+r.y-m+"px",e.style.cursor="move",t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function a(t){t||(t=window.event),e.style.cursor="grab",e.style.cursor="-moz-grab",e.style.cursor="-webkit-grab",document.removeEventListener?(document.removeEventListener("mouseup",a,!0),document.removeEventListener("mousemove",o,!0)):document.detachEvent&&(e.detachEvent("onlosecapture",a),e.detachEvent("onmouseup",a),e.detachEvent("onmousemove",o),e.releaseCapture()),t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}var l=n(),s=r.clientX+l.x,i=r.clientY+l.y,u=e.offsetLeft,c=e.offsetTop,d=s-u,m=i-c;t&&t(e),document.addEventListener?(document.addEventListener("mousemove",o,!0),document.addEventListener("mouseup",a,!0)):document.attachEvent&&(e.setCapture(),e.attachEvent("onmousemove",o),e.attachEvent("onmouseup",a),e.attachEvent("onlosecapture",a)),r.stopPropagation?r.stopPropagation():r.cancelBubble=!0,r.preventDefault?r.preventDefault():r.returnValue=!1}function o(e){var t="",n=e.title,r=e.element,o=e.accName,a=e.role,l=e.props;return t+="=== "+n+" ===",r&&(t+="\nELEMENT: "+r),o&&(t+="\nACC. NAME: "+o.name+"\nFROM: "+o.source),a&&(t+="\nARIA ROLE: "+a),l&&(t+="\nPROPERTIES: "+l),t}Object.defineProperty(t,"__esModule",{value:!0}),t.getScrollOffsets=n,t.drag=r,t.formatInfo=o},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),s=n(4),i=r(s),u=function(){function e(t,n){var r=this;return o(this,e),"object"==typeof window[t]?window[t]:(this.cssClass=n.cssClass,this.msgTitle=n.msgTitle,this.msgText=n.msgText,this.params=n,this.show=!1,window.addEventListener("resize",function(e){l.removeNodes(r.cssClass),i.resize(),r.show=!1}),void(window[t]=this))}return a(e,[{key:"run",value:function(){i.hide(),this.show=!this.show,this.show?0===l.addNodes(this.params)&&(i.show(this.msgTitle,this.msgText),this.show=!1):l.removeNodes(this.cssClass)}}]),e}();t["default"]=u,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){var t=window.innerWidth/3.2,n=window.innerWidth/2-t/2,r=u.getScrollOffsets();e.style.width=t+"px",e.style.left=r.x+n+"px",e.style.top=r.y+30+"px"}function o(e){var t=document.createElement("div"),n=document.createElement("button");return t.className="oaa-message-dialog",r(t),n.onclick=e,t.appendChild(n),document.body.appendChild(t),t}function a(e){e&&document.body.removeChild(e)}function l(e,t){var n,r;window[c]||(window[c]=o(s)),n=document.createElement("h2"),n.innerHTML=e,window[c].appendChild(n),r=document.createElement("div"),r.innerHTML=t,window[c].appendChild(r)}function s(){window[c]&&(a(window[c]),delete window[c])}function i(){window[c]&&r(window[c])}Object.defineProperty(t,"__esModule",{value:!0}),t.show=l,t.hide=s,t.resize=i;var u=n(2),c="a11yMessageDialog"},,function(e,t,n){"use strict";function r(e,t,n){var r=document.createElement("div"),o=a.getScrollOffsets(),s="background-color: "+e.color,i=34,u=27;return r.setAttribute("class",[n,"oaa-element-overlay"].join(" ")),r.startLeft=t.left+o.x+"px",r.startTop=t.top+o.y+"px",r.style.left=r.startLeft,r.style.top=r.startTop,r.style.width=Math.max(t.width,i)+"px",r.style.height=Math.max(t.height,u)+"px",r.style.borderColor=e.color,r.style.zIndex=l,r.innerHTML='<div style="'+s+'">'+e.label+"</div>",r}function o(e){function t(e){var t=100;e.style.zIndex=l+=t}function n(e){e.style.left=e.startLeft,e.style.top=e.startTop}var r=e.firstChild;r.onmousedown=function(e){a.drag(this.parentNode,t,e)},r.ondblclick=function(e){n(this.parentNode)}}Object.defineProperty(t,"__esModule",{value:!0}),t.createOverlay=r,t.addDragAndDrop=o;var a=n(2),l=1e5},,function(e,t){"use strict";function n(e){var t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;return e.replace(t,"").replace(/\s+/g," ")}function r(e,t){var r=e.getAttribute(t);return null===r?"":n(r)}function o(e){function t(e,o){var a,l,s;switch(e.nodeType){case Node.ELEMENT_NODE:a=e.tagName.toLowerCase(),"img"===a||"area"===a?(l=r(e,"alt"),l.length&&o.push(l)):e.hasChildNodes()&&Array.prototype.forEach.call(e.childNodes,function(e){t(e,o)});break;case Node.TEXT_NODE:s=n(e.textContent),s.length&&o.push(s)}return o}var o;return o=t(e,[]),o.length?o.join(" "):""}function a(e){var t;return null===e?"":(t=o(e),t?t:e.title?n(e.title):"")}function l(e,t){var n,r,o,l,s=e.getAttribute(t),i=[];if(s&&s.length)for(n=s.split(" "),r=0;r<n.length;r++)o=document.getElementById(n[r]),l=a(o),l.length&&i.push(l);return i.length?i.join(" "):""}function s(e){var t;return t=l(e,"aria-labelledby"),t.length?{name:t,source:"aria-labelledby"}:(t=r(e,"aria-label"),t.length?{name:t,source:"aria-label"}:null)}function i(e){var t;return(t=s(e))?t:(t=r(e,"title"),t.length?{name:t,source:"title"}:null)}function u(e){var t;return(t=s(e))?t:(t=o(e),t.length?{name:t,source:"contents"}:(t=r(e,"title"),t.length?{name:t,source:"title"}:null))}function c(e,t){var n;if(n=s(e))return n;if("undefined"!=typeof t){var o=!0,a=!1,l=void 0;try{for(var i,u=t[Symbol.iterator]();!(o=(i=u.next()).done);o=!0){var c=i.value;if(n=r(e,c),n.length)return{name:n,source:c}}}catch(d){a=!0,l=d}finally{try{!o&&u["return"]&&u["return"]()}finally{if(a)throw l}}}return n=r(e,"title"),n.length?{name:n,source:"title"}:null}Object.defineProperty(t,"__esModule",{value:!0}),t.normalize=n,t.getAttributeValue=r,t.getElementText=o,t.getAccessibleNameAria=s,t.getAccessibleName=i,t.getAccessibleNameUseContents=u,t.getAccessibleNameUseAttributes=c}]);