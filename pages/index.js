import React from 'react'
import Navbar from '../components/navbar'; 
import Jumbotron from '../components/jumbotron'; 
import Higlights from '../components/higlights';  
import Skills from '../components/skills';  

 
 


const cardContent=[{
  nome:'Prodesp',
  cargo:'Desenvolvedor Front-End',
  desc:'Criação, prototipação e desenvolvimento de componentes responsivos, dia-a-dia com ferramentas client-side.',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript', 
  class:'col-xs-12 col-sm-6 col-md-4 col-lg-3 bg-primary',
  badge:'purple rounded-pill',
  color:'warning'
},
{
  nome:'Fastcommerce',
  cargo:'E-commerce Dev. Front-End ',
  desc:'Criação e desenvolvimento de componentes responsivos com ferramentas client-side',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'col-xs-12 col-sm-6 col-md-4 col-lg-3',
  badge:'rounded-pill',
  color:'primary'
},
{
  nome:'RioSlum Studio',
  cargo:'E-commerce Dev. Front-End ',
  desc:'Criação e desenvolvimento de componentes responsivos com ferramentas client-side',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'col-xs-12 col-sm-6 col-md-4 col-lg-3',
  badge:'purple rounded-pill',
  color:'purple primary'
},
{
  nome:'Home Brasil',
  cargo:'Desenvolvedor Front-End',
  desc:'Implementação de Sites responsivos e recursos de interação Front-End com JavaScript.',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'col-xs-12 col-sm-6 col-md-4 col-lg-3',
  badge:'warning rounded-pill',
  color:'warning'
},
{
  nome:'HelloPay',
  cargo:'Desenvolvedor Front-End',
  desc:'Implementação de Sites responsivos e recursos de interação Front-End com JavaScript.',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'col-xs-12 col-sm-6 col-md-4 col-lg-3',
  badge:'pink rounded-pill',
  color:'pink'
},
{
  nome:'Colonial Village ||',
  cargo:'Desenvolvedor Front-End',
  desc:'Implementação de Sites responsivos e recursos de interação Front-End com JavaScript.',
  periodo:'2019  / 2020  - Full-Time',
  skills:'Javascript',
  class:'col-xs-12 col-sm-6 col-md-4 col-lg-3',
  badge:'success rounded-pill',
  color:'success'
}


]

export default function home() {
  return(
        <>
        <Navbar/>
        <Jumbotron/>
        {/* <Fullbanner/> */}
        <Higlights/>



          
        <Skills/>

        {/* <Footer/>  */}

        </>
  )
    
}