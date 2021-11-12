import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/myAccount/MyAccount.css";
import LeftNavbar from "../components/MyAccount/LeftNavbar";
import RightComp from "../components/MyAccount/RightComponent";

export default function MyAccount() {
  return (
    <>
      <Container className="myaccount mt-5">
        <Row>
          <Col className="pb-2">
            <h3>My Account-Gauri Bhardwaj Gauri Bhardwaj</h3>
          </Col>
        </Row>
        <Row className="flexcontainer">
          <Col className="navcol">
            <LeftNavbar />
          </Col>
          <Col className="rightcomponent py-4 px-4">
            <RightComp />
          </Col>
        </Row>
      </Container>
    </>
  );
}
