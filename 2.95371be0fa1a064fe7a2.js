(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"21Lb":function(t,e,n){"use strict";n.d(e,"c",function(){return A}),n.d(e,"e",function(){return f}),n.d(e,"b",function(){return h}),n.d(e,"d",function(){return v}),n.d(e,"a",function(){return g});var i=n("mrSG"),r=n("CcnG"),a=n("OzfB"),o=(n("K9Ia"),n("ny24")),s="inline",u=["row","column","row-reverse","column-reverse"];function l(t){var e=(t=t?t.toLowerCase():"").split(" "),n=e[0],i=e[1],r=e[2];return u.find(function(t){return t===n})||(n=u[0]),i===s&&(i=r!==s?r:"",r=s),[n,p(i),!!r]}function c(t){return l(t)[0].indexOf("row")>-1}function p(t){if(t)switch(t.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":t="wrap-reverse";break;case"no":case"none":case"nowrap":t="nowrap";break;default:t="wrap"}return t}var f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.c)(e,t),e.prototype.buildStyles=function(t){return void 0===(e=(i=l(t))[1])&&(e=null),void 0===(n=i[2])&&(n=!1),{display:n?"inline-flex":"flex","box-sizing":"border-box","flex-direction":i[0],"flex-wrap":e||null};var e,n,i},e.ngInjectableDef=Object(r.V)({factory:function(){return new e},token:e,providedIn:"root"}),e}(a.h),d=["fxLayout","fxLayout.xs","fxLayout.sm","fxLayout.md","fxLayout.lg","fxLayout.xl","fxLayout.lt-sm","fxLayout.lt-md","fxLayout.lt-lg","fxLayout.lt-xl","fxLayout.gt-xs","fxLayout.gt-sm","fxLayout.gt-md","fxLayout.gt-lg"],h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.inputs=d,e}return Object(i.c)(e,t),e}(function(t){function e(e,n,i,r){var a=t.call(this,e,i,n,r)||this;return a.elRef=e,a.styleUtils=n,a.styleBuilder=i,a.marshal=r,a.DIRECTIVE_KEY="layout",a.styleCache=y,a.init(),a}return Object(i.c)(e,t),e}(a.b)),y=new Map,v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.c)(e,t),e.prototype.buildStyles=function(t,e){var n={},i=t.split(" "),r=i[1];switch(i[0]){case"center":n["justify-content"]="center";break;case"space-around":n["justify-content"]="space-around";break;case"space-between":n["justify-content"]="space-between";break;case"space-evenly":n["justify-content"]="space-evenly";break;case"end":case"flex-end":n["justify-content"]="flex-end";break;case"start":case"flex-start":default:n["justify-content"]="flex-start"}switch(r){case"start":case"flex-start":n["align-items"]=n["align-content"]="flex-start";break;case"center":n["align-items"]=n["align-content"]="center";break;case"end":case"flex-end":n["align-items"]=n["align-content"]="flex-end";break;case"space-between":n["align-content"]="space-between",n["align-items"]="stretch";break;case"space-around":n["align-content"]="space-around",n["align-items"]="stretch";break;case"baseline":n["align-content"]="stretch",n["align-items"]="baseline";break;case"stretch":default:n["align-items"]=n["align-content"]="stretch"}return function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(null==t)throw TypeError("Cannot convert undefined or null to object");for(var i=0,r=e;i<r.length;i++){var a=r[i];if(null!=a)for(var o in a)a.hasOwnProperty(o)&&(t[o]=a[o])}return t}(n,{display:e.inline?"inline-flex":"flex","flex-direction":e.layout,"box-sizing":"border-box","max-width":"stretch"===r?c(e.layout)?null:"100%":null,"max-height":"stretch"===r&&c(e.layout)?"100%":null})},e.ngInjectableDef=Object(r.V)({factory:function(){return new e},token:e,providedIn:"root"}),e}(a.h),m=["fxLayoutAlign","fxLayoutAlign.xs","fxLayoutAlign.sm","fxLayoutAlign.md","fxLayoutAlign.lg","fxLayoutAlign.xl","fxLayoutAlign.lt-sm","fxLayoutAlign.lt-md","fxLayoutAlign.lt-lg","fxLayoutAlign.lt-xl","fxLayoutAlign.gt-xs","fxLayoutAlign.gt-sm","fxLayoutAlign.gt-md","fxLayoutAlign.gt-lg"],g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.inputs=m,e}return Object(i.c)(e,t),e}(function(t){function e(e,n,i,r){var a=t.call(this,e,i,n,r)||this;return a.elRef=e,a.styleUtils=n,a.styleBuilder=i,a.marshal=r,a.DIRECTIVE_KEY="layout-align",a.layout="row",a.inline=!1,a.init(),a.marshal.trackValue(a.nativeElement,"layout").pipe(Object(o.a)(a.destroySubject)).subscribe(a.onLayoutChange.bind(a)),a}return Object(i.c)(e,t),e.prototype.updateWithValue=function(t){var e=this.layout||"row",n=this.inline;"row"===e&&n?this.styleCache=k:"row"!==e||n?"row-reverse"===e&&n?this.styleCache=j:"row-reverse"!==e||n?"column"===e&&n?this.styleCache=S:"column"!==e||n?"column-reverse"===e&&n?this.styleCache=O:"column-reverse"!==e||n||(this.styleCache=E):this.styleCache=x:this.styleCache=w:this.styleCache=b,this.addStyles(t,{layout:e,inline:n})},e.prototype.onLayoutChange=function(t){var e=this,n=t.value.split(" ");this.layout=n[0],this.inline=t.value.includes("inline"),u.find(function(t){return t===e.layout})||(this.layout="row"),this.triggerUpdate()},e}(a.b)),b=new Map,x=new Map,w=new Map,E=new Map,k=new Map,S=new Map,j=new Map,O=new Map,A=function(){return function(){}}()},"3pJQ":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n("mrSG"),n("CcnG"),n("OzfB"),n("n6gG");var i=function(){return function(){}}()},OzfB:function(t,e,n){"use strict";n.d(e,"c",function(){return h}),n.d(e,"j",function(){return f}),n.d(e,"d",function(){return m}),n.d(e,"e",function(){return g}),n.d(e,"g",function(){return b}),n.d(e,"a",function(){return x}),n.d(e,"b",function(){return S}),n.d(e,"i",function(){return z}),n.d(e,"h",function(){return G}),n.d(e,"k",function(){return Y}),n.d(e,"f",function(){return U});var i=n("CcnG"),r=n("Ip0R"),a=n("mrSG"),o=n("K9Ia"),s=n("26FU"),u=n("6blF"),l=n("p0ib"),c=(n("KQya"),n("F/XL"),n("bne5"),n("VnD/")),p=(n("67Y/"),n("Gi3i"),n("15JJ"),n("ny24"),n("t9fZ"),n("xMyE"));function f(t,e){return function(){if(Object(r.u)(e)){var n=Array.from(t.querySelectorAll("[class*="+d+"]")),i=/\bflex-layout-.+?\b/g;n.forEach(function(t){t.classList.contains(d+"ssr")&&t.parentNode?t.parentNode.removeChild(t):t.className.replace(i,"")})}}}var d="flex-layout-",h=function(){return function(){}}(),y=function(){function t(t,e,n,i,r){void 0===t&&(t=!1),void 0===e&&(e="all"),void 0===n&&(n=""),void 0===i&&(i=""),void 0===r&&(r=0),this.matches=t,this.mediaQuery=e,this.mqAlias=n,this.suffix=i,this.priority=r,this.property=""}return t.prototype.clone=function(){return new t(this.matches,this.mediaQuery,this.mqAlias,this.suffix)},t}(),v=function(){function t(){this.stylesheet=new Map}return t.prototype.addStyleToElement=function(t,e,n){var i=this.stylesheet.get(t);i?i.set(e,n):this.stylesheet.set(t,new Map([[e,n]]))},t.prototype.clearStyles=function(){this.stylesheet.clear()},t.prototype.getStyleForElement=function(t,e){var n=this.stylesheet.get(t),i="";if(n){var r=n.get(e);"number"!=typeof r&&"string"!=typeof r||(i=r+"")}return i},t.ngInjectableDef=Object(i.V)({factory:function(){return new t},token:t,providedIn:"root"}),t}(),m={addFlexToParent:!0,addOrientationBps:!1,disableDefaultBps:!1,disableVendorPrefixes:!1,serverLoaded:!1,useColumnBasisZero:!0,printWithBreakpoints:[],mediaTriggerAutoRestore:!0,ssrObserveBreakpoints:[]},g=new i.r("Flex Layout token, config options for the library",{providedIn:"root",factory:function(){return m}}),b=new i.r("FlexLayoutServerLoaded",{providedIn:"root",factory:function(){return!1}}),x=new i.r("Flex Layout token, collect all breakpoints into one provider",{providedIn:"root",factory:function(){return null}});function w(t,e){return t=t?t.clone():new y,e&&(t.mqAlias=e.alias,t.mediaQuery=e.mediaQuery,t.suffix=e.suffix,t.priority=e.priority),t}var E=["row","column","row-reverse","column-reverse"];function k(t){if(t)switch(t.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":t="wrap-reverse";break;case"no":case"none":case"nowrap":t="nowrap";break;default:t="wrap"}return t}var S=function(){function t(t,e,n,i){this.elementRef=t,this.styleBuilder=e,this.styler=n,this.marshal=i,this.DIRECTIVE_KEY="",this.inputs=[],this.mru={},this.destroySubject=new o.a,this.styleCache=new Map}return Object.defineProperty(t.prototype,"parentElement",{get:function(){return this.elementRef.nativeElement.parentElement},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"nativeElement",{get:function(){return this.elementRef.nativeElement},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"activatedValue",{get:function(){return this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY)},set:function(t){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,t,this.marshal.activatedAlias)},enumerable:!0,configurable:!0}),t.prototype.ngOnChanges=function(t){var e=this;Object.keys(t).forEach(function(n){if(-1!==e.inputs.indexOf(n)){var i=n.split(".").slice(1).join(".");e.setValue(t[n].currentValue,i)}})},t.prototype.ngOnDestroy=function(){this.destroySubject.next(),this.destroySubject.complete(),this.marshal.releaseElement(this.nativeElement)},t.prototype.init=function(t){void 0===t&&(t=[]),this.marshal.init(this.elementRef.nativeElement,this.DIRECTIVE_KEY,this.updateWithValue.bind(this),this.clearStyles.bind(this),t)},t.prototype.addStyles=function(t,e){var n=this.styleBuilder,i=n.shouldCache,r=this.styleCache.get(t);r&&i||(r=n.buildStyles(t,e),i&&this.styleCache.set(t,r)),this.mru=Object(a.a)({},r),this.applyStyleToElement(r),n.sideEffect(t,r,e)},t.prototype.clearStyles=function(){var t=this;Object.keys(this.mru).forEach(function(e){t.mru[e]=""}),this.applyStyleToElement(this.mru),this.mru={}},t.prototype.triggerUpdate=function(){this.marshal.triggerUpdate(this.nativeElement,this.DIRECTIVE_KEY)},t.prototype.getFlexFlowDirection=function(t,e){if(void 0===e&&(e=!1),t){var n=this.styler.getFlowDirection(t),i=n[0];if(!n[1]&&e){var r=function(t){var e,n,i=function(t){var e=(t=t?t.toLowerCase():"").split(" "),n=e[0],i=e[1],r=e[2];return E.find(function(t){return t===n})||(n=E[0]),"inline"===i&&(i="inline"!==r?r:"",r="inline"),[n,k(i),!!r]}(t);return void 0===(e=i[1])&&(e=null),void 0===(n=i[2])&&(n=!1),{display:n?"inline-flex":"flex","box-sizing":"border-box","flex-direction":i[0],"flex-wrap":e||null}}(i);this.styler.applyStyleToElements(r,[t])}return i.trim()}return"row"},t.prototype.applyStyleToElement=function(t,e,n){void 0===n&&(n=this.nativeElement),this.styler.applyStyleToElement(n,t,e)},t.prototype.setValue=function(t,e){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,t,e)},t.prototype.updateWithValue=function(t){this.addStyles(t)},t}(),j=[{alias:"xs",mediaQuery:"screen and (min-width: 0px) and (max-width: 599.99px)",priority:1e3},{alias:"sm",mediaQuery:"screen and (min-width: 600px) and (max-width: 959.99px)",priority:900},{alias:"md",mediaQuery:"screen and (min-width: 960px) and (max-width: 1279.99px)",priority:800},{alias:"lg",mediaQuery:"screen and (min-width: 1280px) and (max-width: 1919.99px)",priority:700},{alias:"xl",mediaQuery:"screen and (min-width: 1920px) and (max-width: 4999.99px)",priority:600},{alias:"lt-sm",overlapping:!0,mediaQuery:"screen and (max-width: 599.99px)",priority:950},{alias:"lt-md",overlapping:!0,mediaQuery:"screen and (max-width: 959.99px)",priority:850},{alias:"lt-lg",overlapping:!0,mediaQuery:"screen and (max-width: 1279.99px)",priority:750},{alias:"lt-xl",overlapping:!0,priority:650,mediaQuery:"screen and (max-width: 1919.99px)"},{alias:"gt-xs",overlapping:!0,mediaQuery:"screen and (min-width: 600px)",priority:-950},{alias:"gt-sm",overlapping:!0,mediaQuery:"screen and (min-width: 960px)",priority:-850},{alias:"gt-md",overlapping:!0,mediaQuery:"screen and (min-width: 1280px)",priority:-750},{alias:"gt-lg",overlapping:!0,mediaQuery:"screen and (min-width: 1920px)",priority:-650}],O="(orientation: portrait) and (max-width: 599.99px)",A="(orientation: portrait) and (min-width: 600px) and (max-width: 839.99px)",M="(orientation: landscape) and (min-width: 960px) and (max-width: 1279.99px)",B="(orientation: portrait) and (min-width: 840px)",I="(orientation: landscape) and (min-width: 1280px)",L={HANDSET:O+", (orientation: landscape) and (max-width: 959.99px)",TABLET:A+" , "+M,WEB:B+", "+I+" ",HANDSET_PORTRAIT:""+O,TABLET_PORTRAIT:A+" ",WEB_PORTRAIT:""+B,HANDSET_LANDSCAPE:"(orientation: landscape) and (max-width: 959.99px)]",TABLET_LANDSCAPE:""+M,WEB_LANDSCAPE:""+I},C=[{alias:"handset",priority:2e3,mediaQuery:L.HANDSET},{alias:"handset.landscape",priority:2e3,mediaQuery:L.HANDSET_LANDSCAPE},{alias:"handset.portrait",priority:2e3,mediaQuery:L.HANDSET_PORTRAIT},{alias:"tablet",priority:2100,mediaQuery:L.TABLET},{alias:"tablet.landscape",priority:2100,mediaQuery:L.TABLET},{alias:"tablet.portrait",priority:2100,mediaQuery:L.TABLET_PORTRAIT},{alias:"web",priority:2200,mediaQuery:L.WEB,overlapping:!0},{alias:"web.landscape",priority:2200,mediaQuery:L.WEB_LANDSCAPE,overlapping:!0},{alias:"web.portrait",priority:2200,mediaQuery:L.WEB_PORTRAIT,overlapping:!0}],T=/(\.|-|_)/g;function P(t){var e=t.length>0?t.charAt(0):"",n=t.length>1?t.slice(1):"";return e.toUpperCase()+n}var V=new i.r("Token (@angular/flex-layout) Breakpoints",{providedIn:"root",factory:function(){var t=Object(i.Z)(x),e=Object(i.Z)(g),n=[].concat.apply([],(t||[]).map(function(t){return Array.isArray(t)?t:[t]}));return function(t,e){void 0===e&&(e=[]);var n,i={};return t.forEach(function(t){i[t.alias]=t}),e.forEach(function(t){i[t.alias]?function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(null==t)throw TypeError("Cannot convert undefined or null to object");for(var i=0,r=e;i<r.length;i++){var a=r[i];if(null!=a)for(var o in a)a.hasOwnProperty(o)&&(t[o]=a[o])}}(i[t.alias],t):i[t.alias]=t}),(n=Object.keys(i).map(function(t){return i[t]})).forEach(function(t){t.suffix||(t.suffix=t.alias.replace(T,"|").split("|").map(P).join(""),t.overlapping=!!t.overlapping)}),n}((e.disableDefaultBps?[]:j).concat(e.addOrientationBps?C:[]),n)}});function Q(t,e){return(e&&e.priority||0)-(t&&t.priority||0)}function _(t,e){return(t.priority||0)-(e.priority||0)}var D=function(){function t(t){this.findByMap=new Map,this.items=t.slice().sort(_)}return t.prototype.findByAlias=function(t){return t?this.findWithPredicate(t,function(e){return e.alias==t}):null},t.prototype.findByQuery=function(t){return this.findWithPredicate(t,function(e){return e.mediaQuery==t})},Object.defineProperty(t.prototype,"overlappings",{get:function(){return this.items.filter(function(t){return 1==t.overlapping})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"aliases",{get:function(){return this.items.map(function(t){return t.alias})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suffixes",{get:function(){return this.items.map(function(t){return t.suffix?t.suffix:""})},enumerable:!0,configurable:!0}),t.prototype.findWithPredicate=function(t,e){var n=this.findByMap.get(t);return n||(n=this.items.find(e)||null,this.findByMap.set(t,n)),n||null},t.ngInjectableDef=Object(i.V)({factory:function(){return new t(Object(i.Z)(V))},token:t,providedIn:"root"}),t}(),R=function(){function t(t,e,n){this._zone=t,this._platformId=e,this._document=n,this.source=new s.a(new y(!0)),this.registry=new Map,this._observable$=this.source.asObservable()}return Object.defineProperty(t.prototype,"activations",{get:function(){var t=[];return this.registry.forEach(function(e,n){e.matches&&t.push(n)}),t},enumerable:!0,configurable:!0}),t.prototype.isActive=function(t){var e=this.registry.get(t);return!!e&&e.matches},t.prototype.observe=function(t,e){var n=this;if(void 0===e&&(e=!1),t&&t.length){var i=this._observable$.pipe(Object(c.a)(function(n){return!e||t.indexOf(n.mediaQuery)>-1})),r=new u.a(function(e){var i=n.registerQuery(t);if(i.length){var r=i.pop();i.forEach(function(t){e.next(t)}),n.source.next(r)}e.complete()});return Object(l.a)(r,i)}return this._observable$},t.prototype.registerQuery=function(t){var e=this,n=Array.isArray(t)?t:[t],i=[];return function(t,e){var n=t.filter(function(t){return!W[t]});if(n.length>0){var i=n.join(", ");try{var r=e.createElement("style");r.setAttribute("type","text/css"),r.styleSheet||r.appendChild(e.createTextNode("\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media "+i+" {.fx-query-test{ }}\n")),e.head.appendChild(r),n.forEach(function(t){return W[t]=r})}catch(a){console.error(a)}}}(n,this._document),n.forEach(function(t){var n=e.registry.get(t);n||((n=e.buildMQL(t)).addListener(function(n){e._zone.run(function(){return e.source.next(new y(n.matches,t))})}),e.registry.set(t,n)),n.matches&&i.push(new y(!0,t))}),i},t.prototype.buildMQL=function(t){return function(t,e){return e&&window.matchMedia("all").addListener?window.matchMedia(t):{matches:"all"===t||""===t,media:t,addListener:function(){},removeListener:function(){}}}(t,Object(r.u)(this._platformId))},t.ngInjectableDef=Object(i.V)({factory:function(){return new t(Object(i.Z)(i.B),Object(i.Z)(i.D),Object(i.Z)(r.d))},token:t,providedIn:"root"}),t}(),W={},K={alias:"print",mediaQuery:"print",priority:1e3},Z=function(){function t(t,e){this.breakpoints=t,this.layoutConfig=e,this.isPrinting=!1,this.queue=new N,this.deactivations=[]}return t.prototype.withPrintQuery=function(t){return t.concat(["print"])},t.prototype.isPrintEvent=function(t){return t.mediaQuery.startsWith("print")},Object.defineProperty(t.prototype,"printAlias",{get:function(){return this.layoutConfig.printWithBreakpoints||[]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"printBreakPoints",{get:function(){var t=this;return this.printAlias.map(function(e){return t.breakpoints.findByAlias(e)}).filter(function(t){return null!==t})},enumerable:!0,configurable:!0}),t.prototype.getEventBreakpoints=function(t){var e=this.breakpoints.findByQuery(t.mediaQuery);return(e?this.printBreakPoints.concat([e]):this.printBreakPoints).sort(Q)},t.prototype.updateEvent=function(t){var e=this.breakpoints.findByQuery(t.mediaQuery);return this.isPrintEvent(t)&&(e=this.getEventBreakpoints(t)[0],t.mediaQuery=e?e.mediaQuery:""),w(t,e)},t.prototype.interceptEvents=function(t){var e=this;return function(n){e.isPrintEvent(n)?n.matches&&!e.isPrinting?(e.startPrinting(t,e.getEventBreakpoints(n)),t.updateStyles()):!n.matches&&e.isPrinting&&(e.stopPrinting(t),t.updateStyles()):e.collectActivations(n)}},t.prototype.blockPropagation=function(){var t=this;return function(e){return!(t.isPrinting||t.isPrintEvent(e))}},t.prototype.startPrinting=function(t,e){this.isPrinting=!0,t.activatedBreakpoints=this.queue.addPrintBreakpoints(e)},t.prototype.stopPrinting=function(t){t.activatedBreakpoints=this.deactivations,this.deactivations=[],this.queue.clear(),this.isPrinting=!1},t.prototype.collectActivations=function(t){if(!this.isPrinting)if(t.matches)this.deactivations=[];else{var e=this.breakpoints.findByQuery(t.mediaQuery);e&&(this.deactivations.push(e),this.deactivations.sort(Q))}},t.ngInjectableDef=Object(i.V)({factory:function(){return new t(Object(i.Z)(D),Object(i.Z)(g))},token:t,providedIn:"root"}),t}(),N=function(){function t(){this.printBreakpoints=[]}return t.prototype.addPrintBreakpoints=function(t){var e=this;return t.push(K),t.sort(Q),t.forEach(function(t){return e.addBreakpoint(t)}),this.printBreakpoints},t.prototype.addBreakpoint=function(t){t&&void 0===this.printBreakpoints.find(function(e){return e.mediaQuery===t.mediaQuery})&&(this.printBreakpoints=function(t){return!!t&&t.mediaQuery.startsWith("print")}(t)?[t].concat(this.printBreakpoints):this.printBreakpoints.concat([t]))},t.prototype.clear=function(){this.printBreakpoints=[]},t}();function F(t){for(var e in t){var n=t[e]||"";switch(e){case"display":t.display="flex"===n?["-webkit-flex","flex"]:"inline-flex"===n?["-webkit-inline-flex","inline-flex"]:n;break;case"align-items":case"align-self":case"align-content":case"flex":case"flex-basis":case"flex-flow":case"flex-grow":case"flex-shrink":case"flex-wrap":case"justify-content":t["-webkit-"+e]=n;break;case"flex-direction":t["-webkit-flex-direction"]=n=n||"row",t["flex-direction"]=n;break;case"order":t.order=t["-webkit-"+e]=isNaN(+n)?"0":n}}return t}var z=function(){function t(t,e,n,i){this._serverStylesheet=t,this._serverModuleLoaded=e,this._platformId=n,this.layoutConfig=i}return t.prototype.applyStyleToElement=function(t,e,n){void 0===n&&(n=null);var i={};"string"==typeof e&&(i[e]=n,e=i),i=this.layoutConfig.disableVendorPrefixes?e:F(e),this._applyMultiValueStyleToElement(i,t)},t.prototype.applyStyleToElements=function(t,e){var n=this;void 0===e&&(e=[]);var i=this.layoutConfig.disableVendorPrefixes?t:F(t);e.forEach(function(t){n._applyMultiValueStyleToElement(i,t)})},t.prototype.getFlowDirection=function(t){var e=this.lookupStyle(t,"flex-direction");return[e||"row",this.lookupInlineStyle(t,"flex-direction")||Object(r.v)(this._platformId)&&this._serverModuleLoaded?e:""]},t.prototype.lookupAttributeValue=function(t,e){return t.getAttribute(e)||""},t.prototype.lookupInlineStyle=function(t,e){return Object(r.u)(this._platformId)?t.style.getPropertyValue(e):this._getServerStyle(t,e)},t.prototype.lookupStyle=function(t,e,n){void 0===n&&(n=!1);var i="";return t&&((i=this.lookupInlineStyle(t,e))||(Object(r.u)(this._platformId)?n||(i=getComputedStyle(t).getPropertyValue(e)):this._serverModuleLoaded&&(i=this._serverStylesheet.getStyleForElement(t,e)))),i?i.trim():""},t.prototype._applyMultiValueStyleToElement=function(t,e){var n=this;Object.keys(t).sort().forEach(function(i){var a=t[i],o=Array.isArray(a)?a:[a];o.sort();for(var s=0,u=o;s<u.length;s++){var l=u[s];l=l?l+"":"",Object(r.u)(n._platformId)||!n._serverModuleLoaded?Object(r.u)(n._platformId)?e.style.setProperty(i,l):n._setServerStyle(e,i,l):n._serverStylesheet.addStyleToElement(e,i,l)}})},t.prototype._setServerStyle=function(t,e,n){e=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();var i=this._readStyleAttribute(t);i[e]=n||"",this._writeStyleAttribute(t,i)},t.prototype._getServerStyle=function(t,e){return this._readStyleAttribute(t)[e]||""},t.prototype._readStyleAttribute=function(t){var e={},n=t.getAttribute("style");if(n)for(var i=n.split(/;+/g),r=0;r<i.length;r++){var a=i[r].trim();if(a.length>0){var o=a.indexOf(":");if(-1===o)throw new Error("Invalid CSS style: "+a);e[a.substr(0,o).trim()]=a.substr(o+1).trim()}}return e},t.prototype._writeStyleAttribute=function(t,e){var n="";for(var i in e)e[i]&&(n+=i+":"+e[i]+";");t.setAttribute("style",n)},t.ngInjectableDef=Object(i.V)({factory:function(){return new t(Object(i.Z)(v,8),Object(i.Z)(b,8),Object(i.Z)(i.D),Object(i.Z)(g))},token:t,providedIn:"root"}),t}(),G=function(){function t(){this.shouldCache=!0}return t.prototype.sideEffect=function(t,e,n){},t}();function Y(t,e,n){void 0===e&&(e="1"),void 0===n&&(n="1");var i=[e,n,t],r=t.indexOf("calc");if(r>0)i[2]=q(t.substring(r).trim()),2==(a=t.substr(0,r).trim().split(" ")).length&&(i[0]=a[0],i[1]=a[1]);else if(0==r)i[2]=q(t.trim());else{var a;i=3===(a=t.split(" ")).length?a:[e,n,t]}return i}function q(t){return t.replace(/[\s]/g,"").replace(/[\/\*\+\-]/g," $& ")}var U=function(){function t(t,e,n){this.matchMedia=t,this.breakpoints=e,this.hook=n,this.activatedBreakpoints=[],this.elementMap=new Map,this.elementKeyMap=new WeakMap,this.watcherMap=new WeakMap,this.updateMap=new WeakMap,this.clearMap=new WeakMap,this.subject=new o.a,this.observeActivations()}return Object.defineProperty(t.prototype,"activatedAlias",{get:function(){return this.activatedBreakpoints[0]?this.activatedBreakpoints[0].alias:""},enumerable:!0,configurable:!0}),t.prototype.onMediaChange=function(t){var e=this.findByQuery(t.mediaQuery);e&&((t=w(t,e)).matches&&-1===this.activatedBreakpoints.indexOf(e)?(this.activatedBreakpoints.push(e),this.activatedBreakpoints.sort(Q),this.updateStyles()):t.matches||-1===this.activatedBreakpoints.indexOf(e)||(this.activatedBreakpoints.splice(this.activatedBreakpoints.indexOf(e),1),this.activatedBreakpoints.sort(Q),this.updateStyles()))},t.prototype.init=function(t,e,n,i,r){void 0===r&&(r=[]),H(this.updateMap,t,e,n),H(this.clearMap,t,e,i),this.buildElementKeyMap(t,e),this.watchExtraTriggers(t,e,r)},t.prototype.getValue=function(t,e,n){var i=this.elementMap.get(t);if(i){var r=void 0!==n?i.get(n):this.getActivatedValues(i,e);if(r)return r.get(e)}},t.prototype.hasValue=function(t,e){var n=this.elementMap.get(t);if(n){var i=this.getActivatedValues(n,e);if(i)return void 0!==i.get(e)||!1}return!1},t.prototype.setValue=function(t,e,n,i){var r=this.elementMap.get(t);if(r){var a=(r.get(i)||new Map).set(e,n);r.set(i,a),this.elementMap.set(t,r)}else r=(new Map).set(i,(new Map).set(e,n)),this.elementMap.set(t,r);var o=this.getValue(t,e);void 0!==o&&this.updateElement(t,e,o)},t.prototype.trackValue=function(t,e){return this.subject.asObservable().pipe(Object(c.a)(function(n){return n.element===t&&n.key===e}))},t.prototype.updateStyles=function(){var t=this;this.elementMap.forEach(function(e,n){var i=new Set(t.elementKeyMap.get(n)),r=t.getActivatedValues(e);r&&r.forEach(function(e,r){t.updateElement(n,r,e),i.delete(r)}),i.forEach(function(i){if(r=t.getActivatedValues(e,i)){var a=r.get(i);t.updateElement(n,i,a)}else t.clearElement(n,i)})})},t.prototype.clearElement=function(t,e){var n=this.clearMap.get(t);if(n){var i=n.get(e);i&&(i(),this.subject.next({element:t,key:e,value:""}))}},t.prototype.updateElement=function(t,e,n){var i=this.updateMap.get(t);if(i){var r=i.get(e);r&&(r(n),this.subject.next({element:t,key:e,value:n}))}},t.prototype.releaseElement=function(t){var e=this.watcherMap.get(t);e&&(e.forEach(function(t){return t.unsubscribe()}),this.watcherMap.delete(t));var n=this.elementMap.get(t);n&&(n.forEach(function(t,e){return n.delete(e)}),this.elementMap.delete(t))},t.prototype.triggerUpdate=function(t,e){var n=this,i=this.elementMap.get(t);if(i){var r=this.getActivatedValues(i,e);r&&(e?this.updateElement(t,e,r.get(e)):r.forEach(function(e,i){return n.updateElement(t,i,e)}))}},t.prototype.buildElementKeyMap=function(t,e){var n=this.elementKeyMap.get(t);n||(n=new Set,this.elementKeyMap.set(t,n)),n.add(e)},t.prototype.watchExtraTriggers=function(t,e,n){var i=this;if(n&&n.length){var r=this.watcherMap.get(t);if(r||(r=new Map,this.watcherMap.set(t,r)),!r.get(e)){var a=l.a.apply(void 0,n).subscribe(function(){var n=i.getValue(t,e);i.updateElement(t,e,n)});r.set(e,a)}}},t.prototype.findByQuery=function(t){return this.breakpoints.findByQuery(t)},t.prototype.getActivatedValues=function(t,e){for(var n=0;n<this.activatedBreakpoints.length;n++){var i=t.get(this.activatedBreakpoints[n].alias);if(i&&(void 0===e||i.has(e)))return i}var r=t.get("");return void 0===e||r&&r.has(e)?r:void 0},t.prototype.observeActivations=function(){var t=this.breakpoints.items.map(function(t){return t.mediaQuery});this.matchMedia.observe(this.hook.withPrintQuery(t)).pipe(Object(p.a)(this.hook.interceptEvents(this)),Object(c.a)(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this))},t.ngInjectableDef=Object(i.V)({factory:function(){return new t(Object(i.Z)(R),Object(i.Z)(D),Object(i.Z)(Z))},token:t,providedIn:"root"}),t}();function H(t,e,n,i){if(void 0!==i){var r=t.get(e);r||(r=new Map,t.set(e,r)),r.set(n,i)}}},"V9q+":function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n("CcnG");var i=n("mrSG"),r=n("Ip0R"),a=n("OzfB"),o=function(){function t(t,e){Object(r.v)(e)&&!t&&console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule")}return t.withConfig=function(e,n){return void 0===n&&(n=[]),{ngModule:t,providers:e.serverLoaded?[{provide:a.e,useValue:Object(i.a)({},a.d,e)},{provide:a.a,useValue:n,multi:!0},{provide:a.g,useValue:!0}]:[{provide:a.e,useValue:Object(i.a)({},a.d,e)},{provide:a.a,useValue:n,multi:!0}]}},t}()},hUWP:function(t,e,n){"use strict";n.d(e,"b",function(){return h}),n.d(e,"a",function(){return f});var i=n("mrSG"),r=n("CcnG"),a=n("Ip0R"),o=n("OzfB"),s=(n("n6gG"),n("ny24"),function(){return function(t,e,n){void 0===n&&(n=!0),this.key=t,this.value=e,this.key=n?t.replace(/['"]/g,"").trim():t.trim(),this.value=n?e.replace(/['"]/g,"").trim():e.trim(),this.value=this.value.replace(/;/,"")}}());function u(t){var e=typeof t;return"object"===e?t.constructor===Array?"array":t.constructor===Set?"set":"object":e}function l(t){var e=t.split(":"),n=e[0],i=e.slice(1);return new s(n,i.join(":"))}function c(t,e){return e.key&&(t[e.key]=e.value),t}var p=["ngStyle","ngStyle.xs","ngStyle.sm","ngStyle.md","ngStyle.lg","ngStyle.xl","ngStyle.lt-sm","ngStyle.lt-md","ngStyle.lt-lg","ngStyle.lt-xl","ngStyle.gt-xs","ngStyle.gt-sm","ngStyle.gt-md","ngStyle.gt-lg"],f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.inputs=p,e}return Object(i.c)(e,t),e}(function(t){function e(e,n,i,r,o,s,u,l,c){var p=t.call(this,e,null,n,i)||this;p.elementRef=e,p.styler=n,p.marshal=i,p.keyValueDiffers=r,p.renderer=o,p.sanitizer=s,p.ngStyleInstance=u,p.DIRECTIVE_KEY="ngStyle",p.ngStyleInstance||(p.ngStyleInstance=new a.n(p.keyValueDiffers,p.elementRef,p.renderer)),p.init();var f=p.nativeElement.getAttribute("style")||"";return p.fallbackStyles=p.buildStyleMap(f),p.isServer=l&&Object(a.v)(c),p}return Object(i.c)(e,t),e.prototype.updateWithValue=function(t){var e=this.buildStyleMap(t);this.ngStyleInstance.ngStyle=Object(i.a)({},this.fallbackStyles,e),this.isServer&&this.applyStyleToElement(e),this.ngStyleInstance.ngDoCheck()},e.prototype.clearStyles=function(){this.ngStyleInstance.ngStyle=this.fallbackStyles,this.ngStyleInstance.ngDoCheck()},e.prototype.buildStyleMap=function(t){var e,n=this,i=function(t){return n.sanitizer.sanitize(r.K.STYLE,t)||""};if(t)switch(u(t)){case"string":return d((void 0===e&&(e=";"),String(t).trim().split(e).map(function(t){return t.trim()}).filter(function(t){return""!==t})),i);case"array":return d(t,i);case"set":default:return function(t,e){var n=[];return"set"===u(t)?t.forEach(function(t){return n.push(t)}):Object.keys(t).forEach(function(e){n.push(e+":"+t[e])}),function(t,e){return n.map(l).filter(function(t){return!!t}).map(function(t){return e&&(t.value=e(t.value)),t}).reduce(c,{})}(0,e)}(t,i)}return{}},e.prototype.ngDoCheck=function(){this.ngStyleInstance.ngDoCheck()},e}(o.b));function d(t,e){return t.map(l).filter(function(t){return!!t}).map(function(t){return e&&(t.value=e(t.value)),t}).reduce(c,{})}var h=function(){return function(){}}()}}]);