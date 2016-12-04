import React, { Component } from 'react';

import controller from './controller.js';

import {Form, FormControl, InputGroup, Button, Glyphicon, Image} from 'react-bootstrap';

import './about.css';

//import Frame from 'react-frame-component';

var SONG_STATUS = {playing:false, songPlaying:"", audio: new Audio()};
var SEARCHED = false;
var search_pt1 = {
  "tracks" : {
    "href" : "https://api.spotify.com/v1/search?query=pt.1&offset=0&limit=20&type=track",
    "items" : [ {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x"
          },
          "href" : "https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x",
          "id" : "5K4W6rqBFWDnAN6FQUkS6x",
          "name" : "Kanye West",
          "type" : "artist",
          "uri" : "spotify:artist:5K4W6rqBFWDnAN6FQUkS6x"
        } ],
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/7gsWAHLeT0w7es6FofOXk1"
        },
        "href" : "https://api.spotify.com/v1/albums/7gsWAHLeT0w7es6FofOXk1",
        "id" : "7gsWAHLeT0w7es6FofOXk1",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/443372cd2c6d4245833fb46ac1c5dabca00c78a9",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/d2351cd8009379e06421c31fe7de3f87178b4e66",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/4c9fcc4c6f9408a4111f963143d8d13fb58df2b3",
          "width" : 64
        } ],
        "name" : "The Life Of Pablo",
        "type" : "album",
        "uri" : "spotify:album:7gsWAHLeT0w7es6FofOXk1"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x"
        },
        "href" : "https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x",
        "id" : "5K4W6rqBFWDnAN6FQUkS6x",
        "name" : "Kanye West",
        "type" : "artist",
        "uri" : "spotify:artist:5K4W6rqBFWDnAN6FQUkS6x"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 135920,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USUM71603067"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/4KW1lqgSr8TKrvBII0Brf8"
      },
      "href" : "https://api.spotify.com/v1/tracks/4KW1lqgSr8TKrvBII0Brf8",
      "id" : "4KW1lqgSr8TKrvBII0Brf8",
      "name" : "Father Stretch My Hands Pt. 1",
      "popularity" : 79,
      "preview_url" : "https://p.scdn.co/mp3-preview/c06126ce865f0355269220872536f3f43d112aca",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:4KW1lqgSr8TKrvBII0Brf8"
    }, {
      "album" : {
        "album_type" : "compilation",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1ZwdS5xdxEREPySFridCfh"
          },
          "href" : "https://api.spotify.com/v1/artists/1ZwdS5xdxEREPySFridCfh",
          "id" : "1ZwdS5xdxEREPySFridCfh",
          "name" : "2Pac",
          "type" : "artist",
          "uri" : "spotify:artist:1ZwdS5xdxEREPySFridCfh"
        } ],
        "available_markets" : [ "CA", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4Y9ISbppFbwk0r1XCLUi0I"
        },
        "href" : "https://api.spotify.com/v1/albums/4Y9ISbppFbwk0r1XCLUi0I",
        "id" : "4Y9ISbppFbwk0r1XCLUi0I",
        "images" : [ {
          "height" : 573,
          "url" : "https://i.scdn.co/image/d2f70dba239c3143e7317b3245a5557dad9d7d4e",
          "width" : 640
        }, {
          "height" : 269,
          "url" : "https://i.scdn.co/image/20e68538f6ca047d16de7ec4a97b6bd16e1cc7dd",
          "width" : 300
        }, {
          "height" : 57,
          "url" : "https://i.scdn.co/image/9b7a81063596efbe922b5139471ab74854f9506f",
          "width" : 64
        } ],
        "name" : "The Best of 2Pac - Pt. 1: Thug",
        "type" : "album",
        "uri" : "spotify:album:4Y9ISbppFbwk0r1XCLUi0I"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1ZwdS5xdxEREPySFridCfh"
        },
        "href" : "https://api.spotify.com/v1/artists/1ZwdS5xdxEREPySFridCfh",
        "id" : "1ZwdS5xdxEREPySFridCfh",
        "name" : "2Pac",
        "type" : "artist",
        "uri" : "spotify:artist:1ZwdS5xdxEREPySFridCfh"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6DPYiyq5kWVQS4RGwxzPC7"
        },
        "href" : "https://api.spotify.com/v1/artists/6DPYiyq5kWVQS4RGwxzPC7",
        "id" : "6DPYiyq5kWVQS4RGwxzPC7",
        "name" : "Dr. Dre",
        "type" : "artist",
        "uri" : "spotify:artist:6DPYiyq5kWVQS4RGwxzPC7"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3GMoVpWJy4smKuxFuFTwXC"
        },
        "href" : "https://api.spotify.com/v1/artists/3GMoVpWJy4smKuxFuFTwXC",
        "id" : "3GMoVpWJy4smKuxFuFTwXC",
        "name" : "Roger",
        "type" : "artist",
        "uri" : "spotify:artist:3GMoVpWJy4smKuxFuFTwXC"
      } ],
      "available_markets" : [ "CA", "US" ],
      "disc_number" : 1,
      "duration_ms" : 284480,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USUG10702628"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3djNBlI7xOggg7pnsOLaNm"
      },
      "href" : "https://api.spotify.com/v1/tracks/3djNBlI7xOggg7pnsOLaNm",
      "id" : "3djNBlI7xOggg7pnsOLaNm",
      "name" : "California Love - Original Mix (Explicit)",
      "popularity" : 65,
      "preview_url" : "https://p.scdn.co/mp3-preview/5a31dbda06faeb9cec55db1ab508659f3ec3758f",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:3djNBlI7xOggg7pnsOLaNm"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/01QTIT5P1pFP3QnnFSdsJf"
          },
          "href" : "https://api.spotify.com/v1/artists/01QTIT5P1pFP3QnnFSdsJf",
          "id" : "01QTIT5P1pFP3QnnFSdsJf",
          "name" : "Lupe Fiasco",
          "type" : "artist",
          "uri" : "spotify:artist:01QTIT5P1pFP3QnnFSdsJf"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5rCCCernTo6IwFwEZM4H53"
        },
        "href" : "https://api.spotify.com/v1/albums/5rCCCernTo6IwFwEZM4H53",
        "id" : "5rCCCernTo6IwFwEZM4H53",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/e0c2e6170301b64c41685dd06fbd509b192c0221",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/99e301ea57735546cabde90e2e1fc3a373c95412",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ec547eaa9f790b30e25485af92ebe14ed13b710f",
          "width" : 64
        } ],
        "name" : "Food & Liquor II: The Great American Rap Album Pt. 1",
        "type" : "album",
        "uri" : "spotify:album:5rCCCernTo6IwFwEZM4H53"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/01QTIT5P1pFP3QnnFSdsJf"
        },
        "href" : "https://api.spotify.com/v1/artists/01QTIT5P1pFP3QnnFSdsJf",
        "id" : "01QTIT5P1pFP3QnnFSdsJf",
        "name" : "Lupe Fiasco",
        "type" : "artist",
        "uri" : "spotify:artist:01QTIT5P1pFP3QnnFSdsJf"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5PjekOABtfU2Kwo0AHVmci"
        },
        "href" : "https://api.spotify.com/v1/artists/5PjekOABtfU2Kwo0AHVmci",
        "id" : "5PjekOABtfU2Kwo0AHVmci",
        "name" : "Guy Sebastian",
        "type" : "artist",
        "uri" : "spotify:artist:5PjekOABtfU2Kwo0AHVmci"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 250320,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "AUBM01200186"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1hWYT0w2R0J19rlVkiez7X"
      },
      "href" : "https://api.spotify.com/v1/tracks/1hWYT0w2R0J19rlVkiez7X",
      "id" : "1hWYT0w2R0J19rlVkiez7X",
      "name" : "Battle Scars",
      "popularity" : 69,
      "preview_url" : "https://p.scdn.co/mp3-preview/aab1e1fdc85fb333885570ca7c2d32fd8e3322b3",
      "track_number" : 11,
      "type" : "track",
      "uri" : "spotify:track:1hWYT0w2R0J19rlVkiez7X"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
          },
          "href" : "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
          "id" : "1Xyo4u8uXC1ZmMpatF05PJ",
          "name" : "The Weeknd",
          "type" : "artist",
          "uri" : "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
        } ],
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5EbpxRwbbpCJUepbqVTZ1U"
        },
        "href" : "https://api.spotify.com/v1/albums/5EbpxRwbbpCJUepbqVTZ1U",
        "id" : "5EbpxRwbbpCJUepbqVTZ1U",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/de99a43ba33a35473bfdb6561744bb9fde1609c9",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/40d3043c132a46c3fba7728fb9c117cd1339058d",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ccf6b135095173d85855f66c34021a80a3c51309",
          "width" : 64
        } ],
        "name" : "Trilogy",
        "type" : "album",
        "uri" : "spotify:album:5EbpxRwbbpCJUepbqVTZ1U"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
        },
        "href" : "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
        "id" : "1Xyo4u8uXC1ZmMpatF05PJ",
        "name" : "The Weeknd",
        "type" : "artist",
        "uri" : "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 2,
      "duration_ms" : 214186,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USUM71212216"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/323ujVhfSg16TlRK0PB5JY"
      },
      "href" : "https://api.spotify.com/v1/tracks/323ujVhfSg16TlRK0PB5JY",
      "id" : "323ujVhfSg16TlRK0PB5JY",
      "name" : "The Birds Pt. 1",
      "popularity" : 59,
      "preview_url" : "https://p.scdn.co/mp3-preview/8b348de7c32e8bf16b29a14d1ec25783d9c9d5d1",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:323ujVhfSg16TlRK0PB5JY"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
          },
          "href" : "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
          "id" : "3Nrfpe0tUJi4K4DXYWgMUX",
          "name" : "BTS",
          "type" : "artist",
          "uri" : "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6yRUOoA0Z4jgr6qcKcFAbH"
        },
        "href" : "https://api.spotify.com/v1/albums/6yRUOoA0Z4jgr6qcKcFAbH",
        "id" : "6yRUOoA0Z4jgr6qcKcFAbH",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/2cae43b4e51449729b60743627565478a9b61029",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/41fe5ec122f48c0807caddf6203abac091c77c94",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/dbcbb2c8ace752824ed46be37fdffa61164e132e",
          "width" : 64
        } ],
        "name" : "화양연화 The Most Beautiful Moment In Life, Pt. 1",
        "type" : "album",
        "uri" : "spotify:album:6yRUOoA0Z4jgr6qcKcFAbH"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
        },
        "href" : "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
        "id" : "3Nrfpe0tUJi4K4DXYWgMUX",
        "name" : "BTS",
        "type" : "artist",
        "uri" : "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 240020,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "KRA341519833"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/0pGHou9D7JTMKbMfOLKy50"
      },
      "href" : "https://api.spotify.com/v1/tracks/0pGHou9D7JTMKbMfOLKy50",
      "id" : "0pGHou9D7JTMKbMfOLKy50",
      "name" : "쩔어 DOPE",
      "popularity" : 68,
      "preview_url" : "https://p.scdn.co/mp3-preview/5693f6a8d81574f6c4d89f79742d6521c637c70e",
      "track_number" : 5,
      "type" : "track",
      "uri" : "spotify:track:0pGHou9D7JTMKbMfOLKy50"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
          },
          "href" : "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
          "id" : "3Nrfpe0tUJi4K4DXYWgMUX",
          "name" : "BTS",
          "type" : "artist",
          "uri" : "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6yRUOoA0Z4jgr6qcKcFAbH"
        },
        "href" : "https://api.spotify.com/v1/albums/6yRUOoA0Z4jgr6qcKcFAbH",
        "id" : "6yRUOoA0Z4jgr6qcKcFAbH",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/2cae43b4e51449729b60743627565478a9b61029",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/41fe5ec122f48c0807caddf6203abac091c77c94",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/dbcbb2c8ace752824ed46be37fdffa61164e132e",
          "width" : 64
        } ],
        "name" : "화양연화 The Most Beautiful Moment In Life, Pt. 1",
        "type" : "album",
        "uri" : "spotify:album:6yRUOoA0Z4jgr6qcKcFAbH"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
        },
        "href" : "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
        "id" : "3Nrfpe0tUJi4K4DXYWgMUX",
        "name" : "BTS",
        "type" : "artist",
        "uri" : "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 210986,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "KRA341519830"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/2ySKRXKN58cbIlY1cxd80y"
      },
      "href" : "https://api.spotify.com/v1/tracks/2ySKRXKN58cbIlY1cxd80y",
      "id" : "2ySKRXKN58cbIlY1cxd80y",
      "name" : "I NEED U",
      "popularity" : 67,
      "preview_url" : "https://p.scdn.co/mp3-preview/40f4bde2ff8aae3f99d4fd0528a84a78f1294158",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:2ySKRXKN58cbIlY1cxd80y"
    }, {
      "album" : {
        "album_type" : "compilation",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1ZwdS5xdxEREPySFridCfh"
          },
          "href" : "https://api.spotify.com/v1/artists/1ZwdS5xdxEREPySFridCfh",
          "id" : "1ZwdS5xdxEREPySFridCfh",
          "name" : "2Pac",
          "type" : "artist",
          "uri" : "spotify:artist:1ZwdS5xdxEREPySFridCfh"
        } ],
        "available_markets" : [ "CA", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4Y9ISbppFbwk0r1XCLUi0I"
        },
        "href" : "https://api.spotify.com/v1/albums/4Y9ISbppFbwk0r1XCLUi0I",
        "id" : "4Y9ISbppFbwk0r1XCLUi0I",
        "images" : [ {
          "height" : 573,
          "url" : "https://i.scdn.co/image/d2f70dba239c3143e7317b3245a5557dad9d7d4e",
          "width" : 640
        }, {
          "height" : 269,
          "url" : "https://i.scdn.co/image/20e68538f6ca047d16de7ec4a97b6bd16e1cc7dd",
          "width" : 300
        }, {
          "height" : 57,
          "url" : "https://i.scdn.co/image/9b7a81063596efbe922b5139471ab74854f9506f",
          "width" : 64
        } ],
        "name" : "The Best of 2Pac - Pt. 1: Thug",
        "type" : "album",
        "uri" : "spotify:album:4Y9ISbppFbwk0r1XCLUi0I"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1ZwdS5xdxEREPySFridCfh"
        },
        "href" : "https://api.spotify.com/v1/artists/1ZwdS5xdxEREPySFridCfh",
        "id" : "1ZwdS5xdxEREPySFridCfh",
        "name" : "2Pac",
        "type" : "artist",
        "uri" : "spotify:artist:1ZwdS5xdxEREPySFridCfh"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3LZHVt8ARTNwvWP75S8lJj"
        },
        "href" : "https://api.spotify.com/v1/artists/3LZHVt8ARTNwvWP75S8lJj",
        "id" : "3LZHVt8ARTNwvWP75S8lJj",
        "name" : "Talent",
        "type" : "artist",
        "uri" : "spotify:artist:3LZHVt8ARTNwvWP75S8lJj"
      } ],
      "available_markets" : [ "CA", "US" ],
      "disc_number" : 1,
      "duration_ms" : 268960,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USIR10110269"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/00i2HU7TEzzftShjRrDSEF"
      },
      "href" : "https://api.spotify.com/v1/tracks/00i2HU7TEzzftShjRrDSEF",
      "id" : "00i2HU7TEzzftShjRrDSEF",
      "name" : "Changes - (Explicit)",
      "popularity" : 61,
      "preview_url" : "https://p.scdn.co/mp3-preview/51f5321e8a0b0cb9fb822351a35b8460898c6ab9",
      "track_number" : 7,
      "type" : "track",
      "uri" : "spotify:track:00i2HU7TEzzftShjRrDSEF"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6UE7nl9mha6s8z0wFQFIZ2"
          },
          "href" : "https://api.spotify.com/v1/artists/6UE7nl9mha6s8z0wFQFIZ2",
          "id" : "6UE7nl9mha6s8z0wFQFIZ2",
          "name" : "Robyn",
          "type" : "artist",
          "uri" : "spotify:artist:6UE7nl9mha6s8z0wFQFIZ2"
        } ],
        "available_markets" : [ "CA", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4ektWErsV6EIxW0jBWq1Jn"
        },
        "href" : "https://api.spotify.com/v1/albums/4ektWErsV6EIxW0jBWq1Jn",
        "id" : "4ektWErsV6EIxW0jBWq1Jn",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/c8732f599221de060333e71406b3a7a39444cfb2",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/7be045fb40b01b8d0e049f4a8d26f4b7ca52fb48",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/4729163ca010be7ad635c24540aa67a78c0c66f6",
          "width" : 64
        } ],
        "name" : "Body Talk Pt. 1",
        "type" : "album",
        "uri" : "spotify:album:4ektWErsV6EIxW0jBWq1Jn"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6UE7nl9mha6s8z0wFQFIZ2"
        },
        "href" : "https://api.spotify.com/v1/artists/6UE7nl9mha6s8z0wFQFIZ2",
        "id" : "6UE7nl9mha6s8z0wFQFIZ2",
        "name" : "Robyn",
        "type" : "artist",
        "uri" : "spotify:artist:6UE7nl9mha6s8z0wFQFIZ2"
      } ],
      "available_markets" : [ "CA", "US" ],
      "disc_number" : 1,
      "duration_ms" : 285973,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "SEWKZ1000003"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3Rc2ajBMInxeNGVkMPC92Y"
      },
      "href" : "https://api.spotify.com/v1/tracks/3Rc2ajBMInxeNGVkMPC92Y",
      "id" : "3Rc2ajBMInxeNGVkMPC92Y",
      "name" : "Dancing On My Own",
      "popularity" : 57,
      "preview_url" : "https://p.scdn.co/mp3-preview/4a0c441be115b2d9f22422f95bedfb243e0a4536",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:3Rc2ajBMInxeNGVkMPC92Y"
    }, {
      "album" : {
        "album_type" : "compilation",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/1ZwdS5xdxEREPySFridCfh"
          },
          "href" : "https://api.spotify.com/v1/artists/1ZwdS5xdxEREPySFridCfh",
          "id" : "1ZwdS5xdxEREPySFridCfh",
          "name" : "2Pac",
          "type" : "artist",
          "uri" : "spotify:artist:1ZwdS5xdxEREPySFridCfh"
        } ],
        "available_markets" : [ "CA", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4Y9ISbppFbwk0r1XCLUi0I"
        },
        "href" : "https://api.spotify.com/v1/albums/4Y9ISbppFbwk0r1XCLUi0I",
        "id" : "4Y9ISbppFbwk0r1XCLUi0I",
        "images" : [ {
          "height" : 573,
          "url" : "https://i.scdn.co/image/d2f70dba239c3143e7317b3245a5557dad9d7d4e",
          "width" : 640
        }, {
          "height" : 269,
          "url" : "https://i.scdn.co/image/20e68538f6ca047d16de7ec4a97b6bd16e1cc7dd",
          "width" : 300
        }, {
          "height" : 57,
          "url" : "https://i.scdn.co/image/9b7a81063596efbe922b5139471ab74854f9506f",
          "width" : 64
        } ],
        "name" : "The Best of 2Pac - Pt. 1: Thug",
        "type" : "album",
        "uri" : "spotify:album:4Y9ISbppFbwk0r1XCLUi0I"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/1ZwdS5xdxEREPySFridCfh"
        },
        "href" : "https://api.spotify.com/v1/artists/1ZwdS5xdxEREPySFridCfh",
        "id" : "1ZwdS5xdxEREPySFridCfh",
        "name" : "2Pac",
        "type" : "artist",
        "uri" : "spotify:artist:1ZwdS5xdxEREPySFridCfh"
      } ],
      "available_markets" : [ "CA", "US" ],
      "disc_number" : 1,
      "duration_ms" : 312080,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USUG10702630"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1PNwRnxuRfxjqnzmrmBjeo"
      },
      "href" : "https://api.spotify.com/v1/tracks/1PNwRnxuRfxjqnzmrmBjeo",
      "id" : "1PNwRnxuRfxjqnzmrmBjeo",
      "name" : "Hail Mary - (Explicit)",
      "popularity" : 59,
      "preview_url" : "https://p.scdn.co/mp3-preview/9f365f86f164d96e2d099557da446b031aed7aca",
      "track_number" : 8,
      "type" : "track",
      "uri" : "spotify:track:1PNwRnxuRfxjqnzmrmBjeo"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3PgKMVEjv0S3Nz8krppvvL"
          },
          "href" : "https://api.spotify.com/v1/artists/3PgKMVEjv0S3Nz8krppvvL",
          "id" : "3PgKMVEjv0S3Nz8krppvvL",
          "name" : "Translee",
          "type" : "artist",
          "uri" : "spotify:artist:3PgKMVEjv0S3Nz8krppvvL"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/09XBR9OJs7g1Ix9kKRngqp"
        },
        "href" : "https://api.spotify.com/v1/albums/09XBR9OJs7g1Ix9kKRngqp",
        "id" : "09XBR9OJs7g1Ix9kKRngqp",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/2f9c00ee30ca4d863b5d53308d395859715abe1a",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ec5a4fcb8096507539c8b35eb86f297274acd9e2",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/5de758d1785f41fbac4ec858044ad78e2dd20575",
          "width" : 64
        } ],
        "name" : "M.A.O.T.P., Pt. 1",
        "type" : "album",
        "uri" : "spotify:album:09XBR9OJs7g1Ix9kKRngqp"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3PgKMVEjv0S3Nz8krppvvL"
        },
        "href" : "https://api.spotify.com/v1/artists/3PgKMVEjv0S3Nz8krppvvL",
        "id" : "3PgKMVEjv0S3Nz8krppvvL",
        "name" : "Translee",
        "type" : "artist",
        "uri" : "spotify:artist:3PgKMVEjv0S3Nz8krppvvL"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 210360,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "QZ4TE1600009"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5TSg57CVjhHgH7CaNQK5fJ"
      },
      "href" : "https://api.spotify.com/v1/tracks/5TSg57CVjhHgH7CaNQK5fJ",
      "id" : "5TSg57CVjhHgH7CaNQK5fJ",
      "name" : "Lost in the Sauce",
      "popularity" : 55,
      "preview_url" : "https://p.scdn.co/mp3-preview/98c3f83884b629e96940df59aed52764c45c510f",
      "track_number" : 9,
      "type" : "track",
      "uri" : "spotify:track:5TSg57CVjhHgH7CaNQK5fJ"
    }, {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/20lGLFmdtadbUYmqzFRcA2"
          },
          "href" : "https://api.spotify.com/v1/artists/20lGLFmdtadbUYmqzFRcA2",
          "id" : "20lGLFmdtadbUYmqzFRcA2",
          "name" : "The Echelon Effect",
          "type" : "artist",
          "uri" : "spotify:artist:20lGLFmdtadbUYmqzFRcA2"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/75kov09rYLhJ3kHI81kWb8"
        },
        "href" : "https://api.spotify.com/v1/albums/75kov09rYLhJ3kHI81kWb8",
        "id" : "75kov09rYLhJ3kHI81kWb8",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/eb5caf4c160533b993e168c5ab18a2e86f2263e2",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/990f90f5a9d31f134fec3f47802ac5add1d1dafd",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/dc7add4428b38868f5e0398c0e2ea4481d3ab8ab",
          "width" : 64
        } ],
        "name" : "Seasons, Pt. 1",
        "type" : "album",
        "uri" : "spotify:album:75kov09rYLhJ3kHI81kWb8"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/20lGLFmdtadbUYmqzFRcA2"
        },
        "href" : "https://api.spotify.com/v1/artists/20lGLFmdtadbUYmqzFRcA2",
        "id" : "20lGLFmdtadbUYmqzFRcA2",
        "name" : "The Echelon Effect",
        "type" : "artist",
        "uri" : "spotify:artist:20lGLFmdtadbUYmqzFRcA2"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 310136,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "TCAAX1159133"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/1wB11k8gqugetTqQmbmN9E"
      },
      "href" : "https://api.spotify.com/v1/tracks/1wB11k8gqugetTqQmbmN9E",
      "id" : "1wB11k8gqugetTqQmbmN9E",
      "name" : "Your First Light My Eventide",
      "popularity" : 57,
      "preview_url" : "https://p.scdn.co/mp3-preview/b7a8c76bb6d1138108088783981e2efc288d4b48",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:1wB11k8gqugetTqQmbmN9E"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3p3jPcp8b7WL9XYj4xlsWj"
          },
          "href" : "https://api.spotify.com/v1/artists/3p3jPcp8b7WL9XYj4xlsWj",
          "id" : "3p3jPcp8b7WL9XYj4xlsWj",
          "name" : "Snow Tha Product",
          "type" : "artist",
          "uri" : "spotify:artist:3p3jPcp8b7WL9XYj4xlsWj"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6yYY1YIGjTk8tPwyTIyx6c"
        },
        "href" : "https://api.spotify.com/v1/albums/6yYY1YIGjTk8tPwyTIyx6c",
        "id" : "6yYY1YIGjTk8tPwyTIyx6c",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/475c1cbf9ecf52c6bc40ed5aa02cad2d900778cf",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/b3a42f66239db753879464e82777123767da92ec",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/91438162cfbd51670846f375163f23ae5dfe246d",
          "width" : 64
        } ],
        "name" : "Half Way There...Pt. 1",
        "type" : "album",
        "uri" : "spotify:album:6yYY1YIGjTk8tPwyTIyx6c"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3p3jPcp8b7WL9XYj4xlsWj"
        },
        "href" : "https://api.spotify.com/v1/artists/3p3jPcp8b7WL9XYj4xlsWj",
        "id" : "3p3jPcp8b7WL9XYj4xlsWj",
        "name" : "Snow Tha Product",
        "type" : "artist",
        "uri" : "spotify:artist:3p3jPcp8b7WL9XYj4xlsWj"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2i8526w9fGlJcGVmepDyM4"
        },
        "href" : "https://api.spotify.com/v1/artists/2i8526w9fGlJcGVmepDyM4",
        "id" : "2i8526w9fGlJcGVmepDyM4",
        "name" : "Ohana Bam",
        "type" : "artist",
        "uri" : "spotify:artist:2i8526w9fGlJcGVmepDyM4"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 207851,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USAT21601541"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/05ApEAT889haImO4kMB6Z1"
      },
      "href" : "https://api.spotify.com/v1/tracks/05ApEAT889haImO4kMB6Z1",
      "id" : "05ApEAT889haImO4kMB6Z1",
      "name" : "Get Down Low (feat. Ohana Bam)",
      "popularity" : 56,
      "preview_url" : "https://p.scdn.co/mp3-preview/be54106459a2ee37ac273d9a8113403574446f5c",
      "track_number" : 4,
      "type" : "track",
      "uri" : "spotify:track:05ApEAT889haImO4kMB6Z1"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2ooIqOf4X2uz4mMptXCtie"
          },
          "href" : "https://api.spotify.com/v1/artists/2ooIqOf4X2uz4mMptXCtie",
          "id" : "2ooIqOf4X2uz4mMptXCtie",
          "name" : "Neutral Milk Hotel",
          "type" : "artist",
          "uri" : "spotify:artist:2ooIqOf4X2uz4mMptXCtie"
        } ],
        "available_markets" : [ "AR", "AU", "BO", "BR", "CA", "CL", "CO", "CR", "CY", "DO", "EC", "GT", "HK", "HN", "ID", "JP", "MX", "MY", "NI", "NZ", "PA", "PE", "PH", "PY", "SG", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5COXoP5kj2DWfCDg0vxi4F"
        },
        "href" : "https://api.spotify.com/v1/albums/5COXoP5kj2DWfCDg0vxi4F",
        "id" : "5COXoP5kj2DWfCDg0vxi4F",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/4bd59c0b2ef97a9225600b4d5d5e7b45395ed9ad",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/e614108e0a6e7393372afc56e6ef9753296b926b",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/6654c58b5c6e4e2d38c2d325d38d85b5df6780d0",
          "width" : 64
        } ],
        "name" : "In the Aeroplane Over the Sea",
        "type" : "album",
        "uri" : "spotify:album:5COXoP5kj2DWfCDg0vxi4F"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2ooIqOf4X2uz4mMptXCtie"
        },
        "href" : "https://api.spotify.com/v1/artists/2ooIqOf4X2uz4mMptXCtie",
        "id" : "2ooIqOf4X2uz4mMptXCtie",
        "name" : "Neutral Milk Hotel",
        "type" : "artist",
        "uri" : "spotify:artist:2ooIqOf4X2uz4mMptXCtie"
      } ],
      "available_markets" : [ "AR", "AU", "BO", "BR", "CA", "CL", "CO", "CR", "CY", "DO", "EC", "GT", "HK", "HN", "ID", "JP", "MX", "MY", "NI", "NZ", "PA", "PE", "PH", "PY", "SG", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 120426,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USMRG0316015"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/17Nowmq4iF2rkbd1rAe1Vt"
      },
      "href" : "https://api.spotify.com/v1/tracks/17Nowmq4iF2rkbd1rAe1Vt",
      "id" : "17Nowmq4iF2rkbd1rAe1Vt",
      "name" : "King of Carrot Flowers Pt. 1",
      "popularity" : 53,
      "preview_url" : "https://p.scdn.co/mp3-preview/819c776142451ea143b5f6fc8a8ed8dad6318da8",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:17Nowmq4iF2rkbd1rAe1Vt"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9"
          },
          "href" : "https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9",
          "id" : "0k17h0D3J5VfsdmQ1iZtE9",
          "name" : "Pink Floyd",
          "type" : "artist",
          "uri" : "spotify:artist:0k17h0D3J5VfsdmQ1iZtE9"
        } ],
        "available_markets" : [ "AR", "AU", "BO", "BR", "CA", "CL", "CO", "CR", "DO", "EC", "GT", "HK", "HN", "ID", "JP", "MX", "MY", "NI", "NZ", "PA", "PE", "PH", "PY", "SG", "SV", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5Dbax7G8SWrP9xyzkOvy2F"
        },
        "href" : "https://api.spotify.com/v1/albums/5Dbax7G8SWrP9xyzkOvy2F",
        "id" : "5Dbax7G8SWrP9xyzkOvy2F",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/61fbfc12c92752d2334547c00d5f13b8b7edba94",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/464f49ec36104a5939ea76cf1597a5311d91f602",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/1e8320282c222089439b3b775008fde1080efde8",
          "width" : 64
        } ],
        "name" : "The Wall",
        "type" : "album",
        "uri" : "spotify:album:5Dbax7G8SWrP9xyzkOvy2F"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9"
        },
        "href" : "https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9",
        "id" : "0k17h0D3J5VfsdmQ1iZtE9",
        "name" : "Pink Floyd",
        "type" : "artist",
        "uri" : "spotify:artist:0k17h0D3J5VfsdmQ1iZtE9"
      } ],
      "available_markets" : [ "AR", "AU", "BO", "BR", "CA", "CL", "CO", "CR", "DO", "EC", "GT", "HK", "HN", "ID", "JP", "MX", "MY", "NI", "NZ", "PA", "PE", "PH", "PY", "SG", "SV", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 192145,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBN9Y1100097"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7K6xMPtAjTuLPNlJMLf5bS"
      },
      "href" : "https://api.spotify.com/v1/tracks/7K6xMPtAjTuLPNlJMLf5bS",
      "id" : "7K6xMPtAjTuLPNlJMLf5bS",
      "name" : "Another Brick in the Wall, Pt. 1",
      "popularity" : 58,
      "preview_url" : "https://p.scdn.co/mp3-preview/d081caf9ee7854854064eb155782db78015bdd97",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:7K6xMPtAjTuLPNlJMLf5bS"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/610EjgFatGvVPtib97jQ8G"
          },
          "href" : "https://api.spotify.com/v1/artists/610EjgFatGvVPtib97jQ8G",
          "id" : "610EjgFatGvVPtib97jQ8G",
          "name" : "NEEDTOBREATHE",
          "type" : "artist",
          "uri" : "spotify:artist:610EjgFatGvVPtib97jQ8G"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/0DjJIQPOsxd5OiUoVskRBH"
        },
        "href" : "https://api.spotify.com/v1/albums/0DjJIQPOsxd5OiUoVskRBH",
        "id" : "0DjJIQPOsxd5OiUoVskRBH",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/b7484dfc8117e6a8c6e7ffa948ab204383023836",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/4c1f7f6ca2596ce7bccaa97ba57380d4db504b77",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/8aee6a18bca261139ab849e2a716e67e929398bf",
          "width" : 64
        } ],
        "name" : "H A R D L O V E",
        "type" : "album",
        "uri" : "spotify:album:0DjJIQPOsxd5OiUoVskRBH"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/610EjgFatGvVPtib97jQ8G"
        },
        "href" : "https://api.spotify.com/v1/artists/610EjgFatGvVPtib97jQ8G",
        "id" : "610EjgFatGvVPtib97jQ8G",
        "name" : "NEEDTOBREATHE",
        "type" : "artist",
        "uri" : "spotify:artist:610EjgFatGvVPtib97jQ8G"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 56360,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USAT21601073"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5B2s8mPL2jvdRVwCPAqy3Z"
      },
      "href" : "https://api.spotify.com/v1/tracks/5B2s8mPL2jvdRVwCPAqy3Z",
      "id" : "5B2s8mPL2jvdRVwCPAqy3Z",
      "name" : "MOUNTAIN, Pt 1",
      "popularity" : 49,
      "preview_url" : "https://p.scdn.co/mp3-preview/d92f06ee56bc7a7102184f5590d80b6f9bb01194",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:5B2s8mPL2jvdRVwCPAqy3Z"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
          },
          "href" : "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
          "id" : "3Nrfpe0tUJi4K4DXYWgMUX",
          "name" : "BTS",
          "type" : "artist",
          "uri" : "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6yRUOoA0Z4jgr6qcKcFAbH"
        },
        "href" : "https://api.spotify.com/v1/albums/6yRUOoA0Z4jgr6qcKcFAbH",
        "id" : "6yRUOoA0Z4jgr6qcKcFAbH",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/2cae43b4e51449729b60743627565478a9b61029",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/41fe5ec122f48c0807caddf6203abac091c77c94",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/dbcbb2c8ace752824ed46be37fdffa61164e132e",
          "width" : 64
        } ],
        "name" : "화양연화 The Most Beautiful Moment In Life, Pt. 1",
        "type" : "album",
        "uri" : "spotify:album:6yRUOoA0Z4jgr6qcKcFAbH"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
        },
        "href" : "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
        "id" : "3Nrfpe0tUJi4K4DXYWgMUX",
        "name" : "BTS",
        "type" : "artist",
        "uri" : "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 274991,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "KRA341519831"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/5iGTbsdHGSDNrO0QSTjdgB"
      },
      "href" : "https://api.spotify.com/v1/tracks/5iGTbsdHGSDNrO0QSTjdgB",
      "id" : "5iGTbsdHGSDNrO0QSTjdgB",
      "name" : "잡아줘 Hold Me Tight",
      "popularity" : 57,
      "preview_url" : "https://p.scdn.co/mp3-preview/d243649f8839940dba0bcce4345557bef307ba33",
      "track_number" : 3,
      "type" : "track",
      "uri" : "spotify:track:5iGTbsdHGSDNrO0QSTjdgB"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2M4eNCvV3CJUswavkhAQg2"
          },
          "href" : "https://api.spotify.com/v1/artists/2M4eNCvV3CJUswavkhAQg2",
          "id" : "2M4eNCvV3CJUswavkhAQg2",
          "name" : "James Newton Howard",
          "type" : "artist",
          "uri" : "spotify:artist:2M4eNCvV3CJUswavkhAQg2"
        } ],
        "available_markets" : [ "CA", "MX", "US" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/44qAUS0siEj2plisdS25xw"
        },
        "href" : "https://api.spotify.com/v1/albums/44qAUS0siEj2plisdS25xw",
        "id" : "44qAUS0siEj2plisdS25xw",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/5903c72f6ea5bdf38344f6c6d470f19a188da065",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/15a0d7ac0f87f21556474cc60dc0ca30f8e3b7ba",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/544a83a9c1708af622ba145b344713f2da82eace",
          "width" : 64
        } ],
        "name" : "The Hunger Games: Mockingjay Pt. 1 (Original Motion Picture Score)",
        "type" : "album",
        "uri" : "spotify:album:44qAUS0siEj2plisdS25xw"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2M4eNCvV3CJUswavkhAQg2"
        },
        "href" : "https://api.spotify.com/v1/artists/2M4eNCvV3CJUswavkhAQg2",
        "id" : "2M4eNCvV3CJUswavkhAQg2",
        "name" : "James Newton Howard",
        "type" : "artist",
        "uri" : "spotify:artist:2M4eNCvV3CJUswavkhAQg2"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3oCIYpmkFw8KGWwMNPKgXh"
        },
        "href" : "https://api.spotify.com/v1/artists/3oCIYpmkFw8KGWwMNPKgXh",
        "id" : "3oCIYpmkFw8KGWwMNPKgXh",
        "name" : "Jennifer Lawrence",
        "type" : "artist",
        "uri" : "spotify:artist:3oCIYpmkFw8KGWwMNPKgXh"
      } ],
      "available_markets" : [ "CA", "MX", "US" ],
      "disc_number" : 1,
      "duration_ms" : 218506,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "USUG11401803"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/416MsJxvxSKY96DCmbJIRs"
      },
      "href" : "https://api.spotify.com/v1/tracks/416MsJxvxSKY96DCmbJIRs",
      "id" : "416MsJxvxSKY96DCmbJIRs",
      "name" : "The Hanging Tree",
      "popularity" : 55,
      "preview_url" : "https://p.scdn.co/mp3-preview/075f93f17eb4831b20952b0af850e6f6b6ef0cba",
      "track_number" : 11,
      "type" : "track",
      "uri" : "spotify:track:416MsJxvxSKY96DCmbJIRs"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
          },
          "href" : "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
          "id" : "3Nrfpe0tUJi4K4DXYWgMUX",
          "name" : "BTS",
          "type" : "artist",
          "uri" : "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6yRUOoA0Z4jgr6qcKcFAbH"
        },
        "href" : "https://api.spotify.com/v1/albums/6yRUOoA0Z4jgr6qcKcFAbH",
        "id" : "6yRUOoA0Z4jgr6qcKcFAbH",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/2cae43b4e51449729b60743627565478a9b61029",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/41fe5ec122f48c0807caddf6203abac091c77c94",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/dbcbb2c8ace752824ed46be37fdffa61164e132e",
          "width" : 64
        } ],
        "name" : "화양연화 The Most Beautiful Moment In Life, Pt. 1",
        "type" : "album",
        "uri" : "spotify:album:6yRUOoA0Z4jgr6qcKcFAbH"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"
        },
        "href" : "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
        "id" : "3Nrfpe0tUJi4K4DXYWgMUX",
        "name" : "BTS",
        "type" : "artist",
        "uri" : "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 244156,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "KRA341519834"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7bugWHwDnA8rIqh0xvym0V"
      },
      "href" : "https://api.spotify.com/v1/tracks/7bugWHwDnA8rIqh0xvym0V",
      "id" : "7bugWHwDnA8rIqh0xvym0V",
      "name" : "흥탄소년단 Boyz with Fun",
      "popularity" : 58,
      "preview_url" : "https://p.scdn.co/mp3-preview/f5413a995b5c8ca9ab5ec31137f8b6f1731568ad",
      "track_number" : 6,
      "type" : "track",
      "uri" : "spotify:track:7bugWHwDnA8rIqh0xvym0V"
    }, {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0UEP2XBR9aC5NBKcAKnBIq"
          },
          "href" : "https://api.spotify.com/v1/artists/0UEP2XBR9aC5NBKcAKnBIq",
          "id" : "0UEP2XBR9aC5NBKcAKnBIq",
          "name" : "CHEN",
          "type" : "artist",
          "uri" : "spotify:artist:0UEP2XBR9aC5NBKcAKnBIq"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/4ufh0WuMZh6y4Dmdnklvdl"
          },
          "href" : "https://api.spotify.com/v1/artists/4ufh0WuMZh6y4Dmdnklvdl",
          "id" : "4ufh0WuMZh6y4Dmdnklvdl",
          "name" : "BAEKHYUN",
          "type" : "artist",
          "uri" : "spotify:artist:4ufh0WuMZh6y4Dmdnklvdl"
        }, {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/5t0Js3X9t4wpgXGlaiTFe6"
          },
          "href" : "https://api.spotify.com/v1/artists/5t0Js3X9t4wpgXGlaiTFe6",
          "id" : "5t0Js3X9t4wpgXGlaiTFe6",
          "name" : "XIUMIN",
          "type" : "artist",
          "uri" : "spotify:artist:5t0Js3X9t4wpgXGlaiTFe6"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/6Ws1NetwWwXXK50IrNvs7R"
        },
        "href" : "https://api.spotify.com/v1/albums/6Ws1NetwWwXXK50IrNvs7R",
        "id" : "6Ws1NetwWwXXK50IrNvs7R",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/362c105c119c3473484f431b7a8a3f4e4acb8199",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/a9d80c764eb4d3ac916d44d5f406f3b1005572a1",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/26f95eb76f6319875ec54b568590c3ef29d44afe",
          "width" : 64
        } ],
        "name" : "Moonlovers: Scarlet Heart Ryeo (Original Television Soundtrack), Pt 1",
        "type" : "album",
        "uri" : "spotify:album:6Ws1NetwWwXXK50IrNvs7R"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0UEP2XBR9aC5NBKcAKnBIq"
        },
        "href" : "https://api.spotify.com/v1/artists/0UEP2XBR9aC5NBKcAKnBIq",
        "id" : "0UEP2XBR9aC5NBKcAKnBIq",
        "name" : "CHEN",
        "type" : "artist",
        "uri" : "spotify:artist:0UEP2XBR9aC5NBKcAKnBIq"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/4ufh0WuMZh6y4Dmdnklvdl"
        },
        "href" : "https://api.spotify.com/v1/artists/4ufh0WuMZh6y4Dmdnklvdl",
        "id" : "4ufh0WuMZh6y4Dmdnklvdl",
        "name" : "BAEKHYUN",
        "type" : "artist",
        "uri" : "spotify:artist:4ufh0WuMZh6y4Dmdnklvdl"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5t0Js3X9t4wpgXGlaiTFe6"
        },
        "href" : "https://api.spotify.com/v1/artists/5t0Js3X9t4wpgXGlaiTFe6",
        "id" : "5t0Js3X9t4wpgXGlaiTFe6",
        "name" : "XIUMIN",
        "type" : "artist",
        "uri" : "spotify:artist:5t0Js3X9t4wpgXGlaiTFe6"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 196549,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "KRA491600494"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/7rLvsAO1yb7ElxPhkz60qh"
      },
      "href" : "https://api.spotify.com/v1/tracks/7rLvsAO1yb7ElxPhkz60qh",
      "id" : "7rLvsAO1yb7ElxPhkz60qh",
      "name" : "For You",
      "popularity" : 65,
      "preview_url" : "https://p.scdn.co/mp3-preview/6fa2656782fcb8d419ce70fccc12ad3b64229829",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:7rLvsAO1yb7ElxPhkz60qh"
    }, {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6If57j6e3TXXk0HiLcIZca"
          },
          "href" : "https://api.spotify.com/v1/artists/6If57j6e3TXXk0HiLcIZca",
          "id" : "6If57j6e3TXXk0HiLcIZca",
          "name" : "Sevyn Streeter",
          "type" : "artist",
          "uri" : "spotify:artist:6If57j6e3TXXk0HiLcIZca"
        } ],
        "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IT", "JP", "LT", "LU", "LV", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/5Mi8vSDmTyjL3yxsgUxrWm"
        },
        "href" : "https://api.spotify.com/v1/albums/5Mi8vSDmTyjL3yxsgUxrWm",
        "id" : "5Mi8vSDmTyjL3yxsgUxrWm",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/898567009b6326082923b192bf86ea421b77a736",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/fdfa7be35ded2595bc54167ef7eb7e71dd87c4ae",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/f5363f1943e5600cfc549e274e9140be6ce1f9b8",
          "width" : 64
        } ],
        "name" : "Shoulda Been There Pt. 1",
        "type" : "album",
        "uri" : "spotify:album:5Mi8vSDmTyjL3yxsgUxrWm"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6If57j6e3TXXk0HiLcIZca"
        },
        "href" : "https://api.spotify.com/v1/artists/6If57j6e3TXXk0HiLcIZca",
        "id" : "6If57j6e3TXXk0HiLcIZca",
        "name" : "Sevyn Streeter",
        "type" : "artist",
        "uri" : "spotify:artist:6If57j6e3TXXk0HiLcIZca"
      }, {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/5ndkK3dpZLKtBklKjxNQwT"
        },
        "href" : "https://api.spotify.com/v1/artists/5ndkK3dpZLKtBklKjxNQwT",
        "id" : "5ndkK3dpZLKtBklKjxNQwT",
        "name" : "B.o.B",
        "type" : "artist",
        "uri" : "spotify:artist:5ndkK3dpZLKtBklKjxNQwT"
      } ],
      "available_markets" : [ "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IT", "JP", "LT", "LU", "LV", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 211746,
      "explicit" : true,
      "external_ids" : {
        "isrc" : "USAT21500841"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/03BB0xEzzKC24Z6zDpZ3QC"
      },
      "href" : "https://api.spotify.com/v1/tracks/03BB0xEzzKC24Z6zDpZ3QC",
      "id" : "03BB0xEzzKC24Z6zDpZ3QC",
      "name" : "Shoulda Been There (feat. B.o.B)",
      "popularity" : 51,
      "preview_url" : "https://p.scdn.co/mp3-preview/3ff8c12f05987db2d143317dd79bf84624548156",
      "track_number" : 12,
      "type" : "track",
      "uri" : "spotify:track:03BB0xEzzKC24Z6zDpZ3QC"
    } ],
    "limit" : 20,
    "next" : "https://api.spotify.com/v1/search?query=pt.1&offset=20&limit=20&type=track",
    "offset" : 0,
    "previous" : null,
    "total" : 71782
  }
};

