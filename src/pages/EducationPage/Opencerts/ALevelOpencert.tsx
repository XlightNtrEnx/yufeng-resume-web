// import styled from "styled-components";
import { Opencerts } from "./Opencerts";

export const ALevelOpencert = () => {
  const folder = "files/education_milestones/alevel/opencerts";
  const filenames = ["alevel.opencert", "alevel pw.opencert"];

  return <Opencerts assetsPath={folder} filenames={filenames}></Opencerts>;
};
