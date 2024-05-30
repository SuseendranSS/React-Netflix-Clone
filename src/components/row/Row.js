import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Card from '../card/Card';
import './Row.css';

export default function Row(props) {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [showArrow, setShowArrow] = useState(false);
    const rowCardRef = useRef(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(props.url);
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, [props.url]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollLeft = rowCardRef.current.scrollLeft;
            const cardWidth = rowCardRef.current.clientWidth;
            const currentPage = Math.round(scrollLeft / cardWidth);
            setCurrentPage(currentPage);
        };

        const rowCardElement = rowCardRef.current;
        rowCardElement.addEventListener('scroll', handleScroll);

        return () => {
            rowCardElement.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = (direction) => {
        const scrollAmount = direction === 'left' ? -rowCardRef.current.clientWidth : rowCardRef.current.clientWidth;
        rowCardRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    const totalPages = Math.ceil(movies.length / (rowCardRef.current ? rowCardRef.current.clientWidth / 200 : 1)); // Assuming each card is 200px wide

    return (
        <div 
            className='row-wrapper'
            onMouseEnter={() => setShowArrow(true)}
            onMouseLeave={() => setShowArrow(false)}
        >
            <div className='row-header'>
                <h3 className='row-title'>{props.title}</h3>
                <div className='pagination-indicator'>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <div 
                            key={index} 
                            className={`pagination-dot ${index === currentPage ? 'active' : ''}`} 
                        />
                    ))}
                </div>
            </div>
            <div className='row-container'>
                {showArrow && (
                    <button className="scroll-arrow left-arrow" onClick={() => handleScroll('left')}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                )}
                <div className='row-card' id={`row-card-${props.title}`} ref={rowCardRef}>
                    {movies.map((el) => (
                        <Card key={el.id} id={el.id} title={el.title} poster={el.backdrop_path} />
                    ))}
                </div>
                {showArrow && (
                    <button className="scroll-arrow right-arrow" onClick={() => handleScroll('right')}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                )}
            </div>
        </div>
    );
}
