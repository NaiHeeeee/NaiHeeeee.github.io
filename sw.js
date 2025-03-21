const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"NaiHe"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"2d39e2f98c10a974fd25deedd7a85fde",url:"./404.html"},{revision:"6f856293783738b4fc88a48c3dc93e16",url:"./2013454d/index.html"},{revision:"85568f50bfcabb04342a922be7644068",url:"./7138682c/index.html"},{revision:"2c7b9f47eda27ce353f785bb30ffaef5",url:"./75a8ed31/index.html"},{revision:"355152121ae5a36a7e935bcdd6d1b620",url:"./archives/2023/12/index.html"},{revision:"00fff7db5e40f3248369714b55c699df",url:"./archives/2023/index.html"},{revision:"bf168684f34daf1dd35daee218612a57",url:"./archives/2025/03/index.html"},{revision:"250d99f1ac8647d446f7d0ac3637fc41",url:"./archives/2025/index.html"},{revision:"860ceb6ea6dfa28616035d204a6317e9",url:"./archives/index.html"},{revision:"1234f73199f63d0dca13e331ed205a8a",url:"./box/air/index.html"},{revision:"bcc0e371ead5f853aaf9e7e2c5cb4b36",url:"./box/gallery/index.html"},{revision:"700db9e3170d08595381a517fd2ade8e",url:"./box/nav/index.html"},{revision:"006d5e600b7f538ab7aa25f786386b64",url:"./box/pdf/index.html"},{revision:"3311e8543020cc01af7fdff726b4bc33",url:"./categories/index.html"},{revision:"42d3bb944b86e230b5252244a6dd85ef",url:"./categories/在线工具/index.html"},{revision:"34387e7d811029d6478c1cb110f45700",url:"./categories/技术笔记/index.html"},{revision:"a29e61efd4be8825075f55385ed3d4a9",url:"./categories/演示/index.html"},{revision:"a3d9d7465cb377e3c212753867e8a671",url:"./comments/index.html"},{revision:"cb2392d5213a3659d0ce7fe2e1b29fad",url:"./index.html"},{revision:"a3d84b3e08b1feadeaf74e54248a162b",url:"./life/animation/index.html"},{revision:"39b017db99ecda5ac42a4ecb3fcf7be7",url:"./life/games/index.html"},{revision:"f580e83132a581b1ab221db8b8ff0149",url:"./life/movies/index.html"},{revision:"8609ebb9878b2ef541db26dc4a5225df",url:"./life/music/index.html"},{revision:"b7570c33978657f2335d7bdbde253b5f",url:"./personal/about/index.html"},{revision:"ac946163726f4fedace442f31c76d0e3",url:"./personal/bb/index.html"},{revision:"787807b87796426828537817cd602340",url:"./personal/house/index.html"},{revision:"64e4cb0b97aa4b0d2ac36db327c77d39",url:"./site/census/index.html"},{revision:"2ea95b2be5bbf59af1fe180a3d7f6099",url:"./site/echarts/index.html"},{revision:"f7680d022f1ecba41c20d414d0708f8f",url:"./site/status/index.html"},{revision:"69a3015e89d212125512296404669bbe",url:"./site/time/index.html"},{revision:"9a57ee847bc6ebb3993111e4ef38ed4e",url:"./social/fcircle/index.html"},{revision:"5af1438aed1c5cf5ad274f43aedca610",url:"./social/link/index.html"},{revision:"f02e381ae2a41606898c164fff905ea5",url:"./tags/index.html"},{revision:"f337fc8df08c29e7e255a427dcc477bf",url:"./tags/Markdown/index.html"},{revision:"448bbc8ce1b5a86c563a6dd5df7c27fc",url:"./tags/前端/index.html"},{revision:"d52bc64dc3be381d5124049addcf72cb",url:"./tags/外挂标签/index.html"},{revision:"5cd074fabe4a0b4ea7df88905843dcbb",url:"./tags/工具/index.html"},{revision:"fcf6b0a436f7315c40972e4fb29688f5",url:"./tags/网站/index.html"},{revision:"500b4e4408a6a7cb0db57cefdfa72ad0",url:"./tags/音乐/index.html"},{revision:"5dc59a7c321ad7d54fec9a752a3cd287",url:"./js/main.js"},{revision:"035430f421eb9080ef5e98ab5d286c98",url:"./css/index.css"},{revision:"f087f78a7e94075063f36f64ee0e7e65",url:"./manifest.json"},{revision:"574630c6f0834bda1cc21465879f7f89",url:"./search.xml"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.naihee\.cn/,new workbox.strategies.CacheFirst({cacheName:"naihe-static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.cbd\.int/,new workbox.strategies.CacheFirst({cacheName:"jsdelivr-static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.staticfile\.net/,new workbox.strategies.CacheFirst({cacheName:"jsdelivr-static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/npm\.elemecdn\.com/,new workbox.strategies.CacheFirst({cacheName:"jsdelivr-static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/jsd\.onmicrosoft\.com/,new workbox.strategies.CacheFirst({cacheName:"jsdelivr-static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/sdk\.51\.la/,new workbox.strategies.CacheFirst({cacheName:"jsdelivr-static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();