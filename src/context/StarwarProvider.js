import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarwarContext from './StarwarContext';

function StarwarProvider(props) {
  const [planets, setGetPlanets] = useState([]);
  const [filtredPlanets, setFiltredPlanets] = useState([]);
  const [searchByName, setSearchByName] = useState('');

  const fetchPlanets = async () => {
    try {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fetchData = await fetch(url);
      const { results } = await fetchData.json();
      setGetPlanets(results);
      setFiltredPlanets(results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (name) => {
    setSearchByName(name);
  };

  const { children } = props;
  const contextType = {
    fetchPlanets,
    planets,
    handleChange,
    searchByName,
    setGetPlanets,
    filtredPlanets,
    setFiltredPlanets,
  };

  return (
    <StarwarContext.Provider value={ contextType }>
      {children}
    </StarwarContext.Provider>
  );
}

StarwarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarProvider;
