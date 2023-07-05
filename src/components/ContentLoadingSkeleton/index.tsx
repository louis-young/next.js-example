export const ContentLoadingSkeleton = () => {
  return (
    <div className="space-y-3">
      <div className="h-80 w-full animate-pulse rounded-lg bg-light" />
      <div className="h-4 w-full animate-pulse rounded-lg bg-light" />
      <div className="h-4 w-10/12 animate-pulse rounded-lg bg-light" />
    </div>
  );
};
