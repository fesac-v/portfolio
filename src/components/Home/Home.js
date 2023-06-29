import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import SvgComponent from "./Home3";
import Home4 from "./Home4";
import { annotate } from 'rough-notation';





function Home() {
  const textRef = [
  useRef(null), // Reference to the wave element
  useRef(null),
  useRef(null),
  useRef(null),
  
];
useEffect(() => {
  const annotations = [
    annotate(textRef[0].current, { type: 'box', color: '#7965FF',
    strokeWidth: 9,
    padding: [5, 10],
     }),
    annotate(textRef[1].current, { type: 'underline',
    strokeWidth: 2,
    multiline: true,
    padding: [5, 10], }),
    annotate(textRef[2].current, { type: 'underline', 
    padding: [5, 10], }),
    annotate(textRef[3].current, { type: 'underline', 
    strokeWidth: 2,
    padding: [5, 10], }),
  
  ];

  annotations.forEach((annotation) => annotation.show());

  return () => {
    annotations.forEach((annotation) => annotation.remove());
  };
}, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
      
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              <span ref={textRef[0]}>HI THERE&nbsp;<b>{" "}</b>  &nbsp;</span>
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻 
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <br></br>
              </h1>

              <h1 className="heading-name">
                <span><strong>OLAREWAJU</strong></span>
                <br></br>
                <strong className="main-name">OKIKIOLUWA</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
              


      
              
              
              <div class="typewriter">

      <h1><strong>DEVOPS+FRONTEND DEV
        <br></br>
        UI/UX</strong></h1>
    </div>
                
              </div>
            
              <div className="abtme">
              I am a professional&nbsp;&nbsp;<span ref={textRef[1]}> UI/UX designer, &nbsp;</span> &nbsp;&nbsp;&nbsp;&nbsp;
              <span ref={textRef[2]}>Developer,</span>&nbsp; and &nbsp;
              <span ref={textRef[3]}>DevOps</span>&nbsp; expert. I specialize in creating intuitive user experiences, developing efficient and functional applications, and implementing robust DevOps practices for seamless software delivery.</div>
             
               <br>
               </br>
              
              <a class="hire-button" href="">Hire Me
              </a> 
              </Col>
           

            <Col md={5} style={{ paddingBottom: 20 }}>
              <SvgComponent></SvgComponent>
            </Col>
          </Row>
          <Home2 />
          <Home4 />
         
          
        </Container>
      </Container>
    
    
    </section>
  );
}

export default Home;
