import React from 'react';
import starWarsContext from '../context/starWarsContext';
import updateOptions from '../functions/updateOptions';

function Filters() {
  return (
    <starWarsContext.Consumer>
      {
        (context) => (
          <>
            {
              context.filterByNumericValues.map((filter, index) => (
                filter.column !== '' && (
                  <div
                    key={ index }
                    data-testid="filter"
                  >
                    <span>
                      { `${filter.column} ${filter.comparison} ${filter.value}` }
                    </span>
                    <button
                      type="button"
                      onClick={ () => {
                        const newFilters = context.filterByNumericValues.filter((ft) => (
                          ft.column !== filter.column
                        ));
                        context.setFilterByNumericValues(newFilters);
                        context.setColumnOptions(
                          updateOptions(newFilters),
                        );
                      } }
                    >
                      X
                    </button>
                  </div>
                )
              ))
            }
          </>
        )
      }
    </starWarsContext.Consumer>
  );
}

export default Filters;
