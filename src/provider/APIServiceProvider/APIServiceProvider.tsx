import { useContext, createContext, useEffect } from "react";
import { ConfigContext } from "@src/provider/ConfigProvider";

import { AchievementService } from "./achievement/achievement-service";
import { ProjectService } from "./project/project-service";

import { PreviewService } from "./preview/preview-service";
import { CareerService } from "./career/career-service";

const defaultInitializeValues = {
  baseURL: "",
};

export const APIServiceContext = createContext<{
  achievementService: AchievementService;
  projectService: ProjectService;
  previewService: PreviewService;
  careerService: CareerService;
}>({
  achievementService: new AchievementService(defaultInitializeValues),
  projectService: new ProjectService(defaultInitializeValues),
  previewService: new PreviewService(defaultInitializeValues),
  careerService: new CareerService(defaultInitializeValues),
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

  const achievementService = new AchievementService(initializeValues);
  const projectService = new ProjectService(initializeValues);
  const previewService = new PreviewService(initializeValues);
  const careerService = new CareerService(initializeValues);
  const services = {
    careerService,
    achievementService,
    projectService,
    previewService,
  };

  useEffect(() => {
    for (const service of Object.values(services)) {
      service.findAllModelsAndSync();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <APIServiceContext.Provider value={services}>
      {children}
    </APIServiceContext.Provider>
  );
};
