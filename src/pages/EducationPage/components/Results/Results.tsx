import styled from "styled-components";

import { FlexBox } from "@src/components";
import { Span } from "@src/elements";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled(Span)`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SubHeader = styled(Span)`
  font-style: italic;
`;

const Group = styled(FlexBox)`
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

export class Subject {
  name: string;
  score: string;

  constructor(name: string, score: string) {
    this.name = name;
    this.score = score;
  }

  toHtml() {
    return (
      <Span>
        {this.name}: {this.score}
      </Span>
    );
  }
}

export type CategorisedSubjects = { category: string; subjects: Subject[] }[];

export const Results = ({
  subjects,
  categorisedSubjects,
}: {
  subjects?: Subject[];
  categorisedSubjects?: CategorisedSubjects;
}) => {
  return (
    <Container>
      <Header>Results</Header>

      {categorisedSubjects?.map((group) => (
        <Group key={group.category}>
          <SubHeader>{group.category}</SubHeader>
          {group.subjects.map((subject) => subject.toHtml())}
        </Group>
      ))}

      {subjects?.map((subject) => subject.toHtml())}
    </Container>
  );
};
