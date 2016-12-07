
var spotifyBase = "https://api.spotify.com";

var controller = {

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
    },

    search: function(input) {
        var inputArray = input.split(" ");
        var uriSearch = "";
        inputArray.forEach(function(word){
            uriSearch = word + "%20";
        });
        var uri = spotifyBase + "/v1/search?q=" + uriSearch +"&type=track"
        return fetch(uri)
            .then(function(res){
                var data = res.json();
                return data;
            })
    }
}

export default controller;