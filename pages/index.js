import React from 'react'
import Navbar from '../components/navbar'; 
import Jumbotron from '../components/jumbotron'; 
import Higlights from '../components/higlights';  
import Experiencias from '../components/experiencias';  
import Slide from '../components/slide';  
import Portfolio from '../components/portfolio';  
import Skills from '../components/skills';  
import SocialMedia from '../components/social';  

 
 


export default function home() {
  return(
        <>
       
        <div style={{
          background:'white',
          display:'flex',
          justifyContent:'center',
          padding:'10px ',
          paddingBottom:'15px ', 
          flexDirection: 'column',
          alignItems: 'center'
          
          }}>
          Site em Desenvolvimento
        <SocialMedia/>

        </div>

        </>
  )
    
}