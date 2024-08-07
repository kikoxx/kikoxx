import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app'; // Import the App component

// If you want to include Particles in the background, you can add it here or in the App component
import Particles from 'react-tsparticles';
import { fireworks } from '@tsparticles/fireworks';

const particlesInit = async (main) => {
  await fireworks(main);
};

ReactDOM.render(
  <Router>
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: 'fireworks',
        }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: -1, // Ensure particles are in the background
        }}
      />
      <App />
    </div>
  </Router>,
  document.getElementById('root')
);
