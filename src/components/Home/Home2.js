import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import devops from "../Home/devops.png";
import figma from "../Home/figma.png";
import dev from "../Home/software.png"; 
import { annotate } from 'rough-notation';




function Home2() {
    const textRef = [
    useRef(null), // Reference to the wave element
    useRef(null),
    useRef(null),
    useRef(null),
   
  ];
  useEffect(() => {
    const annotations = [
      annotate(textRef[0].current, { type: 'box', 
      strokeWidth: 3,
      padding: [5, 10], }),
      annotate(textRef[1].current, { type: 'box', 
      strokeWidth: 2,
      padding: [5, 10], }),
      annotate(textRef[2].current, { type: 'box',  
      strokeWidth: 2,
      padding: [5, 10], }),
      annotate(textRef[3].current, { type: 'box',  
      strokeWidth: 2,
      padding: [5, 10], }),
    ];
  
    annotations.forEach((annotation) => annotation.show());
  
    return () => {
      annotations.forEach((annotation) => annotation.remove());
    };
  }, []);
  
  return (
    <Container fluid className="home-about-section" id="about">
     
      <Row style={{ justifyContent: "center", paddingBottom: "50px", textAlign: "center", gap: "100px" }}>
      <h2><strong><span ref={textRef[0]}>SKILLS</span></strong></h2>
      <Col xs={4} md={2} className="tech-icons" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src={figma} style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center",}}></img>
         <h5><strong><span  ref={textRef[1]}>UI/UX</span></strong></h5>
    <p><h6 style={{textAlign:"left"}}>
👨🏽‍🎨 Experience in  Conducting research to understand user needs, behaviors, and preferences to inform design decisions.
<br></br>
<br></br>
🐼 Experience in Designing interactive elements and animations to provide feedback, guide users, and create engaging experiences.
<br></br>
<br></br>
👥 Experience in Working closely with developers, stakeholders, and other team members to ensure the design vision is effectively implemented.
<br></br>
<br></br>
🎨 Experience in Developing visually appealing designs by selecting appropriate color schemes, typography, icons, and imagery that align with the brand identity and enhance the user experience.
</h6></p>
  </Col>
      <Col xs={4} md={2} className="tech-icons" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src={dev} style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center",}}></img>
     <h5><strong><span ref={textRef[2]} >Frontend Developer</span></strong></h5>
    <p><h6 style={{textAlign:"left"}}>
  🕵️‍♂️ Experience in HTML (Hypertext Markup Language) to structure the content and layout of web pages, utilizing semantic elements for better accessibility and SEO.
<br></br>
<br></br>
🏂 Experience in CSS (Cascading Style Sheets) for styling and visually enhancing the UI, including CSS frameworks like Bootstrap or Tailwind CSS.
<br></br>
<br></br>
🏜 Experience in JavaScript programming language for implementing interactivity and dynamic functionality on the front end, utilizing libraries or frameworks like React, Angular, or Vue.js.
<br></br>
<br></br>
📱 Experience in creating responsive and mobile-friendly designs that adapt to different screen sizes and devices, using CSS media queries and responsive frameworks.
</h6></p>
   </Col>
   <Col xs={4} md={2} className="tech-icons" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src={devops} style={{ width: "100%", height: "auto", display: "flex", justifyContent: "center", alignItems: "center",}}></img>
     <h5><strong><span ref={textRef[3]}>Devops</span></strong></h5>
    <p><h6 style={{textAlign:"left"}}>
👨🏽‍💻 Experience in  working with multiple cloud platforms, including AWS, Azure, and Google Cloud. I am familiar with provisioning and managing cloud resources, deploying applications, and utilizing various cloud services.
<br></br>
<br></br>
⛈️ Experience in hosting and managing websites, including configuring web servers, managing domains and DNS settings, implementing SSL certificates, and ensuring website performance and security.
<br></br>
<br></br>
🪈 Experience in setting up and maintaining Continuous Integration (CI) pipelines. This involves automating the build, test, and deployment processes, integrating version control systems like Git, and utilizing tools such as Jenkins, GitLab CI/CD, or Azure DevOps to ensure a streamlined and efficient development workflow.
</h6></p>
   </Col>
   
  
        </Row>
    </Container>
  );
}
export default Home2;
