webpackJsonp([14],{"0QXk":function(t,e){},"1jjd":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,l=n("IcnI"),r=((a=l)&&a.__esModule,n("oAV5"));e.default={ready:function(){},props:["game","landInfo","balance","account"],data:function(){return{rule:"## 游戏介绍\n### 玩法\n* 游戏板块为20×20的地图，每一格代表一块地皮，每块地皮初始定价0.5eos，其中有2块为黑地皮没定价（作用下面解析）；\n* 玩家自定金额下注买地，系统随机一块地皮进行购买判断；\n* 每轮游戏初定3天，用户投注不增加游戏结束时间\n### 购买判断：\n* 情况1、地皮为黑地皮，获取jackpot奖池奖励；\n* 情况2、地皮为玩家自身地皮，玩家扣除20%地皮标价手续费升级该地皮（地皮标价翻倍）；\n* 情况3、玩家下注金额大于等于地皮标价，玩家按照地皮标价买入该地皮，地皮标价翻倍，买入金额扣除25%手续费后归原地皮拥有者所有；\n* 情况4、玩家下注金额小于地皮标价，地皮买入失败，且扣除玩家下注金额30%作过路费，过路费扣除50%手续费后归地皮持有者所有。\n### 黑地皮作用：\n* 获取jackpot奖池一半奖金。\n### 游戏结束\n* 持有地皮数量最多的玩家，获得jackpot及累计奖池的所有奖金；\n* 前十名累计下注玩家，获取下轮游戏的10个广告位。",border:!1}},methods:{formatter:function(t,e){return(0,r.formatDate)(t.logtime)}}}},Aak8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("1jjd"),l=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var o=n("XGEr");var s=function(t){n("0QXk")},u=n("VU/8")(l.a,o.a,!1,s,null,null);e.default=u.exports},XGEr:function(t,e,n){"use strict";var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"land-len-security"},[n("div",{staticClass:"touzhu-table",attrs:{id:"touzhu-table"}},[n("h3",{staticClass:"security-title "},[t._v("\n                投注风云榜\n            ")]),t._v(" "),n("el-table",{staticClass:"bet-table",attrs:{"default-sort":{prop:"logtime",order:"descending"},data:t.landInfo.touzhuRows}},[n("el-table-column",{attrs:{sortable:"",prop:"logtime",label:"时间"}}),t._v(" "),n("el-table-column",{attrs:{prop:"player",label:"玩家"}}),t._v(" "),n("el-table-column",{attrs:{prop:"amount",label:"当前赢得金额"}}),t._v(" "),n("el-table-column",{attrs:{prop:"type",label:"投注情况"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"table-value"},[t._v(" "+t._s(e.row.type))])]}}])})],1)],1)])},staticRenderFns:[]};e.a=a}});