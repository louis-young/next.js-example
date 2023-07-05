export const serialiseSearchParameters = (
  searchParameters: Record<string, string>
) => {
  return new URLSearchParams(searchParameters).toString();
};

export const appendSearchParametersToPath = (
  path: string,
  searchParameters: Record<string, string>
) => {
  const serialisedSearchParameters =
    serialiseSearchParameters(searchParameters);

  return `${path}?${serialisedSearchParameters}`;
};

export const constructAbsoluteUrl = (baseUrl: string, path: string) => {
  return `${baseUrl}${path}`;
};
