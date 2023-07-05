import { z } from "zod";

const environmentVariablesSchema = z.object({
  NEXT_PUBLIC_BOOKS_API_BASE_URL: z.string().url(),
  NEXT_PUBLIC_ENABLE_API_MOCKING: z
    .enum(["true", "false"])
    .transform((string) => string === "true"),
});

export const environmentVariables = environmentVariablesSchema.parse({
  NEXT_PUBLIC_BOOKS_API_BASE_URL: process.env.NEXT_PUBLIC_BOOKS_API_BASE_URL,
  NEXT_PUBLIC_ENABLE_API_MOCKING: process.env.NEXT_PUBLIC_ENABLE_API_MOCKING,
});
