(function(){'use strict';var m,n=this;function p(a){return"string"==typeof a}function q(a,b,d){a=a.split(".");d=d||n;a[0]in d||!d.execScript||d.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)a.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}function aa(){}
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function t(a){return"array"==ba(a)}function ca(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function da(a,b,d){return a.call.apply(a.bind,arguments)}
function ea(a,b,d){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,e);return a.apply(b,d)}}return function(){return a.apply(b,arguments)}}function u(a,b,d){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u=da:u=ea;return u.apply(null,arguments)}
function fa(a,b){var d=Array.prototype.slice.call(arguments,1);return function(){var b=d.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var v=Date.now||function(){return+new Date};function w(a,b){function d(){}d.prototype=b.prototype;a.w=b.prototype;a.prototype=new d;a.prototype.constructor=a;a.T=function(a,d,g){for(var e=Array(arguments.length-2),f=2;f<arguments.length;f++)e[f-2]=arguments[f];return b.prototype[d].apply(a,e)}};var ha;var ia=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function ka(a,b,d){return a.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"g"),d.replace(/\$/g,"$$$$"))}
function la(a,b){var d=0;a=ia(String(a)).split(".");b=ia(String(b)).split(".");for(var e=Math.max(a.length,b.length),f=0;0==d&&f<e;f++){var g=a[f]||"",k=b[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;d=ma(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||ma(0==g[2].length,0==k[2].length)||ma(g[2],k[2]);g=g[3];k=k[3]}while(0==d)}return d}function ma(a,b){return a<b?-1:a>b?1:0};var na=Array.prototype.indexOf?function(a,b,d){return Array.prototype.indexOf.call(a,b,d)}:function(a,b,d){d=null==d?0:0>d?Math.max(0,a.length+d):d;if(p(a))return p(b)&&1==b.length?a.indexOf(b,d):-1;for(;d<a.length;d++)if(d in a&&a[d]===b)return d;return-1},oa=Array.prototype.forEach?function(a,b,d){Array.prototype.forEach.call(a,b,d)}:function(a,b,d){for(var e=a.length,f=p(a)?a.split(""):a,g=0;g<e;g++)g in f&&b.call(d,f[g],g,a)};function pa(a){return Array.prototype.concat.apply([],arguments)}
function qa(a){var b=a.length;if(0<b){for(var d=Array(b),e=0;e<b;e++)d[e]=a[e];return d}return[]};var x;a:{var ra=n.navigator;if(ra){var sa=ra.userAgent;if(sa){x=sa;break a}}x=""};function ta(a,b,d){for(var e in a)b.call(d,a[e],e,a)}var ua="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function va(a,b){for(var d,e,f=1;f<arguments.length;f++){e=arguments[f];for(d in e)a[d]=e[d];for(var g=0;g<ua.length;g++)d=ua[g],Object.prototype.hasOwnProperty.call(e,d)&&(a[d]=e[d])}};function wa(a){wa[" "](a);return a}wa[" "]=aa;function xa(a,b){try{return wa(a[b]),!0}catch(d){}return!1}function ya(a,b,d){return Object.prototype.hasOwnProperty.call(a,b)?a[b]:a[b]=d(b)};var za=-1!=x.indexOf("Opera"),y=-1!=x.indexOf("Trident")||-1!=x.indexOf("MSIE"),Aa=-1!=x.indexOf("Edge"),Ba=-1!=x.indexOf("Gecko")&&!(-1!=x.toLowerCase().indexOf("webkit")&&-1==x.indexOf("Edge"))&&!(-1!=x.indexOf("Trident")||-1!=x.indexOf("MSIE"))&&-1==x.indexOf("Edge"),Ca=-1!=x.toLowerCase().indexOf("webkit")&&-1==x.indexOf("Edge");function Da(){var a=n.document;return a?a.documentMode:void 0}var Ea;
a:{var Fa="",Ga=function(){var a=x;if(Ba)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Aa)return/Edge\/([\d\.]+)/.exec(a);if(y)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ca)return/WebKit\/(\S+)/.exec(a);if(za)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Ga&&(Fa=Ga?Ga[1]:"");if(y){var Ha=Da();if(null!=Ha&&Ha>parseFloat(Fa)){Ea=String(Ha);break a}}Ea=Fa}var Ia=Ea,Ja={};function Ka(){return ya(Ja,"9",function(){return 0<=la(Ia,"9")})}var La;var Ma=n.document;
La=Ma&&y?Da()||("CSS1Compat"==Ma.compatMode?parseInt(Ia,10):5):void 0;function Na(a){this.data=a||[]};function Oa(a){this.data=a||[]}w(Oa,Na);var Pa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Qa(a){return a?decodeURI(a):a}function Ra(a,b){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var e=a[d].indexOf("="),f=null;if(0<=e){var g=a[d].substring(0,e);f=a[d].substring(e+1)}else g=a[d];b(g,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}}
function Sa(a,b){if(!b)return a;var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);a=[a.substr(0,e),f,a.substr(d)];d=a[1];a[1]=b?d?d+"&"+b:b:d;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}function Ta(a,b,d){if(t(b))for(var e=0;e<b.length;e++)Ta(a,String(b[e]),d);else null!=b&&d.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}function Ua(a,b){var d=[],e;for(e in b)Ta(e,b[e],d);return Sa(a,d.join("&"))}var Va=/#|$/;
function Wa(a,b){var d=a.search(Va);a:{var e=0;for(var f=b.length;0<=(e=a.indexOf(b,e))&&e<d;){var g=a.charCodeAt(e-1);if(38==g||63==g)if(g=a.charCodeAt(e+f),!g||61==g||38==g||35==g)break a;e+=f+1}e=-1}if(0>e)return null;f=a.indexOf("&",e);if(0>f||f>d)f=d;e+=b.length+1;return decodeURIComponent(a.substr(e,f-e).replace(/\+/g," "))};var Xa=document;var Ya=y&&!Ka();function Za(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):$a(document,a,void 0)}function ab(a,b){var d=b||document;if(d.getElementsByClassName)a=d.getElementsByClassName(a)[0];else{d=document;var e=b||d;a=e.querySelectorAll&&e.querySelector&&a?e.querySelector(""+(a?"."+a:"")):$a(d,a,b)[0]||null}return a||null}
function $a(a,b,d){var e,f;a=d||a;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(""+(b?"."+b:""));if(b&&a.getElementsByClassName)return f=a.getElementsByClassName(b);f=a.getElementsByTagName("*");if(b){var g={};for(d=e=0;a=f[d];d++){var k=a.className,h;if(h="function"==typeof k.split)h=0<=na(k.split(/\s+/),b);h&&(g[e++]=a)}g.length=e;return g}return f}function bb(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
var cb={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},db={IMG:" ",BR:"\n"};function eb(a,b,d){if(!(a.nodeName in cb))if(3==a.nodeType)d?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in db)b.push(db[a.nodeName]);else for(a=a.firstChild;a;)eb(a,b,d),a=a.nextSibling}function fb(){this.b=n.document||document};function gb(){var a=ib;try{return!!a&&null!=a.location.href&&xa(a,"foo")}catch(b){return!1}};var jb=!!window.google_async_iframe_id,ib=jb&&window.parent||window;var kb=null;function lb(a,b){var d=(d=n.performance)&&d.now?d.now():v();this.label=a;this.type=b;this.value=d;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};function nb(a,b){this.c=[];this.f=b||n;var d=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.c=b.google_js_reporting_queue,d=b.google_measure_js_timing);if(null===kb){kb="";try{var e=n.top.location.hash;if(e){var f=e.match(/\bdeid=([\d,]+)/);kb=f?f[1]:""}}catch(g){}}b=kb;b=b.indexOf&&0<=b.indexOf("1337");this.b=(this.b=null!=d?d:Math.random()<a)||b;a=this.f.performance;this.g=!!(a&&a.mark&&a.clearMarks&&b)}
nb.prototype.h=function(a){if(a&&this.g){var b=this.f.performance;b.clearMarks("goog_"+a.uniqueId+"_start");b.clearMarks("goog_"+a.uniqueId+"_end")}};nb.prototype.start=function(a,b){if(!this.b)return null;a=new lb(a,b);this.g&&this.f.performance.mark("goog_"+a.uniqueId+"_start");return a};if(jb&&!gb()){var ob="."+Xa.domain;try{for(;2<ob.split(".").length&&!gb();)Xa.domain=ob=ob.substr(ob.indexOf(".")+1),ib=window.parent}catch(a){}gb()||(ib=window)}var A=ib,B=new nb(1,A);function pb(){A.google_measure_js_timing||(B.c!=B.f.google_js_reporting_queue&&(B.c.length=0,B.g&&oa(B.c,B.h,B)),B.b=!1)}if("complete"==A.document.readyState)pb();else if(B.b){var qb=function(){pb()};A.addEventListener?A.addEventListener("load",qb,void 0):A.attachEvent&&A.attachEvent("onload",qb)};var rb="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function sb(){}sb.prototype.next=function(){throw rb;};sb.prototype.L=function(){return this};function tb(a,b){this.c={};this.b=[];this.g=this.f=0;var d=arguments.length;if(1<d){if(d%2)throw Error("Uneven number of arguments");for(var e=0;e<d;e+=2)this.set(arguments[e],arguments[e+1])}else if(a){if(a instanceof tb){var f=a.A();e=a.s()}else{d=[];var g=0;for(f in a)d[g++]=f;f=d;d=[];g=0;for(e in a)d[g++]=a[e];e=d}for(d=0;d<f.length;d++)this.set(f[d],e[d])}}m=tb.prototype;m.s=function(){ub(this);for(var a=[],b=0;b<this.b.length;b++)a.push(this.c[this.b[b]]);return a};
m.A=function(){ub(this);return this.b.concat()};function ub(a){var b,d;if(a.f!=a.b.length){for(b=d=0;d<a.b.length;){var e=a.b[d];C(a.c,e)&&(a.b[b++]=e);d++}a.b.length=b}if(a.f!=a.b.length){var f={};for(b=d=0;d<a.b.length;)e=a.b[d],C(f,e)||(a.b[b++]=e,f[e]=1),d++;a.b.length=b}}m.get=function(a,b){return C(this.c,a)?this.c[a]:b};m.set=function(a,b){C(this.c,a)||(this.f++,this.b.push(a),this.g++);this.c[a]=b};
m.forEach=function(a,b){for(var d=this.A(),e=0;e<d.length;e++){var f=d[e],g=this.get(f);a.call(b,g,f,this)}};m.L=function(a){ub(this);var b=0,d=this.g,e=this,f=new sb;f.next=function(){if(d!=e.g)throw Error("The map has changed since the iterator was created");if(b>=e.b.length)throw rb;var f=e.b[b++];return a?f:e.c[f]};return f};function C(a,b){return Object.prototype.hasOwnProperty.call(a,b)};function vb(a,b){this.g=this.m=this.f="";this.j=null;this.h=this.i="";this.b=!1;if(a instanceof vb){this.b=void 0!==b?b:a.b;wb(this,a.f);this.m=a.m;this.g=a.g;xb(this,a.j);this.i=a.i;b=a.c;var d=new yb;d.f=b.f;b.b&&(d.b=new tb(b.b),d.c=b.c);zb(this,d);this.h=a.h}else a&&(d=String(a).match(Pa))?(this.b=!!b,wb(this,d[1]||"",!0),this.m=Ab(d[2]||""),this.g=Ab(d[3]||"",!0),xb(this,d[4]),this.i=Ab(d[5]||"",!0),zb(this,d[6]||"",!0),this.h=Ab(d[7]||"")):(this.b=!!b,this.c=new yb(null,0,this.b))}
vb.prototype.toString=function(){var a=[],b=this.f;b&&a.push(Bb(b,Cb,!0),":");var d=this.g;if(d||"file"==b)a.push("//"),(b=this.m)&&a.push(Bb(b,Cb,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.j,null!=d&&a.push(":",String(d));if(d=this.i)this.g&&"/"!=d.charAt(0)&&a.push("/"),a.push(Bb(d,"/"==d.charAt(0)?Db:Eb,!0));(d=this.c.toString())&&a.push("?",d);(d=this.h)&&a.push("#",Bb(d,Fb));return a.join("")};
function wb(a,b,d){a.f=d?Ab(b,!0):b;a.f&&(a.f=a.f.replace(/:$/,""))}function xb(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.j=b}else a.j=null}function zb(a,b,d){b instanceof yb?(a.c=b,Gb(a.c,a.b)):(d||(b=Bb(b,Hb)),a.c=new yb(b,0,a.b))}function Ab(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Bb(a,b,d){return p(a)?(a=encodeURI(a).replace(b,Ib),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Ib(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Cb=/[#\/\?@]/g,Eb=/[\#\?:]/g,Db=/[\#\?]/g,Hb=/[\#\?@]/g,Fb=/#/g;function yb(a,b,d){this.c=this.b=null;this.f=a||null;this.g=!!d}function D(a){a.b||(a.b=new tb,a.c=0,a.f&&Ra(a.f,function(b,d){b=decodeURIComponent(b.replace(/\+/g," "));D(a);a.f=null;b=F(a,b);var e=a.b.get(b);e||a.b.set(b,e=[]);e.push(d);a.c+=1}))}
function Jb(a,b){D(a);b=F(a,b);C(a.b.c,b)&&(a.f=null,a.c-=a.b.get(b).length,a=a.b,C(a.c,b)&&(delete a.c[b],a.f--,a.g++,a.b.length>2*a.f&&ub(a)))}function Kb(a,b){D(a);b=F(a,b);return C(a.b.c,b)}m=yb.prototype;m.forEach=function(a,b){D(this);this.b.forEach(function(d,e){oa(d,function(d){a.call(b,d,e,this)},this)},this)};m.A=function(){D(this);for(var a=this.b.s(),b=this.b.A(),d=[],e=0;e<b.length;e++)for(var f=a[e],g=0;g<f.length;g++)d.push(b[e]);return d};
m.s=function(a){D(this);var b=[];if(p(a))Kb(this,a)&&(b=pa(b,this.b.get(F(this,a))));else{a=this.b.s();for(var d=0;d<a.length;d++)b=pa(b,a[d])}return b};m.set=function(a,b){D(this);this.f=null;a=F(this,a);Kb(this,a)&&(this.c-=this.b.get(a).length);this.b.set(a,[b]);this.c+=1;return this};m.get=function(a,b){a=a?this.s(a):[];return 0<a.length?String(a[0]):b};
m.toString=function(){if(this.f)return this.f;if(!this.b)return"";for(var a=[],b=this.b.A(),d=0;d<b.length;d++){var e=b[d],f=encodeURIComponent(String(e));e=this.s(e);for(var g=0;g<e.length;g++){var k=f;""!==e[g]&&(k+="="+encodeURIComponent(String(e[g])));a.push(k)}}return this.f=a.join("&")};function F(a,b){b=String(b);a.g&&(b=b.toLowerCase());return b}
function Gb(a,b){b&&!a.g&&(D(a),a.f=null,a.b.forEach(function(a,b){var d=b.toLowerCase();b!=d&&(Jb(this,b),Jb(this,d),0<a.length&&(this.f=null,this.b.set(F(this,d),qa(a)),this.c+=a.length))},a));a.g=b};var Lb,Mb,Nb;function Ob(){return n.navigator?n.navigator.userAgent:""}function G(a){return-1!=Ob().indexOf(a)}var Pb=G("(iPad")||G("(iPod")||G("(iPhone"),Qb=G("Android"),Rb=G("MSIE")||G("IEMobile")||G("Windows Phone");function H(){this.g=this.g;this.f=this.f}H.prototype.g=!1;H.prototype.I=function(){this.g||(this.g=!0,this.o())};H.prototype.o=function(){if(this.f)for(;this.f.length;)this.f.shift()()};function Sb(a){a&&"function"==typeof a.I&&a.I()};function I(a,b){this.type=a;this.b=this.target=b;this.c=!1;this.K=!0}I.prototype.stopPropagation=function(){this.c=!0};I.prototype.preventDefault=function(){this.K=!1};function Tb(a,b){this.c=a;this.b=b||{}}function Ub(a,b){I.call(this,a.c,b);this.N=a.b||{}}w(Ub,I);var Vb;(Vb=!y)||(Vb=9<=Number(La));var Wb=Vb,Xb=y&&!Ka(),Yb=function(){if(!n.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});n.addEventListener("test",aa,b);n.removeEventListener("test",aa,b);return a}();function J(a,b){I.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.f=null;if(a){var d=this.type=a.type,e=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;(b=a.relatedTarget)?Ba&&(xa(b,"nodeName")||(b=null)):"mouseover"==d?b=a.fromElement:"mouseout"==d&&(b=a.toElement);this.relatedTarget=b;null===e?(this.clientX=
void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a;a.defaultPrevented&&this.preventDefault()}}w(J,I);
J.prototype.stopPropagation=function(){J.w.stopPropagation.call(this);this.f.stopPropagation?this.f.stopPropagation():this.f.cancelBubble=!0};J.prototype.preventDefault=function(){J.w.preventDefault.call(this);var a=this.f;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Xb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Zb="closure_listenable_"+(1E6*Math.random()|0);function $b(a){return!(!a||!a[Zb])}var ac=0;function bc(a,b,d,e,f){this.listener=a;this.b=null;this.src=b;this.type=d;this.capture=!!e;this.D=f;this.key=++ac;this.v=this.C=!1}function cc(a){a.v=!0;a.listener=null;a.b=null;a.src=null;a.D=null};function dc(a){this.src=a;this.b={};this.c=0}function ec(a,b,d,e,f,g){var k=b.toString();b=a.b[k];b||(b=a.b[k]=[],a.c++);var h=fc(b,d,f,g);-1<h?(a=b[h],e||(a.C=!1)):(a=new bc(d,a.src,k,!!f,g),a.C=e,b.push(a));return a}function gc(a,b){var d=b.type;if(d in a.b){var e=a.b[d],f=na(e,b),g;(g=0<=f)&&Array.prototype.splice.call(e,f,1);g&&(cc(b),0==a.b[d].length&&(delete a.b[d],a.c--))}}function hc(a,b,d,e,f){a=a.b[b.toString()];b=-1;a&&(b=fc(a,d,e,f));return-1<b?a[b]:null}
function fc(a,b,d,e){for(var f=0;f<a.length;++f){var g=a[f];if(!g.v&&g.listener==b&&g.capture==!!d&&g.D==e)return f}return-1};var ic="closure_lm_"+(1E6*Math.random()|0),jc={},kc=0;function lc(a,b,d,e,f){if(e&&e.once)return mc(a,b,d,e,f);if(t(b)){for(var g=0;g<b.length;g++)lc(a,b[g],d,e,f);return null}d=nc(d);return $b(a)?a.listen(b,d,ca(e)?!!e.capture:!!e,f):oc(a,b,d,!1,e,f)}
function oc(a,b,d,e,f,g){if(!b)throw Error("Invalid event type");var k=ca(f)?!!f.capture:!!f,h=pc(a);h||(a[ic]=h=new dc(a));d=ec(h,b,d,e,k,g);if(d.b)return d;e=qc();d.b=e;e.src=a;e.listener=d;if(a.addEventListener)Yb||(f=k),void 0===f&&(f=!1),a.addEventListener(b.toString(),e,f);else if(a.attachEvent)a.attachEvent(rc(b.toString()),e);else throw Error("addEventListener and attachEvent are unavailable.");kc++;return d}
function qc(){var a=sc,b=Wb?function(d){return a.call(b.src,b.listener,d)}:function(d){d=a.call(b.src,b.listener,d);if(!d)return d};return b}function mc(a,b,d,e,f){if(t(b)){for(var g=0;g<b.length;g++)mc(a,b[g],d,e,f);return null}d=nc(d);return $b(a)?ec(a.b,String(b),d,!0,ca(e)?!!e.capture:!!e,f):oc(a,b,d,!0,e,f)}function tc(a,b,d,e,f){if(t(b))for(var g=0;g<b.length;g++)tc(a,b[g],d,e,f);else e=ca(e)?!!e.capture:!!e,d=nc(d),$b(a)?a.unlisten(b,d,e,f):a&&(a=pc(a))&&(b=hc(a,b,d,e,f))&&uc(b)}
function uc(a){if("number"!=typeof a&&a&&!a.v){var b=a.src;if($b(b))gc(b.b,a);else{var d=a.type,e=a.b;b.removeEventListener?b.removeEventListener(d,e,a.capture):b.detachEvent&&b.detachEvent(rc(d),e);kc--;(d=pc(b))?(gc(d,a),0==d.c&&(d.src=null,b[ic]=null)):cc(a)}}}function rc(a){return a in jc?jc[a]:jc[a]="on"+a}function vc(a,b,d,e){var f=!0;if(a=pc(a))if(b=a.b[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var g=b[a];g&&g.capture==d&&!g.v&&(g=wc(g,e),f=f&&!1!==g)}return f}
function wc(a,b){var d=a.listener,e=a.D||a.src;a.C&&uc(a);return d.call(e,b)}
function sc(a,b){if(a.v)return!0;if(!Wb){if(!b)a:{b=["window","event"];for(var d=n,e;e=b.shift();)if(null!=d[e])d=d[e];else{b=null;break a}b=d}e=b;b=new J(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=b.b;f;f=f.parentNode)e.push(f);f=a.type;for(var g=e.length-1;!b.c&&0<=g;g--)b.b=e[g],a=vc(e[g],f,!0,b),d=d&&a;for(g=0;!b.c&&g<e.length;g++)b.b=e[g],a=vc(e[g],f,!1,b),d=
d&&a}return d}return wc(a,new J(b,this))}function pc(a){a=a[ic];return a instanceof dc?a:null}var xc="__closure_events_fn_"+(1E9*Math.random()>>>0);function nc(a){if("function"==ba(a))return a;a[xc]||(a[xc]=function(b){return a.handleEvent(b)});return a[xc]};function K(a){H.call(this);this.c=a;this.b={}}w(K,H);var yc=[];K.prototype.listen=function(a,b,d,e){t(b)||(b&&(yc[0]=b.toString()),b=yc);for(var f=0;f<b.length;f++){var g=lc(a,b[f],d||this.handleEvent,e||!1,this.c||this);if(!g)break;this.b[g.key]=g}return this};
K.prototype.unlisten=function(a,b,d,e,f){if(t(b))for(var g=0;g<b.length;g++)this.unlisten(a,b[g],d,e,f);else d=d||this.handleEvent,e=ca(e)?!!e.capture:!!e,f=f||this.c||this,d=nc(d),e=!!e,b=$b(a)?hc(a.b,String(b),d,e,f):a?(a=pc(a))?hc(a,b,d,e,f):null:null,b&&(uc(b),delete this.b[b.key]);return this};function zc(a){ta(a.b,function(a,d){this.b.hasOwnProperty(d)&&uc(a)},a);a.b={}}K.prototype.o=function(){K.w.o.call(this);zc(this)};
K.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function L(){H.call(this);this.b=new dc(this);this.F=this;this.m=null}w(L,H);L.prototype[Zb]=!0;m=L.prototype;m.addEventListener=function(a,b,d,e){lc(this,a,b,d,e)};m.removeEventListener=function(a,b,d,e){tc(this,a,b,d,e)};
function Ac(a,b){var d,e=a.m;if(e)for(d=[];e;e=e.m)d.push(e);a=a.F;e=b.type||b;if(p(b))b=new I(b,a);else if(b instanceof I)b.target=b.target||a;else{var f=b;b=new I(e,a);va(b,f)}f=!0;if(d)for(var g=d.length-1;!b.c&&0<=g;g--){var k=b.b=d[g];f=Bc(k,e,!0,b)&&f}b.c||(k=b.b=a,f=Bc(k,e,!0,b)&&f,b.c||(f=Bc(k,e,!1,b)&&f));if(d)for(g=0;!b.c&&g<d.length;g++)k=b.b=d[g],f=Bc(k,e,!1,b)&&f}
m.o=function(){L.w.o.call(this);if(this.b){var a=this.b,b=0,d;for(d in a.b){for(var e=a.b[d],f=0;f<e.length;f++)++b,cc(e[f]);delete a.b[d];a.c--}}this.m=null};m.listen=function(a,b,d,e){return ec(this.b,String(a),b,!1,d,e)};m.unlisten=function(a,b,d,e){var f=this.b;a=String(a).toString();if(a in f.b){var g=f.b[a];b=fc(g,b,d,e);-1<b?(cc(g[b]),Array.prototype.splice.call(g,b,1),0==g.length&&(delete f.b[a],f.c--),f=!0):f=!1}else f=!1;return f};
function Bc(a,b,d,e){b=a.b.b[String(b)];if(!b)return!0;b=b.concat();for(var f=!0,g=0;g<b.length;++g){var k=b[g];if(k&&!k.v&&k.capture==d){var h=k.listener,l=k.D||k.src;k.C&&gc(a.b,k);f=!1!==h.call(l,e)&&f}}return f&&0!=e.K};function Cc(a,b){L.call(this);this.h=a||1;this.c=b||n;this.i=u(this.P,this);this.j=v()}w(Cc,L);m=Cc.prototype;m.B=!1;m.l=null;m.P=function(){if(this.B){var a=v()-this.j;0<a&&a<.8*this.h?this.l=this.c.setTimeout(this.i,this.h-a):(this.l&&(this.c.clearTimeout(this.l),this.l=null),Ac(this,"tick"),this.B&&(this.l=this.c.setTimeout(this.i,this.h),this.j=v()))}};m.start=function(){this.B=!0;this.l||(this.l=this.c.setTimeout(this.i,this.h),this.j=v())};
function Dc(a){a.B=!1;a.l&&(a.c.clearTimeout(a.l),a.l=null)}m.o=function(){Cc.w.o.call(this);Dc(this);delete this.c};function Ec(){if(window.c&&"rhino"==window.c.environment)return new Fc;if(Rb&&window.external&&"notify"in window.external)return new Gc;if(Qb&&window.googleAdsJsInterface&&"notify"in window.googleAdsJsInterface)try{return window.googleAdsJsInterface.notify("gmsg://mobileads.google.com/noop"),new Fc}catch(a){}return new Hc}function Ic(){Jc||(Jc=Ec());return Jc}var Jc=null;function Kc(){}w(Kc,H);
function Lc(a){var b="gmsg://mobileads.google.com/"+a.c,d=a.b;a={};for(var e in d)a[e]=d[e];a["google.afma.Notify_dt"]=(new Date).getTime();e={};for(var f in a)d=encodeURIComponent(String(f)),e[d]=a[f];return Ua(b,e)}function Mc(a,b){this.j=a;this.m=b||1;this.i=[];this.h=new Cc(this.m);this.F=new K(this);this.F.listen(this.h,"tick",this.M)}w(Mc,Kc);Mc.prototype.sendMessage=function(a){this.i.push(a);this.h.B||(a=this.i.shift(),this.j(a),this.h.start())};
Mc.prototype.M=function(){var a=this.i.shift();a?this.j(a):Dc(this.h)};function Gc(){}w(Gc,Kc);Gc.prototype.sendMessage=function(a){a=Lc(a);window.external.notify(a)};function Hc(){Mc.call(this,this.O);this.b=[];this.c=0}w(Hc,Mc);Hc.prototype.O=function(a){var b=this.b[this.c];b||(b=document.createElement("IFRAME"),b.id="afma-notify-"+(new Date).getTime(),b.style.display="none",this.b[this.c]=b);this.c=(this.c+1)%25;a=Lc(a);b.src=a;b.parentNode||document.body.appendChild(b)};
Hc.prototype.o=function(){this.b.forEach(bb);this.b=[];Hc.w.o.call(this)};function Fc(){}w(Fc,Kc);Fc.prototype.sendMessage=function(a){a=Lc(a);window.googleAdsJsInterface.notify(a);window.googleAdsJsInterface.DEBUG&&console.log(a)};var Nc=null;function Oc(){}Oc.prototype.b=aa;Oc.prototype.G=function(a){this.b(a)};function M(){L.call(this);this.h=Ic();Nc||(Nc=new Oc);this.h=Ic();var a=fa(Sb,this.h);this.g?a():(this.f||(this.f=[]),this.f.push(a));this.c={}}w(M,L);M.prototype.sendMessage=function(a,b){var d;p(a)?d=new Tb(a,b):a instanceof Tb&&(d=a);"loading"==document.readyState?(a=u(this.h.sendMessage,this.h,d),mc(n,"DOMContentLoaded",a,!1,this)):this.h.sendMessage(d)};
M.prototype.G=function(a,b){"onshow"==a&&"loading"==document.readyState?(a=u(Pc,n,a,b),mc(n,"DOMContentLoaded",a)):Ac(this,new Ub(new Tb(a,b),this))};M.prototype.H=function(a,b,d){d=u(d,b);var e=u(function(a){d(a.type,a.N)},b);this.listen(a,e);this.c[a]||(this.c[a]={});this.c[a][b]=e};M.prototype.J=function(a,b){this.c[a]&&this.c[a][b]&&(this.unlisten(a,this.c[a][b]),delete this.c[a][b])};function Qc(a,b){n.AFMA_Communicator?n.AFMA_Communicator.sendMessage(a,b):Rc(a,b)}
function Rc(a,b){"loading"==document.readyState?(a=u(Rc,null,a,b),mc(n,"DOMContentLoaded",a,!1)):(a=new Tb(a,b),Ic().sendMessage(a))}function Pc(a,b){n.AFMA_Communicator.G(a,b)}function Sc(a,b,d,e){n.AFMA_Communicator.removeEventListener(a,b,d,e)}function Tc(a,b,d,e){n.AFMA_Communicator.addEventListener(a,b,d,e)}function Uc(a,b,d){n.AFMA_Communicator.H(a,b,d)}function Vc(a,b){n.AFMA_Communicator.J(a,b)}
if(!n.AFMA_Communicator){q("AFMA_AddEventListener",Tc,n);q("AFMA_RemoveEventListener",Sc,n);q("AFMA_AddObserver",Uc,n);q("AFMA_RemoveObserver",Vc,n);q("AFMA_ReceiveMessage",Pc,n);q("AFMA_SendMessage",Qc,n);var Wc=new M;q("AFMA_Communicator",Wc,n);q("AFMA_Communicator.addEventListener",M.prototype.addEventListener,void 0);q("AFMA_Communicator.removeEventListener",M.prototype.removeEventListener,void 0);q("AFMA_Communicator.addObserver",M.prototype.H,void 0);q("AFMA_Communicator.removeObserver",M.prototype.J,
void 0);q("AFMA_Communicator.receiveMessage",M.prototype.G,void 0);q("AFMA_Communicator.sendMessage",M.prototype.sendMessage,void 0)};function Xc(){throw Error("Do not instantiate directly");}Xc.prototype.b=null;Xc.prototype.toString=function(){return this.c};function Yc(){Xc.call(this)}w(Yc,Xc);(function(a){function b(a){this.c=a}b.prototype=a.prototype;return function(a,e){a=new b(String(a));void 0!==e&&(a.b=e);return a}})(Yc);(function(a){function b(a){this.c=a}b.prototype=a.prototype;return function(a,e){a=String(a);if(!a)return"";a=new b(a);void 0!==e&&(a.b=e);return a}})(Yc);function N(a,b){this.c=a|0;this.b=b|0}var Zc={},$c={};function O(a){return ya(Zc,a,function(a){return new N(a,0>a?-1:0)})}function P(a){return isNaN(a)?O(0):a<=-ad?Q():a+1>=ad?bd():0>a?R(P(-a)):new N(a%4294967296|0,a/4294967296|0)}var ad=4294967296*4294967296/2;function bd(){return ya($c,1,function(){return new N(-1,2147483647)})}function Q(){return ya($c,2,function(){return new N(0,-2147483648)})}function cd(){return ya($c,6,function(){return new N(16777216,0)})}
function S(a){return 4294967296*a.b+(0<=a.c?a.c:4294967296+a.c)}N.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(T(this))return"0";if(0>this.b){if(U(this,Q())){var b=P(a);var d=V(this,b);b=X(Y(d,b),R(this));return d.toString(a)+b.c.toString(a)}return"-"+R(this).toString(a)}d=P(Math.pow(a,6));b=this;for(var e="";;){var f=V(b,d),g=(X(b,R(Y(f,d))).c>>>0).toString(a);b=f;if(T(b))return g+e;for(;6>g.length;)g="0"+g;e=""+g+e}};
function T(a){return 0==a.b&&0==a.c}function U(a,b){return a.b==b.b&&a.c==b.c}function dd(a,b){if(U(a,b))return 0;var d=0>a.b,e=0>b.b;return d&&!e?-1:!d&&e?1:0>X(a,R(b)).b?-1:1}function R(a){return U(a,Q())?Q():X(new N(~a.c,~a.b),O(1))}function X(a,b){var d=a.b>>>16,e=a.b&65535,f=a.c>>>16,g=b.b>>>16,k=b.b&65535,h=b.c>>>16;a=0+((a.c&65535)+(b.c&65535));h=0+(a>>>16)+(f+h);f=0+(h>>>16);f+=e+k;d=0+(f>>>16)+(d+g)&65535;return new N((h&65535)<<16|a&65535,d<<16|f&65535)}
function Y(a,b){if(T(a)||T(b))return O(0);if(U(a,Q()))return 1==(b.c&1)?Q():O(0);if(U(b,Q()))return 1==(a.c&1)?Q():O(0);if(0>a.b)return 0>b.b?Y(R(a),R(b)):R(Y(R(a),b));if(0>b.b)return R(Y(a,R(b)));if(0>dd(a,cd())&&0>dd(b,cd()))return P(S(a)*S(b));var d=a.b>>>16,e=a.b&65535,f=a.c>>>16;a=a.c&65535;var g=b.b>>>16,k=b.b&65535,h=b.c>>>16;b=b.c&65535;var l=0+a*b;var E=0+(l>>>16)+f*b;var z=0+(E>>>16);E=(E&65535)+a*h;z+=E>>>16;z+=e*b;var W=0+(z>>>16);z=(z&65535)+f*h;W+=z>>>16;z=(z&65535)+a*k;W=W+(z>>>16)+
(d*b+e*h+f*k+a*g)&65535;return new N((E&65535)<<16|l&65535,W<<16|z&65535)}
function V(a,b){if(T(b))throw Error("division by zero");if(T(a))return O(0);if(U(a,Q())){if(U(b,O(1))||U(b,O(-1)))return Q();if(U(b,Q()))return O(1);var d=1;if(0==d)d=a;else{var e=a.b;d=32>d?new N(a.c>>>d|e<<32-d,e>>d):new N(e>>d-32,0<=e?0:-1)}d=V(d,b);e=1;if(0!=e){var f=d.c;d=32>e?new N(f<<e,d.b<<e|f>>>32-e):new N(0,f<<e-32)}if(U(d,O(0)))return 0>b.b?O(1):O(-1);a=X(a,R(Y(b,d)));return X(d,V(a,b))}if(U(b,Q()))return O(0);if(0>a.b)return 0>b.b?V(R(a),R(b)):R(V(R(a),b));if(0>b.b)return R(V(a,R(b)));
for(e=O(0);0<=dd(a,b);){d=Math.max(1,Math.floor(S(a)/S(b)));f=Math.ceil(Math.log(d)/Math.LN2);f=48>=f?1:Math.pow(2,f-48);for(var g=P(d),k=Y(g,b);0>k.b||0<dd(k,a);)d-=f,g=P(d),k=Y(g,b);T(g)&&(g=O(1));e=X(e,g);a=X(a,R(k))}return e};var ed;Tc("onshow",function(){});Tc("onhide",function(){});var fd=["www.googleadservices.com","googleads.g.doubleclick.net","adclick.g.doubleclick.net"];
function gd(a){if(a){var b=Qa(a.match(Pa)[5]||null),d=Qa(a.match(Pa)[3]||null);if(0>na(fd,d)||"/aclk"!=b&&"/pagead/aclk"!=b)return a;b=Wa(a,"ai");d=Wa(a,"ms");Wa(a,"adurl");if(!/^[\s\xa0]*$/.test(null==d?"":String(d))||/^[\s\xa0]*$/.test(null==b?"":String(b)))return a;d=void 0;a:{if(window.googleAdsJsInterface&&"getClickSignals"in window.googleAdsJsInterface)try{d=window.googleAdsJsInterface.getClickSignals(b);break a}catch(e){}d=""}b=d;if(/^[\s\xa0]*$/.test(null==b?"":String(b)))return a;d=a.indexOf("&adurl=");
return 0>d?a:a.substring(0,d)+"&ms="+b+a.substring(d,a.length)}};var hd=-1;Tc("onshow",function(){hd=v()});Tc("onhide",function(){hd=-1});function id(a,b){this.c=a;this.b=b}id.prototype.toString=function(){return this.c+"x"+this.b};function jd(a,b){return a.google_template_data.adData[0][b]}
function kd(a){var b=jd(a,"siriusFlagUnclickableBorderSize");if(p(b))if("["==b.charAt(0)&&"]"==b.charAt(b.length-1)){var d=b.slice(1,-1).split(",");a=[];for(var e=0;e<d.length;++e)a.push(isNaN(d[e])?0:parseInt(d[e],10));if(4==a.length)return a}else return a=isNaN(b)?0:parseInt(b,10),[a,a,a,a];if("number"==typeof b)return a=parseInt(b,10),[a,a,a,a];if(t(b)){a=[];for(e=0;e<b.length;++e)"number"==typeof b[e]&&a.push(parseInt(b[e],10));if(4==a.length)return a}return[0,0,0,0]};function ld(a){return a.force_google_width&&a.force_google_height?new id(a.force_google_width,a.force_google_height):new id(a.google_width,a.google_height)}function md(a,b){a=a.google_template_data.rendering_settings;if("object"!=ba(a))return null;b=a[b];return p(b)?b:null};function nd(a){this.b=a}var od=-1;
function pd(a,b){var d=v();var e=jd(a.b,"siriusFlagIntentfulClickDelay");e=isNaN(e)?1E3:parseInt(e,10);var f=hd;if(0<f&&d-f<e||d-od<e)return!1;d=b.clientX;b=b.clientY;f=ld(a.b);e=f.c;f=f.b;var g=kd(a.b);if(d<g[0]||d>=e-g[2]||b<g[1]||b>=f-g[3])return!1;f=a.b;g=md(f,"format");if(!p(g))if(f=f.google_template_data.adData[0].format,p(f)||null==f)g=f;else throw Error("Gets non string value from: format");if("interstitial_mb"==g)if(f=jd(a.b,"siriusFlagCloseButtonClickProtectorSize"),f=isNaN(f)?100:parseInt(f,
10),"right"==("right"==jd(a.b,"siriusFlagCloseButtonClickProtectorPosition")?"right":"left")){if(d>=e-f&&b<=f)return!1}else if(d<=f&&b<=f)return!1;return!0};function qd(a,b,d){ja&&"function"==ba(ja)&&(b=d?d(b):parseInt((new vb(a.href)).c.s("nb")[0],10),ja(a.id,b));b=a.href.indexOf("&adurl=");if(-1!=b&&(d=a.href.substring(b+1).indexOf("&"),-1!=d)){d=b+1+d;var e=a.href;a.href=e.substr(0,b)+e.substr(d)+e.substr(b,d-b)}}var rd={button:8,headline:0,description:7,logo:9,product:9,url:1};function sd(a){var b=rd[a];null==b&&(b=2);return function(a,e){qd(a,e,function(){return b})}}function td(a){st&&"function"==ba(st)&&st(a.id)};function ud(a){this.b=a}
function vd(a,b,d){var e=new nd(a.b);-1==od&&(od=v());b.addEventListener("mousedown",fa(td,b));b.addEventListener("click",u(function(a){pd(e,a)||(a.stopImmediatePropagation(),a.preventDefault())},a));b.addEventListener("click",u(function(a){d(b,a);if("true"==md(this.b,"octagonSdkRequest")){var e=S(Q()),f=P(e+Math.random()*(S(bd())-e));Qc("logScionEvent",{eventType:0,eventId:f,eventName:"_ac"});var h=gd(a.currentTarget.href);e=a.currentTarget;var l=f.toString();f=encodeURIComponent("fbs_aeid");l=encodeURIComponent(String(l));
h=h.replace("?","?"+f+"="+l+"&");e.href=h;h=a.currentTarget.href;e={R:!0,S:!0};h=h.match(/^\/\//)?"http:"+h:h;ed||(ed=window.google_casm?new Oa(window.google_casm):new Oa);f=ed.data[3];if(f=!(null==f||!f)||e.U)a:{if(void 0===Lb){if(Pb&&!G("Safari")){f=Lb=!0;break a}Lb=!1}f=Lb}f?(e=h,h={id:"gmob-apps",event:"open-browser"},.1>Math.random()&&(f=Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^v()).toString(36),f=null!=f?"="+encodeURIComponent(String(f)):
"",f=Sa("https://pagead2.googlesyndication.com/pagead/gen_204","zx"+f),h=Ua(f,h||{}),window.googleJsEnvironment&&window.googleJsEnvironment.pinger&&window.googleJsEnvironment.pinger.pingUrl?window.googleJsEnvironment.pinger.pingUrl(h):(f=window,f.google_image_requests||(f.google_image_requests=[]),l=f.document.createElement("img"),l.src=h,f.google_image_requests.push(l))),Qc("open",{a:"browser",u:e})):(h={a:"app",u:h},void 0===Nb&&(void 0!==Mb||(Mb=G("afma-sdk-a")?!0:!1),Nb=Mb?(f=Ob().match(/afma\-sdk\-a\-v\.?([\d+\.]+)/))?
f[1]:"":""),(f=Nb)&&0<=la(f,"8400000.0.0")&&va(h,{system_browser:!0,use_first_package:e.R,use_running_process:e.S}),Qc("open",h));a.preventDefault()}},a))};function wd(a,b){if(!(b.scrollHeight<=b.clientHeight+1)){if(Ya&&null!==a&&"innerText"in a)var d=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else d=[],eb(a,d,!0),d=d.join("");d=d.replace(/ \xAD /g," ").replace(/\xAD/g,"");d=d.replace(/\u200B/g,"");Ya||(d=d.replace(/ +/g," "));" "!=d&&(d=d.replace(/^\s*/,""));var e=d.lastIndexOf(" ");if(-1==e||d.match(/[\u2E80-\uFFFF]/))for(e=d.length-1;0<e&&"."==d.charAt(e);)e--;d=d.substr(0,e);if(d.length){d+="...";if("textContent"in a)a.textContent=d;else if(3==a.nodeType)a.data=
String(d);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(d)}else{for(;e=a.firstChild;)a.removeChild(e);a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode(String(d)))}wd(a,b)}}};function xd(a){this.f=a;this.b=a.google_template_data.adData;this.i="_blank"==this.f.link_target?"_blank":"_top";a=this.f;this.c="true"!=md(a,"rtl")?!1:"true"==md(a,"enableRtl");this.h=new ud(this.f);this.g=0<this.b.length?yd(this.b[0],"bgColor"):null;a:{a=0===this.b.length?"":this.b[0].displayUrl;for(var b=0;b<this.b.length;++b){var d=this.b[b];if(69!=d.cType||a!=d.displayUrl){a=!0;break a}}a=!1}this.j=a}function Z(a){return Math.round(Math.max(0,a))+"px"}
function yd(a,b){a=a[b];return p(a)||null==a?"text1TFFontFace"==b?a.replace(/"/g,"&quot;"):a:null}
q("onAdData",function(a){a=new xd(a);var b=a.f.google_template_data.rendering_settings,d=ld(a.f),e=d.c,f=d.b-17,g=b.core_col_count,k=b.core_row_count;d=g.toString()+"n+"+g.toString();var h="-n+"+g.toString(),l="#adContent {  width: "+e+"px;";null!=a.g&&(l+="  background-color: "+a.g+";");l=a.c?l+"  direction: rtl;}.core {  float: right;}":l+"}.core {  float: left;}";l=l+(".core:nth-child("+d+") {")+(a.c?"  padding-left: 0;":"  padding-right: 0;");l+="}.core:nth-last-child("+h+") {  padding-bottom: 0;}";
l=a.c?l+".core-ad-pill .ad-badge {  margin-left: 4px;  float: right;}":l+".core-ad-pill .ad-badge {  margin-right: 4px;  float: left;}";e=Math.floor((e+4)/g);f=Math.floor((f+8)/k);if("stacked"==b.core_layout){b=e-4;k=b/1.91;g=f-k-16;var E=100>=b?12:200>b?16:235>b?18:20,z=Math.min(g-18,1.2*E*3),W=(g-z)/3;d=l+(".core {  width: "+Z(e)+";  height: "+Z(f)+";  font-size: "+Z(E)+";}.core:nth-child("+d+") {  width: "+Z(e-4)+";}.core:nth-last-child("+h+") {  height: "+Z(f-8)+";}.core-img {  height: "+Z(k)+
";  overflow: hidden;}.core-body {  max-height: "+Z(g)+";  padding-top: "+Z(W)+";}.core-title {  max-height: "+Z(z)+";}.core-ad-pill {  position: absolute;  width: "+Z(b)+";  bottom: "+Z(W)+";}.core:nth-last-child("+h+")  .core-ad-pill {  bottom: 0;}")}else b=f-8,k=1.91*b,g=e-k-8,E=100>=g?12:200>g?16:235>g?18:20,d=l+(".core {  width: "+Z(e)+";  height: "+Z(f)+";  font-size: "+Z(E)+";}.core:nth-child("+d+") {  width: "+Z(e-4)+";}.core:nth-last-child("+h+") {  height: "+Z(f-8)+";}.core-img {  float: "+
(a.c?"right;":"left;")+"  width: "+Z(k)+";  height: 100%;  overflow: hidden;}.core-body {  padding: 0 8px;  max-height: 100%;}.core-title {  max-height: "+Z(Math.min(b-18,1.2*E*3))+";}.core-ad-pill {  max-height: "+Z(18)+";  width: "+Z(g-4-8)+";  position: absolute;  bottom: 10px;}.core:nth-last-child("+h+")  .core-ad-pill {  bottom: 0;}");h=ha||(ha=new fb);l=h.b;e=h.b.createElement("STYLE");e.type="text/css";h.b.getElementsByTagName("HEAD")[0].appendChild(e);e.styleSheet?e.styleSheet.cssText=d:e.appendChild(l.createTextNode(d));
d="";for(h=0;h<a.b.length;++h){l='<div id="core${coreIndex}" class="core" style="text-decoration-color: ${text1TFColor}"><div id="core-img${coreIndex}" class="core-img"><a id="core-img${coreIndex}-anchor" href="${redirect_url}" target="${linkTarget}"><img src="${product1MCImage}"></a></div><div id="core-body${coreIndex}" class="core-body"><div id="core-title${coreIndex}" class="core-title" style="color: ${text1TFColor};font-family: ${text1TFFontFace}" ${text1TFRtl}><a id="core-title${coreIndex}-anchor" href="${redirect_url}" target="${linkTarget}">${text1TFText}</a></div><div id="core-ad-pill${coreIndex}" class="core-ad-pill"></div></div></div>';
e=a.b[h];for(var r in e)f=yd(e,r),null!=f&&(l=ka(l,"${"+r+"}",f));l=ka(l,"${coreIndex}",h.toString());l=ka(l,"${linkTarget}",69==e.cType?"_top":a.i);d+=l}r=document.createElement("DIV");r.id="adContent";r.innerHTML=d;d=document.body;h=document.createElement("DIV");h.classList.add("poweredByGoogle");a.c&&(h.style.backgroundPosition="right");null!=a.g&&(h.style.backgroundColor=a.g);d.appendChild(h);document.body.appendChild(r);if(a.j)for(r=Za("core-ad-pill"),d=0;d<r.length;++d){h=a.b[d];if(l=h.adBadgeText)e=
document.createElement("SPAN"),e.classList.add("ad-badge"),e.textContent=l,r[d].appendChild(e);if(l=h.displayUrl)e=document.createElement("A"),e.classList.add("url-or-advertiser"),e.textContent=l,e.href=h.redirect_url,e.target=69==h.cType?"_top":a.i,e.id=r[d].id+"-anchor",a.c&&(e.style.direction="ltr",e.style.textAlign="right"),r[d].appendChild(e)}r=Za("core-title");for(d=0;d<r.length;++d)h=r[d],wd(h.getElementsByTagName("A".toString())[0],h);r=Za("core");for(d=0;d<r.length;++d)h=r[d],vd(a.h,ab("core-img",
h).getElementsByTagName("A".toString())[0],sd("product")),vd(a.h,ab("core-title",h).getElementsByTagName("A".toString())[0],sd("headline")),a.j&&vd(a.h,ab("core-ad-pill",h).getElementsByTagName("A".toString())[0],sd("url"))},void 0);}).call(this);