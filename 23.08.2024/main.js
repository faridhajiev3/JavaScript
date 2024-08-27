const burger = document.querySelector(".burger");
const menuBars = document.querySelector(".menu");
const mark = document.querySelector(".fa-xmark");
const body = document.body;

menuBars.addEventListener("click", function () {
    burger.classList.add("ins");
    body.classList.add("no-scroll");
});

mark.addEventListener("click", function () {
    burger.classList.remove("ins");
    body.classList.remove("no-scroll");
});
