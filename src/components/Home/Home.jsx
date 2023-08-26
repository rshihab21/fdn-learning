import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import bg from "../../assets/images/bg-1.png";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import Services from "../Services/Services";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <Container>
        <div className="d-flex  py-5 justify-content-between">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="text-justify">
                <h3 className="fs-1 text-uppercase">Let's Make</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  explicabo quisquam quasi blanditiis veniam libero in dolore
                  debitis dolores voluptatibus.
                </p>
                <Button type="button" className="btn btn-primary">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="col-md-6">
              <img className="bg-img" src={bg} alt="" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-center fs-2 text-uppercase">What You Learn !</h3>
        </div>
        <Row className="mt-5">
          {data.map((service) => (
            <Col md={4} key={service.id}>
              <Services service={service}></Services>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
