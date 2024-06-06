import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice, { set_Login } from "./authReducer/authSlice.js";
import userSlice, { set_User } from "./userReducer/userSlice.js";

// Combine multiple reducers into a single root reducer
const rootReducer = combineReducers({
  user: userSlice, // User reducer
  login: authSlice, // Authentication reducer
});

// Configure the Redux store with the root reducer
const store = configureStore({
  reducer: rootReducer, // Set the root reducer for the store
});

// Load login information from local storage if available
const loginData = localStorage.getItem("login");
if (loginData) {
  store.dispatch(set_Login(JSON.parse(loginData)));

  const userData = localStorage.getItem("user");
  if (userData) {
    store.dispatch(set_User(JSON.parse(userData)));
  }
}

// Export the configured Redux store
export default store;
