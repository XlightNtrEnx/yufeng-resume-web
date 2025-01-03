import { useState } from "react";
import styled from "styled-components";

import { Grid } from "@src/components";
import AISrc from "@src/assets/images/ai.jpg";
import WebSrc from "@src/assets/images/web.jpg";
import CysecSrc from "@src/assets/images/cybersecurity.png";
import {
  fadeInFromRight,
  fadeInFromTop,
  fadeInFromBottom,
} from "@src/animations";
import { mobileBreakpointInPx } from "@src/atoms";

import { Category } from "./Category";
import { Modal } from "./Modal";
import { AIProjects, WebProjects, CysecProjects } from "./Projects";

const Container = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  @media (max-width: ${mobileBreakpointInPx}px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  > * {
    width: 200px;
    height: 200px;
    background-color: ${({ theme }) => theme.softBackgroundColor};
  }
`;

interface ICategory {
  0: string;
  1: string;
  2?: JSX.Element;
}

const categories: ICategory[] = [
  ["AI", AISrc, <AIProjects />],
  ["Web", WebSrc, <WebProjects />],
  ["Cysec", CysecSrc, <CysecProjects />],
];

const firstIndex = 0;
const lastIndex = categories.length - 1;

const assignAnimation = (index: number) => {
  switch (index) {
    case firstIndex:
      return fadeInFromTop;
    case lastIndex:
      return fadeInFromBottom;
    default:
      return fadeInFromRight;
  }
};

export const ProjectsPage = () => {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number | null>(
    null
  );

  const handleCategoryClick = (idx: number) => {
    setSelectedCategoryIdx(idx);
  };

  const handleCloseModal = () => {
    setSelectedCategoryIdx(null);
  };
  return (
    <>
      <Container>
        {categories.map((category, index) => (
          <Category
            onClick={() => handleCategoryClick(index)}
            src={category[1]}
            key={index}
            title={category[0]}
            animation={assignAnimation(index)}
          />
        ))}
      </Container>
      {typeof selectedCategoryIdx === "number" && (
        <Modal onClose={handleCloseModal}>
          {categories[selectedCategoryIdx][2]}
        </Modal>
      )}
    </>
  );
};
