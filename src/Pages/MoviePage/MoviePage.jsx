import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import Loading from '../../Compononents/Loading/Loading'
import Message from '../../Compononents/Message/Message';
import {listMovies} from '../../actions/movieActions'
import MovieCard from '../../Compononents/MovieCard/MovieCard'

const MoviePage = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  const { loading, error, movies } = movieList;

  useEffect(() => {
    dispatch(listMovies());
  }, [dispatch]);


    return ( 
        <div>
            <div className='moviepage-instructions'>
                <h3 className='movie-instructions'>Click on a card to know more</h3>
            </div>
            {loading ? <Loading/> : error ? <Message color='red'> {error} </Message> : (
                <div className="grid-container">
                {movies.map((movie)=> {
                    return(
                        
                        <div  key={movie.episode_id} className='grid-item'>
                            <MovieCard movie={movie}/>
                        </div>
                    )
                })}
                </div>
            )}
            
        </div>
     );
}
 
export default MoviePage
