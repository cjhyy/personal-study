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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.2c105601.css",
    "revision": "a6aa81a709c104f5f91c229237708b66"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b852351c.js",
    "revision": "778fdb24f3fd9cb3e6eaa4855a2b3933"
  },
  {
    "url": "assets/js/11.e61665fe.js",
    "revision": "b9dbe26cc16a4126c7d58e2a0c631df3"
  },
  {
    "url": "assets/js/12.9cd0ac1f.js",
    "revision": "638f50145c3ea237085b6a58850c349e"
  },
  {
    "url": "assets/js/13.97b22613.js",
    "revision": "9a4ff074782c993eb94ebca234316521"
  },
  {
    "url": "assets/js/14.0c24aafc.js",
    "revision": "3800f6d022c288fa4c55e84983d35e15"
  },
  {
    "url": "assets/js/15.62874d34.js",
    "revision": "484f8c700eaab9770774d723586842ad"
  },
  {
    "url": "assets/js/16.dd3b7483.js",
    "revision": "536a985ded510ddb7c6beceb862aeec0"
  },
  {
    "url": "assets/js/17.e236185d.js",
    "revision": "73a95e23b76780d90d6f37dedcdbd322"
  },
  {
    "url": "assets/js/18.c5b00678.js",
    "revision": "9df5ed162c522e755d7b000f10c9e3b7"
  },
  {
    "url": "assets/js/19.d37515cb.js",
    "revision": "2b9e1dcdbc03c52db58cd9c83a79dbd5"
  },
  {
    "url": "assets/js/2.1bbd5291.js",
    "revision": "50df686de073f853e1459466375ea4a9"
  },
  {
    "url": "assets/js/20.7903d01d.js",
    "revision": "fdd30a53f85ea22e5c1a616c0f72cd93"
  },
  {
    "url": "assets/js/21.2dab2b6a.js",
    "revision": "17c3c12a980dc80c6e2dfd84b5912311"
  },
  {
    "url": "assets/js/22.9c3fabde.js",
    "revision": "9de46f15021237b36cb1e9ebead00af2"
  },
  {
    "url": "assets/js/23.5ef24276.js",
    "revision": "3c4393e3a51861c1355afd2672d4e8f5"
  },
  {
    "url": "assets/js/24.e7780a14.js",
    "revision": "3da4d1b1d404728cf8afbc733d88f126"
  },
  {
    "url": "assets/js/25.b0d8fb82.js",
    "revision": "823110260eb717733cedadf184a0d1fd"
  },
  {
    "url": "assets/js/26.f186f486.js",
    "revision": "05d4d67679c705f89fafaa3dd92cbcbd"
  },
  {
    "url": "assets/js/27.19bee34e.js",
    "revision": "d502330b2c2a655da8ed8ef955a0fbde"
  },
  {
    "url": "assets/js/28.dc25be02.js",
    "revision": "d465fed359c423c08d8e6d78d1627324"
  },
  {
    "url": "assets/js/29.10547094.js",
    "revision": "3f82eb8f82da70d0d56731c535b156cd"
  },
  {
    "url": "assets/js/3.c4073d08.js",
    "revision": "944f5c99134aab4a449eda568eff90f3"
  },
  {
    "url": "assets/js/30.f33b5156.js",
    "revision": "41465b8ac20dc9f50162e4e088eb5dd3"
  },
  {
    "url": "assets/js/31.55dec544.js",
    "revision": "8df53b51b4667ab45a572584101615d5"
  },
  {
    "url": "assets/js/32.c6d4c88b.js",
    "revision": "4c8eb339b82bc52796e08fd4abed5c51"
  },
  {
    "url": "assets/js/33.2db051d1.js",
    "revision": "461f8dc125e067452562f690b5347a03"
  },
  {
    "url": "assets/js/34.386db6c1.js",
    "revision": "d6c390811215098955cbff0c4e309fcf"
  },
  {
    "url": "assets/js/35.da329003.js",
    "revision": "cbb8c8ab074c1c0966f793fc74397b1d"
  },
  {
    "url": "assets/js/36.5486f90e.js",
    "revision": "ee397dbb9975b1c6f0dd6112ab39804b"
  },
  {
    "url": "assets/js/37.b24e796e.js",
    "revision": "5450324bee0f5000f7fd465e4bdc27d3"
  },
  {
    "url": "assets/js/4.3a45a334.js",
    "revision": "3e6c046d92d939619797f10508696d26"
  },
  {
    "url": "assets/js/5.dc261476.js",
    "revision": "fca49dc516e18e4184672a85ffd6c20a"
  },
  {
    "url": "assets/js/6.9400386e.js",
    "revision": "fc7c1f5d5c23215fe2d04f6d5905bf4a"
  },
  {
    "url": "assets/js/7.4b5f3f62.js",
    "revision": "109b9cbe608546c57ad132485ddff0bc"
  },
  {
    "url": "assets/js/8.b83311fd.js",
    "revision": "742dada04341282cfeb9320274b0c124"
  },
  {
    "url": "assets/js/9.02afe7e4.js",
    "revision": "06f665bb77c1c300c217d633899f4ded"
  },
  {
    "url": "assets/js/app.170c0628.js",
    "revision": "95b0382ddcbdc1b079fec38173a45dd8"
  },
  {
    "url": "frontend/javascript/array-accessor-methods.html",
    "revision": "e661ee00a6bc0665d2fd66aa47501db3"
  },
  {
    "url": "frontend/javascript/array-iteration-methods.html",
    "revision": "5bb7f17b5bf0c93c6a671a2c90434ae3"
  },
  {
    "url": "frontend/javascript/array-mutator-methods.html",
    "revision": "74af3af13fb5b510709d9de53d460dc5"
  },
  {
    "url": "frontend/javascript/array.html",
    "revision": "8ebc692bd77a6bac5fd25d3dbe28f4f1"
  },
  {
    "url": "frontend/javascript/arrow-function.html",
    "revision": "ac30e92ad6377f45c5429809b06fa11d"
  },
  {
    "url": "frontend/javascript/can-not-read-property-of-undefined-or-null.html",
    "revision": "207638692c1af9506fa0faaf643871bc"
  },
  {
    "url": "frontend/javascript/error.html",
    "revision": "382787694cbcbd32916b677d5e0b130c"
  },
  {
    "url": "frontend/javascript/function-methods.html",
    "revision": "ba0def36166934750ed7370def421886"
  },
  {
    "url": "frontend/javascript/implicit-coercion.html",
    "revision": "cf0a852943cb5c882588f0ebf4da228a"
  },
  {
    "url": "frontend/javascript/index.html",
    "revision": "c032192b279dc1f88e8dfaee735b5420"
  },
  {
    "url": "frontend/javascript/invocation-expression.html",
    "revision": "d55b5bb8a9578e10546c337c6ec50caf"
  },
  {
    "url": "frontend/javascript/invoking-functions.html",
    "revision": "ed0a033192b0b1b7c7b26b223dc4b420"
  },
  {
    "url": "frontend/javascript/object-constructor-methods-freeze.html",
    "revision": "855723bdb66bdf65db164bbd7ec5658c"
  },
  {
    "url": "frontend/javascript/object-constructor-methods-property.html",
    "revision": "ceb7ac4c98c3c4c8166a848e0261db54"
  },
  {
    "url": "frontend/javascript/object-constructor-methods.html",
    "revision": "6428ff58a35dd2119225e4130bd37eb0"
  },
  {
    "url": "frontend/javascript/object-instance-methods.html",
    "revision": "0acdcf1f1e5fdd3c48ed637c9490262d"
  },
  {
    "url": "frontend/javascript/prototype-chain.html",
    "revision": "bd9742b394f3bf0119c6f8f304b8e214"
  },
  {
    "url": "frontend/javascript/resolve-function-call-in-jsx.html",
    "revision": "8f4953ba75e1353f4ed2b20a102acfe8"
  },
  {
    "url": "frontend/javascript/scope-and-closures.html",
    "revision": "e96a96eaeb19d382158d5fef22cac638"
  },
  {
    "url": "frontend/javascript/statements-and-expressions.html",
    "revision": "396c5dcb58ead0547b8da58c50ceffb7"
  },
  {
    "url": "frontend/javascript/string-concat.html",
    "revision": "f297fafec5283df2b9b96fd6ef4ff6e0"
  },
  {
    "url": "frontend/javascript/string-format.html",
    "revision": "4b635053c819b77b633df24c48657a52"
  },
  {
    "url": "frontend/javascript/string-query.html",
    "revision": "416ee1ae813ba859693883a44a61fa41"
  },
  {
    "url": "frontend/javascript/string-regexp.html",
    "revision": "7df06d75bd002b81f96f2a9faf9e5869"
  },
  {
    "url": "frontend/javascript/string-substring.html",
    "revision": "6a9fe83dd3f2e1161bba5b9447796078"
  },
  {
    "url": "frontend/javascript/this-identifier.html",
    "revision": "5b883dee5f38e3180ee7ba54a7f8b9da"
  },
  {
    "url": "guide/about-me.html",
    "revision": "2e654b6827496ec3dc8a4a21bb814eee"
  },
  {
    "url": "guide/index.html",
    "revision": "4f8b5c7649e00a403da64880dfa32583"
  },
  {
    "url": "icons/128.png",
    "revision": "9c7b598ed86a1ad5444cd14de0d8ee1e"
  },
  {
    "url": "icons/144.png",
    "revision": "019cb628e36d1e5bdc24c3e48b8c17d2"
  },
  {
    "url": "icons/192.png",
    "revision": "1852747a38e1867d752d44aea248d604"
  },
  {
    "url": "icons/256.png",
    "revision": "c1d463b6d8d75fd0e95e0f34ac2247c0"
  },
  {
    "url": "icons/512.png",
    "revision": "7639723bc3a570555d47c7d3fbf19756"
  },
  {
    "url": "index.html",
    "revision": "fd535743a00a083138ebb563e2484ad8"
  },
  {
    "url": "logo.jpg",
    "revision": "8c697e8fcb735bbc2ddd804742e647ea"
  }
].concat(self.__precacheManifest || []);
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
