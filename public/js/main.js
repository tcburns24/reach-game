


var bodyParts = document.getElementsByClassName('body');
//var gameActive = false;
var gameNumber = 0;
var wins = 0;
var gameWord = null;
var wrongLetterCount = 0;
var correctLetterCount = 0;
var letterBoxRow = document.getElementsByClassName('letter-boxes')[0];
var letterBoxes = document.getElementsByClassName('letter-box');
var guessLetterBox = document.getElementsByClassName('letter')[0];
var guessWordBox = document.getElementsByClassName('word')[0];
var wordList = [];
var modals = document.getElementsByClassName('modal');
var selectors = document.getElementsByClassName('selector');
var allLetters = {
	'a': true,
	'b': true,
	'c': true,
	'd': true,
	'e': true,
	'f': true,
	'g': true,
	'h': true,
	'i': true,
	'j': true,
	'k': true,
	'l': true,
	'm': true,
	'n': true,
	'o': true,
	'p': true,
	'q': true,
	'r': true,
	's': true,
	't': true,
	'u': true,
	'v': true,
	'w': true,
	'x': true,
	'y': true,
	'z': true
};


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
			"<div class='letter-box'>.</div>"
		);
	}
}

function resetAllLetters() {
  var keys = Object.keys(allLetters);
  for (var i=0; i<26; i++) {
    allLetters[keys[i]] = true;
  }
  return allLetters;
}

function newGame() {
	resetAllLetters();
	gameNumber++;
	document.getElementsByClassName('gameNumText')[0].textContent = gameNumber;
	if (gameNumber > 1) {
		document.getElementsByClassName('winLossText')[0].textContent = (wins/(gameNumber-1)).toFixed(3);
	}
	correctLetterCount = 0;
	wrongLetterCount = 0;
	letterBoxRow.innerHTML = '';
	gameWord = null;
	for (var i=0; i<bodyParts.length; i++) {
		bodyParts[i].style.opacity = '0.2';
	}
	for (var i=0; i<document.getElementsByClassName('letterdiv').length; i++) {
		document.getElementsByClassName('letterdiv')[i].style.color = 'black';
		document.getElementsByClassName('letterdiv')[i].style.textDecoration = 'none';
	}
	generateWords(
		parseInt(selectors[0].value), 
		parseInt(selectors[0].value)+1, 
		parseInt(selectors[1].value)
	);
	cancelModal();
}

function showModal(modalName) {
	console.log('showModal(' + modalName + ')')
	document.getElementsByClassName(modalName)[0].style.display = 'inline';
	modalName == 'end-game-win' ? 
		document.getElementsByClassName('gameword-display-win')[0].textContent = gameWord.toUpperCase() :
		document.getElementsByClassName('gameword-display-loss')[0].textContent = gameWord.toUpperCase()
	document.getElementsByClassName('game')[0].style.opacity = '0.2';
	document.getElementsByClassName('dashboard')[0].style.opacity = '0.2';
}

function cancelModal() {
	for (var i=0; i<modals.length; i++) {
		if(modals[i].style.display != 'none') {
			modals[i].style.display = 'none';
		}
	}
	document.getElementsByClassName('game')[0].style.opacity = '1.0';
	document.getElementsByClassName('dashboard')[0].style.opacity = '1.0';
}


function incorrectLetter() {
	if (wrongLetterCount < 6) {
		for (var i=0; i<bodyParts.length; i++) {
			if (bodyParts[i].style.opacity == '0.2') {
				bodyParts[i].style.opacity = '1.0';
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
	} else {
		bodyParts[5].style.display = 'inline';
		recordGame(0);
	}
}

function flashWarning(letter) {
	document.getElementsByClassName('warning-text')[0].textContent = letter+' is unavailable';
	setTimeout(function() {
		document.getElementsByClassName('warning-text')[0].textContent = '';
	}, 750);
	guessLetterBox.value = '';
}


function checkLetter() {
	if (!allLetters[guessLetterBox.value.toLowerCase()]) {
		return flashWarning(guessLetterBox.value);
	} else {
		allLetters[guessLetterBox.value] = false;
	}
	// Adjust font to indicate which letters have been changed:
	for (var i=0; i<document.getElementsByClassName('letterdiv').length; i++) {
		if (document.getElementsByClassName('letterdiv')[i].textContent == guessLetterBox.value.toUpperCase()) {
			document.getElementsByClassName('letterdiv')[i].style.color = 'grey';
			document.getElementsByClassName('letterdiv')[i].style.textDecoration = 'line-through';
		}
	}
	// Loop through gameword, input text value into letterBoxes, and indicate correct with green border:
	if (gameWord.includes(guessLetterBox.value.toLowerCase())) {
		var letter = guessLetterBox.value.toLowerCase();
		for (var i=0; i<gameWord.length; i++) {
			if (gameWord[i] == letter) {
				correctLetterCount++;
				letterBoxes[i].textContent = letter.toUpperCase();
				letterBoxes[i].style.color = '#092C5C';
				letterBoxes[i].style.borderColor = '#22bb33';
			}
		}
		// now revert the border color 500ms later:
		setTimeout(function() {
			for (var i=0; i<letterBoxes.length; i++) {
				if (letterBoxes[i].style.borderColor != '#95C0F7') {
					letterBoxes[i].style.borderColor = '#95C0F7';
				}
			}
		}, 500)
		guessLetterBox.value = '';
		if (correctLetterCount == gameWord.length) {
			recordGame(1);
		} else {
			correctLetter();
		}
	} else {
		wrongLetterCount++;
		incorrectLetter();
	}
}


function correctWord() {
	for (var i=0; i<gameWord.length; i++) {
		letterBoxes[i].style.color = '#092C5C';
		letterBoxes[i].style.borderColor = '#22bb33';
	}
	guessWordBox.value = '';
	recordGame(1);
}


function incorrectWord() {
	if (wrongLetterCount < 6) {
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
	} else {
		recordGame(0);
	}
	guessWordBox.value = '';
}

function checkWord() {
	if (guessWordBox.value.toLowerCase() == gameWord) {
		correctWord();
	} else {
		wrongLetterCount++;
		incorrectWord();
	}
	guessWordBox.value = '';
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


function recordGame(result) {
	if (result === 1) {
		wins++;
		showModal('end-game-win');
	} else if (result === 0) {
		showModal('end-game-loss');
	}
}








