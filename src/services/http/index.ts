export const httpService = {
  get: async <TData>(url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json() as TData;
  },
};
