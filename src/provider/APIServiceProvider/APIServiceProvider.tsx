import { ConfigContext } from "@src/provider/ConfigProvider";
import { createContext, useContext, useEffect, useState } from "react";

import { IDBContext } from "../IDBProvider/IDBProvider";
import { PostService } from "./post/post-service";
import { PreviewService } from "./preview/preview-service";
import { PostIDBService } from "../IDBProvider/post-idb-service";
import { PreviewIDBService } from "../IDBProvider/preview-idb-service";
import { LoadingSpinner } from "@src/common/component/LoadingSpinner";
import { AbstractService } from "./abstract-service/abstract-service";

export type AllAPIServicesUnion = InstanceType<
  typeof APIServices
>[keyof InstanceType<typeof APIServices>];

class APIServices {
  public postService: PostService;
  public previewService: PreviewService;
}

export const APIServiceContext = createContext<APIServices>(new APIServices());
export const APIServiceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const idbContext = useContext(IDBContext);
  const config = useContext(ConfigContext);
  const [services, setServices] = useState<null | APIServices>(null);

  useEffect(() => {
    const db = idbContext.db;
    const services = new APIServices();
    const initializeValues = {
      baseURL: config.api,
      token: config.apiToken,
    };
    services.postService = new PostService({
      ...initializeValues,
      idbService: new PostIDBService({ db }),
    });
    services.previewService = new PreviewService({
      ...initializeValues,
      idbService: new PreviewIDBService({ db }),
    });
    for (const service of Object.values(services)) {
      (service as AbstractService<any, any>).syncIDB();
    }
    setServices(services);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (services === null) {
    return <LoadingSpinner />;
  }
  return (
    <APIServiceContext.Provider value={services}>
      {children}
    </APIServiceContext.Provider>
  );
};
