import React, { useState, useEffect } from 'react';
import './GenreMovieList.css';
import MovieList from './MovieList';

function GenreMovieList() {
    const [mediaTypes, setMediaTypes] = useState([]);

    useEffect(() => {
        const fetchMediaTypes = async () => {
            try {
                const response = await fetch('https://65e17b8aa8583365b3167bda.mockapi.io/media_type');
                if (!response.ok) {
                    throw new Error('Failed to fetch media types');
                }
                const data = await response.json();
                setMediaTypes(data);
            } catch (error) {
                console.error('Error fetching media types:', error);
            }
        };

        fetchMediaTypes();
    }, []);

    return (
        <div>
            {mediaTypes.map((mediaType) => (
                <div key={mediaType.id} className='p-2 px-8 md:px-8'>
                    <h3 className='md:text-[18px] text-[15px] font-bold text-shadow-custom text-left'>{mediaType.media_type}</h3>
                    <MovieList mediaType={mediaType.media_type} />
                </div>
            ))}
        </div>
    );
}

export default GenreMovieList;
