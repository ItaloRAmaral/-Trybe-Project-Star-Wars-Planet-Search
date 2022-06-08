import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// import StarwarContext from "../context/StarwarContext";

function TableInfo(props) {
  // const { planets } = useContext(StarwarContext);
  const { planet } = props;
  console.log(planet);

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
