import React,{Component} from 'react';//destructurin

class MiComponente extends Component{
    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate','queso','jamon'],
            calorias: 400
        };
        return(
            <React.Fragment>
                <h1>{receta.nombre}</h1>
                <h2>calorias: {receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente,i)=>{
                            console.log(ingrediente)
                            return(
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            )
                        })
                    }
                </ol>
                <hr/>
            </React.Fragment>
            //<div className="mi-componente">
              //  <h1>Hola soy el componente llamado MiComponente</h1>
                //<h2>Esto es una pruba</h2>
                //<hr/>
            //</div>
            
        );
    }
}

export default MiComponente;