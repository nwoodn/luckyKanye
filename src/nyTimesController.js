import 'whatwg-fetch'; //for polyfill
import $ from 'jquery';

const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIkey = "9298dbf29fe44ca6a9da2e8ddfb42452";

var controller = {

    searchDB: function (query) {
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "9298dbf29fe44ca6a9da2e8ddfb42452",
            'q': "kanye west"
        });
        console.log(url);
        return fetch(url)
            .then(function (res) { return res.json() })

    }
}


export default controller;