import { LoadingSpinner } from "@src/common/component/LoadingSpinner";
import { openDB } from "idb";
import React, { createContext, useEffect, useState } from "react";
import { CustomDBSchemaExtended, CustomIDBPDatabase } from "./db";

class IDB {
  db: CustomIDBPDatabase;
}

export const IDBContext = createContext<IDB>(new IDB());
export const IDBProvider = ({ children }: { children: React.ReactNode }) => {
  const [idbValue, setIDBValue] = useState<IDB | null>(null);

  useEffect(() => {
    const dbName = "api";
    openDB<CustomDBSchemaExtended>(dbName, 1, {
      upgrade(db, oldVersion, newVersion, transaction, event) {
        const postStore = db.createObjectStore("posts", { keyPath: "id" });
        postStore.createIndex("preview_id", "preview_id");

        const previewStore = db.createObjectStore("previews", {
          keyPath: "id",
        });
        previewStore.createIndex("type", "type");
        console.log("Upgraded db");
      },
      blocked(currentVersion, blockedVersion, event) {},
      blocking(currentVersion, blockedVersion, event) {},
      terminated() {},
    }).then((db) => {
      db.clear("posts");
      db.clear("previews");
      const idbObject = new IDB();
      idbObject.db = db;
      setIDBValue(idbObject);
    });
  }, []);

  if (idbValue === null) {
    return <LoadingSpinner />;
  }
  return <IDBContext.Provider value={idbValue}>{children}</IDBContext.Provider>;
};
