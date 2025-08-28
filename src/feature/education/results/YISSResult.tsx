import { Results, Subject } from "./Result";

const subjects = [
  new Subject("AI & Design", "4.0/4.0"),
  new Subject("CG AI & DESIGN", "4.0/4.0"),
];

export const YISSResult = () => {
  return <Results subjects={subjects} />;
};
