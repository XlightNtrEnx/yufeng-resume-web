import { Results, Subject } from "./Results";

const subjects = [
  new Subject("Aggregate", "242/300"),
  new Subject("Science", "A"),
  new Subject("Mathematics", "A"),
  new Subject("English", "A"),
  new Subject("Chinese", "A"),
];

export const PSLEResults = () => {
  return <Results subjects={subjects}></Results>;
};
