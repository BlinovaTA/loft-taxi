import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Map from '../components/Map';
import Header from '../components/Header';
import { PAGES } from '../constants';

export default class MapPage extends PureComponent {
  static propTypes = {
    setPage: PropTypes.func
  }

  render() {
    return (
      <div className='page-container'>
        <Header setPage={this.props.setPage} page={PAGES.map.key} />
        <Map />
      </div>
    )
  }
}
