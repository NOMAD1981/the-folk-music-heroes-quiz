// JavaScript Document

// wait for the DOM to finish loading before running the quiz
document.addEventListener('DOMContentLoaded', function() {
});

// Get the user input element
let user = document.getElementById('username');

// Get the form and attach an event listener to it
let form = document.getElementById('username-form');
form.addEventListener('submit', function (event) {
    // hide the form once submitted
    this.style.display = 'none';
	// show welcome and score tally sections
	welcomeMessage.classList.remove('hide');
	// console log username to test
    console.debug('Username:', user.value);
    event.preventDefault();

	// call the welcome paragraph and add text via javascript
	// Credit: referenced article https://www.codegrepper.com/code-examples/javascript/how+to+add+a+paragraph+in+html+using+javascript
	let p = document.createElement('p');
    p.innerHTML = "...to The Folk Music Heroes Quiz " + user.value + "! Here you will get to test your folk music knowledge and I can't promise it will be easy. <br> You will answer 10 questions on some of our favourite folk music heroes. Click start to get the ball rolling..";

    document.getElementById('welcome-paragraph').appendChild(p);
    console.log('submit username-form');
});

// define welcome section
let welcomeMessage = document.getElementById('welcome');

// define quiz section
let startButtonClick = document.getElementById('start');
let quizSection = document.getElementById('quiz');

// define score tally section
let scoreArea = document.getElementById('tally');

/**
 * Event listener for start button click, 
 * then hide the welcome message,
 * and show the quiz section and score area
 */
startButtonClick.addEventListener('click', function () {
    quizSection.classList.remove('hide');
	scoreArea.classList.remove('hide');
    welcomeMessage.classList.add('hide');

	startQuiz();
});

/**
 * // add event listener to submit button that checks the answer, 
 * updates the quiz statistics, 
 * gets the quiz questions while preventing the default behaviour
 */
document.getElementById('submitBtn').addEventListener('click',function(event){
	checkAnswer();
	updateStatistics();
	getQuizQuestions();
	event.preventDefault();
  });

// define quiz variables
let correctAnswers = 0;
let incorrectAnswers = 0;
let quizQuestions = [];
let questionCount = 0;
let currentQuestion = {};
const totalQuestions = 10;

/**
 * Function to call the quiz variables and call questions from the getQuizQuestions function
 */
function startQuiz() {
    questionCount = 0;
    correctAnswers = 0;
	incorrectAnswers = 0;
    quizQuestions = questionsAndAnswers;
    getQuizQuestions();
}

/**
 * Function to get the quiz questions randomly,
 * assign a random question to the current question and send it to the html,
 * define the answers and populate with radio buttons,
 * then remove the current question so it won't be asked again
 */
function getQuizQuestions() {

	// call a random question from quizQuestions array
    let randomQuestion = Math.floor(Math.random() * quizQuestions.length);

    // display as current question
    currentQuestion = quizQuestions[randomQuestion];

    // displays the question to the html
    document.getElementById('question').innerText = currentQuestion.question;

	// define answer html
	let answerHTML = ''; 

	// define i and populate
	let i= 0;
	currentQuestion.answers.forEach(function (answer) {
		// generate answer abc radio button choices
		// Credit: referenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
		// Credit: referenced https://www.techiedelight.com/create-radio-button-dynamically-javascript/
		// Credit: referenced https://www.sitepoint.com/simple-javascript-quiz/
		answerHTML = answerHTML + '<label>' + String.fromCharCode(65+i) + '</label>:'
				+'<input type="radio" name="choice" value="' + String.fromCharCode(97+i) + '" required>'
			+ answer + '<br>';
		i++;
	});

// place answers in the html
document.getElementById('answer-container').innerHTML = '<span class="answer-span">' + answerHTML + '</span>';

// remove question so it won't be asked again
quizQuestions.splice(randomQuestion, 1);
}

/**
 * Use form element to to check for correct answers,
 * incorrect answers and to log the question count
 */
