import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

export const metadata = {
  title: "Eray Ates - Contact",
  description:
    "Contact with me and let's keep in touch, create something together.",
};

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Let's Keep In Touch</h1>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols={20}
            rows={5}
          />
          <Button url="#" text="Send" />
        </form>
      </div>
      <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
    </div>
  );
}
