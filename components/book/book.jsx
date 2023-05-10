import BookDescription from "../bookDescription/bookDescription";

import styles from "./book.module.css";
import { BiBookBookmark } from "react-icons/bi";

export default function Book() {
  return (
    <section className={styles.bookSection}>
      <BiBookBookmark className={styles.bookIcon} />

      <BookDescription
        title="Pan Tadeusz"
        author="Adam Mickiewicz"
      />
    </section>
  );
}
