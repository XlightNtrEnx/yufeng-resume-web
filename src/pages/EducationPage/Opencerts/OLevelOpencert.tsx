// import styled from "styled-components";
import { Opencerts } from "./Opencerts";

export const OLevelOpencert = () => {
  const folder = "files/education_milestones/olevel/opencerts";
  const filenames = ["olevel.opencert", "olevel chinese.opencert"];

  return <Opencerts assetsPath={folder} filenames={filenames}></Opencerts>;
};
