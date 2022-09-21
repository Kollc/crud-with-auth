import { List } from "@mui/material";
import { ContactType } from "../../types/types";
import ContactItem from "../contact-item/contact-item";
import Spinner from "../spinner/spinner";

type ContactListProps = {
  contacts: ContactType[];
};

function ContactList({ contacts }: ContactListProps): JSX.Element {
  return contacts.length > 0 ? (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        overflowY: "auto",
        margin: "10px 0",
        border: "1px solid rgba(0,0,0,0.2)",
      }}
    >
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  ) : (
    <Spinner />
  );
}

export default ContactList;
