import React,{Component} from "react";
import NameFilter from './NameFilter'
import RatingFilter from './RatingFilter'
import MovieList from './MovieList'
import  './MovieApp.css'

const inception ={
    id:inception,
    title: 'Inception',
    rating: 5,
    image: 'https://www.warnerbros.com/sites/default/files/styles/key_art_270x400/public/inception_keyart.jpg?itok=7jXiglyb',
    year:2010
}
const kingkong ={
    id:kingkong,
    title: 'KingKong',
    rating: 4,
   year :2006
}
const titanic ={
    id:titanic,
    title: 'Titanic',
    rating: 2,
   year :1992
}

const moviesToDisplaye=[inception,kingkong,titanic]

class MovieApp extends Component {
constructor(props){
    super(props)
    this.state={
        minRatingFilter:4,
        movies: moviesToDisplaye ,
        titleFiltre:''

    }


}


addNewMovie(newMovie){
    this.setState({
        movies:this.state.movies.concat(newMovie)
    })
}

getVisibleMovie(){
    return this.state.movies.filter(
        el=> 
        el.rating>=this.state.minRatingFilter &&  
         el.title.toLowerCase().includes(
             this.state.titleFiltre.toLowerCase().trim()
            )
      
    )
}

    render (){
 return( 
     <div className="movie-app">
    <header className="movie-app-header">
      <NameFilter 
      value={this.state.titleFiltre}
      onChange={(newTitleFiltre=>{
          this.setState({
              titleFiltre:newTitleFiltre
          })
      })}
      />
    <RatingFilter 
    count={this.state.minRatingFilter}
    onChange={(newRating)=>{
       this.setState({minRatingFilter:newRating})
    }}/>
    </header>
    <main className="movie-app-main">
      <MovieList
       movies={
           this.getVisibleMovie()
           }
        onAddMovie={(newMovie)=>this.addNewMovie(newMovie)}
           />
    </main>
  </div>
 )
}
}

export default MovieApp;
