import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import notfoundimg from "../../assets/images/404.png";

const NotFound = () => {
  return (
    <Container>
      <Row className="text-center">
        <h3>Page Not Found</h3>
        <h5>404 Error</h5>
        <img
          style={{ width: "568px", margin: "auto" }}
          className="img-fluid"
          src={notfoundimg}
          alt=""
        />
        <p>
          Something wrong <Link to="/">Click</Link>
        </p>
      </Row>
    </Container>
  );
};

export default NotFound;
