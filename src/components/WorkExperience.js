import React from 'react';

const WorkExperience = () => {
    const experiences = [
      {
        company: "iOPEX Technologies",
        location: "Bangalore, India",
        position: " Senior Software Engineer ",
        duration: "10/2024 - Present",
        techstack: "React.js, Redux, JavaScript, HTML, CSS, Jest",
        summary:"Building responsive UI components, collaborating across teams, and implementing tests for stability."
      },
      {
        company: "TCS",
        location: "Bangalore, India",
        position: "System Engineer",
        duration: "01/2023 - 09/2024",
        techstack: "React.js, Redux, TypeScript, Kendo UI, REST APIs",
        summary:"Developed performant UIs, improved rendering speed, and optimized API handling."
      },
      {
        company: "Capgemini India Pvt Ltd",
        location: "Kolkata, India",
        position: "Senior Software Engineer",
        duration: "01/2021 - 01/2023",
        techstack: "React.js, JavaScript, HTML, CSS",
        summary:"Created healthcare e-commerce UIs, boosted engagement through modular components and accessibility."
      }
    ];
  
    return (
      <div className="work-experience">
        <h2>Work Experience</h2>
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <h3>{experience.company}</h3>
            <div className="initial-details">
                <p>{experience.position}</p>
                <p>{experience.location}</p>
                <p>{experience.duration}</p>
                <p>{experience.techstack}</p>
                <p>{experience.summary}</p>
            </div>
            {/* <ul>
              {experience.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul> */}
          </div>
        ))}
      </div>
    );
  };
  
  export default WorkExperience;
