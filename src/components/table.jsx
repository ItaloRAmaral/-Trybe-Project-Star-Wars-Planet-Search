import React, { useEffect, useContext } from 'react';
import StarwarContext from '../context/StarwarContext';
import TableInfo from './tableInfo';

function Table() {
  const {
    fetchPlanets,
    searchByName,
    planets,
    filtredPlanets,
    setFiltredPlanets,
    numericFilter,
  } = useContext(StarwarContext);

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    const filter = planets
      .filter((item) => item.name.toLowerCase().includes(searchByName));

    const newFilter = numericFilter.reduce(
      (acc, filtro) => acc.filter((planet) => {
        switch (filtro.operatorType) {
        case 'menor que':
          return (
            Number(planet[filtro.filterType]) < Number(filtro.valueType)
          );

        case 'maior que':
          return (
            Number(planet[filtro.filterType]) > Number(filtro.valueType)
          );

        case 'igual a':
          return (
            Number(planet[filtro.filterType]) === Number(filtro.valueType)
          );

        default:
          return filter;
        }
      }),
      filter,
    );

    setFiltredPlanets(newFilter);
  }, [searchByName, numericFilter, planets, setFiltredPlanets]);

  return (
    <section>
      {
        numericFilter.length > 0 && (
          <h1>Filtros Aplicado</h1>
        )
      }
      {
        numericFilter.length > 0 && (
          numericFilter.map((filter) => (
            <span key={ filter.filterType }>
              {`${filter.filterType} 
            & ${filter.operatorType} ${filter.valueType}`}
            </span>))
        )
      }
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
