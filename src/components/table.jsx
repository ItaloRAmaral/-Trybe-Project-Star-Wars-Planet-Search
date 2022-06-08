import React, { useEffect, useContext } from 'react';
import StarwarContext from '../context/StarwarContext';
import TableInfo from './tableInfo';

function Table() {
  const {
    fetchPlanets,
    planets,
    searchByName,
    setGetPlanets,
    filtredPlanets,
    setFiltredPlanets,
  } = useContext(StarwarContext);

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    console.log(searchByName);
    const filter = planets
      .filter((item) => item.name.toLowerCase().includes(searchByName));
    console.log(filter);
    setFiltredPlanets(filter);
  }, [searchByName]);

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
        {filtredPlanets.length === 0
          ? null
          : filtredPlanets.map((planet, i) => (
            <TableInfo key={ i } planet={ planet } />
          ))}
        <TableInfo />
      </table>
    </section>
  );
}

export default Table;
