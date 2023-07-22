import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Websites from 'public/websites.jpg'
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={Websites} fill={true} alt="" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h2 className={styles.title}>Who Are We?</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            temporibus pariatur officia magnam quam provident modi, neque
            placeat enim dolores dolorem consequuntur error doloribus nesciunt
            excepturi alias doloremque. In debitis eaque nisi quo, aperiam quia
            <br />
            <br />
            repellat illum odio reprehenderit quaerat eos sed, porro vitae
            molestiae rerum. Atque minima dignissimos hic? Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Aut quaerat in repellat
            cupiditate! Modi ipsam dicta quae facere molestiae, illum voluptates
            alias error eaque. Est explicabo esse doloribus pariatur laudantium?
          </p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.title}>What We Do?</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eaque
            nesciunt modi aspernatur consequatur illum nihil mollitia, sequi,
            neque accusamus natus, tempora rerum dicta dolor minima
            exercitationem debitis cum at!
            <br />
            <br /> - Dynamic Websites - Fast and Handy

          </p>
          <Button url='/contact' text='Contact with me!'/>
        </div>
      </div>
    </div>
  );
}
