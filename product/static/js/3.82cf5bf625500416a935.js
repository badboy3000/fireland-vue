webpackJsonp([3],{"162o":function(t,e,n){(function(t){var a=void 0!==t&&t||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(o.call(setTimeout,a,arguments),clearTimeout)},e.setInterval=function(){return new i(o.call(setInterval,a,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(a,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n("mypn"),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(e,n("DuR2"))},"1BYJ":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=u(n("Xxa5")),o=u(n("exGp")),i=u(n("Dd8w")),r=(u(n("IcnI")),n("162o")),s=(n("Ya8g"),n("NYxO")),c=n("2uFj");n("OMJi");function u(t){return t&&t.__esModule?t:{default:t}}var l={accounts:[c.network]};e.default={name:"landGame",components:{Header:function(){return n.e(15).then(n.bind(null,"XKUF"))},Land:function(){return n.e(10).then(n.bind(null,"qVof"))},Betting:function(){return n.e(11).then(n.bind(null,"QFuG"))},Rule:function(){return n.e(14).then(n.bind(null,"Aak8"))},Footer:function(){return n.e(16).then(n.bind(null,"fGEy"))},Fab:function(){return n.e(9).then(n.bind(null,"BeiJ"))},popup:function(){return n.e(8).then(n.bind(null,"6vT6"))}},props:{},data:function(){return{popVisible:!0,iconBack:"",iconContent:"https://gw.alicdn.com/tfs/TB1iZ03nHrpK1RjSZTEXXcWAVXa-884-876.jpg",popTitle:"持有土地即分红 ，右下角签到领LEN币",popText:"加官方微信群了解详细"}},created:function(){var t=this;document.addEventListener("scatterLoaded",function(){console.log("Scatter Loaded"),t.handleScatterLoaded()})},mounted:function(){(new Date).getTime()<15415056e5?this.popVisible=!0:this.popVisible=!1,this.handleScatterLoaded(),(0,r.setInterval)(this.getGameData,1e3)},computed:(0,i.default)({},(0,s.mapState)(["identity","scatter","eos","balance","lenInfo","landInfo","gameInfo"]),(0,s.mapGetters)(["account"]),{getManifest:function(){return this.landInfo.manifestoMap.has(this.landInfo.emperor.account)?this.landInfo.manifestoMap.get(this.landInfo.emperor.account):""}}),methods:(0,i.default)({},(0,s.mapActions)(["initScatter","setIdentity","updateBalance","setGameInfo","setLandInfo","getTouzhuInfo","getGameBalance","recastLand","withdraw"]),{handleScatterLoaded:function(){var t=window.scatter;this.initScatter(t),this.requestId(),this.getGameData()},getGameData:function(){var t=this;return(0,o.default)(a.default.mark(function e(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.setGameInfo(),t.setLandInfo(),t.getTouzhuInfo();case 3:case"end":return e.stop()}},e,t)}))()},requestId:function(){var t=this;return(0,o.default)(a.default.mark(function e(){var n;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.suggestNetworkSetting();case 2:return e.next=4,t.scatter.getIdentity(l);case 4:n=e.sent,t.setIdentity(n);case 6:case"end":return e.stop()}},e,t)}))()},forgetId:function(){var t=this;return(0,o.default)(a.default.mark(function e(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.scatter.forgetIdentity();case 2:t.setIdentity(null);case 3:case"end":return e.stop()}},e,t)}))()},suggestNetworkSetting:function(){var t=this;return(0,o.default)(a.default.mark(function e(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.scatter.suggestNetwork(c.network);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.info("User canceled to suggestNetwork");case 8:case"end":return e.stop()}},e,t,[[0,5]])}))()},getPersonalInviteUrl:function(){if(this.account)return"http://www.lemonfun.io/#/game/land?ref="+this.account.name},popLandCick:function(){var t=this;return(0,o.default)(a.default.mark(function e(){return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},getinfo:function(){var t="";this.account&&(t=this.account.name),location.href="https://www.lemonfun.io/#/?ref="+t},doCopy:function(){var t="EOS 国土无双，我的土地我称雄，邀请好友享受永久分红，我的邀请链接："+this.getPersonalInviteUrl();this.$copyText(t).then(function(t){console.log(t)},function(t){alert("Can not copy"),console.log(t)}),this.dialogVisible=!1}})}},Cx4Z:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("1BYJ"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);var r=n("DeAF");var s=function(t){n("HTTD")},c=n("VU/8")(o.a,r.a,!1,s,"data-v-48c95712",null);e.default=c.exports},Dd8w:function(t,e,n){"use strict";e.__esModule=!0;var a,o=n("woOf"),i=(a=o)&&a.__esModule?a:{default:a};e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}},DeAF:function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-body"},[n("div",{staticClass:"main-container"},[n("Header",{attrs:{account:t.account,date:"2019"},on:{requestId:t.requestId}}),t._v(" "),n("div",{staticClass:"ad_title"},[t._v("赢取LEN，永不折价的TOKEN！每日21点分红！\n    "),n("el-button",{staticClass:"land-withdraw-btn",attrs:{type:"text",onstyle:"float: right; padding: 3px 0"},on:{click:t.getinfo}},[t._v("查看详情")])],1),t._v(" "),n("div",{staticClass:"pool-emperor"},[n("div",{staticClass:"pool-emperor-title"},[t._v(" 宣言："+t._s(t.landInfo.manifestoEmpor))]),t._v(" "),n("div",{staticClass:"pool-emperor-balance"},[n("div",{staticClass:"pool-today-emperor"},[t._v(" 当前地王："+t._s(t.landInfo.emperor.account)+"，拥有国土"+t._s(t.landInfo.emperor.num)+"万公里 ")]),t._v(" "),n("div",{staticClass:"pool-manifesto"},[t._v(" 地王独享666 LEN奖励(21点快照)")])])]),t._v(" "),n("div",{staticClass:"pool-box"},[n("div",{staticClass:"pool-title"},[t._v(" 当前奖池金额 /  今日每块地分红（21点快照） / 累积分红 ")]),t._v(" "),n("div",{staticClass:"pool-balance"},[t._v("\n      "+t._s(t.landInfo.poolBalace)+"EOS/ "+t._s(t.gameInfo.todayBonus)+"EOS /  42.99EOS\n    ")])]),t._v(" "),n("Betting",{attrs:{balance:t.balance,landInfo:t.landInfo,account:t.account,game:t.gameInfo}})],1),t._v(" "),t._m(0),t._v(" "),n("Land",{attrs:{landInfo:t.landInfo,account:t.account}}),t._v(" "),n("Rule",{attrs:{landInfo:t.landInfo}}),t._v(" "),n("Footer"),t._v(" "),n("Fab",{attrs:{account:t.account}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"land-intro"},[e("div",{staticClass:"land-info-title"},[this._v(" \n       —— 永续合约 ——\n     ")]),this._v(" "),e("div",{staticClass:"land-info-sub-title"},[this._v("\n       所有土地永久售价1 EOS，每次买入玩家可以自由选择成功率，最低0.1，最高0.95。\n       买入成功将获取奖励，并占有土地，例如 0.1胜率, 1 EOS 成功将立即获取8.85 EOS奖励，并持有土地。\n       0.7%资金进入LEN池（0.35%增发归用户所有，0.35%增值LEN池），0.2%团队开发资金，0.1%推荐人奖励。\n       每天21点按持有土地数量进行分红（分得当前资金池的 1/3 ）。\n       用户可向系统卖出自己持有的地块，每块地块系统将向其返还0.5EOS，即扣除一半手续费。\n       为保护土地持有者利益，20:30 至 20:55，最大成功概率为70%，20:55至21:00最大概率为50%\n     ")])])}]};e.a=a},HTTD:function(t,e){},R4wc:function(t,e,n){var a=n("kM2E");a(a.S+a.F,"Object",{assign:n("To3L")})},To3L:function(t,e,n){"use strict";var a=n("lktj"),o=n("1kS7"),i=n("NpIQ"),r=n("sB3e"),s=n("MU5D"),c=Object.assign;t.exports=!c||n("S82l")(function(){var t={},e={},n=Symbol(),a="abcdefghijklmnopqrst";return t[n]=7,a.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=a})?function(t,e){for(var n=r(t),c=arguments.length,u=1,l=o.f,f=i.f;c>u;)for(var d,p=s(arguments[u++]),m=l?a(p).concat(l(p)):a(p),v=m.length,h=0;v>h;)f.call(p,d=m[h++])&&(n[d]=p[d]);return n}:c},V3tA:function(t,e,n){n("R4wc"),t.exports=n("FeBl").Object.assign},mypn:function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var a,o,i,r,s,c=1,u={},l=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?a=function(t){e.nextTick(function(){m(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((i=new MessageChannel).port1.onmessage=function(t){m(t.data)},a=function(t){i.port2.postMessage(t)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,a=function(t){var e=f.createElement("script");e.onreadystatechange=function(){m(t),e.onreadystatechange=null,o.removeChild(e),e=null},o.appendChild(e)}):a=function(t){setTimeout(m,0,t)}:(r="setImmediate$"+Math.random()+"$",s=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(r)&&m(+e.data.slice(r.length))},t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),a=function(e){t.postMessage(r+e,"*")}),d.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return u[c]=o,a(c),c++},d.clearImmediate=p}function p(t){delete u[t]}function m(t){if(l)setTimeout(m,0,t);else{var e=u[t];if(e){l=!0;try{!function(t){var e=t.callback,a=t.args;switch(a.length){case 0:e();break;case 1:e(a[0]);break;case 2:e(a[0],a[1]);break;case 3:e(a[0],a[1],a[2]);break;default:e.apply(n,a)}}(e)}finally{p(t),l=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n("DuR2"),n("W2nU"))},woOf:function(t,e,n){t.exports={default:n("V3tA"),__esModule:!0}}});