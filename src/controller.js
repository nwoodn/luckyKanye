import About from './About';

var spotifyBase = "https://api.spotify.com";

var controller = {

    albums: function(artistId) {
        var uri = spotifyBase+'/v1/artists/'+artistId+'/albums';

         return fetch(uri) 
            .then(function(res) {
                var data = res.json();
                return data;
            })
    },

    album: function(albumId) {

        var uri = spotifyBase + '/v1/albums/' + albumId + '/tracks';
        return fetch(uri)
            .then(function(res) { 
                var data = res.json();
                return data; 
            })
    },

    quote: function() {
        return fetch("https://yepi.io/api/quote")
            .then(function(res) { 
                var data = res.text();
                return data;
            })
    },

    popular: function(artistId) {

        var uri = spotifyBase + '/v1/artists/' + artistId + '/top-tracks?country=US';
        return fetch(uri)
            .then(function(res) {
                var data = res.json();
                return data;
            })
    }
}

export default controller;