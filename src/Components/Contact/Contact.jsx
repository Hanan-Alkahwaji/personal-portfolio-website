import React from 'react'
import './Contact.css'

export default function Contact({info}) {
  return (
    <section className='contact'>
      <div className="up">
        <h4>Contact</h4>
        <h1>Let’s Discuss Your <span> Project</span></h1>
      </div>
      <div className="down">
        <div className="container">
          <div className="left">
            {
              info.map((element,index)=>{
                return(
                  <div className="card" key={index}>
                  <img src={element.img} alt="" />
                  <div className="info">
                    <p>{element.p1}</p>
                    <p>{element.p2}</p>
                  </div>
                </div>

                )
               
              })
            }

          </div>
          <div className="right">
            <form action="">
              <input type="text" placeholder='Full name' className='Fullname'/>
              <input type="text" placeholder='Your email' className='Youremail'/>
              <input type="text" placeholder='Phone number' className='Phonenumber'/>
              <input type="text" placeholder='Message'  className='Message'/>
              <input type="submit" value={'Send Message'} className='send'/>
            </form>
          </div>
        </div>
      </div>
      
    </section>
  )
}
