import React from "react";
import "./action.css";

interface ActionProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  iconStyles: React.CSSProperties;
  titleStyles?: React.CSSProperties;
}

export default function Action({
  Icon,
  title,
  iconStyles,
  titleStyles,
}: ActionProps) {
  return (
    <div className={"action"}>
      <Icon style={iconStyles} />
      <span style={titleStyles}>{title}</span>
    </div>
  );
}
