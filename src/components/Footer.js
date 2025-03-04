import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-copywright text-center">
          <h3>Unal-The-Engineer</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
