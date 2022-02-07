import { React, useState } from "react";
import { Row, Col, Image, Button, Form } from "react-bootstrap";
import userPic from "../../assets/images/new.jpg";

export default function RightComponent() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [disabled,setDisabled] = useState(true);

  function handleDefault(event) {
    event.preventDefault();
    const user = {
      name: name,
      number: number,
      email: email,
      gender: gender,
      location: location,
      city: city,
      state: state,
      pin: pin,
    };
    console.log(user);
    setDisabled(true);
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
                <Form.Label>
                  Full Name <span id="required">*</span>
                </Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  readOnly={disabled}
                  required
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>
                  Phone Number <span id="required">*</span>
                </Form.Label>
                <Form.Control
                  placeholder="Enter Phone Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  readOnly={disabled}
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3" id="formgroup">
              <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                <Form.Label>
                  Email <span id="required">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  readOnly
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  defaultValue="--Select Gender--"
                  onChange={(e) => setGender(e.target.value)}
                  disabled={disabled}
                >
                  <option>--Select Gender--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">other</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  placeholder="House Number , Street , Area"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  readOnly={disabled}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3" id="formgroup">
              <Form.Group className="mb-3" as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  readOnly={disabled}
                />
              </Form.Group>

              <Form.Group className="mb-3" as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  readOnly={disabled}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Pin</Form.Label>
                <Form.Control
                  placeholder="Pin"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  readOnly={disabled}
                />
              </Form.Group>
            </Row>
            <Row className="my-4">
              <Col className="text-center">
                {disabled?
                
                <Button className="profileBtn" onClick={()=>setDisabled(false)}>
                  Edit Profile
                </Button>
                :
                <div className="">

                <Button className="profileBtn bg-success m-2" type="submit">
                  Save Changes
                </Button>
                <Button className="profileBtn bg-danger m-2" onClick={()=>setDisabled(true)}>
                  Cancel
                </Button>
                </div>
                }
              </Col>
            </Row>
          </Form>
        </Row>
      </div>
    </>
  );
}
