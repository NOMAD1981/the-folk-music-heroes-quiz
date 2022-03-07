// JavaScript Document

// wait for the DOM to finish loading before running the quiz
document.addEventListener('DOMContentLoaded', function() {
});

// Get the user input element
let user = document.getElementById('user');

// Log user value to the console
console.log('Username:', user.value);

// Get the form and attach an event listener to it
let form = document.getElementById('username-form');
form.addEventListener('submit', function (event) {
    // hide the form once submitted
    this.style['display'] = 'none';
	// show welcome and score tally sections
	welcomeMessage.classList.remove('hide');
    event.preventDefault();
});

// welcome section
let nextSection = document.getElementById('next-section');
let welcomeMessage = document.getElementById('welcome');

// call the welcome paragraph and add text via javascript
// Credit: referenced article https://www.codegrepper.com/code-examples/javascript/how+to+add+a+paragraph+in+html+using+javascript
let p = document.createElement('p');
p.innerHTML = `Welcome to The Folk Music Heroes Quiz ${user.value}! Here you will get to test your folk music knowledge and I can't promise it will be easy. Click start to get the ball rolling..`;

document.getElementById('welcome-paragraph').appendChild(p);

// quiz section
let startButtonClick = document.getElementById('start');
let quizSection = document.getElementById('quiz');

// score tally section
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

// define quiz variables
let correctAnswers = 0;
let incorrectAnswers = 0;
let acceptAnswer = false;
let quizQuestions = [];
let questionCount = 0;
let currentQuestion = {};
const totalQuestions = 10;

/**
 * Function to call the quiz variables and call questions from the getQuestions function
 */
function startQuiz() {
    questionCount = 0;
    correctAnswers = 0;
	incorrectAnswers = 0;
    quizQuestions = [questionsAndAnswers];
    getQuestions();
}

function getQuestions() {
    
}


