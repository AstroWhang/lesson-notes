let searchQuery = 'dragon ball';
const API_KEY = `479d4dd769dff1a4e05f7944d7c98e8b`;


const getMovies = _ => {

  const MOVIE_ENDPOINT = 'https://api.themoviedb.org';
  const MOVIE_URL = `${MOVIE_ENDPOINT}/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`

  return fetch(MOVIE_URL)
    .then(result => result.json())
    .then(data => {
      const movies = [];
      data.results.forEach(movie => {
        let imagePath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        let movieObj = {
          title: movie.title,
          image: imagePath,
        }
        movies.push(movieObj)
      })
      return movies
    })
}

const render = (movies) => {
  let markup = '';
  movies.forEach(movie => {
    markup += `
    <div class="movies__item">
      <img src="${movie.image}" alt="" class="movies__image">
      <p class="movies__title">${movie.title}</p> 
    </div>
    `
  })
  document.querySelector('.movies').innerHTML = markup;
}

export { getMovies, render };