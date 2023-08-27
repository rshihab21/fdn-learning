import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { title, body } = useLoaderData();
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default ServiceDetails;
