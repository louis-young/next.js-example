import type { ReactNode } from "react";

interface ErrorMessageProps {
  children: ReactNode;
}

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <p className="rounded bg-red-500 p-4 text-center font-semibold text-white">
      {children}
    </p>
  );
};
