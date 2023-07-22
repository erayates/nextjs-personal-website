'use client';

import React, { useContext } from "react";

import styles from "./darkmode.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { transform: "translateX(20px)", transition: 'transform .4s ease-in-out' } : { transform: "translateX(0)", transition: 'transform .4s ease-in-out' }}
        onClick={toggle}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
