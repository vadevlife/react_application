import React from 'react'
 
  const isocial=[
    {
        name:'github',
        url:'https://github.com/vadevlife',
        icon:'fab fa-github text-primary'
        
    },
    {
        name:'Linkedin',
        url:'https://www.linkedin.com/in/vinicius-araujo-1418649b/',
        icon:'fab fa-linkedin-in text-primary'

    },
    {
        name:'Facebook',
        url:'https://www.facebook.com/Type-As-108513678138188',
        icon:'fab fa-facebook-f text-primary'


    }
  ] 

  class SocialMedia extends React.Component {

     
    render() {
        return (
            <React.Fragment>
                <div className="social_media d-flex  ">
                    {isocial.map((isocial,index) => ( 
                                    
                        <React.Fragment key={index}>
                            <a target="_blank" color="transparent" href={isocial.url}><i className={isocial.icon}></i></a> 
                        </React.Fragment>
                    
                    ))}   
                </div>

            </React.Fragment>

        )
    }
  }
  export default SocialMedia