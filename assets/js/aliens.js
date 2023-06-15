const aliens = [
    'besta',
    'chamas',
    'diamante',
    'quatro-bracos',
    'ultra-t',
    'xlr8',
    'massa-cinzenta',
    'insectoide',
    'fantasmatico',
    'bala-canhao',
    'aquatico',
    'mega-olhos',
    'lobisben',
    'glutao',
    'gigante',
    'clone',
    'cipo-selvagem',
    'ben-victor',
    'benmumia',
]

const gridAliens = document.querySelector('.aliens__grid');

function carregarAliens(){

    gridAliens.innerHTML += aliens.map((alien) => `
    <div class="aliens__grid__card">
        <img src="./assets/imgs/${alien}.png" alt="${alien}">
        <span><h2>${alien}</h2></span>
    </div>
    `).join('')
}

carregarAliens()