import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Brijesh Kumar </span>
            from <span className="purple"> Basti (Uttar Pradesh), India.</span>
            <br />
            I am currently looking for Job in IT field.
            <br />
            I have completed My Bacholar Of Technology in Electronics and Communication Engineering in 2024 from CSJM University Kanpur.
            Currently i am working as full-stack trainee at Jspiders Noida.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Fitness and Gym 
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "मैं इतनी दूर सिर्फ यहां आने के लिए नहीं आया हूं।"{" "}
          </p>
          <footer className="blockquote-footer">Brijesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
