function getResidents(array) {
  array.forEach((planet) => {
    delete planet.residents;
  });
}

export default getResidents;
