import { environmentVariables } from "@/constants/environment-variables/index.mjs";
import { httpService } from "@/services/http";
import {
  appendSearchParametersToPath,
  constructAbsoluteUrl,
} from "@/utilities/url";

export type BookPreview = {
  author: string;
  coverImageUrl: string;
  id: string;
  title: string;
};

export type BookDetails = {
  author: string;
  coverImageUrl: string;
  description: string;
  id: string;
  title: string;
};

export type GetBooksParameters = {
  searchQuery: string;
};

export type GetBooksResponse = {
  books: BookPreview[];
};

export type GetBookParameters = {
  id: BookDetails["id"];
};

export type GetBookResponse = {
  book: BookDetails;
};

export const booksApi = {
  book: {
    get: ({ id }: GetBookParameters) => {
      const endpoint = `/book/${id}`;

      const url = constructAbsoluteUrl(
        environmentVariables.NEXT_PUBLIC_BOOKS_API_BASE_URL,
        endpoint
      );

      return httpService.get<GetBookResponse>(url);
    },
  },
  books: {
    get: ({ searchQuery }: GetBooksParameters) => {
      const endpoint = appendSearchParametersToPath("/books", { searchQuery });

      const url = constructAbsoluteUrl(
        environmentVariables.NEXT_PUBLIC_BOOKS_API_BASE_URL,
        endpoint
      );

      return httpService.get<GetBooksResponse>(url);
    },
  },
};
