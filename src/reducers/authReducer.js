import { AUTH_USER, UNAUTH_USER } from "../Actions/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isUserLogin: true
        // t; action.payload  토큰
      };
    case UNAUTH_USER:
      return {
        ...state,
        isUserLogin: false
      };
    default:
      return state;
  }
};
