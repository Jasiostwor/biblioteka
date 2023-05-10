import SearchInput from "../SearchInput/SearchInput";
import styles from "./navbar.module.css";

import { BiBookAdd, BiUserCircle } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <button className={styles.SearchInput}>
        <SearchInput />
      </button>
      <BiBookAdd className={`${styles.icon} ${styles.iconBook}`} />
      <BiUserCircle className={`${styles.icon} ${styles.iconUser}`} />
    </nav>
  );
}
