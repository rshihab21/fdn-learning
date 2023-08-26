import React from "react";
import { Button, Card } from "react-bootstrap";

const Services = ({ service }) => {
  const { name, img, description } = service;
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
};

export default Services;
