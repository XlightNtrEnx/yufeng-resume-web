import { A, AProps } from "@src/elements";

export interface DownloadLinkProps extends AProps {
  children?: React.ReactNode;
}

/**
 * Link to download a file
 */
export const DownloadLink = ({ href, children }: DownloadLinkProps) => {
  return (
    <A download href={href}>
      {children}
    </A>
  );
};
