import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';
import { getImageUrl } from '../../utils';


export const ScrollToTopButton = () => 
{
    const [showButton, setShowButton] = useState(false);

    useEffect(() => 
    {
            const handleScroll = () => 
            {
                if (window.scrollY > 200) 
                {
                    setShowButton(true);
                } 
                else 
                {
                    setShowButton(false);
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => 
            {
                window.removeEventListener('scroll', handleScroll);
            };
    }, []);

    const scrollToTop = () => 
    {
            window.scrollTo(
            {
                top: 0,
                behavior: 'smooth'
            });
    };

    return (
        <div>
        <button className={`scroll-to-top-button ${showButton ? 'slide-up' : ''}`} onClick={scrollToTop}>
            <img src={getImageUrl("nav/arrow.png")} alt="Scroll to top" />
        </button>
        </div>
    );
};
