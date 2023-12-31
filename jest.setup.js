import "@testing-library/jest-dom/extend-expect";

import { server } from "./src/mocks/server";

beforeAll(() =>
  server.listen({
    onUnhandledRequest: "error",
  })
);

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
