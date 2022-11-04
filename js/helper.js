// Populate dropdown menu with all the available genres
const populateGenreDropdown = (genres) => {
  const select = document.getElementById('genres')

  for (const genre of genres) {
      let option = document.createElement("option");
      option.value = genre.id;
      option.text = genre.name;
      select.appendChild(option);
  }
};

// Returns the current genre selection from the dropdown menu
const getSelectedGenre = () => {
  const selectedGenre = document.getElementById('genres').value;
  return selectedGenre;
};

// Displays the like and dislike buttons on the page
const showBtns = () => {
  const btnDiv = document.getElementById('likeOrDislikeBtns');
  btnDiv.removeAttribute('hidden');
};

// Clear the current movie from the screen
const clearCurrentMovie = () => {
  const moviePosterDiv = document.getElementById('moviePoster');
  const movieTextDiv = document.getElementById('movieText');
  moviePosterDiv.innerHTML = '';
  movieTextDiv.innerHTML = '';
};



// After liking a movie, clears the current movie from the screen and gets another random movie
const likeMovie = (movieInfo) => {
  addToLikedMovies(movieInfo);
  clearCurrentMovie();
  showRandomMovie();
};


// Create HTML for liked movies
const createLikedMovies = (list) => {
  const movieList = document.createElement('p');
  movieList.setAttribute('id', 'likedMovieList');
  movieList.innerHTML = list;
  return movieList;
}; 
 
// Display liked movies
const displayLikedMovies = (likedMovies) => {
  const movieListDiv = document.getElementById('likedMovies');
  const movieList = createLikedMovies(likedMovies);
  movieListDiv.appendChild(movieList);
} 


// After disliking a movie, clears the current movie from the screen and gets another random movie
const dislikeMovie = () => {
  clearCurrentMovie();
  showRandomMovie();
};

// Create HTML for movie poster
const createMoviePoster = (posterPath) => {
  const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;
  const posterImg = document.createElement('img');
  posterImg.setAttribute('src', moviePosterUrl);
  posterImg.setAttribute('id', 'moviePoster');
  return posterImg;
};

// Create HTML for movie title
const createMovieTitle = (title) => {
  const titleHeader = document.createElement('h1');
  titleHeader.setAttribute('id', 'movieTitle');
  titleHeader.innerHTML = title;
  return titleHeader;
};

// Create HTML for release date
const createReleaseDate = (date) => {
  const releaseDate = document.createElement('p');
  releaseDate.setAttribute('id', 'movieReleaseDate');
  releaseDate.innerHTML = date;
  return releaseDate;
};

// Create HTML for movie overview
const createMovieOverview = (overview) => {
  const overviewParagraph = document.createElement('p');
  overviewParagraph.setAttribute('id', 'movieOverview');
  overviewParagraph.innerHTML = overview;
  return overviewParagraph;
};

// Create HTML for cast list
const createCast = (castNames) => {
  const actors = document.createElement('p');
  actors.setAttribute('id', 'movieCast');
  actors.innerHTML = castNames;
  return actors; 
};

const createRatings = (ratings) => {
  const ratingSection = document.createElement('p');
  ratingSection.setAttribute('id', 'ratingSection');
  ratingSection.innerHTML = ratings;
  return ratingSection;
};

// Returns a random movie from the first page of movies
const getRandomMovie = (movies) => {
  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomIndex];
  return randomMovie;
};

// Uses the DOM to create HTML to display the movie
const displayMovie = (movieInfo, castNames, ratings) => {
  const moviePosterDiv = document.getElementById('moviePoster');
  const movieTextDiv = document.getElementById('movieText');
  const likeBtn = document.getElementById('likeBtn');
  const dislikeBtn = document.getElementById('dislikeBtn');
  

  // Create HTML content containing movie info
  const moviePoster = createMoviePoster(movieInfo.poster_path);
  const titleHeader = createMovieTitle(movieInfo.title);
  const releaseDate = createReleaseDate(movieInfo.release_date);
  const overviewText = createMovieOverview(movieInfo.overview);
  const castText = createCast(castNames);
  const ratingText = createRatings(ratings);

  // Append title, poster, and overview to page
  moviePosterDiv.appendChild(moviePoster);
  movieTextDiv.appendChild(titleHeader);
  movieTextDiv.appendChild(releaseDate);
  movieTextDiv.appendChild(ratingText);
  movieTextDiv.appendChild(overviewText);
  movieTextDiv.appendChild(castText);

  showBtns();
  likeBtn.onclick = () => { likeMovie(movieInfo.title) };
  dislikeBtn.onclick = dislikeMovie;
};