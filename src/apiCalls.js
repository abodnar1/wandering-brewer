const fetchBreweriesByCity = (city) => {
  return fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      console.log("Oops! Something went wrong.")
    }
  });
};

export { fetchBreweriesByCity };