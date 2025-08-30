import { lazy } from "react";

import {
  term5CSDAscendaAPIRepo,
  term5CSDAscendaDocs,
} from "@src/common/string";
import { paths } from "@src/router/paths";
import { Achievement } from "@src/feature/achievement/achievements/achievement-components";

const description = `
Sped up fuzzy searching on {69785 destination rows from minimum 200ms to maximum 30ms using PostgreSQL's pg_trgm extension to use GIST indexes}(ocs0). This was very beneficial for the autocomplete search on frontend.

Integrated {Google Oauth while still keeping passwords secure with hashing}(ocs1)
`;

const LazyAscendaProject = lazy(
  () => import("@src/feature/project/projects/Ascenda")
);

export const Ascenda = () => {
  return (
    <Achievement
      name="Optimizing and securing database for Ascenda (typescript, SQL)"
      LazyProject={LazyAscendaProject}
      description={description}
      urls={[term5CSDAscendaAPIRepo, term5CSDAscendaDocs]}
      medias={[
        { src: paths.public.achievementDir.databaseDir.ascendaDir.img_1 },
        { src: paths.public.achievementDir.databaseDir.ascendaDir.img_2 },
      ]}
    />
  );
};

export default Ascenda;
