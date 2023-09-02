'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3d76919590f5f03ee91dd91a2241916e",
"index.html": "5c71fc54fdb6f0f9f9d97cd7d41cabd6",
"/": "5c71fc54fdb6f0f9f9d97cd7d41cabd6",
"main.dart.js": "1dab326ffa3d9941200ab4dcebe7ad65",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fe7eb07bf1b9dfec63546a4a4c644919",
"assets/AssetManifest.json": "19d1dd86c10dc841930a2a94b8d406eb",
"assets/NOTICES": "53620c5b7df18df060eff6ade4ea83e1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "e0caaa71fe601d9d7270c641d3085d85",
"assets/fonts/MaterialIcons-Regular.otf": "8727e65fbd2acc19cc8a6be2a4df6175",
"assets/assets/flashcard.png": "66ab449ec4b845fe73d11aac904598dc",
"assets/assets/conditionsba_icon.png": "a7f171369f6d59c054e1d1b2b59d872e",
"assets/assets/brain_icon.png": "fc741e18c53a01b204436400f6946a4e",
"assets/assets/drugsba_icon.png": "db12358617dea75f2856022c56d69a70",
"assets/assets/icon.png": "8526a7b97528ea8546acc411ab0067c6",
"assets/assets/dsbaicons/anesthetics.png": "812992677b3ce955858e8c59f911ecbd",
"assets/assets/dsbaicons/antipsychotics.png": "5c3ab2e5890b0416866413b056e75029",
"assets/assets/dsbaicons/thyroid.png": "2c807dc8447f38656b2e8a3a41e2e238",
"assets/assets/dsbaicons/contraceptives.png": "b15f24a2a5201a1928020127ef5af543",
"assets/assets/dsbaicons/oncology.png": "688ed09a6b3b1cc3f7954534988680be",
"assets/assets/dsbaicons/antidiabetics.png": "7f8c9a79c40c30281d508765b27cb793",
"assets/assets/dsbaicons/cardio.png": "23de06e32ee7b73b69fc94f09cc62d7a",
"assets/assets/dsbaicons/antidepressants.png": "69c1879719971888e135a79987d2f0ab",
"assets/assets/dsbaicons/anxiolytics.png": "bf7104248f39075aa6d0aa1d6a340ea8",
"assets/assets/dsbaicons/lipid.png": "75608304e42474ff7ff7cfaebc4d7f07",
"assets/assets/dsbaicons/antihypertensives.png": "f3dc2ec2fcb22b8aa98b5469ce5819ab",
"assets/assets/dsbaicons/dermatological.png": "95f949a6807649f1e1519fa6961954e4",
"assets/assets/dsbaicons/gestrointestinal.png": "ea43c55d0d027d5917ac72bcc55e635e",
"assets/assets/dsbaicons/analgesics.png": "cbd45eea3e57dc2b2dff3ddf042ed19a",
"assets/assets/dsbaicons/anticoagulants.png": "424081a2b26ebc8051d58135a789c303",
"assets/assets/dsbaicons/antiallergics.png": "9a188bdc4d2a78f4d1051f7f182d81f3",
"assets/assets/dsbaicons/anti_infectives.png": "6566a96b3bcf04423fa8b1f0cd424db3",
"assets/assets/dsbaicons/antiasthamatic.png": "9850dd64dae21285b3091a3d646d4555",
"assets/assets/dsbaicons/lipid_lowering.png": "268ca537d27bfa4f212512bf661f5c06",
"assets/assets/dsbaicons/respiratory.png": "e7e79ac770a419f58908c5ba062bad41",
"assets/assets/dsbaicons/imunomodulator.png": "b2bccab5b97b455dcefaab179fb59dd9",
"assets/assets/dsbaicons/vitamins.png": "82aba172c7f64e8b68eb19120e59ecd4",
"assets/assets/dsbaicons/antibiotics.png": "02c47f51012e5cb4493ee23abd39b0a3",
"assets/assets/dsbaicons/urinary.png": "a5f48fb717bc1153949eefbf8cffbc88",
"assets/assets/loginpage.jpg": "a4a011bee7d58ba02a970363af5dc763",
"assets/assets/settings.png": "46661bb1dbe1ecd76f5b8f2afadc2f4c",
"assets/assets/drugflashcard.png": "10b3ef00f6b5a91a8e1fc5a9406a2c0e",
"assets/assets/conditionflashcard.png": "fa2de4dffcd01232e114bb8c1845b934",
"assets/assets/contact.png": "2cb1267bfb2dc6f2dcd2d9a510a01727",
"assets/assets/logo1.png": "8e850d358da120fc42486592fd059c87",
"assets/assets/error.png": "ef7638514abeff79922aab05bd070cfb",
"assets/assets/topdrugs.png": "a203d3d3cc2f321bf9ac7cbf077c372c",
"assets/assets/csbaicons/infect.png": "120e37c4be98ac4b83f65cc8c18957b6",
"assets/assets/csbaicons/dermo.png": "95f949a6807649f1e1519fa6961954e4",
"assets/assets/csbaicons/renal.png": "350abde37d915cc69fbf0da77b06218c",
"assets/assets/csbaicons/mental.png": "1868a165426eea6a726292e38c107959",
"assets/assets/csbaicons/cardio.png": "bbdf03890a867665edaef41e5ab672c2",
"assets/assets/csbaicons/sextual.png": "12e19d91b4f45f8be9084243fea03a0c",
"assets/assets/csbaicons/gastro.png": "0740d0d717147927164e74c416a82a3a",
"assets/assets/csbaicons/ent.png": "a33da728f86d2a1579962a309852699a",
"assets/assets/csbaicons/optho.png": "0ab9915fea0bc4941d4bb376282217b1",
"assets/assets/csbaicons/hema.png": "6cd3eda3e5c584de193c6a46e60f8398",
"assets/assets/csbaicons/respi.png": "5fd4d6e8592edce1522d4eb47a8c79b0",
"assets/assets/csbaicons/fmr.png": "fcda5839b8bfe132ca4a2eb9d8b4c6c4",
"assets/assets/csbaicons/msk.png": "943f98ab6e420421941b4f2df1310903",
"assets/assets/csbaicons/endocri.png": "0e1ad7bf92792ea7227419d45c7829e5",
"assets/assets/csbaicons/nuro.png": "94ac459d9940775233f82d7046d7eb86",
"assets/assets/perror_icon.png": "242cf3a572dab2d54078fb3db79cb6a5",
"assets/assets/google.png": "1e01fe36388e7453ab926c23b190827c",
"assets/assets/crown.png": "d7b0902fb25eba71eeaf1ca298780ba8",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
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
