import styles from "./input.module.css";

export default function Input(props) {
    const { placeholder, name, type, onChange } = props;
    return <input type={type} placeholder={placeholder} name={name} className={styles.input} onChange={onChange} />;
}
