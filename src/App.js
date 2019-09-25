import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component{

  state = {
    termino : '',
    videos : [],
    imagenes : [],
    pagina : 0
  }

  scrollTop = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=13734537-60e6e176a424168091bfedf22&q=${termino}&per_page=25&page=${pagina}`;
    //const url = `https://pixabay.com/api/videos/?key=13734537-60e6e176a424168091bfedf22&q=${termino}&per_page=25`;
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.hits}));
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 1
    }, () => {
      this.consultarApi();
    })
  }

  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if(pagina === 1) return null;
    pagina -= 1;
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scrollTop();
    })
  }

  paginaSiguiente = () => {
    let pagina = this.state.pagina + 1
    this.setState({
      pagina 
    }, () => {
      this.consultarApi();
      this.scrollTop();
    })
  }

  render(){
    return (
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>
          <Buscador
            datosBusqueda = {this.datosBusqueda}
          />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes = {this.state.imagenes}
            paginaAnterior = {this.paginaAnterior}
            paginaSiguiente = {this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}

export default App;
