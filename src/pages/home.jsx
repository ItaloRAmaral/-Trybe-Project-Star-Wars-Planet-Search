import React, { useContext, useEffect } from 'react';
import Header from '../components/header';
import StarwarContext from '../context/StarwarContext';

function Home() {
  const { fetchPlanets } = useContext(StarwarContext);

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <section>
      <Header />
    </section>
  );
}

export default Home;
