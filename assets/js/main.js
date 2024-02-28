/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

// Facciamo delle let per stabilire cosa prendiamo dal markup

let grid = document.getElementById('container_list')
console.log(grid);
let playButton = document.querySelector("button");
console.log(playButton);

// formiamo le rows and column al interno del div container list 

// facciamo una funzione in quale generiamo le righe e le collone 
function listContainer() {

    // Generiamo le righe del container list
    for (let i = 0; i < 10; i++) {
        // Creiamo un elemento div per rappresentare la riga
        let row = document.createElement('div');
        row.classList.add('container-row');
        console.log(row);

        // Aggiungiamo la riga al container della griglia
        grid.appendChild(row);

        // Generiamo le colonne della riga 
        for (let y = 0; y < 10; y++) {
            // facciamo aggiungere un elemento div per ogni cubo
            let column = document.createElement('div');
            column.classList.add('container-column');
            console.log(column);
            // Assegniamo un numero progressivo alla cella
            let progressiveNumber = i * 10 + y + 1;
            // mettiamo nella cella il numero progressivo che lo abbiamo definito prima nella let
            column.innerHTML = progressiveNumber;
            console.log(progressiveNumber);

            // Mettiamo alla riga la rispetiva cella 
            row.appendChild(column);
        }
    }
}
