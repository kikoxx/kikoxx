import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Profile from './components/Profile'; // Import ProfileDisplay;
import FireworksComponent from './components/Fireworks';
import MyComponent from './components/MyComponent';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Profile />} /> {/* Display ProfileDisplay at root */}
          <Route path="/mycomponent" element={<MyComponent />} />
          <Route path="/fireworks" element={<FireworksComponent />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
