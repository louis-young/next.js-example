import { getBookResponse, mockGetBookResponse } from "../fixtures/book/get";
import { getBooksResponse, mockGetBooksResponse } from "../fixtures/books/get";

describe("books", () => {
  it("can navigate to the Books page, search for books, and view the details of a specific book", () => {
    cy.visit("/");

    const [bookPreviewUnderTest] = getBooksResponse.books;

    mockGetBooksResponse({
      parameters: {
        searchQuery: bookPreviewUnderTest.title,
      },
      response: {
        body: getBooksResponse,
      },
    }).as("getBooks");

    cy.findByRole("link", { name: "Books" }).click();

    cy.findAllByLabelText("Search Query").type(bookPreviewUnderTest.title);

    cy.findByRole("button", { name: "Search" }).click();

    cy.wait("@getBooks");

    cy.findByRole("link", {
      name: new RegExp(bookPreviewUnderTest.title),
    }).as("bookPreviewLink");

    cy.get("@bookPreviewLink").should("be.visible");

    cy.findByRole("img", { name: bookPreviewUnderTest.title }).should(
      "be.visible"
    );

    cy.findByRole("heading", {
      name: bookPreviewUnderTest.title,
    }).should("be.visible");

    cy.findByRole("heading", {
      name: bookPreviewUnderTest.author,
    }).should("be.visible");

    const bookDetailsUnderTest = getBookResponse.book;

    mockGetBookResponse({
      parameters: {
        id: bookDetailsUnderTest.id,
      },
      response: {
        body: {
          book: {
            ...getBookResponse.book,
            id: bookDetailsUnderTest.id,
          },
        },
      },
    }).as("getBook");

    cy.get("@bookPreviewLink").click();

    cy.wait("@getBook");

    cy.findByRole("img", { name: bookDetailsUnderTest.title }).should(
      "be.visible"
    );

    cy.findByRole("heading", {
      name: bookDetailsUnderTest.title,
    }).should("be.visible");

    cy.findByRole("heading", {
      name: bookDetailsUnderTest.author,
    }).should("be.visible");

    cy.findByText(bookDetailsUnderTest.description).should("be.visible");
  });
});
