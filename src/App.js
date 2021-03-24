import React, { useState } from 'react';
import './styles/main.scss';
import { Nav } from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MiCuenta from './components/MiCuenta';

import Index from './pages/Index';
import Contacto from './pages/Contacto';
import IniciarSesion from './pages/IniciarSesion';
import Cursos from './pages/Cursos';
import Acerca from './pages/Acerca';
import Curso from './pages/Curso';


function App() {
  return (
      <div className="App container-fluid">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/cursos" component={Cursos} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/iniciar-sesion" component={IniciarSesion} />
          <Route exact path="/mi-cuenta" component={MiCuenta} />
          <Route exact path="/curso/:curso/:capitulo" component={Curso} />
        </Switch>
      </Router>
      </div>
  );
}

export default App;
