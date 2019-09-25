import React, { Component } from 'react';
import Imagen from './Imagen';
import Video from './Video'; 
import Paginacion from './Paginacion';

class Resultado extends Component {

    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;

        if(imagenes.length === 0) return null;

        return(
            <React.Fragment>
                <div className="col-md-12 pd-5 row">
                     {imagenes.map(imagen => (
                         <Imagen 
                            key = {imagen.id}
                            imagen = {imagen}
                         />
                     ))}
                </div>
                <Paginacion 
                    paginaAnterior = {this.props.paginaAnterior}
                    paginaSiguiente = {this.props.paginaSiguiente}
                />
            </React.Fragment>
        )
    }

    render() { 
        return (
            <React.Fragment>
                {this.mostrarImagenes()}
            </React.Fragment>
        );
    }
}
 
export default Resultado;