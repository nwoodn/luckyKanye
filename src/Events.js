import React, { Component } from 'react';
// api key = Pd4kqfGVGCbGnj2f

// Jam Base api key = t5wx9dw3ce7vbsyyjz7qqhrx


var SAMPLE_EVENTS = [
  { city: 'San Fransisco', state: 'California', country: 'USA', venue: 'super cool theater', date: '11-20-2017' }, { city: 'Seattle', state: 'Washington', country: 'USA', venue: 'Safeco', date: '11-25-2017' }, { city: 'Chicago', state: 'Illinois', country: 'USA', venue: 'dome', date: '12-04-2017' }, { city: 'San Diego', state: 'California', country: 'USA', venue: 'super cool theater', date: '11-26-2017' }
]


class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = { events: SAMPLE_EVENTS };
    //this.fetchData = this.fetchData.bind(this);
  }

  // fetchData(SAMPLE_Events) {
  //   var thisComponent = this;

  // }
  render() {
    return (
      <div className="Events">
        <div className="Event-header">
          <h2>Events</h2>
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
      return <EventRow event={eventObj} key={eventObj.city} />;
    });

    return (
      <table className="table table-codensed">
        <thead>
          <tr>
            <th className="col-xs-1">City</th>
            <th className="col-xs-4">State</th>
            <th className="col-xs-4">Country</th>
            <th className="col-xs-4">Venue</th>
            <th className="col-xs-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}


class EventRow extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log("You clicked on", this.props.event.city);
  }

  render() {
    var event = this.props.event; //shortcut
    return (
      <tr onClick={this.handleClick}>
        <td>{event.city}</td>
        <td>{event.state}</td>
        <td>{event.country}</td>
        <td>{event.venue}</td>
        <td>{event.date}</td>
      </tr>
    );
  }
}

export default Events;
