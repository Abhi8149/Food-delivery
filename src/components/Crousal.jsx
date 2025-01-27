import React, { useState, useEffect } from 'react';

function Crousal() {
    const images = ['pizza4.jpg', 'pizza2.jpg', 'pizza1.jpg', 'food4.jpg']; // Replace with your image paths
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Clean up on unmount
    }, [images.length]);

    return (
        <div>
            <img src={images[index]} alt="carousel" />
        </div>
    );
}

export default Crousal;
