import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class Formulario extends Component {

//creaer los Refs
   ciudadRef = React.createRef();
   paisRef = React.createRef();
buscarClima = (e) =>{
 e.preventDefault();
  //leer los refs
 const respuesta = {
     ciudad:this.ciudadRef.current.value,
     pais:this.paisRef.current.value
 }
console.log('hey')
  //enviar por props
        this.props.datosConsulta(respuesta)
  //opcional resetear el form
}

  render() {
    return (
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <form onSubmit={this.buscarClima}>
                <div className="input-field col s12 m8 l4 offset-m2">
                    <input id='ciudad' ref={this.ciudadRef} type='text'></input>
                    <label htmlFor='ciudad'>Ciudad:</label>

                </div>
                <div className="input-field col s12 m8 l4 offset-m2">
                    <select ref={this.paisRef} >
                        <option value="" default>Elige un pais</option>
                        <option value="AR" >Argentina</option>
                        <option value="CR" >Costa Rica</option>
                        <option value="ES" >España</option>
                        <option value="US" >Estados Unidos</option>
                        <option value="MX" >Mexico</option>
                        <option value="PE" >Peru</option>
                    </select>
                    <label htmlFor='pais'>Pais:</label>

                </div>
                <div className='input-field col s12 m8 l4 offset-2 buscador'>
                <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="Buscar..."></input>
                </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


Formulario.propTypes = {
  datosConsulta: PropTypes.func.isRequired
}