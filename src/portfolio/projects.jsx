import React from "react";
import project from "./Data/projects.json";
const projects = () => {
  return (
    <>
    <h1 className="projects">PROJECTS</h1>
      <div className="container" id="projects">
      
      
        <div className="row">
          {project.map((data) => (
            <>
              <div
                key={data.id}
                className="column"
              >
                <div className="c_img"
                     data-aos="zoom-in-up"
                      data-aos-duration="2500"
                
                >
                  <img
                    src={`/assets/${data.imageSrc}`}
                    className="img-card"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description} </p>
                    <a href={data.demo} className=" btn">
                      Demo
                    </a>
                    <a href={data.source} className="btn">
                      code
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default projects;
