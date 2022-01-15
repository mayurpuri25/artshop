import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons'
import MyAccount from './pages/MyAccount';
import MainPage from './pages/Homepage/MainPage'
import MyNavbar from './pages/Homepage/MyNavbar'
// import Auth from './pages/Auth/Auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>

      
      <MyNavbar />
      {/* <MyAccount className="myaccount"/> */}
      <Switch>
        <Route exact path='/myaccount'>
          <MyAccount />
        </Route>
        <Route exact path='/'>
          <MainPage />
        </Route>

      </Switch>
      </Router>
    </>
  );
}

export default App;
