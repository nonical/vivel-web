import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import {
  createAuthHandler,
  createNotifier,
  getTokenWithCode,
  storeTokens,
} from "../../utils/auth";

export default function Redirect() {
  const { login } = useAuth();
  const navigate = useNavigate();

  useQuery("redirect", async () => {
    const notifier = createNotifier(async (req, res, err) => {
      if (err) throw err;

      const tokens = await getTokenWithCode(
        res?.code!,
        req.internal!.code_verifier
      );

      storeTokens(tokens);
      login(tokens.accessToken, () => navigate("/drives"));
    });

    createAuthHandler(notifier).completeAuthorizationRequestIfPossible();
  });

  return <></>;
}
