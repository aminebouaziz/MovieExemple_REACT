import React from 'react'
import './MovieApp.css'
import MovieCard from './MovieCard'



const MovieList = ({movies = [],onAddMovie=()=>{}}) =>(
    <div className="movie-list">
        {
            movies.map((el) =>  <MovieCard key={el.id} movie={el}/>)
        }

       
        <div 
        className="new-movie-card"
        onClick={()=>
            onAddMovie({
                id: Math.random(),
                title: prompt('Movie title:'),
                rating: Number(prompt('movie rating:')),
                year :Number(prompt('year:'))
        })
        }>+
        </div>
      </div>
)
export default MovieList