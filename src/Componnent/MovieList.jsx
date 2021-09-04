import { useState } from 'react';
import Filter from './Filter';
import MovieCard from './MovieCard';

const MovieList = () => {
    const [movies,setMovies] = useState([
        {
        id : 1,
        title : 'RED',
        description : 'Action Movies',
        posterURL : '',
        rating : 4,
        image : ''
    },
    
    {
        id : 2,
        title : 'Blood Diamond',
        description : 'Adventur Movies',
        posterURL : '',
        rating : 3,
        image : ''
    },
    
    {
        id : 3,
        title : 'Ace Age',
        description : 'kids Movies',
        posterURL :'',
        rating :2,
        image : ''
    }
])

const [filtredMovies, setFiltredMovies]= useState([])

const search = (type) =>{
setFiltredMovies(type.length === 0 ? movies: Object.entries(type)[0][0] === 'rating' ? 
                movies.filter(el=> el.rating === type.rating) : 
                movies.filter(el=> el.title.toLowerCase().includes(type.titleMovie.toLowerCase())))
}

const add = movie => {
    setMovies([...movies, movie]);
}

    return(
        <>
        <Filter movies={movies} search={search}/> 
        <br/><br/>
        <MovieCard add={add} />
        <br/><br/>
        <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-evenly'}}>
        {filtredMovies.map((e)=>
        <div>
        <a href={e.posterURL}><img src={e.image} alt={e.title} width="300" height="300"/></a>  
        <br/>
        <label>Title : {e.title}</label>
        <br/>
        <label>Rating : {e.rating}</label>
        </div>
        )}
        </div>
        </>
    )
}

export default MovieList;