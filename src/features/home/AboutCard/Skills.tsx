import styled from "styled-components";
import { useState } from "react";

import { FlexColumn } from "@src/common/layouts/flex";
import { Button } from "@src/common/elements/Button";
import { Modal } from "@src/common/components/Modal";
import { AI } from "@src/features/achievement/achievements/AI";
import { EE } from "@src/features/achievement/achievements/EE";
import { Web } from "@src/features/achievement/achievements/Web";
import { Database } from "@src/features/achievement/achievements/Database";
import { Android } from "@src/features/achievement/achievements/Android";
import { Server } from "@src/features/achievement/achievements/Server";
import { Cloud } from "@src/features/achievement/achievements/Cloud";
import { Containerization } from "@src/features/achievement/achievements/Containerization";

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

const achievements = [
  [Android],
  [AI],
  [Cloud],
  [Containerization],
  [Database],
  [EE],
  [Server],
  [Web],
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
          {achievements[selectedAchievementIdx][0]()}
        </Modal>
      )}
    </>
  );
};
