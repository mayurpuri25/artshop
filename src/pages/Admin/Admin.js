import React from "react"
import MyAccount from '../MyAccount'
import MainPage from '../HomePage'
import MyNavbar from '../../components/MyNavbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function Admin() {
  return (
    <>
      <Router>

      
      <MyNavbar />
      {/* <MyAccount className="myaccount"/> */}
      <Switch>
        <Route exact path='/myaccount/profile' component={MyAccount} />
        <Route exact path='/' component={MainPage} />

        <Redirect from='*' to='/' />
      </Switch>
      </Router>
    </>
  );
}

export default Admin;
