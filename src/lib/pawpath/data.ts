export type Subject = "math" | "english" | "science";
export type Grade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface QuizItem {
  prompt: string;
  options: string[];
  answer: number;
  hint: string;
  example: string;
  steps: string[];
}

export interface LearningSection {
  id: string;
  name: string;
  subject: Subject;
  grade: Grade;
}

export interface HotelBackground {
  id: string;
  name: string;
  description: string;
  cost: number;
  emoji: string;
  category: "free" | "normal" | "special" | "event";
}

export interface HotelItem {
  id: string;
  name: string;
  emoji: string;
  cost: number;
  category: "comfort" | "play" | "care" | "decor" | "check-in" | "event";
  forType?: "dog" | "cat" | "both";
}

export interface RescuePet {
  id: string;
  name: string;
  type: "dog" | "cat";
  breed: string;
  age: number;
  story: string;
  personality: string;
  favoriteFood: string;
  favoriteToy: string;
  favoriteItem: string;
  mood: "Sad" | "Nervous" | "Calm" | "Happy" | "Very Happy";
  location: string;
  adopted: boolean;
}

export interface Question extends QuizItem {
  id: string;
  subject: Subject;
  skill: string;
  grade: Grade;
  practice: QuizItem;
}

export const SUBJECT_LABEL: Record<Subject, string> = {
  math: "Math",
  english: "English",
  science: "Science",
};

