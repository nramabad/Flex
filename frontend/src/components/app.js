// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import SplashPage from './splash/splash';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainPageContainer from "./main/main_page_container";
import HowItWorksContainer from "./how_it_works/how_it_works_container";

const App = () => (
  <div id="app-page">
    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      {/* <ProtectedRoute exact path="/home" component={MainPageContainer} /> */}
      <Route path="/home/:jobId?" component={MainPageContainer} />
      <Route path="/how-it-works" component={HowItWorksContainer} />
    </Switch>
  </div>
);

export default App;