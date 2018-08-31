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

## WHAT I WOULD DO DIFFERENTLY
Hangman was written in plain JavaScript, HTML, and CSS. Since this project is part of the application process to REACH, I wanted to present aa honest a representation of my programming skills as possible. This is the reason you don't see JavaScript framework. Am I familiar with frameworks? Yes, I love React and Vue. But frameworks wouldn't tell the story of my path into programming; they're the icing I've just recently spread onto my programming cake. I'm confident that this version of Hangman tells an earnest story about my approach to coding and problem-solving, but with that said, there are a number of things I'll do differently the next time a similar coding challenge comes knocking on my door. 

#### 1. Use a JavaScript Framework
Some parts of the code are _screaming_ for a JavaScript framework. Take the “modal” divs, for example: a `v-if`/`v-else` to determine which text is displayed depending on the result of game would make for much more efficient and clean code than the current version’s hodgepodge of HTML. Vue could also have been helpful in reconstructing the `checkLetter` function. In its current version, the `checkLetter()` function calls `correctLetter()` or `incorrectLetter()` depending on the gameWord variable. The next time I build a similar app, I’ll utilize Vue’s v-model feature to launch functions off of constant data. 

Lastly, React or Vue would've allowed for less clumsy data interpolation. In the current version, the *Game Number:* and *Win Percentage* are updated as part of the logic in the `newGame()` function, but a cleaner way would be to simply interpolate the data (`Game Number: { gameNumber }`) directly in the DOM. 

#### 2. Improve Efficiency
This version of hangman is not the most effecient web app in the world. There are a ton of loops, and a ton of functions called. If you're a fan of efficient algorithms, you're probably not a fan of my game. I am familiar with big-O, and I do know about memory and memory leaks, but I elected to build the game this way because it tells a more honest story about how I developed my programming skills. If given an opportunity to refactor the whole app, big-O would be a much higher priority than it was for this version. 

#### 3. Expand the Scope
Given that I had one week to complete the project while working full-time, I knew I needed to be strategic about the scope of the project, and the number of features to include. For example, I originally allowed users to select word lengths from 3 to 10 letters until I discovered that a `$.get()` request to the API with paramaters `maxLength: 4` and `difficulty: 10` returned `0` results. Ideally, I'd have built an alert or warning that informs the user to change one of the parameters until at least `1` result returns. But for the sake of time, I chose to reduce the word length options down to 4-9 so that all the API calls return at least one result. I could see Vue's `:disable` feature coming in handy to disable the `New Game` button if the parameters won't return a result. 

This was also the line of reasoning for the "modals." Of course, these are not actual modals, they're just divs that appear and disappear via their CSS `display` property, but I elected to build the app this way because it would be faster than re-learning how to implement modals. I agree that legitimate modals would make for a better app, but I chose to make strategic sacrifices for the sake of time. 

#### 4. Use Node
The clumsiest part of the project is that your browser is throwing a fit over the API call due to cross-origin restrictions. After investigating how to solve the issue, I was left with user-unfriendly option of instructing that users' disable their browsers' CORS, or the more user-friendly option of building the app with NodeJS. I'm not at all familiar with Node; I've only taught myself a little bit, and I've not yet used it in a professional setting. Yes, using Node to circumvent the CORS issue would make for a smoother, much more user-friendly app, but I had to work within the time constraints, and my goal here is to present a project showcasing web development in its purest form: JS+HTML+CSS = Love and joy!

Thinking rationally about this project -- the app will be used LinkedIn engineers who I'm sure are A) more than capable of toggling their browser's cross-origin restrictions, and B) will be looking at the code to investigate my ability to code, not to play hangman! Therefore, I'm comfortable submitting a project that has its clumsy parts with the understanding that life goes on even if your cross-origin restrictions aren't disabled :-).  


## CONTRIBUTING
Due to my desire to present only my own work to the REACH program, Hangman is not yet open for contributions.