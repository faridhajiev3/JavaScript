
//todo task 1//
// const btn = document.getElementById("btn")

// btn.addEventListener("click", function(){
//     const random = Math.trunc(Math.random() * 6) + 1;
//     console.log(random)
//     const inputs = document.getElementById("inputs")
//     const title = document.getElementById("title")

//     const input = inputs.value
//     if(input == random){
//         title.innerHTML = "Təbriklər"
//     }else{
//         title.innerHTML = "Cavab sehvdir"
//     }
// })


//todo task 2//
// const success = document.getElementById("success")
// const colors = ["#dda15e", "#00b4d8", "#d4a373", "#9d0208", "#b9fbc0"]

// const write = prompt()

// const end = colors.indexOf(write)

// if (end == colors.indexOf()) {
//     success.innerHTML = `Secilen reng budur ${colors[write]}`
// } else {
//     success.innerHTML = "undefined"
// }

//! ikinic forma
// const colors = ["#dda15e", "#00b4d8", "#d4a373", "#9d0208", "#b9fbc0"]

// const write = Number(prompt());

// switch (write) {
//     case 1:
//         alert(colors[0]);
//         break;
//     case 2:
//         alert(colors[1]);
//         break;
//     case 3:
//         alert(colors[2]);
//         break;
//     case 4:
//         alert(colors[3]);
//         break;
//     case 5:
//         alert(colors[4]);
//         break;
//     default:
//         alert("Undefined");
// }


// //todo task 3//
// const click = document.getElementById("click");
// const add = document.getElementById("add");
// let count = 0;

// window.addEventListener("load", function () {
//     const score = document.getElementById("score");
//     const savedScore = localStorage.getItem("save");
//     if (score > savedScore) {
//         const des = document.getElementById("des");
//         des.innerHTML = savedScore;
//     }
//     click.addEventListener("click", function () {
//         const score = document.getElementById("score");
//         const des = document.getElementById("des");
//         count++;
//         score.innerHTML = `Xal: ${count}`;
//         des.innerHTML = `En yuksek xal: ${count}`;

//     });

// });
// add.addEventListener("click", function () {
//     const des = document.getElementById("des").innerHTML;
//     localStorage.setItem("save", des);
// });




//todo task 4//
// const add = document.getElementById("add");
// const looks = document.getElementById("looks");
// const arrayName = ["ruslan - 10"];

// add.addEventListener("click", function () {
//     const ages = document.getElementById("ages");
//     const names = document.getElementById("names");
//     const lists = document.getElementById("lists");
//     const name = names.value;
//     const age = ages.value;

//     arrayName.push(`${name} ${age}`);

//     looks.addEventListener("click", function () {

//         const li = document.createElement("li");
//         li.innerHTML = `${name} - ${age}`;
//         li.classList.add("title");

//         lists.appendChild(li);
//         arrayName.forEach((item) => {
//             console.log(item);
//         });
//     })
//     names.value = ""
//     ages.value = ""
// });


// console.log(arrayName);