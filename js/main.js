// Tues 8/28:
// 1) endGame(win)
// 2) endGame(loss)
// 3) calculate win/loss ratio
// 4) track # of games played


var bodyParts = document.getElementsByClassName('body');
var gameActive = false;
var gameNumber = 0;
var gameWord = null;
var letterBoxRow = document.getElementsByClassName('letter-boxes')[0];
var letterBoxes = document.getElementsByClassName('letter-box');
var guessLetterBox = document.getElementsByClassName('letter')[0];
var guessWordBox = document.getElementsByClassName('word')[0];
var wordList = [];
var modals = document.getElementsByClassName('modal');
var selectors = document.getElementsByClassName('selector');



function generateWords(minLen, maxLen, diff) {
	$.get('http://app.linkedin-reach.io/words', {
		difficulty: diff,
		minLength: minLen,
		maxLength: maxLen,
		start: 5,
		count: 40
	})
	.done(function(data) {
		console.log('---\n1) data = ' + data + "\n---")
		var myArr = data.split('\n');
		console.log('---\n2) myArr = ' + myArr + '\n---')
		gameWord = myArr[Math.floor(Math.random() * myArr.length)];
		displayBlanks(gameWord);
	})
}

function displayBlanks(text) {
	for (var i=0; i<text.length; i++) {
		letterBoxRow.innerHTML += (
			"<div class='letter-box'>" + text[i] + "</div>"
		);
	}
}

function newGame() {
	for (var i=0; i<bodyParts.length; i++) {
		bodyParts[i].style.display = 'none';
	}
	generateWords(
		parseInt(selectors[0].value), 
		parseInt(selectors[1].value), 
		parseInt(selectors[2].value)
	);
	cancelModal();
}

function showModal(modalName) {
	document.getElementsByClassName(modalName)[0].style.display = 'inline';
	document.getElementsByClassName('game')[0].style.opacity = '0.2';
	document.getElementsByClassName('dashboard')[0].style.opacity = '0.2';
}

function cancelModal() {
	for (var i=0; i<modals.length; i++) {
		if(modals[i].style.display != 'none') {
			modals[i].style.display = 'none';
			break;
		}
	}
	document.getElementsByClassName('game')[0].style.opacity = '1.0';
	document.getElementsByClassName('dashboard')[0].style.opacity = '1.0';
}


function correctLetter() {
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


function incorrectLetter() {
	for (var i=0; i<bodyParts.length; i++) {
		if (bodyParts[i].style.display == 'none') {
			bodyParts[i].style.display = 'inline';
			break;
		}
	}
	for (var i=0; i<letterBoxes.length; i++) {
		letterBoxes[i].style.borderColor = '#bb2124';
	}
	setTimeout(function() {
		for (var i=0; i<letterBoxes.length; i++) {
			if (letterBoxes[i].style.borderColor != '#95C0F7') {
				letterBoxes[i].style.borderColor = '#95C0F7';
			}
		}
	}, 500)
	guessLetterBox.value = '';
}


function checkLetter() {
	for (var i=0; i<document.getElementsByClassName('letterdiv').length; i++) {
		if (document.getElementsByClassName('letterdiv')[i].textContent == guessLetterBox.value.toUpperCase()) {
			document.getElementsByClassName('letterdiv')[i].style.color = 'grey';
			document.getElementsByClassName('letterdiv')[i].style.textDecoration = 'line-through';
		}
	}
	if (gameWord.includes(guessLetterBox.value)) {
		correctLetter();
	} else {
		incorrectLetter();
	}
}


function correctWord() {
	for (var i=0; i<gameWord.length; i++) {
		letterBoxes[i].style.color = '#092C5C';
		letterBoxes[i].style.borderColor = '#22bb33';
	}
	// endGame() 
}


function incorrectWord() {
	for (var i=0; i<bodyParts.length; i++) {
		if (bodyParts[i].style.display == 'none') {
			bodyParts[i].style.display = 'inline';
			break;
		}
	}
	for (var i=0; i<letterBoxes.length; i++) {
		letterBoxes[i].style.borderColor = '#bb2124';
	}
	setTimeout(function() {
		for (var i=0; i<letterBoxes.length; i++) {
			if (letterBoxes[i].style.borderColor != '#95C0F7') {
				letterBoxes[i].style.borderColor = '#95C0F7';
			}
		}
	}, 500)
	guessWordBox.value = '';
}

function checkWord() {
	if (guessWordBox.value.toLowerCase() == gameWord) {
		return correctWord();
	} else {
		return incorrectWord();
	}
}


guessLetterBox.addEventListener('keyup', function(event) {
	if (event.keyCode === 13) {
		checkLetter();	
	}
})

guessWordBox.addEventListener('keyup', function(event) {
	if (event.keyCode === 13) {
		checkWord();
	}
})



