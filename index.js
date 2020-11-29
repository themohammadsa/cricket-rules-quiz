var readlineSync = require('readline-sync');
const chalk = require('chalk');
const print = console.log 

var userName = readlineSync.question(chalk.red('What is your name?\n'));

print('\n' + 'Hello ' + userName + '! \n');
print(chalk.bgRed('Welcome to the Cricket Rules Quiz! \n'));

print(chalk.yellow('There are a total of five questions and two Levels. \n' + 'Each question has four options.\n \n'  + 'Type the letter associated with each question for the answer.'));

print(chalk.green('\nYou have to score more than 3 points to go to LEVEL TWO.'))

var score = 0;

var questions = [
  {
    question: '\n What does the term LBW stand for in cricket ? \n' + ' a. Leg Before Wide \n b. Long Before Wide \n c. Leg Before Wicket \n d. Long Bounce Wicket',
    answer: 'c',
  },
  {
    question: '\n Which of these is not a way of getting out? \n' + ' a. Timed Out \n b. Running on the pitch \n c. Obstructing the Field \n d. Handling the ball',
    answer: 'b',
  },
  {
    question: '\n Following an incident on the field, the umpire taps his left shoulder repeatedly with his right hand. What is the umpire trying to signal? \n' + ' a. Short Run \n b. Reversal of an earlier decision \n c. Penalty for the fielding side \n d. Penalty for the batting side',
    answer: 'd',
  },
  {
    question: '\n In T-20 cricket, how many bouncers are allowed in any over? \n' + ' a. 0 \n b. 1 \n c. 2 \n d. 3',
    answer: 'c',
  },
  {
    question: '\n What does the terms powerplay mean in cricket ? \n' + ' a. Batsman does not get out in powerplay \n b. Bowler need to complete the overs fast \n c. Restrictions on the placement of fielders \n d. All of the above',
    answer: 'c',
  },
  {
    question: '\n A maximum of five fielders only can be allowed on the leg-side by the fielding side at any given point of time in limited overs internationals. What is the maximum number of fielders allowed on the off-side at any given point of time? \n' + ' a. 5 \n b. 6 \n c. 7 \n d. 9',
    answer: 'd',
  },
  {
    question: '\n The total height of the wicket including bails in inches is \n' + ' a. 22.5 \n b. 28.5 \n c. 29.5 \n d. 26.5',
    answer: 'b',
  },
  {
    question: '\n Combined width of the three stumps, including small gaps between them in inches is \n' + ' a. 9 \n b. 9.5 \n c. 8.5 \n d. 10',
    answer: 'a',
  },
  {
    question: '\n  In which year were the first laws of cricket believed to have been written?  \n' + ' a. 1774 \n b. 1884 \n c. 1709 \n d. 1806',
    answer: 'a',
  },
  {
    question: '\n  What is the slang term given to a ball that is bowled so well that it is considered unplayable by the batsman?  \n' + ' a. An inswinger \n b. A jaffa \n c. An over  \n d. A half volley ',
    answer: 'b',
  }
]

function quiz(a, b){
  print(a);
  var check = readlineSync.question('\n ');
  if(check === b){
    print(chalk.green('\n You are correct.'))
    score++;
    print(chalk.bgYellow('\n Your score is ' + score));
  }
  else{
    print(chalk.red('\n The answer is wrong.'));
    print(chalk.green('\n The correct answer is ' + b));
    print(chalk.bgYellow('\n Your score is ' + score));
  }
}

for(var i=0; i<5; i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer)
}

if(score >= 3 ){
  print(chalk.bgBlue('\nYou have entered LEVEL TWO'));
  for(var i=5; i<10; i++){
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer)
}
}

print('\n \nThank you ' + userName + ' for attending the quiz.')
print(chalk.bgMagenta('\n Your Final Score is ' + score));