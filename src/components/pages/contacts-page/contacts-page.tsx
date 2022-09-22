import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getAuthStatus } from "../../../store/user-process/selector";
import ContactList from "../../contact-list/contact-list";
import CreateContactForm from "../../create-contact-form/create-contact-form";
import style from "./contacts-page.module.css";
import { useEffect } from "react";
import { AppRoutes, AuthStatus } from "../../../consts/consts";
import { logoutAction } from "../../../store/actions/api-actions";
import { useState } from "react";
import {
  getContacts,
  getContactsError,
} from "../../../store/contacts-process/selector";
import { ContactType } from "../../../types/types";
import ErrorMessage from "../../error-message/error-message";

function ContactsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const contacts = useAppSelector(getContacts);
  const [showContacts, setShowContacts] = useState<ContactType[]>([]);
  const error = useAppSelector(getContactsError);

  const clickLogoutButtonHandle = () => {
    dispatch(logoutAction());
  };

  useEffect(() => {
    if (authStatus !== AuthStatus.Auth) {
      navigate(AppRoutes.Main);
    }
  }, [authStatus]);

  useEffect(() => {
    const searchContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    );

    setShowContacts(searchContacts);
  }, [search, contacts]);

  return (
    <>
      <section className={style.contact}>
        <div className={style.wrapperContent}>
          <TextField
            type="search"
            id="search"
            label="Поиск..."
            variant="outlined"
            fullWidth
            value={search}
            onChange={(evt) => setSearch(evt.target.value)}
          />
          <ContactList contacts={showContacts} />
          <CreateContactForm />
        </div>
        <Button
          className={style.logout}
          variant="contained"
          color="error"
          onClick={clickLogoutButtonHandle}
        >
          Выйти
        </Button>
      </section>
      {error && <ErrorMessage error={error} />}
    </>
  );
}

export default ContactsPage;
