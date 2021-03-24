import { LOG_IN, LOG_OUT } from "./../actionTypes";

const initialState = {
  route :       localStorage.getItem('route') === null ? "iniciar-sesion" : localStorage.getItem('route'),
  logState :    localStorage.getItem('logState') === null ? false : localStorage.getItem('logState'),
  nav :         localStorage.getItem('nav') === null ? 'Iniciar sesión' : localStorage.getItem('nav'),
  first_name :  localStorage.getItem('first_name') === null ? '' : localStorage.getItem('first_name'),
  last_name :   localStorage.getItem('last_name') === null ? '' : localStorage.getItem('last_name'),
  token:        localStorage.getItem('token') === null ? '' : localStorage.getItem('token')
};

export const logInReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_IN: {
      return {
        route: payload.route,
        logState: payload.logState,
        nav: payload.nav,
        first_name: payload.first_name,
        last_name: payload.last_name,
        token: payload.token
      };
    }
    case LOG_OUT: {
      localStorage.removeItem('route');
      localStorage.removeItem('logState');
      localStorage.removeItem('nav');
      localStorage.removeItem('first_name');
      localStorage.removeItem('last_name');
      localStorage.removeItem('token');
      return {
        route: payload.route,
        logState: payload.logState,
        nav: payload.nav,
        first_name: payload.first_name,
        last_name: payload.last_name,
        token: payload.token
      };
    }
    default:
      return state;
  }
};
