// Create array with the all pictures  -  Creation tableau avec toutes les photos 
const allCards = [
    {
        name: "Arbre",
        img: "assets/img/arbre.jpg"
    },
    {
        name: "Ballons",
        img: "assets/img/ballons.jpg"
    },
    {
        name: "Fleur",
        img: "assets/img/fleur.jpg"
    },
    {
        name: "Main",
        img: "assets/img/main.jpg"
    },
    {
        name: "Velo",
        img: "assets/img/velo.jpg"
    },
    {
        name: "Feuille",
        img: "assets/img/feuille.jpg"
    },
    {
        name: "Statue",
        img: "assets/img/statue.jpg"
    },
    {
        name: "Pavot",
        img: "assets/img/pavot.jpg"
    },
    {
        name: "Arbre",
        img: "assets/img/arbre.jpg"
    },
    {
        name: "Ballons",
        img: "assets/img/ballons.jpg"
    },
    {
        name: "Fleur",
        img: "assets/img/fleur.jpg"
    },
    {
        name: "Main",
        img: "assets/img/main.jpg"
    },
    {
        name: "Velo",
        img: "assets/img/velo.jpg"
    },
    {
        name: "Feuille",
        img: "assets/img/feuille.jpg"
    },
    {
        name: "Statue",
        img: "assets/img/statue.jpg"
    },
    {
        name: "Pavot",
        img: "assets/img/pavot.jpg"
    },
];

// Create the variable from selector  - Creation variable selector id
const screenCards = document.querySelector("#screen");
// Date & jour 
var startTime = Date.now();
// Start points 
var points = 0
// Random & create array 
var choosenCards = []
// Function start game
function startGame(){
    if(!startTime){
        startTime = Date.now() 
        let screenCards = document.querySelector("#screen").childNodes
        for(let i = 0; i < screenCards.length; i++){
            let allCard = allCards.find(obj => {
                return obj.name === screenCards[i].data
            })
            screenCards[i].src = allCard.img
        }
        setTimeout(() => {
            for(let i = 0; i < screenCards.length; i++){
                screenCards[i].src = "assets/img/card.jpg"
            }
        }, 2000)
    }else{
        alert("Le jeu a commencé, mélangez les cartes pour recommencer")
    }
}
// Function create game 
function createGame(){
    startTime = null
    allCards.sort(()=>{
        return 0.5 - Math.random();
    })
    for(let i = 0; i < allCards.length; i++){
        let card = document.createElement("img")
        card.id = i
        card.data = allCards[i].name
        card.src = "assets/img/card.jpg"
        card.addEventListener("click", chooseCard)
        screenCards.appendChild(card)
    }
};

function chooseCard(){
    if(!startTime){
        alert("Clique sur c est parti! pour démarrer le jeu")
        return
    }
    let card = this;
    card.src = allCards[card.id].img
    choosenCards.push(card)

    if(choosenCards.length == 2){

        setTimeout(() =>{
            let card1 = choosenCards[0]
            let card2 = choosenCards[1]

            if(card1.data == card2.data){
                card1.src = "assets/img/done.jpg"
                card2.src = "assets/img/done.jpg"
                card1.removeEventListener("click", chooseCard)
                card2.removeEventListener("click", chooseCard)
                points += 1
            }else{
                card1.src = "assets/img/card.jpg"
                card2.src = "assets/img/card.jpg"
            }
            if(points == allCards.length /2){
                spentTime = (Date.now() - startTime) /1000
                alert(`Toutes nos félicitations!!! tu as fini le jeu en ${spentTime} secondes`)
                refreshScore(spentTime)
                points = 0
            }
            choosenCards = []
        }, 500)
    }
}

function restartGame() {
    screenCards.innerHTML = ""
    createGame()
}

function refreshScore(score) {
    let record = document.querySelector("#record").innerText
    if(record == "À quelle vitesse pouvez-vous trouver toutes les paires ?" || parseInt(record) > score){
        document.querySelector("#record").innerText = score.toString()
    }
}
