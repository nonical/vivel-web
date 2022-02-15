import React, { useRef } from "react";
import styles from "./Modal.module.css";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const hideModal = () => {
    containerRef.current!.hidden = true;
    onClose();
  };

  return (
    <div
      ref={containerRef}
      className={styles["modal-container"]}
      hidden={!isOpen}
      onClick={(event) => {
        if (event.target == containerRef.current) hideModal();
      }}
    >
      <div className={styles["form-container"]}>
        <div className={styles["modal-title-container"]}>
          <span>{title}</span>
          <span className={styles["modal-close-button"]} onClick={hideModal}>
            &times;
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
