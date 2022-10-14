var app = new Framework7({
    // App root element
    el: '#app',
    routes: [
        {
            path: '/',
            url: 'index.html',
        },
        {
            path: '/readings/',
            url: 'pages/readings.html',
        },
        {
            path: '/music/',
            url: 'pages/music.html',
        },
        {
            path: '/shows/',
            url: 'pages/shows.html',
        },
        {
            path: '/otherMedia/',
            url: 'pages/other_media.html',
        }
    ]
   });
var mainView = app.views.create('.view-main');