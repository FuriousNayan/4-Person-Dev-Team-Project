// Gets the comic button, if clicked, go back to the main page, index.html
const comicButton = document.getElementById('return')
comicButton.addEventListener('click', function(){
    window.location.href = 'index.html';
})