import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


import emotion from "../../Assets/Projects/emotion.png";
import signup from "../../Assets/Projects/signup.png";
import house from "../../Assets/Projects/fesac.png";
import fesac from "../../Assets/Projects/fesactours.png";
import transport from "../../Assets/Projects/housing.png";
import tours from "../../Assets/Projects/transport.png";
import port from "../../Assets/Projects/portfolio.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <p style={{ textAlign:"center" }}>
         <b>PROJECT CURRENTLY IN PROGRESS</b>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={port}
              title="MY PORTFOLIO"
              description="A simple portfolio that shows collection of my project, achievements, skills and experiences."
             
            
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={tours}
              title="LOGISTIC"
              description="Designed a logistic website that can serve as an online platform for logistics companies to showcase their services, provide information to potential clients, and facilitate communication and transactions.
              "
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={transport}
              title="FESAC HOMES"
              description=" Developed a platform that allows users to search, view and interact with listings of properties that are available for sale, rent, or lease."
            
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={signup}
              title="SIGN UP"
              description="A platform that allows users to create accounts or sign up for specific services, memberships, or access to exclusive content."
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={house}
              title="FESAC CHARITY"  
              description="A platform to raise awareness, share information and facilitate donations for a charitable cause or organization. "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fesac}
              title="FESAC TOURS"
              description="A platform that provides information, facilitates bookings, and offers a seamless user experience for travelers looking to explore various destinations and book tours or travel experiences. "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
