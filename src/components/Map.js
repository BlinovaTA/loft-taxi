import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

export default class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGFua2E5MSIsImEiOiJja21ubGZxZjgweTEyMnFyemdsdzBmN3BpIn0.GcPUVO9XJl5iWk1gMbEOXA';
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.3056504, 59.9429126],
      zoom: 10
    })
  }

  componentWillUnmount() {
    this.map = null;//.remove();
  }

  render() {
    return <div className='map-wrapper'>
      <div data-testid='map' className='map' ref={this.mapContainer} />
    </div>
  }
}