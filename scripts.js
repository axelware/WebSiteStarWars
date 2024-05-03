// Variáveis para as seções de filmes e botões de navegação
var firstSixFilmsSection = document.getElementById('first-six-films');
var nextSixFilmsSection = document.getElementById('next-six-films');
var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');

// Função para mostrar os primeiros 6 filmes
function showFirstSixFilms() {
    firstSixFilmsSection.style.display = 'block';
    nextSixFilmsSection.style.display = 'none';
    prevButton.disabled = true; // Desabilita o botão "Anterior"
    nextButton.disabled = false; // Habilita o botão "Próximo"
}

// Função para mostrar os próximos 6 filmes
function showNextSixFilms() {
    firstSixFilmsSection.style.display = 'none';
    nextSixFilmsSection.style.display = 'block';
    prevButton.disabled = false; // Habilita o botão "Anterior"
    nextButton.disabled = true; // Desabilita o botão "Próximo"
}

// Inicialmente, mostrar os primeiros 6 filmes e desabilitar o botão "Anterior"
showFirstSixFilms();

// Event listeners para os botões de navegação
prevButton.addEventListener('click', showFirstSixFilms);
nextButton.addEventListener('click', showNextSixFilms);
