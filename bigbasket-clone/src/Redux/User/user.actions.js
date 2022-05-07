import {
    USER_GET_FAILURE,
    USER_GET_REQUEST,
    USER_GET_SUCCESS,
    USER_UPDATE_FAILURE,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
  } from "../User/user.actionTypes";
  
  export const userGetRequest = () => ({
    type: USER_GET_REQUEST,
  });
  export const userGetSuccess = (token) => ({
    type: USER_GET_SUCCESS,
    payload: token,
  });
  export const userGetFailure = (error) => ({
    type: USER_GET_FAILURE,
    payload: error,
  });
  
  export const userUpdateRequest = () => ({
    type: USER_UPDATE_REQUEST,
  });
  export const userUpdateSuccess = (data) => ({
    type: USER_UPDATE_SUCCESS,
    payload: data,
  });
  export const userUpdateFailure = (error) => ({
    type: USER_UPDATE_FAILURE,
    payload: error,
  });