export const LEARNING_SECTIONS_BY_GRADE: Record<Grade, Record<Subject, LearningSection[]>> = {
  1: {
    math: [
      { id: "numbers", name: "Numbers", subject: "math", grade: 1 },
      { id: "counting", name: "Counting", subject: "math", grade: 1 },
      { id: "order", name: "Number order", subject: "math", grade: 1 },
      { id: "addition", name: "Simple addition", subject: "math", grade: 1 },
      { id: "subtraction", name: "Simple subtraction", subject: "math", grade: 1 },
      { id: "shapes", name: "Basic shapes", subject: "math", grade: 1 },
      { id: "patterns", name: "Simple patterns", subject: "math", grade: 1 },
      { id: "word-problems", name: "Simple word problems", subject: "math", grade: 1 },
    ],
    english: [
      { id: "letters", name: "Letters", subject: "english", grade: 1 },
      { id: "case", name: "Capital and small letters", subject: "english", grade: 1 },
      { id: "sounds", name: "Letter sounds", subject: "english", grade: 1 },
      { id: "words", name: "Simple words", subject: "english", grade: 1 },
      { id: "spelling", name: "Basic spelling", subject: "english", grade: 1 },
      { id: "matching", name: "Matching words and pictures", subject: "english", grade: 1 },
      { id: "sentences", name: "Short sentences", subject: "english", grade: 1 },
      { id: "reading", name: "Picture reading", subject: "english", grade: 1 },
    ],
    science: [
      { id: "animals", name: "Animals", subject: "science", grade: 1 },
      { id: "plants", name: "Plants", subject: "science", grade: 1 },
      { id: "weather", name: "Weather", subject: "science", grade: 1 },
      { id: "seasons", name: "Seasons", subject: "science", grade: 1 },
      { id: "senses", name: "The five senses", subject: "science", grade: 1 },
      { id: "living", name: "Living and nonliving things", subject: "science", grade: 1 },
    ],
  },
  2: {
    math: [
      { id: "addition", name: "Addition", subject: "math", grade: 2 },
      { id: "subtraction", name: "Subtraction", subject: "math", grade: 2 },
      { id: "place-value", name: "Place value", subject: "math", grade: 2 },
      { id: "compare", name: "Number comparison", subject: "math", grade: 2 },
      { id: "time", name: "Time", subject: "math", grade: 2 },
      { id: "money", name: "Money", subject: "math", grade: 2 },
      { id: "shapes", name: "Shapes", subject: "math", grade: 2 },
      { id: "measurement", name: "Measurement", subject: "math", grade: 2 },
      { id: "word-problems", name: "Simple word problems", subject: "math", grade: 2 },
    ],
    english: [
      { id: "phonics", name: "Phonics", subject: "english", grade: 2 },
      { id: "spelling", name: "Spelling", subject: "english", grade: 2 },
      { id: "vocabulary", name: "Vocabulary", subject: "english", grade: 2 },
      { id: "grammar", name: "Basic grammar", subject: "english", grade: 2 },
      { id: "nouns", name: "Nouns and verbs", subject: "english", grade: 2 },
      { id: "sentence-order", name: "Sentence order", subject: "english", grade: 2 },
      { id: "sentences", name: "Short sentences", subject: "english", grade: 2 },
      { id: "reading", name: "Short reading", subject: "english", grade: 2 },
    ],
    science: [
      { id: "animal-homes", name: "Animal homes", subject: "science", grade: 2 },
      { id: "needs", name: "Animal needs", subject: "science", grade: 2 },
      { id: "plant-parts", name: "Plant parts", subject: "science", grade: 2 },
      { id: "plant-needs", name: "Plant needs", subject: "science", grade: 2 },
      { id: "weather", name: "Weather", subject: "science", grade: 2 },
      { id: "land-water", name: "Land and water", subject: "science", grade: 2 },
      { id: "matter", name: "Matter", subject: "science", grade: 2 },
    ],
  },
  3: {
    math: [
      { id: "addition-subtraction", name: "Addition and subtraction", subject: "math", grade: 3 },
      { id: "multiplication", name: "Multiplication", subject: "math", grade: 3 },
      { id: "division", name: "Division", subject: "math", grade: 3 },
      { id: "fractions", name: "Fractions", subject: "math", grade: 3 },
      { id: "area", name: "Area", subject: "math", grade: 3 },
      { id: "perimeter", name: "Perimeter", subject: "math", grade: 3 },
      { id: "measurement", name: "Measurement", subject: "math", grade: 3 },
      { id: "word-problems", name: "Word problems", subject: "math", grade: 3 },
    ],
    english: [
      { id: "vocabulary", name: "Vocabulary", subject: "english", grade: 3 },
      { id: "spelling", name: "Spelling", subject: "english", grade: 3 },
      { id: "grammar", name: "Grammar", subject: "english", grade: 3 },
      { id: "nouns", name: "Nouns", subject: "english", grade: 3 },
      { id: "verbs", name: "Verbs", subject: "english", grade: 3 },
      { id: "adjectives", name: "Adjectives", subject: "english", grade: 3 },
      { id: "sentence-order", name: "Sentence order", subject: "english", grade: 3 },
      { id: "reading", name: "Reading", subject: "english", grade: 3 },
      { id: "main-idea", name: "Main idea", subject: "english", grade: 3 },
      { id: "supporting-details", name: "Supporting details", subject: "english", grade: 3 },
      { id: "writing", name: "Simple writing", subject: "english", grade: 3 },
    ],
    science: [
      { id: "animals", name: "Animals", subject: "science", grade: 3 },
      { id: "plants", name: "Plants", subject: "science", grade: 3 },
      { id: "life-cycles", name: "Life cycles", subject: "science", grade: 3 },
      { id: "habitats", name: "Habitats", subject: "science", grade: 3 },
      { id: "weather", name: "Weather", subject: "science", grade: 3 },
      { id: "earth", name: "Earth", subject: "science", grade: 3 },
      { id: "matter", name: "Matter", subject: "science", grade: 3 },
      { id: "forces", name: "Forces and motion", subject: "science", grade: 3 },
    ],
  },
  4: {
    math: [
      { id: "large-numbers", name: "Large numbers", subject: "math", grade: 4 },
      { id: "place-value", name: "Place value", subject: "math", grade: 4 },
      { id: "addition-subtraction", name: "Addition and subtraction", subject: "math", grade: 4 },
      { id: "multiplication", name: "Multiplication", subject: "math", grade: 4 },
      { id: "division", name: "Division", subject: "math", grade: 4 },
      { id: "fractions", name: "Fractions", subject: "math", grade: 4 },
      { id: "decimals", name: "Decimals", subject: "math", grade: 4 },
      { id: "area-perimeter", name: "Area and perimeter", subject: "math", grade: 4 },
      { id: "measurement", name: "Measurement", subject: "math", grade: 4 },
      { id: "word-problems", name: "Word problems", subject: "math", grade: 4 },
    ],
    english: [
      { id: "vocabulary", name: "Vocabulary", subject: "english", grade: 4 },
      { id: "spelling", name: "Spelling", subject: "english", grade: 4 },
      { id: "grammar", name: "Grammar", subject: "english", grade: 4 },
      { id: "verb-forms", name: "Verb forms", subject: "english", grade: 4 },
      { id: "sentence-order", name: "Sentence order", subject: "english", grade: 4 },
      { id: "reading", name: "Reading", subject: "english", grade: 4 },
      { id: "main-idea", name: "Main idea", subject: "english", grade: 4 },
      { id: "supporting-details", name: "Supporting details", subject: "english", grade: 4 },
      { id: "paragraph-writing", name: "Paragraph writing", subject: "english", grade: 4 },
      { id: "sentence-flow", name: "Sentence flow", subject: "english", grade: 4 },
    ],
    science: [
      { id: "ecosystems", name: "Ecosystems", subject: "science", grade: 4 },
      { id: "food-chains", name: "Food chains", subject: "science", grade: 4 },
      { id: "energy", name: "Energy", subject: "science", grade: 4 },
      { id: "matter", name: "Matter", subject: "science", grade: 4 },
      { id: "earth", name: "Earth", subject: "science", grade: 4 },
      { id: "weather", name: "Weather", subject: "science", grade: 4 },
      { id: "human-body", name: "The human body", subject: "science", grade: 4 },
      { id: "animal-care", name: "Animal care", subject: "science", grade: 4 },
    ],
  },
  5: {
    math: [
      { id: "fractions", name: "Fractions", subject: "math", grade: 5 },
      { id: "decimals", name: "Decimals", subject: "math", grade: 5 },
      { id: "multiply-divide", name: "Multiplication and division", subject: "math", grade: 5 },
      { id: "volume", name: "Volume", subject: "math", grade: 5 },
      { id: "geometry", name: "Geometry", subject: "math", grade: 5 },
      { id: "graphs", name: "Coordinate graphs", subject: "math", grade: 5 },
      { id: "order-of-operations", name: "Order of operations", subject: "math", grade: 5 },
      { id: "measurement", name: "Measurement", subject: "math", grade: 5 },
      { id: "word-problems", name: "Word problems", subject: "math", grade: 5 },
    ],
    english: [
      { id: "vocabulary", name: "Vocabulary", subject: "english", grade: 5 },
      { id: "grammar", name: "Grammar", subject: "english", grade: 5 },
      { id: "reading", name: "Reading comprehension", subject: "english", grade: 5 },
      { id: "main-idea", name: "Main idea", subject: "english", grade: 5 },
      { id: "supporting-details", name: "Supporting details", subject: "english", grade: 5 },
      { id: "text-evidence", name: "Text evidence", subject: "english", grade: 5 },
      { id: "paragraph-writing", name: "Paragraph writing", subject: "english", grade: 5 },
      { id: "summaries", name: "Summaries", subject: "english", grade: 5 },
      { id: "sentence-flow", name: "Sentence flow", subject: "english", grade: 5 },
    ],
    science: [
      { id: "living-things", name: "Living things", subject: "science", grade: 5 },
      { id: "ecosystems", name: "Ecosystems", subject: "science", grade: 5 },
      { id: "matter", name: "Matter", subject: "science", grade: 5 },
      { id: "energy", name: "Energy", subject: "science", grade: 5 },
      { id: "space", name: "Space", subject: "science", grade: 5 },
      { id: "earth-systems", name: "Earth systems", subject: "science", grade: 5 },
      { id: "human-body", name: "The human body", subject: "science", grade: 5 },
      { id: "animal-care", name: "Animal care", subject: "science", grade: 5 },
    ],
  },
  6: {
    math: [
      { id: "fractions-decimals", name: "Fractions and decimals", subject: "math", grade: 6 },
      { id: "ratios", name: "Ratios", subject: "math", grade: 6 },
      { id: "rates", name: "Rates", subject: "math", grade: 6 },
      { id: "percentages", name: "Percentages", subject: "math", grade: 6 },
      { id: "negative-numbers", name: "Negative numbers", subject: "math", grade: 6 },
      { id: "expressions", name: "Expressions", subject: "math", grade: 6 },
      { id: "equations", name: "Simple equations", subject: "math", grade: 6 },
      { id: "geometry", name: "Geometry", subject: "math", grade: 6 },
      { id: "area-volume", name: "Area and volume", subject: "math", grade: 6 },
      { id: "word-problems", name: "Word problems", subject: "math", grade: 6 },
    ],
    english: [
      { id: "vocabulary", name: "Vocabulary", subject: "english", grade: 6 },
      { id: "grammar", name: "Grammar", subject: "english", grade: 6 },
      { id: "verb-forms", name: "Verb forms", subject: "english", grade: 6 },
      { id: "reading", name: "Reading comprehension", subject: "english", grade: 6 },
      { id: "main-idea", name: "Main idea", subject: "english", grade: 6 },
      { id: "supporting-details", name: "Supporting details", subject: "english", grade: 6 },
      { id: "text-evidence", name: "Text evidence", subject: "english", grade: 6 },
      { id: "paragraph-writing", name: "Paragraph writing", subject: "english", grade: 6 },
      { id: "summaries", name: "Summaries", subject: "english", grade: 6 },
      { id: "sentence-flow", name: "Sentence flow", subject: "english", grade: 6 },
    ],
    science: [
      { id: "cells", name: "Cells", subject: "science", grade: 6 },
      { id: "living-things", name: "Living things", subject: "science", grade: 6 },
      { id: "ecosystems", name: "Ecosystems", subject: "science", grade: 6 },
      { id: "matter", name: "Matter", subject: "science", grade: 6 },
      { id: "energy", name: "Energy", subject: "science", grade: 6 },
      { id: "earth-science", name: "Earth science", subject: "science", grade: 6 },
      { id: "weather", name: "Weather and climate", subject: "science", grade: 6 },
      { id: "space", name: "Space science", subject: "science", grade: 6 },
      { id: "human-body", name: "Human body systems", subject: "science", grade: 6 },
    ],
  },
  7: {
    math: [
      { id: "ratios", name: "Ratios and proportions", subject: "math", grade: 7 },
      { id: "percentages", name: "Percentages", subject: "math", grade: 7 },
      { id: "rational-numbers", name: "Rational numbers", subject: "math", grade: 7 },
      { id: "negative-numbers", name: "Positive and negative numbers", subject: "math", grade: 7 },
      { id: "algebra", name: "Algebra", subject: "math", grade: 7 },
      { id: "expressions", name: "Expressions", subject: "math", grade: 7 },
      { id: "equations", name: "Equations", subject: "math", grade: 7 },
      { id: "geometry", name: "Geometry", subject: "math", grade: 7 },
      { id: "probability", name: "Probability", subject: "math", grade: 7 },
      { id: "statistics", name: "Statistics", subject: "math", grade: 7 },
      { id: "word-problems", name: "Word problems", subject: "math", grade: 7 },
    ],
    english: [
      { id: "vocabulary", name: "Vocabulary", subject: "english", grade: 7 },
      { id: "grammar", name: "Grammar", subject: "english", grade: 7 },
      { id: "reading", name: "Reading comprehension", subject: "english", grade: 7 },
      { id: "main-idea", name: "Main idea", subject: "english", grade: 7 },
      { id: "supporting-details", name: "Supporting details", subject: "english", grade: 7 },
      { id: "text-evidence", name: "Text evidence", subject: "english", grade: 7 },
      { id: "paragraph-writing", name: "Paragraph writing", subject: "english", grade: 7 },
      { id: "sentence-flow", name: "Sentence flow", subject: "english", grade: 7 },
      { id: "summaries", name: "Summaries", subject: "english", grade: 7 },
      { id: "argument-writing", name: "Argument writing", subject: "english", grade: 7 },
      { id: "claims-evidence", name: "Claims and evidence", subject: "english", grade: 7 },
    ],
    science: [
      { id: "cells", name: "Cells and body systems", subject: "science", grade: 7 },
      { id: "genetics", name: "Genetics", subject: "science", grade: 7 },
      { id: "ecosystems", name: "Ecosystems", subject: "science", grade: 7 },
      { id: "forces", name: "Forces and motion", subject: "science", grade: 7 },
      { id: "matter", name: "Matter", subject: "science", grade: 7 },
      { id: "energy", name: "Energy", subject: "science", grade: 7 },
      { id: "earth-science", name: "Earth science", subject: "science", grade: 7 },
      { id: "weather", name: "Weather and climate", subject: "science", grade: 7 },
      { id: "space", name: "Space science", subject: "science", grade: 7 },
    ],
  },
  8: {
    math: [
      { id: "rational-numbers", name: "Rational numbers", subject: "math", grade: 8 },
      { id: "exponents", name: "Exponents", subject: "math", grade: 8 },
      { id: "scientific-notation", name: "Scientific notation", subject: "math", grade: 8 },
      { id: "linear-equations", name: "Linear equations", subject: "math", grade: 8 },
      { id: "systems", name: "Systems of equations", subject: "math", grade: 8 },
      { id: "functions", name: "Functions", subject: "math", grade: 8 },
      { id: "slope", name: "Slope", subject: "math", grade: 8 },
      { id: "geometry", name: "Geometry", subject: "math", grade: 8 },
      { id: "transformations", name: "Transformations", subject: "math", grade: 8 },
      { id: "statistics", name: "Statistics", subject: "math", grade: 8 },
      { id: "word-problems", name: "Word problems", subject: "math", grade: 8 },
    ],
    english: [
      { id: "vocabulary", name: "Vocabulary", subject: "english", grade: 8 },
      { id: "grammar", name: "Grammar", subject: "english", grade: 8 },
      { id: "reading", name: "Reading comprehension", subject: "english", grade: 8 },
      { id: "main-idea", name: "Main idea", subject: "english", grade: 8 },
      { id: "theme", name: "Theme", subject: "english", grade: 8 },
      { id: "text-evidence", name: "Text evidence", subject: "english", grade: 8 },
      { id: "compare-texts", name: "Comparing texts", subject: "english", grade: 8 },
      { id: "paragraph-writing", name: "Paragraph writing", subject: "english", grade: 8 },
      { id: "essay-writing", name: "Essay writing", subject: "english", grade: 8 },
      { id: "argument-writing", name: "Argument writing", subject: "english", grade: 8 },
      { id: "sentence-flow", name: "Sentence flow", subject: "english", grade: 8 },
      { id: "revision", name: "Revision and editing", subject: "english", grade: 8 },
    ],
    science: [
      { id: "cells", name: "Cells and genetics", subject: "science", grade: 8 },
      { id: "ecosystems", name: "Ecosystems", subject: "science", grade: 8 },
      { id: "forces", name: "Forces and motion", subject: "science", grade: 8 },
      { id: "energy", name: "Energy", subject: "science", grade: 8 },
      { id: "waves", name: "Waves", subject: "science", grade: 8 },
      { id: "matter", name: "Matter", subject: "science", grade: 8 },
      { id: "chemical-changes", name: "Chemical changes", subject: "science", grade: 8 },
      { id: "earth-systems", name: "Earth systems", subject: "science", grade: 8 },
      { id: "weather", name: "Weather and climate", subject: "science", grade: 8 },
      { id: "space", name: "Space science", subject: "science", grade: 8 },
    ],
  },
  9: {
    math: [
      { id: "expressions", name: "Algebraic expressions", subject: "math", grade: 9 },
      { id: "linear-equations", name: "Linear equations", subject: "math", grade: 9 },
      { id: "inequalities", name: "Linear inequalities", subject: "math", grade: 9 },
      { id: "systems", name: "Systems of equations", subject: "math", grade: 9 },
      { id: "functions", name: "Functions", subject: "math", grade: 9 },
      { id: "exponents", name: "Exponents", subject: "math", grade: 9 },
      { id: "polynomials", name: "Polynomials", subject: "math", grade: 9 },
      { id: "factoring", name: "Factoring", subject: "math", grade: 9 },
      { id: "coordinate-geometry", name: "Coordinate geometry", subject: "math", grade: 9 },
      { id: "statistics", name: "Statistics", subject: "math", grade: 9 },
      { id: "word-problems", name: "Word problems", subject: "math", grade: 9 },
    ],
    english: [
      { id: "academic-vocabulary", name: "Academic vocabulary", subject: "english", grade: 9 },
      { id: "grammar", name: "Grammar", subject: "english", grade: 9 },
      { id: "reading", name: "Reading comprehension", subject: "english", grade: 9 },
      { id: "theme", name: "Theme", subject: "english", grade: 9 },
      { id: "character-analysis", name: "Character analysis", subject: "english", grade: 9 },
      { id: "text-evidence", name: "Text evidence", subject: "english", grade: 9 },
      { id: "literary-analysis", name: "Literary analysis", subject: "english", grade: 9 },
      { id: "informational-texts", name: "Informational texts", subject: "english", grade: 9 },
      { id: "essay-structure", name: "Essay structure", subject: "english", grade: 9 },
      { id: "argument-writing", name: "Argument writing", subject: "english", grade: 9 },
      { id: "claims-evidence", name: "Claims and evidence", subject: "english", grade: 9 },
      { id: "revision", name: "Revision and editing", subject: "english", grade: 9 },
    ],
    science: [
      { id: "biology", name: "Biology", subject: "science", grade: 9 },
      { id: "cells", name: "Cells", subject: "science", grade: 9 },
      { id: "genetics", name: "Genetics", subject: "science", grade: 9 },
      { id: "evolution", name: "Evolution", subject: "science", grade: 9 },
      { id: "ecosystems", name: "Ecosystems", subject: "science", grade: 9 },
      { id: "matter", name: "Matter", subject: "science", grade: 9 },
      { id: "energy", name: "Energy", subject: "science", grade: 9 },
      { id: "forces", name: "Forces and motion", subject: "science", grade: 9 },
      { id: "earth-science", name: "Earth science", subject: "science", grade: 9 },
      { id: "environmental-science", name: "Environmental science", subject: "science", grade: 9 },
    ],
  },
  10: {
    math: [
      { id: "algebra", name: "Algebra", subject: "math", grade: 10 },
      { id: "quadratic-equations", name: "Quadratic equations", subject: "math", grade: 10 },
      { id: "functions", name: "Functions", subject: "math", grade: 10 },
      { id: "polynomials", name: "Polynomials", subject: "math", grade: 10 },
      { id: "exponents", name: "Exponents", subject: "math", grade: 10 },
      { id: "radicals", name: "Radicals", subject: "math", grade: 10 },
      { id: "coordinate-geometry", name: "Coordinate geometry", subject: "math", grade: 10 },
      { id: "triangle-geometry", name: "Triangle geometry", subject: "math", grade: 10 },
      { id: "circles", name: "Circles", subject: "math", grade: 10 },
      { id: "probability", name: "Probability", subject: "math", grade: 10 },
      { id: "statistics", name: "Statistics", subject: "math", grade: 10 },
      { id: "word-problems", name: "Multi-step word problems", subject: "math", grade: 10 },
    ],
    english: [
      { id: "academic-vocabulary", name: "Academic vocabulary", subject: "english", grade: 10 },
      { id: "advanced-grammar", name: "Advanced grammar", subject: "english", grade: 10 },
      { id: "reading", name: "Reading comprehension", subject: "english", grade: 10 },
      { id: "theme", name: "Theme and central idea", subject: "english", grade: 10 },
      { id: "literary-analysis", name: "Literary analysis", subject: "english", grade: 10 },
      { id: "text-evidence", name: "Text evidence", subject: "english", grade: 10 },
      { id: "comparing-sources", name: "Comparing sources", subject: "english", grade: 10 },
      { id: "research-skills", name: "Research skills", subject: "english", grade: 10 },
      { id: "essay-writing", name: "Essay writing", subject: "english", grade: 10 },
      { id: "argument-writing", name: "Argument writing", subject: "english", grade: 10 },
      { id: "claims-evidence", name: "Claims, evidence, and reasoning", subject: "english", grade: 10 },
      { id: "revision", name: "Revision and editing", subject: "english", grade: 10 },
    ],
    science: [
      { id: "biology", name: "Biology", subject: "science", grade: 10 },
      { id: "chemistry", name: "Chemistry", subject: "science", grade: 10 },
      { id: "physics", name: "Physics", subject: "science", grade: 10 },
      { id: "genetics", name: "Genetics", subject: "science", grade: 10 },
      { id: "ecosystems", name: "Ecosystems", subject: "science", grade: 10 },
      { id: "chemical-reactions", name: "Chemical reactions", subject: "science", grade: 10 },
      { id: "forces", name: "Forces and motion", subject: "science", grade: 10 },
      { id: "energy", name: "Energy", subject: "science", grade: 10 },
      { id: "waves", name: "Waves", subject: "science", grade: 10 },
      { id: "earth-science", name: "Earth science", subject: "science", grade: 10 },
      { id: "environmental-science", name: "Environmental science", subject: "science", grade: 10 },
    ],
  },
};

