const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"NaiHe"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"93e9cb424a9ca569bbf6e04225fedb00",url:"./404.html"},{revision:"3a893b8d2273ddef7f5f4efd62acd5ab",url:"./2013454d/index.html"},{revision:"4be670bcee4809739078fd78c7b2588f",url:"./7138682c/index.html"},{revision:"f00d09091c13d79e5a7e7357277bba62",url:"./75a8ed31/index.html"},{revision:"c28a134a5101385bff943057c3ba8e63",url:"./archives/2023/12/index.html"},{revision:"147e3d922dde31f8eec61e1ceb560698",url:"./archives/2023/index.html"},{revision:"905fa635fdd67bc27008609bd2d92511",url:"./archives/2025/03/index.html"},{revision:"e2b86a73b002c9c143b281e8cad7a648",url:"./archives/2025/index.html"},{revision:"2cc589ce0c3ebd8302253f2438a7cc3b",url:"./archives/index.html"},{revision:"95d3bdc738cb737cf5f77ffff1cc30ef",url:"./box/air/index.html"},{revision:"e93c30e0edd476047f5485f9d47e9839",url:"./box/gallery/index.html"},{revision:"402c740ffb9f95dade573094715b8807",url:"./box/hot/index.html"},{revision:"633c41cdc1e7fe3da29d3c6e61d5af3c",url:"./box/nav/index.html"},{revision:"1ad8a4b0bad2af8921a197110cde70aa",url:"./box/pdf/index.html"},{revision:"d693f2323966779e34ee985e270893bb",url:"./categories/index.html"},{revision:"709ea16adc1ae8146247681f1f9373df",url:"./categories/在线工具/index.html"},{revision:"2a0c52989f16feaa56232ff6809d092c",url:"./categories/技术笔记/index.html"},{revision:"91b5fffef3222a7b1505a87412d25072",url:"./categories/演示/index.html"},{revision:"06ee77b542e4bcd0c12df30554ddf866",url:"./comments/index.html"},{revision:"ed916d3d209a75be6fa29eaac0747e01",url:"./index.html"},{revision:"2a599858d1e9e0b42924cca71bde1426",url:"./life/animation/index.html"},{revision:"8563dc5e64b8b2a7b6d2dd88459cf3a1",url:"./life/games/index.html"},{revision:"d3cdef0eb3a6c941e7a644f115bbce04",url:"./life/movies/index.html"},{revision:"1ca889871d78a1adedcf7481807cc99b",url:"./life/music/index.html"},{revision:"0b41be41e789be12095fb003c45c2d0d",url:"./personal/about/index.html"},{revision:"457c29da1d59d8cfafeb2d632d4c04ca",url:"./personal/bb/index.html"},{revision:"2b9016dbc8a133c7238cf30e1df3dec5",url:"./personal/house/index.html"},{revision:"66db5348acf6f82d8ec8240810bfe46a",url:"./site/census/index.html"},{revision:"10eed157a7dc4db914d7fab03a1ec40f",url:"./site/echarts/index.html"},{revision:"ec9ceecedfe736c52110cc420dcce859",url:"./site/status/index.html"},{revision:"135b4e4edf38fcbd360feebc14a2541d",url:"./site/time/index.html"},{revision:"c771d08c3cc694046b0806855a221332",url:"./social/fcircle/index.html"},{revision:"73861b20b518730f3748daa365602e5d",url:"./social/link/index.html"},{revision:"50c768c71972f8886315a446ae489191",url:"./tags/index.html"},{revision:"8353cca5d1a71368d8cf4c9ad5154ba6",url:"./tags/Markdown/index.html"},{revision:"1b79772776e459603505c010b4b905db",url:"./tags/前端/index.html"},{revision:"826c6063835a6ac6eb89fd9d38bd115f",url:"./tags/外挂标签/index.html"},{revision:"4296d18efd51c283c63a9be86211db88",url:"./tags/工具/index.html"},{revision:"602208fa1439d43ab041d5d691a20e55",url:"./tags/网站/index.html"},{revision:"f0bce051fd5cf84a5477f8a21ebe52e3",url:"./tags/音乐/index.html"},{revision:"19ae109a437ea749f1afc3b879abe5df",url:"./js/ali_font/ali_font.js"},{revision:"393e36fc6cb064af7e3fda91393746ca",url:"./js/ali_font/font_3586335_hsivh70x0fm.js"},{revision:"e6724c85c8e7b5a7fafbf86d14d33a4a",url:"./js/ali_font/font_3612150_kfv55xn3u2g.js"},{revision:"58c46fb743b4cead688c7d14cf368d37",url:"./js/ali_font/font_3636804_gr02jmjr3y9.js"},{revision:"8828519c2f2b71ff7b9529e1e46eeed6",url:"./js/bibi.js"},{revision:"ad86204468c17862db6f7cded0a4013f",url:"./js/census.js"},{revision:"700e0d15ec466e9d4426377495af3fec",url:"./js/coin.js"},{revision:"aa7aaee253cb342243f24e3373929baa",url:"./js/fomal.js"},{revision:"c5e1f13cf2b125ab4d8637718a88e903",url:"./js/kslink.js"},{revision:"1e5c15f84844f8722a34b520b7d040b7",url:"./js/live2d-widget-v3.js"},{revision:"5dc59a7c321ad7d54fec9a752a3cd287",url:"./js/main.js"},{revision:"6f0e1c6a21f9cd683bc121b92557cbf1",url:"./js/Meting.min.js"},{revision:"278e408a151db389ca3c94fa66cef060",url:"./js/search/algolia.js"},{revision:"149fcc60c1de0a818e111978d01cbd87",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"e7e836caa6a4a625e527cc81dfbfa2de",url:"./js/voyager_distance_data.js"},{revision:"cb004426c9bd62ba16e200b048462887",url:"./lib/hbe.js"},{revision:"b6e115f6b4b607a94719fa489fef4832",url:"./css/coin.css"},{revision:"f1245164f762ee83309fa797a63fb868",url:"./css/hbe.style.css"},{revision:"8904267ff9ab9e44e070c68767fae0ba",url:"./css/index.css"},{revision:"dd1af3c36730c7ef47a7c1f4eab27bdb",url:"./css/kslink.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"a427afb0c573016ff735df29ecc371ab",url:"./manifest.json"},{revision:"574630c6f0834bda1cc21465879f7f89",url:"./search.xml"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.naihee\.cn/,new workbox.strategies.CacheFirst({cacheName:"naihe cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.cbd\.int/,new workbox.strategies.CacheFirst({cacheName:"cdn.cbd.int cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.staticfile\.net/,new workbox.strategies.CacheFirst({cacheName:"staticfile.net cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/npm\.elemecdn\.com/,new workbox.strategies.CacheFirst({cacheName:"npm.elemecdn.com cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/jsd\.onmicrosoft\.cn/,new workbox.strategies.CacheFirst({cacheName:"jsd.onmicrosoft.cn cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/lf6-cdn-tos\.bytecdntp\.com/,new workbox.strategies.CacheFirst({cacheName:"lf6-cdn-tos.bytecdntp.com cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/lib\.baomitu\.com/,new workbox.strategies.CacheFirst({cacheName:"lib.baomitu.com cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();