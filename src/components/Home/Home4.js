import React, { useEffect, useRef, useState, useMemo } from "react";
import { Col, Row, } from "react-bootstrap";
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


  const textRef1 = useRef(null);
  

  const textRefs = useMemo(() => [textRef1], []);
  const [annotations, setAnnotations] = useState([]);

  useEffect(() => {
    const newAnnotations = [
      annotate(textRefs[0].current, { type: 'box', strokeWidth: 3, padding: [5, 10] }),
     ];

    setAnnotations(newAnnotations);

    return () => {
      newAnnotations.forEach((annotation) => annotation.remove());
    };
  }, [textRefs]);

  useEffect(() => {
    annotations.forEach((annotation) => annotation.show());
  }, [annotations]);

  return (
    
   
    <Row style={{ justifyContent: "center", paddingBottom: "50px", textAlign: "center",}}>
    <h2><strong><span ref={textRefs[0]}>TECHNOLOGY</span></strong></h2>
	


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
<h1 style={{textAlign:"left"}}><b>Let's make something amazing together.</b></h1>
<br>
</br>
<br>
</br>
<h1 style={{textAlign:"left"}}><b>start by &nbsp;<a href="mailto:victorokiki81@gmail.com" style={{color: "black", textDecorationLine:"line-through"}}>saying hi</a></b></h1>
</Col>
        </Row>
    </Row>
  );
}

export default Home4;
