import type { ReactNode } from "react";

import { ErrorMessage } from "../ErrorMessage";

interface AsynchronousComponentProps<TData> {
  children: (data: NonNullable<TData>) => ReactNode;
  data: TData;
  fallback: ReactNode;
  hasError: boolean;
  isLoading: boolean;
}

export const AsynchronousComponent = <TData,>({
  children,
  data,
  fallback,
  hasError,
  isLoading,
}: AsynchronousComponentProps<TData>) => {
  return isLoading ? (
    fallback
  ) : hasError ? (
    <ErrorMessage>Something went wrong. Please try again.</ErrorMessage>
  ) : data ? (
    children(data)
  ) : undefined;
};
