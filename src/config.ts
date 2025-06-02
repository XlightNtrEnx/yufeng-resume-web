const envVariables = ["VITE_RECAPTCHA_SITE_KEY", "VITE_FIREBASE_API_KEY"];

for (const envVariable of envVariables) {
  if (!(import.meta.env as Record<string, string>)[envVariable]) {
    throw new Error(`Environment variable ${envVariable} is missing`);
  }
}

const config = {
  firebase: {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  },
  recaptchaSiteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
};

export default config;
