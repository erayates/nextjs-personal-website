"use client";

import Link from "next/link";
import React, { useState } from "react";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try{
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });
        if(res.status === 201){
            router.push("/dashboard/login");
        }else{
            throw new Error(await res.text());
        }
    }catch(err){
        setError(err);
    }
};

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          className={styles.input}
          required
        />
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />

        <button className={styles.button} type="submit">
          Register
        </button>
      </form>
      {error && <p className={styles.error}>Something went wrong!</p>}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
};

export default Register;