export function getLearningSections(grade: Grade, subject: Subject): LearningSection[] {
  return LEARNING_SECTIONS_BY_GRADE[grade][subject] ?? [];
}

function buildMathPrompt(grade: Grade, section: string): QuizItem {
  const baseA = 5 + grade;
  const baseB = 3 + (grade % 4);
  switch (section) {
    case "addition":
    case "addition-subtraction":
      return {
        prompt: `A rescue hotel has ${baseA} dog beds and ${baseB} cat beds. How many beds are there in all?`,
        options: [`${baseA + baseB}`, `${baseA - baseB}`, `${baseA * 2}`, `${baseA + 1}`],
        answer: 0,
        hint: "Add the two groups together.",
        example: "5 + 2 = 7.",
        steps: ["Count the first group.", "Count the second group.", "Put the groups together."],
      };
    case "subtraction":
      return {
        prompt: `The hotel used ${baseA + 4} towels. ${baseA} towels are clean. How many are not clean?`,
        options: [`${baseA + 4 - baseA}`, `${baseA + 2}`, `${baseA + 10}`, `${baseA - 1}`],
        answer: 0,
        hint: "Take away the clean towels.",
        example: "8 - 3 = 5.",
        steps: ["Start with the total.", "Take away the clean towels.", "Count what is left."],
      };
    case "word-problems":
      return {
        prompt: `${baseA} pets need a snack. ${baseB} snacks are already ready. How many more snacks are needed?`,
        options: [`${baseA - baseB}`, `${baseA + baseB}`, `${baseA * 2}`, `${baseA + 5}`],
        answer: 0,
        hint: "Find the missing part.",
        example: "7 - 2 = 5.",
        steps: ["Start with the total number of pets.", "Take away the snacks already ready.", "Count the missing snacks."],
      };
    default:
      return {
        prompt: `Choose the number that matches the rescue hotel count for ${section}.`,
        options: [`${baseA}`, `${baseA + 1}`, `${baseA + 2}`, `${baseA + 3}`],
        answer: 0,
        hint: "Look at the clue and count carefully.",
        example: "Count one by one.",
        steps: ["Read the clue.", "Count the items.", "Pick the matching number."],
      };
  }
}

function buildEnglishPrompt(section: string): QuizItem {
  switch (section) {
    case "letters":
      return {
        prompt: "Which letter comes after the letter A?",
        options: ["B", "C", "D", "E"],
        answer: 0,
        hint: "Think about the alphabet order.",
        example: "A comes before B.",
        steps: ["Say the alphabet.", "Find the next letter after A.", "Pick B."],
      };
    case "spelling":
      return {
        prompt: "Which word is spelled correctly?",
        options: ["cat", "czt", "caat", "catt"],
        answer: 0,
        hint: "Check each letter carefully.",
        example: "C-A-T spells cat.",
        steps: ["Look at each letter.", "Match the letters to the word.", "Choose the correct spelling."],
      };
    case "sentence-order":
      return {
        prompt: "Which sentence is in the right order?",
        options: ["The dog runs fast.", "Runs fast the dog.", "Fast the dog runs.", "Dog the fast runs."],
        answer: 0,
        hint: "A sentence usually starts with the naming word.",
        example: "The cat sleeps.",
        steps: ["Start with the naming word.", "Add the action.", "Finish the sentence."],
      };
    default:
      return {
        prompt: `Choose the best word for the rescue hotel story about ${section}.`,
        options: ["safe", "jump", "blue", "quick"],
        answer: 0,
        hint: "Think about the meaning.",
        example: "A safe home is a kind home.",
        steps: ["Read the clue.", "Think about the meaning.", "Pick the best word."],
      };
  }
}

function buildSciencePrompt(section: string): QuizItem {
  switch (section) {
    case "plants":
      return {
        prompt: "What do plants need to grow?",
        options: ["Sunlight and water", "Sand and rocks", "Snow and ice", "Mud and smoke"],
        answer: 0,
        hint: "Plants grow with help from nature.",
        example: "A plant needs water and light.",
        steps: ["Think about what helps a plant live.", "Use the clue.", "Choose the best answer."],
      };
    case "animals":
      return {
        prompt: "Which animal can live in a rescue hotel?",
        options: ["Dog", "Rock", "Cloud", "Desk"],
        answer: 0,
        hint: "Choose a living animal.",
        example: "A dog is a living animal.",
        steps: ["Think about living things.", "Pick the animal.", "Choose the correct answer."],
      };
    case "weather":
      return {
        prompt: "What do we wear when the weather is cold?",
        options: ["A coat", "A swimsuit", "Sunglasses", "A hat"],
        answer: 0,
        hint: "Cold weather needs warm clothes.",
        example: "A coat helps keep us warm.",
        steps: ["Think about the weather.", "Pick a warm item.", "Choose the best answer."],
      };
    default:
      return {
        prompt: `Which idea fits the rescue hotel topic ${section}?`,
        options: ["Helpful", "Silent", "Empty", "Dark"],
        answer: 0,
        hint: "Look for the best idea.",
        example: "A warm home is helpful.",
        steps: ["Read the clue.", "Think about the topic.", "Pick the best answer."],
      };
  }
}

export function buildLearningQuestion(grade: Grade, subject: Subject, sectionId: string): Question {
  const section = getLearningSections(grade, subject).find((item) => item.id === sectionId)?.name ?? sectionId;
  const base = subject === "math"
    ? buildMathPrompt(grade, sectionId)
    : subject === "english"
      ? buildEnglishPrompt(sectionId)
      : buildSciencePrompt(sectionId);
  return {
    id: `${subject}-${sectionId}-${grade}`,
    subject,
    skill: `${subject}-${sectionId}`,
    grade,
    prompt: base.prompt,
    options: base.options,
    answer: base.answer,
    hint: base.hint,
    example: base.example,
    steps: base.steps,
    practice: {
      ...base,
      prompt: `${base.prompt} Try the similar rescue hotel question.`,
      options: [...base.options],
    },
  };
}

export function getGradeLabel(grade: Grade): string {
  return `Grade ${grade}`;
}

export interface SkillInfo {
  id: string;
  subject: Subject;
  name: string;
  friendly: string;
}

export const SKILLS: SkillInfo[] = [
  { id: "add-sub", subject: "math", name: "Addition and subtraction", friendly: "Plus and Minus Power" },
  { id: "mul-div", subject: "math", name: "Multiplication and division", friendly: "Times and Share Power" },
  { id: "fractions", subject: "math", name: "Comparing fractions", friendly: "Fraction Power" },
  { id: "area-perimeter", subject: "math", name: "Area and perimeter", friendly: "Shape Space Power" },
  { id: "word-problems", subject: "math", name: "Word problems", friendly: "Story Math Power" },
  { id: "vocabulary", subject: "english", name: "Vocabulary", friendly: "Word Wizard Power" },
  { id: "grammar", subject: "english", name: "Verb forms and grammar", friendly: "Grammar Power" },
  { id: "sentence-order", subject: "english", name: "Sentence order", friendly: "Sentence Builder Power" },
  { id: "main-idea", subject: "english", name: "Main idea", friendly: "Big Idea Power" },
  { id: "writing", subject: "english", name: "Writing skills", friendly: "Super Writing Power" },
  { id: "plants", subject: "science", name: "Plants", friendly: "Plant Power" },
  { id: "animals", subject: "science", name: "Animals", friendly: "Animal Helper Power" },
  { id: "earth", subject: "science", name: "Earth", friendly: "Earth Explorer Power" },
  { id: "weather", subject: "science", name: "Weather", friendly: "Weather Watcher Power" },
  { id: "matter", subject: "science", name: "Matter", friendly: "Matter Magic Power" },
];

export const skillById = (id: string): SkillInfo =>
  SKILLS.find((s) => s.id === id) ?? SKILLS[0]!;

