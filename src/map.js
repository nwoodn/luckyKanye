// 'use strict';

// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
// 	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
// 	maxZoom: 18,
// 	id: 'sarahf95.2a1n7d6j',
// 	accessToken: 'pk.eyJ1Ijoic2FyYWhmOTUiLCJhIjoiY2l3YndsZTB5MDRvOTJ0bGtvazZvdGZsYiJ9.gBaTfDLpBwuLDxMfsBBxjw'
// }).addTo(mymap);

// // import React from 'react';
// // import { render } from 'react-dom';
// // import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

// // const position = [51.505, -0.09];
// // const map = (
// //   <Map center={position} zoom={13}>
// //     <TileLayer
// //       url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
// //       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// //     />
// //     <Marker position={position}>
// //       <Popup>
// //         <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
// //       </Popup>
// //     </Marker>
// //   </Map>
// // );

// // render(map, document.getElementById('map-container'));

// import React from 'react';
// import { render } from 'react-dom';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';



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




// my own weird example

// import React, {Component} from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css'

// class Map extends Component {
// 	constructor(props){
// 		super(props);
// 	}
// 	render(){
// 		const position = [this.state.lat, this.state.lng];
// 		return(
// 			<div id="mapid">
// 			</div>

// 		);
// 	}

// }

// export default Map;



// const React = window.React;
// const { Map, TileLayer, Marker, Popup } = window.ReactLeaflet;

// class Maps extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       lat: 51.505,
//       lng: -0.09,
//       zoom: 13,
//     };
//   }

//   render() {
//     const position = [this.state.lat, this.state.lng];
//     return (
//       <Map center={position} zoom={this.state.zoom}>
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//         />
//         <Marker position={position}>
//           <Popup>
//             <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
//           </Popup>
//         </Marker>
//       </Map>
//     );
//   }
// }

// window.ReactDOM.render(<SimpleExample />, document.getElementById('mapid'));

import React from 'react'
import ReactDOM from 'react-dom'
import { Map, TileLayer } from 'react-leaflet'
const position = [51.0, -0.09]
export class MapView extends React.Component {
  constructor(props) {
    super(props)
  }
render() {
    return (
      <div>
        <Map
          style={{height: "100vh"}}
          center={position}
          zoom={10}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/sarahf95/ciwe83x0y001u2qqowgkeych8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2FyYWhmOTUiLCJhIjoiY2l3YndsZTB5MDRvOTJ0bGtvazZvdGZsYiJ9.gBaTfDLpBwuLDxMfsBBxjw"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
        </Map>
      </div>
    )
  }
}