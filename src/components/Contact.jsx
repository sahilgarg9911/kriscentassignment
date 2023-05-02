import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "../styles/home.css";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add code to submit the form data to the server
    console.log(name, email, message);
  };

  return (
    <div className="container contactus">
      <h1>Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <h3>Address</h3>
          <p>2nd Floor, Safina Towers
Opposite J.P. Techno Park, No.3 Ali Asker Roadt<br />
Bangalore - 560052
Karnataka<br />
          India</p>
          <h3>Contact Number</h3>
          <p>+91-9876543211</p>
          <h3>Email</h3>
          <p>info@techsolutions.com</p>
          <h3>Fax Number</h3>
          <p>+1-XXX-XXX-XXXX</p>
          <h3>Visit Our Office</h3>
          <p>10th Floor, Tower B & C, DLF Building No.5 (Epitome), DLF Cyber City
Sector 25A, Gurugram - 122002</p>

        </div>
        <div className="col-md-6">
          <h3>Get in Touch</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={name} onChange={handleNameChange} required />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" value={email} onChange={handleEmailChange} required />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} value={message} onChange={handleMessageChange} required />
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
