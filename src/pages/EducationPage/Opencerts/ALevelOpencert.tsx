// import styled from "styled-components";
import { Opencert } from "./Opencert";

export const ALevelOpencert = () => {
  const folder = "files/education_milestones/alevel/opencerts";
  const filenames = ["alevel.opencert", "alevel pw.opencert"];

  return <Opencert assetsPath={folder} filenames={filenames}></Opencert>;
};
