import React, { useState } from 'react';
import StarwarContext from './StarwarContext';

function StarwarProvider(props) {
  const { children } = props;
  const contextType = {};

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
