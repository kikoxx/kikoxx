import React, { useEffect } from 'react';
import { tsParticles } from 'tsparticles';
import { Fireworks } from '@tsparticles/fireworks';

const ParticlesBackground = () => {
  useEffect(() => {
    tsParticles.load('tsparticles', {
      particles: {
        // Configuration for particles, can be empty if using preset
      }
    }).then(container => {
      container.addFireworks();
    });

    return () => {
      tsParticles.destroy();
    };
  }, []);

  return <div id="tsparticles" style={{ position: 'absolute', width: '100%', height: '100%' }}></div>;
};

export default ParticlesBackground;
