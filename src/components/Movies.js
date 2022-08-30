import React from "react";
import { movies } from "../data";



function Movies() {

  const moviesMap = movies.map((movie) => {
      return (<div key={movie.title} >
        {movie.title} 
        {movie.time}
        <li>
          <ul>{movie.genres.map(genre => <li key={genre} >{genre}</li>)}</ul>
        </li>
      </div>)

  })

  console.log(moviesMap)
  return (
  <div>
    <h1>Movies Page</h1>
    {moviesMap}
    </div>
    
    )
}

export default Movies;
