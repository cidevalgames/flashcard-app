export type Question = {
    id: number;
    question: string;
    choices: string[];
    answer: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Quelle est la capitale de la France ?",
    choices: ["Lyon", "Paris", "Marseille", "Bordeaux"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "Combien font 7 x 8 ?",
    choices: ["54", "56", "58", "64"],
    answer: "56",
  },
  {
    id: 3,
    question: "Quel est le plus grand océan du monde ?",
    choices: ["Atlantique", "Indien", "Arctique", "Pacifique"],
    answer: "Pacifique",
  },
  {
    id: 4,
    question: "En quelle année a eu lieu la Révolution française ?",
    choices: ["1789", "1804", "1776", "1815"],
    answer: "1789",
  },
  {
    id: 5,
    question: "Quel langage est utilisé pour styliser une page web ?",
    choices: ["HTML", "JavaScript", "CSS", "Python"],
    answer: "CSS",
  },
];