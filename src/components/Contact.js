import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert,Button } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState('Send');
  const [emailStatus, setEmailStatus] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  useEffect(() => {
    if (emailStatus) {
      const timer = setTimeout(() => {
        setEmailStatus('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [emailStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (!name.trim()) {
      setNameError('Name is required.');
      valid = false;
    }
    if (!email.trim()) {
      setEmailError('Email is required.');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address.');
      valid = false;
    }
    if (!message.trim()) {
      setMessageError('Message is required.');
      valid = false;
    }

    if (valid) {
      const serviceId = "service_xqkj7wp";
      const templateId = "template_q2924yd";
      const publicKey = "tEQDxA-ZYmypfWLpY";
      const templateParams = {
        from_name: name,
        from_email: email,
        phone: phone,
        to_name: "Pammi Kumari",
        message: message
      };

      setButtonText('Sending...');

      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email Sent");
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
          setEmailStatus('Email sent successfully.');
          setNameError('');
          setEmailError('');
          setMessageError('');
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          setEmailStatus('Unable to send email.');
        })
        .finally(() => {
          setButtonText('Send');
        });
    }
  };

  const handleInputChange = () => {
    setNameError('');
    setEmailError('');
    setMessageError('');
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                  <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={name} placeholder="Name" onChange={(e) => { setName(e.target.value); handleInputChange(); }} />
                        {nameError && <div className="text-danger">{nameError}</div>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={email} placeholder="Email Address" onChange={(e) => { setEmail(e.target.value); handleInputChange(); }} />
                        {emailError && <div className="text-danger">{emailError}</div>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={phone} placeholder="Phone No." onChange={(e) => setPhone(e.target.value)} />
                      </Col>
                      </Row>
                      <Row>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={message} placeholder="Message" onChange={(e) => { setMessage(e.target.value); handleInputChange(); }}></textarea>
                        {messageError && <div className="text-danger">{messageError}</div>}
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      </Row>
                  </form>
                  {emailStatus && (
                    <div className="position-fixed bottom-0 end-0 m-3">
                    <Alert variant={emailStatus.includes('successfully') ? 'success' : 'danger'} style={{ maxWidth: "100%", position: "relative" }}>
                      {emailStatus}
                      <Button className="btn-close" onClick={() => setEmailStatus('')}></Button>
                    </Alert>
                  </div>
                  )}
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
