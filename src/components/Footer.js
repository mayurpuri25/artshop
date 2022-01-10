import React from "react";
import "../assets/css/homepage/footer.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Button,
  FormControl,
} from "react-bootstrap";

export default function joinus() {
  return (
    <div id="footer">
      <Container id="upper">
        <Row>
          <Col className="subscribe">
            <h5>Subscribe to ArtShop via e-mail</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              <br /> typesetting industry.Lorem Ipsum has been the industry.
            </p>
            <InputGroup size="sm" className="mb-3">
              <FormControl
                className="input"
                placeholder="Email address"
                aria-label="E-mail"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Subscribe
              </Button>
            </InputGroup>
          </Col>
          <Col id="col-2" md="auto">
          <ul>
          <li><a href="##">Contact Us</a></li>
          <li><a href="##">Terms of Use</a></li>
          <li><a href="##">Privacy Policy</a></li>
          <li><a href="##">Sell your Art</a></li>
          <li><a href="##">Feedback Form</a></li>
          </ul>
          </Col>
          <Col className="about">
            <h5>About Us</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum has been the industry.
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum has been the industry.
            </p>
            </Col>
        </Row>
      </Container>
        <Row id="copyright">
          <h5>&copy; Copyright Reserved | ArtShop 2021</h5>
        </Row>
    </div>
  );
}
