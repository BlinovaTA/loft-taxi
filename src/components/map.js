import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { connect } from 'react-redux';

class Map extends Component {
  map = null;
  mapContainer = React.createRef();
  id = null;
  count = 0;

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGFua2E5MSIsImEiOiJja21ubGZxZjgweTEyMnFyemdsdzBmN3BpIn0.GcPUVO9XJl5iWk1gMbEOXA';
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.3056504, 59.9429126],
      zoom: 10
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  componentDidUpdate() {
    this.renderMap();
  }

  getLayerData = (id, coords) => ({
    id,
    type: "line",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: coords
        }
      }
    },
    layout: {
      "line-join": "round",
      "line-cap": "round"
    },
    paint: {
      "line-color": "#ffc617",
      "line-width": 8
    }
  })

  getFlyToData = center => ({
    center,
    speed: 0.5
  })

  renderMap = () => {
    const { route } = this.props;

    if (!this.mapContainer.current) {
      return;
    }

    if (this.id) {
      this.map.removeLayer(this.id);
    }

    this.id = `${this.count++}`;
    this.map.addLayer(this.getLayerData(this.id, route));
    this.map.flyTo(this.getFlyToData(route[0]));
  };

  render() {
    return <div className='map-wrapper'>
      <div data-testid='map' className='map' ref={this.mapContainer} />
    </div>
  }
}

const mapStateToProps = function (state) {
  return {
    route: state.mapRoute.route
  }
}

export default connect(mapStateToProps)(Map);