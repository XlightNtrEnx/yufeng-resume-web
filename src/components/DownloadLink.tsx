import { Icon } from "@src/components";
import { A, Span } from "@src/elements";
import DownloadIcon from "@src/assets/icons/download512.png";

interface Props {
  href: string;
  text?: string;
  iconSize?: string;
}

/**
 * Link to download a file
 */
export const DownloadLink = ({ href, text, iconSize }: Props) => {
  return (
    <A download href={href}>
      <Span>{text}</Span>
      <Icon
        src={DownloadIcon}
        alt="download-icon"
        size={iconSize || "0.75em"}
      />
    </A>
  );
};
