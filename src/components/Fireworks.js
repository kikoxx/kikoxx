import React, { useEffect, useRef } from 'react';

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
      style={styles.container}
    >
      {/* Your content here */}
    </div>
  );
};

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(/img/background.jpg)', // Ensure this path is correct
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
};

export default FireworksComponent;
