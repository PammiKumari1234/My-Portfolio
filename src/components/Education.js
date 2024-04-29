import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      qualification: "Masters of Computer Application",
      institute: "Silicon Institute of Technology",
      location: "Bhubaneswar, Odisha",
      duration: "2018 - 2020",
      result: "CGPA 8.2"
    },
    {
      qualification: "BSc (Computer Science)",
      institute: "Government Autonomous College",
      location: "Rourkela, Odisha",
      duration: "2015 - 2018",
      result: "CGPA 8.0"
    },
    {
      qualification: "10+2",
      institute: "SJ DAV Public School",
      location: "Chaibasa, Jharkhand",
      duration: "Year of Passing: 20XX", // Update with actual year
      result: "Percentage: 71.2%"
    },
    {
      qualification: "10",
      institute: "SJ DAV Public School",
      location: "Chaibasa, Jharkhand",
      duration: "Year of Passing: 20XX", // Update with actual year
      result: "CGPA 8"
    }
  ];

  return (
    <div className="education">
      {educationDetails.map((detail, index) => (
        <div key={index} className="education-card">
          <h3>{detail.qualification}</h3>
          <div className="edu-details">
          <p>{detail.institute}</p>
          <p>{detail.location}</p>
          <p>{detail.duration}</p>
          <p>{detail.result}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
