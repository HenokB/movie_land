import { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard.jsx';



import searchIcon from './search.svg';

const APIKEY = 'http://www.omdbapi.com?apikey=49225e90';


const App = () => {
    const [movies, setmovies] =useState([]);

    const [searchTerm, setsearchTem]=useState('');

    const searchMovies = async(title)=>{
        const response = await fetch(`${APIKEY}&s=${title}`)
        const data = await response.json();
        setmovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Superman');

    }, []);

    return(
        <div className="app">
            
            <h1>Movie Universe</h1>
            <div className="search">
            
                <input
                
                    placeholder="search for movies"
                    value={searchTerm}
                    onChange={(e) => setsearchTem(e.target.value)}
                />
                <img 
                    src={ searchIcon }
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                ?(
                <div className='container'>
                    {movies.map((movie) =>(
                        <MovieCard movie ={movie}/>
                        ))}
                </div>
                ) : (
                    <div className='empty'>
                        <h2>No Movies found with that title</h2>
                    </div>
                )
            }
        <div className='footer'>
            
            <h4>Henok B Ademtew❤️<a href='https://www.github.com/HenokB'></a></h4>
        </div>
        </div>
    );
}

export default App;