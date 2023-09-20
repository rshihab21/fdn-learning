import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import projectImg from "../../assets/images/practical-project.svg";
import "./RealLife.css";

const RealLife = () => {
  return (
    <Container>
      <div className="py-5">
        <Row className="d-flex align-items-center">
          <Col md={6}>
            <div>
              <h3>
                Real life project <br /> Learn to work through market standards
              </h3>
              <p>
                From very basic to advanced level you will learn step by step in
                our career tracks. For this, do real life projects, which will
                give you the confidence to work in the job and freelancing
                market.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="project-bg">
              <img src={projectImg} alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default RealLife;
