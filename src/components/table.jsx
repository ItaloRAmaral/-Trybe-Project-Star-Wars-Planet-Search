import React, { useEffect, useContext } from 'react';
import StarwarContext from '../context/StarwarContext';
import TableInfo from './tableInfo';

function Table() {
  const { fetchPlanets, planets } = useContext(StarwarContext);

  useEffect(() => {
    if (planets.length === 0) return fetchPlanets();
  }, [fetchPlanets, planets.length]);
  console.log(planets);

  const { results } = planets;
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        {
          planets.length === 0
            ? null
            : results
              .map((planet, i) => <TableInfo key={ i } planet={ planet } />)
        }
        <TableInfo />
      </table>
    </section>
  );
}

export default Table;
