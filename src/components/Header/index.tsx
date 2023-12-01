import React from "react";
import styles from "@/src/components/Header/Header.module.scss";
import Modal from "@/src/components/Modal";

const Header = () => {
  const [isLeftModalOpen, setIsLeftModalOpen] = React.useState(false);
  const [isRightModalOpen, setIsRightModalOpen] = React.useState(false);

  return (
    <>
      <div className={styles["header-wrapper"]}>
        <div className={styles["nav-text-large"]}>LOGO</div>
        <ul className={styles["nav-list"]}>
          <li>
            <button
              className="nav-btn"
              onClick={() => {
                setIsRightModalOpen(false);
                setIsLeftModalOpen((current) => !current);
              }}
            >
              Ляво Меню
            </button>
          </li>
          <li>
            <button
              className="nav-btn"
              onClick={() => {
                setIsLeftModalOpen(false);
                setIsRightModalOpen((current) => !current);
              }}
            >
              Дясно Меню
            </button>
          </li>
        </ul>
      </div>
      <Modal
        isOpen={isLeftModalOpen}
        onClose={() => setIsLeftModalOpen(false)}
        openFrom="left"
      >
        {Array.from({ length: 10 }).map((_, i) => {
          return <ModalElement key={i} count={i + 1} />;
        })}
      </Modal>
      <Modal
        isOpen={isRightModalOpen}
        onClose={() => setIsRightModalOpen(false)}
        openFrom="right"
      >
        {Array.from({ length: 10 }).map((_, i) => {
          return <ModalElement key={i} count={i + 1} />;
        })}
      </Modal>
    </>
  );
};

const ModalElement = ({ count }: { count: number }) => {
  return <div className={styles["modal-element"]}>Елемент {count}</div>;
};

export default Header;
