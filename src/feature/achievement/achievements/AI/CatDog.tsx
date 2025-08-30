import { lazy } from "react";

import { catDogColab } from "@src/common/string";
import { paths } from "@src/router/paths";
import { Achievement } from "@src/feature/achievement/achievements/achievement-components";

const catDogDescription = `
Built a CNN from scratch in pytorch, achieving {95%}(ocs0) training and validation accuracy on kagglehub datasets.

Incorporated concepts from various proven models like ResNet and VGG

- {Residual}(ocs2) connections that significantly combats vanishing gradients in deep networks
- {Hierachical}(ocs4) feature extraction through successive conv layers of increasing feature size and decreasing image dimensions
- Extensive use of {batch normalization}(ocs1) after conv layers to stabilize training
- {Dropout layers}(ocs1) with dataset transformations to prevent overfitting
- {Multiple FC layers}(ocs4) of decreasing size at the end for gradual reductions to learn more about nuances and increasingly abstract features
`;

const LazyCatDogProject = lazy(
  () => import("@src/feature/project/projects/CatDog")
);

export const CatDog = () => {
  return (
    <Achievement
      name="Cat Dog Classifier (python)"
      LazyProject={LazyCatDogProject}
      description={catDogDescription}
      urls={[catDogColab]}
      medias={[
        { src: paths.public.achievementDir.catDogClassfierDir.img_1 },
        { src: paths.public.achievementDir.catDogClassfierDir.img_2 },
        { src: paths.public.achievementDir.catDogClassfierDir.img_3 },
        { src: paths.public.achievementDir.catDogClassfierDir.img_4 },
        { src: paths.public.achievementDir.catDogClassfierDir.img_5 },
        { src: paths.public.achievementDir.catDogClassfierDir.img_6 },
      ]}
    />
  );
};

export default CatDog;
