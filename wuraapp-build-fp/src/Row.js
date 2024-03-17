import React, { useEffect , useState} from 'react';
import  "./Row.css";
import axios from "./axios.js";


function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original";
    useEffect(()=>{
        async function fecthData(){

            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fecthData();
    },[fetchUrl]);
console.log(movies);
    return (
        <div className="row">
            <h2>{title}</h2>
            {movies.map(movie =>(
                <img className={` row_poster ${isLargeRow  && "row_posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt="" key={movie.id}/>

            ))}
        </div>
    );
}

export default Row;