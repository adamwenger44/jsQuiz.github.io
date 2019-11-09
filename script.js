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
  }
];

buttons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var q = questions[i];
    if (btn.textContent != q['answer']) {
      secondsLeft -= 15;
    }
    if (i == questions.length - 1) {
      clearInterval(timerInterval);
      one.style.display = 'none';
      username.style.display = 'block';
    }
    else {
      displayQuestion()
    }
  });
});

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


submit.addEventListener('click', function () {
  var uname = document.querySelector('input').value;
  localStorage.setItem('name', uname);
  localStorage.setItem('score', secondsLeft);
});

startBtn.addEventListener('click', function () {
  one.style.display = 'block';
  var q = questions[i];
  title.innerHTML = q['title'];
  var j = 0;
  buttons.forEach(function (btntxt) {
    btntxt.innerText = q['choices'][j];
    j += 1;
  });

  setTime();
  startP.style.display = 'none';
  one.style.display = 'inline';
});

function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = 'timer ' + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}