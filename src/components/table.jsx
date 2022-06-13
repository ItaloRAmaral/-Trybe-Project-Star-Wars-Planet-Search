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
    setNumericFilter,
    setFiltersType,
    filtersType,
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

  const handleDeleteFilter = ({ target }) => {
    const filterName = target.name;
    const newNumericFilter = numericFilter
      .filter((filter) => filter.filterType !== filterName);
    setNumericFilter(newNumericFilter);
    setFiltersType([...filtersType, filterName]);
  };

  const handleDeleteAll = () => {
    setNumericFilter([]);
    setFiltersType([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
  };

  return (
    <section>
      {numericFilter.length > 0 && <h1>Filtros Aplicado</h1>}
      {numericFilter.length > 0
        && numericFilter.map((filter) => (
          <div
            key={ filter.filterType }
            name={ filter.filterType }
            data-testid="filter"
          >
            <span>
              {`${filter.filterType}
            & ${filter.operatorType} ${filter.valueType}`}
            </span>
            <button
              type="button"
              name={ filter.filterType }
              onClick={ handleDeleteFilter }
              // data-testid="button-remove-filters"
            >
              X
            </button>
          </div>
        ))}
      {numericFilter.length > 0 && (
        <button
          type="button"
          onClick={ handleDeleteAll }
          data-testid="button-remove-filters"
        >
          Remover Filtros
        </button>
      )}
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
