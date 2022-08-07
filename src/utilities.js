const micro = "https://saratogahotspringsresort.com/wp-content/uploads/2011/03/Brewery-2.jpg";

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
      cleanedBreweryObject.image = null;
    return cleanedBreweryObject;
  });
};

const getBreweryTypeImage = (cleanData) => {
  const cleanDataWithImages = cleanData.map(cleanedBreweryObject => {
    if (cleanedBreweryObject.brewery_type === "micro") {
      return {...cleanedBreweryObject, image: micro};
    } else {
      console.log("no image")
      return {...cleanedBreweryObject}
    }
  });

  return cleanDataWithImages;
};

export { getCleanData, getBreweryTypeImage };



// micro
// nano
// regional
// brewpub
// large
// planning
// bar
// contract
// proprietor
// closed