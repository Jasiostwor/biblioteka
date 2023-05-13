"use client";
import { BiBookAdd, BiX } from "react-icons/bi";
import styles from "./addBook.module.css";
import { useState } from "react";
import Input from "../input/input";

export default function addBook() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className={`${styles.iconBtn} ${styles.iconBookBtn}`}>
        <BiBookAdd className={`${styles.icon} ${styles.iconBook}`} />
      </button>

      {modal && (
        <div className={styles.modal}>
          <form className={styles.AddBookForm}>
            <BiX
              className={styles.CloseModal}
              onClick={toggleModal}
            />

            <Input placeholder="Tytuł" />
            <Input placeholder="Autor" />
            <Input placeholder="Wydawnictwo" />
            <Input placeholder="Uwagi" />
            <button
              type="submit"
              className={styles.submitBtn}>
              Dodaj
            </button>
          </form>
          <div className={styles.overlay}></div>
        </div>
      )}
    </>
  );
}
