import { paths } from "@src/router/paths";

import { Achievement } from "@src/features/achievement/achievements/achievement-components";
import { ParcelEye } from "@src/features/project/projects/ParcelEye";

const mongoDescription = `
My teammates wanted authentication so I made a MongoDB database to store all the users securely with {password hashing}(ocs1)

Employed {indexes}(ocs2) in {java}(ocs3) to force all users to have unique email and username

MongoDB was chosen because I tried SQL before and was curious to learn about NoSQL, and because it's free for our prototype.
`;

export const Mongo = () => {
  return (
    <Achievement
      name="MongoDB for users (java)"
      Project={() => <ParcelEye />}
      description={mongoDescription}
      urls={[
        "https://github.com/Term-4-CSD-Team-48/api",
        "https://docs.google.com/document/d/1dvR93rBY1RPfFKiElFRue1kAFKH0__rnXRhzZnTRy3s/edit?usp=sharing",
      ]}
      mediasDir={paths.public.achievementDir.mongoDir.path}
      mediasDirSize={4}
    />
  );
};