class About extends Component {

    render() {
        return(
            <div>
                <Bio/>
                <Search/>
                <Songs/> 
            </div>
        );
    }
}

class Bio extends Component {

    constructor(props){
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleQuote = this.handleQuote.bind(this);
    this.state = {
      showMore:false,
      bio:"Kanye Omari West was born in Atlanta, Georgia, on June 8, 1977. He left college to pursue a musical career, producing tracks for Jay-Z while polishing his demo. He released The College Dropout in 2004. It sold 2.6 million copies and won Best Rap Album. His follow-up releases have been",
      link:"Show more",
      quote:"should be a quote"
    };
    this.fetchData();
  }

  // gets quote
  fetchData(){
    var thisComponent = this;
      controller.quote()
        .then(function(data) {
          thisComponent.setState({quote:data})
        })
  }

  // show less or show more
  handleClick(){   
    if(this.state.showMore === false) {
      this.setState({
        bio: "Kanye Omari West was born in Atlanta, Georgia, on June 8, 1977. He left college to pursue a musical career, producing tracks for Jay-Z while polishing his demo. He released The College Dropout in 2004. It sold 2.6 million copies and won Best Rap Album. His follow-up releases have been equally successful and West has become a celebrity famous for his outrageous and entertaining antics and marriage to reality television star Kim Kardashian.",
        showMore:true,
        link:"Show Less"
      });
    } else {
      this.setState({
        bio: "Kanye Omari West was born in Atlanta, Georgia, on June 8, 1977. He left college to pursue a musical career, producing tracks for Jay-Z while polishing his demo. He released The College Dropout in 2004. It sold 2.6 million copies and won Best Rap Album. His follow-up releases have been",
        showMore:false,
        link:"Show more"
      });
    }
  }

