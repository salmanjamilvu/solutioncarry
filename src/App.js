import React from 'react'
import './App.css';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StudyHelp from './pages/studyHelp/StudyHelp';
import ViewAns from './pages/viewAns/ViewAns';
import Checkout from './pages/checkout/Checkout';
import SuccAlert from './pages/succalert/SuccAlert';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/study-help">
          <StudyHelp />
        </Route>
        <Route exact path="/view-asnwer">
          <ViewAns />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/success">
          <SuccAlert />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;
