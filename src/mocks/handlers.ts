import type { GetBookResponse, GetBooksResponse } from "@/api/books";

import { faker } from "@faker-js/faker";
import { rest } from "msw";

export const mockGetBooksHandler = rest.get<never, never, GetBooksResponse>(
  "https://api.books.com/books",
  (request, response, context) => {
    const fakeBooks = Array.from({ length: 8 }, () => ({
      author: faker.person.fullName(),
      coverImageUrl: faker.image.dataUri(),
      id: faker.string.uuid(),
      title: faker.commerce.productName(),
    }));

    return response(
      context.delay(500),
      context.json({
        books: fakeBooks,
      })
    );
  }
);

export const mockGetBookHandler = rest.get<never, never, GetBookResponse>(
  "https://api.books.com/book/*",
  (request, response, context) => {
    const fakeBook = {
      author: faker.person.fullName(),
      coverImageUrl: faker.image.dataUri(),
      description: faker.lorem.paragraph({ max: 30, min: 20 }),
      id: faker.string.uuid(),
      title: faker.commerce.productName(),
    };

    return response(
      context.delay(500),
      context.json({
        book: fakeBook,
      })
    );
  }
);

export const handlers = [mockGetBooksHandler, mockGetBookHandler];
