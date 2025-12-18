import { Career } from "./career-components/Career";

import { paths } from "@src/router/paths";
export const PanasonicCareer = () => {
  return (
    <Career
      name="Panasonic"
      description="An enjoyable time with my intern friends at Panasonic. I also had opportunities to grow in the fields of Machine learning, Signal processing, and Data science owing to my supervisor. [My project](/projects?project=Panasonic+FMCW+Radar) involved a Frequency-Modulated-Continuous-Wave radar."
      medias={[
        paths.public.careerDir.panasonicDir.img_1,
        paths.public.careerDir.panasonicDir.img_2,
        paths.public.careerDir.panasonicDir.img_3,
        paths.public.careerDir.panasonicDir.img_4,
        paths.public.careerDir.panasonicDir.vid_5,
      ]}
    />
  );
};

export default PanasonicCareer;
