import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from './constants';
import GlobalFeed from '../pages/global-feed';
import Article from '../pages/article';
import Authentication from '../pages/authentication';

export default () => {
  return (
    <Switch>
      <Route path={ROUTES.HOME} component={GlobalFeed} exact />
      <Route path={ROUTES.LOGIN} component={Authentication} />
      <Route path={ROUTES.REGISTER} component={Authentication} />
      <Route path={ROUTES.ARTICLES} component={Article} />
    </Switch>
  );
};
