import SearchInput from "../SearchInput/SearchInput";
import LogoutButton from "../logoutButton/logoutButton";
import styles from "./navbar.module.css";
import { BiBookAdd } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <SearchInput />
      <BiBookAdd className={`${styles.icon} ${styles.iconBook}`} />
      <LogoutButton />
    </nav>
  );
}
