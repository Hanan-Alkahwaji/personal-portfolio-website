import React from 'react'
import { cards } from '../../Pages/HomePage';
import { useParams } from 'react-router-dom';
import './Details.css'

export default   function Details() {
    const productId= useParams();
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    const slides = document.querySelectorAll('.card');
    function showSlide() {
        
        Array.from(slides).forEach(slide => { 
          slide.style.display = 'none';
        });
     
        slides[index].style.display = 'block';
     }
     
   

  return (
        
    <section className='Details'>
 
        <h1></h1>
        {
               cards.map((element,index)=>{
                if(element.id==productId.id ){
                    return(
                        <div className="up">
                            <div className="left">
                                <img src={element.img} alt="" />
                            </div>
                            <div className="right">
                                <h1>{element.h}</h1>
                                <h5>{element.date}</h5>
                                <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
                                Lorem ipsum dolor sit amet consectetur. Tristique amet </p>
                                <p>Basic Languages : <span>Html5 ,Css , Javascript </span> </p>
                                <a href="https://github.com/Hanan-Alkahwaji/project-front.git"><button>Github Repo</button></a>

                            </div>
                        </div>
                        
                    )

                }
               
               })
        }
        <div className="down">
            <div className="info">
                <div className="text">
                    <p>Portfolio</p>
                    <h1>The Best <span>Projects</span> </h1>
                </div>
                <div className="arrows">
                    <div className="larrow"><button id='prevBtn'><img src="/personal-portfolio-website/assets/imgs/la.png" alt="" /></button></div>
                    <div className="rarrow"><button id='nextBtn'><img src="/personal-portfolio-website/assets/imgs/ra.png" alt="" /></button></div>
                </div>
            </div>
            <div className="slider">
            <div className="cards">
            {
                cards.map((element,index)=>{

                        if (element.id !=productId.id) {
                            return(
                              
                                    <div className="card"  key={index}>
                                        <img src={element.img} alt="" />
                                         <h2>{element.h}</h2>
                                         <p>{element.p}</p>

                                    </div>

                               
                               

                            )

                            
                        }
                    
                 
                })
               
            }
             </div>

            </div>


        </div>
      
       {()=>showSlide('3')}

    
       
     
        

      
    </section>
  )
}
