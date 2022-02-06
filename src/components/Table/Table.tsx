import React from "react";
import "./table.css";

interface TableProps {
  children?: React.ReactNode;
}

export default function Table({ children }: TableProps) {
  return <table>{children}</table>;
}
