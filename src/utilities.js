const micro = "https://saratogahotspringsresort.com/wp-content/uploads/2011/03/Brewery-2.jpg";
const nano = "https://www.micetcraft.com/wp-content/uploads/2021/04/What-is-Nano-Brewery.jpg";
const regional = "https://learn.kegerator.com/wp-content/uploads/2015/08/weissbier-weizen-style.jpg";
const brewpub = "https://www.arc-online.com/en-us/media/catalog/product/cache/394f734a6220a50fe0c060b78a87b444/u/s/US_Craft_Brew_19.5oz_Tulip_Lifestyle.jpg";
const large = "https://www.bottleneckmgmt.com/wp-content/uploads/old_uploads/B-Beer-cans_500.jpg";
const planning = "https://massbrewbros.com/wp-content/uploads/2020/01/White-Lion-Brewing-1-1080x675.jpg"; 
const bar = "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2019/08/14/97f04adefa11426fa88d78611b9e1133_web-Harvard_and_Stone-14_lax_credit_harvardandstone_INLINE.jpg";
const contract = "https://cdn.hopculture.com/wp-content/uploads/2018/07/mikkeller-slider5.jpg";
const proprietor = "https://cdn.shopify.com/s/files/1/0021/3472/files/VallejoMemories_3120_2048x2048.jpg";
const closed = "https://cdn.shopify.com/s/files/1/2526/0384/products/neon-open-closed-sign-closed_1200x1200.jpg";

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