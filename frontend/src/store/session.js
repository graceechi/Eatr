import { csrfFetch } from './csrf';

const LOGIN_USER = 'session/LOGIN';
const LOGOUT_USER = 'session/LOGOUT';

// login user
const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};

// logout user
const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const sessionLogin = (user) => async (dispatch) => {
    const { credential, password } = user;
    const response = await csrfFetch("/api/session", {
      method: "POST",
      body: JSON.stringify({
        credential,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(loginUser(data.user));
      return data.user;
    }
};

export const restoreUser = () => async (dispatch) => {
    const response = await csrfFetch("/api/session");
    const data = await response.json();
    dispatch(loginUser(data.user));
    return response;
};

export const sessionLogout = () => async (dispatch) => {
    const response = await csrfFetch("/api/session", {
        method: "DELETE",
    });
    dispatch(logoutUser());
    return response;
};


export const signUpUser = (user) => async (dispatch) => {
    const { username, email, password } = user;
    const response = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(loginUser(data.user));
      return data.user;
    }
};

// reducer
const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOGIN_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case LOGOUT_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
