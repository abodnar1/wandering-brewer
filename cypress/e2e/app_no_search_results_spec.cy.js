describe("Wandering Brewer App - No Search Results", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  });

  it("should have a header with a title and home logo button", () => {
    cy.get(".app-title").contains("h1", "Wandering Brewer").click()
    .url().should("eq", "http://localhost:3000/")
  });

  it("should have a header with a link to view favorites", () => {
    cy.get(".favorites-link").contains("p", "Favorites").click()
    .url().should("eq", "http://localhost:3000/favorites")
  });
}); 
