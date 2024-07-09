var displayQuestion = function (questionAndAnswer) {
    var options = ["A", "B", "C", "D", "E"];
    
    console.log(questionAndAnswer.question);
    
    questionAndAnswer.answers.forEach(
      function (answer, i) {
        console.log(options[i] + " - " + answer);
      }
    );
  };
  
  var question1 = {
    question: "What is the capital of France?",
    answers: [
      "Bordeaux",
      "F",
      "Paris",
      "Brussels"
    ],
    correctAnswer: "Paris"
  };
  
  var question2 = {
    question: "What is the largest planet in our solar system?",
    answers: [
      "Earth",
      "Saturn",
      "Jupiter",
      "Uranus"
    ],
    correctAnswer: "Jupiter"
  };
  
  var question3 = {
    question: "What is the smallest country in the world?",
    answers: [
      "Vatican City",
      "Monaco",
      "Nauru",
      "Tuvalu"
    ],
    correctAnswer: "Vatican City"
  };
  
  var questions = [question1, question2, question3];
  
  questions.forEach(function (question) {
    displayQuestion(question);
  });