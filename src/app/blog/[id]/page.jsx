"use client";

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

async function getData(id) {
  const host = headers().get("host");
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
  const url = `${protocol}://${host}/api/posts/${id}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);

  return {
    title: post.title,
    description: post.desc,
  };
}

export default async function BlogPost({ params }) {
  const post = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <div className={styles.text}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.desc}</p>
          </div>
          <div className={styles.author}>
            <Image
              src={post.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span >{post.author}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={post.img} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{post.content}</p>
      </div>
    </div>
  );
}
