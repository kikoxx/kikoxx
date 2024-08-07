import React, { useEffect, useRef } from 'react';
import backgroundImg from '../assets/background.jpg'; // Import the image

const FireworksComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Optional: Add fireworks setup here if needed

    return () => {
      // Optional: Cleanup fireworks here if needed
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${backgroundImg})`, // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Your content here */}
    </div>
  );
};

export default FireworksComponent;
