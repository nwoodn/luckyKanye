import React, { Component } from 'react';
import { Form, FormControl, InputGroup, Button, Glyphicon } from 'react-bootstrap';


import Play from '../public/playButton.svg';
import Pause from '../public/pause.svg';

import controller from './controller.js';
import './about.css';

var SEARCHED = false;

class About extends Component {

  render() {
    return (
      <div>
        <Bio />
        <Search />
        <Songs />
      </div>
    );
  }
}

class Bio extends Component {

  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleQuote = this.handleQuote.bind(this);
    this.state = {
      showMore: false,
      bio: "Synopsis: Kanye Omari West was born in Atlanta, Georgia, on June 8, 1977. He left college to pursue a musical career, producing tracks for Jay-Z while polishing his demo. He released The College Dropout in 2004. It sold 2.6 million copies and won Best Rap Album. His follow-up releases have been equally successful and West has become a celebrity famous for his outrageous and entertaining antics and marriage to reality television star Kim Kardashian.",
      link: "Show more",
      quote: "should be a quote"
    };
    this.fetchData();
  }

  // gets quote
  fetchData() {
    var thisComponent = this;
    controller.quote()
      .then(function (data) {
        thisComponent.setState({ quote: data })
      })
  }

  // show less or show more
  handleClick() {
    if (this.state.showMore === false) {
      this.setState({
        bio: "Synopsis: Kanye Omari West was born in Atlanta, Georgia, on June 8, 1977. He was raised on Chicago's South Side by his mother, an English professor, and spent summers with his father, an award-winning photographer. He left college at age 20 before moving to New York in 2001 to pursue a music career, producing tracks for Jay-Z while polishing his demo. He released The College Dropout in 2004. It sold 2.6 million copies and won Best Rap Album at the 2005 VMA's, where he won an impressive 10 Grammy nominations. His follow-up releases have been equally successful and West has become a celebrity famous for his outrageous and entertaining antics and marriage to reality television star Kim Kardashian. At the 2015 VMA's, he officially announced his intention to run in the 2020 Presidential Campaign. He would love any and all support during his journey to becoming POTUS and the most powerful leader of the free world.",
        showMore: true,
        link: "Show Less"
      });
    } else {
      this.setState({
        bio: "Kanye Omari West was born in Atlanta, Georgia, on June 8, 1977. He left college to pursue a musical career, producing tracks for Jay-Z while polishing his demo. He released The College Dropout in 2004. It sold 2.6 million copies and won Best Rap Album. His follow-up releases have been",
        showMore: false,
        link: "Show more"
      });
    }
  }

  //gets new quote
  handleQuote() {
    this.fetchData();
  }

  render() {
    return (
      <div className="top">
        <h1 className="name">Kanye Omari West</h1>
        <div className="quote">
          <p id="quote">"{this.state.quote}" --Kanye</p>
          <Button id="quoteButton" onClick={this.handleQuote}> New Quote </Button>
        </div>

        <img id="profPic" src="https://cmgajcmusic.files.wordpress.com/2016/06/kanye-west2.jpg" alt="kanye" />
        <iframe className="iFrame" src="https://embed.spotify.com/follow/1/?uri=spotify:artist:5K4W6rqBFWDnAN6FQUkS6x&size=basic&theme=light" width="300" height="56" scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
        <div className="bio">
          <h4>Biography </h4>
          <p> {this.state.bio}</p>
          <p onClick={this.handleClick} id="show"> {this.state.link} </p>
        </div>
      </div>
    )
  };
}

class Songs extends Component {

  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
    this.state = { tracks: [] };
    this.fetchData('5K4W6rqBFWDnAN6FQUkS6x');
  }

  fetchData(artistId, audio) {
    var thisComponent = this;
    controller.popular(artistId)
      .then(function (data) {
        thisComponent.setState({ tracks: data.tracks })
      })
      .catch((err) => this.setState({ tracks: ['err'] }));
  }

  render() {
    return (
      <div className="songSection">
        <h3> Kanye's Top Songs </h3>
        <Song tracks={this.state.tracks} search={false} />
      </div>
    );
  }
}

