import React, { useEffect, useState } from 'react';
import './App.css';
import getPlanetsAPI from './functions/getPlanetsAPI';
import starWarsContext from './context/starWarsContext';
import getResidents from './functions/getResidents';
import Table from './components/Table';
import alphabeticalOrder from './functions/alphabeticalOrder';

function App() {
  const [APIReturn, setAPIReturn] = useState({});
  const [nameForSearch, setNameForSearch] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([{
    column: '',
    comparison: '',
    value: 0,
  }]);
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [order, setOrder] = useState({
    column: 'population',
    sort: 'ASC',
  });

  useEffect(() => {
    async function handleFetch() {
      const planetsObject = await getPlanetsAPI('https://swapi-trybe.herokuapp.com/api/planets/');
      getResidents(planetsObject.results);
      alphabeticalOrder(planetsObject.results);
      setAPIReturn(planetsObject);
    }
    handleFetch();
  }, []);

  const contextValue = {
    data: APIReturn,
    setAPIReturn,
    changeData: setAPIReturn,
    filterByName: {
      name: nameForSearch,
    },
    setNameForSearch,
    filterByNumericValues,
    setFilterByNumericValues,
    columnOptions,
    setColumnOptions,
    order,
    setOrder,
  };

  return (
    <div>
      <starWarsContext.Provider value={ contextValue }>
        {
          Object.keys(APIReturn).length !== 0 && (
            <Table />
          )
        }
      </starWarsContext.Provider>
    </div>
  );
}

export default App;
