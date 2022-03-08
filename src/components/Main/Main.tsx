import React from "react";

interface MainProps {
  children?: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <main
      style={{
        backgroundColor: "#FF98A8",
      }}
    >
      <div
        style={{
          marginLeft: "15%",
          marginRight: "15%",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </main>
  );
}
