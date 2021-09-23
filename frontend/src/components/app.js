import React from 'react';
import {connect} from "react-redux";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SongIndexContainer from "./song_index/song_index_container";
import SongShowContainer from "./song_show/song_show_container"
import '../stylesheets/application.scss';
import UserShow from './session/user_show';



// getSongs
// window.getBio = getBio;
// window.getSongs = getSongs;

const App = (props) => (
  <div className="background1"> 
    <NavBarContainer />
      <ProtectedRoute exact path="/" >
        <Redirect to={`/login`}/>
      </ProtectedRoute>
      <ProtectedRoute path={`/users`} component={UserShow} />

      {/* <AuthRoute exact path="/" component={MainPage} /> */}
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      {/* <UserShow/> */}
      {/* <ProtectedRoute path="/" component={UserShow}/> */}
      <ProtectedRoute exact path="/songs" component={SongIndexContainer} />
      <ProtectedRoute exact path="/songs/:songId" component={SongShowContainer} />
  </div>
);

const mSTP = state => ({
  state
})


export default connect(mSTP, null)(App);