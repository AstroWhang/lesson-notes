import { getMovies, render } from './data/content.js';

getMovies()
  .then(data => {
    render(data);
  })

