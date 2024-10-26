import React from 'react'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import Education from '../Components/Education/Education'
import Try from '../Components/Try/Try'
import Projects from '../Components/Projects/Projects'
import Contact from '../Components/Contact/Contact'

let cards=[{ img:"/personal-portfolio-website/assets/imgs/project1.png", h:"Educational Platform",p: "Html-Css3-Vanilla javscript",id:"1",date:"12-5-2024"},
  { img:"/personal-portfolio-website/assets/imgs/project2.png", h:"Educational Platform",p: "Html-Css3-Vanilla javscript" ,id:"2",date:"10-4-2024"},
  { img:"/personal-portfolio-website/assets/imgs/project4 (2).png", h:"Educational Platform",p: "Html-Css3-Vanilla javscript",id:"3" ,date:"22-5-2024"},
  { img:"/personal-portfolio-website/assets/imgs/Image.png", h:"Educational Platform",p: "Html-Css3-Vanilla javscript",id:"4",date:"12-6-2024" },
  { img:"/personal-portfolio-website/assets/imgs/Image.png", h:"Educational Platform",p: "Html-Css3-Vanilla javscript",id:"5",date:"12-7-2024" },
  { img:"/personal-portfolio-website/assets/imgs/Image.png", h:"Educational Platform",p: "Html-Css3-Vanilla javscript" ,id:"6",date:"16-8-2024"}
]
export {cards}




export default function HomePage() {
  let skill=[{nn:"HTML",  mm:"90%"} , {nn:"CSS3",  mm:"85%"}, {nn:"JavaScript",  mm:"95%"},{nn:"React",  mm:"90%"}]
  let cards=[{ img:"/personal-portfolio-website/assets/imgs/project1.png", h:"Educational Platform",p: "Html-Css3-Vanilla javscript",id:"1"},
    { img:"/personal-portfolio-website/assets/imgs/project2.png", h:"Educational Platform",p: "Html-Css3-Vanilla javscript" ,id:"2"},
    { img:"/personal-portfolio-website/assets/imgs/project4 (2).png", h:"Educational Platform",p: "Html-Css3-Vanilla javscript",id:"3" },
    { img:"/personal-portfolio-website/assets/imgs/Image.png", h:"Educational Platform",p: "Html-Css3-Vanilla javscript",id:"4" },
    { img:"/personal-portfolio-website/assets/imgs/Image.png", h:"Educational Platform",p: "Html-Css3-Vanilla javscript",id:"5" },
    { img:"/personal-portfolio-website/assets/imgs/Image.png", h:"Educational Platform",p: "Html-Css3-Vanilla javscript" ,id:"6"}
  ]
 
  let contect=[{img:"/personal-portfolio-website/assets/imgs/telephon.png",p1:"Call me",p2:"0960682578"},
    {img:"/personal-portfolio-website/assets/imgs/email.png",p1:"Email me",p2:"hanan.alkahwaji2003.8@gmail.com"},
    {img:"/personal-portfolio-website/assets/imgs/location.png",p1:"Address",p2:"Damascus,syria"}

  ]
  return (
    <>
     <Home />
     <About skill={skill}/>
     <Education/>
     <Try/>
     <Projects cards={cards}/>
     <Contact info={contect} />

     
      
    </>
  )
}
