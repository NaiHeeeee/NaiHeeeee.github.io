const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"NaiHe"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"4a5d37d4a8924de8c33aa9f5591517b9",url:"./404.html"},{revision:"061d6a860ac6ad0986e7f911d77d05be",url:"./2013454d/index.html"},{revision:"959fb133cc62dbb550b77be6144813fb",url:"./7138682c/index.html"},{revision:"893a5e4e046ec4b0ec61b7270b34ea83",url:"./75a8ed31/index.html"},{revision:"99c3ddf801dc21efabb89908b4721544",url:"./archives/2023/12/index.html"},{revision:"8ad6be178cb9a073b66f28118c8ebb8c",url:"./archives/2023/index.html"},{revision:"15a7336380c9162b70ff583d6f8acbc3",url:"./archives/2025/03/index.html"},{revision:"58513bb35ff7970abf04bab6acf41d06",url:"./archives/2025/index.html"},{revision:"8130acc4dd9a11043d7efbf4dcfcb046",url:"./archives/index.html"},{revision:"3d2728973eed6e9ba41bef485009d0fe",url:"./box/air/index.html"},{revision:"e5481b16c176ea4c40832584936ee76e",url:"./box/gallery/index.html"},{revision:"90811c144601e8bda82ed2bf491c695a",url:"./box/hot/index.html"},{revision:"8e65df39665777a8271bae2f06d0bf0a",url:"./box/nav/index.html"},{revision:"825f72dcedd2e1b3e9bff66947a94f95",url:"./box/pdf/index.html"},{revision:"fb07db01c2bdeb5e6938447122bfd2f8",url:"./categories/index.html"},{revision:"5b30a7b433ad388fcd1af922c44284d0",url:"./categories/在线工具/index.html"},{revision:"9dd456d502e7a42de3b0717646c75562",url:"./categories/技术笔记/index.html"},{revision:"4d979c568d7deb90bac26ef5d765a61e",url:"./categories/演示/index.html"},{revision:"181e043ad31f81553e6c62767db99bdc",url:"./comments/index.html"},{revision:"a981e01fbaacdb4c6d383aeb330f482c",url:"./index.html"},{revision:"bdc78c3a7a7dfbb2b39a954afe3eed6e",url:"./life/animation/index.html"},{revision:"5276a1fb9afa79bc454aeffd1c70f5c2",url:"./life/games/index.html"},{revision:"3f40bd54a1d454732cfc375b5580b9f1",url:"./life/movies/index.html"},{revision:"0214a8aa148b6dae7a4e32447801498d",url:"./life/music/index.html"},{revision:"6625f7ddf5f78fa24eee22c6de3f6c33",url:"./personal/about/index.html"},{revision:"9c5ce63e9412396a2bd3de22a707b16b",url:"./personal/bb/index.html"},{revision:"801617d4b49fc5345ec08537f79f5e88",url:"./personal/house/index.html"},{revision:"ff2fe81edbc7349c96f0dc82df5da331",url:"./site/census/index.html"},{revision:"9cd6e630157c87acace7105ec4213a2c",url:"./site/echarts/index.html"},{revision:"87a6aa25f4257fdd3c80951ebd97f29f",url:"./site/status/index.html"},{revision:"6aa0159443c51a5344f83bb3a2200fc8",url:"./site/time/index.html"},{revision:"136706e5b54165bc446611b92ef9cc28",url:"./social/fcircle/index.html"},{revision:"2bc99f7df69b2e597bc47673fa1d349a",url:"./social/link/index.html"},{revision:"0350d9c8f92cffedcf84f61e91d8cf3d",url:"./tags/index.html"},{revision:"4b5f2cda7fde3ea784e5f4d493b09894",url:"./tags/Markdown/index.html"},{revision:"eef9eda40ff8d1aa5b6f6a2b4d731126",url:"./tags/前端/index.html"},{revision:"bd018a4fc8264a0d0e553e3421cb87da",url:"./tags/外挂标签/index.html"},{revision:"8ea09d635b808fd8fba3f5fc6050f1ce",url:"./tags/工具/index.html"},{revision:"7b195de9da58c7529868d437dee6f396",url:"./tags/网站/index.html"},{revision:"f5c1e38031bff39b807ec521ba31f32b",url:"./tags/音乐/index.html"},{revision:"19ae109a437ea749f1afc3b879abe5df",url:"./js/ali_font/ali_font.js"},{revision:"393e36fc6cb064af7e3fda91393746ca",url:"./js/ali_font/font_3586335_hsivh70x0fm.js"},{revision:"e6724c85c8e7b5a7fafbf86d14d33a4a",url:"./js/ali_font/font_3612150_kfv55xn3u2g.js"},{revision:"58c46fb743b4cead688c7d14cf368d37",url:"./js/ali_font/font_3636804_gr02jmjr3y9.js"},{revision:"8828519c2f2b71ff7b9529e1e46eeed6",url:"./js/bibi.js"},{revision:"ad86204468c17862db6f7cded0a4013f",url:"./js/census.js"},{revision:"700e0d15ec466e9d4426377495af3fec",url:"./js/coin.js"},{revision:"6fbe4d6d3eaf975d0f4f7046d4a81678",url:"./js/fomal.js"},{revision:"c5e1f13cf2b125ab4d8637718a88e903",url:"./js/kslink.js"},{revision:"1e5c15f84844f8722a34b520b7d040b7",url:"./js/live2d-widget-v3.js"},{revision:"5dc59a7c321ad7d54fec9a752a3cd287",url:"./js/main.js"},{revision:"6f0e1c6a21f9cd683bc121b92557cbf1",url:"./js/Meting.min.js"},{revision:"278e408a151db389ca3c94fa66cef060",url:"./js/search/algolia.js"},{revision:"149fcc60c1de0a818e111978d01cbd87",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"21e276a9458236b100f7aacffe6f6515",url:"./js/voyager_distance_data.js"},{revision:"cb004426c9bd62ba16e200b048462887",url:"./lib/hbe.js"},{revision:"b6e115f6b4b607a94719fa489fef4832",url:"./css/coin.css"},{revision:"f1245164f762ee83309fa797a63fb868",url:"./css/hbe.style.css"},{revision:"8904267ff9ab9e44e070c68767fae0ba",url:"./css/index.css"},{revision:"dd1af3c36730c7ef47a7c1f4eab27bdb",url:"./css/kslink.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"a427afb0c573016ff735df29ecc371ab",url:"./manifest.json"},{revision:"574630c6f0834bda1cc21465879f7f89",url:"./search.xml"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.naihee\.cn/,new workbox.strategies.CacheFirst({cacheName:"naihe cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.cbd\.int/,new workbox.strategies.CacheFirst({cacheName:"cdn.cbd.int cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.staticfile\.net/,new workbox.strategies.CacheFirst({cacheName:"staticfile.net cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/npm\.elemecdn\.com/,new workbox.strategies.CacheFirst({cacheName:"npm.elemecdn.com cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/jsd\.onmicrosoft\.cn/,new workbox.strategies.CacheFirst({cacheName:"jsd.onmicrosoft.cn cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/lf6-cdn-tos\.bytecdntp\.com/,new workbox.strategies.CacheFirst({cacheName:"lf6-cdn-tos.bytecdntp.com cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/lib\.baomitu\.com/,new workbox.strategies.CacheFirst({cacheName:"lib.baomitu.com cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();