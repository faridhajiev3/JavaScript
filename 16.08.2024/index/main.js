const inputColor = document.getElementById("inputColor")
const btn = document.getElementById("btn")
const box = document.querySelector(".box")

const handleChange = ()=>{
    const input = inputColor.value
    box.style.backgroundColor = input
}

btn.addEventListener("click", handleChange)