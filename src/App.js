import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCardData } from './store/actions/card';
import { getAddressList } from './store/actions/address';
import LoginPage from './pages/login-page';
import MapPage from './pages/map-page';
import Profile from './pages/profile-page';
import { PrivateRoute } from './route/PrivateRoute';
import { PAGES } from './constants';
import './scss/App.scss';

class App extends Component {
  componentDidMount() {
    this.props.getAddressList();

    if (this.props.isLoggedIn) {
      this.props.getCardData(this.props.token);
    }
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path={PAGES.login.link} component={LoginPage} />
          <PrivateRoute path={PAGES.map.link} component={MapPage} />
          <PrivateRoute path={PAGES.profile.link} component={Profile} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    token: state.authorization.token,
    isLoggedIn: state.authorization.isLoggedIn,
    addressList: state.address.addressList
  }
}

export default connect(mapStateToProps, { getCardData, getAddressList })(App);