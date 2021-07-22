import React, {useState} from 'react'
class NameForm extends React.Component {

    
    constructor(props) {
      super(props);
          this.state = {
            nome: '', 
            email:'',
            mensagem:''
            
          };  
          
          this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) { 
      const target = event.target;   
      const name = target.name;
      const value = target.value; 
 
      
      this.setState({
        [name]: value
      });  
     
    }
  


      render() {
            return (

              <form onSubmit={this.handleSubmit}>
              
                <label>
                  Nome:
                  <input name="nome" type="text" value={this.state.nome} onChange={this.handleChange}/>
                </label>
                <label>
                  E-mail:
                  <input name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                </label> 
                <label>
                  Escreva algo:
                  <textarea name="mensagem" value={this.state.value} onChange={this.handleChange} />
                </label>
              
                <div>
                  <input type="submit" value="Enviar" />
                </div>

              </form> 

            );
        }
  }

export default NameForm


