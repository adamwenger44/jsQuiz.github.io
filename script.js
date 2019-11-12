// variables
var time = document.getElementById('timer');
var secondsLeft = 75;
var startBtn = document.querySelector('#start');
var startP = document.querySelector('.startPage');
var one = document.querySelector('.one');
var title = one.querySelector('h1');
one.style.display = 'None';
var i = 0;
var buttons = one.querySelectorAll('button');
var username = document.querySelector('#name');
username.style.display = 'None';
var submit = document.querySelector('#submit');
var timerInterval;
var finalScore = username.querySelector('h5');
var list = document.querySelector('#highScoresList');
var highScores = [];
var uname = document.querySelector('input').value;
// questions choices and answers
var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts'
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses'
  },
  {
    title: 'Inside which HTML element do we put the javascript?',
    choices: ['js', 'script', 'javascript', 'scripting'],
    answer: 'script'
  },
  {
    title: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    choices: ['<script src= "xxx.js"', '<script href= "xxx.js"', '<script name= "xxx.js"', 'none of the above'],
    answer: '<script src= "xxx.js"'
  },
  {
    title: 'How do you write "Hello World" in an alert box?',
    choices: ['msg("Hello, World");', 'msgBox("Hello, World");', 'alert("Hello, World");', 'alertBox("Hello, World");'],
    answer: 'alert("Hello, World");'
  }
];
// this will start timer
function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = 'timer ' + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// when start button is clicked
startBtn.addEventListener('click', function () {
  // display first question with answers
  one.style.display = 'block';
  var q = questions[i];
  title.innerHTML = q['title'];
  var j = 0;
  buttons.forEach(function (btntxt) {
    btntxt.innerText = q['choices'][j];
    j += 1;
  });
// calling timer to start
  setTime();
  startP.style.display = 'none';
  one.style.display = 'inline';
});
// function to display/move question
function displayQuestion() {
  i++;
  var q = questions[i];
  title.innerHTML = q['title'];
  var j = 0;
  buttons.forEach(function (btntxt) {
    btntxt.innerText = q['choices'][j];
    j += 1;
  });

}
// function to show last page
function lastPage() {
  clearInterval(timerInterval);
  one.style.display = 'none';
  username.style.display = 'block';
  finalScore.textContent = 'Your final score is: ' + time.textContent;  
}

// adds event listeneners to each button
buttons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var q = questions[i];
    // if last question is correct
    if (i == questions.length - 1 && btn.textContent == q['answer']) {
      time.textContent = secondsLeft - 0
      lastPage()
    }
    // if last question is wrong
    if (i == questions.length - 1 && btn.textContent != q['answer']) {
      time.textContent = secondsLeft - 15;
      lastPage()
    }
// if any question but the last is wrong
    else if (btn.textContent != q['answer']) {
      secondsLeft -= 15;
      displayQuestion()
    }
// if any question but the last is correct
    else if (btn.textContent == q['answer']) {
      displayQuestion()
    }


  });
});


// when submit button is clicked
submit.addEventListener('click', function () {
  var uname = document.querySelector('input').value;
  // send name and score to local storage
  localStorage.setItem('name', JSON.stringify (uname));
  localStorage.setItem('score', JSON.stringify (time.textContent));
  // create list item to display name and score
  var li = document.createElement("li");
  li.textContent = uname + ' Score: ' + time.textContent;
  list.appendChild(li);

});