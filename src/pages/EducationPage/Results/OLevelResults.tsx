import { Results, Subject } from "./Results";

const subjects = [
  new Subject("Mathematics", "A1"),
  new Subject("Physics", "A1"),
  new Subject("Additional Mathematics", "A2"),
  new Subject("Chemistry", "A2"),
  new Subject("Biology", "A2"),
  new Subject("Chinese", "B3"),
  new Subject("English", "B3"),
  new Subject("Humanities (SS, History)", "B3"),
  new Subject("Higher Chinese", "C6"),
];

export const OLevelResults = () => {
  return <Results subjects={subjects}></Results>;
};
