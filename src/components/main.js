import React from 'react';
import LandingPage from './landingpage';
import Projects from './projects';
import AboutMe from './aboutme';
import Resume from './resume';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path = "/" component = { LandingPage } />
    <Route exact path = "/aboutme" component = { AboutMe } />
    <Route exact path = "/resume" component = { Resume } />
    <Route exact path = "/projects" component = { Projects } />
  </Switch>
)

export default Main;
