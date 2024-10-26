import React from 'react'
import Projects from '../Components/Projects/Projects'

export default function ProjectsPage() {
  let cards=[{ img:"./../../public/assets/imgs/project1.png", h:"Educational Platform",p: "Html-Css3-Vanilla javscript",id:"1"},
    { img:"./../../public/assets/imgs/project2.png", h:"Educational Platform",p: "Html-Css3-Vanilla javscript" ,id:"2"},
    { img:"./../../public/assets/imgs/project4 (2).png", h:"Educational Platform",p: "Html-Css3-Vanilla javscript",id:"3" },
    { img:"./../../public/assets/imgs/Image.png", h:"Educational Platform",p: "Html-Css3-Vanilla javscript",id:"4" },
    { img:"./../../public/assets/imgs/Image.png", h:"Educational Platform",p: "Html-Css3-Vanilla javscript",id:"5" },
    { img:"./../../public/assets/imgs/Image.png", h:"Educational Platform",p: "Html-Css3-Vanilla javscript" ,id:"6"}
  ]
 

  return (
    <div>
         <Projects cards={cards}/>
    </div>
  )
}
