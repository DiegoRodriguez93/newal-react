import React from "react";

export const login = {
  notLogged: {
    name: "",
    info: "Iniciar sesión",
    token: "",
    route: "iniciar-sesion",
    setLogIn: () => {}
  },
  logged: {
    name: localStorage.getItem('nameLogged'),
    info: "Mi cuenta",
    token: localStorage.getItem('tokenLogged'),
    route: "mi-cuenta"

  },
};

export const LoginContext = React.createContext(login.notLogged);
