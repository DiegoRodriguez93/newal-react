import React,{ useState, useContext } from 'react';
import ham from './ham.png';
import hamX from './ham-x.png';
import { NavLink } from 'react-router-dom'
import { LoginContext }  from './../../context/login-contex';

export const Nav = () => {

    const log = useContext(LoginContext);
    console.log(log)


    const [ mobileMenuVisibility, setMobileMenuVisibility ] = useState('none');

    const handleDisplayNone = () => {
        setMobileMenuVisibility('none');
    }

    const isActive = {
        textDecoration:'underline'
      };

    const isActiveInMobile = {
        textDecoration:'line-through'
      };

    return (<>
        <div className="container">
        <div className="nav row" style={{flexWrap:'nowrap'}}>
            <div className="col-lg-2 sm-6">
                <img src="/img/logo.png" className="nav-logo" alt="logo ajedrez latino in white"/>
            </div>
            <div className="col-lg-10 vertical-align horizontal-align ordenador">
            <NavLink exact className="nav-link" activeStyle={isActive} to="/">Inicio</NavLink>
            <NavLink className="nav-link" activeStyle={isActive} to="/cursos">Cursos</NavLink>
            <NavLink className="nav-link" activeStyle={isActive} to="/entrenamientos">Entrenamientos</NavLink>
            <NavLink className="nav-link" activeStyle={isActive} to="/acerca">Acerca</NavLink>
            <NavLink className="nav-link" activeStyle={isActive} to="/contacto">Contacto</NavLink>
            <NavLink className="nav-link logIn" activeStyle={isActive} to={"/"+log.route} > {log.info}</NavLink>
            </div>
            <div className="col-sm-6 mobile">
                        <img src={ham} onClick={()=>{setMobileMenuVisibility('block')}} className="ham-icon" />
            </div>
        </div>
        </div>
                    <div className="container-fluid mobile-menu" style={{display:mobileMenuVisibility}}>
                    <div className="row">
                        <div className="col-9"></div>
                        <div className="col-3">
                            <img src={hamX} onClick={handleDisplayNone} style={{paddingRight:"5px",marginRight:"15px"}} className="ham-icon" />
                        </div>
                        <div className="col-12">
                            <NavLink exact onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/">Inicio</NavLink>
                            <NavLink onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/cursos">Cursos</NavLink>
                            <NavLink onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/entrenamientos">Entrenamientos</NavLink>
                            <NavLink onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/acerca">Acerca</NavLink>
                            <NavLink onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/contacto">Contacto</NavLink>
                        </div>
                    </div>
                </div>
        </>
    )
}
