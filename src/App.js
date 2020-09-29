import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomePage } from './components/home';
import { ProjectsPage } from './components/projects';
import { EventsPage } from './components/events';
import { AboutPage } from './components/about';

import { Layout } from './components/shared/layout';
import { NotFound404 } from './components/shared/not-found-404';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/projects'}>
          <ProjectsPage />
        </Route>

        <Route path={'/events'}>
          <EventsPage />
        </Route>

        <Route path={'/about'}>
          <AboutPage />
        </Route>

        <Route exact path={'/'}>
          <HomePage />
        </Route>

        <Route path={'*'}>
          <Layout>
            <NotFound404 />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
};
