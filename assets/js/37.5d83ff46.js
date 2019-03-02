(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{85:function(e,v,_){"use strict";_.r(v);var t=_(3),i=Object(t.a)({},function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h3",{attrs:{id:"为什么比设计稿大了一倍？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么比设计稿大了一倍？","aria-hidden":"true"}},[e._v("#")]),e._v(" 为什么比设计稿大了一倍？")]),e._v(" "),_("p",[e._v("某日, 我拿到设计稿的时候, 在 "),_("code",[e._v("css")]),e._v(" 写下了 "),_("code",[e._v("width: 200; height: 200")]),e._v(", 运行, 尼玛怎么大了一倍？！！ 然后经过一下午我就写了这篇文章")]),e._v(" "),_("h3",{attrs:{id:"关于像素的几个概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于像素的几个概念","aria-hidden":"true"}},[e._v("#")]),e._v(" 关于像素的几个概念")]),e._v(" "),_("ul",[_("li",[e._v("设备像素 (dp)")])]),e._v(" "),_("p",[e._v("设备屏幕的物理像素 "),_("code",[e._v("device pixel")]),e._v("，简称 "),_("code",[e._v("dp")]),e._v("，任何设备的屏幕的物理像素都是不变的，单位为 "),_("code",[e._v("pt")])]),e._v(" "),_("ul",[_("li",[e._v("屏幕像素密度 (ppi)")])]),e._v(" "),_("p",[e._v("指屏幕表面上存在的像素数量 "),_("code",[e._v("pixel per inch")]),e._v("，简称 "),_("code",[e._v("ppi")]),e._v("， 通过每英寸有多少物理像素来计算, 单位是 "),_("code",[e._v("dpi")]),e._v(" ("),_("code",[e._v("dot per inch")]),e._v(")，不同的设备这个值是不一样的，理论来说，这个值越高越好，每英寸的图像就会更加清晰细腻")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("设 屏幕水平方向有 x 个物理像素，垂直方向有 y 个物理像素\n屏幕尺寸: 屏幕对角线的长度，单位英寸\n\nppi = (√x ^ 2 + y ^ 2) / 屏幕尺寸\n")])])]),_("p",[e._v("标准 "),_("code",[e._v("ppi")]),e._v(" 的值是 160， "),_("code",[e._v("ppi")]),e._v(" 值超过 "),_("code",[e._v("300")]),e._v(" 的屏幕被称为超高密度屏幕，苹果叫它 "),_("code",[e._v("Retina")]),e._v(" 屏。\n这里"),_("a",{attrs:{href:"https://www.sven.de/dpi/",target:"_blank",rel:"noopener noreferrer"}},[e._v("dpi"),_("OutboundLink")],1),e._v("可以查看更多设备的 "),_("code",[e._v("ppi")])]),e._v(" "),_("ul",[_("li",[e._v("设备像素比 (dpr)")])]),e._v(" "),_("p",[e._v("设备像素比 "),_("code",[e._v("device pixel ratio")]),e._v(" , 可以通过 "),_("code",[e._v("window.devicePixelRatio")]),e._v(" 获得")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("dpr = 设备像素 / 设备独立像素\n")])])]),_("p",[e._v("在标准 "),_("code",[e._v("ppi")]),e._v(" 也就是 "),_("code",[e._v("ppi = 160")]),e._v(" 的情况下，这个值等于 1，也就是一个设备独立像素等于一个设备像素, 但是在如今很多设备都是高 ppi 的情况下，"),_("code",[e._v("dpr")]),e._v(" 就不一定是 1 了，比如 "),_("code",[e._v("iPhone6")]),e._v(" 就是 2, "),_("code",[e._v("iPhone6s")]),e._v(" 就是 3。")]),e._v(" "),_("ul",[_("li",[e._v("设备独立像素 (dips)")])]),e._v(" "),_("p",[_("code",[e._v("device independent pixels")]),e._v(" 它其实是一种抽象出来的概念，单位是 "),_("code",[e._v("px")]),e._v("，这个名称可能不好理解，我们可以称呼它为 "),_("code",[e._v("设备无关像素")]),e._v(" 也就是跟设备无关的，是一种抽象概念，简称为 "),_("code",[e._v("dips")]),e._v("，可以通过 "),_("code",[e._v("screen.width/height")]),e._v(" 获得。")]),e._v(" "),_("p",[e._v("在 pc web 端，一般一个设备独立像素等于一个设备像素。在移动端那就不一定了，在移动端，设备的 "),_("code",[e._v("dpr")]),e._v(" 不是一致的，根据上面的公式，一个设备独立像素等于设备像素除以 "),_("code",[e._v("dpr")])]),e._v(" "),_("ul",[_("li",[e._v("css 像素")])]),e._v(" "),_("p",[e._v("没错，css 像素就是设备独立像素，他们与设备像素的区别在于：他们是可拉伸的，而设备像素是固定的，不变的。")]),e._v(" "),_("h3",{attrs:{id:"为什么会大了一倍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么会大了一倍","aria-hidden":"true"}},[e._v("#")]),e._v(" 为什么会大了一倍")]),e._v(" "),_("p",[e._v("设计稿是按 "),_("code",[e._v("iPhone6")]),e._v(" 来设计的, 而 "),_("code",[e._v("iPhone6")]),e._v(" 的 "),_("code",[e._v("dpr")]),e._v(" 为 2, 根据上面的公式，css 像素为物理像素的一半，这就解释了为什么会大了一倍")]),e._v(" "),_("h3",{attrs:{id:"viewport"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#viewport","aria-hidden":"true"}},[e._v("#")]),e._v(" viewport")]),e._v(" "),_("p",[e._v("这里有三个概念")]),e._v(" "),_("ul",[_("li",[e._v("visual viewport")])]),e._v(" "),_("p",[e._v("可视 viewport，也就是浏览器的视口")]),e._v(" "),_("ul",[_("li",[e._v("layout viewport")])]),e._v(" "),_("p",[e._v("布局 viewport，顾名思义，也就是我们写代码的时候，布局所使用视口")]),e._v(" "),_("ul",[_("li",[e._v("ideal viewport")])]),e._v(" "),_("p",[e._v("理想视口，通过 "),_("code",[e._v('<meta name="viewport" content="width=device-width,initial-scale=1">')]),e._v(" 设置，即可获得每个设备的 "),_("code",[e._v("ideal viewport")])]),e._v(" "),_("h3",{attrs:{id:"scale-是在缩放什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#scale-是在缩放什么","aria-hidden":"true"}},[e._v("#")]),e._v(" scale 是在缩放什么")]),e._v(" "),_("p",[e._v("浏览器的缩放很诡异，这个缩放系数跟 "),_("code",[e._v("visual viewport")]),e._v(" 的宽度成反比，缩放系数越大，"),_("code",[e._v("visual viewport")]),e._v(" 宽度越小，所以最小的缩放系数 "),_("code",[e._v("minimum-scale")]),e._v(" 决定了 "),_("code",[e._v("visual viewport")]),e._v(" 的最大宽度")]),e._v(" "),_("p",[e._v("我们有时候会发现不同设备上的 "),_("code",[e._v("1px")]),e._v(" 的粗细不一样，这就是因为他们的 "),_("code",[e._v("1px")]),e._v(" 所对应的设备像素不一样，要解决这个问题，设置 "),_("code",[e._v("scale = 1 / dpr")]),e._v(" 即可，事实上也可以根据这个特性来做适配，可以参考淘宝 "),_("a",{attrs:{href:"https://github.com/amfe/lib-flexible",target:"_blank",rel:"noopener noreferrer"}},[e._v("flexible"),_("OutboundLink")],1),e._v(" 方案")]),e._v(" "),_("h3",{attrs:{id:"吐槽"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#吐槽","aria-hidden":"true"}},[e._v("#")]),e._v(" 吐槽")]),e._v(" "),_("p",[e._v("总体来说这上面的概念还是有点多的，而且容易乱，如果能看完还保持清醒，那应该是搞懂了~")])])},[],!1,null,null,null);i.options.__file="device-scale.md";v.default=i.exports}}]);