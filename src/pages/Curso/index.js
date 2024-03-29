import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from './../../hooks/useFetch';
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'
import PGN from './../../components/PGN'

export default function Curso() {

    let { curso, capitulo } = useParams();
    console.log(capitulo)
    const [data, loading] = useFetch(`https://alamazon.ml/curso?curso=${curso}&capitulo=${capitulo}`);

    /*   const [sources, setSources] = React.useState() */

    const addSources = () => {
        if (!loading) {
            let { video_data } = data;
            let sourcess = [];
            const BASE_URL = 'https://alamazon.ml/';

            video_data.map(({ url, resolution }) => {

                sourcess.push({ src: BASE_URL + url, type: 'video/mp4', size: resolution })

            });

            const sources = {
                type: 'video',
                sources: sourcess
            }

            return sources
        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-12" style={{ color: "white" }}>

                    {loading ? ("Cargando....") : (<><div className="row" >
                        <div className="col-12 title-container">
                            <h1 className="title">{data.curso[0].name}</h1>
                        </div>
                    </div>
                        <div className="row curso-card" >
                            <div className="col-lg-9 sm-12 mt-30">
                                <div className="row">
                                    <div className="col-12">
                                        <Plyr source={addSources()} />
                                    </div>
                                </div>
                                <h2 className="name">{data.capitulo_actual.name}</h2>
                                <div className="row">
                                    <div className="col-1">
                                        <img src="/img/profile-icon.png" className="profile-icon" alt="icon profile" />
                                    </div>
                                    <div className="col-11 vertical-align" style={{ paddingLeft: "2px" }}>
                                        <h3 className="profesor-name">{data.capitulo_actual.profesor}</h3>
                                    </div>
                                </div>
                                <p className="descripcion">{data.capitulo_actual.descripcion}</p>
                                <PGN />
                            </div>
                            <div className="col-lg-3 sm-12 mt-30 capitulos">
                                <Link to="/comprar" className="button-big button-pink">Comprar Curso</Link>

                                <hr className="hr" />
                                <h2>Capítulos:</h2>
                                <hr className="hr" />
                                <ul>
                                    {
                                        data.capitulos.map(({ number, name, profesor }) =>
                                            <li key={number}>
                                                <h4 >{name}</h4>
                                                <h5>{profesor}</h5>
                                                <hr className="hr" />
                                            </li>
                                        )}
                                </ul>
                            </div>
                        </div></>)}



                </div>
            </div>
        </div>
    )
}
