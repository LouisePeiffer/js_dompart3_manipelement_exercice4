// 1
let elements = document.querySelectorAll('#liste-competences>h2')
console.log(elements);

let objou = {
    html : "71%",
    css : "95%",
    js : "50%",
    react : "18%",
    laravel : "100%"
}

// 2
let i = 0
for (let el in objou) {
    console.log(objou[el]);
    i++
    let titre = elements[i]
    console.log(titre);
}
