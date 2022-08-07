describe("Wandering Brewer App - With Search Results", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.openbrewerydb.org/breweries?by_city=savannah", {
      statusCode: 200,
      fixture: "savannah_breweries"
    })
    .visit("http://localhost:3000/")
  });

  it("should have a form to enter a city and display that city's breweries", () => {
    cy.get("input[name='city']").type("savannah")
    .get(".search-button").click()
    .get(".breweries-container").find(".brewery-card-wrapper").should("have.length", 2)
    .get(".brewery-name").contains("h2", "Moon River Brewing Co")
    .get(".brewery-name").contains("h2", "Two Tides Brewing Company")
    .get(".brewery-location").first().contains("p", "Savannah, Georgia")
  });
  
  it("should be able to click on the 'view details' link and see more information about the brewery", () => {
    cy.get("input[name='city']").type("savannah")
    .get(".search-button").click()
    .get(".breweries-container").find(".brewery-card-wrapper").should("have.length", 2)
    
    .get(".view-details-link").first().click()
    .url().should("eq","http://localhost:3000/moon-river-brewing-co-savannah")
    .get(".brewery-details-name").contains("h2", "Moon River Brewing Co")
    .get(".brewery-type").contains("p", "brewpub")
    .get(".phone").contains("a", "Phone: 912-447-0943")
    .get(".website-link").contains("a", "Visit website")
    .get(".back-to-search-link").contains("span", "back to search").click()
    .url().should("eq", "http://localhost:3000/")    
  });
});