export const QUESTIONS: Question[] = [
  // ---------------- MATH ----------------
  {
    id: "m-as-3",
    subject: "math",
    skill: "add-sub",
    grade: 3,
    prompt: "The park has 128 birds. 45 birds fly away. How many birds are left?",
    options: ["73", "83", "93", "173"],
    answer: 1,
    hint: "Take away means subtract. Start with the big number.",
    example: "Like this: 50 - 20 = 30.",
    steps: ["Write 128 - 45.", "Take away 40: 128 - 40 = 88.", "Take away 5 more: 88 - 5 = 83.", "So 83 birds are left."],
    practice: {
      prompt: "The park has 136 birds. 52 birds fly away. How many birds are left?",
      options: ["74", "84", "94", "88"],
      answer: 1,
      hint: "Subtract the tens first, then the ones.",
      example: "Like this: 60 - 20 = 40.",
      steps: ["136 - 50 = 86.", "86 - 2 = 84.", "So 84 birds are left."],
    },
  },
  {
    id: "m-as-4",
    subject: "math",
    skill: "add-sub",
    grade: 4,
    prompt: "A gate needs 1,250 nails. The team has 890 nails. How many more nails do they need?",
    options: ["260", "340", "360", "460"],
    answer: 2,
    hint: "Find the missing part: big number minus small number.",
    example: "Like this: 100 - 40 = 60.",
    steps: ["Write 1250 - 890.", "1250 - 800 = 450.", "450 - 90 = 360.", "They need 360 more nails."],
    practice: {
      prompt: "A gate needs 1,340 nails. The team has 760 nails. How many more nails do they need?",
      options: ["480", "520", "580", "640"],
      answer: 2,
      hint: "Subtract the hundreds, then the tens.",
      example: "Like this: 200 - 60 = 140.",
      steps: ["1340 - 700 = 640.", "640 - 60 = 580.", "They need 580 more nails."],
    },
  },
  {
    id: "m-as-5",
    subject: "math",
    skill: "add-sub",
    grade: 5,
    prompt: "A space station used 3,450 liters of water and 2,675 liters of fuel. How much did it use in all?",
    options: ["5,025", "6,025", "6,125", "6,225"],
    answer: 2,
    hint: "In all means add.",
    example: "Like this: 300 + 200 = 500.",
    steps: ["Add thousands: 3000 + 2000 = 5000.", "Add hundreds: 400 + 600 = 1000.", "Add the rest: 50 + 75 = 125.", "5000 + 1000 + 125 = 6,125."],
    practice: {
      prompt: "A rover used 2,540 liters of water and 1,860 liters of fuel. How much in all?",
      options: ["4,300", "4,400", "4,500", "3,400"],
      answer: 1,
      hint: "Add the thousands first.",
      example: "Like this: 500 + 500 = 1000.",
      steps: ["2000 + 1000 = 3000.", "500 + 800 = 1300.", "40 + 60 = 100.", "3000 + 1300 + 100 = 4,400."],
    },
  },
  {
    id: "m-md-3",
    subject: "math",
    skill: "mul-div",
    grade: 3,
    prompt: "6 cages hold 4 rabbits each. How many rabbits are there?",
    options: ["10", "18", "24", "28"],
    answer: 2,
    hint: "Equal groups means multiply.",
    example: "Like this: 3 groups of 4 = 12.",
    steps: ["6 groups of 4.", "6 x 4 = 24.", "There are 24 rabbits."],
    practice: {
      prompt: "7 cages hold 5 rabbits each. How many rabbits are there?",
      options: ["12", "30", "35", "40"],
      answer: 2,
      hint: "Count by 5 seven times.",
      example: "Like this: 2 groups of 5 = 10.",
      steps: ["7 x 5 = 35.", "There are 35 rabbits."],
    },
  },
  {
    id: "m-md-4",
    subject: "math",
    skill: "mul-div",
    grade: 4,
    prompt: "56 apples are shared equally into 8 baskets. How many apples in each basket?",
    options: ["6", "7", "8", "9"],
    answer: 1,
    hint: "Shared equally means divide.",
    example: "Like this: 20 shared into 4 = 5.",
    steps: ["Write 56 ÷ 8.", "Think: 8 x ? = 56.", "8 x 7 = 56.", "Each basket gets 7 apples."],
    practice: {
      prompt: "63 apples are shared equally into 9 baskets. How many apples in each basket?",
      options: ["6", "7", "8", "9"],
      answer: 1,
      hint: "Think of the 9 times table.",
      example: "Like this: 18 shared into 9 = 2.",
      steps: ["63 ÷ 9.", "9 x 7 = 63.", "Each basket gets 7 apples."],
    },
  },
  {
    id: "m-md-5",
    subject: "math",
    skill: "mul-div",
    grade: 5,
    prompt: "A robot builds 24 panels each hour. How many panels does it build in 15 hours?",
    options: ["240", "320", "360", "380"],
    answer: 2,
    hint: "Break 15 into 10 and 5.",
    example: "Like this: 24 x 10 = 240.",
    steps: ["24 x 10 = 240.", "24 x 5 = 120.", "240 + 120 = 360 panels."],
    practice: {
      prompt: "A robot builds 32 panels each hour. How many panels in 12 hours?",
      options: ["354", "364", "374", "384"],
      answer: 3,
      hint: "Break 12 into 10 and 2.",
      example: "Like this: 32 x 10 = 320.",
      steps: ["32 x 10 = 320.", "32 x 2 = 64.", "320 + 64 = 384 panels."],
    },
  },
  {
    id: "m-fr-3",
    subject: "math",
    skill: "fractions",
    grade: 3,
    prompt: "Which fraction is greater: 3/5 or 3/8?",
    options: ["3/5", "3/8", "They are equal", "You cannot tell"],
    answer: 0,
    hint: "The top numbers are the same. Look at the bottom numbers.",
    example: "A cake cut into 5 pieces gives bigger pieces than a cake cut into 8 pieces.",
    steps: ["Both have 3 parts.", "Fifths are bigger pieces than eighths.", "So 3/5 is greater than 3/8."],
    practice: {
      prompt: "Which fraction is greater: 4/7 or 4/9?",
      options: ["4/7", "4/9", "They are equal", "You cannot tell"],
      answer: 0,
      hint: "Same top number. Smaller bottom number means bigger pieces.",
      example: "7 pieces of pizza are bigger than 9 pieces of the same pizza.",
      steps: ["Both have 4 parts.", "Sevenths are bigger than ninths.", "So 4/7 is greater."],
    },
  },
  {
    id: "m-fr-4",
    subject: "math",
    skill: "fractions",
    grade: 4,
    prompt: "Which fraction is greater: 2/3 or 5/6?",
    options: ["2/3", "5/6", "They are equal", "You cannot tell"],
    answer: 1,
    hint: "Make the bottom numbers the same.",
    example: "1/2 = 2/4. Same size, new name.",
    steps: ["Change 2/3 to sixths: 2/3 = 4/6.", "Compare 4/6 and 5/6.", "5/6 has more pieces, so 5/6 is greater."],
    practice: {
      prompt: "Which fraction is greater: 3/4 or 7/8?",
      options: ["3/4", "7/8", "They are equal", "You cannot tell"],
      answer: 1,
      hint: "Change 3/4 into eighths.",
      example: "1/4 = 2/8.",
      steps: ["3/4 = 6/8.", "Compare 6/8 and 7/8.", "7/8 is greater."],
    },
  },
  {
    id: "m-fr-5",
    subject: "math",
    skill: "fractions",
    grade: 5,
    prompt: "What is 1/4 + 3/8?",
    options: ["4/12", "5/8", "1/2", "4/8"],
    answer: 1,
    hint: "Make both fractions have the same bottom number.",
    example: "1/2 + 1/4 = 2/4 + 1/4 = 3/4.",
    steps: ["1/4 = 2/8.", "2/8 + 3/8 = 5/8.", "The answer is 5/8."],
    practice: {
      prompt: "What is 1/3 + 2/9?",
      options: ["3/12", "5/9", "3/9", "2/3"],
      answer: 1,
      hint: "Change 1/3 into ninths.",
      example: "1/3 = 3/9.",
      steps: ["1/3 = 3/9.", "3/9 + 2/9 = 5/9.", "The answer is 5/9."],
    },
  },
  {
    id: "m-ap-3",
    subject: "math",
    skill: "area-perimeter",
    grade: 3,
    prompt: "A garden is 6 m long and 4 m wide. What is the perimeter?",
    options: ["10 m", "20 m", "24 m", "14 m"],
    answer: 1,
    hint: "Perimeter is the path all the way around.",
    example: "Walk each side and add them.",
    steps: ["Sides are 6, 4, 6, 4.", "6 + 4 + 6 + 4 = 20.", "The perimeter is 20 m."],
    practice: {
      prompt: "A garden is 7 m long and 5 m wide. What is the perimeter?",
      options: ["12 m", "24 m", "35 m", "22 m"],
      answer: 1,
      hint: "Add all four sides.",
      example: "7 + 5 + 7 + 5.",
      steps: ["7 + 5 = 12.", "12 + 12 = 24.", "The perimeter is 24 m."],
    },
  },
  {
    id: "m-ap-4",
    subject: "math",
    skill: "area-perimeter",
    grade: 4,
    prompt: "A classroom floor is 9 m long and 6 m wide. What is the area?",
    options: ["15 sq m", "30 sq m", "54 sq m", "45 sq m"],
    answer: 2,
    hint: "Area is length times width.",
    example: "A 2 x 3 rug has an area of 6 squares.",
    steps: ["Area = length x width.", "9 x 6 = 54.", "The area is 54 square meters."],
    practice: {
      prompt: "A classroom floor is 8 m long and 7 m wide. What is the area?",
      options: ["15 sq m", "30 sq m", "56 sq m", "64 sq m"],
      answer: 2,
      hint: "Multiply the two side lengths.",
      example: "3 x 4 = 12 squares.",
      steps: ["8 x 7 = 56.", "The area is 56 square meters."],
    },
  },
  {
    id: "m-ap-5",
    subject: "math",
    skill: "area-perimeter",
    grade: 5,
    prompt: "A space garden is 12 m by 5 m. What is the area?",
    options: ["17 sq m", "34 sq m", "50 sq m", "60 sq m"],
    answer: 3,
    hint: "Multiply the length by the width.",
    example: "10 x 5 = 50, then add 2 x 5.",
    steps: ["12 x 5 = (10 x 5) + (2 x 5).", "50 + 10 = 60.", "The area is 60 square meters."],
    practice: {
      prompt: "A space garden is 14 m by 6 m. What is the area?",
      options: ["20 sq m", "40 sq m", "74 sq m", "84 sq m"],
      answer: 3,
      hint: "Break 14 into 10 and 4.",
      example: "10 x 6 = 60.",
      steps: ["10 x 6 = 60.", "4 x 6 = 24.", "60 + 24 = 84 square meters."],
    },
  },
  {
    id: "m-wp-3",
    subject: "math",
    skill: "word-problems",
    grade: 3,
    prompt: "Maya has 15 fish food cups. She gives 3 cups to each pond. How many ponds can she feed?",
    options: ["3", "4", "5", "6"],
    answer: 2,
    hint: "She is sharing into equal groups, so divide.",
    example: "12 shared into groups of 3 makes 4 groups.",
    steps: ["Write 15 ÷ 3.", "3 x 5 = 15.", "She can feed 5 ponds."],
    practice: {
      prompt: "Maya has 18 fish food cups. She gives 3 cups to each pond. How many ponds?",
      options: ["4", "5", "6", "7"],
      answer: 2,
      hint: "Divide the total by the group size.",
      example: "9 ÷ 3 = 3.",
      steps: ["18 ÷ 3.", "3 x 6 = 18.", "She can feed 6 ponds."],
    },
  },
  {
    id: "m-wp-4",
    subject: "math",
    skill: "word-problems",
    grade: 4,
    prompt: "A bridge needs 8 planks for each meter. The bridge is 12 m long. How many planks are needed?",
    options: ["20", "86", "96", "108"],
    answer: 2,
    hint: "Same amount for each meter means multiply.",
    example: "8 planks x 2 meters = 16 planks.",
    steps: ["8 x 12.", "8 x 10 = 80 and 8 x 2 = 16.", "80 + 16 = 96 planks."],
    practice: {
      prompt: "A bridge needs 7 planks for each meter. The bridge is 14 m long. How many planks?",
      options: ["78", "88", "98", "108"],
      answer: 2,
      hint: "Break 14 into 10 and 4.",
      example: "7 x 10 = 70.",
      steps: ["7 x 10 = 70.", "7 x 4 = 28.", "70 + 28 = 98 planks."],
    },
  },
  {
    id: "m-wp-5",
    subject: "math",
    skill: "word-problems",
    grade: 5,
    prompt: "A school buys 4 boxes of books. Each box has 25 books. 12 books are damaged. How many good books are left?",
    options: ["78", "88", "92", "100"],
    answer: 1,
    hint: "Do two steps: multiply first, then subtract.",
    example: "2 boxes of 10 = 20, then take away 5 = 15.",
    steps: ["4 x 25 = 100 books.", "100 - 12 = 88.", "There are 88 good books."],
    practice: {
      prompt: "A school buys 5 boxes of books. Each box has 20 books. 15 books are damaged. How many good books are left?",
      options: ["75", "80", "85", "95"],
      answer: 2,
      hint: "Multiply first, then take away.",
      example: "3 x 10 = 30, then 30 - 5 = 25.",
      steps: ["5 x 20 = 100.", "100 - 15 = 85.", "There are 85 good books."],
    },
  },

  // ---------------- ENGLISH ----------------
  {
    id: "e-vo-3",
    subject: "english",
    skill: "vocabulary",
    grade: 3,
    prompt: "The note says the puppy is 'gigantic'. What does gigantic mean?",
    options: ["Very small", "Very big", "Very fast", "Very soft"],
    answer: 1,
    hint: "Think of a word that sounds like giant.",
    example: "A gigantic tree is a very big tree.",
    steps: ["Gigantic comes from the word giant.", "A giant is very big.", "So gigantic means very big."],
    practice: {
      prompt: "The clue says the cave is 'enormous'. What does enormous mean?",
      options: ["Very big", "Very cold", "Very quiet", "Very old"],
      answer: 0,
      hint: "Enormous is another word for huge.",
      example: "An enormous whale is a very big whale.",
      steps: ["Enormous means huge.", "Huge means very big.", "So the answer is very big."],
    },
  },
  {
    id: "e-vo-5",
    subject: "english",
    skill: "vocabulary",
    grade: 5,
    prompt: "Which word means almost the same as 'brave'?",
    options: ["Shy", "Courageous", "Sleepy", "Careless"],
    answer: 1,
    hint: "Look for a word about being strong in a scary moment.",
    example: "A brave firefighter is a courageous firefighter.",
    steps: ["Brave means not afraid to try.", "Courageous also means not afraid.", "So courageous is the answer."],
    practice: {
      prompt: "Which word means almost the same as 'happy'?",
      options: ["Cheerful", "Angry", "Tired", "Hungry"],
      answer: 0,
      hint: "Look for a word with a good feeling.",
      example: "A happy song is a cheerful song.",
      steps: ["Happy means glad.", "Cheerful also means glad.", "So cheerful is the answer."],
    },
  },
  {
    id: "e-gr-3",
    subject: "english",
    skill: "grammar",
    grade: 3,
    prompt: "Choose the correct verb: Yesterday we ____ to the animal park.",
    options: ["go", "goes", "went", "going"],
    answer: 2,
    hint: "Yesterday means the past.",
    example: "Today I run. Yesterday I ran.",
    steps: ["The word yesterday tells us it already happened.", "The past form of go is went.", "So: Yesterday we went to the animal park."],
    practice: {
      prompt: "Choose the correct verb: Last night she ____ a story.",
      options: ["write", "writes", "wrote", "writing"],
      answer: 2,
      hint: "Last night means the past.",
      example: "Today I eat. Yesterday I ate.",
      steps: ["Last night is in the past.", "The past form of write is wrote.", "So: Last night she wrote a story."],
    },
  },
  {
    id: "e-gr-5",
    subject: "english",
    skill: "grammar",
    grade: 5,
    prompt: "Choose the correct verb: The puppies ____ playing in the garden.",
    options: ["is", "are", "was", "am"],
    answer: 1,
    hint: "Puppies means more than one.",
    example: "One dog is running. Two dogs are running.",
    steps: ["Puppies is plural (more than one).", "Plural subjects use are.", "So: The puppies are playing."],
    practice: {
      prompt: "Choose the correct verb: The birds ____ singing loudly.",
      options: ["is", "are", "am", "was"],
      answer: 1,
      hint: "Birds means more than one.",
      example: "One cat is sleeping. Two cats are sleeping.",
      steps: ["Birds is plural.", "Plural subjects use are.", "So: The birds are singing."],
    },
  },
  {
    id: "e-so-3",
    subject: "english",
    skill: "sentence-order",
    grade: 3,
    prompt: "Put the words in order: park / the / we / cleaned",
    options: ["We cleaned the park.", "Cleaned we the park.", "The park we cleaned.", "Park the we cleaned."],
    answer: 0,
    hint: "Start with who did it.",
    example: "Who + action + what. I ate the apple.",
    steps: ["Who? We.", "Did what? cleaned.", "What thing? the park.", "We cleaned the park."],
    practice: {
      prompt: "Put the words in order: map / found / a / they",
      options: ["Found they a map.", "They found a map.", "A map they found.", "Map a they found."],
      answer: 1,
      hint: "Start with who did it.",
      example: "Who + action + what.",
      steps: ["Who? They.", "Did what? found.", "What? a map.", "They found a map."],
    },
  },
  {
    id: "e-so-5",
    subject: "english",
    skill: "sentence-order",
    grade: 5,
    prompt: "Put the words in order: island / quietly / the / explored / we",
    options: ["We quietly explored the island.", "Quietly we the island explored.", "The island explored we quietly.", "Explored we the island quietly."],
    answer: 0,
    hint: "Who comes first. The describing word goes before the action.",
    example: "She slowly opened the box.",
    steps: ["Who? We.", "How? quietly.", "Action? explored.", "What? the island.", "We quietly explored the island."],
    practice: {
      prompt: "Put the words in order: rocket / carefully / the / built / they",
      options: ["Built they the rocket carefully.", "They carefully built the rocket.", "Carefully the rocket they built.", "The rocket built they carefully."],
      answer: 1,
      hint: "Who + how + action + what.",
      example: "He gently held the puppy.",
      steps: ["Who? They.", "How? carefully.", "Action? built.", "What? the rocket.", "They carefully built the rocket."],
    },
  },
  {
    id: "e-mi-3",
    subject: "english",
    skill: "main-idea",
    grade: 3,
    prompt: "Read: 'Bees fly from flower to flower. They carry pollen. This helps new plants grow.' What is the main idea?",
    options: ["Bees are yellow.", "Bees help plants grow.", "Flowers smell nice.", "Bees can sting."],
    answer: 1,
    hint: "The main idea is what most of the sentences talk about.",
    example: "If every line is about rain, the main idea is rain.",
    steps: ["Line 1 and 2 are about bees moving pollen.", "Line 3 says this helps plants grow.", "So the main idea is: bees help plants grow."],
    practice: {
      prompt: "Read: 'Ants work in teams. They carry food together. A team can move big pieces.' What is the main idea?",
      options: ["Ants are small.", "Ants like sugar.", "Ants work together as a team.", "Ants live in gardens."],
      answer: 2,
      hint: "Look for the idea in every sentence.",
      example: "All lines talk about teamwork.",
      steps: ["Every line talks about ants working together.", "So the main idea is teamwork."],
    },
  },
  {
    id: "e-mi-5",
    subject: "english",
    skill: "main-idea",
    grade: 5,
    prompt: "Read: 'The park lost many trees in the storm. Students planted new ones. Soon birds came back.' What is the main idea?",
    options: ["Storms are loud.", "Students helped the park come back to life.", "Birds like trees.", "Trees are tall."],
    answer: 1,
    hint: "Ask: what is the whole story about?",
    example: "Beginning, middle, and end all point to one big idea.",
    steps: ["A problem: trees were lost.", "An action: students planted trees.", "A result: birds returned.", "Main idea: students helped the park come back to life."],
    practice: {
      prompt: "Read: 'The pond was full of trash. Kids cleaned it every Saturday. Now fish swim there again.' What is the main idea?",
      options: ["Fish are fast.", "Saturdays are fun.", "Kids cleaned the pond and helped the fish return.", "Trash is heavy."],
      answer: 2,
      hint: "Problem, action, result.",
      example: "The big idea holds the whole story.",
      steps: ["Problem: trash.", "Action: kids cleaned.", "Result: fish came back.", "Main idea: kids cleaned the pond and helped the fish return."],
    },
  },
  {
    id: "e-wr-4",
    subject: "english",
    skill: "writing",
    grade: 4,
    prompt: "Which sentence is written correctly?",
    options: ["my puppy runs fast", "My puppy runs fast.", "My puppy runs fast", "my Puppy runs fast."],
    answer: 1,
    hint: "Look at the first letter and the last mark.",
    example: "The cat sleeps.",
    steps: ["A sentence starts with a capital letter.", "A sentence ends with a full stop.", "'My puppy runs fast.' has both."],
    practice: {
      prompt: "Which sentence is written correctly?",
      options: ["we found a shell.", "We found a shell", "We found a shell.", "we Found a shell"],
      answer: 2,
      hint: "Capital letter at the start, full stop at the end.",
      example: "The sun is hot.",
      steps: ["Start with a capital W.", "End with a full stop.", "So 'We found a shell.' is correct."],
    },
  },
  {
    id: "e-wr-5",
    subject: "english",
    skill: "writing",
    grade: 5,
    prompt: "Which sentence gives the best detail?",
    options: ["The dog ran.", "The dog was nice.", "The small brown dog ran across the wet grass.", "It ran."],
    answer: 2,
    hint: "Good writing shows a picture in your head.",
    example: "Instead of 'a bird', write 'a tiny blue bird'.",
    steps: ["Look for describing words.", "'Small brown' and 'wet grass' paint a picture.", "So the third sentence is best."],
    practice: {
      prompt: "Which sentence gives the best detail?",
      options: ["The cat sat.", "The fluffy white cat sat on the warm window seat.", "It sat there.", "The cat was good."],
      answer: 1,
      hint: "Choose the sentence with strong describing words.",
      example: "'A red apple' is better than 'a thing'.",
      steps: ["Look for describing words.", "'Fluffy white' and 'warm window seat' show a picture.", "So the second sentence is best."],
    },
  },

  // ---------------- SCIENCE ----------------
  {
    id: "s-pl-3",
    subject: "science",
    skill: "plants",
    grade: 3,
    prompt: "Which part of a plant takes in water from the soil?",
    options: ["Leaf", "Root", "Flower", "Seed"],
    answer: 1,
    hint: "Think about the part under the ground.",
    example: "Roots are like straws for the plant.",
    steps: ["Roots grow under the soil.", "They drink water and hold the plant.", "So the answer is root."],
    practice: {
      prompt: "Which part of a plant makes food using sunlight?",
      options: ["Root", "Leaf", "Stem", "Seed"],
      answer: 1,
      hint: "Think about the flat green part.",
      example: "Leaves catch sunlight like little solar panels.",
      steps: ["Leaves catch sunlight.", "They make food for the plant.", "So the answer is leaf."],
    },
  },
  {
    id: "s-an-4",
    subject: "science",
    skill: "animals",
    grade: 4,
    prompt: "A sick fox in the park needs help. What do all animals need to stay alive?",
    options: ["Toys and books", "Food, water, air, and shelter", "Only sunlight", "Only friends"],
    answer: 1,
    hint: "Think about what you need every day too.",
    example: "You need food, water, and a safe home.",
    steps: ["Animals need food for energy.", "They need water and air.", "They need shelter to stay safe.", "So the answer is food, water, air, and shelter."],
    practice: {
      prompt: "What helps a polar bear stay warm in the cold?",
      options: ["Thin skin", "Thick fur and fat", "Long legs", "Sharp eyes"],
      answer: 1,
      hint: "Think about a warm winter coat.",
      example: "Fur works like a jacket.",
      steps: ["Fur keeps heat inside.", "Fat keeps the body warm too.", "So thick fur and fat is the answer."],
    },
  },
  {
    id: "s-ea-4",
    subject: "science",
    skill: "earth",
    grade: 4,
    prompt: "Which of these is a natural resource we should save?",
    options: ["Plastic bags", "Water", "Toys", "Paper cups"],
    answer: 1,
    hint: "A natural resource comes from nature.",
    example: "Water, air, and trees come from nature.",
    steps: ["Natural resources come from Earth.", "Water comes from rivers and rain.", "So water is the answer."],
    practice: {
      prompt: "Which of these comes from nature?",
      options: ["Trees", "Plastic straws", "Toy cars", "Glue sticks"],
      answer: 0,
      hint: "Which one grows by itself?",
      example: "Trees grow in forests.",
      steps: ["Trees grow in nature.", "The other things are made by people.", "So trees is the answer."],
    },
  },
  {
    id: "s-we-3",
    subject: "science",
    skill: "weather",
    grade: 3,
    prompt: "What tool do we use to measure temperature?",
    options: ["Ruler", "Thermometer", "Clock", "Scale"],
    answer: 1,
    hint: "It tells you how hot or cold it is.",
    example: "A thermometer shows degrees.",
    steps: ["Temperature means hot or cold.", "A thermometer measures it.", "So the answer is thermometer."],
    practice: {
      prompt: "What tool shows which way the wind blows?",
      options: ["Wind vane", "Thermometer", "Ruler", "Cup"],
      answer: 0,
      hint: "It spins on a roof.",
      example: "A wind vane points into the wind.",
      steps: ["Wind has a direction.", "A wind vane shows the direction.", "So the answer is wind vane."],
    },
  },
  {
    id: "s-ma-5",
    subject: "science",
    skill: "matter",
    grade: 5,
    prompt: "Water turns into ice. What is this change called?",
    options: ["Melting", "Freezing", "Boiling", "Mixing"],
    answer: 1,
    hint: "Think about a very cold freezer.",
    example: "Juice in a freezer turns into an ice pop.",
    steps: ["Liquid water gets very cold.", "It becomes a solid.", "Liquid to solid is called freezing."],
    practice: {
      prompt: "Ice turns into water. What is this change called?",
      options: ["Freezing", "Melting", "Blowing", "Mixing"],
      answer: 1,
      hint: "Think about ice cream on a hot day.",
      example: "An ice cube on your hand turns into water.",
      steps: ["Solid ice gets warm.", "It becomes a liquid.", "Solid to liquid is called melting."],
    },
  },
];