function checkAnswer() {
	let form = document.getElementById('quiz-form');
	console.debug(form);
	if (form.elements.choice.value == currentQuestion.correctAnswer){
	  correctAnswers++;
	  Swal.fire(
		'Good job!',
		'That answer was correct!',
		'success'
	  );
	} else {
	  incorrectAnswers++;
	  Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'Sorry, that answer was incorrect!',
	  });
	}
	questionCount++;
	if (quizQuestions.length === 0 || questionCount >= totalQuestions) {
		displayResult();
	}
  }

// define finish section
let quizFinish = document.getElementById('finish');

// display quiz finish with overall result, along with retry and play music buttons
function displayResult() {
	quizSection.classList.add('hide');
	quizFinish.classList.remove('hide');

	// place finish note in the html
	document.getElementById('finish-container').innerHTML = '<div class="finish-div">' + "Well done on completing the quiz " + user.value + "! You can choose to play again, or simply play some music after all your hard work!" + '</div>';
	// document.getElementById('playMusic').addEventListener('click', function(event) {
	// })
}

// update quiz stats
function updateStatistics(){
	document.getElementById('score').innerHTML = correctAnswers;
	document.getElementById('incorrect').innerHTML = incorrectAnswers;
	document.getElementById('question-counter').innerHTML = questionCount;
}

