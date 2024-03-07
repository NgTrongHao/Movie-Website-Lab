import React, { useState, useEffect, useRef } from 'react';
import MovieCard from './MovieCard';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

function MovieList({ mediaType }) {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);

    useEffect(() => {
        const fetchMoviesByMediaType = async () => {
            try {
                const response = await fetch(`https://65e17b8aa8583365b3167bda.mockapi.io/movies?media_type=${mediaType}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch movies by media type');
                }
                const data = await response.json();
                setMovieList(data);
            } catch (error) {
                console.error('Error fetching movies by media type:', error);
            }
        };

        fetchMoviesByMediaType();
    }, [mediaType]);

    const slideRight = () => {
        if (elementRef.current) {
            elementRef.current.scrollLeft += 500;
        }
    }

    const slideLeft = () => {
        if (elementRef.current) {
            elementRef.current.scrollLeft -= 500;
        }
    }

    return (
        <div className="relative">

            <div className="relative">
                <ArrowBackIosNew onClick={slideLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-0 text-5xl text-white cursor-pointer z-10" />

                <div ref={elementRef} className="flex overflow-x-auto gap-0 pt-3 px-0 pb-3 scrollbar-none scroll-smooth relative" style={{ '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
                    {movieList.map((movie, index) => (
                        <div className="mr-0">
                        <MovieCard key={index} movie={movie} />
                    </div>
                    ))}
                </div>

                <ArrowForwardIos onClick={slideRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-5xl text-white cursor-pointer" />
            </div>
        </div>
    );
}

export default MovieList;
