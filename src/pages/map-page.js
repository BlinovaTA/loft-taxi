import React, { Component } from 'react';
import Header from '../components/header';
import { pages } from '../constants';

export default class Map extends Component {
  render() {
    return (
      <div className='page-container'>
        <Header setPage={this.props.setPage} page={pages.map.key} />
        <div className='page-content'>

        </div>
      </div>
    )
  }
}