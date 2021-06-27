import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
    // style={{ width: "100vw", height: "100%", backgroundColor: "#07abf1" }}
    >
      <Container>
        <Row>
          <Col className="text-center">
            <a>
              <img
                src="https://res.cloudinary.com/ddgevj2yp/image/upload/c_scale,w_319/v1619345869/Logo-02_PNG_2_iozyex.png"
                alt=""
                style={{
                  height: "20px",
                  marginTop: "0.8rem",
                  cursor: "pointer",
                }}
                onClick={() => window.open("https://www.dynamic-juice.com/")}
              />
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-1">
            &copy;
            {new Date().getFullYear()}&nbsp; | All Rights Reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
