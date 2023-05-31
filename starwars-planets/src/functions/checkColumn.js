function checkColumn(arrayOfFilter, newFilter) {
  const arrayWithoutDefault = arrayOfFilter.filter((filter) => (
    filter.column !== ''
  ));

  const checkColumns = arrayWithoutDefault.every((filter) => (
    filter.column !== newFilter.column
  ));

  if (checkColumns) {
    return [
      ...arrayWithoutDefault,
      newFilter,
    ];
  }

  const arrayWithoutColumn = arrayWithoutDefault.filter((filter) => (
    filter.column !== newFilter.column
  ));

  return [
    ...arrayWithoutColumn,
    newFilter,
  ];
}

export default checkColumn;
