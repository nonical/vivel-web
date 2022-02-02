import React from "react";
import "./action.css";

interface ActionProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  styles: React.CSSProperties;
}

export default function Action({ Icon, title, styles }: ActionProps) {
  return (
    <div className={"action"}>
      <Icon style={styles} />
      <span>{title}</span>
    </div>
  );
}
