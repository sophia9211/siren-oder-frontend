export const authReducer = (state = null, action) => {
  switch (action.type) {
    case "AUTH_USER":
      return {
        ...state,
        isUserLogin: true
      };
    case "UNAUTH_USER":
      return {
        ...state,
        isUserLogin: false
      };
    default:
      return state;
  }
};
