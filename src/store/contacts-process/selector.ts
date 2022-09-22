import { NameSpace } from "../../consts/consts";
import { ContactType, State } from "../../types/types";

export const getContacts = (state: State): ContactType[] =>
  state[NameSpace.Contacts].contacts;

export const getContactsError = (state: State): string =>
  state[NameSpace.Contacts].error;
