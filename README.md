# HANGMAN

#### As part of the applicaiton process into LinkedIn's 2018 REACH Apprenticeship cohort.


## WHAT IS HANGMAN?
Welcome to Hangman! This version of hangman offers human-vs-computer play where players can see their win-loss record in real time. Work your way from short words to long ones, from simple words to complex ones, and challenge yourself to maintain a perfect winning percentage.

## GETTING SET UP
There are two ways to enjoy this version of hangman, locally or remote. The instructions for both options are included below. Please pay extra attention to the Allowing CORS section; this is important for both local and remote players.

#### 1) Locally
To play Hangman locally, visit this public github repository (https://github.com/tcburns24/reach-game), and clone it to your machine. CD into the cloned directory, and enter `rackup` on your terminal. The game should be available on your localhost port 9292.

	
#### 2) Remote 
To play remotely, enter this URL in your browser:(https://reach-2018-hangman.herokuapp.com/) . The game is hosted on Heroku for your convenience.


#### Allowing CORS
Whether you choose to play locally or remotely, you’ll need to allow cross-origin requests on your browser. Cross-Origin Restriction Sharing (CORS) is a standard security measure for most browsers, so follow the instructions below to enable the game for your browser of choice:

###### Chrome
1) Open Chrome settings
2) Search for “Cors” under extensions
3) Add the CORS extension and turn it on by clicking on the icon in the top right of your Chrome window.

###### Safari
1) Open “Preferences” under the “Safari” menu
2) Check the box next to “Show Develop menu in menu bar” under the “Advanced” tab
3) Enable “Disable Cross-Origin Restrictions” in the Develop menu

Safari’s security standards are particularly high. If the game still doesn’t run even after enabling “Disable Cross-Origin Restrictions,” I recommend attempting the game on another browser. 

###### IE
1) Select the “Tools” menus
2) Click the “Security” tab
3) Click “Custom level”
4) Select “Enable” under “Access data sources across domains”


###### Firefox
1) Download and add the “Cors Everywhere” extension [here](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/?src=recommended "CORS Everywhere") 


## WHY WAS THIS BUILT?
This hangman game was built as part of the application process to LinkedIn’s 2018 REACH apprenticeship. For more information about REACH, you visit [this page](https://careers.linkedin.com/reach "REACH").

Hangman was written in plain JavaScript, HTML, and CSS. Since this project is part of the application process to REACH, I wanted to present an honest representation of my programming skills, therefore I opted not to use a JavaScript framework like React or Vue. The code “base” is meant to be web development in its purest form: JS + HTML + CSS = Love and joy!

Given that I had one week to complete the project while working full-time, I knew I’d need to be strategic about limiting the scope of the app so that I could submit a complete project on time. If I had more time with the project, there are a few things I’d like to change and expand: 
Use a JavaScript framework. Some parts of the code are screaming for a JavaScript framework; take the “modal” divs, for example. A `v-if`/`v-else` governing the text on the div depending on the result of game would make for much more efficient and clean code than the current version’s hodgepodge of HTML. Vue could also have been helpful in reconstructing the `checkLetter` function. In its current version, the checkLetter() function calls correctLetter() or incorrectLetter() depending on the gameWord variable. The next time I build a similar app, I’ll utilize Vue’s v-model feature to launch functions off of constant data.

## CONTRIBUTING
Due to my desire to present only my own work to the REACH program, Hangman is not yet open for contributions.