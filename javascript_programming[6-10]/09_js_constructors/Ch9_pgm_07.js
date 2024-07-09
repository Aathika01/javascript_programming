// A quiz question constructor

var QuizQuestion = function (question, answer) {
    this.question = question;
    this.answer = answer;
    this.options = [];
  
    this.addOption = function (option) {
        this.options.push(option);
    };
  
    this.showQuestion = function () {
        console.log(this.question);
        this.options.forEach(function (option, i) {
            console.log("(" + (i + 1) + ") " + option);
        });
    };
};

var question1 = new QuizQuestion(
    "What is the capital of France?",
    "Paris"
);

question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels");
question1.addOption("Lyon"); 
question1.showQuestion();



// Create two more questions
var question2 = new QuizQuestion(
    "What is the capital of Germany?",
    "Berlin"
);

question2.addOption("Munich");
question2.addOption("Berlin");
question2.addOption("Hamburg");
question2.addOption("Frankfurt");
question2.addOption("Stuttgart");

var question3 = new QuizQuestion(
    "What is the capital of Italy?",
    "Rome"
);

question3.addOption("Rome");
question3.addOption("Milan");
question3.addOption("Florence");
question3.addOption("Venice");
question3.addOption("Naples");