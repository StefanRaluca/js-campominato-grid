/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

// Facciamo delle let per stabilire cosa prendiamo dal markup

let grid = document.getElementById('container_list')
console.log(grid);
let playButton = document.querySelector("button");
console.log(playButton);
//creiamo un array vuota per i funghi 
let mushrooms = [];
// selezioniamo il span dal html 
let scoreElement = document.getElementById('score');
// creiamo un let impostato su false e quando sarà true (nel ciclo if )fermera il gioco
let gameStopped = false;
//Bonus
//selezioniamo il input 
let selectYourLivel = document.getElementById('difficultySelect');


//creiamo una function per generare i numeri casuali nel array mushrooms
function mushroomsGenerate(number) {
    mushrooms = [];
/*     let i = 0; */
    // facciamo un ciclo while per stabilire la condizione dei numeri nel array 
    while (mushrooms.length < 16) {
        //stabiliamo una variabile su false  per vedere se  posizione è duplicata
        let duplicatePosition = false;
        //generiamo un numero random compresso tra 1 e il numero totale delle celle 
        let positionMushrooms = Math.floor(Math.random() * (sizeContainer * sizeContainer)) + 1;


        //creiamo una condizione per la positione dei mushrooms con ciclo for e if
        for (i = 0; i < mushrooms.length; i++) {
            if (mushrooms[i] === positionMushrooms) {
                duplicatePosition = true;
                break;
            }
        }
        // Se la posizione non è duplicata, la pushiamo all'array dei funghi
        if (duplicatePosition === false) {

            mushrooms.push(positionMushrooms)

        }

    }


}
// definiamo una let (globale) vuota che prendera ogni volta altro valore in base alla scelta
let sizeContainer;
//facciamo una function con switch che lo definiamo livel ogni caso ha un livelo 
function containerList(livel) {
    //

    grid.innerHTML = '';
    switch (livel) {
        case '1':
            sizeContainer = 10;
            break;
        case '2':
            sizeContainer = 9;
            break;
        case '3':
            sizeContainer = 7;
            break;
        default:
            sizeContainer = 10;
    }
    //richiamiamo la funzione iniziale per fare la griglia
    listContainer();
    mushroomsGenerate()
}


// facciamo una funzione in quale generiamo le righe e le collone 
function listContainer() {
    // creiamo un let score dove definiamo 0;
    let score = 0;

    // Generiamo le righe del container list
    for (let i = 0; i < sizeContainer; i++) {
        // Creiamo un elemento div per rappresentare la riga
        let row = document.createElement('div');
        row.classList.add('container-row');
        console.log(row);

        // Generiamo le colonne della riga 
        for (let y = 0; y < sizeContainer; y++) {
            // Creiamo un elemento div per rappresentare la colonna
            let column = document.createElement('div');
            column.classList.add('container-column');
            console.log(column);

            // Assegniamo un numero progressivo alla cella
            let progressiveNumber = i * sizeContainer + y + 1;

            // Creiamo un span per visualizzare il numero all'interno della cella
            let numberElement = document.createElement('span');
            numberElement.innerHTML = progressiveNumber;
            // Aggiungiamo il numero all'interno della cella

            column.appendChild(numberElement);

            console.log(progressiveNumber);


            // console.log(mushrooms);

/* let numberOfProves = document.createElement('span')
numberOfProves.innerHTML=progressiveNumber;
column.appendChild(numberOfProves)
 */
            // Aggiungiamo un event listener per cambiare il colore della cella quando viene cliccata
            column.addEventListener("click", function () {
                //facciamo una let dove definiamo tutte le cell 
                let allCell = document.querySelectorAll('.container-column');
                //console.log(allCell);
                if (gameStopped) {
                    return; // Se il gioco è terminato, usciamo dalla funzione senza fare nulla
                }

                //usiamo toggle che aggiunge la classe (o la rimuove) nel nostro caso lo aggiunge 
                column.classList.toggle('cell-clicked');

                if (mushrooms.includes(progressiveNumber)) {
                    column.classList.add('mushrooms');
                    // alerta perchè hai calpestato la cassella del fungo
                    setTimeout(function(){
                        alert('You lose ' + score);
                    }, 500);
                    gameStopped = true;
                }
                else{
                    score++;
                    scoreElement.innerHTML = "Your Score: " + score;
             /*        console.log(score); */
                }

                // Stampiamo in   console il numero della cella cliccata
                console.log('Clicked cell:', progressiveNumber , mushrooms);
            });

            // Mettiamo la colonna nella riga
            row.appendChild(column);
        }

        // Aggiungiamo la riga al container della griglia
        grid.appendChild(row);
    }
    //chiamiamo la function che abbiamo creato per generare i funghi quando si genera anche la lista 
    mushroomsGenerate();
}
// quando si fa click sul button si genera la function per creare la griglia
playButton.addEventListener("click", function () {
    listContainer()
    let livel = difficultySelect.value;
    containerList(livel)
  /*   mushroomsGenerate(); */
   gameStopped = false;
});

