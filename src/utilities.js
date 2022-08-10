import micro from "./assets/micro.png";
import nano from "./assets/nano.png";
import regional from "./assets/regional.png";
import brewpub from "./assets/brewpub.png";
import large from "./assets/large.png";
import planning from "./assets/planning.png";
import bar from "./assets/bar.png";
import contract from "./assets/contract.png";
import proprietor from "./assets/proprietor.png";
import closed from "./assets/closed.png";

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
    } else if (cleanedBreweryObject.brewery_type === "nano") {
      return {...cleanedBreweryObject, image: nano};
    } else if (cleanedBreweryObject.brewery_type === "regional") {
      return {...cleanedBreweryObject, image: regional};
    } else if (cleanedBreweryObject.brewery_type === "brewpub") {
      return {...cleanedBreweryObject, image: brewpub};
    } else if (cleanedBreweryObject.brewery_type === "large") {
      return {...cleanedBreweryObject, image: large};
    } else if (cleanedBreweryObject.brewery_type === "planning") {
      return {...cleanedBreweryObject, image: planning};
    } else if (cleanedBreweryObject.brewery_type === "bar") {
      return {...cleanedBreweryObject, image: bar};
    } else if (cleanedBreweryObject.brewery_type === "contract") {
      return {...cleanedBreweryObject, image: contract};
    } else if (cleanedBreweryObject.brewery_type === "proprietor") {
      return {...cleanedBreweryObject, image: proprietor};
    } else if (cleanedBreweryObject.brewery_type === "closed") {
      return {...cleanedBreweryObject, image: closed};
    } else if (cleanedBreweryObject.brewery_type === null) {
      return {...cleanedBreweryObject, image: null};
    } else {
      return {...cleanedBreweryObject};
    };
  });

  return cleanDataWithImages;
};

export { getCleanData, getBreweryTypeImage };
