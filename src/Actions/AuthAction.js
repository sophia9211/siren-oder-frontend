import { AUTH_USER } from "./types";

//액션생성함수
export const auth = t => {
  return { type: AUTH_USER, payload: t };
};
