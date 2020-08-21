// Selecting the Modal object
const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];

const addBackdrop = document.getElementById('backdrop');
const cancelButton = document.querySelectorAll('.btn--passive');

// Selecting the Add Movie button on the header
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

const toggleMovieModal = () => { // function() {}
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const toggleBackdrop = () => {
    addBackdrop.classList.toggle('visible');
};

startAddMovieButton.addEventListener('click', toggleMovieModal);