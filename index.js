let score = 0;

let answerInput;
let answer;

// Question 1
answerInput = prompt(`True or False: === -> strictly equals?
[1] true
[2] false
`);
answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("ENTER NUMBER VALUES ONLY!.");
} else if (answer > 2) {
  alert("Enter 1 or 2");
} else if (answer === 1) {
  alert("Correct!");
  score = score + 1;
} else if (answer === 2) {
  alert("Incorrect.");
}

// Question 2
answerInput =
  prompt(`Identify the data type based on the following typeof operator:
typeof("23")
[1] Number
[2] Boolean
[3] Undefined
[4] String
`);
answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("ENTER NUMBER VALUES ONLY!.");
} else if (answer > 4) {
  alert("Enter 1, 2, 3, or 4.");
} else if (answer === 4) {
  alert("Correct!");
  score = score + 1;
} else if (answer === 1 || 2 || 3) {
  alert("Incorrect.");
}

// Question 3
answerInput = prompt(`True or False: When converted to numbers 
    True values = 0 
    False values = 1
[1] True
[2] False
`);
answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("ENTER NUMBER VALUES ONLY!.");
} else if (answer > 2) {
  alert("Please enter 1, or 2");
} else if (answer === 2) {
  alert("Correct!");
  score = score + 1;
} else if (answer === 1) {
  alert("Incorrect.");
}

alert(`Quiz Completed
Your final score is ${score} out of 3.
`);

if (score === 0) {
  alert("FAILED!!! GO STUDY");
} else if (score === 3) {
  alert("GENIUS");
} else {
  alert("Ehhhh .... go study");
}
