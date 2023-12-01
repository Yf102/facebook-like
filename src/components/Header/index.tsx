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
        <div>Елемент 1</div>
        <div>Елемент 2</div>
        <div>Елемент 3</div>
        <div>Елемент 4</div>
        <div>Елемент 5</div>
        <div>Елемент 6</div>
        <div>Елемент 7</div>
        <div>Елемент 8</div>
        <div>Елемент 9</div>
        <div>Елемент 10</div>
      </Modal>
      <Modal
        isOpen={isRightModalOpen}
        onClose={() => setIsRightModalOpen(false)}
        openFrom="right"
      >
        <div>Елемент 1</div>
        <div>Елемент 2</div>
        <div>Елемент 3</div>
        <div>Елемент 4</div>
        <div>Елемент 5</div>
        <div>Елемент 6</div>
        <div>Елемент 7</div>
        <div>Елемент 8</div>
        <div>Елемент 9</div>
        <div>Елемент 10</div>
      </Modal>
    </>
  );
};

export default Header;
