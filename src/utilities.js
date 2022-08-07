const getCleanData = (apiFetchedData) => {
  return apiFetchedData.map(breweryObject => {
    let cleanedBreweryObject = {};
      cleanedBreweryObject.id = breweryObject.id;
      cleanedBreweryObject.name = breweryObject.name;
      cleanedBreweryObject.brewery_type = breweryObject.brewery_type;
      cleanedBreweryObject.street = breweryObject.street;
      cleanedBreweryObject.city = breweryObject.city;
      cleanedBreweryObject.state = breweryObject.state;
      cleanedBreweryObject.postal_code = breweryObject.postal_code;
      cleanedBreweryObject.phone = breweryObject.phone;
      cleanedBreweryObject.website_url = breweryObject.website_url;
      cleanedBreweryObject.updated_at = breweryObject.updated_at;
      cleanedBreweryObject.isFavorite = false;
    return cleanedBreweryObject;
  });
};

export { getCleanData };
