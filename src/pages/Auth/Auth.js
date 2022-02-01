import React, { useState } from "react";
import "../../assets/css/Auth/auth.css";
import { ToggleButton, ToggleButtonGroup, Row, Col } from "react-bootstrap";
import Login from "./Login";
import SignUp from "./SignUp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useEffect } from "react";

export default function Auth() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let path = window.location.pathname;
    if (path === "/signup") setShow(false);
    if (path === "/login") setShow(true);
  }, []);

  return (
    <>
      <Router>
        <div className="all ">
          <div className="flex-container p-1">
            <Row className="m-0">
              <Row className="left px-4">
                <Col className="containerCol">
                  <h1 id="header" className="text-center p-3">
                    Admire Art
                  </h1>

                  <Row className="togglebtn">
                    <ToggleButtonGroup
                      id="btngrp"
                      type="radio"
                      name="options"
                      defaultValue={1}
                      size="lg"
                    >
                      <Link to="/login" className="defaultLink">
                        <ToggleButton
                          style={
                            show
                              ? {
                                  background: "#55a7a0",
                                  padding: "5px 25px",
                                  border: "2px solid #55a7a0",
                                }
                              : {
                                  background: "transparent",
                                  border: "2px solid #55a7a0",
                                  padding: "5px 25px",
                                  color: "rgb(14 69 98)",
                                  fontWeight: "400",
                                }
                          }
                          className="login_signup_toggle"
                          id="tbg-radio-1"
                          onClick={() => setShow(true)}
                        >
                          Log In
                        </ToggleButton>
                      </Link>
                      <Link to="/signup" className="defaultLink">
                        <ToggleButton
                          style={
                            show
                              ? {
                                  background: "transparent",
                                  border: "2px solid #55a7a0",
                                  padding: "5px 25px",
                                  color: "rgb(14 69 98)",
                                  fontWeight: "400",
                                }
                              : {
                                  background: "#55a7a0",
                                  padding: "5px 25px",
                                  border: "2px solid #55a7a0",
                                }
                          }
                          className="login_signup_toggle"
                          id="tbg-radio-2"
                          onClick={() => setShow(false)}
                        >
                          Sign Up
                        </ToggleButton>
                      </Link>
                    </ToggleButtonGroup>
                  </Row>
                  <Row>
                    <Col className="">
                      <Switch>
                        <Route exact path="/login">
                          <Login />
                        </Route>

                        <Route exact path="/signup">
                          <SignUp />
                        </Route>

                        <Redirect from="*" to="/login" />
                      </Switch>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-center p-2">
                      {show ? (
                        <Link
                          className="defaultLink"
                          onClick={() => setShow(false)}
                          to="/signup"
                        >
                          Don't have an account?
                        </Link>
                      ) : null}
                      <h3 id="or" className="my-3">
                        OR
                      </h3>
                      <div className="google p-1">
                        <span>
                          <img
                            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                            alt="google"
                          />
                          CONTINUE WITH GOOGLE
                        </span>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Row>
          </div>
        </div>
      </Router>
    </>
  );
}
