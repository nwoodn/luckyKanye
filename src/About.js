import React, { Component } from 'react';

import controller from './controller.js';

import './about.css';

//import Frame from 'react-frame-component';


class About extends Component {

    render() {
        return(
            <div>
                <Bio/>
                <AlbumsArea/>
            </div>
        );
    };
}


class Bio extends Component {

    constructor(props){
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    console.log("done");
  }

    render(){
        return(
            <div>
                <h1>Kanye Omari West</h1>
                <p id="quote">"{this.state.quote}" --Kanye</p>
              
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

 class AlbumsArea extends Component {

   // sets the data to fetch albums for kanye
  constructor(props){
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.state = {albums:[]};
    this.fetchData("5K4W6rqBFWDnAN6FQUkS6x");
  }

  // gets the data on kanye and sets the state
  fetchData(artistId) {
    var thisComponent = this; 
    controller.albums(artistId)
      .then(function(data) {
        thisComponent.setState({albums:data.items})
      })
      .catch( (err) => this.setState({albums:[]}));
  }

  render() {
    return (
      <div>
        <Albums albums={this.state.albums}/>
      </div>
    );
  }
}

//creates an album class
class Albums extends Component {

  render() {
    var albumCardArray=this.props.albums.map(function(albumObj){
      return <AlbumCard album={albumObj} albumId={albumObj.id} key={albumObj.id}/>
    });

    return (
      <div>
          <div className="card-container">
            {albumCardArray}
          </div>
      </div>
    );
  }
}

//creates an album card
class AlbumCard extends Component {

   constructor(props){
    super(props);
    this.state = {
      showComponent:false,
      numClicks:0
    };
    this.handleClick = this.handleClick.bind(this);
  }

//shows componet on odd number of clicks
  handleClick() { 
    if(this.state.numClicks % 2 === 0) {
      this.setState({
        showComponent:true,
        numClicks: this.state.numClicks + 1
      });
    } else {
      this.setState({
        showComponent:false,
        numClicks: this.state.numClicks + 1
      });
    }
  }

  render() {
    var albumImgUrl=this.props.album.images[0].url;
    var albumImg={
      backgroundImage: 'url(' + albumImgUrl + ')'
    }

    return (
      <div>
        <div className="card">
            <button type="button" className="albumImg" style={albumImg} onClick={this.handleClick}/>
              {this.state.showComponent ?
                <SongList albumId={this.props.albumId}/> :
                  null
              }
        </div>
      </div>

    );
  }
}

// creates a SongList
 class SongList extends Component{

    constructor(props){
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.state = {album:[]};
    this.fetchData(this.props.albumId);
  }

  fetchData(albumId) {
    var thisComponent = this; 
    controller.album(albumId)
      .then(function(data) {
        thisComponent.setState({album:data.items})
      })
      .catch( (err) => this.setState({album:[]}));
  }

   render() {

     var songItemArray = this.state.album.map(function(songObj) {
       return <SongItem songName={songObj.name} preview={songObj.preview_url} key={songObj.id}/>
     });

     //console.log(songItemArray);

     return(
       <div>
        <h6> Click to Play! </h6>
          <ul> 
            {songItemArray}
          </ul>
       </div>
     );
   }
 }

// creates a song Item
 class SongItem extends Component {

   constructor(props){
    super(props);
    this.state = {
      songPlaying: null,
      isPlaying:false,
    };
    this.handleClick = this.handleClick.bind(this);
  }


     handleClick(){
        var audio = new Audio();
        console.log(this.state.songPlaying);
        //console.log(this.props.preview);
        if(this.state.songPlaying === this.props.preview){ //playing this track
            //console.log('here');
            if(this.state.isPlaying){ //check state
                audio.pause();
                this.state.isPlaying = false;
            } else {
                audio.play();
                this.state.isPlaying = true;
                this.state.songPlaying = this.props.preview;
            }
            }
            else { //different track
               // console.log('here');
            audio.pause(); //pause current
            audio = new Audio(this.props.preview); //create new audio
            audio.play(); //play new
            this.state.songPlaying = this.props.preview;
            console.log(this.state.songPlaying);
            this.state.isPlaying = true;
        }
        //  if (this.state.songPlaying === null) { // song isnt playing
        //     var audio = new Audio(this.props.preview);
        //     audio.play();
        //     this.state.songPlaying = this.props.preview;
        //  } else if(this.props.preview === this.state.songPlaying) { // song is playing and you click on it

        //  }
     }

   render() {
     return (
      <li target="_blank" onClick={this.handleClick}>
          {this.props.songName}
      </li>
     )
   } }

export default About; //make this class available to other files (e.g., index.js)