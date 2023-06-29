import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


import emotion from "../../Assets/Projects/emotion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <p style={{ textAlign:"center" }}>
         FRONTEND DEVELOPER
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={emotion}
              title="MY PORTFOLIO"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
             
            
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={emotion}
              title="WEATHER FORECAST"
            
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={emotion}
              title="CHAT BOT"
            
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={emotion}
              title="TO DO LIST"
            
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={emotion}
              title="CALCULATOR"  
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="MUSIC PLAYER"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="MUSIC PLAYER"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="UBER"
            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="SHOPPING MALL"
            
            />
          </Col>
        </Row>

<div>

        <p style={{ textAlign:"center" }}>
         DEVOPS
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={emotion}
              title="MY PORTFOLIO"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
             
            
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={emotion}
              title="WEATHER FORECAST"
            
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={emotion}
              title="CHAT BOT"
            
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={emotion}
              title="TO DO LIST"
            
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={emotion}
              title="CALCULATOR"  
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="MUSIC PLAYER"
            
            />
          </Col>
          
        </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
