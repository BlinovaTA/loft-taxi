import React, { Component } from 'react';
import Header from './header';
import Profile from './profile';
import { pages } from '../consts';
import '../scss/map.scss';

export default class Map extends Component {
  state = { page: 'map' };

  setPage = (page) => {
    this.setState({ page });
    page === pages.login && this.props.setPage(page);
  }

  render() {
    const { page } = this.state;

    return (
      <div className='map-container'>
        <Header setPage={this.setPage} />
        <div className='map'>
          {page === pages.profile && <Profile setPage={this.setPage} />}
        </div>
      </div>
    )
  }
}
