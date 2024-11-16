import { InternalLink } from "@src/components";
import { paths } from "@src/router";

export const HomeLink = () => {
  return <InternalLink to={paths.home}>Home</InternalLink>;
};
