import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../consts/consts";
import { ContactProcessType } from "../../types/types";

const initialState: ContactProcessType = {
  contacts: [],
  error: "",
};

export const contactsProcess = createSlice({
  name: NameSpace.Contacts,
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    setContactsError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setContacts, setContactsError } = contactsProcess.actions;
