import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieById = async () => {
            try {
                const response = await fetch(`https://65e17b8aa8583365b3167bda.mockapi.io/movies?id=${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch movie by ID');
                }
                const data = await response.json();
                // If the API returns an array, take the first element
                // Otherwise, use the data directly
                const movieData = Array.isArray(data) ? data[0] : data;
                setMovie(movieData);
            } catch (error) {
                console.error('Error fetching movie by ID:', error);
            }
        };

        fetchMovieById();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    const backdropStyle = {
        backgroundImage: `url(${IMAGE_BASE_URL + movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    };

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 0
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 1
    };

    return (
        <div>
            <div style={backdropStyle}></div>
            <div style={overlayStyle}></div>
            <div className="container mx-auto mt-10" style={contentStyle}>
                <div className="flex pt-11">
                    <img
                        className="w-48 h-auto rounded-md mr-6"
                        src={IMAGE_BASE_URL + movie.poster_path}
                        alt={movie.title}
                    />
                    <div>
                        <h2 className="text-2xl font-bold">{movie.title}</h2>
                        <p className="text-lg mt-4 text-left">{movie.overview}</p>
                        <p className="text-lg text-left">Original Title: {movie.original_title}</p>
                        <p className="mt-2 text-left">Release Date: {movie.release_date}</p>
                        <p className="text-left">Vote Average: {movie.vote_average}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
