import { ConfigContext } from "@src/provider/ConfigProvider";
import { createContext, useContext, useEffect } from "react";

import { PostService } from "./post/post-service";
import { PreviewService } from "./preview/preview-service";

const defaultInitializeValues = {
  baseURL: "",
};

export const APIServiceContext = createContext<{
  previewService: PreviewService;
  postService: PostService;
}>({
  postService: new PostService(defaultInitializeValues),
  previewService: new PreviewService(defaultInitializeValues),
});

export const APIServiceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const config = useContext(ConfigContext);
  const initializeValues = {
    baseURL: config.api,
  };

  const previewService = new PreviewService(initializeValues);
  const postService = new PostService(initializeValues);
  const services = {
    previewService,
    postService,
  };

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
