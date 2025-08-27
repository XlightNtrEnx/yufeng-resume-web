import {
  PreviewCard as PC,
  PreviewCardProps as PCP,
} from "@src/common/components/PreviewCard";

export interface PreviewCardProps extends PCP {}

export const PreviewCard = (props: PreviewCardProps) => {
  return <PC {...props} />;
};
