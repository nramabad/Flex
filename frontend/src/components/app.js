// src/components/app.js

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
=======
import NavBarContainer from './nav/navbar';
>>>>>>> ea4dec038940d6d9258943e2ac8066aedc8f3e46

import SplashPage from './splash/splash';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
<<<<<<< HEAD
import MainPageContainer from "./main/main_page_container";
=======
// import JobsContainer from './jobs/jobs_container';
>>>>>>> ea4dec038940d6d9258943e2ac8066aedc8f3e46

const App = () => (
  <div id="app-page">
    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
<<<<<<< HEAD
      {/* <ProtectedRoute exact path="/home" component={MainPageContainer} /> */}
      <Route exact path="/home" component={MainPageContainer} />
=======
      
>>>>>>> ea4dec038940d6d9258943e2ac8066aedc8f3e46
    </Switch>
  </div>
);

export default App;