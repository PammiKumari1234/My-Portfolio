import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { useEffect, useState } from "react";

const quotes=[
  "If you're the Smartest person in the room, you're in the wrong room",
  "The best time to plant the tree was 20 years ago, and the second best time is now.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts."
]

export const Footer = () => {
  const[indexQ,setIndexQ]=useState(0);
  const[sliding,setSliding]=useState(false);
  useEffect(()=>{
    const interval=setInterval(()=>{
      setSliding(true);
      setTimeout(()=>{
        setIndexQ(prev=>(prev+1)%quotes.length);
        setSliding(false);
      },300)
    },3000);
    return()=>clearInterval(interval);
  },[quotes.length])
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            {/* <div class="logo">
              <span class="first">Pammi</span>
              <span class="last">Kumari</span>
            </div> */}
            <div className="quotes-container">
              <p className="quotes">Quotes</p>
              <p className={`qt ${sliding ? "slide" : ""}`}>
                {quotes[indexQ]}
              </p>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/pammi-kumari-099978179/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/pammi7884?igsh=dGo3bzh5MjUxaDU%3D&utm_source=qr">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <div className="contact-me">
              <div className="city">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>

                <span>Bangalore, India</span>
              </div>
              <div className="mail">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 4h20v16H2V4zm2 2v.01L12 13 20 6.01V6H4z" />
                </svg>

                <span>pammisao1234@gmail.com</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
