import { paths } from "@src/router/paths";

import { Achievement } from "@src/features/achievement/achievements/achievement-components";

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

export const Term4InfoSysAPIProject = () => {
  return (
    <Achievement
      name="Combined API for AI, app, and database (java, HTTP)"
      description={description}
      urls={[
        "https://github.com/Term-4-CSD-Team-48/api",
        "https://docs.google.com/document/d/1dvR93rBY1RPfFKiElFRue1kAFKH0__rnXRhzZnTRy3s/edit?usp=sharing",
      ]}
      mediasDir={paths.public.achievementDir.term4InfosysAPIDir.path}
      mediasDirSize={4}
    />
  );
};
