import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { PAGES } from '../constants';

const mapStateToProps = function (state) {
  return {
    isLoggedIn: state.authorization.isLoggedIn
  }
}

export const PrivateRoute = connect(mapStateToProps)(
  ({ component: Component, isLoggedIn, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={PAGES.login.link} />
        )
      }
    />
  )
);
