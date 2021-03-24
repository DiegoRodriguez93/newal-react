import React from 'react';
import { logOut } from './../../redux/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const MiCuenta = () => {
    
    const history = useHistory ();
    const dispatch = useDispatch();

    return (
        <div>
            <span style={{color:"white"}} onClick={()=> dispatch(logOut(history.goBack()))}>Cerrar sesión</span>
        </div>
    );
}

export default MiCuenta;
