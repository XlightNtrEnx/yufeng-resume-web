// import styled from "styled-components";
import { Opencert } from "./Opencert";

export const OLevelOpencert = () => {
  const folder = "files/education_milestones/olevel/opencerts";
  const filenames = ["olevel.opencert", "olevel chinese.opencert"];

  return <Opencert assetsPath={folder} filenames={filenames}></Opencert>;
};
