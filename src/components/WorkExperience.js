import React from 'react';

const WorkExperience = () => {
    const experiences = [
      {
        company: "iOPEX Technologies",
        location: "Bangalore, India",
        position: " Senior Software Engineer ",
        duration: "10/2024 - Present",
        details: [
          "Developed and optimized highly interactive, mobile-responsive user interfaces using React.js, JavaScript, HTML, and CSS, ensuring a seamless user experience across devices.",
          "Collaborated closely with design and marketing teams to implement pixel-accurate, accessible, and maintainable components.",
          "Created and executed unit and component tests using Jest, ensuring robust, bug-free code and increasing test coverage across critical features. "
        ]
      },
      {
        company: "TCS",
        location: "Bangalore, India",
        position: "System Engineer",
        duration: "01/2023 - 09/2024",
        details: [
          "Developed and implemented highly interactive and maintainable user interfaces for a leading aircraft manufacturer using React.js, Redux, Kendo UI, and TypeScript.",
          "Integrated REST APIs, implemented caching and batching strategies, and optimized rendering, achieving a 15% improvement in application performance and responsiveness.",
          "Enhanced user interfaces with dynamic rendering and component-based architecture in React.js, resulting in a more modular and scalable codebase. ",
          "Built responsive landing pages using HTML, CSS and JavaScript, with Marketo and PathFactory to enhance marketing campaign effectiveness."
        ]
      },
      {
        company: "Capgemini India Pvt Ltd",
        location: "Kolkata, India",
        position: "Senior Software Engineer",
        duration: "01/2021 - 01/2023",
        details: [
          "Developed highly responsive, component-driven user interfaces for a leading US-based e-commerce(healthcare) client using React.js, JavaScript, CSS, and HTML, focusing on accessibility and mobile responsiveness.",
          "Created and implemented advanced user components, achieving a 20% improvement in user engagement and conversion rates.",
          "Created unit and component test cases using Jest, increasing code reliability, and ensuring seamless deployment across environments. "
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
