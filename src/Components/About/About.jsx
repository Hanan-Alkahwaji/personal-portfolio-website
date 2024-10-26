import React from 'react'
import './About.css'

export default function About({skill}) {
  return (
    <section  className='about'>
      <div className="container">
        <div className="left">
          <img src="/personal-portfolio-website/assets/imgs/hcjr.png" alt="" id='skill'/>
        </div>
        <div className="right">
          <div className="up">
          <h1>About Me </h1>
          <p>I am a third year ITE student.Front-end developer, highly experienced in html, css, javascript and responsive design frameworks, I deal with react projects with high quality, and worked on several projects in that field.</p>
          </div>
          <div className="down">
             
             {
              skill.map((element,index)=>{
                return(
                  <div className="skillBar" key={index}>
                  <div className="info">
                    <p>{element.nn}</p>
                    <p className={element.nn}> {element.mm}</p>
                  </div>
                  <div className="bar">
                   <span className={element.nn}></span>
                  </div>
                </div>
                
                )
           

              })
             }
       
           
          </div>
          
        </div>

      </div>
      
    </section>
  )
}
