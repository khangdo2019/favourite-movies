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

// Selection the Add button in the Modal
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling; // Using the DOM traversal technique

// Selecting the Add Movie button on the header
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

// Getting user inputs from the Movie Modal
const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input');

// Getting the default information box
const entryTextSection = document.getElementById('entry-text');

// Getting the Delete modal
const deleteMovieModal = document.getElementById('delete-modal');

// Storing the movie inputs
const movies = [];

// Clearing the default information box if a movie item is added
const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const deleteMovie = movieId => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove(); // A more modern approach
    // listRoot.removeChild(listRoot.children[movieIndex]);
};

const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
};

// Deleting Movie Elements
const deleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();

    // deleteMovie(movieId);

};

// Rendering Movie items on the screen
const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element_image">
        <img src="${imageUrl}" alt="${title}">        
    </div>
    <div class="movie-element_info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `;

    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id)); // Deleting the element if user clicks that
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
};

const showMovieModal = () => { // function() {}
    addMovieModal.classList.add('visible');
    toggleBackdrop();
};

const toggleBackdrop = () => {
    addBackdrop.classList.toggle('visible');
};

const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
};

const clearMovieInput = () => {
    for (const usrInput of userInputs) {
        usrInput.value = '';
    }
};

const cancelAddMovieHandler = () => {
    closeMovieModal();
    clearMovieInput();
};

// Fetching & Validating user inputs
const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert('Please enter valid values (rating between 1 and 5)!');
    }

    // Adding a new movie to the Movies list
    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};

startAddMovieButton.addEventListener('click', showMovieModal);
addBackdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
// cancelButton[0].addEventListener('click', toggleMovieModal);
confirmAddMovieButton.addEventListener('click', addMovieHandler);