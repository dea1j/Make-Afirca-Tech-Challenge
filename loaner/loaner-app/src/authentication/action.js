import axios from "axios";
import { USER_LOADING, USER_LOADED, AUTH_ERROR } from "../rootAction/types";
import { BASE_URL } from "../rootAction/env";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
};
