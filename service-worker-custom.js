importScripts("/react-app-poc-sudeep/precache-manifest.e728046ceccc180c8bfee0f8627e8326.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');

    workbox.setConfig({
      debug: true
    });

    self.__precacheManifest = [].concat(self.__precacheManifest || []);

    /* injection point for manifest files.  */
    // workbox.precaching.precacheAndRoute([]);
    workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

    /* custom cache rules */
    workbox.routing.registerNavigationRoute('/index.html', {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/]
    });

    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg)$/,
      new workbox.strategies.CacheFirst({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
          })
        ]
      })
    );
  } else {
    console.log('Workbox could not be loaded. No Offline support');
  }

  // Event handlers
  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  self.addEventListener('install', event => {
    console.log('install');
  });
  self.addEventListener('activate', event => {
    console.log('activate');
  });
  self.addEventListener('notificationclick', event => {
    const clickedNotification = event.notification;
    clickedNotification.close();
  });
  self.addEventListener('push', event => {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
    const title = 'Server notifcation';
    const options = {
      body: event.data.text(),
      icon: 'icon_192.png'
    };
    event.waitUntil(self.registration.showNotification(title, options));
  });

  workbox.core.clientsClaim();
}

