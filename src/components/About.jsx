import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/home.css";

const About = () => {
  return (
    <Container className="py-5">
              <Col className="mb-5">
        <h2>About Us</h2>
      </Col>
    <Row>
      <Col md={6} className="mb-5">
        <h2>Our History</h2>
        <p>Tech Solutions was founded in 2010 with a vision to provide high-quality and innovative software solutions to businesses of all sizes. Over the years, we have grown into a team of experienced developers, designers, project managers, and quality assurance specialists who are passionate about creating software solutions that help our clients achieve their business goals.</p>
      </Col>
      <Col md={6} className="mb-5">
        <h2>Our Mission</h2>
        <p>Our mission is to deliver high-quality and innovative software solutions that meet our clients' specific needs and help them achieve their business goals. We strive to provide exceptional customer service and build long-lasting relationships with our clients.</p>
      </Col>
    </Row>
    <Row>
      <Col md={6} className="mb-5">
        <h2>Our Vision</h2>
        <p>Our vision is to become a leading provider of software solutions that help businesses of all sizes succeed in a rapidly changing digital world. We aim to continue innovating and adapting to new technologies and trends to provide our clients with the best possible solutions.</p>
      </Col>
      <Col md={6} className="mb-5">
        <h2>Our Values</h2>
        <ul>
          <li>Innovation: We strive to be at the forefront of new technologies and trends to deliver innovative solutions to our clients.</li>
          <li>Quality: We believe in delivering high-quality software solutions that meet our clients' needs and exceed their expectations.</li>
          <li>Customer service: We are committed to providing exceptional customer service and building long-lasting relationships with our clients.</li>
          <li>Teamwork: We believe in the power of teamwork and collaboration to deliver the best possible solutions.</li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col className="mb-5">
        <h2>Meet Our Team</h2>
      </Col>
    </Row>
    <Row>
      <Col md={3} className="mb-5 abouutimg">
        <img src="https://tse3.mm.bing.net/th?id=OIP.iDetnmIJeB_t79HZFWpIkAHaE8&pid=Api&P=0" alt="John Smith" className="img-fluid mb-3" />
        <h4>John Smith</h4>
        <p>CEO</p>
      </Col>
      <Col md={3} className="mb-5">
        <img src="https://chicagophotovideo.com/wp-content/uploads/2017/10/ezgif.com-webp-to-jpg-17.jpg" alt="Jane Doe" className="img-fluid mb-3" />
        <h4>Jane Doe</h4>
        <p>Project Manager</p>
      </Col>
      <Col md={3} className="mb-5">
        <img src="https://tse4.mm.bing.net/th?id=OIP.Ltqg54JFsfHety19Tpw3fAHaF7&pid=Api&P=0" alt="Michael Johnson" className="img-fluid mb-3" />
        <h4>Michael Johnson</h4>
        <p>Senior Developer</p>
      </Col>
      <Col md={3} className="mb-5 abouutimg">
      <img src="https://tse4.mm.bing.net/th?id=OIP.0V7McWCxRrePTuWcpdT4EgHaE8&pid=Api&P=0" alt="Sarah Lee" className="img-fluid mb-3" />
          <h4>Sarah Lee</h4>
          <p>Designer</p>
        </Col>
      </Row>
    </Container>
  )
}

export default About