import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Services = ({ service }) => {
  const { name, img, description, id } = service;
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/service/${id}`);
  };
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button onClick={handleDetails} variant="primary">
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Services;
