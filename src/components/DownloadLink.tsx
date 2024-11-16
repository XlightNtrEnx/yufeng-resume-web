import { A } from "@src/elements";

interface Props {
  href: string;
  children?: React.ReactNode;
}

export const DownloadLink = ({ children, href }: Props) => {
  return (
    <A download href={href}>
      {children}
    </A>
  );
};
