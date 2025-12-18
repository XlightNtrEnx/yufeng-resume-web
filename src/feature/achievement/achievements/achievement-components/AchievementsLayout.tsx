import styled from "styled-components";

import { FlexColumn } from "@src/common/layout/flex";

import { Achievement } from "./Achievement";

const StyledFlexColumn = styled(FlexColumn).attrs({ as: "section" })`
  > *:not(:first-child) {
    padding-top: 1rem;
  }
`;

interface AchievementsLayoutProps {
  children:
    | React.ReactElement<typeof Achievement>
    | React.ReactElement<typeof Achievement>[];
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
