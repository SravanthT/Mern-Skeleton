import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import auth from './auth-helper';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated() ? (
          <Element {...props} />
        ) : (
          navigate('/signin', { state: { from: props.location } })
        )
      }
    />
  );
};

export default PrivateRoute;