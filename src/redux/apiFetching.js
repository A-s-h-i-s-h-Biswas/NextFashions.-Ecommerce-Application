import axios from "axios";
import { loginFailure, loginStart, loginSuccess, logout } from "./userSlice";
import {addUser} from "./registerSlice";
import { useDispatch } from "react-redux";
// const dspch=useDispatch();

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:4000/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (user) => {
  // dispatch(addUser());
  try {
    await axios.post("http://localhost:4000/api/auth/register", user);
  } catch (err) {
    // dispatch(loginFailure());
  }
};