webpackJsonp([13],{"1jjd":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e,r=a("IcnI");(e=r)&&e.__esModule;n.default={ready:function(){},props:["game","landInfo","balance","account"],data:function(){return{rule:"## 游戏介绍\n### 玩法\n* 游戏板块为20×20的地图，每一格代表一块地皮，每块地皮初始定价0.5eos，其中有2块为黑地皮没定价（作用下面解析）；\n* 玩家自定金额下注买地，系统随机一块地皮进行购买判断；\n* 每轮游戏初定3天，用户投注不增加游戏结束时间\n### 购买判断：\n* 情况1、地皮为黑地皮，获取jackpot奖池奖励；\n* 情况2、地皮为玩家自身地皮，玩家扣除20%地皮标价手续费升级该地皮（地皮标价翻倍）；\n* 情况3、玩家下注金额大于等于地皮标价，玩家按照地皮标价买入该地皮，地皮标价翻倍，买入金额扣除25%手续费后归原地皮拥有者所有；\n* 情况4、玩家下注金额小于地皮标价，地皮买入失败，且扣除玩家下注金额30%作过路费，过路费扣除50%手续费后归地皮持有者所有。\n### 黑地皮作用：\n* 获取jackpot奖池一半奖金。\n### 游戏结束\n* 持有地皮数量最多的玩家，获得jackpot及累计奖池的所有奖金；\n* 前十名累计下注玩家，获取下轮游戏的10个广告位。",border:!1}},methods:{}}},Aak8:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("1jjd"),r=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(n,t,function(){return e[t]})}(s);var l=a("M+5R");var _=function(t){a("YCEr")},v=a("VU/8")(r.a,l.a,!1,_,null,null);n.default=v.exports},"M+5R":function(t,n,a){"use strict";var e={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"land-len-security"},[a("div",{staticClass:"touzhu-table",attrs:{id:"touzhu-table"}},[a("h3",{staticClass:"security-title "},[t._v("\n                投注风云榜\n            ")]),t._v(" "),a("el-table",{attrs:{data:t.landInfo.touzhuRows}},[a("el-table-column",{attrs:{prop:"logtime",label:"时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"player",label:"玩家"}}),t._v(" "),a("el-table-column",{attrs:{prop:"amount",label:"金额"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"投注情况"}})],1)],1),t._v(" "),a("span",{staticClass:"land-len-security-title",attrs:{id:"rule"}},[t._v("游戏规则")]),t._v(" "),t._m(0),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"land-adt_grids"},[a("h3",{staticClass:"land-security-title text-center"},[t._v("EOS 国土无双游戏玩法")]),t._v(" "),a("h4",[t._v("一、玩法介绍 ")]),t._v(" "),a("p",[t._v("\n                游戏板块为145格大小的地图，每一格代表一块地皮，每块地皮初始定价 1eos，其中有2块为黑地皮（作用下面解析）；\n            ")]),t._v(" "),a("p",[t._v("\n                玩家自定金额下注买地，系统随机一块地皮进行购买判断；投注的金额大于实际买入金额，转入游戏内余额，可随时提现\n            ")]),t._v(" "),a("p",[t._v("\n                每轮游戏初定2天,投注不增加结束时长\n            ")]),t._v(" "),a("p",[t._v("\n                最低投标金额为全场地皮最低标价\n            ")]),t._v(" "),a("h4",[t._v("二、中标情况")]),t._v(" "),a("p",[t._v("\n               升级成功：投标地皮为买家自身地皮，若投注金额大于等于地皮标价，则免费升级地皮，地皮标价翻倍；\n            ")]),t._v(" "),a("p",[t._v("\n              升级失败：投标地皮为买家自身地皮，若投注金额小于地皮标价，升级地皮失败，但不扣除任何费用；\n            ")]),t._v(" "),a("p",[t._v(" \n              买入成功：买家投标金额大于等于地皮标价，买家买入该地皮成功，扣除买家地皮标价有效费用（剩余金额进入买家余额），地皮标价翻倍，地皮拥有者变更为买家； \n            ")]),t._v(" "),a("p",[t._v("\n              买入失败：买家投标金额小于地皮标价，买家买入地皮失败，扣除买家相对于中标地皮标价金额的50%有效费用（不足则全扣），地皮拥有者不变。\n            ")]),t._v(" "),a("h4",[t._v("\n                三、有效费用分配\n            ")]),t._v(" "),a("p",[t._v("\n               65%——原地皮持有者（买入成功，原地皮持有者获利30%出场；买入失败，原地皮拥有者获取该利润）；\n            ")]),t._v(" "),a("p",[t._v("\n               16%——累计奖池； \n            ")]),t._v(" "),a("p",[t._v("\n              9%——计入token池，一半增发token赠送给玩家，另外一半增值币价(详情参考token发行规则)。   \n            ")]),t._v(" "),a("p",[t._v("\n              8%——官方游戏开发运营费用。  \n            ")]),t._v(" "),a("p",[t._v("\n              2%——邀请人永久奖励   \n            ")]),t._v(" "),a("h4",[t._v("\n                四、游戏结束\n            ")]),t._v(" "),a("p",[t._v("\n               结束时，最终持有2块黑地皮的玩家均分累计奖池金额；\n            ")]),t._v(" "),a("h3",{staticClass:"land-security-title "},[t._v("\n                EOS 国土无双智能合约\n            ")]),t._v(" "),a("p",[t._v("\n              合约账号："),a("a",{attrs:{href:"",target:"_blank"}},[t._v("firelandgame")])]),t._v(" "),a("p",[t._v("\n              合约地址： "),a("a",{attrs:{href:"https://eospark.com/MainNet/contract/firelandgame",target:"_blank"}},[t._v("https://eospark.com/...firelandgame")])])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"land-footer"},[a("p",{staticClass:"land-footer-title"},[a("span",{staticClass:"land-footer-partner-title"},[t._v("友情合作伙伴")]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.mytokenpocket.vip/",target:"_blank"}},[a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1AoDWjxjaK1RjSZKzXXXVwXXa-300-55.png",width:"150"}})]),t._v("    \n            "),a("a",{attrs:{href:"https://meet.one",target:"_blank"}},[a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1LYfxjr2pK1RjSZFsXXaNlXXa-200-55.png",width:"150"}})]),t._v("    \n            "),a("a",{attrs:{href:"https://more.top",target:"_blank"}},[a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1UEYCjAvoK1RjSZFwXXciCFXa-200-55.png",width:"150"}})]),t._v("    \n            "),a("a",{attrs:{href:"http://www.mathwallet.org",target:"_blank"}},[a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1E4PBjrrpK1RjSZTEXXcWAVXa-150-46.png",width:"150"}})])]),t._v(" "),a("p",[t._v("请加入我们的官方电报群沟通交流")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1kWjCjCrqK1RjSZK9XXXyypXa-434-434.jpg",width:"100"}})]),t._v(" "),a("p",[t._v("2018@柠檬游戏团队")])])}]};n.a=e},YCEr:function(t,n){}});