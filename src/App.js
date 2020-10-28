import React, { useState } from 'react';
import './styles/main.scss';
import { Nav } from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './pages/Index';
import Contacto from './pages/Contacto';
import IniciarSesion from './pages/IniciarSesion';
import Cursos from './pages/Cursos';
import Acerca from './pages/Acerca';
import Curso from './pages/Curso';

import { LoginContext, login } from "./context/login-contex.js";
import useLogIn from './hooks/useLogIn';

function App() {

  const [log, setLogin] = useState(login.notLogged); 
/*   const value = { log, setLogin }; */

/*   const log = useLogIn();
  console.log(log) */

  return (
    <LoginContext.Provider value={log, setLogin}>
      <div className="App container-fluid">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/cursos" component={Cursos} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/iniciar-sesion" component={IniciarSesion} />
{/*           <Route exact path="/mi-cuenta" component={MiCuenta} /> */}
          <Route exact path="/curso/:curso/:capitulo" component={Curso} />
        </Switch>
      </Router>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
