import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function Projects({cards}) {
  function open(src) {
    console.log(src)
   
    
    
    
    
  }
  return (
    <section className='project'>
      <div className="up">
        <div className="info">
        <h4>Portfolio</h4>
      <h1>My Creative Works
      Latest <span>Projects</span> </h1>

        </div>
        <Link to={"https://github.com/Hanan-Alkahwaji"}>
        <button>View Github </button>
        </Link>
      
      </div>
      <div className="down">
        {
          cards.map((element,index)=>{
            return(
            
              <div className="card" key={index}>
              <div className="img">
              <Link to={`/details/${element.id}`}>
              <img src={element.img} alt="" />
         
         </Link>
  
                 
                  
              </div>
              <div className="info">
              <Link to={`/details/${element.id}`}>
                <div className="des">
                
                  <h2>{element.h}</h2>
                  <p>{element.p}</p>

                 
                </div>
                </Link>
                
                <div className="icon">
                
                  <img src="/personal-portfolio-website/assets/imgs/Iconarrow.png" alt="" />
               

          
                </div>
              </div>
            </div>
              

            )
          })
        }

        
        
      </div>
     

      
    </section>
  )
}
