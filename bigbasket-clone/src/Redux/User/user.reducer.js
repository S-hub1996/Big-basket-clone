import { getValue, setValue } from "../../Utils/localStorage";
import {
  USER_GET_FAILURE,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_UPDATE_FAILURE,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "./user.actionTypes";

const initialState = {
  data: getValue("user")?.data || {
    id: "",
    name: "Masai School",
    location: {
      city: "india",
      pincode: 560004,
    },
  },
  isLoading: false,
  error: false,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_GET_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case USER_GET_SUCCESS: {
      setValue("user", {
        data: {
          ...state.data,
          ...payload,
        },
      });
      return {
        ...state,
        data: {
          ...state.data,
          ...payload,
        },
        isLoading: false,
        error: false,
      };
    }
    case USER_GET_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case USER_UPDATE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case USER_UPDATE_SUCCESS: {
      setValue("user", {
        data: {
          ...state.data,
          ...payload,
        },
      });
      return {
        ...state,
        data: {
          ...state.data,
          ...payload,
        },
        isLoading: false,
        error: false,
      };
    }
    case USER_UPDATE_FAILURE: {
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