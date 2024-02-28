/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

// Facciamo delle let per stabilire cosa prendiamo dal markup

let grid = document.getElementById('container_list')
console.log(grid);
let playButton = document.querySelector("button");
console.log(playButton);

// facciamo una funzione in quale generiamo le righe e le collone 
function listContainer() {
    // Generiamo le righe del container list
    for (let i = 0; i < 10; i++) {
        // Creiamo un elemento div per rappresentare la riga
        let row = document.createElement('div');
        row.classList.add('container-row');
        console.log(row);

        // Generiamo le colonne della riga 
        for (let y = 0; y < 10; y++) {
            // Creiamo un elemento div per rappresentare la colonna
            let column = document.createElement('div');
            column.classList.add('container-column');
            console.log(column);

            // Assegniamo un numero progressivo alla cella
            let progressiveNumber = i * 10 + y + 1;

            // Creiamo un span per visualizzare il numero all'interno della cella
            let numberElement = document.createElement('span');
            numberElement.innerHTML = progressiveNumber;
            // Aggiungiamo il numero all'interno della cella

            column.appendChild(numberElement);

            console.log(progressiveNumber);
            // Aggiungiamo un event listener per cambiare il colore della cella quando viene cliccata
            column.addEventListener("click", function () {
//facciamo una let dove definiamo tutte le cell 
                let allCell = document.querySelectorAll('.container-column');
                //console.log(allCell);
//loop for per rimuovere la classe 
                for (i = 0; i < allCell.length; i++) {
                    allCell[i].classList.remove('cell-clicked');
                }
//usiamo toggle che aggiunge la classe (o la rimuove) nel nostro caso lo aggiunge 
                column.classList.toggle('cell-clicked');

                // Stampiamo in   console il numero della cella cliccata
                console.log('Clicked cell:', progressiveNumber);
            });

            // Mettiamo la colonna nella riga
            row.appendChild(column);
        }

        // Aggiungiamo la riga al container della griglia
        grid.appendChild(row);
    }
}
// quando si fa click sul button si genera la function per creare la griglia
playButton.addEventListener("click", function () {
    listContainer();
});

