import { deleteUserId, getUserId } from "./../../services/user-id";
import { deleteToken, saveToken } from "../../services/user-token";
import {
  AppDispatch,
  AuthData,
  ContactCreateData,
  ContactType,
  State,
} from "./../../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ApiEndpoint, APIRoute, AuthStatus } from "../../consts/consts";
import {
  setAuthStatus,
  setUserEmail,
  setUserError,
} from "../user-process/user-process";
import { saveUserId } from "../../services/user-id";
import {
  setContacts,
  setContactsError,
} from "../contacts-process/contacts-process";
import { errorHandler } from "../../services/error-handle";

export const signUpAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  "user/signUp",
  async ({ email, password }: AuthData, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post(APIRoute.Register, {
        email,
        password,
      });

      saveToken(data.accessToken);
      saveUserId(data.user.id);

      dispatch(setAuthStatus(AuthStatus.Auth));
      dispatch(setUserEmail(data.user.email));
    } catch (error) {
      dispatch(setUserError(errorHandler(error)));
    }
  }
);

export const signInAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  "user/signIn",
  async ({ email, password }: AuthData, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post(APIRoute.Login, {
        email,
        password,
      });

      saveToken(data.accessToken);
      saveUserId(data.user.id);

      dispatch(setAuthStatus(AuthStatus.Auth));
      dispatch(setUserEmail(data.user.email));
    } catch (error) {
      dispatch(setUserError(errorHandler(error)));
    }
  }
);

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>("user/checkAuth", async (_args, { dispatch, extra: api }) => {
  const userId = getUserId();

  try {
    const { data } = await api.get(
      `${ApiEndpoint.Login}${APIRoute.Users}/${userId}`
    );

    if (data.email) {
      saveUserId(data.id);
      dispatch(setUserEmail(data.email));
      dispatch(setAuthStatus(AuthStatus.Auth));
    }
  } catch (error) {
    dispatch(setUserError(errorHandler(error)));
  }
});

export const fetchContactAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>("contacts/fetchContact", async (_args, { dispatch, extra: api }) => {
  console.log("fetch");
  try {
    const { data } = await api.get(`${APIRoute.Contacts}?_sort=id&_order=desc`); // Чтобы сверху отображались последние добавленные контакты
    dispatch(setContacts(data));
  } catch (error) {
    dispatch(setContactsError(errorHandler(error)));
  }
});

export const createContactAction = createAsyncThunk<
  void,
  ContactCreateData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  "contacts/createContact",
  async ({ name, location }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post(APIRoute.Contacts, {
        name,
        location,
      });

      if (data) {
        dispatch(fetchContactAction());
      }
    } catch (error) {
      dispatch(setContactsError(errorHandler(error)));
    }
  }
);

export const deleteContactAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>("contacts/deleteContact", async (id, { dispatch, extra: api }) => {
  try {
    await api.delete(`${APIRoute.Contacts}/${id}`);
    dispatch(fetchContactAction());
  } catch (error) {
    dispatch(setContactsError(errorHandler(error)));
  }
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>("user/logout", async (_args, { dispatch }) => {
  dispatch(setUserEmail(""));
  dispatch(setAuthStatus(""));
  deleteToken();
  deleteUserId();
});

export const updateContactAction = createAsyncThunk<
  void,
  ContactType,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  "contacts/updateContact",
  async ({ name, location, id }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.put(`${APIRoute.Contacts}/${id}`, {
        name,
        location,
      });

      if (data) {
        dispatch(fetchContactAction());
      }
    } catch (error) {
      dispatch(setContactsError(errorHandler(error)));
    }
  }
);
