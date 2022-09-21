import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { signInAction } from "../../store/actions/api-actions";
import style from "./sign-in-form.module.css";

function SignInForm(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const clickSignInButtonHandle = () => {
    dispatch(signInAction({email, password}));
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
      <Button variant="contained" onClick={clickSignInButtonHandle}>
        Войти
      </Button>
    </form>
  );
}

export default SignInForm;
