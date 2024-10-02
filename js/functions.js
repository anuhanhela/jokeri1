
const button = document.querySelector('button');  
const table = document.querySelector('#numbers');    
const p = document.querySelector('p');           

let jokeriRivitLaskuri = 0;

button.addEventListener('click', arvoJokeriRivi);

function arvoJokeriRivi() {
  
    const uusiRivi = table.insertRow();
    

    const jokeriSolu = uusiRivi.insertCell();
    jokeriSolu.innerText = `${jokeriRivitLaskuri + 1}`;

    for (let i = 0; i < 7; i++) {
    
        const solu = uusiRivi.insertCell();
        const satunnaisluku = Math.floor(Math.random() * 10);
        solu.innerText = satunnaisluku;
    }

    jokeriRivitLaskuri++;
    p.innerText = `Valmiita rivejä ${jokeriRivitLaskuri}`;
}

