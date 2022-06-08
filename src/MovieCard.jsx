import React from 'react';
import image from './Untitled.png';

const MovieCard=( { movie })=>{
    return (
        <div className='movie'>
                    <div>
                        <p>{movie.year}</p>
                    </div>
                    <div>
                        <img src={movie.Poster !=='N/A' ? movie.Poster : image} alt={movie.Title}/>
                        
                    </div>
                    <div>
                        <span>{movie.Type}</span>
                        <h3>{movie.Title}</h3>
                    </div>

                </div>
    );
}
export default MovieCard;