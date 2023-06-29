import React, { useEffect, useMemo, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import SvgComponent from "./Home3";
import Home4 from "./Home4";
import { annotate } from 'rough-notation';

function Home() {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);
  
  const textRefs = useMemo(() => [textRef1, textRef2, textRef3, textRef4], []);

  const [annotations, setAnnotations] = useState([]);

  useEffect(() => {
    const newAnnotations = [
      annotate(textRefs[0].current, { type: 'box', color: '#7965FF', strokeWidth: 9, padding: [5, 10] }),
      annotate(textRefs[1].current, { type: 'underline', strokeWidth: 2, multiline: true, padding: [5, 10] }),
      annotate(textRefs[2].current, { type: 'underline', padding: [5, 10] }),
      annotate(textRefs[3].current, { type: 'underline', strokeWidth: 2, padding: [5, 10] }),
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
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <span ref={textRef1}>HI THERE&nbsp;<b>{" "}</b>  &nbsp;</span>
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
                <div className="typewriter">
                  <h1><strong>DEVOPS+FRONTEND DEV<br></br>UI/UX</strong></h1>
                </div>
              </div>

              <div className="abtme">
                I am a professional&nbsp;&nbsp;<span ref={textRef2}> UI/UX designer, &nbsp;</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span ref={textRef3}>Developer,</span>&nbsp; and &nbsp;
                <span ref={textRef4}>DevOps</span>&nbsp; expert. I specialize in creating intuitive user experiences,
                developing efficient and functional applications, and implementing robust DevOps practices for seamless
                software delivery.
              </div>

              <br></br>
              
              <a className="hire-button" href="https://www.fesaccharityfoundation.org">Hire Me</a>
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
