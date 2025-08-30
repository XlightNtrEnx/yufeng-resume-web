import { lazy } from "react";

import {
  term5CSDAscendaAPIRepo,
  term5CSDAscendaDocs,
} from "@src/common/string";
import { paths } from "@src/router/paths";
import { Achievement } from "@src/feature/achievement/achievements/achievement-components";

const description = `
Deployed a monolithic RESTful API onto {Railway}(ocs1)
- Connects to an {internal Redis store}(ocs0) to store all sessions and send the session cookies out when secured
- Uses {TypeORM}(ocs2) to manage models from database
- Implemented a simple in-memory {LRU cache}(ocs3) to store responses from an external API that was really slow
- Added a {reporter}(ocs4) that helps specify which tests failed exactly
- Mocked up components for unit tests like {MockUserService}(ocs5)
- Simple script to {seed database}(ocs6) with 69875 destination records when needed
`;

const LazyAscendaProject = lazy(
  () => import("@src/feature/project/projects/Ascenda")
);

export const Ascenda = () => {
  return (
    <Achievement
      name="RESTful API for database with Ascenda (typescript, SQL, HTTPS)"
      LazyProject={LazyAscendaProject}
      description={description}
      urls={[term5CSDAscendaAPIRepo, term5CSDAscendaDocs]}
      medias={[
        { src: paths.public.achievementDir.serverDir.ascendaDir.img_1 },
        { src: paths.public.achievementDir.serverDir.ascendaDir.img_2 },
        { src: paths.public.achievementDir.serverDir.ascendaDir.img_3 },
        { src: paths.public.achievementDir.serverDir.ascendaDir.img_4 },
        { src: paths.public.achievementDir.serverDir.ascendaDir.img_5 },
        { src: paths.public.achievementDir.serverDir.ascendaDir.img_6 },
        { src: paths.public.achievementDir.serverDir.ascendaDir.img_7 },
      ]}
    />
  );
};

export default Ascenda;
