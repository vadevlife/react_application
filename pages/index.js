import React from 'react'
import Navbar from '../components/navbar'; 
import Jumbotron from '../components/jumbotron'; 
import Higlights from '../components/higlights';  
import Experiencias from '../components/experiencias';  
import Slide from '../components/slide';  
import Portfolio from '../components/portfolio';  
import Skills from '../components/skills';  
import SocialMedia from '../components/social';  
import Footer from '../components/footer';  

 
 
const style = { 
  background:'#f5f5f5',
}
  
 

export default function home() {
  return(
        <>
        <Navbar/>
        <Jumbotron/>
        {/* <Slide/> */}
        {/* <Slide/>  */}
        <div style={style}>
          <Higlights/> 
          <Experiencias/>
          <Portfolio/>
          <Skills/>
          <Footer/>
        </div>

        </>
  )
    
}