export interface AdventureStep {
  story: string;
  subject: Subject;
  skill: string;
}

export interface Adventure {
  id: string;
  title: string;
  emoji: string;
  blurb: string;
  color: "sunny" | "mint" | "sky" | "berry";
  steps: AdventureStep[];
}

export const ADVENTURES: Adventure[] = [
  {
    id: "animal-park",
    title: "Save the Animal Park",
    emoji: "🦁",
    blurb: "The park needs help! Feed the animals and fix the gate.",
    color: "sunny",
    steps: [
      { story: "Count the birds so we know who is missing.", subject: "math", skill: "add-sub" },
      { story: "Read the ranger's note to find the clue.", subject: "english", skill: "vocabulary" },
      { story: "Share the food fairly between the ponds.", subject: "math", skill: "word-problems" },
      { story: "A fox needs care. Answer to help it!", subject: "science", skill: "animals" },
      { story: "Fix the sign with the right words.", subject: "english", skill: "grammar" },
      { story: "Measure the new fence around the garden.", subject: "math", skill: "area-perimeter" },
    ],
  },
  {
    id: "mystery-island",
    title: "Explore Mystery Island",
    emoji: "🏝️",
    blurb: "Follow the map, read clues, and find the hidden treasure.",
    color: "mint",
    steps: [
      { story: "Read the message in the bottle.", subject: "english", skill: "main-idea" },
      { story: "Compare the two paths on the map.", subject: "math", skill: "fractions" },
      { story: "Put the clue words in the right order.", subject: "english", skill: "sentence-order" },
      { story: "Count the coconuts for the trip.", subject: "math", skill: "mul-div" },
      { story: "Name the plant part that drinks water.", subject: "science", skill: "plants" },
      { story: "Read the old sign near the cave.", subject: "english", skill: "vocabulary" },
    ],
  },
  {
    id: "space-station",
    title: "Build a Space Station",
    emoji: "🚀",
    blurb: "Build panels, save water, and get the station ready.",
    color: "sky",
    steps: [
      { story: "Add the water and fuel for lift off.", subject: "math", skill: "add-sub" },
      { story: "Build the panels with the robot.", subject: "math", skill: "mul-div" },
      { story: "Read the mission log out loud.", subject: "english", skill: "writing" },
      { story: "Plan the space garden floor.", subject: "math", skill: "area-perimeter" },
      { story: "Water turns to ice in space. Why?", subject: "science", skill: "matter" },
      { story: "Fix the crew message.", subject: "english", skill: "grammar" },
    ],
  },
  {
    id: "dream-school",
    title: "Create a Dream School",
    emoji: "🏫",
    blurb: "Design classrooms, order books, and make a happy school.",
    color: "berry",
    steps: [
      { story: "Order the new books for the library.", subject: "math", skill: "word-problems" },
      { story: "Write the school notice the best way.", subject: "english", skill: "writing" },
      { story: "Measure the classroom floor.", subject: "math", skill: "area-perimeter" },
      { story: "Share the pizza slices at lunch.", subject: "math", skill: "fractions" },
      { story: "Find the main idea of the school story.", subject: "english", skill: "main-idea" },
      { story: "Pick the tool for the weather club.", subject: "science", skill: "weather" },
    ],
  },
];

