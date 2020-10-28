import React from 'react'

const Hero = () => {
    return (
        <div className="hero-content container vertical-align">
            <div className="row">
                <div className="col-lg-6 sm-12">
                    <br/><br/><br/>
                    <h2 className="hero-title">
                    NUEVO: LA REVOLUCIÓN DEL JOBAVA
                    </h2>
                    <br/>
                    <button className="button button-blue" >Inscribirme al curso</button>
                    <button className="button" style={{marginLeft:"10px",marginTop:"10px"}} >Ver más categorías</button>
                </div>
                <div className="col-lg-6">
                    <img src="/img/hero-video.png" style={{width:'100%'}} alt="hero video"/>
                </div>
            </div>
        </div>
    )
}

export default Hero;