import { Results, Subject, Category } from "./Result";

const categories = [
  new Category("Overall", [new Subject("Cumulative GPA", "4.70/5.00")]),
  new Category("Term 3", [new Subject("GPA", "4.75/5.00")]),
  new Category("Term 2", [new Subject("GPA", "4.50/5.00")]),
  new Category("Term 1", [new Subject("GPA", "NA")]),
];

export const SUTDResult = () => {
  return <Results categories={categories} />;
};
