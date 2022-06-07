import React from 'react';
import './App.css';
import Home from './pages/home';
import StarwarProvider from './context/StarwarProvider';

function App() {
  return (
    <StarwarProvider>
      <section>
        <Home />
      </section>
    </StarwarProvider>
  );
}

export default App;
