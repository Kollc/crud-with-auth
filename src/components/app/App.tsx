import { Routes, Route } from "react-router-dom";
import { AppRoutes } from "../../consts/consts";
import ContactsPage from "../pages/contacts-page/contacts-page";
import ErrorPage from "../pages/error-page/error-page";
import MainPage from "../pages/main-page/main-page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={AppRoutes.Main} element={<MainPage />} />
        <Route path={AppRoutes.Contacts} element={<ContactsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
