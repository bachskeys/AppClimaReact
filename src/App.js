import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from "./componentes/error";
import Clima from "./componentes/clima";
class App extends Component {
    state={
      error:'',
      consulta:{},
      resultado:{}
    }
   componentDidMount(){
    this.setState({error:false})
   }
   componentDidUpdate(prevProps,prevState){
     if(prevState.consulta != this.state.consulta){
      this.consultarApi();
     }   
   }

  datosConsulta = respuesta => {
      if(respuesta.ciudad ==='' || respuesta.pais === '')
      {
        this.setState({error:true})
      }else{
          this.setState(
            {
              consulta:respuesta,
              error:false
            }
          )
    }
  }

  consultarApi = () => {
    const {ciudad,pais} = this.state.consulta;
    if(!ciudad || !pais) return null
    const appId = '32e89340cfc7e0260cfdc9ab6e64718f';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
      fetch(url)
      .then((response)=>response.json())
      .then((data)=>{this.setState({resultado:data})})
      .catch(e=>console.log(e)); 
  }



  render() {
    const error = this.state.error;
    const {cod} = this.state.resultado
    let resultado;
    if(error){
      resultado = <Error mensaje='Ambos campos son obligatorios'/>

    }else if(cod == 404){
      resultado = <Error mensaje='Ciudad No Encontrada '/>
    }
    else{
      resultado = <Clima resultado={this.state.resultado}></Clima>
    }


    return (
      <div className="App">
        <Header titulo="Clima React"></Header>
          <Formulario 
          datosConsulta={this.datosConsulta}
          ></Formulario>
          {resultado}
      </div>
    );
  }
}

export default App;
