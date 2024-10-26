import React from 'react'
import Contact from '../Components/Contact/Contact'

export default function ContactPage() {
  let contect=[{img:"./../../public/assets/imgs/telephon.png",p1:"Call me",p2:"0960682578"},
    {img:"./../../public/assets/imgs/email.png",p1:"Email me",p2:"hanan.alkahwaji2003.8@gmail.com"},
    {img:"./../../public/assets/imgs/location.png",p1:"Address",p2:"Damascus,syria"}

  ]
  return (
    <div>
      <Contact info={contect} />
    </div>
  )
}