// quiz questions array
let questionsAndAnswers = [
	{
		question: "Who is the only person to have performed a duet with Robert Plant of Led Zepplin?",
		answers: {
			a: 'Kate Bush',
			b: 'Sandy Denny',
			c: 'Eric Clapton'
		},
		correctAnswer: 'b'
	},
    {
		question: "Which well known female folk singer led the crowd at Rev. Dr. Martin Luther King’s March on Washington in 1963?",
		answers: {
			a: 'Joan Baez',
			b: 'Odetta',
			c: 'Joni Mitchell'
		},
		correctAnswer: 'a'
	},
    {
		question: "Which well-known male singer songwriter was an ordained minister?",
		answers: {
			a: 'Kris Kristofferson',
			b: 'Bob Dylan',
			c: 'Johnny Cash'
		},
		correctAnswer: 'c'
	},
    {
		question: "This folk artist's autobiography was entitled 'Bound for Glory.'",
		answers: {
			a: 'Woody Guthrie',
			b: 'Bob Dylan',
			c: 'Pete Seeger'
		},
		correctAnswer: 'a'
	},
    {
		question: "Which popular folk music ensemble comprised of Pete Seeger, Lee Hays, Ronnie Gilbert and Fred Hellerman?",
		answers: {
			a: 'The Limelighters',
			b: 'The New Lost City Ramblers',
			c: 'The Weavers'
		},
		correctAnswer: 'c'
	},
    {
		question: "Which Kingston Trio hit was originally a political campaign song?",
		answers: {
			a: 'M.T.A.',
			b: 'Scotch and Soda',
			c: 'Where Have All the Flowers Gone'
		},
		correctAnswer: 'a'
	},
    {
		question: "Which of these folk singers is believed to have caused the famous riot in Peekskill, New York.",
		answers: {
			a: 'Paul Robeson',
			b: 'Marian Anderson',
			c: 'Woody Guthrie'
		},
		correctAnswer: 'a'
	},
    {
		question: "Which of the following songs was not written by Bob Dylan?",
		answers: {
			a: "Blowin' in the Wind",
			b: 'Mr. Tamborine Man',
			c: 'Caribbean Wind'
		},
		correctAnswer: 'b'
	},
    {
		question: "Which Irish musician now has a statue to him on Harry Street off Grafton Street in Dublin?",
		answers: {
			a: 'Christie Hennessy',
			b: 'Luke Kelly',
			c: 'Phil Lynott'
		},
		correctAnswer: 'c'
	},
    {
		question: "Whose first album was 'Paddy On The Road?'",
		answers: {
			a: 'Declan Sinnott',
			b: 'Christy Moore',
			c: 'Paul Brady'
		},
		correctAnswer: 'b'
	},
    {
		question: "Paddy Moloney founded which legendary band?",
		answers: {
			a: 'The Chieftains',
			b: 'The Dubliners',
			c: 'Planxty'
		},
		correctAnswer: 'a'
	},
    {
		question: "Which well known musician is widely regarded as the first significant contributor to the genre.",
		answers: {
			a: 'Pete Seeger',
			b: 'Woody Guthrie',
			c: 'Burl Ives'
		},
		correctAnswer: 'b'
	},
    {
		question: "Which folk singer was called 'Judas' for going electric?",
		answers: {
			a: 'Johnny Cash',
			b: 'Neil Young',
			c: 'Bob Dylan'
		},
		correctAnswer: 'c'
	},
    {
		question: "In 1955 Bantu Choral Folk Songs was the first recording of black folk by a white artist. Who was that artist?",
		answers: {
			a: 'Pete Seeger',
			b: 'John Lomax',
			c: 'Donovan'
		},
		correctAnswer: 'a'
	},
    {
		question: "Which Irish folk performer was regarded by Bob Dylan as the greatest ballad singer ever of all time?",
		answers: {
			a: 'Tommy Makem',
			b: 'Liam Clancy',
			c: 'Luke Kelly'
		},
		correctAnswer: 'b'
	},
    {
		question: "Which of these artists is bilingual and even produced an album in Spanish.",
		answers: {
			a: 'Arlo Guthrie',
			b: 'John Denver',
			c: 'Joan Baez'
		},
		correctAnswer: 'c'
	},
    {
		question: "Which much loved American folk performer owned a home, and spent much time, in Kinvara, Co. Galway, Ireland?",
		answers: {
			a: 'Steve Goodman',
			b: 'John Prine',
			c: 'Tom Paxton'
		},
		correctAnswer: 'b'
	},
    {
		question: "Who wrote and performed the song 'Pancho and Lefty'?",
		answers: {
			a: 'Townes_Van_Zandt',
			b: 'Emmylou Harris',
			c: 'Don Williams'
		},
		correctAnswer: 'a'
	},
    {
		question: "Much of England’s traditional folk music owes its existence to this man's great mission of recording and preservation. Who is it?",
		answers: {
			a: 'Ralph Vaughan Williams',
			b: 'Ralph McTell',
			c: 'Cecil Sharp'
		},
		correctAnswer: 'c'
	},
    {
		question: "Which band was led by Country Joe McDonald at the first Woodstock Festival in August 1969?",
		answers: {
			a: 'The Ranchers',
			b: 'The Bulls',
			c: 'The Fish'
		},
		correctAnswer: 'c'
	},
    {
		question: "Which band, fond of singing about 'Baba O'Riley', played a 25-song set at the first Woodstock Festival in August 1969?",
		answers: {
			a: 'Crosby Stills Nash & Young',
			b: 'The Who',
			c: 'Sly & the Family Stone'
		},
		correctAnswer: 'b'
	},
    {
		question: "How many acts performed at Woodstock in 1969?",
		answers: {
			a: '32',
			b: '64',
			c: '12'
		},
		correctAnswer: 'a'
	},
    {
		question: "Who was the first artist to play at Woodstock in 1969?",
		answers: {
			a: 'Bob Dylan',
			b: 'Jimi Hendrix',
			c: 'Richie Havens'
		},
		correctAnswer: 'c'
	},
    {
		question: "David Crosby was originally a member of what band before Crosby, Stills, and Nash?",
		answers: {
			a: 'Buffalo Springfield',
			b: 'The Byrds',
			c: 'Jefferson Airplane'
		},
		correctAnswer: 'b'
	},
    {
		question: "According to the lyrics of 'White Rabbit' by Jefferson Airplane, what does the pill that mother gives you do?",
		answers: {
			a: "Doesn't do anything at all",
			b: 'Makes you tall',
			c: 'Makes you small'
		},
		correctAnswer: 'a'
	},
    {
		question: "Which of the following musicians was not a member of Fairport Convention?",
		answers: {
			a: 'Richard Thompson',
			b: 'Simon Nicol',
			c: 'Tom Rush'
		},
		correctAnswer: 'c'
	},
    {
		question: "Who wrote the song 'The Town That I Loved So Well', about their home town?",
		answers: {
			a: 'Luke Kelly',
			b: 'Phil Coulter',
			c: 'Paul Brady'
		},
		correctAnswer: 'b'
	},
    {
		question: "Which folk artist was inducted into the Rock and Roll Hall of Fame in 1997.",
		answers: {
			a: 'Joni Mitchell',
			b: 'Rory McEwen',
			c: 'Jesse Fuller'
		},
		correctAnswer: 'a'
	},
    {
		question: "Which Irish performers brought Irish folk music to an International stage, in the 1960s, paving the way for other great Irish bands that followed?",
		answers: {
			a: 'The Chieftains',
			b: 'The Clancy Brothers',
			c: 'The Pogues'
		},
		correctAnswer: 'b'
	},
	{
		question: "Which of these folk artists was a classically trained singer who began her voice training at age thirteen.",
		answers: {
			a: 'Odetta',
			b: 'Moya Brennan',
			c: 'Sandy Denny'
		},
		correctAnswer: 'a'
	}
];
