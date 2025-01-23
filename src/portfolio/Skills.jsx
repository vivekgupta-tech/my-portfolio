import React from 'react'
import skills from './Data/skills.json';

const Skills = () => {
  return (
  <>
  <h1 className='skills_title' id='skills'>SKILLS</h1>
   <div className=" container skills">
    <div className="items">
      {skills.map((data) => (
        <>
        <div className="item" key={data.id}
             data-aos="flip-left"
             data-aos-duration="2500">
          <img src={`/assets/${data.imageSrc}`} alt="" />
          <h3>{data.title}</h3>
        </div>
        </>
      ))}
    </div>
   </div>
  </>

    
  )
}

export default Skills