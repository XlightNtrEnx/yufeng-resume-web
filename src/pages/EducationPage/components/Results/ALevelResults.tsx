import { Results, Subject } from "./Results";

const subjects = [
  new Subject("H1 Project Work", "A"),
  new Subject("H2 Chemistry", "A"),
  new Subject("H2 Mathematics", "A"),
  new Subject("H2 Physics", "A"),
  new Subject("H1 Economics", "B"),
  new Subject("H1 General Paper", "B"),
  new Subject("H3 Chemistry", "Pass"),
];

export const ALevelResults = () => {
  return <Results subjects={subjects}></Results>;
};
