import React from 'react';
import './App.css';
import Home from './pages/home';
import StarwarProvider from './context/StarwarProvider';
import Table from './components/table';

function App() {
  return (
    <StarwarProvider>
      <section>
        <Home />
        <Table />
      </section>
    </StarwarProvider>
  );
}

export default App;
