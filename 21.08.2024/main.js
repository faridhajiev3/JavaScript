"use strict"
const question = document.querySelector(".question")

const check = document.getElementById("check")

let randoms = Math.trunc(Math.random() * 20) + 1
question.innerHTML = randoms

let currentScore = 20
let highScoreValue = 0 

check.addEventListener("click", function () {
    const start = document.querySelector(".start")
    const checkInput = document.querySelector(".check-input")
    const score = document.querySelector(".score")
    const highscore = document.querySelector(".highscore")
    const border = document.querySelector(".border")
    let input = +(checkInput.value)

    if (checkInput.value === "") {
        start.innerHTML = "reqem"
    }
    else if (randoms === input) {
        start.innerHTML = "Start guessing: doğru"
        score.innerHTML = "Score 20";
        check.disabled = true
        border.classList.add("green")
    }
    else if (randoms > input) {
        start.innerHTML = "Start guessing: böyük"
        currentScore--
        score.innerHTML = `Score ${currentScore}`
    }
    else if (randoms < input) {
        start.innerHTML = "Start guessing: kiçik"
        currentScore--
        score.innerHTML = `Score ${currentScore}`
    }
})

const again = document.getElementById("again")

again.addEventListener("click", function () {
    const border = document.querySelector(".border")
    const score = document.querySelector(".score")
    const start = document.querySelector(".start")
    const checkInput = document.querySelector(".check-input")
    const highscore = document.querySelector(".highscore")

    if(currentScore > highScoreValue){
        currentScore === highScoreValue
    }

    highscore.innerHTML = `Highscore:${currentScore}`
    
    randoms = Math.trunc(Math.random() * 20) + 1;
    question.innerHTML = randoms;

    currentScore = 20;

    start.innerHTML = "Start guessing:";

    checkInput.value = "";
    check.disabled = false
    border.classList.remove("green")
});
