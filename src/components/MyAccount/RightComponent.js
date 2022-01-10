import React from "react";
import { Row, Col, Image, Button, Form } from "react-bootstrap";
import userPic from "../../assets/images/new.jpg";

export default function RightComponent() {

  function handleDefault(event){
    return event.preventDefault();
  }

  return (
    <>
      <Row className="">
        <Col>
          <h2 id="heading">Profile</h2>
        </Col>
      </Row>
      <div className="profileinfo p-3">
        <Row className="p-4">
          <Col className="text-center userimg">
            <Image src={userPic} roundedCircle height="170px" />
          </Col>
        </Row>
        <Row className="px-3">
          <Form onSubmit={handleDefault}>
            <Row className="mb-3" id="formgroup">
              <Form.Group className="mb-3" as={Col}>
                <Form.Label>Full Name <span id="required">*</span></Form.Label>
                <Form.Control type="name" placeholder="Enter Name" required/>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Phone Number <span id="required">*</span></Form.Label>
                <Form.Control placeholder="Enter Phone Number" required/>
              </Form.Group>
            </Row>

            <Row className="mb-3" id="formgroup">
              <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                <Form.Label>Email <span id="required">*</span></Form.Label>
                <Form.Control type="email" placeholder="Enter Email" required/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Gender</Form.Label>
                <Form.Select defaultValue="--Select Gender--">
                  <option>--Select Gender--</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>other</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Location</Form.Label>
                <Form.Control placeholder="House Number , Street , Area" />
              </Form.Group>
            </Row>
            <Row className="mb-3" id="formgroup">
              <Form.Group className="mb-3" as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group className="mb-3" as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Pin</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
            <Row className="my-4">
              <Col className="text-center">
                <Button className="savebtn" type="submit">
                  Save Changes
                </Button>
              </Col>
            </Row>
          </Form>
        </Row>
      </div>
    </>
  );
}
