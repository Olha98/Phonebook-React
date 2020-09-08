  
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelector from '../Redux/Selections/authSelector'


const PublicRoute = ({
  component: Component,
  isAuth,
  ...route
}) => (
  <Route
    {...route}
    render={props =>
      isAuth && route.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuth: authSelector.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
