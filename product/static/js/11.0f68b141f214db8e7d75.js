webpackJsonp([11],{"3PGg":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:["account"],ready:function(){},methods:{login:function(t){this.$emit("requestId")},toland:function(t){location.href="/game/land"}}}},QQd8:function(t,a,s){"use strict";var e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"box"},[s("div",{staticClass:"header-container"},[s("div",[s("b-img",{staticClass:"logo",attrs:{src:"https://img.alicdn.com/tfs/TB1HrKSjXzqK1RjSZFvXXcB7VXa-2000-2000.png"}}),t._v(" "),s("span",{staticClass:"logo-title"},[t._v("LemonFun")])],1),t._v(" "),s("div",{staticClass:"header-left"},[s("div",{staticClass:"header-nav hidden-sm-only hidden-xs-only"},[s("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#element",expression:"'#element'"}],staticClass:"text",attrs:{href:"#"}},[t._v("柠檬通证(LEN)")])]),t._v(" "),t.account?t._e():s("el-button",{staticClass:"login-button",attrs:{type:"danger"},on:{click:t.login}},[t._v("登录(EOS)账户")]),t._v(" "),t.account?s("div",{staticClass:"login-account-name",attrs:{type:"primary"}},[t._v(t._s(t.account.name))]):t._e()],1)]),t._v(" "),t._m(0),t._v(" "),s("el-row",[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"banner-game-item"},[s("span",{staticClass:"banner-game-title"},[t._v("EOS 国土无双")]),t._v(" "),s("img",{staticClass:"card-game-item-img",attrs:{src:"https://gw.alicdn.com/tfs/TB12sQ3lhnaK1RjSZFBXXcW7VXa-1378-1378.jpg"}}),t._v(" "),s("div",{staticClass:"card-game-item-img-cover"},[s("el-button",{staticClass:"game-entrance-btn",attrs:{type:"danger",size:"mini"},on:{click:t.toland}},[t._v("进入游戏")])],1)])]),t._v(" "),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"banner-game-item2"},[s("span",{staticClass:"banner-game-title"},[t._v("城堡寻宝")]),t._v(" "),s("img",{staticClass:"card-game-item-img",attrs:{src:"https://gw.alicdn.com/tfs/TB12sQ3lhnaK1RjSZFBXXcW7VXa-1378-1378.jpg"}}),t._v(" "),s("div",{staticClass:"card-game-item-img-cover"},[s("el-button",{staticClass:"game-entrance-btn",attrs:{type:"danger",size:"mini",disabled:""}},[t._v("comming")])],1)])])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"banner-cover"},[a("img",{staticClass:"card-img",attrs:{src:"https://gw.alicdn.com/tfs/TB1ys1OmVYqK1RjSZLeXXbXppXa-800-800.png"}})])}]};a.a=e},ge2a:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("3PGg"),n=s.n(e);for(var i in e)"default"!==i&&function(t){s.d(a,t,function(){return e[t]})}(i);var c=s("QQd8");var r=function(t){s("prI2")},l=s("VU/8")(n.a,c.a,!1,r,"data-v-7fcd8ad5",null);a.default=l.exports},prI2:function(t,a){}});