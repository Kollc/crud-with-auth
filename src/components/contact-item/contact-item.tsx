import {
  Button,
  Divider,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Fragment } from "react";
import style from "./contact-item.module.css";
import { ContactType } from "../../types/types";
import { useAppDispatch } from "../../hooks/hooks";
import {
  deleteContactAction,
  updateContactAction,
} from "../../store/actions/api-actions";
import { useState } from "react";
import { Stack } from "@mui/system";

type ContactItemProps = {
  contact: ContactType;
};

function ContactItem({ contact }: ContactItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(contact.name);
  const [location, setLocation] = useState(contact.location);

  const clickDeleteContactButtonHandle = () => {
    dispatch(deleteContactAction(contact.id));
  };

  const clickUpdateContactButtonHandle = () => {
    dispatch(updateContactAction({ name, location, id: contact.id }));

    setIsEdit(false);
    setLocation(contact.location);
    setName(contact.name);
  };

  const clickCancleButtonHandle = () => {
    setIsEdit(false);
    setLocation(contact.location);
    setName(contact.name);
  };

  return (
    <>
      <ListItem
        alignItems="flex-start"
        style={{ border: isEdit ? "2px solid #1976d2" : "none" }}
      >
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>

        {isEdit ? (
          <Stack direction="row" spacing={4}>
            <TextField
              id="standard-basic"
              label="Имя"
              variant="standard"
              value={name}
              onChange={(evt) => setName(evt.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Место жительства"
              variant="standard"
              value={location}
              onChange={(evt) => setLocation(evt.target.value)}
            />
          </Stack>
        ) : (
          <ListItemText
            primary={contact.name}
            secondary={
              <Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {contact.location}
                </Typography>
              </Fragment>
            }
          />
        )}

        <div className={style.buttonWrapper}>
          {isEdit ? (
            <Button
              variant="outlined"
              color="error"
              onClick={clickCancleButtonHandle}
            >
              Отменить
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="success"
              onClick={() => setIsEdit(true)}
            >
              Изменить
            </Button>
          )}

          {isEdit ? (
            <Button
              variant="outlined"
              color="success"
              onClick={clickUpdateContactButtonHandle}
            >
              Сохранить
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="error"
              onClick={clickDeleteContactButtonHandle}
            >
              Удалить
            </Button>
          )}
        </div>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

export default ContactItem;
