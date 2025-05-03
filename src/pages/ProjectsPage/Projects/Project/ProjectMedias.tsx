import {
  MediaScroller,
  MediaScrollerProps,
} from "../MediaScroller/MediaScroller";

interface Props extends MediaScrollerProps {}

export const ProjectMedias = (props: Props) => {
  return <MediaScroller {...props} />;
};
