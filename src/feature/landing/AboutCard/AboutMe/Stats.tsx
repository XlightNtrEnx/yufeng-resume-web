import styled from "styled-components";

import { Span } from "@src/common/element/text";
import { FlexColumn, FlexRow } from "@src/common/layout/flex";

const StatContainer = styled(FlexRow)`
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledSpan = styled(Span)`
  font-weight: bold;
  padding: 0.1em;
  background-color: ${({ theme }) =>
    theme.colors.pallete.complementary.primary};
  color: ${({ theme }) => theme.colors.white};
`;

const Stat = ({ category, data }: { category: string; data: string }) => {
  return (
    <StatContainer>
      <StyledSpan>{category}: </StyledSpan>
      <Span>{data}</Span>
    </StatContainer>
  );
};

const StyledFlexColumn = styled(FlexColumn)`
  gap: 1em;
`;

const calculateAge = (birthday: Date = new Date(2002, 6, 26)) => {
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear();
  const monthDifference = today.getMonth() - birthday.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthday.getDate())
  )
    return (age - 1).toString();
  return age.toString();
};

const data = [
  ["Age", calculateAge()],
  ["Residence", "Boon Keng, SG"],
  ["Hireable", "Yes"],
  ["Email", "xyf.oco@gmail.com"],
];

export const Stats = () => {
  return (
    <StyledFlexColumn>
      {data.map(([category, data]) => (
        <Stat key={category} category={category} data={data} />
      ))}
    </StyledFlexColumn>
  );
};
