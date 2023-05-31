import React from 'react';
import starWarsContext from '../context/starWarsContext';
import checkAllFilter from '../functions/criteriaFilter';
import FilterNumeric from './FilterNumeric';
import Filters from './Filters';
import '../table.css';

function Table() {
  return (
    <starWarsContext.Consumer>
      {
        (context) => (
          <>
            <input
              data-testid="name-filter"
              type="text"
              onChange={ ({ target }) => context.setNameForSearch(target.value) }
            />
            <p>{ context.filterByName.name }</p>
            <FilterNumeric />
            <Filters />
            <table className="planets-table">
              <tr>
                {
                  Object.keys(context.data.results[0]).map((category, index) => (
                    <th
                      key={ index }
                      className="planet-column-name"
                    >
                      { category }
                    </th>
                  ))
                }
              </tr>
              {
                context.data.results.map((planet, index) => (
                  (
                    planet.name.includes(
                      context.filterByName.name,
                    ) || context.filterByName.name.length === 0
                  ) && (
                    checkAllFilter(planet, context.filterByNumericValues) && (
                      <tr
                        key={ index }
                      >
                        <td className="planet-column-name" data-testid="planet-name">
                          { planet.name }
                        </td>
                        <td className="planet-column-name">
                          { planet.rotation_period}
                        </td>
                        <td className="planet-column-name">
                          { planet.orbital_period}
                        </td>
                        <td className="planet-column-name">
                          { planet.diameter}
                        </td>
                        <td className="planet-column-name">
                          { planet.climate}
                        </td>
                        <td className="planet-column-name">
                          { planet.gravity}
                        </td>
                        <td className="planet-column-name">
                          { planet.terrain}
                        </td>
                        <td className="planet-column-name">
                          { planet.surface_water}
                        </td>
                        <td className="planet-column-name">
                          { planet.population}
                        </td>
                        <td className="planet-column-name">
                          { planet.films}
                        </td>
                        <td className="planet-column-name">
                          { planet.created}
                        </td>
                        <td className="planet-column-name">
                          { planet.edited}
                        </td>
                        <td className="planet-column-name">
                          { planet.url}
                        </td>
                      </tr>
                    )
                  )
                ))
              }
            </table>
          </>
        )
      }
    </starWarsContext.Consumer>
  );
}

export default Table;
