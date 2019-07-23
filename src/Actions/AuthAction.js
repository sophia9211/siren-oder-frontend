import { AUTH_USER, UNAUTH_USER } from "./types";

//액션생성함수
export const auth = () => {
  return { type: AUTH_USER };
};

export const unAuth = () => {
  return { type: UNAUTH_USER };
};
