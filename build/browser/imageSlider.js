var imageSlider=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){var r=n(1);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,'* {\n  padding: 0;\n  margin: 0;\n  /* box-sizing: border-box; */\n  font-family: "bpreplaybold", "Proxima Nova Soft", "Helvetica Neue", sans-serif; }\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 100vh;\n  background-color: lightsteelblue; }\n\n.slider {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n.slider__main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative; }\n  .slider__main__text {\n    position: absolute;\n    top: 20px;\n    left: 20px;\n    /* width: 200px; */\n    /* height: 200px; */\n    font-size: 50px;\n    opacity: .4;\n    color: white;\n    user-select: none; }\n  .slider__main__window {\n    overflow: hidden;\n    /* box-sizing: border-box; */\n    height: 400px;\n    width: 800px;\n    border: 8px solid rgba(255, 255, 255, 0.4);\n    border-radius: 10px;\n    background-color: rgba(0, 0, 0, 0.3);\n    position: relative;\n    /* IMAGES */ }\n    .slider__main__window__images-container {\n      display: flex;\n      width: 1000%;\n      flex-direction: row; }\n      .slider__main__window__images-container .image-container {\n        height: 400px;\n        width: 800px;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-around;\n        flex-flow: row nowrap;\n        align-items: center; }\n      .slider__main__window__images-container .image {\n        max-width: 100%;\n        max-height: 100%;\n        min-height: 100%; }\n  .slider__main__dots {\n    margin-top: 20px;\n    height: 50px;\n    width: 500px;\n    /* border: 2px solid black; */\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center; }\n    .slider__main__dots .dot {\n      height: 10px;\n      width: 10px;\n      background-color: white;\n      border-radius: 100%;\n      margin-left: 5px;\n      opacity: .5;\n      border: 4px solid rgba(0, 0, 0, 0.5);\n      transition: width 0.4s, height 0.4s, opacity 0.4s;\n      user-select: none; }\n      .slider__main__dots .dot:hover {\n        /* background-color: grey !important; */\n        opacity: 1 !important;\n        cursor: pointer; }\n\n/* ARROW BUTTONS */\n.slider__btn {\n  height: 50px;\n  width: 50px;\n  background-color: white;\n  border-radius: 50%;\n  margin: 40px;\n  position: relative;\n  opacity: .8;\n  border: 5px solid #aaa;\n  user-select: none;\n  cursor: pointer;\n  transition: opacity 0.5s; }\n  .slider__btn:hover {\n    opacity: 1; }\n  .slider__btn:active {\n    transform: scale(0.9); }\n  .slider__btn::after {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 25%;\n    border: solid grey;\n    border-radius: 7px;\n    border-width: 0px 0px 7px 7px;\n    height: 20px;\n    width: 20px; }\n\n.slider__btn-left::after {\n  transform: rotate(45deg);\n  left: 30%; }\n\n.slider__btn-right::after {\n  transform: rotate(-135deg);\n  left: 18%; }\n\n/* IMAGE SELECTOR */\n.image-selector {\n  width: 200px;\n  font-size: 20px; }\n  .image-selector p {\n    border-radius: 9px;\n    padding: 5px;\n    padding-left: 10px;\n    margin-bottom: 5px;\n    opacity: .7;\n    user-select: none;\n    cursor: pointer; }\n    .image-selector p:hover {\n      opacity: 1; }\n',""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(o=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),s=r.sources.map(function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")});return[n].concat(s).concat([i]).join("\n")}var o,a,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var s=this[i][0];null!=s&&(r[s]=!0)}for(var o=0;o<t.length;o++){var a=t[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="(".concat(a[2],") and (").concat(n,")")),e.push(a))}},e}},function(t,e,n){var r,i,s={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),l=null,c=0,d=[],f=n(4);function u(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=s[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(b(r.parts[o],e))}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(b(r.parts[o],e));s[r.id]={id:r.id,refs:1,parts:a}}}}function h(t,e){for(var n=[],r={},i=0;i<t.length;i++){var s=t[i],o=e.base?s[0]+e.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};r[o]?r[o].parts.push(a):n.push(r[o]={id:o,parts:[a]})}return n}function p(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),d.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(t.insertAt.before,n);n.insertBefore(e,i)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return y(e,t.attrs),p(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,i,s;if(e.transform&&t.css){if(!(s="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=s}if(e.singleton){var o=c++;n=l||(l=g(e)),r=O.bind(null,n,o,!1),i=O.bind(null,n,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,s=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||s)&&(r=f(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}.bind(null,n,e),i=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return u(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var o=n[i];(a=s[o.id]).refs--,r.push(a)}t&&u(h(t,e),e);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete s[a.id]}}}};var v,x=(v=[],function(t,e){return v[t]=e,v.filter(Boolean).join("\n")});function O(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var s=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,s=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?t:(i=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:r+s.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){"use strict";n.r(e);const r=800,i=20,s={success:"rgb(0, 170, 0)",danger:"rgb(170, 0, 0)"},o={size:"10px",sizeBig:"20px",bgColor:"#fff"};n(0);class a{constructor(t,e){this.slider=t,this.namesOfImageFiles=e,this.arrayOfImages=[],this.loadImagesFromFolder(),this.createCheckButtons(),this.slider.loadImages(this.arrayOfImages)}createCheckButtons(){const t=document.querySelector(".image-selector"),e=[];let n;for(let r=0;r<this.namesOfImageFiles.length;r++)(n=document.createElement("p")).style.backgroundColor=s.success,e.push(n),n.textContent=this.namesOfImageFiles[r],t.appendChild(n),this.addOnClickEvents(n,this.arrayOfImages[r])}addOnClickEvents(t,e){t.addEventListener("click",()=>{t.style.backgroundColor==s.success&&this.thereIsMoreThanOnePic()?(t.style.backgroundColor=s.danger,e.isActive=!1):(t.style.backgroundColor=s.success,e.isActive=!0),this.slider.loadImages(this.arrayOfImages)})}loadImagesFromFolder(){let t,e=[];for(let n=0;n<10;n++){e.push({}),(t=new Image).src="src/images/"+this.namesOfImageFiles[n],t.className="image";let r=document.createElement("div");r.className="image-container",r.appendChild(t),e[n].img=r,e[n].isActive=!0}this.arrayOfImages=e}thereIsMoreThanOnePic(){let t=0;for(let e=0;e<this.arrayOfImages.length;e++)this.arrayOfImages[e].isActive&&t++;return t>1}}const l=new class{constructor(){this.currentXOffset=-r,this.imageTrain=document.querySelector(".slider__main__window__images-container"),this.animationActive=!1,this.text=document.querySelector(".slider__main__text"),this.dots={};let t=document.querySelector(".slider__btn-left"),e=document.querySelector(".slider__btn-right");t.addEventListener("click",()=>{!this.animationActive&&this.arrayOfImages.length>1&&this.slideLeft()}),e.addEventListener("click",()=>{!this.animationActive&&this.arrayOfImages.length>1&&this.slideRight()})}loadImages(t){this.arrayOfImages=[],this.imageTrain.innerHTML="",this.dots.listOfDots=[],this.dots.dotsContainer.innerHTML="",this.dots.currentSelectedDot=0;for(let e=0;e<t.length;e++)t[e].isActive&&(this.arrayOfImages.push(t[e].img),this.imageTrain.append(t[e].img));this.arrayOfImages.length>2?this.currentXOffset=-r:this.currentXOffset=0,this.settingTrainOrder(),this.imageTrain.style.transform=`translate(${this.currentXOffset}px, 0px)`,this.writeNumbers(),this.dots.makeDots()}writeNumbers(){let t=`${this.dots.currentSelectedDot+1}/${this.dots.listOfDots.length}`;this.text.textContent=t}settingTrainOrder(){for(let t=0;t<this.arrayOfImages.length;t++)this.arrayOfImages[t].style.order=t;this.arrayOfImages.length>2&&(this.arrayOfImages[this.arrayOfImages.length-1].style.order=-1)}slideLeft(t=1){this.adjustTrainLeftward(t),this.animate(1,t),this.dots.selectDot(-t)}slideRight(t=1){this.animate(-1,t),this.dots.selectDot(t)}adjustTrainLeftward(t){for(let e=0;e<t;e++)this.arrayOfImages.unshift(this.arrayOfImages.pop());this.settingTrainOrder(),this.currentXOffset-=r*t}adjustTrainRightward(t){for(let e=0;e<t;e++)this.arrayOfImages.push(this.arrayOfImages.shift());this.settingTrainOrder(),this.adjustXOffset(this.currentXOffset)}adjustXOffset(t){this.imageTrain.style.transform=`translate(${t}px, 0px)`}animate(t,e){let n=r*e/i;requestAnimationFrame(()=>{this.animationFrame(this.currentXOffset,n,0,t,e)}),this.animationActive=!0}animationFrame(t,e,n,s,o){let a=t+e*s;n+=1,this.adjustXOffset(a),n<i?requestAnimationFrame(()=>{this.animationFrame(a,e,n,s,o)}):(-1==s?this.adjustTrainRightward(o):this.currentXOffset+=r*o*s,this.animationActive=!1)}};new class{constructor(t){this.dotsContainer=document.querySelector(".slider__main__dots"),this.currentSelectedDot=0,this.listOfDots=[],this.slider=t,this.slider.dots=this}makeDots(){let t;for(let e=0;e<this.slider.arrayOfImages.length;e++)(t=document.createElement("div")).className="dot",this.dotsContainer.appendChild(t),this.listOfDots.push(t),t.addEventListener("click",()=>{!this.slider.animationActive&&this.slider.arrayOfImages.length>1&&this.selectImage(e)});this.selectDot(0)}selectDot(t){let e=this.listOfDots[this.currentSelectedDot].style;e.backgroundColor=o.bgColor,e.width=o.size,e.height=o.size,e.opacity=".5",this.currentSelectedDot+=t,this.currentSelectedDot<0?this.currentSelectedDot=this.listOfDots.length-1:this.currentSelectedDot==this.listOfDots.length&&(this.currentSelectedDot=0),(e=this.listOfDots[this.currentSelectedDot].style).backgroundColor=o.bgColor,e.opacity="1",e.width=o.sizeBig,e.height=o.sizeBig,this.slider.writeNumbers()}selectImage(t){let e=t-this.currentSelectedDot;e>=0?this.slider.slideRight(e):this.slider.slideLeft(Math.abs(e))}}(l);!async function(){const t=await fetch("src/images.json",{method:"GET"}).then(t=>t.json());new a(l,t)}()}]);