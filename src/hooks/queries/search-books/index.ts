import type { GetBooksParameters } from "@/api/books";

import { booksApi } from "@/api/books";
import { invariant } from "@/utilities/invariant";
import { queryKeyFactory } from "@/utilities/query-key-factory";
import { useQuery } from "@tanstack/react-query";

export type UseSearchBooksQueryParameters = GetBooksParameters;

export const useSearchBooksQuery = ({
  searchQuery,
}: UseSearchBooksQueryParameters) => {
  const queryKey = queryKeyFactory.searchBooks({ searchQuery });

  const isQueryEnabled = searchQuery !== "";

  const query = useQuery({
    enabled: isQueryEnabled,
    queryFn: () => {
      invariant(isQueryEnabled, "Expected the query to be disabled.");

      return booksApi.books.get({ searchQuery });
    },
    queryKey,
  });

  const {
    data: booksData,
    isError: hasBooksError,
    isFetching: isLoadingBooks,
    ...additionalQueryProperties
  } = query;

  return {
    booksData,
    hasBooksError,
    isLoadingBooks,
    ...additionalQueryProperties,
  };
};
