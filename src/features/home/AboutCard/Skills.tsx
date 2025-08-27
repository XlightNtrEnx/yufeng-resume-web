import styled from "styled-components";
import { useState, Suspense, lazy } from "react";

import { FlexColumn } from "@src/common/layouts/flex";
import { Button } from "@src/common/elements/Button";
import { Modal } from "@src/common/components/Modal";

import { PartialColorH2 } from "./components";

const StyledFlexColumn = styled(FlexColumn).attrs({ as: "article" })`
  align-items: start;
  gap: 15px;
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

const LazyAndroid = lazy(() =>
  import("@src/features/achievement/achievements/Android").then((m) => ({
    default: m.Android,
  }))
);
const LazyAI = lazy(() =>
  import("@src/features/achievement/achievements/AI").then((m) => ({
    default: m.AI,
  }))
);
const LazyCloud = lazy(() =>
  import("@src/features/achievement/achievements/Cloud").then((m) => ({
    default: m.Cloud,
  }))
);
const LazyContainerization = lazy(() =>
  import("@src/features/achievement/achievements/Containerization").then(
    (m) => ({ default: m.Containerization })
  )
);
const LazyDatabase = lazy(() =>
  import("@src/features/achievement/achievements/Database").then((m) => ({
    default: m.Database,
  }))
);
const LazyEE = lazy(() =>
  import("@src/features/achievement/achievements/EE").then((m) => ({
    default: m.EE,
  }))
);
const LazyServer = lazy(() =>
  import("@src/features/achievement/achievements/Server").then((m) => ({
    default: m.Server,
  }))
);
const LazyWeb = lazy(() =>
  import("@src/features/achievement/achievements/Web").then((m) => ({
    default: m.Web,
  }))
);

const achievements = [
  LazyAndroid,
  LazyAI,
  LazyCloud,
  LazyContainerization,
  LazyDatabase,
  LazyEE,
  LazyServer,
  LazyWeb,
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
            setSelectedAchievementIdx(7);
          }}
          text="CI/CD ⚙️"
        />
        <Skill
          onClick={() => {
            setSelectedAchievementIdx(5);
          }}
          text="Some electronic circuit design 📟"
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
          text="Lil' bit of database management 🛢"
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
          <Suspense fallback={<div>Loading...</div>}>
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
