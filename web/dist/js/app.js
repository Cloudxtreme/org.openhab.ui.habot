webpackJsonp([1],{117:function(t,e){},119:function(t,e){},120:function(t,e,a){"use strict";function i(t){a(121)}Object.defineProperty(e,"__esModule",{value:!0});var o=a(122),n=a(123),s=a(2),r=i,c=s(o.a,n.a,!1,r,"data-v-cad49406",null);e.default=c.exports},121:function(t,e){},122:function(t,e,a){"use strict";var i,o,n=a(1);e.a={components:{QLayout:n.x,QFixedPosition:n.p,QToolbar:n.K,QToolbarTitle:n.L,QBtn:n.g,QCard:n.h,QCardTitle:n.m,QCheckbox:n.o,QCardSeparator:n.l,QCardActions:n.i,QIcon:n.q,QInput:n.r,QList:n.y,QListHeader:n.z,QItem:n.s,QItemSeparator:n.u,QItemSide:n.v,QItemMain:n.t,QRange:n.B,QRadio:n.A,QSlider:n.G,QTabs:n.J,QRouteTab:n.C,QSideLink:n.F,QChatMessage:n.n,QSpinnerRadio:n.I},data:function(){return{text:"",inputAfter:[{icon:"arrow_send",content:!0,handler:this.send}],startSpeak:!0,stopSpeak:!1,speakLoader:!1,speakResult:!1,speakError:!1,speakTextResult:"",speakGoogleApiKey:null,speakData:{audio:{content:null},config:{encoding:"LINEAR16",languageCode:null}}}},methods:{send:function(){n.c.$emit("chat-send",this.text),this.$q.platform.is.mobile&&event.currentTarget.blur(),this.text=""},keyUp:function(t){13===t.keyCode&&this.send()},scrollToBottom:function(){var t=this.$refs.app;window.setTimeout(function(){t.scrollTop=t.scrollHeight})},startRecording:function(){try{if(this.speakResult=!1,i=new AudioContext,console.log("Audio context set up"),this.speakGoogleApiKey=n.e.get.item("habot.googleApiKey"),!this.speakGoogleApiKey)return void n.M.create.negative({html:"The Google API Key is not set.",icon:"mic off"});var t=this;navigator.mediaDevices.getUserMedia({audio:!0}).then(function(e){var a=i.createMediaStreamSource(e);o=new Recorder(a,{numChannels:1}),t.startSpeak=!1,t.stopSpeak=!0,o&&o.record(),setTimeout(function(){t.stopRecording()},1e4)}).catch(function(t){n.M.create.negative({html:"No live audio input: "+t,icon:"mic off"})})}catch(t){throw n.M.create.negative({html:"This browser has no support for web audio",icon:"mic off"}),t}},stopRecording:function(t,e){o&&o.stop(),this.speakLoader=!0,this.processRecording(e),o.clear()},processRecording:function(t){var e=this;o&&o.exportWAV(function(a){var i=new window.FileReader;i.readAsDataURL(a),i.onloadend=function(){var a=i.result,o=a.replace("data:audio/wav;base64,","");e.speakData.audio.content=o,e.speakData.config.languageCode="fr",e.$http.post("https://speech.googleapis.com/v1/speech:recognize?key="+e.speakGoogleApiKey,e.speakData).then(function(a){if(a.data.results){var i=a.data.results[0].alternatives[0];n.c.$emit("chat-send",i.transcript)}e.startSpeak=!0,e.stopSpeak=!1,e.speakResult=!0,t&&t()}).catch(function(a){e.speakError=!0,e.startSpeak=!0,e.stopSpeak=!1,e.speakResult=!1,n.M.create.negative({html:a,icon:"mic off"}),t&&t()})}})}},created:function(){window.AudioContext=window.AudioContext||window.webkitAudioContext,navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia}}},123:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"app",attrs:{id:"q-app"}},[i("q-layout",{ref:"layout",attrs:{view:"lHh Lpr lFf","left-class":{"bg-grey-2":!0}}},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-btn",{attrs:{flat:""},on:{click:function(e){t.$refs.layout.toggleLeft()}}},[i("q-icon",{attrs:{name:"menu"}})],1),t._v(" "),i("q-toolbar-title",[t._v("\n        HABot\n      ")])],1),t._v(" "),i("div",{attrs:{slot:"left"},slot:"left"},[i("div",{staticClass:"logo"},[i("img",{attrs:{src:a(124),alt:"HABot"}})]),t._v(" "),i("q-list",{attrs:{link:"","inset-delimiter":""}},[i("q-side-link",{attrs:{item:"",to:"/chat"}},[i("q-item-side",{attrs:{icon:"chat"}}),t._v(" "),i("q-item-main",{attrs:{label:"Chat with HABot"}})],1),t._v(" "),i("q-item-separator"),t._v(" "),i("q-list-header",[t._v("My Cards")]),t._v(" "),i("q-side-link",{attrs:{item:"",to:"/cards/favorites"}},[i("q-item-side",{attrs:{icon:"bookmark"}}),t._v(" "),i("q-item-main",{attrs:{label:"Bookmarks"}})],1),t._v(" "),i("q-side-link",{attrs:{item:"",to:"/cards/recent"}},[i("q-item-side",{attrs:{icon:"history"}}),t._v(" "),i("q-item-main",{attrs:{label:"Recent"}})],1),t._v(" "),i("q-side-link",{attrs:{item:"",to:"/cards/deck"}},[i("q-item-side",{attrs:{icon:"dashboard"}}),t._v(" "),i("q-item-main",{attrs:{label:"Card deck"}})],1),t._v(" "),i("q-item-separator"),t._v(" "),i("q-side-link",{attrs:{item:"",to:"/settings"}},[i("q-item-side",{attrs:{icon:"settings"}}),t._v(" "),i("q-item-main",{attrs:{label:"Settings"}})],1)],1)],1),t._v(" "),i("router-view",{staticClass:"layout-view"}),t._v(" "),"/"==t.$route.path||"/chat"==t.$route.path?i("q-fixed-position",{attrs:{corner:"bottom-right",offset:[18,18]}},[i("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.startSpeak,expression:"startSpeak"}],attrs:{round:"",color:"primary",icon:"mic"},on:{click:t.startRecording}}),t._v(" "),i("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.stopSpeak,expression:"stopSpeak"}],attrs:{round:"",loader:"",color:"red",icon:"mic off"},on:{click:t.stopRecording}},[i("q-spinner-radio",{attrs:{slot:"loading"},slot:"loading"})],1)],1):t._e(),t._v(" "),"/"==t.$route.path||"/chat"==t.$route.path?i("q-toolbar",{staticClass:"chat-input bg-grey-3",attrs:{slot:"footer"},slot:"footer"},[i("q-input",{ref:"input",staticClass:"full-width",attrs:{placeholder:"Ask me about your home",after:t.inputAfter},on:{keyup:t.keyUp},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1):t._e()],1)],1)},o=[],n={render:i,staticRenderFns:o};e.a=n},124:function(t,e){t.exports="data:image/png;base64,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"},22:function(t,e,a){"use strict";function i(t){a(49)}var o=a(50),n=a(57),s=a(2),r=i,c=s(o.a,n.a,!1,r,null,null);e.a=c.exports},23:function(t,e,a){"use strict";function i(t){a(53)}var o=a(54),n=a(55),s=a(2),r=i,c=s(o.a,n.a,!1,r,"data-v-626b088c",null);e.a=c.exports},38:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(18),o=a(1),n=a(43),s=a(96),r=a.n(s),c=a(115),l=a.n(c),u=a(118);a.n(u);a(39),i.a.config.productionTip=!1,i.a.use(o.O),i.a.prototype.$http=r.a,i.a.use(l.a),a(116),o.a.set("#ff6600"),new i.a({el:"#q-app",router:n.a,render:function(t){return t(a(120).default)}})},39:function(t,e){},43:function(t,e,a){"use strict";var i=a(18),o=a(44),n=a(45),s=a(59),r=a(92);i.a.use(o.a),e.a=new o.a({routes:[{path:"/",redirect:"/chat"},{path:"/chat",component:n.a,props:function(t){return{action:t.query.action}}},{path:"/notification",redirect:function(t){return{path:"/chat",hash:"",query:"",params:{action:t.hash}}}},{path:"/settings",component:s.a},{path:"/cards/deck",component:r.a}]})},45:function(t,e,a){"use strict";function i(t){a(46)}var o=a(47),n=a(58),s=a(2),r=i,c=s(o.a,n.a,!1,r,null,null);e.a=c.exports},46:function(t,e){},47:function(t,e,a){"use strict";var i=a(21),o=a.n(i),n=a(1),s=a(22);e.a={components:{QLayout:n.x,QToolbar:n.K,QToolbarTitle:n.L,QBtn:n.g,QCard:n.h,QCardTitle:n.m,QCheckbox:n.o,QCardSeparator:n.l,QCardActions:n.i,QIcon:n.q,QInput:n.r,QList:n.y,QListHeader:n.z,QItem:n.s,QItemSeparator:n.u,QItemSide:n.v,QItemMain:n.t,QRange:n.B,QRadio:n.A,QSlider:n.G,QTabs:n.J,QRouteTab:n.C,QChatMessage:n.n,QSpinnerDots:n.H,HbCard:s.a},data:function(){return{text:"",chats:[{messages:[],card:!1,finished:!1}],range:20,doubleRange:{min:10,max:35},option:"opt1",inputAfter:[{icon:"arrow_send",content:!0,handler:this.send}],language:null}},created:function(){var t=this,e=this;if(this.chatReceived=function(e){t.text=e,t.send()},this.$q.events.$on("chat-send",this.chatReceived),this.$route.redirectedFrom&&0===this.$route.redirectedFrom.indexOf("/notification#")){var a=this.$route.redirectedFrom.replace("/notification#","");return void this.pushNotificationReceived({data:a})}this.$http.get("/rest/habot/greet").then(function(t){e.language=t.data.language,e.language||(e.language="en"),e.chats[0].messages.push({id:new Date,name:"HABot",text:[t.data.answer],avatar:"statics/icons/icon-192x192.png",stamp:n.N.formatDate(new Date,"HH:mm")})}).catch(function(t){e.chats[0].messages.push({id:new Date,name:"HABot",text:[o()(t)],avatar:"statics/icons/icon-192x192.png",bgColor:"red",stamp:n.N.formatDate(new Date,"HH:mm")})})},mounted:function(){new MutationObserver(function(t){var e=document.getElementById("q-app");e.scrollTop=e.scrollHeight}).observe(this.$el,{childList:!0,subtree:!0}),navigator.serviceWorker&&navigator.serviceWorker.addEventListener("message",this.pushNotificationReceived)},methods:{pushNotificationReceived:function(t){var e=this.chats[this.chats.length-1];e.finished&&(this.chats.push({messages:[],card:null,finished:!1}),e=this.chats[this.chats.length-1]),e.messages.push({id:new Date,name:"HABot",text:[t.data],avatar:"statics/icons/icon-192x192.png",stamp:n.N.formatDate(new Date,"HH:mm")})},send:function(){var t=this,e=this.chats[this.chats.length-1];e.messages.push({id:new Date,name:"You",text:[this.text],avatar:"statics/avatar.png",sent:!0,stamp:n.N.formatDate(new Date,"HH:mm")}),this.$http.post("/rest/habot/chat",this.text,{headers:{"Content-Type":"text/plain","Accept-Language":this.language}}).then(function(a){a.data.answer&&e.messages.push({id:new Date,name:"HABot",text:[a.data.answer],avatar:"statics/icons/icon-192x192.png",stamp:n.N.formatDate(new Date,"HH:mm")}),a.data.card&&(e.card=a.data.card,e.finished=!0,t.chats.push({messages:[],card:null,finished:!1})),e.intent=a.data.intent}).catch(function(t){e.messages.push({id:new Date,name:"HABot",text:[o()(t)],avatar:"statics/icons/icon-192x192.png",bgColor:"red",stamp:n.N.formatDate(new Date,"HH:mm")})}),n.c.$emit("chat-added"),this.text="",this.$q.platform.is.mobile&&this.$refs.input.blur()},keyUp:function(t){13===t.keyCode&&(this.send(),this.$q.platform.is.mobile&&t.currentTarget.blur())}},beforeDestroyed:function(){this.$q.events.$off("chat-send",this.chatReceived),navigator.serviceWorker&&navigator.serviceWorker.removeEventListener("message",this.pushNotificationReceived)}}},49:function(t,e){},50:function(t,e,a){"use strict";var i=a(1),o=a(51);e.a={components:{QCard:i.h,QCardTitle:i.m,QCardMain:i.j,QCardMedia:i.k,QCardSeparator:i.l,QCardActions:i.i,HbList:o.a},props:["model"],data:function(){return{}}}},51:function(t,e,a){"use strict";var i=a(52),o=a(56),n=a(2),s=n(i.a,o.a,!1,null,null,null);e.a=s.exports},52:function(t,e,a){"use strict";var i=a(1),o=a(23);e.a={components:{QList:i.y,HbListItem:o.a},props:["model"],data:function(){return{}}}},53:function(t,e){},54:function(t,e,a){"use strict";var i=a(1),o=a(23);e.a={components:{QListHeader:i.z,QItem:i.s,QItemMain:i.t,QItemTile:i.w,QItemSide:i.v,QItemSeparator:i.u,HbListItem:o.a},props:["model"],data:function(){return{}}}},55:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{separator:""}},[a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[t._v(t._s(t.model.config.label))]),t._v(" "),a("q-item-tile",{staticClass:"q-card-subtitle"},[t._v(t._s(t.model.config.item))])],1),t._v(" "),a("q-item-side",{attrs:{right:""}},[a("big",{staticClass:"big-value"},[t._v(t._s(t.model.config.state))])],1)],1)},o=[],n={render:i,staticRenderFns:o};e.a=n},56:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-list",t._l(t.model.slots.main.components,function(t){return a("hb-list-item",{key:t,attrs:{model:t}})}))},o=[],n={render:i,staticRenderFns:o};e.a=n},57:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"bigger",attrs:{inline:""}},[t.model.imageUri?a("q-card-media",[a("img",{attrs:{src:t.model.imageUri}})]):t._e(),t._v(" "),a("q-card-title",[a("span",[t._v(t._s(t.model.title))]),t._v(" "),t.model.subtitle?a("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v(t._s(t.model.subtitle))]):t._e(),t._v(" "),t.model.slots&&t.model.slots.right?a("div",{attrs:{slot:"right"},slot:"right"},t._l(t.model.slots.right.components,function(e){return a("div",{key:e},["HbSingleItemValue"==e.name?a("big",{staticClass:"big-value"},[t._v(t._s(e.config.state))]):t._e()],1)})):t._e()]),t._v(" "),t.model.slots&&t.model.slots.list&&t.model.slots.list.components&&"HbList"==t.model.slots.list.components[0].name?a("hb-list",{attrs:{model:t.model.slots.list.components[0]}}):t._e()],1)},o=[],n={render:i,staticRenderFns:o};e.a=n},58:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-padding",staticStyle:{"max-width":"600px","margin-top":"100px"}},t._l(t.chats,function(e){return a("div",{key:e,ref:"chat",refInFor:!0,staticClass:"chat-area"},[t._l(e.messages,function(t){return a("q-chat-message",{key:t,attrs:{label:t.label,sent:t.sent,"text-color":t.textColor,"bg-color":t.bgColor,name:t.name,avatar:t.avatar,text:t.text,stamp:t.stamp}})}),t._v(" "),e.card&&"HbCard"===e.card.name?a("hb-card",{attrs:{model:e.card}}):t._e(),t._v(" "),e.card&&"HbDumpIntentCard"===e.card.name?a("q-card",[a("q-card-title",[t._v("\n        Intent: "+t._s(e.intent.name)+"\n        "),a("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v("Sorry, this intent is currently unsupported :(")])]),t._v(" "),a("q-list",[a("q-list-header",[t._v("Entities")]),t._v(" "),t._l(e.intent.entities,function(e,i){return a("q-item",{key:e,attrs:{link:"",tag:"label"}},[a("q-item-main",{attrs:{label:i}}),t._v(" "),a("q-item-side",{attrs:{right:""}},[a("big",[t._v(t._s(e))])],1)],1)})],2)],1):t._e()],2)}))},o=[],n={render:i,staticRenderFns:o};e.a=n},59:function(t,e,a){"use strict";var i=a(60),o=a(91),n=a(2),s=n(i.a,o.a,!1,null,null,null);e.a=s.exports},60:function(t,e,a){"use strict";function i(t){for(var e="=".repeat((4-t.length%4)%4),a=(t+e).replace(/-/g,"+").replace(/_/g,"/"),i=window.atob(a),o=new Uint8Array(i.length),n=0;n<i.length;++n)o[n]=i.charCodeAt(n);return o}var o=a(61),n=a.n(o),s=a(21),r=a.n(s),c=a(1);e.a={components:{QAlert:c.f,QBtn:c.g,QList:c.y,QListHeader:c.z,QItem:c.s,QItemMain:c.t,QItemSide:c.v,QItemTile:c.w,QRadio:c.A},data:function(){return{speechApi:"google"}},methods:{setGoogleApiKey:function(){c.b.create({title:"Set the Google Cloud API key",message:'You need to subscribe to the (paid) Google Cloud Platform to use this feature.<br />There is a trial period and a free tier, which might be enough for casual use.<br /><br /><ul><li>Go to <a target="_blank" href="https://console.cloud.google.com">console.cloud.google.com</a> and sign up or login</li><li>Create a project and set up a payment method for billing</li><li>Go to API &amp; Services</li><li>Enable the Cloud Speech API from the Library page</li><li>Go to the Credentials page and create an API key</li><li>Paste the API key below</li></ul>',form:{key:{type:"text",label:"Paste the API Key",model:""}},buttons:[{label:"Cancel",handler:function(){}},{label:"Set",handler:function(t){c.e.set("habot.googleApiKey",t.key),c.M.create("API Key Set for this device")}}]})},enableNotifications:function(){var t=this,e=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));return"serviceWorker"in navigator?"https:"===window.location.protocol||e?void navigator.serviceWorker.getRegistration().then(function(e){return"showNotification"in ServiceWorkerRegistration.prototype?"denied"===Notification.permission?(c.M.create.negative("Notifications are blocked - please check the browser's site settings"),void c.d.hide()):"PushManager"in window?void e.pushManager.getSubscription().then(function(a){var o=function(e){c.d.show({message:"Subscribing to notifications..."}),t.$http.post("/rest/habot/notifications/subscribe",r()(e),{headers:{"Content-Type":"text/plain"}}).then(function(t){c.M.create.positive("Success! You should receive a test notification!"),c.d.hide()}).catch(function(t){c.M.create.negative("Error while sending the subscription to the openHAB server: "+t),c.d.hide()})};c.d.show({message:"Initializing, please wait..."}),a?o(a):t.$http.get("/rest/habot/notifications/vapid").then(function(t){var a=i(t.data);c.d.show({message:"Preparing the subscription... Please allow the notifications if prompted!",delay:1e3}),e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:a}).then(function(t){o(t)}).catch(function(t){"denied"===Notification.permission?c.M.create.negative("Notifications are blocked - please check the browser's site settings"):c.M.create.negative("Error while subscribing to push notifications: "+t),c.d.hide()})}).catch(function(t){c.M.create.negative("Error while getting the public VAPID key from the server: "+t),c.d.hide()})}):(c.M.create.negative("Push messaging isn't supported."),void c.d.hide()):(c.M.create.negative("Notifications aren't supported."),void c.d.hide())}).catch(function(t){c.M.create.negative("Error while registering the service worker: "+t)}):void c.M.create.negative("Sorry, HTTPS is required for the notifications to work"):void c.M.create.negative("Sorry, notifications are not supported on this browser")},refreshApp:function(){c.b.create({title:"Refresh app",message:"This will empty the cache and reload the newest version of the app from the server. You will need to enable push notifications again. Continue?",buttons:[{label:"Cancel",handler:function(){}},{label:"OK",handler:function(){c.d.show({delay:0,message:"Refreshing the app..."}),setTimeout(function(){navigator.serviceWorker.getRegistrations().then(function(t){var e=!0,a=!1,i=void 0;try{for(var o,s=n()(t);!(e=(o=s.next()).done);e=!0){o.value.unregister()}}catch(t){a=!0,i=t}finally{try{!e&&s.return&&s.return()}finally{if(a)throw i}}location.reload()})},3e3)}}]})}}}},91:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-padding",staticStyle:{"max-width":"600px"}},[a("br"),t._v(" "),a("q-list",{attrs:{link:""}},[a("q-list-header",[t._v("Speech recognition API")]),t._v(" "),a("q-item",{attrs:{tag:"label"}},[a("q-item-side",[a("q-radio",{attrs:{val:"google"},model:{value:t.speechApi,callback:function(e){t.speechApi=e},expression:"speechApi"}})],1),t._v(" "),a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[t._v("Google Cloud Speech")]),t._v(" "),a("q-item-tile",{attrs:{sublabel:""}},[t._v("Uses Google services, requires an API key.")])],1),t._v(" "),a("q-item-side",{attrs:{right:""}},[a("q-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.setGoogleApiKey()}}},[t._v("Setup")])],1)],1),t._v(" "),a("q-item",{attrs:{tag:"label",disabled:""}},[a("q-item-side",[a("q-radio",{attrs:{val:"browser",disable:""},model:{value:t.speechApi,callback:function(e){t.speechApi=e},expression:"speechApi"}})],1),t._v(" "),a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[t._v("Browser built-in recognition")]),t._v(" "),a("q-item-tile",{attrs:{sublabel:""}},[t._v("Uses the browser functionality if supported (not implemented).")])],1)],1),t._v(" "),a("q-item",{attrs:{tag:"label",disabled:""}},[a("q-item-side",[a("q-radio",{attrs:{val:"browser",disable:""},model:{value:t.speechApi,callback:function(e){t.speechApi=e},expression:"speechApi"}})],1),t._v(" "),a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[t._v("Send to openHAB speech-to-text")]),t._v(" "),a("q-item-tile",{attrs:{sublabel:""}},[t._v("Sends the audio to openHAB for local processing (not implemented).")])],1)],1),t._v(" "),a("q-list-header",[t._v("Item tagging")]),t._v(" "),a("q-item",{attrs:{disabled:""}},[a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[t._v("View item tags")]),t._v(" "),a("q-item-tile",{attrs:{sublabel:""}},[t._v("View and set the tags associated with your items. (todo)")])],1)],1),t._v(" "),a("q-list-header",[t._v("Notifications")]),t._v(" "),a("q-item",{on:{click:t.enableNotifications}},[a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[t._v("Enable/test push notifications")]),t._v(" "),a("q-item-tile",{attrs:{sublabel:""}},[t._v("Subscribe to push notifications on this device, and check whether notifications are received.")])],1)],1),t._v(" "),a("q-list-header",[t._v("About")]),t._v(" "),a("q-item",{attrs:{disabled:""}},[a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[t._v("About HABot")])],1)],1),t._v(" "),a("q-item",{on:{click:t.refreshApp}},[a("q-item-main",[a("q-item-tile",{attrs:{label:""}},[t._v("Refresh the application")]),t._v(" "),a("q-item-tile",{attrs:{sublabel:""}},[t._v("Empty and refresh the application cache to upgrade the app.")])],1)],1)],1)],1)},o=[],n={render:i,staticRenderFns:o};e.a=n},92:function(t,e,a){"use strict";function i(t){a(93)}var o=a(94),n=a(95),s=a(2),r=i,c=s(o.a,n.a,!1,r,null,null);e.a=c.exports},93:function(t,e){},94:function(t,e,a){"use strict";var i=a(22),o=a(1);e.a={components:{HbCard:i.a,QToolbar:o.K,QSelect:o.E,QSearch:o.D,QInput:o.r},data:function(){return{objects:[],locations:[],options:[{label:"Google",value:"goog"},{label:"Facebook",value:"fb"},{label:"Twitter",value:"twtr"},{label:"Apple Inc.",value:"appl"},{label:"Oracle",value:"ora"}],modelJson:"{\n}",testModel:{imageUri:null,title:"Test",subtitle:"Subtitle"}}},computed:{cardModel:function(){try{return JSON.parse(this.modelJson)}catch(t){return{title:"Model error",subtitle:t.message}}}}}},95:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row filters"},[a("q-select",{staticClass:"col-sm-6",attrs:{multiple:"",filter:"",chips:"",color:"secondary",options:t.options,"float-label":"Filter objects"},model:{value:t.objects,callback:function(e){t.objects=e},expression:"objects"}}),t._v(" "),a("q-select",{staticClass:"col-sm-6",attrs:{multiple:"",filter:"",chips:"",color:"secondary",options:t.options,"float-label":"Filter locations"},model:{value:t.locations,callback:function(e){t.locations=e},expression:"locations"}})],1),t._v(" "),a("div",{staticClass:"layout-padding hb-cards"},[a("HbCard",{tag:"component",attrs:{model:t.cardModel}}),t._v(" "),a("q-input",{attrs:{type:"textarea","float-label":"Card Model","min-rows":7},model:{value:t.modelJson,callback:function(e){t.modelJson=e},expression:"modelJson"}})],1)])},o=[],n={render:i,staticRenderFns:o};e.a=n}},[38]);