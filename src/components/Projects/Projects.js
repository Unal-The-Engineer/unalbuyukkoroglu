import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://camo.githubusercontent.com/c0db9184a91f949f587eb7eb74da5118e067834d12f357d7671bd82c6e3731bc/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f656e2f662f66322f5072656d6965725f4c65616775655f4c6f676f2e737667"
              isBlog={false}
              title="Premier-League-Match-Estimator"
              description="Premier League Match Estimator is a football analytics tool built with Python and machine learning techniques. It uses a Random Forest model trained on match data from the last three seasons to estimate match outcomes based on team strength, player ratings from SofaScore, and recent form data. The project integrates real-time data processing and predictive analytics, allowing users to input lineups and receive dynamic match estimations based on various factors."
              ghLink="https://github.com/Unal-The-Engineer/Premier-League-Estimator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://blogs.nvidia.com/wp-content/uploads/2022/05/Track160-adult-x1280-1280x678.jpg"
              isBlog={false}
              title="Football-Match-Analysis-Project"
              description="Football Match Analysis Project is a football analytics tool built with Python and computer vision techniques. It uses YOLO-based object detection to track the ball and players, analyze possession percentages, and visualize team formations. The project processes match footage, generates statistical insights, and integrates AI-driven analysis for deeper tactical evaluation."
              ghLink="https://github.com/Unal-The-Engineer/football-match-analysis-project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