export function pickQuestion(subject: Subject, skill: string, grade: Grade): Question {
  const pool = QUESTIONS.filter((q) => q.subject === subject && q.skill === skill);
  if (pool.length > 0) {
    return pool.reduce(
      (best, q) => (Math.abs(q.grade - grade) < Math.abs(best.grade - grade) ? q : best),
      pool[0]!,
    );
  }
  return buildLearningQuestion(grade, subject, skill.replace(`${subject}-`, ""));
}

export const questionById = (id: string): Question | undefined =>
  QUESTIONS.find((q) => q.id === id);

export interface PuppyBreed {
  id: string;
  name: string;
  emoji: string;
}

const DOG_BREEDS = [
  "Golden Retriever",
  "Labrador Retriever",
  "Beagle",
  "Bulldog",
  "Poodle",
  "Shiba Inu",
  "Corgi",
  "Husky",
  "Dachshund",
  "Boxer",
  "German Shepherd",
  "Border Collie",
  "Australian Shepherd",
  "Maltese",
  "Pomeranian",
  "Chihuahua",
  "Great Dane",
  "French Bulldog",
  "Boston Terrier",
  "Cavalier King Charles Spaniel",
];

const CAT_BREEDS = [
  "Siamese",
  "Persian",
  "Maine Coon",
  "Ragdoll",
  "Bengal",
  "Sphynx",
  "British Shorthair",
  "Scottish Fold",
  "Russian Blue",
  "Abyssinian",
  "American Shorthair",
  "Birman",
  "Norwegian Forest Cat",
  "Himalayan",
  "Devon Rex",
  "Oriental Shorthair",
  "Savannah",
  "Turkish Van",
  "Egyptian Mau",
  "Chartreux",
];

const DOG_NAMES = [
  "Buddy",
  "Charlie",
  "Max",
  "Bailey",
  "Cooper",
  "Daisy",
  "Luna",
  "Bella",
  "Rocky",
  "Milo",
  "Leo",
  "Sadie",
  "Ruby",
  "Maggie",
  "Zoey",
  "Winston",
  "Scout",
  "Marley",
  "Penny",
  "Teddy",
];

const CAT_NAMES = [
  "Luna",
  "Oliver",
  "Milo",
  "Leo",
  "Chloe",
  "Simba",
  "Nala",
  "Lily",
  "Mittens",
  "Shadow",
  "Cleo",
  "Oreo",
  "Whiskers",
  "Sophie",
  "Penny",
  "Mittens",
  "Jasper",
  "Pumpkin",
  "Willow",
  "Milo",
];

const MOODS: RescuePet["mood"][] = ["Sad", "Nervous", "Calm", "Happy", "Very Happy"];
const LOCATIONS = [
  "Main House Area",
  "Play Area",
  "Sleeping Area",
  "Food Area",
  "Medical Care Area",
  "Garden",
  "Warm Window Spot",
  "Training Area",
  "Rescue Yard",
  "Cozy Corner",
];

function makeRescuePets(type: "dog" | "cat", count: number): RescuePet[] {
  const names = type === "dog" ? DOG_NAMES : CAT_NAMES;
  const breeds = type === "dog" ? DOG_BREEDS : CAT_BREEDS;
  const favoriteFoods = type === "dog" ? ["Chicken bites", "Beef jerky", "Salmon flakes", "Peanut butter", "Turkey treats"] : ["Tuna bits", "Chicken flakes", "Salmon flakes", "Cheesy bites", "Catnip snacks"];
  const favoriteToys = type === "dog" ? ["Ball", "Rope toy", "Frisbee", "Squeaky toy", "Plush bone"] : ["Plush mouse", "Bell toy", "Tunnel toy", "Feather wand", "Crinkle ball"];
  const favoriteItems = type === "dog" ? ["Soft bed", "Blanket", "Hammock", "Pillow", "Cozy mat"] : ["Cat bed", "Cat cave", "Soft basket", "Blanket", "Sun window seat"];

  return Array.from({ length: count }, (_, index) => {
    const id = `${type}-${index + 1}`;
    const nameIndex = index % names.length;
    const breedIndex = index % breeds.length;
    const moodIndex = index % MOODS.length;
    const locationIndex = index % LOCATIONS.length;
    const suffix = Math.floor(index / names.length) + 1;
    return {
      id,
      name: `${names[nameIndex]} ${suffix}`,
      type,
      breed: breeds[breedIndex],
      age: 1 + ((index % 5) + 1),
      story: `${names[nameIndex]} was rescued and is ready to find a loving home.`,
      personality: `${type === "dog" ? "Playful" : "Curious"} and kind`,
      favoriteFood: favoriteFoods[index % favoriteFoods.length],
      favoriteToy: favoriteToys[index % favoriteToys.length],
      favoriteItem: favoriteItems[index % favoriteItems.length],
      mood: MOODS[moodIndex],
      location: LOCATIONS[locationIndex],
      adopted: false,
    };
  });
}

export const PUPPIES: PuppyBreed[] = [
  { id: "sunny", name: "Golden Pup", emoji: "🐶" },
  { id: "frost", name: "Snow Pup", emoji: "🐺" },
  { id: "cocoa", name: "Cocoa Pup", emoji: "🐕" },
  { id: "pepper", name: "Spotty Pup", emoji: "🐩" },
  { id: "milo", name: "Milo", emoji: "🐕" },
  { id: "luna", name: "Luna", emoji: "🐱" },
];

export const RESCUE_DOGS: RescuePet[] = makeRescuePets("dog", 80);
export const STARTER_DOGS: RescuePet[] = RESCUE_DOGS.slice(0, 4);
export const RESCUE_CATS: RescuePet[] = makeRescuePets("cat", 80);

export const LEVELS = [
  { name: "New Puppy", need: 0, emoji: "🍼" },
  { name: "Happy Puppy", need: 10, emoji: "😊" },
  { name: "Smart Puppy", need: 25, emoji: "🎓" },
  { name: "Adventure Puppy", need: 45, emoji: "🧭" },
  { name: "Super Learning Puppy", need: 70, emoji: "🦸" },
];

export interface ShopItem {
  id: string;
  name: string;
  emoji: string;
  cost: number;
  group: string;
  category?: "comfort" | "play" | "care" | "decor" | "check-in" | "event";
  limitedForDays?: number;
  eventName?: string;
}

