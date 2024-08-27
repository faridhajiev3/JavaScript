// const input1 = document.getElementById("input1")
// const input2 = document.getElementById("input2")
// const menu = document.getElementById("menu")
// const border = document.querySelector(".border")

// const handleChange = ()=>{
//     const input = input1.value
//     border.style.backgroundColor = input
// }

// const borderChange = ()=>{
//     border.style.width = input2.value;
//     border.style.height = input2.value;
//     border.style.borderRadius = "50%";
// }
// menu.addEventListener("click", handleChange)
// menu.addEventListener("click", borderChange)


// const inputSearch = document.getElementById("inputSearch")
// const add = document.getElementById("add")
// const numbers = document.querySelector(".numbers")

// const searchInput = () =>{

// }

// add.addEventListener("click", searchInput)

// let sa = numbers.split()
// console.log(sa)


const inputSearch = document.getElementById("inputSearch");
const add = document.getElementById("add");
const des = document.getElementById("des");
const numbers1 = document.querySelector(".numbers");
const numbers2 = document.querySelector(".numbers").textContent;

// const searchInput = () => {
//     const searchValue = inputSearch.value;
//     if (searchValue) {
//         const numberArray = numbers.innerHTML.split(",");
//         const array = numberArray.map(num => {
//             if (num == searchValue) {
//                 return `<span style="color: red;">${num}</span>`;
//             }
//             return num; 
//         });
//         numbers.innerHTML = array.join(","); 
//     }
// }


const searchInput = () => {
    let searchWord = inputSearch.value
    let res = numbers2.split(" ").map(word => {
        if (word == searchWord) {
            des.innerHTML = word
            return `<mark>${word}</mark>`
        } else {
            des.innerHTML = "bele bir soz yoxdur"
            return word
        }
    }).join(" ")
    numbers1.innerHTML = res
}

add.addEventListener("click", searchInput)


const array = [1, "adam", 2, 5, 7, undefined, "ruslam", 4, 12, 6, null]

const array2 = []
if (array.includes(2)) {
    const filteredArray = array.filter(item => typeof item === "number");

    array2.push(filteredArray);
}



console.log(array2)
array2[0].sort(function (a, b) {
    return a - b
});


console.log(array2)


const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
    return a - b
});

console.log(points)