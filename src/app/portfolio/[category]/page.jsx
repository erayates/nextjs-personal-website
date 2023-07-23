import Button from "@/components/Button/Button";
import React from "react";
import { notFound } from "next/navigation";
import { items } from "./data";

import styles from './page.module.css'
import Image from "next/image";


const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

export const metadata = {
  title: "Eray Ates - Categories",
  description: "You can view my projects by categories.",
};


export default function Category({ params }) {
  const categories = getData(params.category);

  return (
    <div className={styles.container}>
      <h2 className={styles.categoryTitle}>{params.category}</h2>

      {categories.map((category) => (
        <div className={styles.item} key={category.id}>
          <div className={styles.content}>
            <h3 className={styles.title}>{category.title}</h3>
            <p className={styles.desc}>{category.desc}</p>
            <Button url="#" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.imgContainer}
              fill={true}
              src={category.image}
              alt="Category Image"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
