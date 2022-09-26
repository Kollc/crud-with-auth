import { Link } from "react-router-dom";
import style from "./error-page.module.css";
import { AppRoutes } from "./../../../consts/consts";

function ErrorPage(): JSX.Element {
  return (
    <section className={style.error}>
      <h1 className={style.title}>404 Page Not Found</h1>
      <Link className={style.back} to={AppRoutes.Main}>
        Go to Main page
      </Link>
    </section>
  );
}

export default ErrorPage;
