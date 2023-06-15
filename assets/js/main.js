const aliensButton = document.getElementById('aliens-page');
const omnitrixButton = document.getElementById('omnitrix');

aliensButton.addEventListener('click', () => {
    window.location.href = `${window.location.href}aliens.html`;
})

omnitrixButton.addEventListener('click', () => {
    window.location.href = `${window.location.href}omnitrix.html`;
})

