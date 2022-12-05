self.addEventListener('install', e => {
    console.log('Install');
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./assets/css/bootstrap.min.css", "./assets/css/style.css", "./assets/img/logo512x512.png", "./assets/js/app.js", "./assets/js/bootstrap.bundle.min.js" , "./assets/js/moment.min.js",  './assets/img/logo192x192.png', "./assets/img/logo.png"])
        })
    );

})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
           return  response || fetch(e.request)
        })
    )
});