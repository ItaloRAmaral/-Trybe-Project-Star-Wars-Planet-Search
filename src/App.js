import React from 'react';
import './App.css';
import StarwarProvider from './context/StarwarProvider';

function App() {
  return (
    <StarwarProvider>
      <section>
        <h1>Dando Start no Projeto</h1>
      </section>
    </StarwarProvider>
  );
}

export default App;
