const icons = [
    {
        name: 'cat',
        prefix: ' fa-cat',
        type: 'animal',
        family: 'fa-solid',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: ' fa-crow',
        type: 'animal',
        family: 'fa-solid',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: ' fa-dog',
        type: 'animal',
        family: 'fa-solid',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: ' fa-dove',
        type: 'animal',
        family: 'fa-solid',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: ' fa-dragon',
        type: 'animal',
        family: 'fa-solid',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: ' fa-horse',
        type: 'animal',
        family: 'fa-solid',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: ' fa-hippo',
        type: 'animal',
        family: 'fa-solid',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: ' fa-fish',
        type: 'animal',
        family: 'fa-solid',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: ' fa-carrot',
        type: 'vegetable',
        family: 'fa-solid',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: ' fa-apple-whole',
        type: 'vegetable',
        family: 'fa-solid',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-lemon',
        type: 'vegetable',
        family: 'fa-solid',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-pepper-hot',
        type: 'vegetable',
        family: 'fa-solid',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-user-astronaut',
        type: 'user',
        family: 'fa-solid',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-user-graduate',
        type: 'user',
        family: 'fa-solid',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-user-ninja',
        type: 'user',
        family: 'fa-solid',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-user-secret',
        type: 'user',
        family: 'fa-solid',
        color: 'blue'
    }
];
const container = document.querySelector(".container")
function selezionaIcons() {

    let filter = document.getElementById("filter").value
    //console.log("filtro :", filter)
    switch (filter) {
        case "1":
        default:
            break
        case "2":
            stampaIcons(
                icons.filter((listIcons) => listIcons.type === "animal"))

            break
        case "3":
            stampaIcons(
                icons.filter((listIcons) => listIcons.type === "vegetable"))
            break
        case "4":
            stampaIcons(
                icons.filter((listIcons) => listIcons.type === "user"))
            break
    }
}

function stampaIcons(listIcons) {
    container.innerHTML = ""
    for (i = 0; i < listIcons.length; i++) {

        container.innerHTML += `
                    <div class="box ${listIcons[i].color}">
                    
                    <i class="${listIcons[i].family} ${listIcons[i].prefix}"></i>
                    <p>${listIcons[i].name}</p>

                    </div>
                    `
    }
}
document.getElementById("filter").addEventListener("change", selezionaIcons)

//console.log(document.getElementById("filter"))

stampaIcons(icons);

// function stampaAnimali(listIcons){
//     const animal = icons.filter((listIcons)=>listIcons.type === "animal" )
// console.log(animal)
// }
// stampaAnimali(icons)


// function stampaVegetable(listIcons){
//     const vegetable = icons.filter((listIcons)=>listIcons.type === "vegetable" )
// console.log(vegetable)
// }
// stampaVegetable(icons)


// function stampaUser(listIcons){
//     const user = icons.filter((listIcons)=>listIcons.type === "user" )
// console.log(user)
// }
// stampaUser(icons)