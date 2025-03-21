const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"NaiHe"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"ec2cc10574ddd69cf5de7ea77653f093",url:"./404.html"},{revision:"485c6665a4769678a7792df6f74760f8",url:"./2013454d/index.html"},{revision:"8e06702177a5aeb7e725ba027bf8b8a3",url:"./7138682c/index.html"},{revision:"2b1199ce3a5e0153446ee8675a83dc50",url:"./75a8ed31/index.html"},{revision:"d9d119187623b66164cbff014b8d99c3",url:"./archives/2023/12/index.html"},{revision:"f28591c09a02ee960cfc5b95ab7982fb",url:"./archives/2023/index.html"},{revision:"75316e72d7cda46d3fa1cec98956d938",url:"./archives/2025/03/index.html"},{revision:"67b1214e6125ddd3516d2588ec5cf208",url:"./archives/2025/index.html"},{revision:"a6de4b337d053cef8a56592d0c6c69d7",url:"./archives/index.html"},{revision:"d379e457845b7e4e9fd1d320b2279bfd",url:"./box/air/index.html"},{revision:"de11ebf10bea8ec952d3c638b8af1e16",url:"./box/gallery/index.html"},{revision:"ce45bfa9fdace616f09e184096eec54d",url:"./box/nav/index.html"},{revision:"dfaadaed7591de3f89f91ca19064e02b",url:"./box/pdf/index.html"},{revision:"da2ea3d1f5136fc2e12ead9673fe7c56",url:"./categories/index.html"},{revision:"45b00edf01164d9041779eee4682c9dc",url:"./categories/在线工具/index.html"},{revision:"715c58787c791509742489c4e14ed0b4",url:"./categories/技术笔记/index.html"},{revision:"c35aeeb0565a373e5ffff4cb7d127581",url:"./categories/演示/index.html"},{revision:"75c50d0f78098b05c90180aaa37205da",url:"./comments/index.html"},{revision:"4df05492b8e0b5d594b1f089d4b9f670",url:"./index.html"},{revision:"c36f55e6b0dea21574b5c75c9b934e6d",url:"./life/animation/index.html"},{revision:"714563680a0eb762b50e2faef7ed5101",url:"./life/games/index.html"},{revision:"e65fb38d3a4e3b501b95be12b1dc4782",url:"./life/movies/index.html"},{revision:"9c0bbd343e3cf35498a654b890c90920",url:"./life/music/index.html"},{revision:"ac8e43963645b359112fc8a71976017c",url:"./personal/about/index.html"},{revision:"8adbb156a364bad7ae2ebb42786a86f7",url:"./personal/bb/index.html"},{revision:"918484a711e51bcd00c73635322e9fd0",url:"./personal/house/index.html"},{revision:"1b073eadb1ac1393d76d50912fb78cb8",url:"./site/census/index.html"},{revision:"4c33848d389b13fc6090fc29a57aa4e7",url:"./site/echarts/index.html"},{revision:"72d5f44a7d9494d2bdc1fd7f8659db55",url:"./site/status/index.html"},{revision:"f082e80c0e87090fa309cefdce491d73",url:"./site/time/index.html"},{revision:"329317df10476aaa9a34bcdb7c8e9d36",url:"./social/fcircle/index.html"},{revision:"ba8bf270b3e77fb3643cc88440f69a00",url:"./social/link/index.html"},{revision:"0f1fb70e6496541fb0e76ec7e179e363",url:"./tags/index.html"},{revision:"fdb324df29713cecb1f62c9fa1768a32",url:"./tags/Markdown/index.html"},{revision:"05f3721e0d8e2200d7026e7b9b48b3e3",url:"./tags/前端/index.html"},{revision:"d31da71b62a801e739f454cc626c1aae",url:"./tags/外挂标签/index.html"},{revision:"5cc34f509ce7ea1c85119a741e95d5f0",url:"./tags/工具/index.html"},{revision:"eb128cacd70076e639a0a54aa410af4d",url:"./tags/网站/index.html"},{revision:"80853f7147b36142e6127c7c32f22bff",url:"./tags/音乐/index.html"},{revision:"5dc59a7c321ad7d54fec9a752a3cd287",url:"./js/main.js"},{revision:"035430f421eb9080ef5e98ab5d286c98",url:"./css/index.css"},{revision:"f087f78a7e94075063f36f64ee0e7e65",url:"./manifest.json"},{revision:"574630c6f0834bda1cc21465879f7f89",url:"./search.xml"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.naihee\.cn/,new workbox.strategies.CacheFirst({cacheName:"naihe-static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.cbd\.int/,new workbox.strategies.CacheFirst({cacheName:"jsdelivr-static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.staticfile\.net/,new workbox.strategies.CacheFirst({cacheName:"jsdelivr-static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/npm\.elemecdn\.com/,new workbox.strategies.CacheFirst({cacheName:"jsdelivr-static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/jsd\.onmicrosoft\.com/,new workbox.strategies.CacheFirst({cacheName:"jsdelivr-static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/sdk\.51\.la/,new workbox.strategies.CacheFirst({cacheName:"jsdelivr-static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();