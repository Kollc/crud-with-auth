import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { ErrorMessagesSignUp } from "../../consts/consts";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { signUpAction } from "../../store/actions/api-actions";
import { getUserError } from "../../store/user-process/selector";
import { setUserError } from "../../store/user-process/user-process";
import style from "./sign-up-fom.module.css";

function SignUpForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confimPassword, setConfimPassword] = useState("");
  const error = useAppSelector(getUserError);

  const clickSignInButtonHandle = () => {
    if (password === confimPassword) {
      dispatch(signUpAction({ email, password }));
    } else {
      dispatch(setUserError("Password Not Match"));
    }
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
        label="Password"
        id="password"
        margin="dense"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <TextField
        type="password"
        label="Confim password"
        id="password"
        margin="dense"
        value={confimPassword}
        onChange={(evt) => setConfimPassword(evt.target.value)}
      />
      <span className={style.error}>{ErrorMessagesSignUp.get(error)}</span>
      <Button
        variant="contained"
        onClick={clickSignInButtonHandle}
        style={{ marginTop: error ? "10px" : "40px" }}
      >
        Зарегестрироваться
      </Button>
    </form>
  );
}

export default SignUpForm;
