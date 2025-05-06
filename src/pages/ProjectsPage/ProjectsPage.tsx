import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

import {
  fadeInFromBottom,
  fadeInFromRight,
  fadeInFromTop,
} from "@src/animations";
import AISrc from "@src/assets/images/ai.jpg";
import CysecSrc from "@src/assets/images/cybersecurity.png";
import EESrc from "@src/assets/images/electrical engineering.jpg";
import WebSrc from "@src/assets/images/web.jpg";
import DBSrc from "@src/assets/images/database.jpg";
import AndroidSrc from "@src/assets/images/android.jpg";
import ServerSrc from "@src/assets/images/server.jpg";
import CloudSrc from "@src/assets/images/cloud.jpg";
import DockerSrc from "@src/assets/images/docker.jpg";
import { mobileBreakpointInPx } from "@src/atoms";
import { Grid, Modal } from "@src/components";
import { zIndexes } from "@src/zIndex";

import { Category } from "./Category";
import {
  AIProjects,
  CysecProjects,
  EEProjects,
  WebProjects,
  DBProjects,
  AndroidProjects,
  ServerProjects,
  CloudProjects,
  ContainerizationProjects,
} from "./Projects";

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

  > :nth-child(n + 4) {
    margin-top: 50px;
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
  ["Elec. Eng", EESrc, <EEProjects />],
  ["Database", DBSrc, <DBProjects />],
  ["Android", AndroidSrc, <AndroidProjects />],
  ["Server (Misc)", ServerSrc, <ServerProjects />],
  ["Cloud computing", CloudSrc, <CloudProjects />],
  ["Containerization", DockerSrc, <ContainerizationProjects />],
];
const categoryNameToIndex = new Map<string, number>();
for (let i = 0; i < categories.length; i++) {
  categoryNameToIndex.set(categories[i][0], i);
}

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
  const categoryParam = "category";

  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number | null>(
    categoryNameToIndex.get(searchParams.get(categoryParam) || "") ?? null
  );

  return (
    <>
      <Container>
        {categories.map((category, index) => (
          <Category
            onClick={() => {
              setSelectedCategoryIdx(index);
              setSearchParams((prev) => {
                prev.set(categoryParam, category[0]);
                return prev;
              });
            }}
            src={category[1]}
            key={index}
            title={category[0]}
            $animation={assignAnimation(index)}
          />
        ))}
      </Container>
      {typeof selectedCategoryIdx === "number" && (
        <Modal
          $zIndex={zIndexes.pages.projects.categoryModal}
          onClose={() => {
            setSelectedCategoryIdx(null);
            setSearchParams((prev) => {
              prev.delete(categoryParam);
              return prev;
            });
          }}
        >
          {categories[selectedCategoryIdx][2]}
        </Modal>
      )}
    </>
  );
};
