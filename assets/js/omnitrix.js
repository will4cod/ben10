const video = document.querySelector('video');
const transformarButton = document.getElementById('transformar');
const alienName = document.querySelector('.omnitrix__name');

const aliens = [
    'besta',
    'fantasmatico',
    'fantasmatico',
    'xlr8',
    'aquatico',
    'diamante',
    'insectoide',
    'quatro-bracos',
    'massa-cinzenta',
    'chamas',
    'gigante',
    'mega-olhos',
    'benmumia',
    'ben-victor',
    'lobisben',
    'cipo selvagem',
    'clone',
    'glutao',
    'bala-canhao',
    'ultra-t',
    'besta',
]

transformarButton.addEventListener('click', function(e) {
    e.preventDefault();

    video.loop = true
    video.currentTime = 0
    video.play()

    const numeroAleatorio = Math.floor(Math.random() * 17)
    const alienAleatorio = numeroAleatorio * 94;

    setTimeout(() => {
        video.pause()

        alienName.innerHTML = aliens[numeroAleatorio]
    }, 1878 + alienAleatorio);

    // Fantasmatico pega 2 posições 
    // Cada alien a 94 

})