class Song extends Component {

  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = { songPlaying: "", audioPlaying: "", sound: false };
  }

  update(songName, audio, sound) {
    this.setState({ songPlaying: songName, audioPlaying: audio, sound: sound });
  }

  render() {
    var thisComponent = this
    var songArray = this.props.tracks.map(function (trackObj) { // making song item

      var songPlaying = thisComponent.state.songPlaying;
      var audioPlaying = thisComponent.state.audioPlaying;
      var sound = thisComponent.state.sound;
      if (songPlaying === trackObj.name) {//songplaying = this track
        var icon = Pause;
        if (window.innerWidth > 768)
          var showAlbum = true;
      } else {
        icon = Play;
        showAlbum = false;
      }
      return <SongItem sound={sound} icon={icon} showAlbum={showAlbum} audioPlaying={audioPlaying} update={thisComponent.update} track={trackObj} key={trackObj.id} />
    });

    return (
      <div className="songSection">
        <div className="songList">
          {songArray}
        </div>
      </div>
    );
  }
}

class SongItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleAudio = this.handleAudio.bind(this);
    this.state = { icon: Play, showAlbum: false, numClicks: 0 };
  }

  handleAudio() {
    this.props.update("", "", false);
  }

  handleClick() {
    var audio = new Audio();
    if (!this.props.sound) { // song is not playing
      audio = new Audio(this.props.track.preview_url);
      audio.onended = this.handleAudio;
      audio.play();
      this.props.update(this.props.track.name, audio, true);
    } else { // a song is playing
      if (this.props.icon === Pause) { //song clicked is song playing
        this.props.audioPlaying.pause();
        this.props.update("", "", false);
      } else { // song clicked isnt song playing
        this.props.audioPlaying.pause();
        audio = new Audio(this.props.track.preview_url);
        audio.onended = this.handleAudio;
        audio.play();
        this.props.update(this.props.track.name, audio, true);
      }
    }
  }

  render() {

    return (
      <div className="songItem" onClick={this.handleClick}>
        <img src={this.props.icon} role="presentation" />
        <p id="song">{this.props.track.name}</p>
        {this.props.showAlbum ?
          <AlbumCard albumInfo={this.props.track.album} /> :
          null
        }
      </div>
    );
  }
}

class AlbumCard extends Component {

  render() {

    return (
      <div className="albumCard">
        <img src={this.props.albumInfo.images[0].url} alt="Album Cover" />
        <h4>{this.props.albumInfo.name}</h4>
      </div>
    );
  }
}

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = { tracks: [] };
    this.fetchData = this.fetchData.bind(this);
    this.undo = this.undo.bind(this);
  }

  fetchData(searchTerm) {
    var thisComponent = this;
    controller.search(searchTerm)
      .then(function (data) {
        thisComponent.setState({ tracks: data.tracks.items })
      })
      .catch((err) => this.setState({ tracks: ['err'] }));
  }

  undo() {
    SEARCHED = false;
    this.forceUpdate();
  }

  render() {

    return (
      <div>
        <SearchForm searchFunction={this.fetchData} undo={this.undo} />
        <FilterSearch tracks={this.state.tracks} />
      </div>
    );
  }
}

class FilterSearch extends Component {

  render() {
    if (SEARCHED) {
      var show = true;
      var songArray = this.props.tracks.filter(function (trackObj) {
        var artistsArray = trackObj.artists;
        var artistNamesArray = artistsArray.map(function (artistObj) {
          return artistObj.name;
        })
        return artistNamesArray.includes("Kanye West");;
      })
      var returnValue = <Song tracks={songArray} />;
      if (songArray.length === 0) {
        returnValue = <p id="noSongs"> No Songs Found </p>;
      }
    } else {
      returnValue = null;
      show = false;
    }

    return (
      <div>
        {show ?
          <h3> Search Results </h3> :
          null
        }
        {returnValue}
      </div>
    );
  }
}

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
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
            <Button onClick={this.handleClick}><Glyphicon glyph="search" aria-label="Search" /></Button>
            <Button onClick={this.props.undo}><Glyphicon glyph="undo" aria-label="undo" />Undo</Button>
          </InputGroup.Button>
        </InputGroup>
      </Form>
    );
  }
}

export default About; 