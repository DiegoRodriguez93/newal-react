import React, { useContext } from 'react'
import Fade from 'react-reveal/Fade';
import { LoginContext, login } from "./../../context/login-contex.js";
import useLogIn from './../../hooks/useLogIn';

export default function IniciarSesion() {

     const { info, setLogIn } = useContext(LoginContext);
/*      const { log, setLogIn } = useLogIn(LoginContext); */

     const [refresh, setRefresh] = React.useState(false);

     console.log('asdasd')

    const logInHandler = () => {
        console.log(refresh)
        setLogIn(login.logged)
        setRefresh(true);
      };


    return (<Fade>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-titles">
                            <h3>Iniciar sesión</h3>
                            <h1>Pasión por el ajedrez</h1>
                        </div>
                        <div className="row" style={{marginTop:'30px'}}>
                            <div className="col-lg-6 sm-12">
                                <input type="email" className="input-form" placeholder="Correo electronico" />
                            </div>
                            <div className="col-12">
                                <input type="password" className="input-form" placeholder="Contraseña" />
                                {info}
                            </div>
                            <div className="col-12" style={{ textAlign:'center', marginTop:'30px' }}>
                                <button onClick={()=>logInHandler()} className="button-big button-form">Iniciar Sesión</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    )
}
