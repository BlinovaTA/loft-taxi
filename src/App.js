import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCardData } from './store/actions/card';
import { getAddressList } from './store/actions/address';
import LoginPage from './pages/login-page';
import MapPage from './pages/map-page';
import Profile from './pages/profile-page';
import PrivateRoute from './route/PrivateRoute';
import { PAGES } from './constants';
import './scss/App.scss';

const App = ({ isLoggedIn, getCardData, token, getAddressList, addressList }) => {

  useEffect(() => {
    if (!addressList.length) {
      getAddressList();
    }

    if (isLoggedIn) {
      getCardData(token);
    }
  }, [isLoggedIn]);

  return (
    <div className='App'>
      <Switch>
        <Route exact path={PAGES.login.link} component={LoginPage} />
        <PrivateRoute path={PAGES.map.link} component={MapPage} />
        <PrivateRoute path={PAGES.profile.link} component={Profile} />
        <Route>
          <Redirect to={PAGES.login.link} />
        </Route>
      </Switch>
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    token: state.authorization.token,
    isLoggedIn: state.authorization.isLoggedIn,
    addressList: state.address.list
  }
}

export default connect(mapStateToProps, { getCardData, getAddressList })(App);