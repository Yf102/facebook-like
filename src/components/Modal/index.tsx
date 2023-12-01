"use client";
import { createPortal } from "react-dom";
import { useEffect, ReactNode, useRef, useLayoutEffect, useState } from "react";
import cn from "classnames";
import styles from "./Modal.module.scss";

export type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  openFrom?: "left" | "right";
};
const Modal = ({
  children,
  onClose,
  isOpen,
  openFrom = "left",
}: ModalProps) => {
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape" && typeof onClose === "function") onClose();
    }

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return createPortal(
    <div
      className={cn(styles.modal, {
        [styles["is-open"]]: isOpen,
      })}
    >
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={cn(styles["modal-body"], styles[`is-${openFrom}`])}>
        {children}
      </div>
    </div>,
    document?.body,
  );
};

export default Modal;
