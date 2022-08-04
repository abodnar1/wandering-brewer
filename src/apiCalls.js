const fetchBreweriesByCity = () => {
  return fetch("https://api.openbrewerydb.org/breweries?by_city=lancaster")
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error("Oops! Something went wrong.")
    }
  });
};

export { fetchBreweriesByCity };
