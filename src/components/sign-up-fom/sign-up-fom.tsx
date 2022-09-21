import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { signUpAction } from "../../store/actions/api-actions";
import style from "./sign-up-fom.module.css";

function SignUpForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confimPassword, setConfimPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const clickSignInButtonHandle = () => {
    if (password === confimPassword) {
      dispatch(signUpAction({ email, password }));
    } else {
      console.log("Пароли должны совпадать");
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
      <Button variant="contained" onClick={clickSignInButtonHandle}>
        Зарегестрироваться
      </Button>
    </form>
  );
}

export default SignUpForm;
