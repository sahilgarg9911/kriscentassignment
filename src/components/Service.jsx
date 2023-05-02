import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../styles/home.css";

const Service = () => {
  return (
    <Container className='servicesdiv'>
    <Row>
      <Col>
        <h1>Our Services</h1>
      </Col>
    </Row>
    <Row>
      <Col md={4} className='typesofservices'>
        <Card>
          <Card.Body>
            <Card.Title>Web and App Development</Card.Title>
            <Card.Text>
              We develop responsive, cross-platform web and mobile applications that are optimized for performance and user experience.
            </Card.Text>
            <Button variant="primary" href="#contact-us">Get Started</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className='typesofservices'>
        <Card>
          <Card.Body>
            <Card.Title>UI/UX Design</Card.Title>
            <Card.Text>
              We offer UI/UX design services to ensure that web and app interfaces are visually appealing and easy to use.
            </Card.Text>
            <Button variant="primary" href="#contact-us">Get Started</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className='typesofservices'>
        <Card>
          <Card.Body>
            <Card.Title>E-commerce Development</Card.Title>
            <Card.Text>
              We develop e-commerce websites and apps using ReactJS and Bootstrap. We create online stores that are secure, scalable, and easy to manage.
            </Card.Text>
            <Button variant="primary" href="#contact-us">Get Started</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={4} className='typesofservices'>
        <Card>
          <Card.Body>
            <Card.Title>CMS Development</Card.Title>
            <Card.Text>
              We provide CMS development services using WordPress, Drupal, and other popular content management systems. We create custom themes and plugins that meet the specific needs of clients.
            </Card.Text>
            <Button variant="primary" href="#contact-us">Get Started</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className='typesofservices'>
        <Card>
          <Card.Body>
            <Card.Title>Quality Assurance and Testing</Card.Title>
            <Card.Text>
              We perform thorough testing to ensure that web and app products are bug-free and meet the highest quality standards.
            </Card.Text>
            <Button variant="primary" href="#contact-us">Get Started</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className='typesofservices'>
        <Card>
          <Card.Body>
            <Card.Title>Maintenance and Support</Card.Title>
            <Card.Text>
              We provide maintenance and support services to ensure that web and app products are updated and running smoothly.
            </Card.Text>
            <Button variant="primary" href="#contact-us">Get Started</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default Service