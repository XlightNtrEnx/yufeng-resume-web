import { paths } from "@src/router/paths";

import { Achievement } from "@src/features/achievement/achievements/achievement-components";
import { ParcelEye } from "@src/features/project/projects/ParcelEye";

const term4InfoSysAICloudDescription = `
My team's physical prototype needed to be lightweight so instead of hauling our own desktop around with a GPU, I developed a cloud based solution to house our AI server

Choice of Amazon Machine Image (AMI) was the more expensive Ubuntu for its better support for CUDA and nginx.

We also needed a secondary server (API) and I chose Amazon Linux for that because it's cheaper and still can deploy a java based server.

The {VPC}(ocs1) also allowed us to put the servers into one private network for more security by restricting the different types of requests using tools like Route Tables, Network ACLs, and Security Groups.
`;

export const Term4InfoSysAICloudAchievement = () => {
  return (
    <Achievement
      name="Deploying EC2 instances and configuring their VPC"
      Project={() => <ParcelEye />}
      description={term4InfoSysAICloudDescription}
      urls={[
        "https://github.com/Term-4-CSD-Team-48/ai-endpoint",
        "https://docs.google.com/document/d/1dvR93rBY1RPfFKiElFRue1kAFKH0__rnXRhzZnTRy3s/edit?usp=sharing",
      ]}
      mediasDir={paths.public.achievementDir.term4InfosysCloudDir.path}
      mediasDirSize={2}
    />
  );
};
