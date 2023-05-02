import React from 'react';
import "../styles/home.css";
import { Container, Row, Col, Button } from 'react-bootstrap';

// Import images for the hero section and client logos
// import heroImage from './images/hero-image.jpg';
// import aboutImage from './images/about-image.jpg';
// import clientLogo1 from './images/client-logo-1.png';
// import clientLogo2 from './images/client-logo-2.png';
// import clientLogo3 from './images/client-logo-3.png';

function Home() {
  return (
    <>
      {/* Header with Company Logo and Navigation Menu */}
      <header>
        {/* Navbar goes here */}
      </header>

      <div className='homediv'>




      {/* Hero Section */}
      <section className="hero-section Empowering">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Empowering Businesses with Innovative Digital Solutions</h1>
            <p>Your Partner in IT App and Web Development</p>
            <Button variant="primary">Schedule a Consultation</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Who We Are</h2>
              <h3>A Leading IT App and Web Development Company in India</h3>
              <p>We are a team of passionate developers, designers, and project managers who are committed to delivering innovative and effective digital solutions to businesses of all sizes. With a proven track record of success and a focus on client satisfaction, we have become one of the most trusted and respected IT app and web development companies in India.</p>
            </Col>
            <Col md={6}>
              <img src="https://tse3.mm.bing.net/th?id=OIP.ckpYlpebrS7_iQNG3HOudQHaEJ&pid=Api&P=0" alt="About Us" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section WhatWeDo">
        <Container>
          <h2>What We Do</h2>
          <h3>Our Comprehensive Range of Digital Services</h3>
          <Row>
            <Col md={6}>
              <div className="service-card">
                <h4>Mobile App Development</h4>
                <p>We specialize in developing custom mobile apps for iOS and Android platforms that can help businesses stay connected with their customers and drive engagement and sales.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="service-card">
                <h4>Web Development</h4>
                <p>Our web development services include building high-performance and scalable websites, e-commerce solutions, and web applications that can help businesses achieve their goals.</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="service-card">
                <h4>UI/UX Design</h4>
                <p>We create visually stunning and intuitive user interfaces that can enhance user engagement and provide an exceptional user experience.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="service-card">
                <h4>Digital Marketing</h4>
                <p>Our digital marketing services are designed to help businesses improve their online visibility, attract more traffic to their website, and generate more leads and sales.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Client Logos */}
      <section className="clients-section">
        <Container>
          <h2>Our Happy Clients</h2>
          <Row>
            <Col md={3}>
              <img src="https://www.merkle.com/in/sites/in/files/2020-02/shuttl_2.png" className='imgs' alt="Client Logo 1" />
            </Col>
            <Col md={3}>
              <img src="https://www.merkle.com/in/sites/in/files/2020-02/Dunzo_logo_0.png" className='imgs' alt="Client Logo 2" />
            </Col>
            <Col md={3}>
              <img src="https://www.merkle.com/in/sites/in/files/2020-02/aditya%20birla.png" className='imgs' alt="Client Logo 3" />
            </Col>
            <Col md={3}>
              <img src="https://www.merkle.com/in/sites/in/files/2020-02/ccf327e68e28d671764998c4ab4af9aa.png" className='imgs' alt="Client Logo 3" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision and Mission */}
      <section className="vision-section vision">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Our Vision</h2>
              <p>Our vision is to become the leading provider of innovative and effective digital solutions that can help businesses achieve their goals and reach their full potential.</p>
            </Col>
            <Col md={6}>
              <h2>Our Mission</h2>
              <p>Our mission is to empower businesses with the latest technology and digital solutions that can drive growth, improve efficiency, and enhance customer engagement.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <h2 className='readyto'>Ready to Transform Your Business?</h2>
          <Button variant="primary">Schedule a Consultation</Button>
        </Container>
      </section>

      {/* Footer */}
      <footer>
        {/* Footer content goes here */}
      </footer>
      </div>
    </>
  );
}

export default Home;
