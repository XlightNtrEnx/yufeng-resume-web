import { ConfigContext } from "@src/provider/ConfigProvider";
import { createContext, useContext, useEffect } from "react";

import { PostService } from "./post/post-service";
import { PreviewService } from "./preview/preview-service";

const defaultInitializeValues = {
  baseURL: "",
};

export type AllAPIServicesUnion = InstanceType<
  typeof APIServices
>[keyof InstanceType<typeof APIServices>];

class APIServices {
  public postService: PostService;
  public previewService: PreviewService;

  constructor(initializeValues: { baseURL: string; token?: string }) {
    this.postService = new PostService(initializeValues);
    this.previewService = new PreviewService(initializeValues);
  }
}

export const APIServiceContext = createContext<APIServices>(
  new APIServices(defaultInitializeValues)
);

export const APIServiceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const config = useContext(ConfigContext);
  const initializeValues = {
    baseURL: config.api,
    token: config.apiToken,
  };

  const services = new APIServices(initializeValues);

  useEffect(() => {
    for (const service of Object.values(services)) {
      service.findAllModelsAndSyncToLocalStorage();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <APIServiceContext.Provider value={services}>
      {children}
    </APIServiceContext.Provider>
  );
};
