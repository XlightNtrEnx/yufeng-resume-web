import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
`;

export const FlexRowReverse = styled(FlexRow)`
  flex-direction: row-reverse;
`;

export const FlexColumn = styled(FlexRow)`
  flex-direction: column;
`;