  //gets new quote
  handleQuote(){
    this.fetchData();
    //console.log("done");
  }

    render(){
        return(
            <div>
                <h1>Kanye Omari West</h1>
                <p id="quote">"{this.state.quote}" --Kanye</p>
                <button onClick={this.handleQuote}> New Quote </button>
              
                <script type="text" src="https://yepi.io/quote.js"/> 
                <div id="followButton">
                  <iframe src="https://embed.spotify.com/follow/1/?uri=spotify:artist:5K4W6rqBFWDnAN6FQUkS6x&size=basic&theme=light" width="300" height="56" scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
                </div>
                <img  id="profPic" src="https://cmgajcmusic.files.wordpress.com/2016/06/kanye-west2.jpg"alt="kanye"/>
                <h4>Biography </h4>
                <p> {this.state.bio}</p>
                  <p onClick={this.handleClick} id="show"> {this.state.link} </p>  
            </div>
        )
    };
}

class Songs extends Component {

  constructor(props){
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.state = {tracks:[]};
    this.fetchData('5K4W6rqBFWDnAN6FQUkS6x');
}

  fetchData(artistId) {
    //console.log("fetching");
    var thisComponent = this;
    controller.popular(artistId)
      .then(function(data){
        //console.log(data);
        thisComponent.setState({tracks:data.tracks})
      })
      .catch( (err) => this.setState({tracks:['err']}));
  }

