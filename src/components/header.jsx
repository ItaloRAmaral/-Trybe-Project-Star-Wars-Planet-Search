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
    /// test
    setColumnOrder,
    columnOrder,
    setTypeOrder,
    typeOrder,
    setOrder,
  } = useContext(StarwarContext);

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

  /// Testando a aprtir daqui
  const handleColumnOrder = ({ target }) => {
    const { value } = target;
    setColumnOrder(value);
  };

  const handleTypeOrder = ({ target }) => {
    const { name } = target;
    setTypeOrder(name);
  };

  const handleOrderUpdate = () => {
    console.log('teste botão');
    setOrder({
      column: columnOrder,
      sort: typeOrder,
    });
  };

  return (
    <section className="header-container">
      <h1 className="title">Star Wars Planets Search</h1>
      <label htmlFor="planetName" className="planet-label">
        <input
          type="text"
          onChange={ handleSearch }
          name="planetName"
          id="planetName"
          placeholder="Planet Name"
          data-testid="name-filter"
        />
      </label>
      <section className="forms-div">
        <div className="teste">

          <label htmlFor="planetParameter" className="input-label">
            Column
            <select
              id="planetParameter"
              onChange={ handleFilter }
              data-testid="column-filter"
            >
              {filtersType.map((filter) => (
                <option key={ filter }>{filter}</option>
              ))}
            </select>
          </label>
          <label htmlFor="planetOperator" className="input-label">
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
          <label htmlFor="number" className="input-label">
            Number
            <input
              type="number"
              name="number"
              id="number"
              value={ valueType }
              onChange={ handleValueType }
              className="input-label"
              data-testid="value-filter"
            />
          </label>
          <button
            type="button"
            onClick={ handleFiltersType }
            className="filter-buttons"
            data-testid="button-filter"
          >
            Filtrar
          </button>
        </div>
        <div className="teste">

          <label htmlFor="planetOrder" className="input-label">
            Order
            <select
              id="planetOrder"
              onChange={ handleColumnOrder }
              data-testid="column-sort"
            >
              <option>population</option>
              <option>orbital_period</option>
              <option>diameter</option>
              <option>rotation_period</option>
              <option>surface_water</option>
            </select>
          </label>
          <div className="order-container">
            <label htmlFor="ascendente" className="order-label">
              Ascendente
              <input
                type="radio"
                name="ASC"
                value="ASC"
                id="ascendente"
                onChange={ handleTypeOrder }
                data-testid="column-sort-input-asc"
              />
            </label>

            <label htmlFor="Descendente" className="order-label">
              Descendente
              <input
                type="radio"
                name="DESC"
                value="DESC"
                id="Descendente"
                onChange={ handleTypeOrder }
                data-testid="column-sort-input-desc"
              />
            </label>
          </div>
          <button
            type="button"
            onClick={ handleOrderUpdate }
            className="filter-buttons"
            data-testid="column-sort-button"
          >
            Ordenar
          </button>
        </div>
      </section>
    </section>
  );
}

export default Header;
