import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/myAccount/MyAccount.css";
import LeftNavbar from "../components/MyAccount/LeftNavbar";
import RightComp from "../components/MyAccount/RightComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function MyAccount() {
  return (
    <>
    <Router>
      <Container className="myaccount m-0">
        <Row>
          <Col className="pb-2">
            <h3>My Account</h3>
          </Col>
        </Row>
        <Row className="flexcontainer">
          <Col className="navcol">
            <LeftNavbar />
          </Col>
          <Col className="rightcomponent py-4 px-4">
            <Switch>
              <Route exact path='/profile'> 
                <RightComp />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
    </>
  );
}
