describe("Wandering Brewer - Favorites", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.openbrewerydb.org/breweries?by_city=savannah", {
      statusCode: 200,
      fixture: "savannah_breweries"
    })
    .visit("http://localhost:3000/")
    .get("input[name='city']").type("savannah")
    .get(".search-button").click()
    .get(".favorite-icon").first().click()
    .get(".favorites-link").contains("Favorites").click()
  });

  it("should have one brewery in the favorites container", () => {
    cy.get(".favorites-container").find(".favorite-card-wrapper").should("have.length", 1)
    .get(".favorite-name").contains("h2", "Moon River Brewing Co")
  });

  it("should be able to remove a brewery from favorites by clicking the trashcan", () => {
    cy.get(".remove-favorite-button").click()
    .get(".favorites-container").find(".favorite-card-wrapper").should("have.length", 0)
    .get(".no-favorites-message").contains("h3", "You haven't added any favorites yet!")
  });

  it("should be able to navigate back to the search page", () => {
    cy.get(".back-to-search-link-favorites").contains("div", "back to search").click()
    .url().should("eq", "http://localhost:3000/")
  });
});
