(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{83:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 场景")]),t._v(" "),a("p",[t._v("图中的两种动画有什么区别")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://blog-1252181333.cossh.myqcloud.com/blog/css-anmiation-carbon.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),a("p",[t._v("第一种动画并不会动, 因为 "),a("code",[t._v("top")]),t._v(", "),a("code",[t._v("left")]),t._v(" 值并没有发生变化")]),t._v(" "),a("p",[t._v("第二种动画会动, 因为 "),a("code",[t._v("translate")]),t._v(" 是计算偏移值")]),t._v(" "),a("p",[t._v("那如果我们把第一种动画改成下面这样")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" move")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("50%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("现在这两种动画还有什么区别呢?\b 哪个性能好?")])]),t._v(" "),a("p",[t._v("我们先了解两个概念,"),a("code",[t._v("回流(reflow)")]),t._v(" "),a("code",[t._v("重绘(repaint)")])]),t._v(" "),a("p",[a("code",[t._v("reflow")]),t._v(": 当元素的几何属性("),a("code",[t._v("height")]),t._v(", "),a("code",[t._v("width")]),t._v(" 等等)发生变化时, 相关元素都会重新渲染, 这个过程叫做回流")]),t._v(" "),a("p",[a("code",[t._v("repaint")]),t._v(": 当元素只需要更新样式属性, 而不影响布局的时候(比如换个背景色), 页面只会重绘这单个元素, 这个过程叫做重绘")]),t._v(" "),a("p",[t._v("那么我们看上面的场景, 第一种动画, 在发生回流操作, 第二种动画只是在重绘, 当然这个场景, 元素是绝对定位, 只会引起自己的重绘, 不会引起页面其他部分重新布局.")]),t._v(" "),a("p",[t._v("当我们设计一个动画的时候, 最好使用 "),a("code",[t._v("transform")]),t._v(" 去实现, 因为 "),a("code",[t._v("transform")]),t._v(" 不会发生回流, 我们还可以为此开启硬件加速, 当发生 "),a("code",[t._v("3D")]),t._v(" 转换的时候, 浏览器会开启硬件加速, 我们可以为此做一个小 trick")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" move")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("50%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100px, 300px, 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 引起 3d 变换, 开启硬件加速 */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("硬件加速的开启也是比较耗性能的, 移动端尤其明显, 当我们开启硬件加速的时候, 最好为元素人为加上较高的 "),a("code",[t._v("z-index")]),t._v(" 属性, 原因见"),a("a",{attrs:{href:"https://w3ctrain.com/2015/12/15/smoother-animation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://w3ctrain.com/2015/12/15/smoother-animation/"),a("OutboundLink")],1)])])])},[],!1,null,null,null);e.options.__file="css-animation-performance.md";s.default=e.exports}}]);