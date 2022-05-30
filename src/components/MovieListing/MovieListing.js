import React from 'react';
import Slider from 'react-slick';
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import "./MovieListing.scss";
import { Settings } from '../../common/settings';

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    let renderMovies, renderShows = '';

    renderMovies =
        movies.Response === "True" ? (
            movies.Search.map((movie, index) => {
                return <MovieCard key={index} data={movie} />;
            })
        ) : (
            <div className="movies-error">
                <h3>{movies.Error}</h3>
            </div>
        );

    renderShows =
        shows.Response === "True" ? (
            shows.Search.map((movie, index) => {
                return <MovieCard key={index} data={movie} />;
            })
        ) : (
            <div className="shows-error">
                <h3>{shows.Error}</h3>
            </div>
        );

    return (
        <div className='movie-wapper'>
            <div className='show-list'>

                <div className='movie-list'>
                    <h2>Movies</h2>
                    <div>
                        <Slider {...Settings}>{renderMovies}</Slider>
                    </div>
                </div>
                
                <h2>Series</h2>
                <div>
                    <Slider {...Settings}>{renderShows}</Slider>
                </div>
            </div>
        </div>
    );
};

export default MovieListing;