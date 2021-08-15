import Layout from '../components/layout'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css'

import '@fortawesome/fontawesome-free/css/all.css'; 

 
function MyApp({ Component, pageProps }) { 
  return <Component {...pageProps} />
         
  }
  
  
export default MyApp;
 
 