import { lazy } from "react";

import { term5CSDAscendaOrg, term5CSDAscendaDocs } from "@src/common/string";
import { paths } from "@src/router/paths";
import { Achievement } from "@src/feature/achievement/achievements/achievement-components";

const description = `
Came up with {sequence diagrams}(ocs0) and {class diagrams}(ocs4) for my team. Also came up with {initial ERD (conceptual)}(ocs2) design for the monolithic API.
`;

const LazyAscendaProject = lazy(
  () => import("@src/feature/project/projects/Ascenda")
);

export const Ascenda = () => {
  return (
    <Achievement
      name="Planning for Ascenda's university project (UML)"
      LazyProject={LazyAscendaProject}
      description={description}
      urls={[term5CSDAscendaOrg, term5CSDAscendaDocs]}
      medias={[
        { src: paths.public.achievementDir.architectureDir.ascendaDir.png_1 },
        { src: paths.public.achievementDir.architectureDir.ascendaDir.jpg_2 },
        { src: paths.public.achievementDir.architectureDir.ascendaDir.png_3 },
        { src: paths.public.achievementDir.architectureDir.ascendaDir.png_4 },
        { src: paths.public.achievementDir.architectureDir.ascendaDir.png_5 },
      ]}
    />
  );
};

export default Ascenda;
