import { createSlice } from "@reduxjs/toolkit";

// Create an authentication slice with initial state
const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: false, // Represents whether the user is authenticated
    token: null, // Stores the user's authentication token
    keepLogging: false, // Indicates if the user wants to keep logged in
  },
  reducers: {
    // Action to set the user's authentication token
    set_Token: (state, action) => {
      state.token = action.payload;
      const login = JSON.parse(localStorage.getItem("login")) || {};
      login.token = action.payload;
      localStorage.setItem("login", JSON.stringify(login));
    },

    // Action to set the authenticated state to true
    set_IsAuth: (state) => {
      state.authenticated = true;
      const login = JSON.parse(localStorage.getItem("login")) || {};
      login.authenticated = true;
      localStorage.setItem("login", JSON.stringify(login));
    },

    // Action to set the keepLogging state
    set_KeepLogging: (state, action) => {
      state.keepLogging = action.payload;
      const login = JSON.parse(localStorage.getItem("login")) || {};
      login.keepLogging = action.payload;
      localStorage.setItem("login", JSON.stringify(login));
    },

    // Action to set login state with token and keepLogging
    set_Login: (state, action) => {
      state.authenticated = true;
      state.keepLogging = action.payload.keepLogging;
      state.token = action.payload.token;
      localStorage.setItem(
        "login",
        JSON.stringify({
          keepLogging: action.payload.keepLogging,
          token: action.payload.token,
          authenticated: true,
        })
      );
    },

    // Action to remove authentication data
    remove_Auth: (state) => {
      state.authenticated = false;
      state.keepLogging = false;
      state.token = null;
      localStorage.removeItem("login");
    },
  },
});

// Export the reducer and actions
export default authSlice.reducer;
export const {
  set_Token,
  set_IsAuth,
  set_KeepLogging,
  remove_Auth,
  set_Login,
} = authSlice.actions;
