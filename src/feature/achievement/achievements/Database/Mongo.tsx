import { lazy } from "react";

import {
  term4CSDParcelEyeAPIRepo,
  term4CSDParcelEyeDocs,
} from "@src/common/string";
import { paths } from "@src/router/paths";
import { Achievement } from "@src/feature/achievement/achievements/achievement-components";

const mongoDescription = `
My teammates wanted authentication so I made a MongoDB database to store all the users securely with {password hashing}(ocs1)

Employed {indexes}(ocs2) in {java}(ocs3) to force all users to have unique email and username

MongoDB was chosen because I tried SQL before and was curious to learn about NoSQL, and because it's free for our prototype.
`;

const LazyParcelEyeProject = lazy(
  () => import("@src/feature/project/projects/ParcelEye")
);

export const Mongo = () => {
  return (
    <Achievement
      name="MongoDB for users (java)"
      LazyProject={LazyParcelEyeProject}
      description={mongoDescription}
      urls={[term4CSDParcelEyeAPIRepo, term4CSDParcelEyeDocs]}
      medias={[
        { src: paths.public.achievementDir.databaseDir.mongoDir.img_1 },
        { src: paths.public.achievementDir.databaseDir.mongoDir.img_2 },
        { src: paths.public.achievementDir.databaseDir.mongoDir.img_3 },
        { src: paths.public.achievementDir.databaseDir.mongoDir.img_4 },
      ]}
    />
  );
};
