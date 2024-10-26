import React from 'react'
import './Try.css'
import { Link } from 'react-router-dom'

export default function Try() {

  return (
    <section className='Try'>
        <div className="container">
        <div className='rectangular'>
            <div className="left">
                <h1>Try me out, risk free!</h1>
                <p>If you’re not happy with the design after the first draft,
                I’ll refund your deposit,<span>no questions asked</span> </p>
            </div>
            <div className="right">
              <Link to={"/Contact"}>
              <button >Contact <img src="./../../../public/assets/imgs/Frame (1).png" alt="" /></button>
              
              </Link>
              
            </div>

        </div>

        </div>
        
       


      
    </section>
  )
}
