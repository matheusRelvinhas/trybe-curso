function updateOptions(arrayFilters) {
  const defaultOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const newArrayOptions = defaultOptions.filter((option) => (
    arrayFilters.every((filter) => (
      option !== filter.column
    ))
  ));

  return newArrayOptions;
}

export default updateOptions;
