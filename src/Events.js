import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import eventsJson from './events.json';
import { Form, FormControl, InputGroup, Button, Glyphicon } from 'react-bootstrap';
import L from 'leaflet';


var SAMPLE_EVENTS = [
	{ city: 'San Fransisco', state: 'California', country: 'USA', venue: 'super cool theater', date: '11-20-2017' }, { city: 'Seattle', state: 'Washington', country: 'USA', venue: 'Safeco', date: '11-25-2017' }, { city: 'Chicago', state: 'Illinois', country: 'USA', venue: 'dome', date: '12-04-2017' }, { city: 'San Diego', state: 'California', country: 'USA', venue: 'super cool theater', date: '11-26-2017' }
]


class Events extends React.Component {
	constructor(props) {
		super(props);
		this.state = { events: eventsJson['concerts'] };
		this.setState = this.setState.bind(this);
	}

	render() {

		return (
			<div className="Events">
				<div className="Event-header">
					<h2 className="block-font">Rallies</h2>
					<MyMap marker={this.state.events} />
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
			map.setView(new L.LatLng(37.0902, -95.7129), 4);

			var kanyeIcon = L.icon({
				iconUrl: 'kanye.png',
				iconSize: [21, 32], // size of the icon
				popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
			});


			var markerArray = this.props.marker;
			markerArray.forEach(function (marker) {
				L.marker([marker.lat, marker.long], {icon: kanyeIcon}).addTo(map).bindPopup("VENUE: " + marker.venue + ", " + marker.date);
			});

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

export default Events;
