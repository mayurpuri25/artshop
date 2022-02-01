import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "../../assets/css/Auth/login.css";
import { signup } from "../../redux/slice/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
      dispatch(signup(localStorage.getItem("user")));
    }
  }, [dispatch]);

  async function handleSubmit(e) {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    await fetch("http://localhost:4000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.success) {
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
  }

  return (
    <>
      <Form className="BasicLogin pt-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button id="loginbtn" type="submit">
          LOG IN
        </Button>
      </Form>
    </>
  );
}

export default Login;
