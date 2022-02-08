import React from "react";

interface TitleProps {
  title: string;
  children?: React.ReactNode;
}

export default function Title({ title, children }: TitleProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        paddingTop: 30,
        paddingBottom: 15,
        height: 70,
        color: "white",
      }}
    >
      <div style={{ fontSize: 60 }}>{title}</div>
      <div style={{ display: "flex", alignItems: "center" }}>{children}</div>
    </div>
  );
}
