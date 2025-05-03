import { MediaScroller, MediaScrollerProps } from "./MediaScroller";

interface Props extends MediaScrollerProps {}

export const ProjectMedias = (props: Props) => {
  return <MediaScroller {...props} />;
};
