/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "aa03f5e5f6a3fec14a68ada8fb7792ed"
  },
  {
    "url": "about/index.html",
    "revision": "a43fba693a92132df51508d18f5f9295"
  },
  {
    "url": "assets/css/0.styles.34a91c01.css",
    "revision": "f285af0509f8a529d0808bae9d43cdb3"
  },
  {
    "url": "assets/img/404.9ed13bbe.svg",
    "revision": "9ed13bbe02debb8e23db19a4e6603c2e"
  },
  {
    "url": "assets/img/search.31b3b01d.svg",
    "revision": "31b3b01dc8c29f5bc57b98a8256c9951"
  },
  {
    "url": "assets/js/10.baf67a03.js",
    "revision": "644116cd81ab0d4cecd2d329d2d15cc6"
  },
  {
    "url": "assets/js/11.a13740a8.js",
    "revision": "e213a566e25c677abdb78b8f3bd2ecd4"
  },
  {
    "url": "assets/js/12.6cc92fa7.js",
    "revision": "3e61723864c103b7d0b2258ddc8faafb"
  },
  {
    "url": "assets/js/13.1cdbeaef.js",
    "revision": "95bc4c3e2cf329db4d4106c3949769a7"
  },
  {
    "url": "assets/js/14.d5d834e9.js",
    "revision": "863c0439a1e5d4e1689dccf820474cdc"
  },
  {
    "url": "assets/js/15.805ef48f.js",
    "revision": "52bd69d765c96ef0fc2f10217cb3909e"
  },
  {
    "url": "assets/js/16.e3b52258.js",
    "revision": "2de501ac2fe7c21043c52c08c3843d84"
  },
  {
    "url": "assets/js/17.34d59d24.js",
    "revision": "da43e83ce78ccec1ab196fa00397919d"
  },
  {
    "url": "assets/js/18.fa2ecf26.js",
    "revision": "5825f780b120b56407559830e566b70b"
  },
  {
    "url": "assets/js/19.4961866a.js",
    "revision": "affb6fd74c7ce22b30f802cca64e52cc"
  },
  {
    "url": "assets/js/20.3c1c87e5.js",
    "revision": "42d85eb2c5bae9e08ee56a97ae31aca5"
  },
  {
    "url": "assets/js/21.aa043244.js",
    "revision": "f93ac15abedd312759bbede5d53c2e01"
  },
  {
    "url": "assets/js/22.13396058.js",
    "revision": "a2f8d6848404f5e795e3904243bbdf68"
  },
  {
    "url": "assets/js/23.31c17ec9.js",
    "revision": "c3b602d8c114f767c5d2b732abd67096"
  },
  {
    "url": "assets/js/24.da6d0632.js",
    "revision": "602cfa845b4abd2ea26da26eceb5541d"
  },
  {
    "url": "assets/js/25.5aee987f.js",
    "revision": "fa5ff336a453fdad5b82579ae7acf931"
  },
  {
    "url": "assets/js/26.34ae77cc.js",
    "revision": "5a163e4bf8fa999b6b8dcdfdfedc330f"
  },
  {
    "url": "assets/js/27.22e77ad2.js",
    "revision": "976f134a56f5b2992178f0491aa41dc5"
  },
  {
    "url": "assets/js/28.0791c2de.js",
    "revision": "05bc1a50652f32e58103b88b3711ce2c"
  },
  {
    "url": "assets/js/29.151084cc.js",
    "revision": "ee13aa92c2f76ea8d84a2d03c9b3461a"
  },
  {
    "url": "assets/js/3.bab1f0f0.js",
    "revision": "7b76179ea62dace031530b8c763b5a40"
  },
  {
    "url": "assets/js/30.481d445c.js",
    "revision": "e6a032424b834d7b48be736ee11ef464"
  },
  {
    "url": "assets/js/31.ae717d71.js",
    "revision": "7756786c50e45e34190ec3ed86d209fc"
  },
  {
    "url": "assets/js/32.6d96e455.js",
    "revision": "253642aa2f682b27430a1fda7426c9c5"
  },
  {
    "url": "assets/js/33.93be09ed.js",
    "revision": "96dc8d66f2d7bd761f3d2b5209d3ce3a"
  },
  {
    "url": "assets/js/34.3248a274.js",
    "revision": "e7d2e02b3656039b4c3af229ee39d92e"
  },
  {
    "url": "assets/js/35.3358949a.js",
    "revision": "d6a88e1c592350ff605112b061ad171d"
  },
  {
    "url": "assets/js/36.f8b52798.js",
    "revision": "6120d8e8153f311991cdc99083f5bb60"
  },
  {
    "url": "assets/js/37.5d83ff46.js",
    "revision": "09ce6466f674311ebb26440a168de458"
  },
  {
    "url": "assets/js/38.46661fc3.js",
    "revision": "d69510d60bb0a37eeee2c3585dbbba65"
  },
  {
    "url": "assets/js/39.919f2516.js",
    "revision": "99a120adc914f869f5314e940f858515"
  },
  {
    "url": "assets/js/4.610a8c2d.js",
    "revision": "454e9d80c2498c49f2bbe3116cb4aaba"
  },
  {
    "url": "assets/js/40.e6576534.js",
    "revision": "226e84b853c7276385a60490da6b64af"
  },
  {
    "url": "assets/js/41.854d77d2.js",
    "revision": "47790d43c6795734d90004345bd39cc5"
  },
  {
    "url": "assets/js/42.037b500c.js",
    "revision": "5fc157a6d01f14e4748559737d93a041"
  },
  {
    "url": "assets/js/43.e3f14e0f.js",
    "revision": "ccf602aeb56c0eeb08af3b3df81a75ea"
  },
  {
    "url": "assets/js/44.4811b2aa.js",
    "revision": "453e9a312d05c150b2b0138381ead46d"
  },
  {
    "url": "assets/js/45.7e30bfc6.js",
    "revision": "86c28b9ed7e03ca241aa3f1ddc59923a"
  },
  {
    "url": "assets/js/46.020cd520.js",
    "revision": "4f7c61a2c302035ee8993c4a3354b352"
  },
  {
    "url": "assets/js/47.80b606a6.js",
    "revision": "a59a1c7494faa954ad62fb602ca0cefa"
  },
  {
    "url": "assets/js/48.d217fec0.js",
    "revision": "00cd729d6ccb5401889a000601e7f904"
  },
  {
    "url": "assets/js/49.4bdc60f4.js",
    "revision": "baa4529f5b7a2a7b0490dba5d912f9f9"
  },
  {
    "url": "assets/js/5.51f78e54.js",
    "revision": "b20986ea5c99c7ba30208b714ae3a133"
  },
  {
    "url": "assets/js/50.23be88d1.js",
    "revision": "064a1e76545800c6b2f4ae7e3f1a917d"
  },
  {
    "url": "assets/js/51.6178beeb.js",
    "revision": "176c343f87f540ca5c69e46aca71e5dc"
  },
  {
    "url": "assets/js/52.d09ab64c.js",
    "revision": "1b15f9790ca67f32ee9ab6555baa4843"
  },
  {
    "url": "assets/js/53.453b705b.js",
    "revision": "ed1c91f23f2db3d161fc45adf79ce880"
  },
  {
    "url": "assets/js/54.94fe5b7b.js",
    "revision": "e3b0459b03e4932bb7fb2fadbc5cf244"
  },
  {
    "url": "assets/js/55.5fb742f3.js",
    "revision": "06d6f66cfbf24b9b675ceaabd7b145f6"
  },
  {
    "url": "assets/js/6.80fb3b38.js",
    "revision": "e3d2a6e7f6903aad6fe48a8febbd3567"
  },
  {
    "url": "assets/js/7.a27664e4.js",
    "revision": "c61d3e45eb0d687320f20a3116fee173"
  },
  {
    "url": "assets/js/8.82601291.js",
    "revision": "d12630dfa97483dafee5b5932099c6c1"
  },
  {
    "url": "assets/js/9.f2498936.js",
    "revision": "8722bb40574fdf0eac61669761708f94"
  },
  {
    "url": "assets/js/app.1d7e612b.js",
    "revision": "632f7c857fe69bd193abc514dec006d0"
  },
  {
    "url": "assets/js/vendors~flowchart.f212e8e4.js",
    "revision": "5da15003eb6b5224ee2151941bbb8031"
  },
  {
    "url": "blog/ali-interview-1.html",
    "revision": "4a96771c434d7b9f2c96ec02ef76e8d8"
  },
  {
    "url": "blog/ali-interview-2.html",
    "revision": "067b4196d406225d4c0481df55b8eed0"
  },
  {
    "url": "blog/better-ts.html",
    "revision": "04fe7f846ac2b787981aced3946142b3"
  },
  {
    "url": "blog/call-by-sharing.html",
    "revision": "86a8c132eed9712ec00056f9bb36d6e7"
  },
  {
    "url": "blog/closure.html",
    "revision": "d64411a3eba8cb064e96fcd422967bd3"
  },
  {
    "url": "blog/css-animation-performance.html",
    "revision": "24984c4a11b837e0f5159bc826657e2f"
  },
  {
    "url": "blog/device-scale.html",
    "revision": "568bc12cc65f316dd40b8bbfbd234727"
  },
  {
    "url": "blog/front-end-optimize.html",
    "revision": "3ccd0e8d937c8db216ba42351eace180"
  },
  {
    "url": "blog/git-usage.html",
    "revision": "b66d8c1bd8afd965bc39b0626944f0a1"
  },
  {
    "url": "blog/hexo-highlight.html",
    "revision": "dea916a3a3757ad3e61e74bd4a0cfb28"
  },
  {
    "url": "blog/lexical-dynamic-scope.html",
    "revision": "8f3f54e230face0609e693448da0ebdf"
  },
  {
    "url": "blog/linux-setup-tips.html",
    "revision": "0c75add99d783eba2f1ec2c2361a9fe3"
  },
  {
    "url": "blog/mysql.html",
    "revision": "c4daf7db945588ff7e8b452d0389f3b0"
  },
  {
    "url": "blog/react-router-analysis.html",
    "revision": "67e035769fe5da7eac92829170ea2b81"
  },
  {
    "url": "blog/react-router-graph.html",
    "revision": "b1b3e59fc3fa6bff64cbb8c30ea23bb9"
  },
  {
    "url": "blog/redux-analysis.html",
    "revision": "bc35c58690356e4eeb48f4e87f6eca9d"
  },
  {
    "url": "blog/redux-koa-middlewares.html",
    "revision": "925e84f8c687b2e5ffd211c2dd85da32"
  },
  {
    "url": "blog/webpack-common-solution.html",
    "revision": "104dd8183b1b0167e25fba8dd7d1b9d5"
  },
  {
    "url": "category/index.html",
    "revision": "e9d8fea944dc57f09b39b59d45215efa"
  },
  {
    "url": "fp/y-combinator.html",
    "revision": "28147c57dfbd3732740eda7d334cdc78"
  },
  {
    "url": "index.html",
    "revision": "b82722765d21a36dbe95fe79a95805d1"
  },
  {
    "url": "page/2/index.html",
    "revision": "d32ad538c4835d6d3c95d4002dc10155"
  },
  {
    "url": "page/3/index.html",
    "revision": "714619a243d551e98b79bb762cccb7b7"
  },
  {
    "url": "page/4/index.html",
    "revision": "daa821b7def65f42dcbcb13ec2380b1f"
  },
  {
    "url": "react-native/framework.html",
    "revision": "2c25d9fe667035c3b5ab1b59ba797956"
  },
  {
    "url": "static/background.jpg",
    "revision": "cdb888f2685a2b636a5fe7075cd64083"
  },
  {
    "url": "static/logo.png",
    "revision": "4f452b5ce640ede32e2dc73c22e67885"
  },
  {
    "url": "tag/css.html",
    "revision": "831e233f8a66eec4a5b31b705f002520"
  },
  {
    "url": "tag/git.html",
    "revision": "5dae250f9a874501ccb67126fc2d33c0"
  },
  {
    "url": "tag/hexo.html",
    "revision": "138fe231cccede02ab956c3497d32dfa"
  },
  {
    "url": "tag/index.html",
    "revision": "2ca89c8461ab111347b071efbe92ac6c"
  },
  {
    "url": "tag/js.html",
    "revision": "fc613f08c4ac34ce4cc79f4219d9d5d4"
  },
  {
    "url": "tag/koa.html",
    "revision": "a11aaaa6aaa3683729915dbaa59a90ef"
  },
  {
    "url": "tag/linux.html",
    "revision": "538568dcda8c1c79cf4f70c2eb7b81c6"
  },
  {
    "url": "tag/mysql.html",
    "revision": "5190b9322dc18ea6f19b7883790bed80"
  },
  {
    "url": "tag/react.html",
    "revision": "bc428133bb1afadca845ac97c306de50"
  },
  {
    "url": "tag/redux.html",
    "revision": "2ef88079262d7613271f0f33d8c038d6"
  },
  {
    "url": "tag/typescript.html",
    "revision": "82518459dc1fe596ab95a8b0bad1a090"
  },
  {
    "url": "tag/webpack.html",
    "revision": "774985f76a5384fdc1d5121a36e56932"
  },
  {
    "url": "tag/优化.html",
    "revision": "6048e18b96be0e62817347ca1ed02055"
  },
  {
    "url": "tag/函数式.html",
    "revision": "841f9f163112d3c379e816c503c20558"
  },
  {
    "url": "tag/适配.html",
    "revision": "b8acda1ef70c0699bd3cb7777155f960"
  },
  {
    "url": "tag/面试.html",
    "revision": "ae2d53680ac168310456e7cc449ff890"
  },
  {
    "url": "yubisaki/intro.html",
    "revision": "84ebe58fa5e187b7ce6f78c9eb6f7201"
  },
  {
    "url": "yubisaki/next-en.html",
    "revision": "699c9d3b9915c8960307211b4c4b53cf"
  },
  {
    "url": "yubisaki/next.html",
    "revision": "ee6c859aa995c82bfcb6fbce8977e8f2"
  },
  {
    "url": "yubisaki/usage.html",
    "revision": "847ac320c948a099b55f993d8cc731ca"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
