const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"NaiHe"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"863a247eafaf2dab748b37a913e1377b",url:"./404.html"},{revision:"a56eab41d6a847eac9904a6031b9f6c0",url:"./2013454d/index.html"},{revision:"fd7eb307eabce99c3626bd33b63459dc",url:"./7138682c/index.html"},{revision:"37a5829be89a38bd5a315993cb54d8e3",url:"./75a8ed31/index.html"},{revision:"a1c8b981d3c61c4b22b732837a9edc43",url:"./archives/2023/12/index.html"},{revision:"5e22fb2d1c530f5fac5a76eff9d003f0",url:"./archives/2023/index.html"},{revision:"6122739707ea765d6031af8bf710b316",url:"./archives/2025/03/index.html"},{revision:"9801113a962665eeac487794bd83b3c4",url:"./archives/2025/index.html"},{revision:"07c6380fc9a0088780baeee6eeea434a",url:"./archives/index.html"},{revision:"7d8001f280b1cd236531bd105ff22e71",url:"./box/air/index.html"},{revision:"cc3f9981f4037744f1fb5d0a934a2dd1",url:"./box/gallery/index.html"},{revision:"5ecbb42ccf26f317878d636970242daf",url:"./box/hot/index.html"},{revision:"231b3c7c9ba6ecdd8e1545924a7c13e5",url:"./box/nav/index.html"},{revision:"e84e7d01158bd08de16daa81a92f17ce",url:"./box/pdf/index.html"},{revision:"f07827067b5bd6ff4b77b86ce79483b6",url:"./categories/index.html"},{revision:"d83142d08ed8c18540b0af24751758f5",url:"./categories/在线工具/index.html"},{revision:"01c7bc159dd1587c19e411bea3454410",url:"./categories/技术笔记/index.html"},{revision:"177a3a3d44a245e2821925f3a7e270db",url:"./categories/演示/index.html"},{revision:"9702d63c6cf347891b127aeabc79d4f1",url:"./comments/index.html"},{revision:"480f5b97a87619fde19e9001c19e21f4",url:"./index.html"},{revision:"904c0dbc8d9ffb684fc9c1aa4cad1935",url:"./life/animation/index.html"},{revision:"ee9648ee65ab90063bef67db5edc6925",url:"./life/games/index.html"},{revision:"edd822a5827c45a1f14149dba1648698",url:"./life/movies/index.html"},{revision:"1a48d4d78b492664406c8af2de8770e1",url:"./life/music/index.html"},{revision:"02b484d8cd31736b515927509116e5a7",url:"./personal/about/index.html"},{revision:"bac7625ac4c775d63c911a0c2b2004e8",url:"./personal/bb/index.html"},{revision:"7d885b1719978819d14af616fa2484fd",url:"./personal/house/index.html"},{revision:"0eebffb3b4a3d105d4f97caf6293de47",url:"./site/census/index.html"},{revision:"447fa0411f5674576ac0c30e43cc328a",url:"./site/echarts/index.html"},{revision:"f284e32cf257474e27f06905cbc86de8",url:"./site/status/index.html"},{revision:"100680ae3c20c52bcd54aae01ee7086c",url:"./site/time/index.html"},{revision:"9dc7f24ed5d7dde030879335f3f96d0d",url:"./social/fcircle/index.html"},{revision:"0f32d63ef4954f95110f948e72b8fa24",url:"./social/link/index.html"},{revision:"5a7305d6ebcdcc6f24bda0b65a4f69db",url:"./tags/index.html"},{revision:"c4738eb23555f2df3e9aafa9174da7ab",url:"./tags/Markdown/index.html"},{revision:"1954edaa0df6e889866724bfbd2d397c",url:"./tags/前端/index.html"},{revision:"e66416556223c1153e66288a55cf44d2",url:"./tags/外挂标签/index.html"},{revision:"6e75a36aeb17b0d53601e1b00adb3e50",url:"./tags/工具/index.html"},{revision:"45492831e58c6c95ad3637856492c89d",url:"./tags/网站/index.html"},{revision:"f00baa8b831d99a166c17ecbc7d4d108",url:"./tags/音乐/index.html"},{revision:"19ae109a437ea749f1afc3b879abe5df",url:"./js/ali_font/ali_font.js"},{revision:"393e36fc6cb064af7e3fda91393746ca",url:"./js/ali_font/font_3586335_hsivh70x0fm.js"},{revision:"e6724c85c8e7b5a7fafbf86d14d33a4a",url:"./js/ali_font/font_3612150_kfv55xn3u2g.js"},{revision:"58c46fb743b4cead688c7d14cf368d37",url:"./js/ali_font/font_3636804_gr02jmjr3y9.js"},{revision:"8828519c2f2b71ff7b9529e1e46eeed6",url:"./js/bibi.js"},{revision:"ad86204468c17862db6f7cded0a4013f",url:"./js/census.js"},{revision:"700e0d15ec466e9d4426377495af3fec",url:"./js/coin.js"},{revision:"6fbe4d6d3eaf975d0f4f7046d4a81678",url:"./js/fomal.js"},{revision:"c5e1f13cf2b125ab4d8637718a88e903",url:"./js/kslink.js"},{revision:"1e5c15f84844f8722a34b520b7d040b7",url:"./js/live2d-widget-v3.js"},{revision:"5dc59a7c321ad7d54fec9a752a3cd287",url:"./js/main.js"},{revision:"6f0e1c6a21f9cd683bc121b92557cbf1",url:"./js/Meting.min.js"},{revision:"278e408a151db389ca3c94fa66cef060",url:"./js/search/algolia.js"},{revision:"149fcc60c1de0a818e111978d01cbd87",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"21e276a9458236b100f7aacffe6f6515",url:"./js/voyager_distance_data.js"},{revision:"cb004426c9bd62ba16e200b048462887",url:"./lib/hbe.js"},{revision:"b6e115f6b4b607a94719fa489fef4832",url:"./css/coin.css"},{revision:"f1245164f762ee83309fa797a63fb868",url:"./css/hbe.style.css"},{revision:"8904267ff9ab9e44e070c68767fae0ba",url:"./css/index.css"},{revision:"dd1af3c36730c7ef47a7c1f4eab27bdb",url:"./css/kslink.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"a427afb0c573016ff735df29ecc371ab",url:"./manifest.json"},{revision:"574630c6f0834bda1cc21465879f7f89",url:"./search.xml"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.naihee\.cn/,new workbox.strategies.CacheFirst({cacheName:"naihe cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.cbd\.int/,new workbox.strategies.CacheFirst({cacheName:"cdn.cbd.int cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.staticfile\.net/,new workbox.strategies.CacheFirst({cacheName:"staticfile.net cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/npm\.elemecdn\.com/,new workbox.strategies.CacheFirst({cacheName:"npm.elemecdn.com cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/jsd\.onmicrosoft\.cn/,new workbox.strategies.CacheFirst({cacheName:"jsd.onmicrosoft.cn cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/lf6-cdn-tos\.bytecdntp\.com/,new workbox.strategies.CacheFirst({cacheName:"lf6-cdn-tos.bytecdntp.com cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/lib\.baomitu\.com/,new workbox.strategies.CacheFirst({cacheName:"lib.baomitu.com cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();