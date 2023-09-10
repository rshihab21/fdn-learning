import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { FaFacebook, FaGooglePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Container>
        <Row className="w-50 mx-auto">
          <Form className="mt-3 border p-5 rounded">
            <h1>Login</h1>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control type="text" placeholder="Username or Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control type="password" placeholder="Password" />
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
