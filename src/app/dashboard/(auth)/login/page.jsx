"use client";

import React from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") return <div>Loading...</div>;

  if (session.status === "authenticated") router.push("/dashboard");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
      <p className={styles.registerText}>OR</p>
      <button onClick={() => signIn("google")} className={styles.googleButton}>
        Login with Google
      </button>
      <Link href="/dashboard/register" className={styles.registerText}>
        Do you have not an account yet?
      </Link>
    </div>
  );
};

export default Login;
