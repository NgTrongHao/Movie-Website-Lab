import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="relative">
            <Link to={`/movie/${movie.id}`}>
            <div
                className="w-[150px] md:w-[250px] p-3 px-2 md:px-3 relative rounded-md overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    className={`w-full h-full object-cover object-center rounded-md cursor-pointer transition-all duration-300 ease-in-out ${isHovered ? 'scale-105 brightness-75' : ''}`}
                    src={IMAGE_BASE_URL + movie.poster_path}
                />
                {isHovered && (
                    <div className="absolute inset-0 bg-black bg-opacity-30 text-white flex flex-col justify-center items-center">
                        <p className="text-sm">Title: {movie.title}</p>
                        <p className="text-sm">Release Date: {movie.release_date}</p>
                        <p className="text-sm">Vote Average: {movie.vote_average}</p>
                    </div>
                )}
            </div>
            </Link>
        </div>
    )
}

export default MovieCard