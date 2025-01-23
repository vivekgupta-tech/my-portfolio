import React from "react";
import experience from "./Data/experience.json";

function Experience() {
  return (
    <div className="ex" id="experience">
      
      <h1 className="exp">Experience</h1>
      {experience.map((data) => (
        <div key={data.id} className="ex-items my-5"
             data-aos="zoom-in"
     data-aos-duration="1500"
        
        
        >
          <div className="left">
            <img src={`./assets/${data.imageSrc}`} alt="" />
          </div>
          <div className="right">
            <h2 className="title">{data.role}</h2>
            <h4 style={{ marginBottom: "3px" }}>
              <span style={{ color: "lightgreen" }}>
                {data.startDate} {data.endDate}{" "}
              </span>
              <span style={{ color: "yellow" }}>{data.location}</span>
            </h4>
            <h5 style={{ color: "greenyellow", marginTop: "8px" }}>
              {data.experience[0]}
            </h5>
            <h5 style={{ color: "greenyellow" }}>{data.experience[1]}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
