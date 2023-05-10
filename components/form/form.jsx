import styles from "./form.module.css";
import "../../app/globals.css";

import Input from "../input/input";
import Button from "../button/button";

export default function Form() {
  return (
    <form className={styles.form}>
      <Input
        placeholder="Podaj email"
        name="email"
        type="text"
      />
      <Input
        placeholder="Podaj hasło"
        name="password"
        type="password"
      />
      <Button />
    </form>
  );
}
