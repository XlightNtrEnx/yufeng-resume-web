import styled from "styled-components";

import { FlexColumn } from "@src/common/layouts/flex";

import { Achievement } from "./Achievement";

const Container = styled(FlexColumn).attrs({ as: "section" })`
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
 * <GroupedAchievements>
 *  <Achievement />
 * </GroupedAchievements>
 * ```
 */
export const AchievementsLayout = ({ children }: AchievementsLayoutProps) => {
  return <Container>{children}</Container>;
};
