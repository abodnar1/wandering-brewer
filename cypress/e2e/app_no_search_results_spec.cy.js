describe("Wandering Brewer App - No Search Results", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  });

  it("should have a header with a title", () => {
    cy.get(".app-title").contains("h1", "Wandering Brewer")
    .get(".no-search-results-message").contains("h3", "Choose a city to search!")
  });

  it("should have a header with a link to view favorites", () => {
    cy.get(".favorites-link").click()
    .url().should("eq", "http://localhost:3000/favorites")
    .get(".no-favorites-message").contains("h3", "You haven't added any favorites yet!")
  });
}); 
