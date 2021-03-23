# Pre-work - *Memory Game*

**Memory Mayhem** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **John Vincent Welsh**

Time spent: **4** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
1. Better aesthetic.
2. Tally bar displaying the mistakes.
3. Different visual themes.
4. Various difficulties.
5. High scores

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/JS/js_random.asp
https://www.w3.org/Style/Examples/007/center.en.html
https://www.w3schools.com/css/css_border.asp
https://www.w3schools.com/css/css_border_rounded.asp
https://tutorialdeep.com/knowhow/css-align-button-right-left-center-position/
https://www.w3schools.com/js/js_htmldom_eventlistener.asp
https://www.w3schools.com/cssref/pr_background-image.asp


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
A challenge I encountered was developing a way to time the player. At the start of the problem I was unfamiliar with the set interval function
and how I would go about making a moving timer without a good amount of research. So, I used what I did know of making buttons disappear and just
needed to check the documentation for setInterval(). I made a line of buttons that will start to disappear at the start of the round using the
.hidden class that was given to us. This also makes higher rounds more challenging because the player must still wait for the computer to 
playback the sequence while the timer bar disappears, meaning they have to go faster each round. This timer bar method only introduced a two more
challenges. One of them was that the timer bar was resetting after the winFame()/loseGame() funtions were called, this was an easy fix because I implemented
a resetTimer() method. The other challenge was that I needed to start the timer interval and have a function that is executed at the end of each interval. This
was a problem because, initially, I tried to set the interval at the start of each turn which continiously gave me errors. This led me to 
find a common way to use the setInterval() function is by setting up it's own variable which I called interval.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]



## License

    Copyright John Welsh

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.