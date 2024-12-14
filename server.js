// const express = require('express');
// const connectToDatabase = require('./db'); // Database connection
// const verbalAbuseRoutes = require('./verbalAbuse'); // Verbal abuse route
// const contactRoutes = require('./contact'); // Contact form route

// const app = express();
// const PORT = 3000;

// // Middleware
// app.use(express.json());

// // Connect to the database
// connectToDatabase();

// // Routes
// app.use('/api/verbal-abuse', verbalAbuseRoutes); // Verbal abuse route
// app.use('/api/contact', contactRoutes); // Contact form route

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


const CACHE_NAME = 'safe-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/logo-women-Photoroom.png'
];

// Install the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate the service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});

