import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import eventsJson from './events.json';
import { Form, FormControl, InputGroup, Button, Glyphicon } from 'react-bootstrap';
// import { Map, Marker, Popup, TileLayer} from 'react-leaflet';


import L from 'leaflet';
// import controller from './EventController';

// api key = Pd4kqfGVGCbGnj2f
// Jam Base api key = t5wx9dw3ce7vbsyyjz7qqhrx

//


var SAMPLE_EVENTS = [
	{ city: 'San Fransisco', state: 'California', country: 'USA', venue: 'super cool theater', date: '11-20-2017' }, { city: 'Seattle', state: 'Washington', country: 'USA', venue: 'Safeco', date: '11-25-2017' }, { city: 'Chicago', state: 'Illinois', country: 'USA', venue: 'dome', date: '12-04-2017' }, { city: 'San Diego', state: 'California', country: 'USA', venue: 'super cool theater', date: '11-26-2017' }
]


class Events extends React.Component {
	constructor(props) {
		super(props);

		this.state = { events: eventsJson['concerts'] };
		this.setState = this.setState.bind(this);
		// this.fetchData = this.fetchData.bind(this);
	}

	render() {

		return (
			<div className="Events">
				<div className="Event-header">
					<h2>Events</h2>
					<MyMap marker={this.state.events}/>
				</div>
				<main>
					<EventTable events={this.state.events} />

				</main>
			</div>
		);
	}
}

class EventTable extends React.Component {
	render() {

		var rows = this.props.events.map(function (eventObj) {
			return <EventRow event={eventObj} />;
		});

		return (
			<div>
				{rows}
			</div>
		);
	}
}


class EventRow extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log("You clicked on", this.props.event.city);
	}

	render() {
		var event = this.props.event; //shortcut
		return (
			<div onClick={this.handleClick}>
				<p><span id='city'>{event.city}  </span>||
        {event.venue}||
        {event.date}</p>
			</div>
		);
	}
}


// class SearchEvents extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { clickCount: 0, searchValue: '' };
// 		this.handleClick = this.handleClick.bind(this);
// 		this.handleChange = this.handleChange.bind(this);
// 	}
// 	handleClick(event) {
// 		console.log("you clicked me");
// 		this.props.searchCallBack(this.state.searchValue);
// 	}
// 	handleChange(event) {
// 		var newValue = event.target.value;
// 		console.log("user has typed", newValue);
// 		this.setState({ stateSearchValue: newValue })
// 	}
// 	searchCallBack(){
// 		fetch('events.json')
// 		.then(function(response){
// 			return response.json();
// 		})
// 		.then(calculate())
// 	}


// 	calculate(eventsArray){
// 		var searchedEventsArray = eventsArray.filter(function(eventObj){
// 			return (eventObj.city === this.state.searchValue)
// 		});

// 		console.log(searchedEventsArray);

// 		var totalNum = searchedEventsArray.lengeth;
// 		console.log("total num: ", totalNum);
// 	}

// 	render() {
// 			// main();
// 		return (
// 			<Form inline>
// 				<InputGroup>
// 					<InputGroup.Button>
// 						<Button onClick={this.handleClick} className="eventSearch">
// 							<Glyphicon glyph="search" aria-label="Search" />
// 						</Button>
// 					</InputGroup.Button>
// 					<FormControl type="text" placeholder="CITY"  onChange={this.handleChange} />
// 					<InputGroup.Addon>{this.props.totalResults}results </InputGroup.Addon>
// 				</InputGroup>
// 			</Form>
// 		);
// 	}
// }

// class Map extends React.Component {


// 	// 			// id: 'sarahf95.2a1n7d6j',
// 	// accessToken: 'pk.eyJ1Ijoic2FyYWhmOTUiLCJhIjoiY2l3YndsZTB5MDRvOTJ0bGtvazZvdGZsYiJ9.gBaTfDLpBwuLDxMfsBBxjw'
// 	//	}).addTo(mymap);
// 	const position = [51.505, -0.09];
// 	const map = (
// 		<Map center={position} zoom={13}>
// 			<TileLayer url='https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}'
// 				attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' />
// 		</Map>
// 	);
// 	render(map, document.getElementById('mapid'));
// }

class MyMap extends Component {
	constructor() {
		super();
		this.state = {
			map: null
		};
	}

	componentDidMount() {
		setTimeout(() => {
			var map = L.map('map', {
				minZoom: 2,
				maxZoom: 20,
				layers: [L.tileLayer("https://api.mapbox.com/styles/v1/sarahf95/ciwe83x0y001u2qqowgkeych8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2FyYWhmOTUiLCJhIjoiY2l3YndsZTB5MDRvOTJ0bGtvazZvdGZsYiJ9.gBaTfDLpBwuLDxMfsBBxjw", { attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' })],
				attributionControl: false,
			});
			map.fitWorld();
			// var marker = this.props.events.map(function (markerObj) {

			// 	return <Markers markers={markerObj} />;
			var markerArray = this.props.marker;
			markerArray.forEach(function(marker){
				L.marker([marker.lat, marker.long]).addTo(map);
			});
			//var marker = 
			// });
			return this.setState({
				map: map
			});
		}, 100)
	}

	render() {

		return <div id="map" style={{ height: 500 }}>
	
		</div>;
	}
}

// class Markers extends React.Component {
// 	render() {
// 		console.log(this);

// 		return (
// 			L.marker([event['lat'], event['long']]).addTo(map)
// 		);
// 	}
//}

// class Marker extends React.Component {
// 	constructor(props) {
// 		super(props);

// 	}

// 	render() {
// 		var MyMap = this.state.map;
// 		var event = this.props.event; //shortcut
// 		var marker = L.marker([event.lat, event.long]).addTo(MyMap);
// 		return (
// 			{ marker }
// 		);
// 	}
// }

export default Events;
