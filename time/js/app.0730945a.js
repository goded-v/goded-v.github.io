(function(e){function t(t){for(var s,c,i=t[0],f=t[1],o=t[2],d=0,j=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&j.push(n[c][0]),n[c]=0;for(s in f)Object.prototype.hasOwnProperty.call(f,s)&&(e[s]=f[s]);l&&l(t);while(j.length)j.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var f=a[i];0!==n[f]&&(s=!1)}s&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var s={},n={app:0},r=[];function c(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=s,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(a,s,function(t){return e[t]}.bind(null,s));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var l=f;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"2ac3":function(e,t,a){"use strict";a("e092")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"router-slide"}},[a("router-view")],1)],1)},r=[],c=(a("034f"),a("2877")),i={},f=Object(c["a"])(i,n,r,!1,null,null,null),o=f.exports,l=a("8c4f"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",{style:{color:e.colorText},on:{click:e.goPage}},[e._v("今天是第"+e._s(e.msg)+"天")]),a("h1",{style:{color:e.colorText}},[e._v(e._s(e.time))]),a("div",[e._v(" "+e._s(e.city)+" "+e._s(e.weatherData.dayWeather)+"~"+e._s(e.weatherData.nightWeather)+" "+e._s(e.weatherData.nightTemp)+"℃~"+e._s(e.weatherData.dayTemp)+"℃ ")]),a("div",{attrs:{id:"container"}})])},j=[],u=(a("e25e"),a("4795"),a("96cf"),a("1da1")),b=a("c1df"),h=a.n(b),p=(a("d3b7"),function(e){return new Promise((function(t){AMap.plugin("AMap.Weather",(function(){var a=new AMap.Weather;a.getForecast(e,(function(e,a){t(!e&&a)}))}))}))}),m={name:"index",data:function(){return{msg:"",colorText:"",time:h()().format("YYYY-MM-DD HH:mm:ss"),timer:null,cityList:["昆明","重庆","南京"],weatherList:[],weatherData:{},city:""}},created:function(){this.getLocationData(),this.initDay(),this.initTime()},mounted:function(){},methods:{initDay:function(){for(var e="2021-01-23 00:00:00",t="#",a=0,s=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],n=0;n<6;n++)a=parseInt(16*Math.random()),t+=s[a];this.msg=h()().diff(h()(e),"days")+1,this.colorText=t},initTime:function(){var e=this;this.timer=setInterval((function(){e.time=h()().format("YYYY-MM-DD HH:mm:ss")}),1e3)},goPage:function(){this.$router.push({path:"/nana"})},getLocationData:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=new AMap.Map("container",{resizeEnable:!0}),e.getWeatherData(a.getAdcode());case 2:case"end":return t.stop()}}),t)})))()},getWeatherData:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function a(){var s,n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,p(e);case 2:s=a.sent,s&&(n=s.city,r=s.forecasts,t.city=n,t.weatherData=r[0]);case 4:case"end":return a.stop()}}),a)})))()}},destroyed:function(){clearInterval(this.timer)}},v=m,g=(a("2ac3"),Object(c["a"])(v,d,j,!1,null,"2f1f26b4",null)),y=g.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("figure",{staticClass:"hearts"},[a("section",{staticClass:"heart"},[a("div",{staticClass:"plane plane-left"},[a("div",{staticClass:"half-heart"})]),a("div",{staticClass:"plane plane-right"},[a("div",{staticClass:"half-heart"})])]),a("section",{staticClass:"heart"},[a("div",{staticClass:"plane plane-left"},[a("div",{staticClass:"half-heart"})]),a("div",{staticClass:"plane plane-right"},[a("div",{staticClass:"half-heart"})])]),a("section",{staticClass:"heart"},[a("div",{staticClass:"plane plane-left"},[a("div",{staticClass:"half-heart"})]),a("div",{staticClass:"plane plane-right"},[a("div",{staticClass:"half-heart"})])]),a("section",{staticClass:"heart"},[a("div",{staticClass:"plane plane-left"},[a("div",{staticClass:"half-heart"})]),a("div",{staticClass:"plane plane-right"},[a("div",{staticClass:"half-heart"})])]),a("section",{staticClass:"heart"},[a("div",{staticClass:"plane plane-left"},[a("div",{staticClass:"half-heart"})]),a("div",{staticClass:"plane plane-right"},[a("div",{staticClass:"half-heart"})])])]),a("footer",[e._v("for nana")])])}],C={name:"love"},_=C,x=(a("da43"),Object(c["a"])(_,w,k,!1,null,"0d6cf7e4",null)),z=x.exports;s["a"].use(l["a"]);var O=[{path:"*",redirect:"/index"},{path:"/index",name:"index",component:y},{path:"/nana",name:"index",component:z}],D=new l["a"]({mode:"hash",base:"",routes:O}),M=D,T=a("2f62");s["a"].use(T["a"]);var P=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:M,store:P,render:function(e){return e(o)}}).$mount("#app")},"60f6":function(e,t,a){},"85ec":function(e,t,a){},da43:function(e,t,a){"use strict";a("60f6")},e092:function(e,t,a){}});