import styled from "styled-components";

import { FlexRow, FlexColumn } from "@src/common/layout/flex";
import { Span } from "@src/common/element/text";

const Container = styled(FlexColumn)``;

const Header = styled(Span)`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SubHeader = styled(Span)`
  font-style: italic;
`;

const Group = styled(FlexRow)`
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

  toHtml(key?: number | string) {
    return (
      <Span key={key}>
        {this.name}: {this.score}
      </Span>
    );
  }
}

export class Category {
  name: string;
  subjects: Subject[];

  constructor(name: string, subjects: Subject[]) {
    this.name = name;
    this.subjects = subjects;
  }
}

export const Results = ({
  subjects,
  categories,
}: {
  subjects?: Subject[];
  categories?: Category[];
}) => {
  return (
    <Container>
      <Header>Results</Header>
      {categories?.map((group, categoryIdx) => (
        <Group key={categoryIdx}>
          <SubHeader>{group.name}</SubHeader>
          {group.subjects.map((subject, i) => subject.toHtml(i))}
        </Group>
      ))}

      {subjects?.map((subject, idx) => subject.toHtml(idx))}
    </Container>
  );
};
