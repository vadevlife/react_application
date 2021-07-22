 
  import '@fortawesome/fontawesome-free/css/all.css'; 
  import 'bootstrap/dist/css/bootstrap.css'; 
  
  
  import Header from '../components/header';
  import Parallax from '../components/parallax';
  import Skills from '../components/skills'; 
  import Fullbanner from '../components/fullbanner';
  import Highligts from '../components/highligts';
  import Benefits from '../components/benefits';
  import Portfolio from '../components/portfolio';
  import Download from '../components/download';
  import Contact from '../components/contact';
  import Footer from '../components/footer';
 
  function Home(){
    return   <div>
      
     
      {/* header */}
      <Header></Header>
      
      {/* banner_top */}
      <Fullbanner></Fullbanner>         
   
      {/* Highligts */}
      <Highligts></Highligts>

      {/* vantagens */}
      <Benefits></Benefits>

      {/* banner_parallax */}
      <Parallax></Parallax>
     
      {/* Skills */}
      <Skills></Skills>
        
      {/* work */}
      <Portfolio></Portfolio>

      {/* Contact */}
      {/* <Contact></Contact> */}

      {/* Download */}
      <Download></Download>

      {/* footer _ Rodape */}
      <Footer></Footer>
    
 </div>
  }

export default Home