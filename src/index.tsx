import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";
import { store } from "./store/store";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  checkAuthAction,
  fetchContactAction,
} from "./store/actions/api-actions";

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          marginBottom: "30px",
        },
      },
    },
  },
});

store.dispatch(checkAuthAction());
store.dispatch(fetchContactAction());

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