export interface ToolCategory {
  id: string;
  name: string;
  emoji: string;
  description: string;
  variants: ShopItem[];
}

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    id: "dog-mats",
    name: "Dog Mats",
    emoji: "🛋️",
    description: "Soft mats to make every pup comfy.",
    variants: [
      { id: "dog-mat-cooling", name: "Cooling Mat", emoji: "🧊", cost: 18, group: "Dog Mats" },
      { id: "dog-mat-toast", name: "Toast Mat", emoji: "🍞", cost: 20, group: "Dog Mats" },
      { id: "dog-mat-hot-dog", name: "Hot Dog Mat", emoji: "🌭", cost: 22, group: "Dog Mats" },
      { id: "dog-mat-carrot", name: "Carrot Mat", emoji: "🥕", cost: 20, group: "Dog Mats" },
      { id: "dog-mat-bear", name: "Bear Mat", emoji: "🐻", cost: 24, group: "Dog Mats" },
    ],
  },
  {
    id: "bushes-plants",
    name: "Bushes and Plants",
    emoji: "🌿",
    description: "Grow greenery and cozy corners for your pets.",
    variants: [
      { id: "plant-dry-leaf", name: "Dry Leaf Bush", emoji: "🍂", cost: 16, group: "Bushes and Plants" },
      { id: "plant-wildflower", name: "Wildflower Bush", emoji: "🌼", cost: 18, group: "Bushes and Plants" },
      { id: "plant-rose", name: "Rose Bush", emoji: "🌹", cost: 20, group: "Bushes and Plants" },
      { id: "plant-wheat", name: "Wheat Bush", emoji: "🌾", cost: 18, group: "Bushes and Plants" },
      { id: "plant-clover", name: "Lucky Clover Bush", emoji: "☘️", cost: 22, group: "Bushes and Plants" },
    ],
  },
  {
    id: "cat-mats",
    name: "Cat Mats",
    emoji: "🧶",
    description: "Purr-fect resting mats for cat friends.",
    variants: [
      { id: "cat-mat-basic", name: "Basic Cat Mat", emoji: "🟤", cost: 15, group: "Cat Mats" },
      { id: "cat-mat-paw", name: "Cat Paw Mat", emoji: "🐾", cost: 18, group: "Cat Mats" },
      { id: "cat-mat-egg", name: "Fried Egg Mat", emoji: "🍳", cost: 20, group: "Cat Mats" },
      { id: "cat-mat-avocado", name: "Avocado Mat", emoji: "🥑", cost: 21, group: "Cat Mats" },
      { id: "cat-mat-goldfish", name: "Goldfish Mat", emoji: "🐟", cost: 22, group: "Cat Mats" },
    ],
  },
  {
    id: "rope-toys",
    name: "Rope Toys",
    emoji: "🪢",
    description: "Tug, chase, and chew on playful rope toys.",
    variants: [
      { id: "rope-toy-basic", name: "Basic Rope Toy", emoji: "🧩", cost: 14, group: "Rope Toys" },
      { id: "rope-toy-football", name: "Football Rope Toy", emoji: "🏈", cost: 18, group: "Rope Toys" },
      { id: "rope-toy-carrot", name: "Carrot Rope Toy", emoji: "🥕", cost: 16, group: "Rope Toys" },
      { id: "rope-toy-pineapple", name: "Pineapple Rope Toy", emoji: "🍍", cost: 18, group: "Rope Toys" },
      { id: "rope-toy-octopus", name: "Octopus Rope Toy", emoji: "🐙", cost: 20, group: "Rope Toys" },
    ],
  },
  {
    id: "teaser-wands",
    name: "Cat Teaser Wands",
    emoji: "🎣",
    description: "Wands for chasing, pouncing and pretending.",
    variants: [
      { id: "wand-fish", name: "Fish Teaser Wand", emoji: "🐟", cost: 16, group: "Cat Teaser Wands" },
      { id: "wand-mouse", name: "Mouse Teaser Wand", emoji: "🐭", cost: 17, group: "Cat Teaser Wands" },
      { id: "wand-butterfly", name: "Butterfly Teaser Wand", emoji: "🦋", cost: 18, group: "Cat Teaser Wands" },
      { id: "wand-white-dove", name: "White Dove Teaser Wand", emoji: "🕊️", cost: 19, group: "Cat Teaser Wands" },
      { id: "wand-airplane", name: "Airplane Teaser Wand", emoji: "✈️", cost: 20, group: "Cat Teaser Wands" },
    ],
  },
  {
    id: "balls",
    name: "Balls",
    emoji: "⚽",
    description: "Round toys for fetch, roll, and fun.",
    variants: [
      { id: "ball-baseball", name: "Baseball", emoji: "⚾", cost: 13, group: "Balls" },
      { id: "ball-plush", name: "Plush Ball", emoji: "🟣", cost: 15, group: "Balls" },
      { id: "ball-watermelon", name: "Mini Watermelon Ball", emoji: "🍉", cost: 16, group: "Balls" },
      { id: "ball-toilet-paper", name: "Toilet Paper Roll Ball", emoji: "🧻", cost: 17, group: "Balls" },
      { id: "ball-tennis", name: "Tennis Ball", emoji: "🎾", cost: 18, group: "Balls" },
    ],
  },
  {
    id: "plastic-toys",
    name: "Plastic Toys",
    emoji: "🧸",
    description: "Bright plastic toys for playful paws.",
    variants: [
      { id: "plastic-toy-disc", name: "Flying Disc Toy", emoji: "🟦", cost: 14, group: "Plastic Toys" },
      { id: "plastic-toy-slipper", name: "Slipper Toy", emoji: "👡", cost: 15, group: "Plastic Toys" },
      { id: "plastic-toy-bone", name: "Bone Toy", emoji: "🦴", cost: 16, group: "Plastic Toys" },
      { id: "plastic-toy-chicken", name: "Screaming Chicken Toy", emoji: "🐔", cost: 17, group: "Plastic Toys" },
      { id: "plastic-toy-duck", name: "Yellow Duck Toy", emoji: "🦆", cost: 16, group: "Plastic Toys" },
    ],
  },
  {
    id: "plush-toys",
    name: "Plush Toys",
    emoji: "🐰",
    description: "Soft friends for cuddles and comfort.",
    variants: [
      { id: "plush-pillow", name: "Plush Pillow", emoji: "🛏️", cost: 18, group: "Plush Toys" },
      { id: "plush-bunny", name: "Bunny Plush Toy", emoji: "🐇", cost: 20, group: "Plush Toys" },
      { id: "plush-bear", name: "Bear Plush Toy", emoji: "🐻", cost: 20, group: "Plush Toys" },
      { id: "plush-chicken-leg", name: "Chicken Leg Plush Toy", emoji: "🍗", cost: 19, group: "Plush Toys" },
      { id: "plush-pig", name: "Pig Plush Toy", emoji: "🐷", cost: 19, group: "Plush Toys" },
    ],
  },
  {
    id: "boxes-bags",
    name: "Boxes and Bags",
    emoji: "📦",
    description: "Storage boxes and snack-style bags for play.",
    variants: [
      { id: "box-delivery", name: "Delivery Box", emoji: "📦", cost: 12, group: "Boxes and Bags" },
      { id: "box-fast-food", name: "Fast-Food Paper Bag", emoji: "🍟", cost: 14, group: "Boxes and Bags" },
      { id: "box-takeout", name: "Takeout Box", emoji: "🍱", cost: 14, group: "Boxes and Bags" },
      { id: "box-apple", name: "Apple Box", emoji: "🍎", cost: 15, group: "Boxes and Bags" },
      { id: "box-strawberry", name: "Strawberry Paper Bag", emoji: "🍓", cost: 16, group: "Boxes and Bags" },
    ],
  },
  {
    id: "scratching-boards",
    name: "Scratching Boards",
    emoji: "🪵",
    description: "Scratch, climb, and nap on cozy boards.",
    variants: [
      { id: "scratch-basic", name: "Basic Scratching Board", emoji: "🪓", cost: 18, group: "Scratching Boards" },
      { id: "scratch-log", name: "Wooden Log Scratching Board", emoji: "🪵", cost: 20, group: "Scratching Boards" },
      { id: "scratch-cat-shaped", name: "Cat-Shaped Scratching Board", emoji: "🐱", cost: 22, group: "Scratching Boards" },
      { id: "scratch-carrot", name: "Carrot Scratching Board", emoji: "🥕", cost: 20, group: "Scratching Boards" },
      { id: "scratch-cactus", name: "Cactus Scratching Board", emoji: "🌵", cost: 21, group: "Scratching Boards" },
    ],
  },
  {
    id: "cat-beds",
    name: "Cat Beds",
    emoji: "🛏️",
    description: "Sleepy beds shaped like food, tents, and nests.",
    variants: [
      { id: "cat-bed-bamboo", name: "Bamboo and Rattan Cat Bed", emoji: "🪵", cost: 22, group: "Cat Beds" },
      { id: "cat-bed-hamburger", name: "Hamburger Cat Bed", emoji: "🍔", cost: 24, group: "Cat Beds" },
      { id: "cat-bed-tent", name: "Tent Cat Bed", emoji: "⛺", cost: 25, group: "Cat Beds" },
      { id: "cat-bed-pumpkin", name: "Pumpkin Cat Bed", emoji: "🎃", cost: 26, group: "Cat Beds" },
      { id: "cat-bed-hen", name: "Hen Cat Bed", emoji: "🐔", cost: 26, group: "Cat Beds" },
    ],
  },
  {
    id: "cat-trees",
    name: "Cat Trees",
    emoji: "🌳",
    description: "Tall trees for climbing, scratching, and sleeping.",
    variants: [
      { id: "cat-tree-basic", name: "Basic Cat Tree", emoji: "🌿", cost: 24, group: "Cat Trees" },
      { id: "cat-tree-flower", name: "Flower Cat Tree", emoji: "🌸", cost: 26, group: "Cat Trees" },
      { id: "cat-tree-dessert", name: "Dessert Cat Tree", emoji: "🍰", cost: 28, group: "Cat Trees" },
      { id: "cat-tree-strawberry", name: "Strawberry Cat Tree", emoji: "🍓", cost: 28, group: "Cat Trees" },
      { id: "cat-tree-star", name: "Star Cat Tree", emoji: "⭐", cost: 30, group: "Cat Trees" },
    ],
  },
  {
    id: "pet-houses",
    name: "Pet Houses",
    emoji: "🏠",
    description: "Cozy homes for puppies and kittens alike.",
    variants: [
      { id: "pet-house-basic", name: "Basic House", emoji: "🏡", cost: 30, group: "Pet Houses" },
      { id: "pet-house-dessert", name: "Dessert House", emoji: "🍦", cost: 32, group: "Pet Houses" },
      { id: "pet-house-camper", name: "Camper House", emoji: "🚐", cost: 34, group: "Pet Houses" },
      { id: "pet-house-beach", name: "Beach Villa", emoji: "🏖️", cost: 36, group: "Pet Houses" },
      { id: "pet-house-milk", name: "Milk Carton House", emoji: "🥛", cost: 35, group: "Pet Houses" },
    ],
  },
  {
    id: "bath-items",
    name: "Bath Items",
    emoji: "🛁",
    description: "Splashy tubs and pools for bubbly fun.",
    variants: [
      { id: "bath-small-pool", name: "Small Pool", emoji: "🏊", cost: 20, group: "Bath Items" },
      { id: "bath-hot-spring", name: "Wooden Hot Spring Tub", emoji: "🪵", cost: 24, group: "Bath Items" },
      { id: "bath-bathtub", name: "Bathtub", emoji: "🛁", cost: 22, group: "Bath Items" },
      { id: "bath-coffee-cup", name: "Large Coffee Cup Bath", emoji: "☕", cost: 26, group: "Bath Items" },
      { id: "bath-drink-cup", name: "Cold Drink Cup Bath", emoji: "🥤", cost: 26, group: "Bath Items" },
    ],
  },
  {
    id: "jars",
    name: "Jars",
    emoji: "🧴",
    description: "Fun jars filled with treats and cozy charms.",
    variants: [
      { id: "jar-ice-cream", name: "Ice Cream Jar", emoji: "🍨", cost: 16, group: "Jars" },
      { id: "jar-salmon", name: "Salmon Jar", emoji: "🐟", cost: 17, group: "Jars" },
      { id: "jar-chili", name: "Chili Sauce Jar", emoji: "🌶️", cost: 17, group: "Jars" },
      { id: "jar-honey", name: "Honey Jar", emoji: "🍯", cost: 18, group: "Jars" },
      { id: "jar-watermelon", name: "Watermelon Jar", emoji: "🍉", cost: 18, group: "Jars" },
    ],
  },
  {
    id: "hammocks",
    name: "Hammocks",
    emoji: "🛌",
    description: "Relaxing hammocks for naps and lazy afternoons.",
    variants: [
      { id: "hammock-basic", name: "Basic Hammock", emoji: "🪢", cost: 20, group: "Hammocks" },
      { id: "hammock-swing", name: "Swing Hammock", emoji: "🌙", cost: 22, group: "Hammocks" },
      { id: "hammock-yellow-green", name: "Yellow-Green Hammock", emoji: "💛", cost: 22, group: "Hammocks" },
      { id: "hammock-flower", name: "Flower Hammock", emoji: "🌸", cost: 23, group: "Hammocks" },
      { id: "hammock-multi", name: "Multi-Use Hammock", emoji: "🧵", cost: 24, group: "Hammocks" },
    ],
  },
  {
    id: "umbrellas",
    name: "Umbrellas",
    emoji: "☂️",
    description: "Umbrellas for sun, rain, and playful shade.",
    variants: [
      { id: "umbrella-paper", name: "Oil-Paper Umbrella", emoji: "🛐", cost: 18, group: "Umbrellas" },
      { id: "umbrella-sun", name: "Small Sun Umbrella", emoji: "🌞", cost: 19, group: "Umbrellas" },
      { id: "umbrella-beach", name: "Beach Umbrella", emoji: "⛱️", cost: 20, group: "Umbrellas" },
      { id: "umbrella-mushroom", name: "Mushroom Umbrella", emoji: "🍄", cost: 21, group: "Umbrellas" },
      { id: "umbrella-cat", name: "Cat Umbrella", emoji: "🐈", cost: 22, group: "Umbrellas" },
    ],
  },
  {
    id: "3d-tunnels",
    name: "3D Tunnels",
    emoji: "🌀",
    description: "Curvy tunnels for racing and hide-and-seek.",
    variants: [
      { id: "tunnel-log", name: "Log 3D Tunnel", emoji: "🪵", cost: 22, group: "3D Tunnels" },
      { id: "tunnel-bamboo", name: "Bamboo 3D Tunnel", emoji: "🎋", cost: 23, group: "3D Tunnels" },
      { id: "tunnel-jam", name: "Jam 3D Tunnel", emoji: "🍓", cost: 24, group: "3D Tunnels" },
      { id: "tunnel-star", name: "Star 3D Tunnel", emoji: "⭐", cost: 25, group: "3D Tunnels" },
    ],
  },
  {
    id: "summer-fans",
    name: "Summer Fans",
    emoji: "🌬️",
    description: "Cool breezes for warm-weather play.",
    variants: [
      { id: "fan-rainbow", name: "Rainbow Fan", emoji: "🌈", cost: 18, group: "Summer Fans" },
      { id: "fan-cool-breeze", name: "Cool Breeze Fan", emoji: "🌀", cost: 19, group: "Summer Fans" },
      { id: "fan-star", name: "Star Fan", emoji: "⭐", cost: 20, group: "Summer Fans" },
      { id: "fan-starry-handheld", name: "Starry Handheld Fan", emoji: "✨", cost: 21, group: "Summer Fans" },
      { id: "fan-airplane", name: "Airplane Mini Fan", emoji: "✈️", cost: 22, group: "Summer Fans" },
    ],
  },
  {
    id: "soft-sofas",
    name: "Soft Sofas",
    emoji: "🛋️",
    description: "Plush sofas shaped like flowers, snacks, and clouds.",
    variants: [
      { id: "sofa-flower", name: "Flower Sofa", emoji: "🌸", cost: 24, group: "Soft Sofas" },
      { id: "sofa-seal", name: "Seal Sofa", emoji: "🦭", cost: 25, group: "Soft Sofas" },
      { id: "sofa-apple", name: "Apple Sofa", emoji: "🍎", cost: 26, group: "Soft Sofas" },
      { id: "sofa-fox", name: "Fox Sofa", emoji: "🦊", cost: 27, group: "Soft Sofas" },
      { id: "sofa-cloud", name: "Cloud Sofa", emoji: "☁️", cost: 28, group: "Soft Sofas" },
    ],
  },
];

