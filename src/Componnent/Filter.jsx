import { useState,useEffect } from 'react';

const Filter = (props) => {
    const [type,setType] = useState([]);
    useEffect((props)=> {
        props.search(type)}, [ props.movies , type])

return(
    <div>
    <h1> Your Movies List</h1>
    Title : <input type="text" placeholder="Search Title" onChange={(e) => setType({titleMovie:e.target.value})}/> 
    Rating : 0<input type="range" placeholder="rating" min={0} max={5} onChange={(e)=> setType({rating: Number(e.target.value)})} />5
    </div>    
);
}

export default Filter;