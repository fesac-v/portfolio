import React, { useEffect, useRef, useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import {
  SiTailwindcss,
  SiCsswizardry,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiMicrosoftazure,
  SiAmazonaws,
  SiGithub,
  SiLinux,
  SiUbuntu,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiAnsible,
  SiHeroku,
  SiFigma,
  SiAdobexd,
  SiSwift,
  SiMicrosoftexcel,
  SiGooglesheets,
  SiTypeform,
  SiEvernote,
  SiSlack,
 
} from "react-icons/si";
import {IoLogoHtml5} from "react-icons/io"
import { annotate } from 'rough-notation';

function Home4() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the form data (e.g., send a message)
    // You can use AJAX requests, form submission to a server, or any other desired action
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };



  const textRef = [
    useRef(null),  
  ];
  useEffect(() => {
    const annotations = [
      annotate(textRef[0].current, { type: 'box', 
      strokeWidth: 3,
      padding: [5, 10],
       }),
      ];

      annotations.forEach((annotation) => annotation.show());
    
      return () => {
        annotations.forEach((annotation) => annotation.remove());
      };
    }, [textRef]);

  return (
    
   
    <Row style={{ justifyContent: "center", paddingBottom: "50px", textAlign: "center",}}>
    <h2><strong><span ref={textRef[0]}>TECHNOLOGY</span></strong></h2>
	


      <Col xs={4} md={2} className="tech-icons">
        <IoLogoHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiCsswizardry/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
   
    <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd />
      </Col>
 
    <Col xs={4} md={2} className="tech-icons">
        <SiSwift />
      </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglesheets />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypeform />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEvernote />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>


     

      <Row style={{justifyContent: "center", paddingBottom: "50px", textAlign: "center",}}>
      <Col md={6}>
<br></br>
<br></br>
<br></br>
<br></br>
  <h1>Contact Me</h1>
  <p>Send me a message</p>
  <Form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
    <Form.Group controlId="formName">
      <Form.Label>Your Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Form.Group>
    <Form.Group controlId="formEmail">
      <Form.Label>Your Email</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </Form.Group>
    <Form.Group controlId="formMessage">
      <Form.Label>Your Message</Form.Label>
      <Form.Control
        as="textarea"
        rows={4}
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Send Message
    </Button>
  </Form>
</Col>
        </Row>
    </Row>
  );
}

export default Home4;
