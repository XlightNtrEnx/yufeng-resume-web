import styled from "styled-components";
import { useState, Suspense, lazy } from "react";

import { FlexColumn } from "@src/common/layout/flex";
import { Button } from "@src/common/element/Button";
import { Modal } from "@src/common/component/Modal";

import { PartialColorH2 } from "./components";
import { LoadingSpinner } from "@src/common/component/LoadingSpinner";

const StyledFlexColumn = styled(FlexColumn).attrs({ as: "article" })`
  align-items: start;
  gap: 1em;
`;

const StyledButton = styled(Button)`
  text-decoration: none;
`;

const Skill = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

const StrikeThroughButton = styled(Button)`
  text-decoration: line-through;
`;

const VibeCoding = () => {
  return <StrikeThroughButton>Vibe coding 💩</StrikeThroughButton>;
};

const LazyAI = lazy(() => import("@src/feature/achievement/achievements/AI"));
const LazyAndroid = lazy(
  () => import("@src/feature/achievement/achievements/Android")
);
const LazyArchitecture = lazy(
  () => import("@src/feature/achievement/achievements/Architecture")
);
const LazyCloud = lazy(
  () => import("@src/feature/achievement/achievements/Cloud")
);
const LazyContainerization = lazy(
  () => import("@src/feature/achievement/achievements/Containerization")
);
const LazyDatabase = lazy(
  () => import("@src/feature/achievement/achievements/Database")
);
const LazyDevOps = lazy(
  () => import("@src/feature/achievement/achievements/DevOps")
);
const LazyEE = lazy(() => import("@src/feature/achievement/achievements/EE"));
const LazyServer = lazy(
  () => import("@src/feature/achievement/achievements/Server")
);
const LazyWeb = lazy(() => import("@src/feature/achievement/achievements/Web"));

const achievements = [
  LazyAndroid, // 0
  LazyAI, // 1
  LazyCloud, // 2
  LazyContainerization, // 3
  LazyDatabase, // 4
  LazyEE, // 5
  LazyServer, // 6
  LazyWeb, // 7
  LazyArchitecture, // 8
  LazyDevOps, // 9
];

export const Skills = () => {
  const [selectedAchievementIdx, setSelectedAchievementIdx] = useState<
    number | null
  >(null);
  return (
    <>
      <StyledFlexColumn>
        <PartialColorH2>Proven skills (Click below!)</PartialColorH2>
        <Skill
          onClick={() => {
            setSelectedAchievementIdx(1);
          }}
          text="AI (Computer Vision) 📸"
        />
        <Skill
          onClick={() => {
            setSelectedAchievementIdx(0);
          }}
          text="Android dev 👽"
        />
        <Skill
          onClick={() => {
            setSelectedAchievementIdx(8);
          }}
          text="Software Architecture 🏗️"
        />
        <Skill
          onClick={() => {
            setSelectedAchievementIdx(9);
          }}
          text="DevOps ⚙️"
        />
        <Skill
          onClick={() => {
            setSelectedAchievementIdx(5);
          }}
          text="Hardware design 📟"
        />
        <Skill
          onClick={() => {
            setSelectedAchievementIdx(2);
          }}
          text="Cloud computing 💨"
        />
        <Skill
          onClick={() => {
            setSelectedAchievementIdx(7);
          }}
          text="Web dev (Interactive and mobile responsive) 🌐"
        />
        <Skill
          onClick={() => {
            setSelectedAchievementIdx(4);
          }}
          text="Database management 🛢"
        />
        <Skill
          onClick={() => {
            setSelectedAchievementIdx(6);
          }}
          text="Server building 💻"
        />
        <Skill
          onClick={() => {
            setSelectedAchievementIdx(3);
          }}
          text="Containerization 🫙"
        />
        <VibeCoding />
      </StyledFlexColumn>
      {typeof selectedAchievementIdx === "number" && (
        <Modal
          closer={() => {
            setSelectedAchievementIdx(null);
          }}
        >
          <Suspense fallback={<LoadingSpinner />}>
            {(() => {
              const Component = achievements[selectedAchievementIdx];
              return <Component />;
            })()}
          </Suspense>
        </Modal>
      )}
    </>
  );
};
