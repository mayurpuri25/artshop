import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "../../assets/css/Auth/signup.css";
import { signup } from "../../redux/slice/userSlice";

export default function SignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password,
    };

    // setLoading(true);

    await fetch("http://localhost:4000/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Accept": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.success) {
          localStorage.clear();
          localStorage.setItem("user", res?.user.name);
          localStorage.setItem("token", res?.token);
          dispatch(signup(localStorage.getItem("user")));
        } else {
          alert(res?.message);
        }
      })
      .catch((error) => {
        alert(error.message);
      });

    // setLoading(false);
  }

  return (
    <div className="BasicSignUp pt-4" onSubmit={handleSubmit}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter your name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Create Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            required
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button id="signbtn" type="submit">
          SIGN UP
        </Button>
      </Form>
    </div>
  );
}
