import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import girl from "../assets/img/girl.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import CV from "./CV.pdf";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front-end Developer", "Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handleClick = () => {
    window.open(
      "https://www.linkedin.com/in/pammi-kumari-099978179/",
      "_blank"
    );
  };
  const handleDownload = () => {
    const fileUrl = process.env.PUBLIC_URL + '/CV.pdf';

    const anchorElement = document.createElement('a');
    anchorElement.href = fileUrl;
    anchorElement.download = 'Pammi Kumari CV.pdf';
    anchorElement.click();
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Pammi Kumari`}</h1>
                  <h2>
                    {" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Front-end Developer", "Web Developer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>

                  <p>
                    With over 4 years in front-end development, I specialize in
                    crafting dynamic web applications. Proficient in HTML5, CSS3
                    (Bootstrap, SASS, Tailwind, Material UI), JS, ReactJS,
                    Redux, TypeScript and NextJS I focus on creating engaging
                    user interfaces. Experienced with Webpack/parcel for
                    efficient builds, and Git/GitHub for version control, I also
                    integrate seamlessly with REST/Web APIs.
                  </p>
                  <button className="connect-btn" onClick={handleClick}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                  <button className="download-cv-btn" onClick={handleDownload}>
                    Download CV
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={girl} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
