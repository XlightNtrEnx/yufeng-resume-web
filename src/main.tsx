import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { ReportHandler } from "web-vitals";

import "@src/css/index.css";
import theme from "@src/theme";
import router from "@src/router";
import { ScrollToHashOnLoad } from "@src/provider/ScrollToHashOnLoad";
import { MaintainURLHash } from "@src/provider/MaintainURLHash";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <MaintainURLHash>
      <ScrollToHashOnLoad>
        <RouterProvider router={router} />
      </ScrollToHashOnLoad>
    </MaintainURLHash>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

reportWebVitals(console.log);