  render() {
    return(
    <Song tracks={this.state.tracks} search={false}/> 
    );
  }
}

class Song extends Component {

  render() {
      var songArray = this.props.tracks.map(function(trackObj){
      //console.log(trackObj);
      return <SongItem track={trackObj} key={trackObj.id}/>
    });

    return (
      <ul>
        {songArray}
      </ul>
    );
  }
}

class SongItem extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log(this.state);
     var audio = new Audio();
    //console.log(this.state);
    if(!SONG_STATUS.playing) { // song is not playing
      //console.log("1");
      audio = new Audio(this.props.track.preview_url);      
      audio.play();
      SONG_STATUS = {playing:true, songPlaying:this.props.track.name,audio:audio};
    } else { // a song is playing
      if( this.props.track.name === SONG_STATUS.songPlaying){ //song clicked is song playing
        //console.log("2");
        SONG_STATUS.audio.pause();
        //console.log("pause");
        SONG_STATUS = {playing:false, songPlaying:"", audio:new Audio()};
      } else { // song clicked isnt song playing
        //console.log('3');
        SONG_STATUS.audio.pause();
        audio = new Audio(this.props.track.preview_url);
        audio.play();
        SONG_STATUS = {playing:true, songPlaying:this.props.track.name,audio:audio};
      }
    }
  }

  render(){
    //console.log(this.props);

    return(
      <li onClick={this.handleClick}>
      {this.props.track.name}
      </li>
    );
  }
}

