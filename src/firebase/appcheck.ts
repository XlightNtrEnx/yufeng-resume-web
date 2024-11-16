import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

import { app } from "./app";

export const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6Ld31GwqAAAAAE31_20nYP-tUdUNndWCrh8AQKkS"),
  isTokenAutoRefreshEnabled: true,
});
