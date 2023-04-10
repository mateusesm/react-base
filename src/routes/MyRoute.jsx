import { Route, Redirect } from 'react-router-dom';
import P from 'prop-types';

export const MyRoute = ({ component: Component, isClosed, ...rest }) => {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
};

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: P.oneOfType([P.element, P.func]).isRequired,
  isClosed: P.bool,
};