class Search extends Component {

 constructor(props) {
    super(props);
    this.state = {tracks:[]};
    this.fetchData = this.fetchData.bind(this);
    //this.filterSearch();
  }

  fetchData(searchTerm) {
    //console.log("fetching");
    var thisComponent = this;
    controller.search(searchTerm)
      .then(function(data){
        //console.log(data);
        thisComponent.setState({tracks:data.tracks.items})
      })
      .catch( (err) => this.setState({tracks:['err']}));
  }

  // filterSearch() {
  //   console.log("filter");
  //   var songArray = this.state.tracks.filter(function(trackObj){
  //       var artistsArray = trackObj.artists; 
  //     //console.log(artistsArray);
  //     var artistNamesArray = artistsArray.map(function(artistObj){
  //       return artistObj.name;
  //     })
  //       console.log(artistNamesArray);
  //     //  var test = artistNamesArray.includes("Kanye West");
  //     //  console.log(test);
  //     return artistNamesArray.includes("Kanye West");;
  //   })
  //}

  
  render() {

    return(
      <div>
        <SearchForm searchFunction={this.fetchData} />
        <FilterSearch tracks={this.state.tracks}/>
      </div>
    );
  }
}

class FilterSearch extends Component {

  render(){
    var songArray = this.props.tracks.filter(function(trackObj){
        var artistsArray = trackObj.artists; 
      //console.log(artistsArray);
      var artistNamesArray = artistsArray.map(function(artistObj){
        return artistObj.name;
      })
        //console.log(artistNamesArray);
      //  var test = artistNamesArray.includes("Kanye West");
      //  console.log(test);
      return artistNamesArray.includes("Kanye West");;
    })
    //console.log(songArray);
    var returnValue = <Song tracks={songArray}/>;
    if(songArray.length ===  0 && SEARCHED) {
      returnValue = <p> No Songs Found </p>;
    }


    return(returnValue);
  }
}

class SearchForm extends Component {

  constructor(props){
    super(props);
    this.state = {value:''}
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value:event.target.value});
    //this.props.searchFunction(searchTerm);
  }

  handleClick(event) {
    SEARCHED = true;
    this.props.searchFunction(this.state.value);
  }

  render() {
    return (
      <Form inline>
        <InputGroup>
          <FormControl type="text" placeholder="Search for a song..." onChange={this.handleChange} />
          <InputGroup.Button>
            <Button onClick={this.handleClick}><Glyphicon glyph="search" aria-label="Search" />search</Button>
          </InputGroup.Button>
        </InputGroup>
      </Form>
    );
  }
}



export default About; //make this class available to other files (e.g., index.js)