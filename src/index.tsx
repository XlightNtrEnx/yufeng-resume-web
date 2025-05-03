import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";

import "@src/css/index.css";
import theme from "@src/theme";
import router from "@src/router";
import {
  AuthProvider,
  AutoScrollToHashProvider,
  HashUpdateOnManualScrollProvider,
} from "@src/providers";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <HashUpdateOnManualScrollProvider>
        <AutoScrollToHashProvider>
          <RouterProvider router={router} />
        </AutoScrollToHashProvider>
      </HashUpdateOnManualScrollProvider>
    </ThemeProvider>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
