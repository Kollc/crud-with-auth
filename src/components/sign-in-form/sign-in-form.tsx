import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { ErrorMessagesSignIn } from "../../consts/consts";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { signInAction } from "../../store/actions/api-actions";
import { getUserError } from "../../store/user-process/selector";
import style from "./sign-in-form.module.css";

function SignInForm(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const error = useAppSelector(getUserError);

  const clickSignInButtonHandle = () => {
    dispatch(signInAction({ email, password }));
  };

  return (
    <form className={style.form}>
      <TextField
        id="email"
        label="Email"
        margin="dense"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <TextField
        type="password"
        label="Пароль"
        id="password"
        margin="dense"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <span className={style.error}>{ErrorMessagesSignIn.get(error)}</span>
      <Button
        variant="contained"
        onClick={clickSignInButtonHandle}
        style={{ marginTop: error ? "10px" : "40px" }}
      >
        Войти
      </Button>
    </form>
  );
}

export default SignInForm;
