import React from 'react';

const WorkExperience = () => {
    // Define array of work experiences
    const experiences = [
      {
        company: "TCS",
        location: "Bangalore, India",
        position: "System Engineer",
        duration: "01/2023 - 09/2024",
        details: [
          "Worked for a leading aircraft manufacturer client, using React, Redux, Kendo UI, MUI.",
          "Integrated RESTful APIs to fetch and update data, optimizing application performance and responsiveness, leading to a 15% increase in application speed.",
          "Collaborated with cross-functional teams, including 10 designers and backend developers, to translate design specification into functional code, resulting in a 20% increase in development efficiency.",
          "Utilized Webpack and Babel for bundling and transpiling JavaScript code."
        ]
      },
      {
        company: "Capgemini India Pvt Ltd",
        location: "Kolkata, India",
        position: "Senior Software Engineer",
        duration: "01/2021 - 01/2023",
        details: [
          "Worked for a leading US based ecom(healthcare) client using technologies such as React, JavaScript, Bootstrap, CSS, and HTML. Played a key role in troubleshooting, improving code quality, reducing the number of bugs and issues reported in subsequent releases by 50%.",
          "I excelled in identifying and developing highly responsive user components, ensuring an enhanced and engaging user experience by 20%.",
          "Played a pivotal role in meeting project deadlines, ensuring timely delivery of highquality software, contributing to a 95% on time project completion rate."
        ]
      },
      {
        company: "JBS Capacitors Pvt Ltd",
        location: "Bhubaneswar, India",
        position: "UI/UX Developer",
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
