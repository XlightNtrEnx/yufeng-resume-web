import { Results, Subject, Category } from "./Result";

const TechnicalGPAName = "Technical GPA (Excl. Humanities subjects)";
const CumulativeGPAName = "Cumulative GPA (Incl. Humanities subjects)";
const OverallGPAName = "Overall GPA (Incl. Humanities subjects)";

const categories = [
  new Category("Overall", [
    new Subject(TechnicalGPAName, "4.83/5.00"),
    new Subject(CumulativeGPAName, "4.64/5.00"),
  ]),
  new Category("Term 4", [
    new Subject(OverallGPAName, "4.58/5.00"),
    new Subject(
      "50.001: Introduction to Information Systems & Programming",
      "A+"
    ),
    new Subject("50.002: Computation Structures", "A"),
    new Subject("50.004: Algorithms", "A-"),
  ]),
  new Category("Term 3", [
    new Subject(OverallGPAName, "4.75/5.00"),
    new Subject("10.020: Data Driven World", "A"),
    new Subject("10.022: Modelling Uncertainty", "A-"),
    new Subject("10.024: Spatial Design World", "A"),
  ]),
  new Category("Term 2", [new Subject(CumulativeGPAName, "4.50/5.00")]),
  new Category("Term 1", [new Subject(CumulativeGPAName, "NA")]),
];

export const SUTDResult = () => {
  return <Results categories={categories} />;
};
