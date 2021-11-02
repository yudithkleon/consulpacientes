import React from "react";
import { Nav, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <Nav style={{background: 'black', justifyContent: 'center'}}>
        <Row>
        <p style={{ color: "white", margin: "10px", textAlign: "center" }}>
          300-7706748
        </p>
        <p style={{ color: "white",  textAlign: "center" }}>
          @yudithkleon.gmail.com
        </p>
        <p style={{ color: "white", margin: "5px", textAlign: "center" }}>
          www.linkedin.com/in/yudithkleon
        </p>
        </Row>
   
    </Nav>
  );
};
