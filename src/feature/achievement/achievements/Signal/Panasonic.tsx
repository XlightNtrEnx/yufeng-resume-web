import { Achievement } from "@src/feature/achievement/achievements/achievement-components";
import { paths } from "@src/router/paths";

const description = `Applied various signal processing techniques to obtain dataset for training an AI which had a very {low mae of 2.82 ± 3.55 and 1.82 ± 2.40}(ocs0) compared to the dataset's ±9.9 and ±6.9 standard deviation. 
- {Fast Fourier Transform (FFT) to separate frequencies in reflected mmWaves}(ocs1)
- {MUSIC algorithm for DoA}(ocs2)
- {Circle fitting I/Q data with Taubin's algo and applying Butterworth filter}(ocs3)
- Savgol filter to reduce noise in signal and find peaks for feature extraction`;

export const PanasonicFMCWSignal = () => {
  return (
    <Achievement
      name="FMCW signal processing at Panasonic (python)"
      description={description}
      medias={[
        paths.public.achievementDir.signalDir.panasonicFMCWDir.img_1,
        paths.public.achievementDir.signalDir.panasonicFMCWDir.img_2,
        paths.public.achievementDir.signalDir.panasonicFMCWDir.img_3,
        paths.public.achievementDir.signalDir.panasonicFMCWDir.img_4,
      ]}
    />
  );
};

export default PanasonicFMCWSignal;
