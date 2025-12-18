import React, { createContext } from "react";

interface Config {
  api: string;
  cassandra: {
    cache_ttl_ms: number;
    ls_expire_in_ms: number;
  };
}

export const ConfigContext = createContext<Config>({
  api: "",
  cassandra: {
    cache_ttl_ms: 28800000, // 8 hours
    ls_expire_in_ms: 28800000,
  },
});

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const config: Config = {
    api: import.meta.env["VITE_ASTRA_API"],
    cassandra: {
      cache_ttl_ms: 28800000,
      ls_expire_in_ms: 28800000,
    },
  };

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};
