import { getTokens } from "./auth";

export default async function _fetch(
  input: RequestInfo,
  init?: RequestInit | undefined
): Promise<Response> {
  return fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${getTokens().accessToken}`,
    },
  });
}
