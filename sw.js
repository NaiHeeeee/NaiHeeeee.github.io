const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"NaiHe"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"cf55612fbecc47489b40325909adf459",url:"./404.html"},{revision:"f7d5a93b30ca4d246cdf93cef07977bd",url:"./2013454d/index.html"},{revision:"264e5fa30000ec29e17620b280f299bf",url:"./7138682c/index.html"},{revision:"7e944e12cfba3ae94449a24fcbf700b5",url:"./75a8ed31/index.html"},{revision:"11e4b093aaf121dd1f7490309f283e32",url:"./archives/2023/12/index.html"},{revision:"636717ccadc87f31bf8cfe3bfd562cae",url:"./archives/2023/index.html"},{revision:"7b8bbe99c3afe4d4b353c1103e8be779",url:"./archives/2025/03/index.html"},{revision:"763118f4cf96b4bc14a9157fd54a9e90",url:"./archives/2025/index.html"},{revision:"ce3ca85f96983efbb06280c8f68d3349",url:"./archives/index.html"},{revision:"92d61a6780d806e290fc02710e479b63",url:"./box/air/index.html"},{revision:"9d36a9eb34e0bc22c6912a4a79821b79",url:"./box/gallery/index.html"},{revision:"ed9ffbf3ff2cd40fccf85d93ce6f6efe",url:"./box/nav/index.html"},{revision:"30e1b7f9a2b361e47da917ede766ee7b",url:"./box/pdf/index.html"},{revision:"0e076a18372c69c3e9b4e282576b3f73",url:"./categories/index.html"},{revision:"3669902fd075afb3fb0710d6b04b3738",url:"./categories/在线工具/index.html"},{revision:"eed0a31a84abb77781bf3453fe5521e6",url:"./categories/技术笔记/index.html"},{revision:"bf761ec74fd401cf76a84eefecd0710d",url:"./categories/演示/index.html"},{revision:"e1112481ba8cb5e6af05c9b945220ea3",url:"./comments/index.html"},{revision:"a772d581ce3bc14e5380710ad1d45c3d",url:"./index.html"},{revision:"1f0c597acf09c2b9ab477f271efc8247",url:"./life/animation/index.html"},{revision:"cc68450d264065e9487c8cabd33f1323",url:"./life/games/index.html"},{revision:"c8fdd3cc15147bf48944e75095ab1918",url:"./life/movies/index.html"},{revision:"2f217bd4f6cd4616bd586b981752fd46",url:"./life/music/index.html"},{revision:"6154df8af2312009b9bfced417939f7c",url:"./personal/about/index.html"},{revision:"366ed1f801f332b32597092b45a7f13a",url:"./personal/bb/index.html"},{revision:"78bde50963f1b427d9f2a3a0b39c0804",url:"./personal/house/index.html"},{revision:"b920dba8dabf622ddb64e7dcb950e8bf",url:"./site/census/index.html"},{revision:"0f03c8d8dbb03c53b8a0eae7663357fd",url:"./site/echarts/index.html"},{revision:"0e9bce05424b98477f421bc05753a6b1",url:"./site/status/index.html"},{revision:"52ebf3b5843cb81e533bb828506c3161",url:"./site/time/index.html"},{revision:"ff246540d8eed8324f3b279853a26bd7",url:"./social/fcircle/index.html"},{revision:"af7b1cc8949177da342c39061345cc86",url:"./social/link/index.html"},{revision:"2891343d7bd38418e709dff05cc9bafb",url:"./tags/index.html"},{revision:"6e48765699c6d0f9e1728f632efc2874",url:"./tags/Markdown/index.html"},{revision:"475778a29368b030119eedd110ec7ec1",url:"./tags/前端/index.html"},{revision:"f34a1350cab3f3c415a35bb0663e764b",url:"./tags/外挂标签/index.html"},{revision:"c4709ab9d3dc35a297ec6e0bd305af68",url:"./tags/工具/index.html"},{revision:"12ba4170b8e6eadf5c03d5458e0c2c85",url:"./tags/网站/index.html"},{revision:"6f599ff081879c1e8ad16cca4924dbfe",url:"./tags/音乐/index.html"},{revision:"eef6566f28ad8e7a4fff45af5e743c67",url:"./js/ali_font.js"},{revision:"8828519c2f2b71ff7b9529e1e46eeed6",url:"./js/bibi.js"},{revision:"ad86204468c17862db6f7cded0a4013f",url:"./js/census.js"},{revision:"700e0d15ec466e9d4426377495af3fec",url:"./js/coin.js"},{revision:"c60c19d134400abd1cb8ef676ea6e547",url:"./js/fomal.js"},{revision:"c5e1f13cf2b125ab4d8637718a88e903",url:"./js/kslink.js"},{revision:"5dc59a7c321ad7d54fec9a752a3cd287",url:"./js/main.js"},{revision:"6f0e1c6a21f9cd683bc121b92557cbf1",url:"./js/Meting.min.js"},{revision:"278e408a151db389ca3c94fa66cef060",url:"./js/search/algolia.js"},{revision:"149fcc60c1de0a818e111978d01cbd87",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"cb004426c9bd62ba16e200b048462887",url:"./lib/hbe.js"},{revision:"b6e115f6b4b607a94719fa489fef4832",url:"./css/coin.css"},{revision:"f1245164f762ee83309fa797a63fb868",url:"./css/hbe.style.css"},{revision:"8904267ff9ab9e44e070c68767fae0ba",url:"./css/index.css"},{revision:"dd1af3c36730c7ef47a7c1f4eab27bdb",url:"./css/kslink.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"f087f78a7e94075063f36f64ee0e7e65",url:"./manifest.json"},{revision:"574630c6f0834bda1cc21465879f7f89",url:"./search.xml"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.naihee\.cn/,new workbox.strategies.CacheFirst({cacheName:"naihe cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.cbd\.int/,new workbox.strategies.CacheFirst({cacheName:"cdn.cbd.int cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.staticfile\.net/,new workbox.strategies.CacheFirst({cacheName:"staticfile.net cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/npm\.elemecdn\.com/,new workbox.strategies.CacheFirst({cacheName:"npm.elemecdn.com cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/jsd\.onmicrosoft\.cn/,new workbox.strategies.CacheFirst({cacheName:"jsd.onmicrosoft.cn cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/lf6-cdn-tos\.bytecdntp\.com/,new workbox.strategies.CacheFirst({cacheName:"lf6-cdn-tos.bytecdntp.com cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/lib\.baomitu\.com/,new workbox.strategies.CacheFirst({cacheName:"lib.baomitu.com cdn cache",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();