import styled from "styled-components";

import { FlexColumn } from "@src/common/layout/flex";

import { Career } from "./Career";

const StyledFlexColumn = styled(FlexColumn).attrs({ as: "section" })`
  > *:not(:first-child) {
    padding-top: 1rem;
  }
`;

interface AchievementsLayoutProps {
  children:
    | React.ReactElement<typeof Career>
    | React.ReactElement<typeof Career>[];
}

/**
 * Example usage:
 * ```jsx
 * <AchievementsLayout>
 *  <ParcelEye />
 *  <Resume />
 * </AchievementsLayout>
 * ```
 */
export const AchievementsLayout = ({ children }: AchievementsLayoutProps) => {
  return <StyledFlexColumn>{children}</StyledFlexColumn>;
};
