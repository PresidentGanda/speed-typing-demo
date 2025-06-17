// declare and define variables that refer to HTML elements
let btn = document.querySelector(".startBtn");
let time = document.querySelector(".time");
let score = document.querySelector(".score");
let test = document.querySelector('.test');

// running time of the timer (during an iteration when the value changes)
// necessary for countdown functionality
let curr_time = document.querySelector(".time");

let seconds = 60;
let points = 0;

// variable that holds the letter typed
let typed;
// spans hold individual letters of the test word
let spans;
// keeps track of when the game is active (to prevent double starting the game)
let game_active = false;

// make your list of test words here
// you may change the existing words
let list = ["the","quick","brown","fox","jumps","over","the","lazy","dog"];

/*
 *
 * countdown()
 * 
 */

function countdown() {
    let timer = setInterval(function(){
        seconds -= 1;
        time.innerHTML = seconds;
        if (seconds <= 0){
            alert("Game is over. You got " + points);
            score.innerHTML = "0";
            test.innerHTML = "";
            time.innerHTML = "60";
            game_active = false;
            clearInterval(timer);
            seconds = 60;
            points = 0;
        }
    }, 1000);

}





/*
 *
 * random_word()
 * 
 */

function random_word() {
    let random = Math.floor(Math.random() * list.length);
    let word = list[random].split("");
    test.innerHTML = "";
    for(let i = 0; i< word.length; i ++){
        let span = document.createElement("span");
        span.classList.add("span");
        span.innerHTML = word[i];
        test.appendChild(span);
        
    }
    spans = document.querySelectorAll(".span");
}



/*
 *
 * btn event listener
 * 
 */
// button must start countdown and produce random word
btn.addEventListener("click", function() {
    //prevents restarting mid-game
    if (game_active === true) {
        return;
    }
    //prevents button double click/ further clicks
    // btn.disabled = true; //unnecessary
    // status of if there is a game/round that is ongoing
    game_active = true;

    // uses/calls function that allow for countdown timer
    // uses/calls function for random word generation
    countdown();
    random_word();
});

/*
 *
 * typing(event)
 * 
 */







//enables keyboard input (default)
document.addEventListener("keydown", typing, false);