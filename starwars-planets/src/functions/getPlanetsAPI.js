async function getPlanetsAPI(url) {
  const request = await fetch(url);
  const data = await request.json();
  return data;
}

export default getPlanetsAPI;
