import { Button, Stack, TextField } from "@mui/material";
import { useAppDispatch } from "../../hooks/hooks";
import style from "./create-contact-form.module.css";
import { useState } from "react";
import { createContactAction } from "../../store/actions/api-actions";

function CreateContactForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const clearInputs = () => {
    setName("");
    setLocation("");
  };

  const clickCreateContactButtonHandle = () => {
    if (name && location) {
      dispatch(createContactAction({ name, location }));
      clearInputs();
    } else {
      
    }
  };

  return (
    <form className={style.createForm}>
      <Stack
        direction="row"
        justifyContent="space-between"
        height={40}
        alignItems="flex-end"
      >
        <Stack direction="row" spacing={4}>
          <TextField
            id="name"
            label="Имя"
            variant="standard"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
          <TextField
            id="location"
            label="Место жительства"
            variant="standard"
            value={location}
            onChange={(evt) => setLocation(evt.target.value)}
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            color="success"
            onClick={clickCreateContactButtonHandle}
          >
            Создать
          </Button>
          <Button variant="outlined" color="error" onClick={clearInputs}>
            Очистить
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}

export default CreateContactForm;
