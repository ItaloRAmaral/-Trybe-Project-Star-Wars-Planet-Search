import React from 'react';
import PropTypes from 'prop-types';

function TableInfo(props) {
  const { planet } = props;

  return (
    <tbody>
      {planet === undefined ? null : (
        <tr>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>{planet.films}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      )}
    </tbody>
  );
}

TableInfo.propTypes = {
  planet: PropTypes.objectOf.isRequired,
};

export default TableInfo;
