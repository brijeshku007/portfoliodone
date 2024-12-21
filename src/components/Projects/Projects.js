import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import simonsay from "../../Assets/Projects/simonsay.png";
import nextflix from "../../Assets/Projects/netflix2.png";
import excel from "../../Assets/Projects/excel.png";
import whiteBoard from "../../Assets/Projects/white.png";


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
              imgPath={nextflix}
              isBlog={false}
              title="StreamMe"
              description="Built a Netflix like Streaming application to  providing dynamic content recommendations .Implemented Firebase Authentication to handle secure user sign-up, login, and session management.Utilized the TMDB API to fetch and display real-time data on movies and TV shows.To give AI Feature to our application ,i used google generativeai Api and make the functionality like Seaching movies."
              ghLink="https://github.com/brijeshku007/netflix-gpt"
              demoLink="https://streamme007.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whiteBoard}
              isBlog={false}
              title="Marker-Board"
              description="Developed an interactive whiteboard using js resulting in a 25% increase in user engagement through real-time drawing.
              Designed a variety of drawing tools, including pens, brushes, and erasers, with customizable colors and sizes.
              Implemented article-saving functionality that led to a 40% increase in returning users, allowing them to save
              Created Redo-Undo Features for Board using Array as a Stack by storing positions"
              ghLink="https://github.com/brijeshku007/whiteboardfinal"
              demoLink="https://brijeshku007.github.io/whiteboardfinal/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={excel}
              isBlog={false}
              title="Excel-Clone"
              description=" Implemented functionality for users to input text and numbers directly into cells.
              Enabled basic arithmetic operations (addition, subtraction, multiplication, division) within cells, similar to Excel formulas.
              Users can dynamically add, delete, and resize rows and columns.
              Added options for users to format text, such as bold, italic, and alignment, offering a more personalized user experience."
              ghLink="https://github.com/brijeshku007/excel_clone"
              demoLink="https://brijeshku007.github.io/excel_clone/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simonsay}
              isBlog={false}
              title="Simon-Say Game"
              description=" Created a random color sequence that players must repeat by clicking the corresponding buttons.     Implemented a difficulty progression where the game adds one new color to the sequence after each round, challenging the player’s memory as they go. Implemented logic to track the sequence, round, and score, and added error detection to trigger a game-over message and allow for restart."
              ghLink="https://github.com/brijeshku007/Simon-say-game"
              demoLink="https://brijeshku007.github.io/Simon-say-game/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
