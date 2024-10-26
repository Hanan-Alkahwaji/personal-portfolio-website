
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Nav/Navbar/Navbar'
import HomePage from './Pages/HomePage'
import EducationPage from './Pages/EducationPage'
import AboutPage from './Pages/AboutPage'
import ProjectsPage from './Pages/ProjectsPage'
import ContactPage from './Pages/ContactPage'
import Footer from './Components/Footer/Footer'
import Try from './Components/Try/Try'
import Education from './Components/Education/Education'
import DetailsPage from './Pages/DetailsPage'




function App() {
  


  return (
    <>
   <Navbar name={"Hanan"} navitems={["Home","About me","Education","Projects","Contact"]} but={"./../public/assets/imgs/moon.png"}/>
   <Routes>
    <Route path='/'   element={<HomePage/>} />
    <Route path='/About' element={<AboutPage/>}/>
    <Route path='/Education' element={<EducationPage/>} />
    <Route path='/Projects' element={<ProjectsPage/>}/>
    <Route path='/Contact' element={<ContactPage/>}/>
    <Route path='/details/:id' element={<DetailsPage/>} />
   </Routes>
   <Footer/>


 

 
    
    </>
    
  )
}

export default App
