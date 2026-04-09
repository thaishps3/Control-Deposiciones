const CACHE_NAME = 'atencio-focal-v1';
const ASSETS = [
  './',
  './index.html'
];

// Instalación: Guarda los archivos en la memoria del móvil
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Guardando archivos en caché...');
      return cache.addAll(ASSETS);
    })
  );
});

// Interceptor: Si no hay internet, sirve la copia guardada
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(response => {
      return response || fetch(evt.request);
    })
  );
});