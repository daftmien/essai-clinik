(self.webpackChunk_genially_view_client=self.webpackChunk_genially_view_client||[]).push([[894],{87894:(e,t,r)=>{"use strict";var n="win32"===process.platform,o=r(1507);function i(e,t){for(var r=[],n=0;n<e.length;n++){var o=e[n];o&&"."!==o&&(".."===o?r.length&&".."!==r[r.length-1]?r.pop():t&&r.push(".."):r.push(o))}return r}function s(e){for(var t=e.length-1,r=0;r<=t&&!e[r];r++);for(var n=t;n>=0&&!e[n];n--);return 0===r&&n===t?e:r>n?[]:e.slice(r,n+1)}var u=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,c=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,a={};function l(e){var t=u.exec(e),r=(t[1]||"")+(t[2]||""),n=t[3]||"",o=c.exec(n);return[r,o[1],o[2],o[3]]}function p(e){var t=u.exec(e),r=t[1]||"",n=!!r&&":"!==r[1];return{device:r,isUnc:n,isAbsolute:n||!!t[2],tail:t[3]}}function f(e){return"\\\\"+e.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")}a.resolve=function(){for(var e="",t="",r=!1,n=arguments.length-1;n>=-1;n--){var s;if(n>=0?s=arguments[n]:e?(s={NODE_ENV:"production",PUBLIC_URL:"https://statics-view.genially.com/view",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BRANCH_NAME:"d177c123c94ed28851739294676f0c177c3a2989",REACT_APP_ENV:"production",REACT_APP_VERSION:"0.0.1"}["="+e])&&s.substr(0,3).toLowerCase()===e.toLowerCase()+"\\"||(s=e+"\\"):s=process.cwd(),!o.isString(s))throw new TypeError("Arguments to path.resolve must be strings");if(s){var u=p(s),c=u.device,a=u.isUnc,l=u.isAbsolute,g=u.tail;if((!c||!e||c.toLowerCase()===e.toLowerCase())&&(e||(e=c),r||(t=g+"\\"+t,r=l),e&&r))break}}return a&&(e=f(e)),e+(r?"\\":"")+(t=i(t.split(/[\\\/]+/),!r).join("\\"))||"."},a.normalize=function(e){var t=p(e),r=t.device,n=t.isUnc,o=t.isAbsolute,s=t.tail,u=/[\\\/]$/.test(s);return(s=i(s.split(/[\\\/]+/),!o).join("\\"))||o||(s="."),s&&u&&(s+="\\"),n&&(r=f(r)),r+(o?"\\":"")+s},a.isAbsolute=function(e){return p(e).isAbsolute},a.join=function(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(!o.isString(r))throw new TypeError("Arguments to path.join must be strings");r&&e.push(r)}var n=e.join("\\");return/^[\\\/]{2}[^\\\/]/.test(e[0])||(n=n.replace(/^[\\\/]{2,}/,"\\")),a.normalize(n)},a.relative=function(e,t){e=a.resolve(e),t=a.resolve(t);for(var r=e.toLowerCase(),n=t.toLowerCase(),o=s(t.split("\\")),i=s(r.split("\\")),u=s(n.split("\\")),c=Math.min(i.length,u.length),l=c,p=0;p<c;p++)if(i[p]!==u[p]){l=p;break}if(0==l)return t;var f=[];for(p=l;p<i.length;p++)f.push("..");return(f=f.concat(o.slice(l))).join("\\")},a._makeLong=function(e){if(!o.isString(e))return e;if(!e)return"";var t=a.resolve(e);return/^[a-zA-Z]\:\\/.test(t)?"\\\\?\\"+t:/^\\\\[^?.]/.test(t)?"\\\\?\\UNC\\"+t.substring(2):e},a.dirname=function(e){var t=l(e),r=t[0],n=t[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},a.basename=function(e,t){var r=l(e)[2];return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},a.extname=function(e){return l(e)[3]},a.format=function(e){if(!o.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!o.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);var r=e.dir,n=e.base||"";return r?r[r.length-1]===a.sep?r+n:r+a.sep+n:n},a.parse=function(e){if(!o.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=l(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},a.sep="\\",a.delimiter=";";var g=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,h={};function y(e){return g.exec(e).slice(1)}h.resolve=function(){for(var e="",t=!1,r=arguments.length-1;r>=-1&&!t;r--){var n=r>=0?arguments[r]:process.cwd();if(!o.isString(n))throw new TypeError("Arguments to path.resolve must be strings");n&&(e=n+"/"+e,t="/"===n[0])}return(t?"/":"")+(e=i(e.split("/"),!t).join("/"))||"."},h.normalize=function(e){var t=h.isAbsolute(e),r=e&&"/"===e[e.length-1];return(e=i(e.split("/"),!t).join("/"))||t||(e="."),e&&r&&(e+="/"),(t?"/":"")+e},h.isAbsolute=function(e){return"/"===e.charAt(0)},h.join=function(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];if(!o.isString(r))throw new TypeError("Arguments to path.join must be strings");r&&(e+=e?"/"+r:r)}return h.normalize(e)},h.relative=function(e,t){e=h.resolve(e).substr(1),t=h.resolve(t).substr(1);for(var r=s(e.split("/")),n=s(t.split("/")),o=Math.min(r.length,n.length),i=o,u=0;u<o;u++)if(r[u]!==n[u]){i=u;break}var c=[];for(u=i;u<r.length;u++)c.push("..");return(c=c.concat(n.slice(i))).join("/")},h._makeLong=function(e){return e},h.dirname=function(e){var t=y(e),r=t[0],n=t[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},h.basename=function(e,t){var r=y(e)[2];return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},h.extname=function(e){return y(e)[3]},h.format=function(e){if(!o.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!o.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);return(e.dir?e.dir+h.sep:"")+(e.base||"")},h.parse=function(e){if(!o.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=y(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return t[1]=t[1]||"",t[2]=t[2]||"",t[3]=t[3]||"",{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},h.sep="/",h.delimiter=":",e.exports=n?a:h,e.exports.posix=h,e.exports.win32=a},78166:e=>{"function"===typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},45948:e=>{e.exports=function(e){return e&&"object"===typeof e&&"function"===typeof e.copy&&"function"===typeof e.fill&&"function"===typeof e.readUInt8}},1507:(e,t,r)=>{var n=/%[sdj%]/g;t.format=function(e){if(!v(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(s(arguments[r]));return t.join(" ")}r=1;for(var o=arguments,i=o.length,u=String(e).replace(n,(function(e){if("%%"===e)return"%";if(r>=i)return e;switch(e){case"%s":return String(o[r++]);case"%d":return Number(o[r++]);case"%j":try{return JSON.stringify(o[r++])}catch(t){return"[Circular]"}default:return e}})),c=o[r];r<i;c=o[++r])h(c)||!m(c)?u+=" "+c:u+=" "+s(c);return u},t.deprecate=function(e,n){if(d(r.g.process))return function(){return t.deprecate(e,n).apply(this,arguments)};if(!0===process.noDeprecation)return e;var o=!1;return function(){if(!o){if(process.throwDeprecation)throw new Error(n);process.traceDeprecation?console.trace(n):console.error(n),o=!0}return e.apply(this,arguments)}};var o,i={};function s(e,r){var n={seen:[],stylize:c};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),g(r)?n.showHidden=r:r&&t._extend(n,r),d(n.showHidden)&&(n.showHidden=!1),d(n.depth)&&(n.depth=2),d(n.colors)&&(n.colors=!1),d(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=u),a(n,e,n.depth)}function u(e,t){var r=s.styles[t];return r?"\x1b["+s.colors[r][0]+"m"+e+"\x1b["+s.colors[r][1]+"m":e}function c(e,t){return e}function a(e,r,n){if(e.customInspect&&r&&E(r.inspect)&&r.inspect!==t.inspect&&(!r.constructor||r.constructor.prototype!==r)){var o=r.inspect(n,e);return v(o)||(o=a(e,o,n)),o}var i=function(e,t){if(d(t))return e.stylize("undefined","undefined");if(v(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}if(y(t))return e.stylize(""+t,"number");if(g(t))return e.stylize(""+t,"boolean");if(h(t))return e.stylize("null","null")}(e,r);if(i)return i;var s=Object.keys(r),u=function(e){var t={};return e.forEach((function(e,r){t[e]=!0})),t}(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(r)),S(r)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return l(r);if(0===s.length){if(E(r)){var c=r.name?": "+r.name:"";return e.stylize("[Function"+c+"]","special")}if(b(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(w(r))return e.stylize(Date.prototype.toString.call(r),"date");if(S(r))return l(r)}var m,_="",O=!1,j=["{","}"];(f(r)&&(O=!0,j=["[","]"]),E(r))&&(_=" [Function"+(r.name?": "+r.name:"")+"]");return b(r)&&(_=" "+RegExp.prototype.toString.call(r)),w(r)&&(_=" "+Date.prototype.toUTCString.call(r)),S(r)&&(_=" "+l(r)),0!==s.length||O&&0!=r.length?n<0?b(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special"):(e.seen.push(r),m=O?function(e,t,r,n,o){for(var i=[],s=0,u=t.length;s<u;++s)T(t,String(s))?i.push(p(e,t,r,n,String(s),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(e,t,r,n,o,!0))})),i}(e,r,n,u,s):s.map((function(t){return p(e,r,n,u,t,O)})),e.seen.pop(),function(e,t,r){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1];return r[0]+t+" "+e.join(", ")+" "+r[1]}(m,_,j)):j[0]+_+j[1]}function l(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,r,n,o,i){var s,u,c;if((c=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?u=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(u=e.stylize("[Setter]","special")),T(n,o)||(s="["+o+"]"),u||(e.seen.indexOf(c.value)<0?(u=h(r)?a(e,c.value,null):a(e,c.value,r-1)).indexOf("\n")>-1&&(u=i?u.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+u.split("\n").map((function(e){return"   "+e})).join("\n")):u=e.stylize("[Circular]","special")),d(s)){if(i&&o.match(/^\d+$/))return u;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+u}function f(e){return Array.isArray(e)}function g(e){return"boolean"===typeof e}function h(e){return null===e}function y(e){return"number"===typeof e}function v(e){return"string"===typeof e}function d(e){return void 0===e}function b(e){return m(e)&&"[object RegExp]"===_(e)}function m(e){return"object"===typeof e&&null!==e}function w(e){return m(e)&&"[object Date]"===_(e)}function S(e){return m(e)&&("[object Error]"===_(e)||e instanceof Error)}function E(e){return"function"===typeof e}function _(e){return Object.prototype.toString.call(e)}function O(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(d(o)&&(o={NODE_ENV:"production",PUBLIC_URL:"https://statics-view.genially.com/view",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BRANCH_NAME:"d177c123c94ed28851739294676f0c177c3a2989",REACT_APP_ENV:"production",REACT_APP_VERSION:"0.0.1"}.NODE_DEBUG||""),e=e.toUpperCase(),!i[e])if(new RegExp("\\b"+e+"\\b","i").test(o)){var r=process.pid;i[e]=function(){var n=t.format.apply(t,arguments);console.error("%s %d: %s",e,r,n)}}else i[e]=function(){};return i[e]},t.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=f,t.isBoolean=g,t.isNull=h,t.isNullOrUndefined=function(e){return null==e},t.isNumber=y,t.isString=v,t.isSymbol=function(e){return"symbol"===typeof e},t.isUndefined=d,t.isRegExp=b,t.isObject=m,t.isDate=w,t.isError=S,t.isFunction=E,t.isPrimitive=function(e){return null===e||"boolean"===typeof e||"number"===typeof e||"string"===typeof e||"symbol"===typeof e||"undefined"===typeof e},t.isBuffer=r(45948);var j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function A(){var e=new Date,t=[O(e.getHours()),O(e.getMinutes()),O(e.getSeconds())].join(":");return[e.getDate(),j[e.getMonth()],t].join(" ")}function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",A(),t.format.apply(t,arguments))},t.inherits=r(78166),t._extend=function(e,t){if(!t||!m(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e}}}]);
//# sourceMappingURL=https://s3-static-genially.genially.com/view/static/js/894.e570339f.chunk.js.map