const fetchBreweriesByCity = (city) => {
  return fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error("Oops! Something went wrong. Please try again")
    }
  });
};

export { fetchBreweriesByCity };
