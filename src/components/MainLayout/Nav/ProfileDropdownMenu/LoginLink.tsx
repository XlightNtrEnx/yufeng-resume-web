import { InternalLink } from "@src/components";
import { paths } from "@src/router";

export const LoginLink = () => {
  return <InternalLink to={paths.login}>Login</InternalLink>;
};
