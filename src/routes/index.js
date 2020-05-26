import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from './constants';
import GlobalFeed from '../pages/feed/global';
import YourFeed from '../pages/feed/your';
import TagFeed from '../pages/feed/tag';
import Article from '../pages/article';
import Authentication from '../pages/auth';

export default () => {
  return (
    <Switch>
      <Route path={ROUTES.HOME} component={GlobalFeed} exact />
      <Route path={ROUTES.FEED} component={YourFeed} />
      <Route path={ROUTES.TAGS.TAG} component={TagFeed} />
      <Route path={ROUTES.ARTICLES.ROOT} component={Article} />
      <Route path={ROUTES.LOGIN} component={Authentication} />
      <Route path={ROUTES.REGISTER} component={Authentication} />
      <Redirect to={ROUTES.HOME} />
    </Switch>
  );
};
