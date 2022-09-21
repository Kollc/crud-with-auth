import { Tabs } from "@mui/material";
import { useState, useEffect } from "react";
import style from "./main-page.module.css";
import Tab from "@mui/material/Tab";
import { AppRoutes, AuthStatus, SignTabs } from "../../../consts/consts";
import SignInForm from "../../sign-in-form/sign-in-form";
import SignUpForm from "../../sign-up-fom/sign-up-fom";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";
import { getAuthStatus } from "../../../store/user-process/selector";

function MainPage(): JSX.Element | null {
  const [typeForm, setTypeForm] = useState(SignTabs.SignIn);
  const authStatus = useAppSelector(getAuthStatus);
  const navigate = useNavigate();

  const changeSignTypeHandle = (
    event: React.SyntheticEvent,
    type: SignTabs
  ) => {
    setTypeForm(type);
  };

  useEffect(() => {
    if (authStatus === AuthStatus.Auth) {
      navigate(AppRoutes.Contacts);
    }
  }, [authStatus]);

  return (
    <section className={style.main}>
      <div className={style.wrapperForm}>
        <Tabs value={typeForm} onChange={changeSignTypeHandle}>
          <Tab value={SignTabs.SignIn} label={SignTabs.SignIn} />
          <Tab value={SignTabs.SignUp} label={SignTabs.SignUp} />
        </Tabs>
        {typeForm === SignTabs.SignIn ? <SignInForm /> : <SignUpForm />}
      </div>
    </section>
  );
}

export default MainPage;
