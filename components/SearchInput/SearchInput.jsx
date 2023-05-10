import Input from "../input/input";
import styles from "./SearchInput.module.css";

import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
  return (
    <div className={styles.searchContainer}>
      <Input />
      <FaSearch className={styles.searchIcon} />
    </div>
  );
}
