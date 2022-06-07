import React, { useContext, useEffect } from 'react';
// import StarwarContext from "../context/StarwarContext";

function Header() {
  return (
    <section>
      <h1>Star Wars Planets Search</h1>
      <label htmlFor="planetName">
        Planet Name
        <input type="text" name="planetName" id="planetName" />
      </label>
      <div>
        <label htmlFor="planetParameter">
          Column
          <select id="planetParameter">
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>surface_water</option>
          </select>
        </label>
        <label htmlFor="planetOperator">
          Operator
          <select id="planetOperator">
            <option>menor que</option>
            <option>maior que</option>
            <option>igual a</option>
          </select>
        </label>
        <label htmlFor="number">
          Number
          <input type="number" name="number" value="0" id="number" />
        </label>
        <button type="button">Filtrar</button>
      </div>
      <div>
        <label htmlFor="planetOrder">
          Order
          <select id="planetOrder">
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
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
