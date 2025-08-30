import { lazy } from "react";

import {
  term5CSDAscendaAPIRepo,
  term5CSDAscendaDocs,
} from "@src/common/string";
import { paths } from "@src/router/paths";
import { Achievement } from "@src/feature/achievement/achievements/achievement-components";

const description = `
Set up a simple pipeline that {first runs all sys tests}(ocs1) which if passed will trigger Railway which is {listening to main branch}(ocs0) to deploy the container.
`;

const LazyAscendaProject = lazy(
  () => import("@src/feature/project/projects/Ascenda")
);

export const Ascenda = () => {
  return (
    <Achievement
      name="Improving team efficiency for Ascenda's university project (yml)"
      LazyProject={LazyAscendaProject}
      description={description}
      urls={[term5CSDAscendaAPIRepo, term5CSDAscendaDocs]}
      medias={[
        { src: paths.public.achievementDir.devOpsDir.ascendaDir.img_1 },
        { src: paths.public.achievementDir.devOpsDir.ascendaDir.img_2 },
      ]}
    />
  );
};

export default Ascenda;
