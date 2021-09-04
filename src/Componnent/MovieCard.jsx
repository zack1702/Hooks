import { useState,useEffect,useRef } from 'react';

export const MovieCard = (props) => {
    const [movie, setMovie] = useState({ title: "", description: "", posterURL: "",  rating: 0, image:""});

    const handleSubmit = e => {
      e.preventDefault();
      props.add(movie);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="title" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, title: e.target.value }))}/>
            <input type="text" name="description" placeholder="description" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, description: e.target.value }))}/>
            <input type="text" name="posterURL" placeholder="posterURL" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, posterURL: e.target.value }))}/>
            0<input type="range" min={0} max={5} name="rating" placeholder="rating" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, rating: Number(e.target.value) }))}/>5
            <input type="text" name="image" placeholder="poster" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, image: e.target.value }))}/>
            <button>ADD</button>
        </form>
    )
}

export default MovieCard;