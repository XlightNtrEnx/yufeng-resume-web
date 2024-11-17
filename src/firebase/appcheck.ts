import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import config from "@src/config";

import { app } from "./app";

export const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(config.recaptchaSiteKey),
  isTokenAutoRefreshEnabled: true,
});
