import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({name,navitems,but}) {
   

   
    let ul=document.querySelectorAll("nav ul li");
    function darkmode() {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            let icon=document.getElementById("icon");
            let skill=document.getElementById("skill");
            icon.src='/personal-portfolio-website/assets/imgs/Sun_fill.png'
            skill.src='/personal-portfolio-website/assets/imgs/skilldark.png'
 
         
        }
        else{
            let icon=document.getElementById("icon");
            let skill=document.getElementById("skill");
            icon.src="/personal-portfolio-website/assets/imgs/moon.png"
            skill.src="/personal-portfolio-website/assets/imgs/hcjr.png"

        }
       
    }
    function navmenu() {
        let navmenu=document.querySelector(".navmenu")
        navmenu.classList.toggle("show")
        
    }
  return (
    <div className="all">
          
        <nav>
        
        <h1>{name}</h1>
        <ul>
            
        <NavLink className={({ isActive }) => isActive ? "active" : ""  } to={"/"}>
                <li>{navitems[0]}</li>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to={"/About"}>
                <li>{navitems[1]}</li>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "active" : "" } to={"/Education"}>
                <li>{navitems[2]}</li>
            </NavLink>
            <NavLink className={({ isActive}) => isActive ? "active" : ""} to={"/Projects"}>
                <li>{navitems[3]}</li>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "active" : "" } to={"/Contact"}>
                <li>{navitems[4]}</li>
            </NavLink>
           

        </ul>
        <button onClick={darkmode}><img src="/personal-portfolio-website/assets/imgs/moon.png" alt="" id='icon' /></button>
        <button className='menu' onClick={navmenu}><img src="/personal-portfolio-website/assets/imgs/Menu_Alt_01.png" alt="" /></button>

        
       
       
      
    </nav>

    <section className='navmenu'>
        <div className="up">
        <h1>{name}</h1>
        <button onClick={darkmode}><img src="/personal-portfolio-website/assets/imgs/moon.png" alt="" id='icon' /></button>

        </div>
    
        <ul>
            
        <NavLink className={({ isActive }) => isActive ? "active" : ""  } to={"/"}>
                <li>{navitems[0]}</li>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to={"/About"}>
                <li>{navitems[1]}</li>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "active" : "" } to={"/Education"}>
                <li>{navitems[2]}</li>
            </NavLink>
            <NavLink className={({ isActive}) => isActive ? "active" : ""} to={"/Projects"}>
                <li>{navitems[3]}</li>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "active" : "" } to={"/Contact"}>
                <li>{navitems[4]}</li>
            </NavLink>
           

        </ul>
       






    </section>

    </div>
    
  )
}
