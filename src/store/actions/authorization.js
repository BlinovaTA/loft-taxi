export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = "AUTHENTICATE";
export const REGISTRATION = "REGISTRATION";

export const logInSuccess = (token) => ({
  type: LOG_IN_SUCCESS,
  payload: { token }
});

export const logInFailure = (error) => ({
  type: LOG_IN_FAILURE,
  payload: { error }
});

export const logOut = () => ({ type: LOG_OUT });

export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});

export const registration = (email, password, name) => ({
  type: REGISTRATION,
  payload: { email, password, name },
});
