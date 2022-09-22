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
    resetUserError: (state) => {
      state.error = "";
    },
  },
});

export const { setUserEmail, setAuthStatus, setUserError, resetUserError } =
  userProcess.actions;
