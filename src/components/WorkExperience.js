import React from 'react';

const WorkExperience = () => {
    // Define array of work experiences
    const experiences = [
      {
        company: "TCS",
        location: "Bangalore, India",
        position: "System Engineer",
        duration: "01/2023 - Present",
        details: [
          "Developed a dynamic e-commerce platform using React.js, spearheading the creation of a real-time product customization feature that heightened user engagement. Implemented efficient state management through React Hooks, developed reusable components adhering to best practices, and optimized performance using code splitting, lazy loading, and responsive design strategies.",
          "Integrated RESTful APIs seamlessly with React, conducting performance audits, and ensuring code quality through rigorous unit testing with Jest and React Testing Library. Collaborated with cross-functional teams. Utilized Webpack and Babel for bundling and transpiling JavaScript code."
        ]
      },
      {
        company: "Capgemini India Pvt Ltd",
        location: "Kolkata, India",
        position: "Senior Software Engineer",
        duration: "01/2021 - 01/2023",
        details: [
          "Worked with web development technologies such as ReactJs,JavaScript, Bootstrap, CSS, and HTML. My role involved implementing Bootstrap plugins to create dynamic components like carousels, accordions, and modal windows. I excelled in identifying and developing highly-responsive user components, ensuring an enhanced and engaging user experience."
        ]
      },
      {
        company: "JBS Capacitors Pvt Ltd",
        location: "Bhubaneswar, India",
        position: "Engineering Intern",
        duration: "04/2020 - 10/2020",
        details: [
          "Worked on a data annotation project using python.",
          "Worked on a web development project using HTML, CSS."
        ]
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
            </div>
            <ul>
              {experience.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
  export default WorkExperience;
