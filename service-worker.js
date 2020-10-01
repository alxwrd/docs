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
    "url": "404.html",
    "revision": "bc6e49d0d9a397cd1a799a6740e586b9"
  },
  {
    "url": "annotations.html",
    "revision": "484285b64b4b6539f8a8e8d7bcee5751"
  },
  {
    "url": "assets/css/0.styles.12f75f35.css",
    "revision": "804ea70da9affe96036f9c24fced917a"
  },
  {
    "url": "assets/img/err-422-swui.abcf1054.png",
    "revision": "abcf1054db171750b85d94d57a232aff"
  },
  {
    "url": "assets/img/errors-client.8c545526.png",
    "revision": "8c54552649e7349065bb8839351529d2"
  },
  {
    "url": "assets/img/errors-json-client.281534f3.png",
    "revision": "281534f3154c83e9673738f942eb454c"
  },
  {
    "url": "assets/img/errors-json-server.8d28ca48.png",
    "revision": "8d28ca48e78c7a8383b770ea1aa57774"
  },
  {
    "url": "assets/img/errors-server.c923a910.png",
    "revision": "c923a91036ddede850666c665b20cd7d"
  },
  {
    "url": "assets/img/jsdoc-method.9bfd2316.png",
    "revision": "9bfd2316c02dc6e8a92a536c362db346"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/SwaggerUI.faac8e72.png",
    "revision": "faac8e72ce413b51c78465adb9e6382b"
  },
  {
    "url": "assets/img/swui-alias.50b1bde7.png",
    "revision": "50b1bde755ca1bca4d14035e2deec587"
  },
  {
    "url": "assets/img/swui-endpoint-description.f12d2880.png",
    "revision": "f12d2880700088f56e11d0ef8525bb5c"
  },
  {
    "url": "assets/img/SwUi-Response.59b451a9.png",
    "revision": "59b451a91dcdb0ac2fc2c1d8ee6fdc51"
  },
  {
    "url": "assets/js/10.5f71d4e0.js",
    "revision": "0c0ec91d9ef05f97dd0e89e6e7570d1a"
  },
  {
    "url": "assets/js/11.e55a1df4.js",
    "revision": "5745c8cd05034d0d213fc97b125104d6"
  },
  {
    "url": "assets/js/12.27efda8b.js",
    "revision": "794cce71585ced76d138f6305891e519"
  },
  {
    "url": "assets/js/13.9855fe0b.js",
    "revision": "7e6235f30e74ab986c38f45cddb7f754"
  },
  {
    "url": "assets/js/14.543b181d.js",
    "revision": "b9b01ccf94c1b250ae5516b78ce8e258"
  },
  {
    "url": "assets/js/15.df99a1b7.js",
    "revision": "3ab4746dc0897da19e14cd0470eaa46e"
  },
  {
    "url": "assets/js/16.44379a4c.js",
    "revision": "8a813fb7d7eb859f031e9a9954f41d0c"
  },
  {
    "url": "assets/js/17.366fb5a5.js",
    "revision": "38de31179ae14d29cc572f6d0d1659f8"
  },
  {
    "url": "assets/js/18.7b392229.js",
    "revision": "046b8cae0ed78b7ddb926dc6cfcb8eed"
  },
  {
    "url": "assets/js/19.2f0a92c8.js",
    "revision": "f7a02c78592ccb1792067303cb2a3e94"
  },
  {
    "url": "assets/js/2.ab57128e.js",
    "revision": "ba451933d5e22ba6a4d2f555b5dfe670"
  },
  {
    "url": "assets/js/20.1ec7435e.js",
    "revision": "3348d1c7ac48b9bb16f8a3aa28a0d30c"
  },
  {
    "url": "assets/js/21.9c01ab55.js",
    "revision": "68b6b6db07a6fb0de1b3c8954358b0c4"
  },
  {
    "url": "assets/js/22.730c95c0.js",
    "revision": "f91c01ec0097cb0bff80fc784b52d9cd"
  },
  {
    "url": "assets/js/23.85b8787d.js",
    "revision": "7749ec6c2b1ef846a7dc40956a55c1e9"
  },
  {
    "url": "assets/js/24.34f00647.js",
    "revision": "a80f708e817ef77ff2624fa0cc768197"
  },
  {
    "url": "assets/js/25.59e1c873.js",
    "revision": "a5152a08840afd9fb4e9595ae2dcbfb9"
  },
  {
    "url": "assets/js/26.dba59441.js",
    "revision": "75d9631cad38a7f4cf4773a3a6701dfc"
  },
  {
    "url": "assets/js/3.545f5bf2.js",
    "revision": "f4bdb00076a5480d1aa5b3c6e1711da5"
  },
  {
    "url": "assets/js/4.45455133.js",
    "revision": "2358c249a48c9f1f2adb18e62ba6f452"
  },
  {
    "url": "assets/js/5.c2aa3cf6.js",
    "revision": "78c846ee6169769b75d7f2115011d925"
  },
  {
    "url": "assets/js/6.c07319d3.js",
    "revision": "0d65c98e84d4d7138dbb983f7cd4ff11"
  },
  {
    "url": "assets/js/7.f5776ab4.js",
    "revision": "c5501e96cf881b9c9276a82c1bced3ab"
  },
  {
    "url": "assets/js/8.04a6e67f.js",
    "revision": "4951536f70da24eb7216c6f2c8b9e3ef"
  },
  {
    "url": "assets/js/9.ef1ffe6d.js",
    "revision": "2137a8bbeedfe7cfb3a52c8760c15cf5"
  },
  {
    "url": "assets/js/app.5e889cb0.js",
    "revision": "5af5f2d59fc7a2d1206588edc55cd4ec"
  },
  {
    "url": "authentication.html",
    "revision": "2fef4e326c8f443a48066116fecfcf7a"
  },
  {
    "url": "decorators.html",
    "revision": "3de40f9c320ba4d0a32934f3b3805471"
  },
  {
    "url": "descriptions.html",
    "revision": "1f4383ad4463d33412fa982a64da511a"
  },
  {
    "url": "di.html",
    "revision": "140921b9b21ff35721671998b73d919e"
  },
  {
    "url": "error-handling.html",
    "revision": "571c19bbfe4ffa798632abbbfc269583"
  },
  {
    "url": "examples.html",
    "revision": "c4542857229b8da40ac1ccaeeb86c399"
  },
  {
    "url": "faq.html",
    "revision": "74511b954677ac212ebf9be7092f51bb"
  },
  {
    "url": "file-upload.html",
    "revision": "e96f6089b5ce137824f823b96f366f3d"
  },
  {
    "url": "generating.html",
    "revision": "7b37d24482eba574c2062f580957b5fd"
  },
  {
    "url": "getting-started.html",
    "revision": "4f81f7096da96b0d5243fb905bf3aec7"
  },
  {
    "url": "index.html",
    "revision": "10b91f7a3eeb58c88dd2f55b32658358"
  },
  {
    "url": "introduction.html",
    "revision": "ad1356fc9401e98fd16a62d0b7f4f59a"
  },
  {
    "url": "live-reloading.html",
    "revision": "71654f8ee9b616db9c8e3a1347603a09"
  },
  {
    "url": "path-mapping.html",
    "revision": "a6875ee38d180f1a7fa884b778e18fee"
  },
  {
    "url": "routes.html",
    "revision": "5c08ed238c855f3aa50953df2537bf05"
  },
  {
    "url": "templates.html",
    "revision": "b1d75d85cd5302649e8923e878eaa07a"
  },
  {
    "url": "upgrading.html",
    "revision": "38da28514c7bc536d75e4459baf0f022"
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
