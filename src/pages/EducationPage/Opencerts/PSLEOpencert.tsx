// import styled from "styled-components";
import { Opencerts } from "./Opencerts";

export const PSLEOpencert = () => {
  const folder = "files/education_milestones/psle/opencerts";
  const filenames = ["1.opencert"];

  return <Opencerts assetsPath={folder} filenames={filenames}></Opencerts>;
};
