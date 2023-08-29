import React from "react";
import { Container, Row } from "react-bootstrap";
import "./About.css";
import AboutDetails from "../AboutDetails/AboutDetails";

const About = () => {
  return (
    <Container>
      <Row>
        <div className="text-center py-5">
          <h3 className="fs-1 text-uppercase fw-bold">What We Do</h3>
          <hr className="border border-primary about-hr border-2 opacity-75"></hr>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nemo
            suscipit quasi, aliquid veniam quia tempora iste non illum
            perspiciatis dolore dolor ullam corporis atque deleniti! Doloribus
            iste ratione cumque! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dignissimos consectetur sint inventore? Ex soluta
            corrupti exercitationem voluptas dolorum facere repellat?
          </p>
        </div>
        <AboutDetails></AboutDetails>
      </Row>
    </Container>
  );
};

export default About;
