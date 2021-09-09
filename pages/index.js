import React from 'react'
import Navbar from '../components/navbar'; 
import Jumbotron from '../components/jumbotron'; 
import Higlights from '../components/higlights';  
import Experiencias from '../components/experiencias';  
import Slide from '../components/slide';  
import Portfolio from '../components/portfolio';  
import Skills from '../components/skills';  
import Footer from '../components/footer';  

 
 


export default function home() {
  return(
        <>
        <Navbar/>

        <Jumbotron/>
        <Slide/>
        <Higlights/>
        <Skills/> 
        <Experiencias/>   
        {/* <Portfolio/> */}

        <Footer/> 

        </>
  )
    
}