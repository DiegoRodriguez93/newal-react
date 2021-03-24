import { LOG_IN, LOG_OUT } from "./actionTypes";

export const logIn = (fname, lname, token) => ({
  type: LOG_IN,
  payload: {
    route: "mi-cuenta",
    logState : true,
    nav : 'Mi cuenta',
    first_name : fname,
    last_name : lname,
    token: token
  }
});

export const logOut = () => ({
  type: LOG_OUT,
   payload: {
    route : "iniciar-sesion",
    logState : false,
    nav : 'Iniciar sesión',
    first_name : '',
    last_name : '',
    token: ''
  } 
});

