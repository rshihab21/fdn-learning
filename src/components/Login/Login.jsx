import React, { useContext } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { FaFacebook, FaGooglePlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthConText } from "../../providers/AuthProvider";

const Login = () => {
  const { userLogin, user } = useContext(AuthConText);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          navigate("/");
        }
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Container>
        <Row className="w-50 mx-auto">
          <Form className="mt-3 border p-5 rounded" onSubmit={handleLogin}>
            <h1>Login</h1>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control
                type="text"
                name="email"
                placeholder="Username or Email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Control
              className="bg-primary py-3 text-white"
              type="submit"
              value="Create An Account"
            />
            <p className="text-center mt-2 fs-6 fw-semibold">
              Don't have an account ?
              <spna className="text-danger">
                <Link to="/signup"> Create an account</Link>
              </spna>
            </p>
          </Form>
          <div className="grid gap-1 d-flex flex-column align-items-center mt-3">
            <div className="p-2 g-col-12">
              <Button variant="outline-primary rounded fs-5">
                <span className="me-2">
                  <FaFacebook />
                </span>
                Continue With Facebook
              </Button>
            </div>
            <div className="p-2 g-col-12">
              <Button variant="outline-primary rounded fs-5">
                <span className="me-2">
                  <FaGooglePlus />
                </span>
                Continue With Google
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Login;
