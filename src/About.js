import React, { Component } from 'react';

import controller from './controller.js';

import './about.css';

//import Frame from 'react-frame-component';

var SONG_STATUS = {playing:false, songPlaying:"", audio: new Audio()};


class About extends Component {

    render() {
        return(
            <div>
                <Bio/>
                <Songs/>
            </div>
        );
    };
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
    <Song tracks={this.state.tracks}/> 
    );
  }
}

class Song extends Component {

  render() {
    //console.log(this.props);
    
    var songArray = this.props.tracks.map(function(trackObj){
      //console.log(trackObj);
      return <SongItem track={trackObj} key={trackObj.name}/>
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
      console.log("1");
      audio = new Audio(this.props.track.preview_url);      
      audio.play();
      SONG_STATUS = {playing:true, songPlaying:this.props.track.name,audio:audio};
    } else { // a song is playing
      if( this.props.track.name === SONG_STATUS.songPlaying){ //song clicked is song playing
        console.log("2");
        SONG_STATUS.audio.pause();
        //console.log("pause");
        SONG_STATUS = {playing:false, songPlaying:"", audio:new Audio()};
      } else { // song clicked isnt song playing
        console.log('3');
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



export default About; //make this class available to other files (e.g., index.js)