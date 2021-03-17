import React, { Component } from 'react';
import LoginPage from './components/login-page';
import Map from './components/map';
import './scss/App.scss';
import { pages } from './consts';

export default class App extends Component {
  state = { page: pages.login };

  setPage = (page) => {
    this.setState({ page });
  }

  render() {
    const { page } = this.state;

    return (
      <div className='App'>
        {page === pages.login && <LoginPage setPage={this.setPage} />}
        {page === pages.map && <Map setPage={this.setPage} />}
      </div>
    )
  }
}