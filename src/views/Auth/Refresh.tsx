import React from "react";
import { useQuery } from "react-query";
import { useAuth } from "../../contexts/Auth";
import { getTokens, getTokenWithRefresh, storeTokens } from "../../utils/auth";

interface RefreshProps {
  children: JSX.Element;
}

export default function Refresh({ children }: RefreshProps) {
  const { login } = useAuth();

  const { isFetched } = useQuery("auth", async () => {
    try {
      const { refreshToken } = getTokens();

      if (!refreshToken) return;

      const tokens = await getTokenWithRefresh(refreshToken);

      storeTokens(tokens);
      login(tokens.accessToken);
    } finally {
      return;
    }
  });

  return isFetched ? children : <></>;
}
