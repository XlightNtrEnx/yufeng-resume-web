import { Results, Subject } from "./Results";

const categorisedSubjects = [
  {
    category: "Overall",
    subjects: [new Subject("Cumulative GPA", "4.63/5.00")],
  },
  {
    category: "Term 3",
    subjects: [new Subject("GPA", "4.67/5.00")],
  },
  {
    category: "Term 2",
    subjects: [new Subject("GPA", "4.50/5.00")],
  },
  {
    category: "Term 1",
    subjects: [new Subject("GPA", "NA")],
  },
];

export const SUTDResults = () => {
  return <Results categorisedSubjects={categorisedSubjects} />;
};
