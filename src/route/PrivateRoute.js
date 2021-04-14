import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { PAGES } from '../constants';

export const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
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
  );

const mapStateToProps = function (state) {
  return {
    isLoggedIn: state.authorization.isLoggedIn
  }
}

export default connect(mapStateToProps)(PrivateRoute);
