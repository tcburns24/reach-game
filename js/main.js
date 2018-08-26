var bodyParts = document.getElementsByClassName('body');
var gameActive = false;
var gameNumber = 0;
var gameWord = null;
var letterBoxRow = document.getElementsByClassName('letter-boxes')[0];


var wordList = {
	short: ['bug', 'run', 'tall', 'warm', 'cold'],
	medium: ['weather', 'autumn', 'winter', 'coffee', 'sneaker'],
	long: ['ubiquitous', 'harmonious', 'starbucks', 'loquacious', 'indigo']
};

function generateWord(param) {
	var x = Math.floor(Math.random() * wordList.param.length);
	return wordList.param[x];
}

function displayBlanks(text) {
	for (var i=0; i<text.length; i++) {
		letterBoxRow.innerHTML += (
			"<div class='letter-box'>" + text[i] + "</div>"
		);
	}
}

function newGame(wordLen) {
	console.log('reached point A');
	if (!gameActive) {
//		gameActive = true;
		for (var i=0; i<bodyParts.length; i++) {
			bodyParts[i].style.display = 'none';
		}
		console.log('reached point B');
		gameWord = generateWord(wordLen);
		console.log("gameWord = " + gameWord);
		displayBlanks(gameWord);
	}
}










