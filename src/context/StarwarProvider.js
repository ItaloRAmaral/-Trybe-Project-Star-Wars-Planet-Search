import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarwarContext from './StarwarContext';

function StarwarProvider(props) {
  const [planets, setGetPlanets] = useState([]);

  const fetchPlanets = async () => {
    try {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fetchData = await fetch(url);
      const data = await fetchData.json();
      console.log(data);
      setGetPlanets(data);
    } catch (error) {
      console.log(error);
    }
  };

  const { children } = props;
  const contextType = { planets, fetchPlanets };

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
