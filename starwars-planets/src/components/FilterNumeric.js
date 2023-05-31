import React, { useState } from 'react';
import starWarsContext from '../context/starWarsContext';
import checkColumn from '../functions/checkColumn';
import updateOptions from '../functions/updateOptions';
import Orders from './Orders';

function FilterNumeric() {
  const [numericValues, setNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  return (
    <starWarsContext.Consumer>
      {
        (context) => (
          <>
            <select
              data-testid="column-filter"
              onChange={ ({ target }) => setNumericValues({
                ...numericValues,
                column: target.value,
              }) }
            >
              {
                context.columnOptions.map((option, index) => (
                  <option key={ index }>
                    { option }
                  </option>
                ))
              }
            </select>
            <select
              data-testid="comparison-filter"
              onChange={ ({ target }) => setNumericValues({
                ...numericValues,
                comparison: target.value,
              }) }
            >
              <option>maior que</option>
              <option>menor que</option>
              <option>igual a</option>
            </select>
            <input
              data-testid="value-filter"
              type="number"
              value={ numericValues.value }
              onChange={ ({ target }) => setNumericValues({
                ...numericValues,
                value: parseInt(target.value, 10),
              }) }
            />
            <button
              data-testid="button-filter"
              type="button"
              onClick={ () => {
                const newArray = checkColumn(
                  context.filterByNumericValues,
                  numericValues,
                );
                context.setColumnOptions(
                  updateOptions(newArray),
                );
                setNumericValues({
                  ...numericValues,
                  column: updateOptions(newArray)[0],
                });
                if (numericValues.column) {
                  context.setFilterByNumericValues(newArray);
                }
              } }
            >
              Filter
            </button>
            <button
              type="button"
              data-testid="button-remove-filters"
              onClick={ () => {
                context.setFilterByNumericValues([{
                  column: '',
                  comparison: '',
                  value: 0,
                }]);

                context.setColumnOptions([
                  'population',
                  'orbital_period',
                  'diameter',
                  'rotation_period',
                  'surface_water',
                ]);
              } }
            >
              Remover todas filtragens
            </button>
            <Orders />
          </>
        )
      }
    </starWarsContext.Consumer>
  );
}

export default FilterNumeric;
