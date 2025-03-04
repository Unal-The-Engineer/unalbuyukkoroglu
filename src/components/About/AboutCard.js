import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ünal Büyükköroğlu </span>
            from <span className="purple">Istanbul, Turkey</span>.
            <br />
            I am currently a senior student at Bahçeşehir University, i am passionate about Artificial Intelligence and working on various AI-driven projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball & Fitness
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling (Visited 10+ countries)
            </li>
            <li className="about-activity">
              <ImPointRight /> Music Production (Learning FL Studio)
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing AI & Tech-related Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Museums & Art Exhibitions
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
