import React from "react";
import { Col, Row } from "react-bootstrap";
import spring from "../../Assets/spring.png";
import springboot from "../../Assets/springboot.png";
import express from "../../Assets/express.png";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiMysql
} from "react-icons/di";
import {
  SiFirebase,
  
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={spring} alt="about" className="img-fluid" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={springboot} alt="about" className="img-fluid" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={express} alt="about" className="img-fluid" />
      </Col>
     
    </Row>
  );
}

export default Techstack;
