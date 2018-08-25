var getWord = function() {
	fetch('http://app.linkedin-reach.io/words')
  .then(function(response) {
    return response.text().then(function(text) {
      document.getElementsByClassName('textdiv')[0].innerHTML = text;
    })
  })
}

window.onload = getWord();