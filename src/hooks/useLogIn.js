import React from 'react';
import { LoginContext, login } from "./../context/login-contex.js";

export default function useLogIn(LoginContext) {

    const [log, setLog] = React.useState(login.notLogged);

    const setLogIn = React.useCallback((l) => {
        setLog(l);
    }, [])
  
    return{
        log,
        setLogIn
  }
}
