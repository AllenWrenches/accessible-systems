/*
This is modified version of Ethan Marcotte's service worker, which is a (very, very lightly) modified version of Jeremy Keith’s service worker (https://adactio.com/serviceworker.js), with a few additional edits borrowed from Filament Group’s (https://www.filamentgroup.com/sw.js). Stand on the shoulders of giants and geniuses.
*/

(function () {
  "use strict";

  const version = "v20180924";
  const cacheName = version + "::asi:";

  const staticCacheName = cacheName + "static";
  const pagesCacheName = cacheName + "pages";
  const imagesCacheName = cacheName + "images";

  const offlinePages = ["/"];
  const staticAssets = [
    "/fonts/cooper-hewitt/cooperhewitt-book-webfont.woff2",
    "/img/logo.svg",
    "/img/logo-text.svg",
    "/apple-touch-icon.png",
  ];

  function updateStaticCache() {
    return caches.open(staticCacheName).then((cache) => {
      // These items won't block the installation of the Service Worker
      cache.addAll(
        offlinePages.map(
          (url) =>
            new Request(url, {
              credentials: "include",
            })
        )
      );

      // These items must be cached for the Service Worker to complete installation
      return cache.addAll(
        staticAssets.map(
          (url) =>
            new Request(url, {
              credentials: "include",
            })
        )
      );
    });
  }

  function stashInCache(cacheName, request, response) {
    caches.open(cacheName).then((cache) => cache.put(request, response));
  }

  // Limit the number of items in a specified cache.
  function trimCache(cacheName, maxItems) {
    caches.open(cacheName).then((cache) => {
      cache.keys().then((keys) => {
        if (keys.length > maxItems) {
          cache.delete(keys[0]).then(trimCache(cacheName, maxItems));
        }
      });
    });
  }

  // Remove caches whose name is no longer valid
  function clearOldCaches() {
    return caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key.indexOf(version) !== 0)
          .map((key) => caches.delete(key))
      );
    });
  }

  // Events!
  self.addEventListener("message", (event) => {
    if (event.data.command == "trimCaches") {
      trimCache(pagesCacheName, 35);
      trimCache(imagesCacheName, 20);
    }
  });

  self.addEventListener("install", (event) => {
    event.waitUntil(updateStaticCache().then(() => self.skipWaiting()));
  });

  self.addEventListener("activate", (event) => {
    event.waitUntil(clearOldCaches().then(() => self.clients.claim()));
  });

  self.addEventListener("fetch", (event) => {
    let request = event.request;
    let url = new URL(request.url);

    // Ignore non-GET requests
    if (request.method !== "GET") {
      return;
    }

    // Ignore query-string’d requests
    if (request.url.indexOf("?") !== -1) {
      return;
    }

    // For HTML requests, try the network first, fall back to the cache, finally the offline page
    if (request.headers.get("Accept").indexOf("text/html") !== -1) {
      event.respondWith(
        fetch(request)
          .then((response) => {
            // NETWORK
            // Stash a copy of this page in the pages cache
            let copy = response.clone();
            if (
              offlinePages.includes(url.pathname) ||
              offlinePages.includes(url.pathname + "/")
            ) {
              stashInCache(staticCacheName, request, copy);
            } else {
              stashInCache(pagesCacheName, request, copy);
            }
            return response;
          })
          .catch(() => {
            // CACHE or FALLBACK
            return caches
              .match(request)
              .then((response) => response || caches.match("/offline/"));
          })
      );
      return;
    }

    if (request.headers.get("Accept").indexOf("video") !== -1) {
      // For non-HTML requests, look in the cache first, fall back to the network
      event.respondWith(
        caches.match(request).then((response) => {
          // CACHE
          return (
            response ||
            fetch(request)
              .then((response) => {
                // NETWORK
                // If the request is for an image, stash a copy of this image in the images cache
                if (request.headers.get("Accept").indexOf("image") !== -1) {
                  let copy = response.clone();
                  stashInCache(imagesCacheName, request, copy);
                }
                return response;
              })
              .catch(() => {
                // OFFLINE
                // If the request is for an image, show an offline placeholder
                if (request.headers.get("Accept").indexOf("image") !== -1) {
                  return new Response(
                    '<svg role="img" aria-labelledby="offline-title" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title id="offline-title">Offline</title><g fill="none" fill-rule="evenodd"><path fill="#f9f9f9" d="M0 0h400v300H0z"/><text fill="#777777" font-family="Source Serif Pro, Times, serif" font-size="72" font-weight="bold"><tspan x="93" y="172">offline</tspan></text></g></svg>',
                    {
                      headers: {
                        "Content-Type": "image/svg+xml",
                        "Cache-Control": "no-store",
                      },
                    }
                  );
                }
              })
          );
        })
      );
    }
  });
})();
