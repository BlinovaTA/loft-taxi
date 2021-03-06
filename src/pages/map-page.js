import React, { PureComponent } from 'react';
import Map from '../components/map';
import Header from '../components/header';
import RouteForm from '../components/route-form';
import { PAGES } from '../constants';

export default class MapPage extends PureComponent {
  render() {
    return (
      <div className='page-container'>
        <Header page={PAGES.map.key} />
        <Map />
        <RouteForm />
      </div>
    )
  }
}
