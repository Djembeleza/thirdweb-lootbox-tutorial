export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "What is the name of the Podcast which he co-hosts?",
    image:
      "https://elegant-entertainment.com/wp-content/uploads/2017/11/Images_173.jpg",
    answers: [
      "Podcast and Chill with MacDonald",
      "Podcast And Chill with MacG",
      "Podcast and Chill with McGregor",
      "Podcast and Chill with McGrimm",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Which car brand is this logo for?",
    image: "https://www.carlogos.org/logo/Lexus-symbol-640x480.jpg",
    answers: ["Lamborghini", "Lada", "Lotus", "Lexus"],
    correctAnswerIndex: 3,
  },
  {
    questionText: "What is the name of the energetic beverage which this famous celebrity owns?",
    image:
      "https://www.djsproduction.co.za/wp-content/uploads/2020/06/DJ-SBU-4--e1593167191749.jpeg",
    answers: ["MoFire", "MoTire", "More Fya", "Dj Sbu Turn Up"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "Which was the first James Bond film to include an Aston Martin?",
    answers: ["Dr No", "From Russia with Love", "Goldfinger", "Thunderball"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "What color were all Ferraris originally?",
    answers: ["Yellow", "White", "Blue", "Red"],
    correctAnswerIndex: 3,
  },
];

export default quizQuestions;
