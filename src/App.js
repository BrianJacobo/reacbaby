import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importar componente
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';

function habla(nombre,edad){
  var presentacion = 
    (<div>
      <h2>Hola, soy {nombre}</h2>
      <h3>maik, tengo {edad} años</h3>
    </div>)
  return presentacion
}
function App() {
  var nombre = 'Brian Jacobo' 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sa' gente csmr xD
        </p>
        {habla(nombre,21)}
        <section className="componentes">
        <MiComponente />
        <Peliculas />
      </section>
      </header>
      
    </div>
  );
}

export default App;
