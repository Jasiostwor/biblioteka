"use client";
import styles from "./form.module.css";
import "../../app/globals.css";

import Link from "next/link";
import { React } from "react";
import { useState, useEffect } from "react";

import Input from "../input/input";
import Button from "../button/button";

export default function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("submit");
        console.log(email);
        console.log(password);
    };

    useEffect(() => {
        console.log(email);
    }, [email]);

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <Input placeholder="Podaj email" name="email" type="email" onChange={(event) => setEmail(event.target.value)} />
            <Input placeholder="Podaj hasło" name="password" type="password" onChange={(event) => setPassword(event.target.value)} />
            <Button />
        </form>
    );
}
