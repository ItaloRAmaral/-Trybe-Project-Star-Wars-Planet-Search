import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarwarContext from './StarwarContext';

function StarwarProvider(props) {
  const [planets, setGetPlanets] = useState([]);
  const [searchByName, setSearchByName] = useState('');

  const fetchPlanets = async () => {
    try {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fetchData = await fetch(url);
      const { results } = await fetchData.json();
      setGetPlanets(results);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const fetchPlanets = async () => {
  //     try {
  //       const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  //       const fetchData = await fetch(url);
  //       const data = await fetchData.json();
  //       setGetPlanets(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchPlanets();
  // }, []);

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
