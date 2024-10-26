import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <section className='footer'>
        <p>@ 2024. All Rights Reserved</p>
        <p>Develpoment by Lorina</p>
        <div className="icons">
          <Link to={"https://www.facebook.com/hanan.alkahwaji.33?mibextid=kFxxJD"}><img src="./../../../public/assets/imgs/facebook.png" alt="" /></Link>
            <Link to={"https://www.linkedin.com/in/hanan-alkahwaji-428a6a256/"}><img src="./../../../public/assets/imgs/linkedin.png" alt="" /></Link>
            <Link to={"https://www.instagram.com/hanan.alkahwaji?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D"}><img src="./../../../public/assets/imgs/instagram.png" alt="" /></Link>
           

        </div>

      
    </section>
  )
}
