describe("Wandering Brewer App - No Search Results", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  });

  it("should have a header with a title and home logo button", () => {
    cy.get(".logo-home").click()
    .url().should("eq", "http://localhost:3000/")
  });

  it("should have a header with a link to view favorites", () => {
    cy.get(".favorites-link").click()
    .url().should("eq", "http://localhost:3000/favorites")
  });
}); 
