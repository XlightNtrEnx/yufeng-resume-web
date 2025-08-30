import { lazy } from "react";

import {
  term4CSDParcelEyeDocs,
  term4CSDParcelEyeAPIRepo,
} from "@src/common/string";
import { paths } from "@src/router/paths";
import { Achievement } from "@src/feature/achievement/achievements/achievement-components";

const description = `
My team had 3 components that needed to talk to one another so I
            created a java spring framework based HTTP server for communication
            between all 3. The server is RESTful with the exception of the
            session based authentication for the app.
- Send verification emails upon registration{(MailService)}(ocs0)
- Customized authentication process as we did not need login page
              and this is meant to be used as API {(SecurityConfiguration)}(ocs1)
- Used MongoDB's SDK to connect to the database {(MongoClientConnection)}(ocs2)
- Enforced data integrity and consistency by indexing the database {(UserCollection)}(ocs3)
`;

const LazyParcelEyeProject = lazy(
  () => import("@src/feature/project/projects/ParcelEye")
);

export const Term4InfoSysAPI = () => {
  return (
    <Achievement
      name="Combined API for AI, app, and database (java, HTTP)"
      LazyProject={LazyParcelEyeProject}
      description={description}
      urls={[term4CSDParcelEyeAPIRepo, term4CSDParcelEyeDocs]}
      medias={[
        { src: paths.public.achievementDir.serverDir.term4InfosysAPIDir.img_1 },
        { src: paths.public.achievementDir.serverDir.term4InfosysAPIDir.img_2 },
        { src: paths.public.achievementDir.serverDir.term4InfosysAPIDir.img_3 },
        { src: paths.public.achievementDir.serverDir.term4InfosysAPIDir.img_4 },
      ]}
    />
  );
};

export default Term4InfoSysAPI;
