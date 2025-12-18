import { paths } from "@src/router/paths";

import { Project } from "./project-components";

const description = `A hardware project involving a data pipeline to clean, filter, and interpret FMCW signals to extract their features into a SQLite database for an AI to learn.`;

export const PanasonicFMCWRadar = () => {
  return (
    <Project
      name="Panasonic FMCW Radar"
      description={description}
      medias={[paths.public.projectDir.panasonicFMCWRadar.img_1]}
    />
  );
};

export default PanasonicFMCWRadar;
