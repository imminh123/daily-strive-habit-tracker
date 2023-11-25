/**
 * This is the client-side entrypoint for your tRPC API. It is used to create the `api` object which
 * contains the Next.js App-wrapper, as well as your type-safe React Query hooks.
 *
 * We also create a few inference helpers for input and output types.
 */
import { httpBatchLink, loggerLink, createTRPCProxyClient } from "@trpc/client";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