export const SHOP_ITEMS: ShopItem[] = TOOL_CATEGORIES.flatMap((category) =>
  category.variants.map((item) => ({ ...item, group: category.name }))
);
  { id: "food-bowl", name: "Yummy Kibble", emoji: "🍖", cost: 20, group: "Puppy Food" },
  { id: "food-bone", name: "Big Bone Treat", emoji: "🦴", cost: 35, group: "Puppy Food" },
  { id: "food-cake", name: "Puppy Birthday Cake", emoji: "🎂", cost: 60, group: "Puppy Food" },
  { id: "toy-ball", name: "Bouncy Ball", emoji: "⚽", cost: 25, group: "Toys" },
  { id: "toy-frisbee", name: "Flying Disc", emoji: "🥏", cost: 40, group: "Toys" },
  { id: "toy-duck", name: "Squeaky Duck", emoji: "🦆", cost: 30, group: "Toys" },
  { id: "cloth-hat", name: "Sun Hat", emoji: "👒", cost: 45, group: "Clothes" },
  { id: "cloth-scarf", name: "Cozy Scarf", emoji: "🧣", cost: 50, group: "Clothes" },
  { id: "cloth-cape", name: "Hero Cape", emoji: "🦸", cost: 80, group: "Clothes" },
  { id: "room-bed", name: "Soft Bed", emoji: "🛏️", cost: 55, group: "Puppy Room" },
  { id: "room-lamp", name: "Star Lamp", emoji: "🪄", cost: 45, group: "Puppy Room" },
  { id: "room-plant", name: "Happy Plant", emoji: "🪴", cost: 35, group: "Puppy Room" },
  { id: "place-beach", name: "Sunny Beach", emoji: "🏖️", cost: 90, group: "New Places" },
  { id: "place-forest", name: "Green Forest", emoji: "🌲", cost: 90, group: "New Places" },
  { id: "place-moon", name: "Moon Camp", emoji: "🌙", cost: 120, group: "New Places" },
  { id: "skill-sit", name: "Sit and Stay", emoji: "🐾", cost: 40, group: "Puppy Skills" },
  { id: "skill-jump", name: "Super Jump", emoji: "✨", cost: 70, group: "Puppy Skills" },
  { id: "skill-read", name: "Read Along", emoji: "📖", cost: 100, group: "Puppy Skills" },
  { id: "hotel-dog-mat", name: "Dog mat", emoji: "🧸", cost: 28, group: "Rescue Hotel", category: "comfort", forType: "dog" },
  { id: "hotel-cat-bed", name: "Cat bed", emoji: "🛏️", cost: 32, group: "Rescue Hotel", category: "comfort", forType: "cat" },
  { id: "hotel-blanket", name: "Warm blanket", emoji: "🧵", cost: 26, group: "Rescue Hotel", category: "comfort", forType: "both" },
  { id: "hotel-pillow", name: "Soft pillow", emoji: "🛋️", cost: 24, group: "Rescue Hotel", category: "comfort", forType: "both" },
  { id: "hotel-rug", name: "Cute rug", emoji: "🧶", cost: 30, group: "Rescue Hotel", category: "decor", forType: "both" },
  { id: "hotel-lamp", name: "Cute lamp", emoji: "💡", cost: 34, group: "Rescue Hotel", category: "decor", forType: "both" },
  { id: "hotel-ball", name: "Small ball", emoji: "⚽", cost: 22, group: "Rescue Hotel", category: "play", forType: "both" },
  { id: "hotel-rope", name: "Rope toy", emoji: "🪢", cost: 26, group: "Rescue Hotel", category: "play", forType: "dog" },
  { id: "hotel-mouse", name: "Plush mouse", emoji: "🐭", cost: 24, group: "Rescue Hotel", category: "play", forType: "cat" },
  { id: "checkin-golden-bowl", name: "Golden bowl", emoji: "🥣", cost: 0, group: "Check-In", category: "check-in", limitedForDays: 7 },
  { id: "checkin-rainbow-bed", name: "Rainbow bed", emoji: "🌈", cost: 0, group: "Check-In", category: "check-in", limitedForDays: 7 },
  { id: "event-dragon", name: "Dragon Boat bed", emoji: "🛏️", cost: 60, group: "Limited Events", category: "event", limitedForDays: 7, eventName: "Dragon Boat Festival" },
  { id: "event-christmas", name: "Christmas tree", emoji: "🎄", cost: 70, group: "Limited Events", category: "event", limitedForDays: 14, eventName: "Christmas" },
  { id: "event-newyear", name: "New Year lantern", emoji: "🏮", cost: 64, group: "Limited Events", category: "event", limitedForDays: 30, eventName: "New Year" },
];

export const BACKGROUND_OPTIONS: HotelBackground[] = [
  { id: "yard", name: "Simple Rescue Yard", description: "A bright start for every new rescue hotel.", cost: 0, emoji: "🌿", category: "free" },
  { id: "wood", name: "Warm Wooden Hotel", description: "Cozy rooms and a sunny porch.", cost: 40, emoji: "🪵", category: "normal" },
  { id: "garden", name: "Flower Garden", description: "Soft flowers and happy pet paths.", cost: 70, emoji: "🌸", category: "normal" },
  { id: "forest", name: "Forest Rescue Home", description: "A calm hidden home in the trees.", cost: 100, emoji: "🌲", category: "special" },
  { id: "beach", name: "Beach Pet Hotel", description: "Warm sand and sea breeze.", cost: 140, emoji: "🏖️", category: "special" },
  { id: "snow", name: "Snow Rescue Home", description: "A wintry rescue home with lights.", cost: 180, emoji: "❄️", category: "special" },
  { id: "night", name: "Night Light Garden", description: "A glowing rescue hotel at sunset.", cost: 220, emoji: "🌙", category: "event" },
];

export const HOTEL_ITEMS: HotelItem[] = [
  { id: "dog-mat", name: "Dog mat", emoji: "🧸", cost: 18, category: "comfort", forType: "dog" },
  { id: "soft-bed", name: "Soft bed", emoji: "🛏️", cost: 24, category: "comfort", forType: "dog" },
  { id: "blanket", name: "Blanket", emoji: "🧵", cost: 16, category: "comfort", forType: "both" },
  { id: "pillow", name: "Pillow", emoji: "🛋️", cost: 14, category: "comfort", forType: "both" },
  { id: "toy-ball", name: "Ball", emoji: "⚽", cost: 12, category: "play", forType: "both" },
  { id: "rope-toy", name: "Rope toy", emoji: "🪢", cost: 14, category: "play", forType: "dog" },
  { id: "plush-mouse", name: "Plush mouse", emoji: "🐭", cost: 13, category: "play", forType: "cat" },
  { id: "food-bowl", name: "Food bowl", emoji: "🥣", cost: 10, category: "care", forType: "both" },
  { id: "water-bowl", name: "Water bowl", emoji: "💧", cost: 10, category: "care", forType: "both" },
  { id: "brush", name: "Brush", emoji: "🪮", cost: 15, category: "care", forType: "both" },
  { id: "lamp", name: "Lamp", emoji: "💡", cost: 18, category: "decor", forType: "both" },
  { id: "rug", name: "Rug", emoji: "🧶", cost: 18, category: "decor", forType: "both" },
  { id: "flower-pot", name: "Flower pot", emoji: "🪴", cost: 16, category: "decor", forType: "both" },
  { id: "star-toy", name: "Star toy", emoji: "⭐", cost: 20, category: "check-in", forType: "both" },
  { id: "rainbow-bed", name: "Rainbow bed", emoji: "🌈", cost: 24, category: "check-in", forType: "both" },
];
