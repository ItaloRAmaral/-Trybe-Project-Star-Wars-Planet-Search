import React, { useEffect, useContext } from 'react';
import StarwarContext from '../context/StarwarContext';
import TableInfo from './tableInfo';

function Table() {
  const { fetchPlanets, planets, searchByName, setGetPlanets } = useContext(StarwarContext);

  useEffect(() => {
    fetchPlanets();
  }, []);
  console.log(planets);

  useEffect(() => {
    if (searchByName=== '') {
      fetchPlanets();
    } else {
      console.log(searchByName);
      const filter = planets.filter((item) => item.name.toLowerCase().includes(searchByName));
      console.log(filter);
      setGetPlanets(filter);
    }
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
        {planets.length === 0
          ? null
          : planets.map((planet, i) => <TableInfo key={ i } planet={ planet } />)}
        <TableInfo />
        {/* {planets.map((planet, i) => (
          <tr key={i}>
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
        ))} */}
      </table>
    </section>
  );
}

export default Table;
