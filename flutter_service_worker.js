'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/lib/assets/friends_image_for_card.jpg": "ac4b2ab7eb21558ecf9a1d71d64f752b",
"assets/lib/assets/CouplesPhoto8.jpg": "004d6e18391ed5df6b8333123bac1cae",
"assets/lib/assets/CouplesPhoto4.jpeg": "33ade08b95cec88c453206a4864cddb3",
"assets/lib/assets/LaddhaFamilyPageImage.jpeg": "690ea2a0e371cd2b8f040bd8243564fe",
"assets/lib/assets/launcher_image.jpg": "b293ae02e719e41cbf56f6079506e5db",
"assets/lib/assets/CouplesPhoto10.jpg": "7ecbd25948dafda3a134ae01d6c6f7bb",
"assets/lib/assets/floating_hearts.gif": "444e6d714678465a1e24dba84bb800f5",
"assets/lib/assets/CouplesPhoto20.jpeg": "6c0c3df690e6d3b790c9a8c9d8745e76",
"assets/lib/assets/CouplesPhoto11.jpg": "9ef092367f5a6ae73de9888d737113cf",
"assets/lib/assets/CouplesPhoto2.jpeg": "8d4132b4e925f91438837e2cc89bfe3f",
"assets/lib/assets/CouplesPhoto12.jpeg": "a69542256f70a37e9c14ff82d4f42e88",
"assets/lib/assets/CouplesPhoto6.jpeg": "c97aa4c64b4ae2fe66abe002c57b45da",
"assets/lib/assets/soni_family_image_for_card.jpeg": "9f6763e6d9282771ed00ae245962a87e",
"assets/lib/assets/OFL.txt": "d3c034c8ae42d1e401a501cd8382f9a5",
"assets/lib/assets/laddha_family_image_for_card.jpeg": "10964bfee8bfa65fcc43d6e62ee108a9",
"assets/lib/assets/CouplesPhoto13.jpeg": "f8023a9af6509c7b1eab8fb38349fd79",
"assets/lib/assets/CouplesPhoto17.jpeg": "89cb9f2f0ef56398f70dddba778ed5ba",
"assets/lib/assets/CouplesPhoto7.jpeg": "cb262464e1dda7d50dffa575e6e93723",
"assets/lib/assets/CouplesPhoto15.jpeg": "e6e896885a78f72c1b7b5720e19931cc",
"assets/lib/assets/CouplesPhoto3.jpeg": "b931a772f5cb2e93ff6e994c7e103efc",
"assets/lib/assets/CouplesPhoto9.jpg": "48e2cdec7bdd399f5b95b0c2617471d0",
"assets/lib/assets/CouplesPhoto1.jpeg": "b1d0e8d4d6bb41ea0af8d9811afc62f6",
"assets/lib/assets/CouplesPhoto14.jpeg": "b2c9fd54f624cb04a68e72a7a7e0e1ea",
"assets/lib/assets/CouplesPhoto5.jpeg": "0eab8042f7ea0e8ca987905bb6109358",
"assets/lib/assets/journey_image_for_card.png": "ddf36c42475bacb0e5b257b8023b3904",
"assets/fonts/BalsamiqSans-Italic.ttf": "99e0b3470cea314fa44425673c4f463f",
"assets/fonts/BalsamiqSans-Regular.ttf": "d0e0c9d174a9cec8f1383ebd7bf51b31",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/BalsamiqSans-BoldItalic.ttf": "f9176db3a423b5c5122b8609d2c28105",
"assets/fonts/BalsamiqSans-Bold.ttf": "ed3ff13e6453434370d0d0a9f4ebc734",
"assets/FontManifest.json": "92c514570c7b51af4d3099e68f579c8e",
"assets/AssetManifest.json": "355c851369c3cef1f0c95ec2b0398524",
"assets/LICENSE": "7f72a5ed6ffa758ff0fe283c97ecf251",
"manifest.json": "61dc9666607431a5d843d06ba2fff9aa",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "45a68aa8e741327f5c76aee039164e15",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "21e872d0602b751763fdfd4042c09efa",
"/": "21e872d0602b751763fdfd4042c09efa"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
