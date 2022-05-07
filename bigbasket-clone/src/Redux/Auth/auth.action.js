import {
    USER_LOGIN_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_FAILURE,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
  } from "./auth.actionTypes";
  
  export const loginRequest = () => ({
    type: USER_LOGIN_REQUEST,
  });
  export const loginSuccess = (token) => ({
    type: USER_LOGIN_SUCCESS,
    payload: token,
  });
  export const loginFailure = (error) => ({
    type: USER_LOGIN_FAILURE,
    payload: error,
  });
  
  export const logoutRequest = () => ({
    type: USER_LOGOUT_REQUEST,
  });
  export const logoutSuccess = () => ({
    type: USER_LOGOUT_SUCCESS,
  });
  export const logoutFailure = (error) => ({
    type: USER_LOGOUT_FAILURE,
    payload: error,
  });