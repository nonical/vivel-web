import React from "react";
import styles from "./Action.module.css";

interface ActionProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  iconStyles: React.CSSProperties;
  titleStyles?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function Action({
  Icon,
  title,
  iconStyles,
  titleStyles,
  onClick,
}: ActionProps) {
  return (
    <div className={styles.action} onClick={onClick}>
      <Icon style={iconStyles} />
      <span style={titleStyles}>{title}</span>
    </div>
  );
}
