const galery = document.querySelector(".galery")
const contact = document.querySelector(".contact")
const title = document.querySelector(".title")

const handleChange1 = ()=>{
    title.innerHTML = "Bu sehife gallery sehifesidir"
}
const handleChange2 = ()=>{
    title.innerHTML = "Bu sehife elaqe sehifesidir"
}
galery.addEventListener("click", handleChange1)
contact.addEventListener("click", handleChange2)