function changeOrder(planetsData, order) {
  const newPlanetsData = planetsData;
  const justUnknows = newPlanetsData.results.filter((planet) => (
    planet[order.column] === 'unknown'
  ));
  newPlanetsData.results = newPlanetsData.results.filter((planet) => (
    planet[order.column] !== 'unknown'
  ));
  console.log(newPlanetsData);
  newPlanetsData.results.sort((a, b) => {
    if (order.sort === 'ASC') {
      return a[order.column] - b[order.column];
    }
    return b[order.column] - a[order.column];
  });

  justUnknows.forEach((UNK) => {
    newPlanetsData.results.push(UNK);
  });
  console.log(newPlanetsData.results);
  return newPlanetsData;
}

export default changeOrder;
