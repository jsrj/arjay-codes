(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],d=0,f=[];d<s.length;d++)o=s[d],i[o]&&f.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0236":function(e,t,n){"use strict";var a=n("c4ae"),i=n.n(a);i.a},"034f":function(e,t,n){"use strict";var a=n("ecfe"),i=n.n(a);i.a},"0827":function(e,t,n){},"088a":function(e,t,n){"use strict";var a=n("70aa"),i=n.n(a);i.a},"17a4":function(e,t,n){"use strict";var a=n("cec1"),i=n.n(a);i.a},"1f52":function(e,t,n){},"2a24":function(e,t,n){"use strict";var a=n("dacc"),i=n.n(a);i.a},"3ead":function(e,t,n){"use strict";var a=n("a005"),i=n.n(a);i.a},4045:function(e,t,n){e.exports=n.p+"img/loading.c5590569.svg"},4293:function(e,t,n){"use strict";var a=n("0827"),i=n.n(a);i.a},"4c13":function(e,t,n){"use strict";var a=n("f14e"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"root"}},[n("Navbar"),n("ViewWrapper",{attrs:{title:e.title}}),n("Footer",{attrs:{id:"footer",socialLinks:e.socialLinks}})],1)},r=[],o=(n("96cf"),n("3b8d")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{directives:[{name:"resize",rawName:"v-resize",value:e.onResize,expression:"onResize"}],attrs:{wrap:""}},[n("v-toolbar",{attrs:{app:"",dark:""}},[n("Logo",{attrs:{loading:e.isLoading}}),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("router-link",{attrs:{tag:"v-btn",flat:"",to:"/"}},[e._v("Home")]),n("router-link",{attrs:{tag:"v-btn",flat:"",to:"/about"}},[e._v("About")]),n("v-btn",{attrs:{color:"orange"},on:{click:function(t){return t.preventDefault(),e.login(t)}}},[e._v(" Login - Register")])],1)],1)],1)},c=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{staticClass:"outer-border",attrs:{fab:"",large:"",absolute:"",bottom:"",loading:e.loading,to:"/"}},[n("div",{attrs:{id:"inner-wrapper"}},[n("div",{attrs:{id:"hemi-top"}},[n("span",[e._v("Arjay")])]),n("div",{attrs:{id:"hemi-bot"}},[n("span",[e._v("Codes")])])])])},u=[],d={name:"Logo",props:{loading:Boolean},data:function(){return{showLoadingAnim:this.loading}}},f=d,p=(n("97b1"),n("0c7c")),h=Object(p["a"])(f,l,u,!1,null,"32eb7502",null),v=h.exports,g=n("5118"),m={name:"Navbar",components:{Logo:v},props:{width:String},mounted:function(){var e=this;this.onResize(),this.isLoading=!0,Object(g["setTimeout"])(function(){e.isLoading=!1},1e3)},methods:{login:function(){this.$auth.login()},logout:function(){this.$auth.logOut(),this.$router.push({path:"/"})},handleLoginEvent:function(e){this.isAuthenticated=e.loggedIn,this.profile=e.profile},onResize:function(){this.windowSize={x:window.innerWidth,y:window.innerHeight},console.log(this.windowSize.x),console.log(this.windowSize.y)}},data:function(){return{isAuthenticated:!1,isLoading:!1,profile:{},drawer:null,windowSize:{x:0,y:0},items:[{title:"Home",icon:"dashboard",target:"/"},{title:"About",icon:"question_answer",target:"about"}]}}},b=m,_=Object(p["a"])(b,s,c,!1,null,"faa8fc06",null),w=_.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"footer"}},[n("DevIdentifierTag",{attrs:{tagName:"footer"}}),n("div",{attrs:{id:"footer-content"}},[n("div",{attrs:{id:"social-links"}},e._l(e.socialLinks,function(t,a){return n("a",{key:a,staticClass:"social-link",attrs:{href:t.href,target:"_blank"}},[e._v(e._s(t.name))])}),0),n("small",[e._v("© "+e._s(e.currentYear)+" Arjay Codes, all rights reserved. Powered by〘❤️ && ☕️〙.")])])],1)},y=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tag"},[e._v(e._s(e.tagName)+"-"+e._s(e.index||0))])},x=[],E=(n("c5f6"),{name:"DevIdentifierTag",props:{tagName:String,index:Number}}),O=E,A=(n("8122"),Object(p["a"])(O,j,x,!1,null,"fa20dfb8",null)),S=A.exports,T={name:"Footer",components:{DevIdentifierTag:S},props:{socialLinks:Array},data:function(){return{currentYear:(new Date).getFullYear()}}},C=T,L=(n("2a24"),Object(p["a"])(C,k,y,!1,null,"310a637d",null)),$=L.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-content",{attrs:{id:"view-wrapper"}},[n("router-view",{attrs:{id:"view",title:e.title}})],1)},I=[],D={name:"ViewWrapper",props:{title:String},computed:{style:function(){}}},H=D,P=Object(p["a"])(H,N,I,!1,null,"ea998510",null),z=P.exports,M={components:{Navbar:w,ViewWrapper:z,Footer:$},data:function(){return{title:"Arjay | Codes",socialLinks:[{name:"Facebook",href:"https://www.facebook.com/arjay.codes/",iconName:""},{name:"Twitter",href:"https://twitter.com/codesarjay",iconName:""},{name:"Instagram",href:"https://www.instagram.com/arjay.codes/",iconName:""},{name:"Github",href:"https://github.com/jsrj",iconName:""}]}},created:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$auth.renewTokens();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e["catch"](0);case 7:case"end":return e.stop()}},e,this,[[0,5]])}));function t(){return e.apply(this,arguments)}return t}()},R=M,F=(n("034f"),Object(p["a"])(R,i,r,!1,null,null,null)),B=F.exports,V=(n("6762"),n("8c4f")),q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Meta",{attrs:{title:e.title,subTitle:e.subTitle,description:e.description}}),n("Header"),n("Action"),e._l(e.contents,function(e,t){return n("BaseContent",{key:t,attrs:{head:e.head,block:e.block,index:t}})}),n("LastAction",{attrs:{panels:e.lastActionPanels}})],2)},W=[],J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("DevIdentifierTag",{attrs:{tagName:"Header"}}),a("img",{attrs:{alt:"Vue logo",src:n("cf05")}})],1)},U=[],Y={name:"Header",components:{DevIdentifierTag:S},props:{}},Z=Y,G=(n("088a"),Object(p["a"])(Z,J,U,!1,null,"0553a2c4",null)),K=G.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"action"},[n("DevIdentifierTag",{attrs:{tagName:"Action"}}),n("v-btn",[e._v("I Need A Website")]),e._v("\n   \n  "),n("v-btn",[e._v("I Need A Developer")])],1)},X=[],ee={name:"Action",components:{DevIdentifierTag:S},props:{}},te=ee,ne=(n("4c13"),Object(p["a"])(te,Q,X,!1,null,"2aee6cba",null)),ae=ne.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"base-content"},[n("DevIdentifierTag",{attrs:{tagName:"BaseContent",index:e.index}}),n("h1",[e._v(e._s(e.head))]),n("p",[e._v(e._s(e.block))])],1)},re=[],oe={name:"BaseContent",components:{DevIdentifierTag:S},props:{index:Number,head:String,block:String}},se=oe,ce=(n("17a4"),Object(p["a"])(se,ie,re,!1,null,"85bd1274",null)),le=ce.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"last-action"},[n("DevIdentifierTag",{attrs:{tagName:"LastAction"}}),n("div",{staticClass:"la-container"},e._l(e.panels,function(t,a){return n("div",{key:a,staticClass:"la-panel"},[n("h3",[e._v(e._s(t.title))]),n("p",[e._v(e._s(t.description))]),n("ul",e._l(t.features,function(t,a){return n("li",{key:a},[e._v(e._s(t))])}),0),n("button",[e._v(e._s(t.actionCall))])])}),0)],1)},de=[],fe={name:"LastAction",components:{DevIdentifierTag:S},props:{panels:Array}},pe=fe,he=(n("bef8"),Object(p["a"])(pe,ue,de,!1,null,"9b723f84",null)),ve=he.exports,ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"meta"}},["Home"!=e.subTitle?n("vue-headful",{attrs:{title:e.title+" - "+e.subTitle}}):n("vue-headful",{attrs:{title:e.title}})],1)},me=[],be={name:"Meta",components:{},props:{title:String,subTitle:String,description:String,keywords:String,image:String,lang:String,ogLocale:String,url:String}},_e=be,we=(n("686b"),Object(p["a"])(_e,ge,me,!1,null,"3b0d43da",null)),ke=we.exports,ye={name:"Home",components:{Header:K,Action:ae,BaseContent:le,LastAction:ve,Meta:ke},props:{title:String},data:function(){return{subTitle:"Home",description:"Home of Arjay | Codes",contents:[{head:"Selling Points",block:"List selling points of Arjay Codes here"},{head:"Marketplace Highlights",block:"Showcase certain aspects of the Arjay Codes marketplace"},{head:"Flat Rate Services",block:"Detail the different types of services that are provided at a flat rate."}],lastActionPanels:[{title:"Hire Arjay|Codes",description:"Description summarizing why you should hire Arjay|Codes",features:["feature one","feature two","feature red","feature blue"],actionCall:"Hire Me"},{title:"Join Arjay|Codes",description:"Description summarizing why developers/designers/artists should partner with Arjay|Codes.",features:["feature one","feature two","feature red","feature blue"],actionCall:"Join Me"}]}}},je=ye,xe=Object(p["a"])(je,q,W,!1,null,"dbea4052",null),Ee=xe.exports,Oe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ae=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],Se={name:"about",data:function(){return{}}},Te=Se,Ce=Object(p["a"])(Te,Oe,Ae,!1,null,null,null),Le=Ce.exports,$e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Register")],1)},Ne=[],Ie=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},De=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Registration Page")])])}],He={},Pe=He,ze=Object(p["a"])(Pe,Ie,De,!1,null,"2e12500d",null),Me=ze.exports,Re={name:"Registration",components:{Register:Me}},Fe=Re,Be=Object(p["a"])(Fe,$e,Ne,!1,null,"2161f956",null),Ve=Be.exports,qe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},We=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("br"),n("div",{attrs:{id:"image-frame"}},[n("img",{attrs:{src:"https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif"}})]),n("h1",[e._v("Page Not Found")])])}],Je={},Ue=Je,Ye=(n("3ead"),Object(p["a"])(Ue,qe,We,!1,null,"d09dff7e",null)),Ze=Ye.exports,Ge=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ke=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("br"),n("div",{attrs:{id:"image-frame"}},[n("img",{attrs:{src:"https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif"}})]),n("h1",[e._v("Sorry, An unknown error has occurred. :(")])])}],Qe={},Xe=Qe,et=(n("73df"),Object(p["a"])(Xe,Ge,Ke,!1,null,"186185a8",null)),tt=et.exports,nt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"col-md-2"},[n("img",{staticClass:"rounded-circle img-fluid profile-picture",attrs:{src:e.profile.picture,alt:"User's profile picture"}})]),n("div",{staticClass:"col-md"},[n("h2",[e._v(e._s(e.profile.name))]),n("p",[e._v(e._s(e.profile.email))])]),n("br"),n("div",{staticClass:"row"},[n("h1",[e._v("Auth0 Profile")]),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],staticClass:"rounded"},[n("code",{staticClass:"json"},[e._v(e._s(JSON.stringify(e.profile,null,2)))])])]),n("br")])},at=[],it=(n("bc3a"),{name:"user",components:{},mounted:function(){},data:function(){return{profile:this.$auth.profile,info:this.info,patchedProfile:this.patchedProfile}},methods:{handleLoginEvent:function(e){this.profile=e.profile}}}),rt=it,ot=(n("4293"),Object(p["a"])(rt,nt,at,!1,null,"2ff45674",null)),st=ot.exports,ct=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},lt=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"spinner"},[a("img",{attrs:{src:n("4045"),alt:"Loading"}})])}],ut={methods:{handleLoginEvent:function(e){this.$router.push(e.state.target||"/")}},created:function(){this.$auth.handleAuthentication()}},dt=ut,ft=(n("0236"),Object(p["a"])(dt,ct,lt,!1,null,"1e7af01e",null)),pt=ft.exports,ht=n("0a0d"),vt=n.n(ht),gt=n("795b"),mt=n.n(gt),bt=n("d225"),_t=n("b0b4"),wt=n("308d"),kt=n("6bb5"),yt=n("013f"),jt=n("4e2b"),xt=n("bd86"),Et=n("b0af"),Ot=n("faa1"),At=n("8160"),St=new Et["a"].WebAuth({domain:At.domain,redirectUri:"".concat(window.location.origin,"/callback"),clientID:At.clientId,responseType:"id_token",scope:"openid profile email"}),Tt="loggedIn",Ct="loginEvent",Lt=function(e){function t(){var e,n;Object(bt["a"])(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return n=Object(wt["a"])(this,(e=Object(kt["a"])(t)).call.apply(e,[this].concat(i))),Object(xt["a"])(Object(yt["a"])(n),"idToken",null),Object(xt["a"])(Object(yt["a"])(n),"profile",null),Object(xt["a"])(Object(yt["a"])(n),"tokenExpiry",null),n}return Object(jt["a"])(t,e),Object(_t["a"])(t,[{key:"login",value:function(e){St.authorize({appState:e})}},{key:"logOut",value:function(){localStorage.removeItem(Tt),this.idToken=null,this.tokenExpiry=null,this.profile=null,St.logout({returnTo:"".concat(window.location.origin)}),this.emit(Ct,{loggedIn:!1})}},{key:"handleAuthentication",value:function(){var e=this;return new mt.a(function(t,n){St.parseHash(function(a,i){a?n(a):(e.localLogin(i),t(i.idToken))})})}},{key:"isAuthenticated",value:function(){return vt()()<this.tokenExpiry&&"true"===localStorage.getItem(Tt)}},{key:"isIdTokenValid",value:function(){return this.idToken&&this.tokenExpiry&&vt()()<this.tokenExpiry}},{key:"getIdToken",value:function(){var e=this;return new mt.a(function(t,n){e.isIdTokenValid()?t(e.idToken):e.isAuthenticated()?e.renewTokens().then(function(e){t(e.idToken)},n):t()})}},{key:"localLogin",value:function(e){this.idToken=e.idToken,this.profile=e.idTokenPayload,this.tokenExpiry=new Date(1e3*this.profile.exp),localStorage.setItem(Tt,"true"),this.emit(Ct,{loggedIn:!0,profile:e.idTokenPayload,state:e.appState||{}})}},{key:"renewTokens",value:function(){var e=this;return new mt.a(function(t,n){if("true"!==localStorage.getItem(Tt))return n("Not logged in");St.checkSession({},function(a,i){a?n(a):(e.localLogin(i),t(i))})})}}]),t}(Ot["EventEmitter"]),$t=new Lt;$t.setMaxListeners(5);var Nt=$t;a["default"].use(V["a"]);var It=new V["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:Ee},{path:"/about",name:"about",component:Le},{path:"/register",name:"registration",component:Ve},{path:"/user",name:"user",component:st},{path:"/callback",name:"callback",component:pt},{path:"/unknown-error",name:"unknown-error",component:tt},{path:"*",name:"404",component:Ze}]}),Dt=["/user","/admin","/invoice","/dashboard","/scheduling"];It.beforeEach(function(e,t,n){if(Nt.isAuthenticated()||!Dt.includes(e.path))return n();Nt.login({target:e.path})});var Ht=It,Pt=n("2f62");a["default"].use(Pt["a"]);var zt=new Pt["a"].Store({state:{},mutations:{},actions:{}}),Mt=n("ce5b"),Rt=n.n(Mt),Ft=n("ec02"),Bt=n.n(Ft),Vt={install:function(e){e.prototype.$auth=Nt,e.mixin({created:function(){this.handleLoginEvent&&Nt.addListener("loginEvent",this.handleLoginEvent)},destroyed:function(){this.handleLoginEvent&&Nt.removeListener("loginEvent",this.handleLoginEvent)}})}},qt=(n("ac6a"),n("a70e")),Wt=n.n(qt),Jt=n("5ad2"),Ut=n.n(Jt);n("6e2e");Wt.a.registerLanguage("json",Ut.a);var Yt={deep:!0,bind:function(e,t){var n=e.querySelectorAll("code");n.forEach(function(e){t.value&&(e.textContent=t.value),Wt.a.highlightBlock(e)})},componentUpdated:function(e,t){var n=e.querySelectorAll("code");n.forEach(function(e){t.value&&(e.textContent=t.value,Wt.a.highlightBlock(e))})}},Zt=n("ecee"),Gt=n("c074"),Kt=n("ad3d"),Qt=n("9483");Object(Qt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("bf40");Zt["b"].watch(),a["default"].config.productionTip=!0,Zt["d"].add(Gt["a"]),a["default"].use(Rt.a),a["default"].use(Vt),a["default"].directive("highlightjs",Yt),a["default"].component("vue-headful",Bt.a),a["default"].component("font-awesome-icon",Kt["a"]),new a["default"]({router:Ht,store:zt,render:function(e){return e(B)}}).$mount("#app")},"5ef3":function(e,t,n){},"686b":function(e,t,n){"use strict";var a=n("1f52"),i=n.n(a);i.a},"70aa":function(e,t,n){},"73df":function(e,t,n){"use strict";var a=n("a6b7"),i=n.n(a);i.a},8122:function(e,t,n){"use strict";var a=n("5ef3"),i=n.n(a);i.a},8160:function(e){e.exports={domain:"arjay-codes.auth0.com",clientId:"qSmMyNNVxep1mkvtZ1hSHQXNHeK7hxlb"}},"97b1":function(e,t,n){"use strict";var a=n("f50d"),i=n.n(a);i.a},a005:function(e,t,n){},a6b7:function(e,t,n){},bef8:function(e,t,n){"use strict";var a=n("da54"),i=n.n(a);i.a},c4ae:function(e,t,n){},cec1:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},da54:function(e,t,n){},dacc:function(e,t,n){},ecfe:function(e,t,n){},f14e:function(e,t,n){},f50d:function(e,t,n){}});
//# sourceMappingURL=app.77c1aa44.js.map