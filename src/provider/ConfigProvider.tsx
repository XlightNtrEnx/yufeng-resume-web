import React, { createContext } from "react";

class Config {
  api: string = "";
  apiToken: string = "";
}

export const ConfigContext = createContext<Config>(new Config());

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const config = new Config();
  config.api = import.meta.env["VITE_ASTRA_API"] || "";
  config.apiToken = import.meta.env["VITE_ASTRA_API_TOKEN"] || "";

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};
