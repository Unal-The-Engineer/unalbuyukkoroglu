import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMacos,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { RiRobotFill } from "react-icons/ri";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandVscode style={{ transform: "rotate(180deg)" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiRobotFill />
      </Col>
    </Row>
  );
}

export default Toolstack;
