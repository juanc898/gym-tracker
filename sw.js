// Minimal service worker — required for Chrome/Android to consider this an installable PWA.
// We don't need offline caching since data lives in Firestore, so this just passes through.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Pass-through: always fetch from network (no offline cache needed)
  e.respondWith(fetch(e.request));
});
