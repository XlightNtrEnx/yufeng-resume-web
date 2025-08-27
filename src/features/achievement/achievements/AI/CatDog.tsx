import { paths } from "@src/router/paths";

import { Achievement } from "@src/features/achievement/achievements/achievement-components";
import { CatDog as CatDogProject } from "@src/features/project/projects/CatDog";

const catDogDescription = `
Built a CNN from scratch in pytorch, achieving {95%}(ocs0) training and validation accuracy on kagglehub datasets.

Incorporated concepts from various proven models like ResNet and VGG

- {Residual}(ocs2) connections that significantly combats vanishing gradients in deep networks
- {Hierachical}(ocs4) feature extraction through successive conv layers of increasing feature size and decreasing image dimensions
- Extensive use of {batch normalization}(ocs1) after conv layers to stabilize training
- {Dropout layers}(ocs1) with dataset transformations to prevent overfitting
- {Multiple FC layers}(ocs4) of decreasing size at the end for gradual reductions to learn more about nuances and increasingly abstract features
`;

export const CatDog = () => {
  return (
    <Achievement
      name="Cat Dog Classifier (python)"
      Project={() => <CatDogProject />}
      description={catDogDescription}
      urls={[
        "https://colab.research.google.com/drive/1DO3Vp136JAMOekZNlbf7Pz3TawHV__xa?usp=sharing",
      ]}
      mediasDir={paths.public.achievementDir.catDogClassfierDir.path}
      mediasDirSize={6}
    />
  );
};
