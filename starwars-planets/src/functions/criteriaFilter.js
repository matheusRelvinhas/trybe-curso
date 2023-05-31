function criteriaFilter(planet, filterObject) {
  const criteria = planet[filterObject.column];
  if (
    filterObject.column === ''
    && filterObject.comparison === ''
    && filterObject.value === 0
  ) {
    return true;
  }

  if (filterObject.comparison === 'maior que') {
    if (criteria > filterObject.value) {
      return true;
    }
    return false;
  }

  if (filterObject.comparison === 'menor que') {
    if (criteria < filterObject.value) {
      return true;
    }
    return false;
  }

  if (filterObject.comparison === 'igual a') {
    if (parseInt(criteria, 10) === filterObject.value) {
      return true;
    }
    return false;
  }
}

function checkAllFilter(planeta, arrayFilter) {
  const check = arrayFilter.every((filter) => (
    criteriaFilter(planeta, filter)
  ));

  return check;
}

export default checkAllFilter;
