'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e5279b164525338c2808126bed9367ba",
"assets/AssetManifest.json": "e9d75eef1675635de63feb0632425c82",
"assets/assets/caballo05.png": "2bc7ab6fe1b1d25d258fbb3fdf649448",
"assets/assets/Desafio1Contra1_2.jpeg": "0ba8b58e48eeb89455c3e77028891a00",
"assets/assets/Desafio1Contra1_Color.jpeg": "25234af3cfcaffc17b5c54cbff6cee33",
"assets/assets/Desafio1ContraTodos_2.jpeg": "6eaa80475da76d5cc997c686be9db078",
"assets/assets/DesafioSinElFavorito_2.jpeg": "325b9643a3037ff4fafa4dfa4d163714",
"assets/assets/DesafioSinElFavorito_Color.jpeg": "d96fda8c880b83e26e62764d149fe0ef",
"assets/assets/DesafioTotal_2.jpeg": "04d6a671896e7bdc0f113bcdfd3a9181",
"assets/assets/DesafioTotal_Color.jpeg": "19f1115d075b591cb98577da22747222",
"assets/assets/images/caballo05.png": "2bc7ab6fe1b1d25d258fbb3fdf649448",
"assets/assets/images/Desafio1Contra1_2.jpeg": "0ba8b58e48eeb89455c3e77028891a00",
"assets/assets/images/Desafio1Contra1_Color.jpeg": "25234af3cfcaffc17b5c54cbff6cee33",
"assets/assets/images/Desafio1ContraTodos_2.jpeg": "6eaa80475da76d5cc997c686be9db078",
"assets/assets/images/DesafioSinElFavorito_2.jpeg": "325b9643a3037ff4fafa4dfa4d163714",
"assets/assets/images/DesafioSinElFavorito_Color.jpeg": "d96fda8c880b83e26e62764d149fe0ef",
"assets/assets/images/DesafioTotal_2.jpeg": "04d6a671896e7bdc0f113bcdfd3a9181",
"assets/assets/images/DesafioTotal_Color.jpeg": "19f1115d075b591cb98577da22747222",
"assets/assets/images/lasflores1.jpg": "a3153c7e4c47030eab9166ab602bd3b7",
"assets/assets/images/Logo-Bets-3.png": "2466bd18c37be40c50e0dcd3c60135e1",
"assets/assets/images/logo-cba-3.jpg": "35e89dfc9d164ce5fc9560fc902a90c6",
"assets/assets/images/logo-eltreboljc-2.png": "d86cf2f7c9977664b477313c9608ee8e",
"assets/assets/images/logo-esterosJC-3.png": "604411da3450b876463f7b554a0c71b1",
"assets/assets/images/logo-ombujc-7.png": "00fa32cbb78ba8c4cee0de38a624537d",
"assets/assets/images/LogoAPPTurfBET4.png": "3d90d70a142e914cad8f3da5ea1947ca",
"assets/assets/images/logoBelgranoCabreraJockeyClub3.jpg": "a6645fe6f7d2ca4aa68464decf4d1eb0",
"assets/assets/images/logoDolores1.png": "c7f64e690754efc399ac9dbe8c7850f2",
"assets/assets/images/logoDolores4.png": "6c5457258dad6123758a5c67241487cf",
"assets/assets/images/logoHipodromoRosario.jpg": "b36df6dd370a6bceb35b7b04e12d01a3",
"assets/assets/images/logoHipodromoTucuman2.jpg": "f326dec9e1417dcb474524613408eb5d",
"assets/assets/images/logoJockeyClubSanFrancisco2.jpg": "2f53b1fccb3ad920971e8b38aa0d71c0",
"assets/assets/images/logoSantiBrito2.jpg": "f7aec97696a26b8bc4a5b933526b3db5",
"assets/assets/images/logoSVP%25C2%25AE3.jpg": "17887fd606c5aea60c88a2e38407269c",
"assets/assets/images/logoSVP1.png": "be356f89530511beb5be3757bd493cfd",
"assets/assets/images/LogoTurfBETTransparente.png": "7cec3b26b9866898d6c055f28ad81732",
"assets/assets/images/logo_RioCuarto_usar3.jpg": "f2a6b1c83a52ae7dc6a12bfc7e12ea9b",
"assets/assets/images/no-image-1.png": "1bdef0b5837fe56734fd7d7d93a83ee5",
"assets/assets/images/no-image-2.jpg": "335ceba57475f3c45f0d82f04b987bfa",
"assets/assets/images/sinImagen01.png": "a33cd45aff5ae16ca1dd768302e37c09",
"assets/assets/images/sinImagen02.jpg": "f47bf5dc766b6eb3a55cd6905159de2b",
"assets/assets/images/ytbPlayBotton.png": "a29ebc43f2475b4c7235fad683f498d8",
"assets/assets/json/setting.json": "a51c0fea845957bb1f3ca057efe4f8d6",
"assets/assets/l10n/en-US.json": "6dd5027fc861533e9f2dae62aea4897b",
"assets/assets/l10n/es-AR.json": "aac6866ffdee4b2704a55b2938da7a0b",
"assets/assets/l10n/es-ES.json": "aac6866ffdee4b2704a55b2938da7a0b",
"assets/assets/lasflores1.jpg": "a3153c7e4c47030eab9166ab602bd3b7",
"assets/assets/Logo-Bets-3.png": "2466bd18c37be40c50e0dcd3c60135e1",
"assets/assets/logo-cba-3.jpg": "35e89dfc9d164ce5fc9560fc902a90c6",
"assets/assets/logo-eltreboljc-2.png": "d86cf2f7c9977664b477313c9608ee8e",
"assets/assets/logo-esterosJC-3.png": "604411da3450b876463f7b554a0c71b1",
"assets/assets/logo-ombujc-7.png": "00fa32cbb78ba8c4cee0de38a624537d",
"assets/assets/LogoAPPTurfBET4.png": "3d90d70a142e914cad8f3da5ea1947ca",
"assets/assets/logoBelgranoCabreraJockeyClub3.jpg": "a6645fe6f7d2ca4aa68464decf4d1eb0",
"assets/assets/logoDolores1.png": "c7f64e690754efc399ac9dbe8c7850f2",
"assets/assets/logoDolores4.png": "6c5457258dad6123758a5c67241487cf",
"assets/assets/logoHipodromoRosario.jpg": "b36df6dd370a6bceb35b7b04e12d01a3",
"assets/assets/logoHipodromoTucuman2.jpg": "f326dec9e1417dcb474524613408eb5d",
"assets/assets/logoJockeyClubSanFrancisco2.jpg": "2f53b1fccb3ad920971e8b38aa0d71c0",
"assets/assets/logoSantiBrito2.jpg": "f7aec97696a26b8bc4a5b933526b3db5",
"assets/assets/logoSVP%25C2%25AE3.jpg": "17887fd606c5aea60c88a2e38407269c",
"assets/assets/logoSVP1.png": "be356f89530511beb5be3757bd493cfd",
"assets/assets/LogoTurfBETTransparente.png": "7cec3b26b9866898d6c055f28ad81732",
"assets/assets/logo_RioCuarto_usar3.jpg": "f2a6b1c83a52ae7dc6a12bfc7e12ea9b",
"assets/assets/no-image-1.png": "1bdef0b5837fe56734fd7d7d93a83ee5",
"assets/assets/no-image-2.jpg": "335ceba57475f3c45f0d82f04b987bfa",
"assets/assets/sinImagen01.png": "a33cd45aff5ae16ca1dd768302e37c09",
"assets/assets/sinImagen02.jpg": "f47bf5dc766b6eb3a55cd6905159de2b",
"assets/assets/ytbPlayBotton.png": "a29ebc43f2475b4c7235fad683f498d8",
"assets/FontManifest.json": "b69f1c0236fe9335b24a340e6dca72b5",
"assets/fonts/MaterialIcons-Regular.otf": "95937747646da58d95c4d51ed1eb299b",
"assets/NOTICES": "9e0bf828e9e2fefa4c1b0dba8b6d9916",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/dropdown_button2/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon%20-%20original.png": "5dcef449791fa27946b3d35ad8803796",
"favicon-x512.png": "be356f89530511beb5be3757bd493cfd",
"favicon.ico": "70a7bbe91368bb3efa658054625073b9",
"favicon.png": "df286664d0fd58ff78ccb662eddf4f3c",
"firebase-messaging-sw.js": "73ebdfd815bb9c3f7d1498604b38d4ed",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192%20-%20original.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192-o.png": "36bc12929d0d6205bb5782fdbae8462f",
"icons/Icon-192.png": "f4aee006b8e46852a4380c085a1594e4",
"icons/Icon-512%20-%20original.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-512-o.png": "be356f89530511beb5be3757bd493cfd",
"icons/Icon-512.png": "753289cfd636e03e7cb65e0683b9d39c",
"icons/Icon-maskable-192.png": "f4aee006b8e46852a4380c085a1594e4",
"icons/Icon-maskable-512.png": "753289cfd636e03e7cb65e0683b9d39c",
"index.html": "81167e55ebd7a105d3d782c7e057c665",
"/": "81167e55ebd7a105d3d782c7e057c665",
"main.dart.js": "36018da5cddc896138b5c5fa1507572d",
"manifest.json": "01e83fdc6df80b7c8a43d99ca371ba14",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "431cc28dc41c04d8be4413234333e68d",
"version.json": "84060348c919cfea4f132d485ff5cd85"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
