const Minusone = -1;
function alphabeticalOrder(planets) {
  planets.sort((a, b) => {
    const fa = a.name.toLowerCase();
    const fb = b.name.toLowerCase();

    if (fa < fb) {
      return Minusone;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
}

export default alphabeticalOrder;
