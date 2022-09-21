import { contactsProcess } from "./../contacts-process/contacts-process";
import { userProcess } from "./../user-process/user-process";
import { combineReducers } from "redux";
import { NameSpace } from "../../consts/consts";

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Contacts]: contactsProcess.reducer,
});
