(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{131:function(t,e,n){"use strict";n(17),n(18),n(9),n(55);var o=n(21),r=n(22),c=n(23),l=n(14),d=n(6),f=n(7),h=n(127),v=(n(29),n(66),n(67),n(56)),m=n(128),x=n.n(m),y=n(75);function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var w=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},k=function(t){Object(r.a)(c,t);var e=C(c);function c(){var t;return Object(o.a)(this,c),(t=e.apply(this,arguments)).links={index:[{text:"Nuestros servicios",href:"#servicios"},{text:"Sobre nosotros",href:"#nosotros"},{text:"Contacto",href:"#contacto"}]},t.viewsWithHeroBackground=["trabajo"],t.linksAreActive=!1,t}return Object(v.a)(c,[{key:"mounted",value:function(){this._headroom=new x.a(this.$header,{tolerance:10,onTop:this._onHeadroomTop.bind(this),onNotTop:this._onHeadroomNotTop.bind(this)}),this._headroom.init()}},{key:"_hideMenu",value:function(){this.linksAreActive=!1,document.body.classList.remove("no-scroll")}},{key:"_showMenu",value:function(){this.linksAreActive=!0,document.body.classList.add("no-scroll")}},{key:"_onMenuButtonClicked",value:function(){this._showMenu()}},{key:"_onCloseButtonClicked",value:function(){this._hideMenu()}},{key:"_onNavLinkClicked",value:function(){this.linksAreActive&&this._hideMenu()}},{key:"_onHeadroomTop",value:function(){if(this.viewsWithHeroBackground.includes(this.$route.name||"")){var t=n(178);this.$logo&&(this.$logo.src=t)}}},{key:"_onHeadroomNotTop",value:function(){if(this.viewsWithHeroBackground.includes(this.$route.name||"")){var t=n(90);this.$logo&&(this.$logo.src=t)}}},{key:"routeLinks",get:function(){return this.links[this.$route.name||""]}},{key:"isBlogEntry",get:function(){return"blog/entry"===this.$route.name}}]),c}(f.d);w([Object(f.c)("header")],k.prototype,"$header",void 0),w([Object(f.c)("logo")],k.prototype,"$logo",void 0);var j=k=w([Object(f.a)({components:{AppIcon:y.a}})],k),O=(n(179),n(13)),L=Object(O.a)(j,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{ref:"header",staticClass:"header"},[o("div",{staticClass:"inner-header"},[o("section",{staticClass:"left-section"},[o("nuxt-link",{attrs:{to:"/"}},[o("img",{ref:"logo",staticClass:"logo",attrs:{src:n(90)}})])],1),t.isBlogEntry?o("section",{staticClass:"right-section"},[o("nuxt-link",{staticClass:"nav-link go-back",attrs:{to:"/blog"}},[o("AppIcon",{attrs:{icon:"arrowLeft"}},[t._v("Blog")])],1)],1):t.routeLinks?o("section",{staticClass:"right-section"},[o("nav",{staticClass:"nav-links",class:{active:t.linksAreActive}},[t._l(t.routeLinks,(function(link){return o("a",{staticClass:"nav-link",attrs:{href:link.href},on:{click:t._onNavLinkClicked}},[t._v(t._s(link.text))])})),o("svg",{staticClass:"close-button",attrs:{viewBox:"0 0 24 24"},on:{click:t._onCloseButtonClicked}},[o("path",{attrs:{d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}})])],2),o("svg",{staticClass:"menu-button",attrs:{viewBox:"0 0 24 24"},on:{click:t._onMenuButtonClicked}},[o("path",{attrs:{d:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"}})])]):t._e()])])}),[],!1,null,"616a370b",null).exports;function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var R=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},H=function(t){Object(r.a)(n,t);var e=_(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).links=[],t}return n}(f.d),M=H=R([Object(f.a)({components:{AppIcon:y.a}})],H),V=(n(181),Object(O.a)(M,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"footer"},[o("div",{staticClass:"inner-footer"},[o("div",{staticClass:"left-section"},[o("div",{staticClass:"social"},[o("AppIcon",{attrs:{size:"32",icon:"twitter"}}),o("AppIcon",{attrs:{size:"32",icon:"youtube"}}),o("AppIcon",{attrs:{size:"32",icon:"facebook"}})],1),o("div",{staticClass:"contact"},[o("AppIcon",{staticClass:"email",attrs:{icon:"email","no-pointer":"","no-hover":""}},[o("span",{staticClass:"email-text"},[t._v("info@concienciafundraising.es")])])],1),t._l(t.links,(function(link){return o("nav",{staticClass:"nav-list"},[o("nuxt-link",{staticClass:"nav-link",attrs:{to:link.href}},[t._v(t._s(link.text))])],1)}))],2),o("div",{staticClass:"right-section"},[o("nuxt-link",{attrs:{to:"/"}},[o("img",{staticClass:"logo",attrs:{src:n(90)}})])],1)])])}),[],!1,null,"12b851bb",null).exports);function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var P=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},z=function(t){Object(r.a)(n,t);var e=A(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return n}(f.d),$=z=P([Object(f.a)({components:{TheHeader:L,TheFooter:V,PortalTarget:h.PortalTarget}})],z),B=(n(183),Object(O.a)($,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"main-wrapper"},[e("TheHeader",{key:this.$route.name}),e("nuxt",{staticClass:"main-content"}),e("TheFooter"),e("PortalTarget",{attrs:{name:"modals-container"}})],1)}),[],!1,null,null,null));e.a=B.exports},133:function(t,e,n){t.exports=n(134)},176:function(t,e,n){"use strict";var o=n(71);n.n(o).a},177:function(t,e,n){(e=n(30)(!1)).push([t.i,".icon[data-v-5e7f1c36]{display:inline-flex;align-items:center;flex-shrink:0;color:#757575}.icon[data-v-5e7f1c36]:not([no-pointer]){cursor:pointer}.icon[data-v-5e7f1c36]:hover:not([no-hover]){color:#424242}.icon[reverse][data-v-5e7f1c36]{flex-direction:row-reverse}svg[data-v-5e7f1c36]{fill:currentColor}.text[data-v-5e7f1c36]{color:inherit}",""]),t.exports=e},178:function(t,e,n){t.exports=n.p+"img/logo-intermediate.eda925c.svg"},179:function(t,e,n){"use strict";var o=n(72);n.n(o).a},180:function(t,e,n){(e=n(30)(!1)).push([t.i,".header[data-v-616a370b]{justify-content:center;position:fixed;top:0;left:0;z-index:100;height:var(--header-height)}.header[data-v-616a370b],.inner-header[data-v-616a370b]{display:flex;width:100%}.inner-header[data-v-616a370b]{justify-content:space-between;align-items:center;padding:1em 4em;height:100%;max-width:var(--max-width)}@media (max-width:780px){.inner-header[data-v-616a370b]{padding:.75em 1.5em}}.inner-header section[data-v-616a370b]{height:100%}.inner-header section[data-v-616a370b],.nav-links[data-v-616a370b]{display:flex;align-items:center}@media (max-width:780px){.nav-links[data-v-616a370b]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;flex-direction:column;justify-content:center;-webkit-animation:menu-animation-data-v-616a370b .5s ease-out forwards;animation:menu-animation-data-v-616a370b .5s ease-out forwards;opacity:0}.nav-links[data-v-616a370b]:not(.active){display:none}}.nav-link[data-v-616a370b]{text-align:right;text-decoration:none;font-size:1.1em;font-weight:600;margin-left:2em;color:rgba(0,0,0,.9)}.nav-link[data-v-616a370b]:active{color:#ff9800}@media (max-width:780px){.nav-link[data-v-616a370b]:not(.go-back){font-size:2em;margin:.5em 0}}.nav-link .icon[data-v-616a370b]{color:inherit}.close-button[data-v-616a370b]{display:none;width:32px;height:32px}@media (max-width:780px){.close-button[data-v-616a370b]{display:block;position:absolute;top:1.25em;right:1.5em}}.menu-button[data-v-616a370b]{display:none;width:32px;height:32px;fill:rgba(0,0,0,.6)}.menu-button[data-v-616a370b]:hover{fill:rgba(0,0,0,.9)}@media (max-width:780px){.menu-button[data-v-616a370b]{display:block}}.left-section *[data-v-616a370b]{height:100%}.headroom[data-v-616a370b]{will-change:transform;background:transparent;transition:transform .4s ease-out,background .2s linear}.headroom--not-top[data-v-616a370b]{background:#fff}.headroom--pinned[data-v-616a370b]{transform:translateY(0)}.headroom--unpinned[data-v-616a370b]{transform:translateY(-100%)}@-webkit-keyframes menu-animation-data-v-616a370b{0%{opacity:0}to{opacity:1}}@keyframes menu-animation-data-v-616a370b{0%{opacity:0}to{opacity:1}}",""]),t.exports=e},181:function(t,e,n){"use strict";var o=n(73);n.n(o).a},182:function(t,e,n){(e=n(30)(!1)).push([t.i,'.footer[data-v-12b851bb]{position:relative;width:100%;display:flex;flex-direction:column;align-items:center;margin-top:16em;background:#cfd8dc}.footer[data-v-12b851bb]:before{content:"";width:0;height:0;border-color:transparent transparent transparent #cfd8dc;border-style:solid;border-width:8em 0 0 100vw;position:absolute;bottom:100%;left:0}.inner-footer[data-v-12b851bb]{padding:2em 4em;display:flex;justify-content:space-between;align-items:flex-end;width:100%;max-width:var(--max-width)}@media (max-width:780px){.inner-footer[data-v-12b851bb]{flex-direction:column-reverse;justify-content:flex-start;align-items:flex-end}}.logo[data-v-12b851bb]{width:12em}.social[data-v-12b851bb]{display:flex}@media (max-width:780px){.social[data-v-12b851bb]{justify-content:flex-end}}@media (max-width:780px){.contact>*[data-v-12b851bb]{flex-direction:row-reverse}}.email-text[data-v-12b851bb]{margin:0 0 0 .25em}@media (max-width:780px){.email-text[data-v-12b851bb]{margin:0 .25em 0 0}}@media (max-width:780px){.nav-list[data-v-12b851bb]{text-align:right}}.nav-link[data-v-12b851bb]{text-decoration:none;font-size:1.1em;font-weight:600;color:rgba(0,0,0,.9)}',""]),t.exports=e},183:function(t,e,n){"use strict";var o=n(74);n.n(o).a},184:function(t,e,n){(e=n(30)(!1)).push([t.i,'*,:after,:before{box-sizing:border-box;margin:0}:root{--max-width:80em;--header-height:5em}@media (min-width:781px) and (max-width:1280px){:root{--header-height:5em}}@media (max-width:780px){:root{--header-height:4.5em}}html{font-family:"Source Sans Pro";font-size:18px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}@media (max-width:780px){html{font-size:16px}}#__layout,#__nuxt,.main-wrapper,body,html{width:100%;height:100%;scroll-padding-top:5em;scroll-padding-top:var(--header-height)}body{overflow-x:hidden}body.no-scroll{overflow-y:hidden}.main-content{display:flex;flex-direction:column;align-items:center;width:100%;min-height:100%;padding-top:5em;padding-top:var(--header-height);overflow-x:hidden}.main-content>*{width:100%;padding:6em 4em}',""]),t.exports=e},71:function(t,e,n){var content=n(177);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("ca6479de",content,!0,{sourceMap:!1})},72:function(t,e,n){var content=n(180);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("21d8f939",content,!0,{sourceMap:!1})},73:function(t,e,n){var content=n(182);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("2654eb60",content,!0,{sourceMap:!1})},74:function(t,e,n){var content=n(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("b215b5f2",content,!0,{sourceMap:!1})},75:function(t,e,n){"use strict";n(17),n(18),n(9),n(55);var o=n(21),r=n(56),c=n(22),l=n(23),d=n(14),f=n(6),h=n(7);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},x={facebook:"M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z",twitter:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z",youtube:"M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z",arrowLeft:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",arrowRight:"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z",email:"M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"iconPath",get:function(){return x[this.icon]}}]),n}(h.d);m([Object(h.b)(String)],y.prototype,"icon",void 0),m([Object(h.b)({default:24})],y.prototype,"size",void 0);var C=y=m([h.a],y),w=(n(176),n(13)),component=Object(w.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("svg",{attrs:{width:this.size,height:this.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:this.iconPath}})]),e("span",{staticClass:"text"},[this._t("default")],2)])}),[],!1,null,"5e7f1c36",null);e.a=component.exports},90:function(t,e,n){t.exports=n.p+"img/logo.fcaaa1e.svg"}},[[133,6,2,7]]]);