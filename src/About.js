import React, { Component } from 'react';

import controller from './controller.js';

import {Form, FormControl, InputGroup, Button, Glyphicon, Image} from 'react-bootstrap';

import Play from '../public/playButton.svg';
import Pause from '../public/pause.svg';

import './about.css';

//import Frame from 'react-frame-component';

var SONG_STATUS = {playing:false, songPlaying:"", audio: new Audio()};
var SEARCHED = false;

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
      link:"Show More",
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
        bio: "Kanye Omari West was born in Atlanta, Georgia, on June 8, 1977. He left college to pursue a musical career, producing tracks for Jay-Z while polishing his demo. He released The College Dropout in 2004. It sold 2.6 million copies and won Best Rap Album. His follow-up releases have been equally successful and West has become a celebrity famous for his outrageous and entertaining antics and marriage to reality television star Kim Kardashian. At the 2015 VMA Awards, he announced that he would be running for POTUS in the 2020 election. He would love you to show your support in any way possible as he embarks on this journey to being the most powerful man in the free world.",
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
              <h1 className="block-font">Kanye Omari West</h1>
              <div className="quote-block">
                <p id="quote">"{this.state.quote}" -- Kanye</p>
                <button onClick={this.handleQuote}> More Quotes </button>
              </div>
            
              <script type="text" src="https://yepi.io/quote.js"/> 
              <div id="followButton">
            {/*    <iframe src="https://embed.spotify.com/follow/1/?uri=spotify:artist:5K4W6rqBFWDnAN6FQUkS6x&size=basic&theme=light" width="300" height="56" scrolling="no" frameBorder="0" allowTransparency="true"></iframe> */}
              </div>
              <img id="profPic" src="https://cmgajcmusic.files.wordpress.com/2016/06/kanye-west2.jpg"alt="kanye"/>
              <h4>Biography</h4>
              <p className="bio">{this.state.bio}</p>
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
      <div className="popularSongs">
        <h3> Kanye's Top Songs: </h3>
        <Song tracks={this.state.tracks} search={false}/> 
      </div>
    );
  }
}

class Song extends Component {

  render() {
    if(SEARCHED){
      var songTypes="Search Results";
    } else {
      var songTypes=null;
    }
      var songArray = this.props.tracks.map(function(trackObj){
      //console.log(trackObj);
      return <SongItem track={trackObj} key={trackObj.name}/>
    });

    return (
      <div className="songList">
        <h3>{songTypes}</h3>
        {songArray}
      </div>
    );
  }
}

class SongItem extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {icon:Play};
  }

  handleClick() {
    // console.log(this.state);
    //var playOrPauseImg = '../public/playButton.svg';
     var audio = new Audio();
    //console.log(this.state);
    if(!SONG_STATUS.playing) { // song is not playing
      //console.log("1");
      audio = new Audio(this.props.track.preview_url);      
      audio.play();
      //this.setState({icon:Pause});
      SONG_STATUS = {playing:true, songPlaying:this.props.track.name,audio:audio};
    } else { // a song is playing
      if( this.props.track.name === SONG_STATUS.songPlaying){ //song clicked is song playing
        //console.log("2");
        SONG_STATUS.audio.pause();
        //this.setState({icon:Play});
        //console.log("pause");
        SONG_STATUS = {playing:false, songPlaying:"", audio:new Audio()};
      } else { // song clicked isnt song playing
        //console.log('3');
        SONG_STATUS.audio.pause();
        audio = new Audio(this.props.track.preview_url);
        audio.play();
        //this.setState({icon:Pause});
        SONG_STATUS = {playing:true, songPlaying:this.props.track.name,audio:audio};
      }
    }
    if(SONG_STATUS.songPlaying === this.props.track.name) {
      this.setState({icon:Pause});
    } else {
      this.setState({icon:Play});
    }

  }

  render(){
    //console.log(this.props);

    return(
      <div className="songItem" onClick={this.handleClick}>
        <img src={this.state.icon} alt="play"/>
        <p id="song">{this.props.track.name}</p>
      </div>
    );
  }
}

class Search extends Component {

 constructor(props) {
    super(props);
    this.state = {tracks:[]};
    this.fetchData = this.fetchData.bind(this);
    this.undo = this.undo.bind(this);
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

  undo(){
    SEARCHED=false;
    //console.log("SEARCHED");
    this.forceUpdate();
  }

  
  render() {

    return(
      <div>
        <SearchForm searchFunction={this.fetchData} undo={this.undo}/>
        <FilterSearch tracks={this.state.tracks}/>
      </div>
    );
  }
}

class FilterSearch extends Component {

  render(){
    if(SEARCHED){
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
      var returnValue = <Song tracks={songArray} />;
      if(songArray.length ===  0) {
        returnValue = <p> No Songs Found </p>;
      }
    } else {
      returnValue = null;
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
            <Button onClick={this.props.undo}> Undo Search </Button>
          </InputGroup.Button>
        </InputGroup>
      </Form>
    );
  }
}



export default About; //make this class available to other files (e.g., index.js)