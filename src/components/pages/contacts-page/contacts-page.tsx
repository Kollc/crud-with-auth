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
import { getContacts } from "../../../store/reducers/selector";
import { ContactType } from "../../../types/types";

function ContactsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const contacts = useAppSelector(getContacts);
  const [showContacts, setShowContacts] = useState<ContactType[]>([]);

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
      contact.name.includes(search)
    );

    setShowContacts(searchContacts);
  }, [search, contacts]);

  return (
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
  );
}

export default ContactsPage;
