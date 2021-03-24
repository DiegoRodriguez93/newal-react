import React from 'react';
import Hero from './../../components/Hero';
import { Fade } from "react-awesome-reveal";

import NuestrosCursos from './../../components/NuestrosCursos';

function Index() {
    return (
        <Fade>
            <div className="container">
                <Hero/>
                <div className="subtitle-container">    
                    <h2 className="subtitle">NUESTROS CURSOS : </h2>
                    <NuestrosCursos/>
                </div>
            </div>
        </Fade>
    )
}

export default Index
