import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  to: string;
  className?: string;
}

/**
 * Link to an internal page defined by router
 */
export const InternalLink = ({ children, to, className }: Props) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};
