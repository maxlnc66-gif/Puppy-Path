export type Subject = "math" | "english" | "science";
export type Grade = 3 | 4 | 5;

export interface QuizItem {
  prompt: string;
  options: string[];
  answer: number;
  hint: string;
  example: string;
  steps: string[];
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
  if (pool.length === 0) return QUESTIONS[0]!;
  return pool.reduce(
    (best, q) => (Math.abs(q.grade - grade) < Math.abs(best.grade - grade) ? q : best),
    pool[0]!,
  );
}

export const questionById = (id: string): Question | undefined =>
  QUESTIONS.find((q) => q.id === id);

export interface PuppyBreed {
  id: string;
  name: string;
  emoji: string;
}

export const PUPPIES: PuppyBreed[] = [
  { id: "sunny", name: "Golden Pup", emoji: "🐶" },
  { id: "frost", name: "Snow Pup", emoji: "🐺" },
  { id: "cocoa", name: "Cocoa Pup", emoji: "🐕" },
  { id: "pepper", name: "Spotty Pup", emoji: "🐩" },
];

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
  group: "Puppy Food" | "Toys" | "Clothes" | "Puppy Room" | "New Places" | "Puppy Skills";
}

export const SHOP_ITEMS: ShopItem[] = [
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
];
