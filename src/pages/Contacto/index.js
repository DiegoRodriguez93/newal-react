import React from 'react'
import { Fade } from "react-awesome-reveal";

export default function Contacto() {
    return (<Fade>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-titles">
                            <h3>ENVIANOS UN MENSAJE</h3>
                            <h1>Pasión por el ajedrez</h1>
                        </div>
                        <div className="row" style={{marginTop:'30px'}}>
                            <div className="col-lg-6 sm-12">
                                <input type="text" className="input-form" placeholder="Nombre completo" />
                            </div>
                            <div className="col-lg-6 sm-12">
                                <input type="email" className="input-form" placeholder="Correo electronico" />
                            </div>
                            <div className="col-12">
                                <textarea name="" id="" className="input-form" rows="3" placeholder="Mensaje"></textarea>
                            </div>
                            <div className="col-12" style={{ textAlign:'center', marginTop:'30px' }}>
                                <button className="button-big button-form">Enviar Mensaje</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    )
}
