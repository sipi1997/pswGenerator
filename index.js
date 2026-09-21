let allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let characters = [...allCharacters]  // mi creo due variabili per i caratteri, una fissa allCharacters e una di lavoro characters
let pswBtn = document.getElementById("psw-btn")
let pswFieldsEl = document.querySelectorAll(".psw-field")
let pswFields = []
let nCharacters = 15
let specialsEl = document.getElementById('specials-btn')
let inputCharaEl = document.getElementById("character-input")


specialsEl.addEventListener("click", function toggleSpecialsCharacters () { 
    //utilizzo due variabili per i caratteri in modo da avere mai [] vuoti
    let noSpecials = allCharacters.slice(0, 62) //seleziono la nuova parte di array (da, a)
    let specials = allCharacters.slice(62)//seleziono la nuova parte di array (da)
    if (specialsEl.classList.contains("active") === false){
        specialsEl.classList.add("active")
        characters = noSpecials   
    } else if (specialsEl.classList.contains("active") === true){
        characters = [...noSpecials , ...specials]
        specialsEl.classList.remove("active")        
    }
})

pswBtn.addEventListener("click", function(){
    pswFieldsEl.forEach(function(pswfield) {
        pswfield.style.display = 'inline-block'
        pswfield.classList.remove("copied")
    })
    pswFields = [[],[]]
    generatePassword()
})

function generatePassword(){
    if (inputCharaEl.value != 0 ){  //aggiunto controllo sull'input
        nCharacters = inputCharaEl.value 
    }
    for (let i = 0 ; i < 2 ; i++){ // svolgo per 2 volte, 2 password
        for (let n = 0 ; n < nCharacters ; n++){ //svolgo per 15 volte, 15 caratteri
            let randomIndex = Math.floor(Math.random() * characters.length) //prendo un numero, sarà l'index
            let randomCharacter = (characters[randomIndex])  // il numero diventa un carattere
            pswFields[i].push(randomCharacter) //metto questo carattere nell'array
        }
        pswFieldsEl[i].textContent = pswFields[i].join("")
        pswFieldsEl[i].addEventListener("click", function () { //aggiunto il copy on click, approfittando del ciclo
            let testo = pswFieldsEl[i].textContent
            navigator.clipboard.writeText(testo)
            pswFieldsEl[i].classList.add("copied")
        })
    }
}
