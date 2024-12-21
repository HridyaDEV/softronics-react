import React from 'react';
import { Image } from 'react-bootstrap';

function Card1({ image, title, description }) {
  return (
    <div className="service-item m-3 text-center ">
      <div className="service-image mb-3">
        <Image src={image} roundedCircle width="150" height="150" />
      </div>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
}

export default Card1;
