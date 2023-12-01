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
  const [isClosing, setIsClosing] = useState(false);
  const prevIsOpen = useRef<boolean>();

  const [wrapper, setWrapper] = useState<Element | null>(null);
  useEffect(() => {
    const element = document.getElementById("modal-root");
    setWrapper(element);
  }, []);

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape" && typeof onClose === "function") onClose();
    }

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  useLayoutEffect(() => {
    if (!isOpen && prevIsOpen.current) {
      setIsClosing(true);
    }

    prevIsOpen.current = isOpen;
  }, [isOpen]);

  if (wrapper === null) return null;

  return createPortal(
    <div
      className={cn("lg:flex", styles.modal, {
        hidden: !isOpen && !isClosing,
        [styles["closing"]]: isClosing,
      })}
      onAnimationEnd={() => {
        setIsClosing(false);
      }}
    >
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={cn(styles["modal-body"], styles[`is-${openFrom}`])}>
        {children}
      </div>
    </div>,
    wrapper,
  );
};

export default Modal;
