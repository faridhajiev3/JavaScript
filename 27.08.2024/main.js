const add = document.getElementById("add")

add.addEventListener("click", function () {
    const input = document.getElementById("input")

    const inputs = Number(input.value)

    let count = true
    for (let index = 2; index < inputs; index++) {
        if (inputs % index == 0) {
            count = false
        }
    }

    if (count) {
        console.log("sade");
    } else {
        console.log("murekkeb")
    }
})

function ebobFind(a, b) {
    let ebob = 0
    if (a > b) {
        ebob = b
    } else {
        ebob = a
    }

    while (a % ebob != 0 || b % ebob != 0) {
        ebob--
    }
    return ebob
}
console.log(ebobFind(24, 22))

function ekokFind(a, b) {
    let ekok = 0
    if (a > b) {
        ekok = a
    } else {
        ekok = b
    }
    
    while (ekok % a != 0 || ekok % b != 0) {
        ekok++
    }
    return ekok
}
console.log(ekokFind(24, 22))