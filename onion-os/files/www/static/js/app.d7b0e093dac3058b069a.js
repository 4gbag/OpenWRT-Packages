webpackJsonp([4],{"/6X2":function(t,e){},"/nOM":function(t,e){},"0EBt":function(t,e){},"0Zpu":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("J7JO"),s=n("po9y"),o=n("uscc"),i=n("hNqL"),r=n("c27y"),c={mqtt:{"#":function(t,e){console.log("topic: "+e+", msg: "+t),this.$store.dispatch("mqttMessage",{topic:e,data:t})}},name:"ConsoleFrame",data:function(){return{aboutActive:!1}},components:{TaskBar:a.default,AppView:s.default,LoginView:o.default,Toast:i.default,About:r.default},created:function(){this.$mqtt.subscribe("/console/+");var t=function(t){t&&"offline"===t.type?this.$store.commit("updateInternetStatus",!1):this.$store.dispatch("checkInternet")}.bind(this);t(),window.addEventListener("online",t),window.addEventListener("offline",t),this.$store.dispatch("launchApp",{appId:"launcher"}),this.$store.dispatch("getDeviceInfo"),this.$store.dispatch("initCDK"),this.$store.dispatch("refreshAppList")}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"consoleframe"},[n("TaskBar",{attrs:{id:"taskbar","solid-bg":"launcher"!==t.$store.getters.activeApp},on:{about:function(e){t.aboutActive=!0}}}),t._v(" "),n("AppView"),t._v(" "),n("LoginView"),t._v(" "),n("Toast"),t._v(" "),n("About",{attrs:{active:t.aboutActive},on:{close:function(e){t.aboutActive=!1}}})],1)},staticRenderFns:[]};var u=n("VU/8")(c,p,!1,function(t){n("btE+")},"data-v-08845405",null);e.default=u.exports},Dwvv:function(t,e){},E4d3:function(t,e,n){var a={"./About":["c27y"],"./About.vue":["c27y"],"./AppLauncher":["LyiH",2],"./AppLauncher.vue":["LyiH",2],"./AppView":["po9y"],"./AppView.vue":["po9y"],"./ConsoleFrame":["0Zpu"],"./ConsoleFrame.vue":["0Zpu"],"./ExternalApp":["//Yz",0],"./ExternalApp.vue":["//Yz",0],"./IframeApp":["xSqd"],"./IframeApp.vue":["xSqd"],"./LoginView":["uscc"],"./LoginView.vue":["uscc"],"./PreferencesApp":["9P2q",1],"./PreferencesApp.vue":["9P2q",1],"./TaskBar":["J7JO"],"./TaskBar.vue":["J7JO"],"./Toast":["hNqL"],"./Toast.vue":["hNqL"]};function s(t){var e=a[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}s.keys=function(){return Object.keys(a)},s.id="E4d3",t.exports=s},IbZh:function(t,e){},J7JO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"TaskBar",props:{solidBg:!0},data:function(){return{hoverApp:""}},methods:{onHome:function(){this.$store.dispatch("launchApp",{appId:"launcher"})},openApp:function(t){this.$store.dispatch("launchApp",{appId:t})},closeApp:function(t){console.log(t),this.$store.dispatch("closeApp",{appId:t}),window.event.cancelBubble="true",this.hoverApp=""},logout:function(){this.$store.dispatch("logout",{})},about:function(){this.$emit("about")}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"taskbar barAlign",class:{solidBg:t.solidBg}},[n("div",{staticClass:"taskBarStart barAlign"},[n("div",{staticClass:"starticon c-hand",on:{click:t.onHome}},[n("img",{attrs:{src:"static/img/icons/onion.svg",alt:""}})])]),t._v(" "),n("div",{staticClass:"taskBarBody barAlign"},t._l(t.$store.getters.runningApps,function(e){return n("div",{key:e.id,staticClass:"appIconContainer tooltip tooltip-dir",attrs:{"data-tooltip":e.name},on:{click:function(n){t.openApp(e.id)},mouseover:function(n){t.hoverApp=e.id},mouseout:function(e){t.hoverApp=""}}},[n("img",{staticClass:"appIcon",attrs:{src:e.icon}}),t._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:t.hoverApp===e.id,expression:"hoverApp === app.id"}],staticClass:"icon icon-cross closeBtn c-hand",on:{click:function(n){t.closeApp(e.id)}}})])})),t._v(" "),n("div",{staticClass:"taskBarEnd barAlign"},[t.$store.getters.isOnline?t._e():n("div",{staticClass:"tooltip tooltip-dir",attrs:{"data-tooltip":"No Internet. Some Apps may not work"}},[n("i",{staticClass:"icon icon-stop no-wifi-icon"})]),t._v(" "),n("div",{staticClass:"tooltip tooltip-dir",attrs:{"data-tooltip":"About"},on:{click:t.about}},[n("i",{staticClass:"icon icon-message taskbar-icon c-hand"})]),t._v(" "),n("div",{staticClass:"tooltip tooltip-dir",attrs:{"data-tooltip":"Logout"},on:{click:t.logout}},[n("i",{staticClass:"icon icon-shutdown taskbar-icon c-hand"})])])])},staticRenderFns:[]};var o=n("VU/8")(a,s,!1,function(t){n("Dwvv")},"data-v-2001fef7",null);e.default=o.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=(n("i8c9"),n("Wq+4"),n("G0B7")),o=n.n(s),i=n("BO1k"),r=n.n(i),c=n("//Fk"),p=n.n(c),u=n("NYxO"),d=n("mtWM"),l=n.n(d);l.a.defaults.headers.post["Content-Type"]="application/json";var m=function(t,e,n,a,s){return new p.a(function(o,i){l.a.post(t,{jsonrpc:"2.0",id:0,method:"call",params:[e,n,a,s]}).then(function(t){t.data&&(t.data.result&&Array.isArray(t.data.result)&&void 0!==t.data.result[0]&&0===t.data.result[0]?o(t.data.result[1]):(console.log("ubus error!"),t.data.error?i(t.data.error):t.data.result&&Array.isArray(t.data.result)&&void 0!==t.data.result[0]&&i(t.data.result[0])))}).catch(function(t){console.error(t),i(t)})})},v={AccessDenied:-32002},f=n("4P7o"),h=n.n(f);a.a.use(u.a),window.console.makeId=function(){return Math.random().toString(36).substring(2)};Object({NODE_ENV:"production"}).DEV_HOST;var g="http://"+window.location.hostname,b="00000000000000000000000000000000",_=new u.a.Store({state:{system:{online:!1},device:{},rpc:{username:"",password:"",token:sessionStorage.getItem("_onion_console_session_token")||b,url:"http://"+window.location.hostname+"/ubus"},mqtt:{subscription:{}},apps:{active:"launcher",running:[],available:{launcher:{id:"launcher",type:"AppLauncher",name:"Launcher",background:!0},"doc-app":{id:"doc-app",type:"IframeApp",name:"Onion Docs",icon:"static/img/icons/docs.svg",params:{url:"https://docs.onion.io",internet:!0}},"terminal-app":{id:"terminal-app",type:"IframeApp",name:"Terminal",icon:"static/img/icons/terminal.svg",params:{url:"http://"+window.location.hostname+":4200"}},"editor-app":{id:"editor-app",type:"IframeApp",name:"Code Editor",icon:"static/img/icons/code.svg",params:{url:"/apps/editor/"}},"legacy-console-app":{id:"legacy-console-app",type:"ExternalApp",name:"Legacy Console",icon:"static/img/icons/old-console-app.svg",params:{url:"/console"}}}}},mutations:{registerUser:function(t,e){var n=e.username,a=e.password;t.rpc.username=n,t.rpc.password=a},registerSession:function(t,e){e?(t.rpc.token=e,sessionStorage.setItem("_onion_console_session_token",e)):(t.rpc.token=b,sessionStorage.removeItem("_onion_console_session_token"))},registerAppHandler:function(t,e,n){},launchApp:function(t,e){for(var s=t.apps.available[e],o=!1,i=0;i<t.apps.running.length;i++){if(t.apps.running[i].id===s.id){o=!0;break}}o||(t.apps.running.push(s),"IframeApp"!==s.type&&a.a.component(s.type,function(){return n("E4d3")("./"+s.type)})),t.apps.active=e},closeApp:function(t,e){for(var n=0;n<t.apps.running.length;n++){if(t.apps.running[n].id===e){t.apps.running.splice(n,1);break}}},updateInternetStatus:function(t,e){t.system.online=e},mqttSubscribe:function(t,e){var n=e.appUid,a=e.topic;a in t.mqtt.subscription?t.mqtt.subscription[a].push(n):t.mqtt.subscription[a]=[n],console.log(t.mqtt.subscription)},deviceInfo:function(t,e){t.device=e},updateAppList:function(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.type=s.type||"IframeApp",s.icon=g+"/apps/"+s.id+"/"+s.icon,s.params=s.params||{},"IframeApp"!==s.type&&void 0!==s.params.url||(s.params.url=g+"/apps/"+s.id),a.a.set(t.apps.available,s.id,s)}}},actions:{login:function(t,e){var n=t.commit,a=t.state,s=t.dispatch,o=e.username,i=e.password;return new p.a(function(t,e){m(a.rpc.url,a.rpc.token,"session","login",{username:o,password:i}).then(function(e){n("registerUser",{username:o,password:i}),n("registerSession",e.ubus_rpc_session),s("getDeviceInfo"),s("refreshAppList"),t(e)}).catch(function(t){console.log("login failed"),e(t)})})},logout:function(t){var e=t.commit;e("registerUser",{username:"",password:""}),e("registerSession",null)},getDeviceInfo:function(t){var e=t.commit,n=(t.state,t.dispatch);t.getters.isAuthenticated&&n("request",{object:"system",method:"board",params:{}}).then(function(t){e("deviceInfo",t)})},request:function(t,e){t.commit;var n=t.state,a=t.dispatch,s=t.getters,o=e.object,i=e.method,r=e.params;return new p.a(function(t,e){s.isAuthenticated?m(n.rpc.url,n.rpc.token,o,i,r).then(function(e){t(e)}).catch(function(t){console.log(t),t&&t.code===v.AccessDenied&&(a("logout"),console.toast("Session expired")),e(t)}):e(Error("Not authenticated"))})},launchApp:function(t,e){(0,t.commit)("launchApp",e.appId)},closeApp:function(t,e){var n=t.commit;t.state;n("closeApp",e.appId),n("launchApp","launcher")},notifyApp:function(t,e){t.commit;var n=e.appUid,a=e.eventId,s=e.data;console.log("on notify app");var o=new Event("app-"+n);o.data={content:s},o.name=a,window.dispatchEvent(o)},checkInternet:function(t){var e=t.commit;h()().then(function(t){e("updateInternetStatus",t)})},initCDK:function(t){var e=t.dispatch;window.addEventListener("message",function(t){var n=t.data;if(void 0!==n.event&&void 0!==n.instance&&void 0!==n.eventId&&void 0!==n.content&&n.event.indexOf("Onion.CDK")>-1)switch(n.event.replace("Onion.CDK.","")){case"Service":e("handleService",n).then(function(t){var e=new Event("app-"+n.instance);e.data={content:{command:n.content.command,name:n.content.service,result:t}},e.name=n.event,window.dispatchEvent(e)});break;case"Subscribe":e("mqttSubscribe",{topic:n.content.topic,appUid:n.instance});break;case"Command":e("handleCommand",{cmd:n.content.cmd,params:n.content.params}).then(function(t){e("notifyApp",{appUid:n.instance,eventId:"Onion.CDK.Command",data:{cmd:n.content.cmd,resp:t.stdout}})});break;default:console.log("unrecognized CDK event: "+n.event)}},!1)},handleService:function(t,e){var n=t.dispatch;return new p.a(function(t,a){"start"===e.content.command||"stop"===e.content.command?n("request",{object:"file",method:"exec",params:{command:"/etc/init.d/"+e.content.service,params:[e.content.command]}}).then(function(e){t(!0)}).catch(function(e){t(!1)}):"list"===e.content.command?n("serviceStatus").then(function(n){n[e.content.service]?t(!0):t(!1)}):a(Error("Invalid input"))})},serviceStatus:function(t){return(0,t.dispatch)("request",{object:"service",method:"list",params:{}})},handleCommand:function(t,e){var n=t.dispatch,a=e.cmd,s=e.params;return console.log("handle Command"),n("request",{object:"file",method:"exec",params:{command:a,params:s}})},mqttSubscribe:function(t,e){var n=t.commit;t.dispatch;n("mqttSubscribe",{appUid:e.appUid,topic:e.topic})},mqttMessage:function(t,e){var n=t.state,a=e.topic,s=e.data;if(a in n.mqtt.subscription){var o=!0,i=!1,c=void 0;try{for(var p,u=r()(n.mqtt.subscription[a]);!(o=(p=u.next()).done);o=!0){var d=p.value,l=new Event("app-"+d);l.data={content:{topic:a,content:s.toString()}},l.name="Onion.CDK.Message",window.dispatchEvent(l)}}catch(t){i=!0,c=t}finally{try{!o&&u.return&&u.return()}finally{if(i)throw c}}}},refreshAppList:function(t){var e=t.getters,n=t.commit,a=t.dispatch;e.isAuthenticated&&a("request",{object:"onion-os",method:"app-list",params:{}}).then(function(t){t.exists&&n("updateAppList",t.apps)})}},getters:{isAuthenticated:function(t){return t.rpc.token!==b},isOnline:function(t){return t.system.online},sessionToken:function(t){return t.rpc.token},requestUrl:function(t){return t.rpc.url},activeApp:function(t){return t.apps.active},runningApps:function(t){for(var e=[],n=0;n<t.apps.running.length;n++){var a=t.apps.running[n];void 0===a.background&&e.push(a)}return e},availableApps:function(t){var e=[];for(var n in t.apps.available){var a=t.apps.available[n];void 0===a.background&&e.push(a)}return e},deviceInfo:function(t){return t.device}}}),A={name:"App",components:{ConsoleFrame:n("0Zpu").default},created:function(){}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("ConsoleFrame")],1)},staticRenderFns:[]};var C=n("VU/8")(A,w,!1,function(t){n("aTEp")},null,null).exports;a.a.config.productionTip=!1;Object({NODE_ENV:"production"}).DEV_HOST;a.a.use(o.a,"ws://"+window.location.hostname+":9001"),new a.a({el:"#app",store:_,components:{App:C},template:"<App/>"})},"Wq+4":function(t,e){},"ZsM+":function(t,e){},aTEp:function(t,e){},"btE+":function(t,e){},c27y:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal modal-sm",class:{active:t.active}},[n("a",{staticClass:"modal-overlay",on:{click:t.close}}),t._v(" "),n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[n("a",{staticClass:"btn btn-clear float-right",on:{click:t.close}})]),t._v(" "),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("div",{staticClass:"about-text"},[t._v("\n          OS version: 1.0\n          "),n("br"),t._v("\n          Kernel: "+t._s(t.$store.getters.deviceInfo.kernel)+"\n          "),n("br"),t._v(" "),n("br"),t._v("\n          Device: "+t._s(t.$store.getters.deviceInfo.hostname)+"\n          "),n("br"),t._v("\n          Model: "+t._s(t.$store.getters.deviceInfo.model)+"\n        ")])])]),t._v(" "),n("div",{staticClass:"modal-footer"},[t._v("\n      © 2018 Onion Corpration All Rights Reserved.\n    ")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about-image"},[e("img",{attrs:{src:"static/img/OnionOS.svg",alt:""}})])}]};var s=n("VU/8")({name:"About",props:{active:!0},methods:{close:function(){this.$emit("close")}}},a,!1,function(t){n("0EBt")},"data-v-246997fc",null);e.default=s.exports},hNqL:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"Toast",data:function(){return{toastList:[]}},props:{timeout:{type:Number,default:10}},created:function(){window.console.toast=this.makeToast},methods:{makeId:function(){return Math.random().toString(36).substring(2)},makeToast:function(t,e){var n={title:e,message:t,id:this.makeId(),value:100};this.toastList.push(n);var a=setInterval(function(){var t=this.toastList.indexOf(n);if(-1!==t){var e=this.toastList[t];e.value-=1,e.value<=0&&(clearInterval(a),this.close(t))}else clearInterval(a)}.bind(this),1e3*this.timeout/100)},close:function(t){this.toastList.splice(t,1)}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toastPanel"},[n("transition-group",{attrs:{name:"list"}},t._l(t.toastList,function(e,a){return n("div",{key:e.id,staticClass:"toast toast-item"},[n("button",{staticClass:"btn btn-clear float-right",on:{click:function(e){t.close(a)}}}),t._v(" "),e.title?n("h6",[t._v("Title")]):t._e(),t._v("\n      "+t._s(e.message)+"\n      "),n("div",{staticClass:"bar bar-sm"},[n("div",{staticClass:"bar-item",style:{width:e.value+"%"}})])])}))],1)},staticRenderFns:[]};var o=n("VU/8")(a,s,!1,function(t){n("/nOM")},"data-v-f4677de0",null);e.default=o.exports},i8c9:function(t,e){},po9y:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"AppView",components:{IframeApp:n("xSqd").default},data:function(){return{}},methods:{closeApp:function(t){}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"appview"},t._l(t.$store.state.apps.running,function(e){return n(e.type,{directives:[{name:"show",rawName:"v-show",value:e.id===t.$store.state.apps.active,expression:"app.id === $store.state.apps.active"}],key:e.id,tag:"component",attrs:{params:e.params}})}))},staticRenderFns:[]};var o=n("VU/8")(a,s,!1,function(t){n("IbZh")},"data-v-60532d25",null);e.default=o.exports},uscc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"LoginView",data:function(){return{username:"",password:""}},methods:{login:function(){console.log("on login"),console.log(this.username,this.password),this.$store.dispatch("login",{username:this.username,password:this.password})}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal modal-sm",class:{active:!t.$store.getters.isAuthenticated}},[n("div",{staticClass:"modal-container"},[t._m(0),t._v(" "),n("div",{staticClass:"modal-body",on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null}}},[n("div",{staticClass:"form-group"},[n("label",{staticClass:"form-label",attrs:{for:"input-username"}},[t._v("Username")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-input",attrs:{type:"text",id:"input-username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{staticClass:"form-label",attrs:{for:"input-password"}},[t._v("Password")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-input",attrs:{type:"password",id:"input-password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-success loginButton",on:{click:t.login}},[t._v("Login")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("img",{attrs:{src:"static/img/OnionOS.svg"}})])}]};var o=n("VU/8")(a,s,!1,function(t){n("/6X2")},"data-v-751bd3a2",null);e.default=o.exports},xSqd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"IframeApp",data:function(){return{AppUid:console.makeId()}},computed:{listenerUid:function(){return"app-"+this.AppUid}},props:{params:{},loaded:!1},methods:{onLoad:function(){var t=this.$refs[this.AppUid];window.addEventListener(this.listenerUid,function(e){t.contentWindow.postMessage({event:e.name,content:e.data.content},"*")},!1),t.contentWindow.postMessage({event:"Onion.CDK.Init",appUid:this.AppUid},"*")}},created:function(){console.log("created")}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frameview"},[!t.$store.getters.isOnline&&t.params.internet?n("div",{staticClass:"empty"},[t._m(0),t._v(" "),n("p",{staticClass:"empty-title h5"},[t._v("This App require Internet Connection")]),t._v(" "),n("p",{staticClass:"empty-subtitle"},[t._v("Please make shure your computer is connected to the Internet")])]):t._e(),t._v(" "),t.$store.getters.isOnline||!t.params.internet?n("iframe",{ref:t.AppUid,attrs:{src:t.params.url,width:"100%",height:"100%",frameBorder:"0"},on:{load:t.onLoad}}):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"empty-icon"},[e("i",{staticClass:"icon icon-cross"})])}]};var o=n("VU/8")(a,s,!1,function(t){n("ZsM+")},"data-v-b1504994",null);e.default=o.exports}},["NHnr"]);
//# sourceMappingURL=app.d7b0e093dac3058b069a.js.map