Kanye 2020 Campaign Website:

Our application is a 2020 Presidential Campaign website for Kanye West. It includes a home page with NY Times snippets that lead to the articles on the New York Times website and a few videos of Kanye announcing his intention to run. The About page includes a Spotify search feature that plays his top songs as well as songs that the user searches for. It also generates original Kanye quotes from the Kanye West API. The Events page features a map of his "rallies" (his concert dates) using Leaflet. The Political Stances page includes Kanye's stances on certain topics and includes a quiz that users can take so they can see how well their stances align with his. 

For the Events page, we attempted to use a few concert API's but had some issues with extracting information from them: Eventful never sent an API key, SongKick didn't have Kanye concerts, Bandsintown didn't work. Therefore, we made a JSON file with all event dates rather than pulling information from an API. PLEASE check it out on mobile because we used the MOBILE FIRST APPROACH so it looks nicest there :) 

List of API's we used: New York Times, Kanye West (Ye PI), Leaflet, Spotify
Made JSON files for Political Stances, Events, and the Quiz questions