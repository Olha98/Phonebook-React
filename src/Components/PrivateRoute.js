import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelector from '../Redux/Selections/authSelector'



const PrivateRoute = ({
  component: Component,
  isAuth,
  ...route
}) => (
  <Route
    {...route}
    render={props =>
      isAuth ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => ({
  isAuth: authSelector.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);

