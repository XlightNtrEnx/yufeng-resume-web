import { Achievement } from "@src/feature/achievement/achievements/achievement-components";
import { paths } from "@src/router/paths";

const description = `{QtGraph was used to visualize}(ocs0) all incoming FMCW radar data and how they're being processed in real time. 

Stored all the relevant features from FMCW radar as rows into SQLite database. Reason is that there are also other related metainformation that can be stored in foreign tables, but also mainly for R&D purposes we do not need heavy weight databases.

Used Pandas DataFrame API when retrieving from database as temporary containers so that I can perform more in-depth analysis of the data when needed use their API.

All results of AI training on the features (including {images of boxplots and scatter plots}(ocs1), and scalars) were generated and visualized using {tensorboard}(ocs2).`;

export const PanasonicDataScience = () => {
  return (
    <Achievement
      name="Storing, processing, visualizing and summarizing FMCW radar data at Panasonic (python)"
      description={description}
      medias={[
        paths.public.achievementDir.dataScienceDir.panasonicDir.img_1,
        paths.public.achievementDir.dataScienceDir.panasonicDir.img_2,
        paths.public.achievementDir.dataScienceDir.panasonicDir.img_3,
      ]}
    />
  );
};

export default PanasonicDataScience;
