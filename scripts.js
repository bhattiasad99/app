'use strict'
//functions
const showHighScore = function(number) {
    document.querySelector('#highScore').textContent = number
}
const message = function (message) {
    document.querySelector('.score__heading').textContent = message
}
const inputBox = function () {return document.querySelector(".inputBox").value}
const randomNumberGenerator = function () {return Math.trunc((Math.random()*20)+1)}
//variables
let target = randomNumberGenerator()
let currentScore = 20;
let highScore = 0;
//functionality
showHighScore(highScore)
document.querySelector('.checkButton').addEventListener('click', function () {
    const guess = Number(document.querySelector(".inputBox").value)
    if (!guess) {
        message('😠 Invalid Input!') 
    }

    else if (guess === target) {
        message("🎉 Correct Number, you WIN!");
        document.querySelector('body').style.backgroundColor = '#4dff5f';
        document.querySelector('.box').style.transform = 'scaleX(1.3)';
        document.querySelector('.box').textContent = target
        if (currentScore >= highScore) {
            highScore = currentScore;
        }
        showHighScore(highScore)
    }

    else if (guess != target) {
        message(guess > target ? "Too high! Try again..." : "Too low! Try again...")
        if (currentScore > 0) {
            currentScore = currentScore - 1
            document.querySelector('#currentScore').textContent = currentScore
        }
        if (currentScore === 0) {
            message("Game Over!")
            document.querySelector('body').style.backgroundColor = "#b00000"
        }

        
    }
}
)
console.log(target)
document.querySelector(".topLeft").addEventListener("click",function() {
    target = randomNumberGenerator()
    currentScore = 20
    message('Start guessing...');
    document.querySelector('.box').textContent ='?';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector(".inputBox").value = "&nbsp;"
    document.querySelector('.box').style.transform = "scaleX(1)"
    document.querySelector('#currentScore').textContent = 0
})