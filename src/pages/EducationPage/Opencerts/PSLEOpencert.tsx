// import styled from "styled-components";
import { Opencert } from "./Opencert";

export const PSLEOpencert = () => {
  const folder = "files/education_milestones/psle/opencerts";
  const filenames = ["1.opencert"];

  return <Opencert assetsPath={folder} filenames={filenames}></Opencert>;
};
