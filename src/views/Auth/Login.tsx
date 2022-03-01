import React from "react";
import Button from "../../components/Button";
import { authorizeClient, createAuthHandler } from "../../utils/auth";

export default function Login() {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Button
        label="Login"
        onClick={() => authorizeClient(createAuthHandler())}
      />
    </div>
  );
}
