var bodyParts = document.getElementsByClassName('body');
var gameActive = false;
var gameNumber = 0;
var gameWord = null;
var letterBoxRow = document.getElementsByClassName('letter-boxes')[0];
var letterBoxes = document.getElementsByClassName('letter-box');
var guessLetterBox = document.getElementsByClassName('letter')[0];
var guessWordBox = document.getElementsByClassName('word')[0];


var wordList = {
	short: ['bug', 'run', 'tall', 'warm', 'cold'],
	medium: ['weather', 'autumn', 'winter', 'coffee', 'sneaker'],
	long: ['ubiquitous', 'harmonious', 'starbucks', 'loquacious', 'indigo']
};

function generateWord(param) {
	var x = Math.floor(Math.random() * wordList[param].length);
	return wordList[param][x];
}

function displayBlanks(text) {
	for (var i=0; i<text.length; i++) {
		letterBoxRow.innerHTML += (
			"<div class='letter-box'>" + text[i] + "</div>"
		);
	}
}

function newGame(param) {
	if (!gameActive) {
		gameActive = true;
		for (var i=0; i<bodyParts.length; i++) {
			bodyParts[i].style.display = 'none';
		}
		gameWord = generateWord(param);
		console.log("gameWord = " + gameWord);
		displayBlanks(gameWord);
	}
}


function checkLetter() {
	console.log('checkLetter works');
	var letter = guessLetterBox.value;
	for (var i=0; i<gameWord.length; i++) {
		if (gameWord[i] == letter) {
			letterBoxes[i].style.color = '#092C5C';
			letterBoxes[i].style.borderColor = '#22bb33';
		}
	}
	setTimeout(function() {
		for (var i=0; i<gameWord.length; i++) {
			if (letterBoxes[i].style.borderColor != '#95C0F7') {
				letterBoxes[i].style.borderColor = '#95C0F7';
			}
		}
	}, 500)
	guessLetterBox.value = '';
}

guessLetterBox.addEventListener('keyup', function(event) {
	if (event.keyCode === 13) {
		checkLetter();	
	}
})





