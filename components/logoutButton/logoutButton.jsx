"use client";
import { BiUserCircle } from "react-icons/bi";
import { useState } from "react";
import styles from "./logoutButton.module.css";
import Link from "next/link";

export default function LogoutButton() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <button className={`${styles.iconBtn} ${styles.iconUserBtn}`} onClick={toggleModal}>
                <BiUserCircle className={`${styles.icon} ${styles.iconUser}`} />
            </button>

            {modal && (
                <div className={styles.modal}>
                    <h3>Email użytkownika</h3>
                    <Link href="/login">
                        <button className={styles.logoutBtn}>Wyloguj się</button>
                    </Link>
                </div>
            )}
        </>
    );
}
