var bodyParts = document.getElementsByClassName('body');
var gameActive = false;
var gameNumber = 0;
var gameWord = null;
var letterBoxRow = document.getElementsByClassName('letter-boxes')[0];
var letterBoxes = document.getElementsByClassName('letter-box');
var guessLetterBox = document.getElementsByClassName('letter')[0];
var guessWordBox = document.getElementsByClassName('word')[0];
var wordList = [];



function generateWord(diff, minLen, maxLen) {
	$.get('http://app.linkedin-reach.io/words', {
		difficulty: diff,
		minLength: minLen,
		maxLength: maxLen,
		start: 2,
		count: 50
	})
	.done(function(data) {
		console.log('data = ' + data);
		for (var i=0; i<data.split('\n').length; i++) {
			wordList.push(data.split('\n')[i])
		}
	})
	return wordList[Math.floor(Math.random() * wordList.length)];
}

function displayBlanks(text) {
	for (var i=0; i<text.length; i++) {
		letterBoxRow.innerHTML += (
			"<div class='letter-box'>" + text[i] + "</div>"
		);
	}
}

function newGame(paramArr) {
	if (!gameActive) {
		gameActive = true;
		for (var i=0; i<bodyParts.length; i++) {
			bodyParts[i].style.display = 'none';
		}
		gameWord = generateWord(paramArr[0], paramArr[1], paramArr[2]);
		console.log("gameWord = " + gameWord);
		displayBlanks(gameWord);
	}
}

function showModal(modalName) {
	document.getElementsByClassName(modalName)[0].style.display = 'inline';
	document.getElementsByClassName('game')[0].style.opacity = '0.2';
	document.getElementsByClassName('dashboard')[0].style.opacity = '0.2';
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



