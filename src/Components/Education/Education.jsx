import React from 'react'
import './Education.css'

export default function Education() {
  function totop() {
    window.scrollTo(0,0);
    
  }
  return (
    <section className='education'>
    
      <div className="titel">
      <p>Education and Experience</p>
      <h1>Education & Experience</h1>
      </div>
      <div className="shapes1">
      <div className="circle1"></div>
      <div className="square"></div>
      <div className="circle2"></div>
    </div>
      <div className="container">
        <div className="card">
          <div className="info">
             <h3>Experince Designer</h3>
             <p>Design a complete visual identity (logo, brochures, cards, etc....) and edit photos </p>
          </div>
          <div className="info">
             <h3>Frontend Developer</h3>
             <p>Dealing with website design from Figma to transform them into real interactive websites using html css javascript </p>
          </div>
        </div>
        <div className="card">
        <div className="info">
             <h3>Experince Designer</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>
          </div>
          <div className="info">
             <h3>Frontend Developer</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>
          </div>
        </div>
      </div>
      <div className="down">
      <div className="shapes">
      <div className="circle1"></div>
      <div className="square"></div>
      <div className="circle2"></div>
    </div>
    <button onClick={totop}><img src="/personal-portfolio-website/assets/imgs/Arrow_Up_MD.png" alt="" /></button>

      </div>
    
     
    
      
    </section>
  )
}
