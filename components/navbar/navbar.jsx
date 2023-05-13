import SearchInput from "../SearchInput/SearchInput";
import LogoutButton from "../logoutButton/logoutButton";
import AddBook from "../addBook/addBook";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <SearchInput />
      <AddBook />
      <LogoutButton />
    </nav>
  );
}
