import { Results, Subject } from "./Result";

const subjects = [
  new Subject("Aggregate", "242/300"),
  new Subject("Science", "A"),
  new Subject("Mathematics", "A"),
  new Subject("English", "A"),
  new Subject("Chinese", "A"),
];

export const PSLEResult = () => {
  return <Results subjects={subjects}></Results>;
};
