import { getValue, setValue } from "../../Utils/localStorage";
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
} from "./auth.actionTypes";

const initialState = {
  isUserLoggedIn: getValue("usertoken") ? true : false,
  userToken: getValue("usertoken"),
  isLoading: false,
  error: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case USER_LOGIN_SUCCESS: {
      setValue("usertoken", payload);
      return {
        ...state,
        isUserLoggedIn: true,
        userToken: payload,
        isLoading: false,
        error: false,
      };
    }
    case USER_LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case USER_LOGOUT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case USER_LOGOUT_SUCCESS: {
      setValue("usertoken", "");
      setValue("user", "");
      return {
        ...state,
        isUserLoggedIn: false,
        userToken: "",
        isLoading: false,
        error: false,
      };
    }
    case USER_LOGOUT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }
    default:
      return state;
  }
};