// quiz questions array
let questionsAndAnswers = [
	{
		question: "Who is the only person to have performed a duet with Robert Plant of Led Zepplin?",
		answers: [
			'Kate Bush',
			'Sandy Denny',
			'Eric Clapton'
		],
		correctAnswer: 'b'
	},
    {
		question: "Which well known female folk singer led the crowd at Rev. Dr. Martin Luther King’s March on Washington in 1963?",
		answers: [
			'Joan Baez',
			'Odetta',
			'Joni Mitchell'
		],
		correctAnswer: 'a'
	},
    {
		question: "Which well-known male singer songwriter was an ordained minister?",
		answers: [
			'Kris Kristofferson',
			'Bob Dylan',
			'Johnny Cash'
		],
		correctAnswer: 'c'
	},
    {
		question: "This folk artist's autobiography was entitled 'Bound for Glory.'",
		answers: [
			'Woody Guthrie',
			'Bob Dylan',
			'Pete Seeger'
		],
		correctAnswer: 'a'
	},
    {
		question: "Which popular folk music ensemble comprised of Pete Seeger, Lee Hays, Ronnie Gilbert and Fred Hellerman?",
		answers: [
			'The Limelighters',
			'The New Lost City Ramblers',
			'The Weavers'
		],
		correctAnswer: 'c'
	},
    {
		question: "Which Kingston Trio hit was originally a political campaign song?",
		answers: [
			'M.T.A.',
			'Scotch and Soda',
			'Where Have All the Flowers Gone'
		],
		correctAnswer: 'a'
	},
    {
		question: "Which of these folk singers is believed to have caused the famous riot in Peekskill, New York.",
		answers: [
			'Paul Robeson',
			'Marian Anderson',
			'Woody Guthrie'
		],
		correctAnswer: 'a'
	},
    {
		question: "Which of the following songs was not written by Bob Dylan?",
		answers: [
			"Blowin' in the Wind",
			'Mr. Tamborine Man',
			'Caribbean Wind'
		],
		correctAnswer: 'b'
	},
    {
		question: "Which Irish musician now has a statue to him on Harry Street off Grafton Street in Dublin?",
		answers: [
			'Christie Hennessy',
			'Luke Kelly',
			'Phil Lynott'
		],
		correctAnswer: 'c'
	},
    {
		question: "Whose first album was 'Paddy On The Road?'",
		answers: [
			'Declan Sinnott',
			'Christy Moore',
			'Paul Brady'
		],
		correctAnswer: 'b'
	},
    {
		question: "Paddy Moloney founded which legendary band?",
		answers: [
			'The Chieftains',
			'The Dubliners',
			'Planxty'
		],
		correctAnswer: 'a'
	},
    {
		question: "Which well known musician is widely regarded as the first significant contributor to the genre.",
		answers: [
			'Pete Seeger',
			'Woody Guthrie',
			'Burl Ives'
		],
		correctAnswer: 'b'
	},
    {
		question: "Which folk singer was called 'Judas' for going electric?",
		answers: [
			'Johnny Cash',
			'Neil Young',
			'Bob Dylan'
		],
		correctAnswer: 'c'
	},
    {
		question: "In 1955 Bantu Choral Folk Songs was the first recording of black folk by a white artist. Who was that artist?",
		answers: [
			'Pete Seeger',
			'John Lomax',
			'Donovan'
		],
		correctAnswer: 'a'
	},
    {
		question: "Which Irish folk performer was regarded by Bob Dylan as the greatest ballad singer ever of all time?",
		answers: [
			'Tommy Makem',
			'Liam Clancy',
			'Luke Kelly'
		],
		correctAnswer: 'b'
	},
    {
		question: "Which of these artists is bilingual and even produced an album in Spanish.",
		answers: [
			'Arlo Guthrie',
			'John Denver',
			'Joan Baez'
		],
		correctAnswer: 'c'
	},
    {
		question: "Which much loved American folk performer owned a home, and spent much time, in Kinvara, Co. Galway, Ireland?",
		answers: [
			'Steve Goodman',
			'John Prine',
			'Tom Paxton'
		],
		correctAnswer: 'b'
	},
    {
		question: "Who wrote and performed the song 'Pancho and Lefty'?",
		answers: [
			'Townes Van Zandt',
			'Emmylou Harris',
			'Don Williams'
		],
		correctAnswer: 'a'
	},
    {
		question: "Much of England’s traditional folk music owes its existence to this man's great mission of recording and preservation. Who is it?",
		answers: [
			'Ralph Vaughan Williams',
			'Ralph McTell',
			'Cecil Sharp'
		],
		correctAnswer: 'c'
	},
    {
		question: "Which band was led by Country Joe McDonald at the first Woodstock Festival in August 1969?",
		answers: [
			'The Ranchers',
			'The Bulls',
			'The Fish'
		],
		correctAnswer: 'c'
	},
    {
		question: "Which band, fond of singing about 'Baba O'Riley', played a 25-song set at the first Woodstock Festival in August 1969?",
		answers: [
			'Crosby Stills Nash & Young',
			'The Who',
			'Sly & the Family Stone'
		],
		correctAnswer: 'b'
	},
    {
		question: "How many acts performed at Woodstock in 1969?",
		answers: [
			'32',
			'64',
			'12'
		],
		correctAnswer: 'a'
	},
    {
		question: "Who was the first artist to play at Woodstock in 1969?",
		answers: [
			'Bob Dylan',
			'Jimi Hendrix',
			'Richie Havens'
		],
		correctAnswer: 'c'
	},
    {
		question: "David Crosby was originally a member of what band before Crosby, Stills, and Nash?",
		answers: [
			'Buffalo Springfield',
			'The Byrds',
			'Jefferson Airplane'
		],
		correctAnswer: 'b'
	},
    {
		question: "According to the lyrics of 'White Rabbit' by Jefferson Airplane, what does the pill that mother gives you do?",
		answers: [
			"Doesn't do anything at all",
			'Makes you tall',
			'Makes you small'
		],
		correctAnswer: 'a'
	},
    {
		question: "Which of the following musicians was not a member of Fairport Convention?",
		answers: [
			'Richard Thompson',
			'Simon Nicol',
			'Tom Rush'
		],
		correctAnswer: 'c'
	},
    {
		question: "Who wrote the song 'The Town That I Loved So Well', about their home town?",
		answers: [
			'Luke Kelly',
			'Phil Coulter',
			'Paul Brady'
		],
		correctAnswer: 'b'
	},
    {
		question: "Which folk artist was inducted into the Rock and Roll Hall of Fame in 1997.",
		answers: [
			'Joni Mitchell',
			'Rory McEwen',
			'Jesse Fuller'
		],
		correctAnswer: 'a'
	},
    {
		question: "Which Irish performers brought Irish folk music to an International stage, in the 1960s, paving the way for other great Irish bands that followed?",
		answers: [
			'The Chieftains',
			'The Clancy Brothers',
			'The Pogues'
		],
		correctAnswer: 'b'
	},
	{
		question: "Which of these folk artists was a classically trained singer who began her voice training at age thirteen.",
		answers: [
			'Odetta',
			'Moya Brennan',
			'Sandy Denny'
		],
		correctAnswer: 'a'
	}
];