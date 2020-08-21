// Selecting the Modal object
const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];

// Selecting the Backdrop div
const addBackdrop = document.getElementById('backdrop');
// const addBackdrop = document.body.firstElementChild;

// Selecting the Cancel button in the Modal
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
// const cancelButton = document.querySelectorAll('.btn--passive');

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

const backdropClickHandler = () => {
    toggleMovieModal();
};

const cancelAddMovie = () => {
    toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
addBackdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
// cancelButton[0].addEventListener('click', toggleMovieModal);