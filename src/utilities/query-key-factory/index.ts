import type { UseBookQueryParameters } from "@/hooks/queries/book";
import type { UseSearchBooksQueryParameters } from "@/hooks/queries/search-books";

export const queryKeyFactory = {
  book: ({ id }: UseBookQueryParameters) => ["book", id],
  searchBooks: ({ searchQuery }: UseSearchBooksQueryParameters) => [
    "books",
    searchQuery,
  ],
};
