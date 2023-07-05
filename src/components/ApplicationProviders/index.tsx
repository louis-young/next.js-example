import { createQueryClient } from "@/utilities/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { ErrorBoundaryFallback } from "../ErrorBoundaryFallback";

interface ApplicationProvidersProps {
  children: ReactNode;
}

export const ApplicationProviders = ({
  children,
}: ApplicationProvidersProps) => {
  const [queryClient] = useState(createQueryClient);

  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ErrorBoundary>
  );
};
