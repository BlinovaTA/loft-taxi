import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Map from '../components/map';
import Header from '../components/header';
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
