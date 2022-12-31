export function orderCityList(cities) {
  const newCities = cities.reduce((namesCities, cityName) => {
    namesCities[cityName] =
      cityName in namesCities ? namesCities[cityName] + 1 : 1;
    return namesCities;
  }, {});
  return Object.entries(newCities).sort((a, b) => {
    const r = b[1] - a[1];
    if (r === 0) {
      return a[0].localeCompare(b[0]);
    }
    return r;
  });
}
