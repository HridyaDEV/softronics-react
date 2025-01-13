import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image,  } from "react-bootstrap";

function Profile({ name, role, imageUrl }) {
  return (
    <Container className="text-center  mt-3">
      <Image
        src={imageUrl}
        roundedCircle
        alt={name}
        className="profile-image mb-3"
        style={{ width: "150px", height: "150px" }}
      />
      <h3 className="text-dark">{name}</h3>
      <p className="text-dark">{role}</p>
    </Container>
  );
}

export default Profile;
