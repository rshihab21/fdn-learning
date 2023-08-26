import React from "react";
import { Button, Container } from "react-bootstrap";
import bg from "../../assets/images/bg-1.png";
import "./Home.css";

const Home = () => {
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
      </Container>
    </>
  );
};

export default Home;
