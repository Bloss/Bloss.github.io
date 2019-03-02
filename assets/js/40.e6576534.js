(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{88:function(t,e,s){"use strict";s.r(e);var h=s(3),a=Object(h.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),s("p",[t._v("首先，看了一下代码块区域的dom结构\n"),s("img",{attrs:{src:"https://blog-1252181333.cos.ap-shanghai.myqcloud.com/blog/hexo-highlight-1.png",alt:""}}),t._v("\n发现代码区域的关键字的"),s("code",[t._v("class")]),t._v("为"),s("code",[t._v("keyword")])]),t._v(" "),s("p",[t._v("然后，发现"),s("code",[t._v("highlight")]),t._v("官网给出样式是下图这样的\n"),s("img",{attrs:{src:"https://blog-1252181333.cos.ap-shanghai.myqcloud.com/blog/hexo-highlight-2.png",alt:""}})]),t._v(" "),s("p",[t._v("对比发现，我的"),s("code",[t._v("class")]),t._v("少了"),s("code",[t._v("hljs-")]),t._v("前缀，这样问题就很清晰了")]),t._v(" "),s("h3",{attrs:{id:"思考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思考","aria-hidden":"true"}},[t._v("#")]),t._v(" 思考")]),t._v(" "),s("p",[t._v("这段"),s("code",[t._v("markdown")]),t._v("代码是如何转换成"),s("code",[t._v("html")]),t._v("格式的呢，只要我们发现了转换的代码，\n在其中加上这个前缀，问题不就解决了吗？")]),t._v(" "),s("h3",{attrs:{id:"解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),s("p",[t._v("查询了相关资料，发现了 hexo 的一个 issue : "),s("a",{attrs:{href:"https://github.com/hexojs/hexo/issues/434",target:"_blank",rel:"noopener noreferrer"}},[t._v("#434"),s("OutboundLink")],1),t._v("，其中提供这么一段代码"),s("code",[t._v("hljs.configure({classPrefix: ''})")]),t._v("，"),s("a",{attrs:{href:"https://github.com/hexojs/hexo-util/blob/master/lib/highlight.js#L8-L10",target:"_blank",rel:"noopener noreferrer"}},[t._v("highlight.js"),s("OutboundLink")],1),t._v("，发现它就在"),s("code",[t._v("node_modules/hexo-util/lib/highlight.js")]),t._v("下，这段代码可以给我们的 code css 加上一个前缀，那么这个问题就解决了。")]),t._v(" "),s("p",[t._v("当我调试的时候，发现仍然没有高亮，原因是我们并没有引入"),s("code",[t._v("highlight.js")]),t._v("的高亮 css 文件，\n果然在 head 中引入 css 后，起作用了，代码高亮了，真是令人高兴的消息！")]),t._v(" "),s("p",[t._v("接下来，我又想定制高亮主题，我们可以在"),s("code",[t._v("_config.yml")]),t._v("文件中配置主题，从而在 head 中引入相关的 css 文件，这样就可以起到了定制主题的作用。")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("在 css 文件夹中引入 highlight 的全部主题 css 文件")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("head：")])])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('    <% if (theme.highlight_theme){ %>\n        <link rel="stylesheet" href="<%- config.root %>css/highlight/<%- theme.highlight_theme %>.css">\n    <% } %>\n')])])]),s("ul",[s("li",[s("strong",[t._v("_config:")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("    highlight_theme: atom-one-dark\n")])])]),s("h3",{attrs:{id:"完"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完","aria-hidden":"true"}},[t._v("#")]),t._v(" 完~")])])},[],!1,null,null,null);a.options.__file="hexo-highlight.md";e.default=a.exports}}]);