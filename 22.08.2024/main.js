// const title = document.getElementById("title")

// const number1 = Number(prompt("1-ci eded"))
// const number2 = Number(prompt("2-ci eded"))

// function ebob(a, b) {
//     if (b === 0) {
//         return a;
//     }
//     return ebob(b, a % b);
// }

// function ekob(a, b) {
//     return (a * b) / ebob(a, b);
// }

// console.log(ekob(16,24))
// title.innerHTML = ekob(number1, number2)



// box.addEventListener("click", function () {
    
// });

const box = document.querySelector(".box");
const boxx = document.querySelector(".boxx");
const minibox = document.querySelector(".minibox");
const miniboxx = document.querySelector(".miniboxx");

box.addEventListener("click", function () {
    minibox.addEventListener("click", function () {
        minibox.style.backgroundColor = "#e51414";
    });
    
});

boxx.addEventListener("click", function(){
    miniboxx.addEventListener("click", function(){
        miniboxx.style.backgroundColor = "#17e514"
    })
})


const array = [2,-4, 7, 3, 11, -8]

const positive =  array.filter(item => item > 0)

console.log(positive)

const kvadrat = positive.map(item => item * item )

console.log(kvadrat)

let a = 3
let b = 5

a =  b - a

b = b - a 
console.log(b)

a = b + a
console.log(a)
