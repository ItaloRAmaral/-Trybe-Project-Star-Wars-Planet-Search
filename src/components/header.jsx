import React, { useContext } from 'react';
import StarwarContext from '../context/StarwarContext';

function Header() {
  const {
    handleChange,
    handleFilterType,
    handleOperatorFilter,
    handleValue,
    valueType,
    filterType,
    filtersType,
    setFiltersType,
    handleNumericFilter,
  } = useContext(StarwarContext);

  // const filtersType = [
  //   'population',
  //   'orbital_period',
  //   'diameter',
  //   'rotation_period',
  //   'surface_water',
  // ];

  const handleSearch = ({ target }) => {
    const name = target.value.toLowerCase();
    handleChange(name);
  };

  const handleFilter = ({ target }) => {
    const name = target.value;
    handleFilterType(name);
  };

  const handleOperator = ({ target }) => {
    const name = target.value;
    handleOperatorFilter(name);
  };

  const handleValueType = ({ target }) => {
    const name = target.value;
    handleValue(name);
  };

  const handleFiltersType = () => {
    handleNumericFilter();
    const newFilters = filtersType.filter((fil) => fil !== filterType);
    setFiltersType(newFilters);
  };

  return (
    <section>
      <h1>Star Wars Planets Search</h1>
      <label htmlFor="planetName">
        Planet Name
        <input
          type="text"
          onChange={ handleSearch }
          name="planetName"
          id="planetName"
          data-testid="name-filter"
        />
      </label>
      <div>
        <label htmlFor="planetParameter">
          Column
          <select
            id="planetParameter"
            onChange={ handleFilter }
            data-testid="column-filter"
          >
            {filtersType.map((filter) => (
              <option key={ filter }>{filter}</option>
            ))}
            {/* <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option> */}
          </select>
        </label>
        <label htmlFor="planetOperator">
          Operator
          <select
            id="planetOperator"
            onChange={ handleOperator }
            data-testid="comparison-filter"
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <label htmlFor="number">
          Number
          <input
            type="number"
            name="number"
            id="number"
            value={ valueType }
            onChange={ handleValueType }
            data-testid="value-filter"
          />
        </label>
        <button
          type="button"
          onClick={ handleFiltersType }
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </div>
      <div>
        <label htmlFor="planetOrder">
          Order
          <select id="planetOrder">
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="ascendente">
          Ascendente
          <input type="radio" name="" id="ascendente" />
        </label>
        <label htmlFor="Descendente">
          Descendente
          <input type="radio" name="" id="Descendente" />
        </label>
        <button type="button">Ordenar</button>
      </div>
    </section>
  );
}

export default Header;
