import type { GetBookParameters } from "@/api/books";

import { booksApi } from "@/api/books";
import { invariant } from "@/utilities/invariant";
import { queryKeyFactory } from "@/utilities/query-key-factory";
import { useQuery } from "@tanstack/react-query";

export interface UseBookQueryParameters {
  id: GetBookParameters["id"] | undefined;
}

export const useBookQuery = ({ id }: UseBookQueryParameters) => {
  const queryKey = queryKeyFactory.book({ id });

  const isQueryEnabled = id !== undefined;

  const query = useQuery({
    enabled: isQueryEnabled,
    queryFn: () => {
      invariant(isQueryEnabled, "Expected the query to be disabled.");

      return booksApi.book.get({ id });
    },
    queryKey,
  });

  const {
    data: bookData,
    isError: hasBookError,
    isLoading: isLoadingBook,
    ...additionalQueryProperties
  } = query;

  return {
    bookData,
    hasBookError,
    isLoadingBook,
    ...additionalQueryProperties,
  };
};
