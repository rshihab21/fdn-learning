import React, { useContext } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaGooglePlus } from "react-icons/fa6";
import { AuthConText } from "../../providers/AuthProvider";

const SignUp = () => {
  const { createUser, updateprofile, setUser } = useContext(AuthConText);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(password, confirmPassword);
    if (password !== confirmPassword) {
      return;
    }
    console.log(name, email, password);
    // const user = { email, password };
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        updateprofile(name)
          .then(() => {
            console.log("Profile Updated!");
          })
          .catch((error) => {
            console.log(error.message);
          });
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Container>
      <Row className="w-50 mx-auto">
        <Form className="mt-3 border p-5 rounded" onSubmit={handleFormSubmit}>
          <h1>Create an Account</h1>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Control type="text" name="name" placeholder="Your Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control
              type="text"
              name="email"
              placeholder="Username or Email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword1">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword2">
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
          </Form.Group>

          <Form.Control
            className="bg-primary py-3 text-white"
            type="submit"
            value="Create An Account"
          />
          <p className="text-center mt-2 fs-6 fw-semibold">
            Allready have an account ?
            <spna className="text-danger">
              <Link to="/login"> Login</Link>
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
          <div class="p-2 g-col-12">
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
  );
};

export default SignUp;
