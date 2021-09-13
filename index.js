var readlineSync = require('readline-sync');
  var score = 0;

var userName = readlineSync.question('Enter your Name ');

console.log('welcome to the quiz ' + userName);

function furious (question,answer)
{
  var answerEntered = readlineSync.question(question);

  if (answerEntered === answer)
  {
    console.log ('yay!');
      score= score+1;

  }
   else {
     console.log('nay!');
      score= score-1;
   }
    console.log (score);
    console.log ("==========");

}  
 var question = [{
question: "Where do Dom, Mia and Brian head at the beginning of Fast Five? ",

answer: "Rio"
  },
  {
    question: "Which rapper is shown in all parts of moives ?", 
    answer: "Ludacris",
  },
/// ndw ques set 
{
    question: "For which actor 'see you again' song is Tributed", 
    answer: "Paul Walker",
  },
  {
    question: "What the cars holding in fast five last scene ?", 
    answer: "Vault",
  },
  {
    question: "Which software is shown to see the world activites by hackers in part7 ?", 
    answer: "Gods eye",
  },


];

for (var i=0; i<question.length; i++)
{
  var newQues = question[i];
  furious(newQues.question,newQues.answer);
}

console.log('your new score is ' + score);

