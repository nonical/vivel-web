import {
  AuthorizationListener,
  AuthorizationNotifier,
  AuthorizationRequest,
  AuthorizationServiceConfiguration,
  BaseTokenRequestHandler,
  BasicQueryStringUtils,
  DefaultCrypto,
  FetchRequestor,
  GRANT_TYPE_AUTHORIZATION_CODE,
  GRANT_TYPE_REFRESH_TOKEN,
  LocalStorageBackend,
  LocationLike,
  RedirectRequestHandler,
  StringMap,
  TokenRequest,
  TokenResponse,
} from "@openid/appauth";
import { IDENTITY } from "./config";
import jwtDecode from "jwt-decode";

const CLIENT_ID = "vivel.web";
const REDIRECT_URI = "http://localhost:3000/redirect";
const SCOPE = "openid profile offline_access scope1";

export function createAuthHandler(
  notifier: AuthorizationNotifier | null = null
) {
  class NoHashQueryStringUtils extends BasicQueryStringUtils {
    parse(input: LocationLike, useHash?: boolean): StringMap {
      return super.parse(input, false);
    }
  }

  const handler = new RedirectRequestHandler(
    new LocalStorageBackend(),
    new NoHashQueryStringUtils(),
    window.location,
    new DefaultCrypto()
  );

  if (notifier) handler.setAuthorizationNotifier(notifier);

  return handler;
}

export function createNotifier(listener: AuthorizationListener | null = null) {
  const notifier = new AuthorizationNotifier();

  if (listener) notifier.setAuthorizationListener(listener);

  return notifier;
}

export function createTokenHandler() {
  return new BaseTokenRequestHandler(new FetchRequestor());
}

export async function fetchAuthServiceConfig() {
  const config = await AuthorizationServiceConfiguration.fetchFromIssuer(
    IDENTITY,
    new FetchRequestor()
  );

  return config;
}

export async function getTokenWithCode(code: string, code_verifier: string) {
  const handler = createTokenHandler();
  const request = new TokenRequest({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    grant_type: GRANT_TYPE_AUTHORIZATION_CODE,
    code,
    extras: { code_verifier },
  });

  return handler.performTokenRequest(await fetchAuthServiceConfig(), request);
}

export async function getTokenWithRefresh(refresh_token: string) {
  const handler = createTokenHandler();
  const request = new TokenRequest({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    grant_type: GRANT_TYPE_REFRESH_TOKEN,
    refresh_token,
  });

  return handler.performTokenRequest(await fetchAuthServiceConfig(), request);
}

export async function authorizeClient(handler: RedirectRequestHandler) {
  const issuerConfig = await fetchAuthServiceConfig();
  const authRequest = new AuthorizationRequest({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: SCOPE,
    response_type: AuthorizationRequest.RESPONSE_TYPE_CODE,
  });

  handler.performAuthorizationRequest(issuerConfig, authRequest);
}

export function storeTokens(tokens: TokenResponse) {
  localStorage.setItem("accessToken", tokens.accessToken);
  localStorage.setItem("refreshToken", tokens.refreshToken!);
  localStorage.setItem("idToken", tokens.idToken!);
}

export function getTokens() {
  return {
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
    idToken: localStorage.getItem("idToken"),
  };
}

export function getDecodedAccessToken(): any {
  return jwtDecode(localStorage.getItem("accessToken")!);
}

export function deleteTokens() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("idToken");
}

export function logoutRedirect() {
  window.location.href = `${IDENTITY}/Account/Logout`;
}
