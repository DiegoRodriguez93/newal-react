import React, { useContext } from 'react'
import { Fade } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import onLogIn from './../../handler/onLogIn';

import { useDispatch } from 'react-redux';
import { logIn } from './../../redux/actions'; 

import { useHistory } from 'react-router-dom';

export default function IniciarSesion() {

    const { handleSubmit, register, errors } = useForm();
    const dispatch = useDispatch();
    const history = useHistory ();

     const onSubmit = (data, e) => {
        onLogIn(data, e).then(
            (res) => {
                console.log(res);
                dispatch(logIn(res.fname, res.lname, res.token));

                localStorage.setItem('route','mi-cuenta');
                localStorage.setItem('logState',true);
                localStorage.setItem('nav','Mi cuenta');
                localStorage.setItem('first_name',res.fname);
                localStorage.setItem('last_name',res.lname);
                localStorage.setItem('token',res.token);

                history.goBack();
            })
     };

    return (<Fade>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="row">
                        <div className="col-lg-4 sm-0"></div>
                    <div className="col-lg-4 sm-12">
                        <div className="card-titles">
                            <h2>Iniciar sesión</h2>
                            <h3>Gracias por compartir el Ajedrez Latino :)</h3>
                        </div>                        
                    </div>
                    <div className="col-lg-4 sm-0"></div>
                        </div>


                        <form className="row" style={{marginTop:'30px'}} onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-lg-4 sm-0"></div>
                            <div className="col-lg-4 sm-12">
                            <label htmlFor="email" className="grey-label">Correo electrónico:</label>
                            <input
                                name="email"
                                className="grey-input"
                                ref={register({
                                required: "Required",
                                pattern: {
                                    value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                    message: "invalid email address"
                                }
                                })}
                            />
                            {errors.email && errors.email.message}

                            </div>
                            <div className="col-lg-4 sm-0"></div>
                            <div className="col-lg-4 sm-0"></div>
                            <div className="col-lg-4 sm-12">
                                <label htmlFor="password" className="grey-label">Contraseña:</label>
                            <input
                                name="password"
                                type="password"
                                className="grey-input"
                                ref={register({
                                    required: "Required"
                                })}
                            />
                            {errors.password && errors.password.message}
                            </div>
                            <div className="col-lg-4 sm-0"></div>
                            <div className="col-lg-4 sm-0"></div>

                            <div className="col-lg-4 sm-12">
                            <button className="button-big button-form" type="submit">Iniciar sesión</button>
                            <span className="other-links">- Olvidé mi contraseña</span> <br/>
                            <span className="other-links">- Registrarme</span> 
                            </div>
                            <div className="col-lg-4 sm-0"></div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    )
}
