export type MockResponseFunctionParameters<
  TParameters extends Record<string, string>,
  TResponseBody
> = {
  parameters: TParameters;
  response: {
    body: TResponseBody;
    delay?: number;
    statusCode?: number;
  };
};
