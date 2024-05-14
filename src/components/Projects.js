import {React} from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import CounterApp from "../assets/img/counter-app.png"
import foodapp from "../assets/img/foodApp.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import WorkExperience from "./WorkExperience";
import Education from "./Education";

export const Projects = () => {

  const projects = [
    {
      title: "Counter Game",
      description: "A simple counter game  built with React",
      imgUrl: CounterApp,
      url: "https://pammikumari1234.github.io/counter-game/",
    },
    {
      title: "Food App",
      description: "A food ordering app that fetches the data from live API(swiggy.com)",
      imgUrl: foodapp,
      url: "https://namaste-react-phi-one.vercel.app/",
    },
  ];
  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About Me</h2>
                <p>I'm a forward-thinking front-end developer, proficient in a range of technologies including HTML5, CSS3, JavaScript, ReactJS, and Redux, I specialize in creating engaging user interfaces that seamlessly blend aesthetics with functionality. With a passion for collaboration and a keen eye for detail, I thrive on turning ideas into captivating digital experiences. If you're looking for a dedicated developer who brings both technical expertise and a creative edge to the table, I'm eager to help bring your projects to life.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Work Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handleProjectClick(project.url)}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <WorkExperience/>   
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Education/>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}