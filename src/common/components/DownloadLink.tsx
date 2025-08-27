import { A, AProps } from "@src/common/elements/A";

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
