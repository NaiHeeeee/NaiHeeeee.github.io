const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"NaiHe"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"024410ba5c75d95abfbd3ef1540d501e",url:"./404.html"},{revision:"52c86dc9907c7a3e818475394cdbdd5d",url:"./2013454d/index.html"},{revision:"0570c174cbfc58fad867ad9b05b6c4ee",url:"./7138682c/index.html"},{revision:"2b132271f3a66578df4d1f2b4b6a9177",url:"./75a8ed31/index.html"},{revision:"514fa643b84a913685d75f3388fc5e42",url:"./archives/2023/12/index.html"},{revision:"84d861eab5fe0bd46aa2cf60ded2de02",url:"./archives/2023/index.html"},{revision:"912a8382fdc8710537b92e04344e78d9",url:"./archives/2025/03/index.html"},{revision:"aa1f7ce99f478f944ec6d3bb3c070d04",url:"./archives/2025/index.html"},{revision:"0f1eee1c36090f1d450769782679c7e9",url:"./archives/index.html"},{revision:"51cf3f870f4726a65e01c32399deba36",url:"./box/air/index.html"},{revision:"08b5c231142da55019de4160d9386d52",url:"./box/gallery/index.html"},{revision:"0030a1cb3107c44c77f153e58b509d02",url:"./box/nav/index.html"},{revision:"d974cd2ba081c030474141c40d5f704f",url:"./box/pdf/index.html"},{revision:"d74d96f0d68fdac3f1ac05f6f1f0b816",url:"./categories/index.html"},{revision:"8ae20c1410d1394ab917a9b64e2989aa",url:"./categories/在线工具/index.html"},{revision:"5ea57660e2eb1b955a79a572a43c7c7d",url:"./categories/技术笔记/index.html"},{revision:"3954c77aa9223ef98d102dbd62cfe6c8",url:"./categories/演示/index.html"},{revision:"61388387d098d6382bc8d6fd21270ab2",url:"./comments/index.html"},{revision:"82966b6e1b34b0dadd9fbbf4fd8aaa95",url:"./index.html"},{revision:"88b298a06e2928a519327ce88f2819ff",url:"./life/animation/index.html"},{revision:"84077b9c42aa95f72dae00002b03be81",url:"./life/games/index.html"},{revision:"6bf444fc079b88ad5f85fa452ba2f599",url:"./life/movies/index.html"},{revision:"aba9961a84bf4bb9189a75e97b33d010",url:"./life/music/index.html"},{revision:"6f1b822b1edc7d101c5d4735597bf99e",url:"./personal/about/index.html"},{revision:"0ab1d97b4e92c40eaf1131feb65d7a85",url:"./personal/bb/index.html"},{revision:"a997cb5111ed88a26d45132ebecda20e",url:"./personal/house/index.html"},{revision:"7f0c123a16aaae22aad2be3640772041",url:"./site/census/index.html"},{revision:"764818d267e4f5a5411e7f33e9beb79f",url:"./site/echarts/index.html"},{revision:"a63ddff5c5606c51d1345cad8cc5b2a2",url:"./site/status/index.html"},{revision:"a091e0ca87dcc82dc59094a86706b1ed",url:"./site/time/index.html"},{revision:"000c9d59e302a1ab6ef71f0ff3c9fab1",url:"./social/fcircle/index.html"},{revision:"62cf89ca5c1af93a2e2955206595c643",url:"./social/link/index.html"},{revision:"42225de75f8c06b5661405ff95238f21",url:"./tags/index.html"},{revision:"8cf6f6db05327035dde7cc51a9d2baa8",url:"./tags/Markdown/index.html"},{revision:"8f62eae16fad4f47234d952619cfbbe9",url:"./tags/前端/index.html"},{revision:"c45e2b141d090538a6eb6052d57d7669",url:"./tags/外挂标签/index.html"},{revision:"ea4911173d200fb3db386b4c5689575a",url:"./tags/工具/index.html"},{revision:"e3418adeca2e0ac1a5d0dd48281887cc",url:"./tags/网站/index.html"},{revision:"2f2429ae553c62c75d2db913cab5847d",url:"./tags/音乐/index.html"},{revision:"5dc59a7c321ad7d54fec9a752a3cd287",url:"./js/main.js"},{revision:"035430f421eb9080ef5e98ab5d286c98",url:"./css/index.css"},{revision:"f087f78a7e94075063f36f64ee0e7e65",url:"./manifest.json"},{revision:"574630c6f0834bda1cc21465879f7f89",url:"./search.xml"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fastly\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"jsdelivr-static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.naihee\.cn/,new workbox.strategies.CacheFirst({cacheName:"naihe-static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();