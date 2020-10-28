import React from 'react';
import useFetch from './../../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function NuestrosCursos() {

    const [data, loading] = useFetch('https://alamazon.ml/cursos');

    return (
        <div className="container" style={{ marginTop: '30px' }}>
                {loading ? ("Cargando....") : (<div className="row" >
                    {data.map(({ id, name, price, profile_url, url }) =>
                    <Link to={`/curso/${url}/1`} className="col-lg-3 xs-12 nc-card" key={id}>
                            <img src={profile_url} alt={url} style={{width:'100%'}} />
                            <span className="nc-card-name">{name}</span><br/>
                            <span className="nc-card-price">U$D {price}</span>
                    </Link>    
                        )}

                </div>)}
        </div>)

}