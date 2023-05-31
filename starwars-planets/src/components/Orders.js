import React, { useState } from 'react';
import starWarsContext from '../context/starWarsContext';
import changeOrder from '../functions/changeOrder';

function Orders() {
  const [order, setOrder] = useState({
    column: 'population',
    sort: 'ASC',
  });

  return (
    <starWarsContext.Consumer>
      {
        (context) => (
          <div>
            <select
              data-testid="column-sort"
              onChange={ ({ target }) => {
                setOrder({
                  ...order,
                  column: target.value,
                });
              } }
            >
              <option>population</option>
              <option>orbital_period</option>
              <option>diameter</option>
              <option>rotation_period</option>
              <option>surface_water</option>
            </select>
            <form>
              <label htmlFor="fasc">
                <input
                  type="radio"
                  value="ASC"
                  data-testid="column-sort-input-asc"
                  id="fasc"
                  name="order"
                  onClick={ ({ target }) => {
                    setOrder({
                      ...order,
                      sort: target.value,
                    });
                  } }
                />
                ASC
              </label>
              <label htmlFor="fdesc">
                <input
                  type="radio"
                  value="DESC"
                  data-testid="column-sort-input-desc"
                  id="fdesc"
                  name="order"
                  onClick={ ({ target }) => {
                    setOrder({
                      ...order,
                      ...order,
                      sort: target.value,
                    });
                  } }
                />
                DESC
              </label>
              <button
                type="button"
                data-testid="column-sort-button"
                onClick={ () => {
                  context.setOrder(order);
                  context.setAPIReturn(changeOrder(context.data, order));
                } }
              >
                Setar Ordem
              </button>
            </form>
          </div>
        )
      }
    </starWarsContext.Consumer>
  );
}

export default Orders;
