import React from 'react'
import About from '../Components/About/About'

export default function AboutPage() {
let skill=[{nn:"HTML",  mm:"90%"} , {nn:"CSS3",  mm:"85%"}, {nn:"JavaScript",  mm:"95%"},{nn:"React",  mm:"90%"}]

  return (
    <div>
      <About skill={skill}/>
    </div>
  )
}
