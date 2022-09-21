import { createSlice } from "@reduxjs/toolkit";
import { AuthStatus, NameSpace } from "../../consts/consts";
import { UserProcessType } from "../../types/types";

const initialState: UserProcessType = {
  email: "",
  authStatus: AuthStatus.Unknow,
  error: "",
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
    setAuthStatus: (state, action) => {
      state.authStatus = action.payload;
    },
    setUserError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUserEmail, setAuthStatus, setUserError } = userProcess.actions;
