import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button/Button";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata = {
  title: "Eray Ates - Blog",
  description: "View and read the latest blog post of Eray Ates.",
};

export default async function Blog() {
  const posts = await getData();

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainTitle}>Blog</h1>
      <p className={styles.mainDesc}>See all fascinating blog posts.</p>
      {posts?.map((post) => (
        <div key={post.id} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src={post.img}
              alt="Blog Post Image"
              fill={true}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <div>
              <h2 className={styles.title}>{post.title}</h2>
              <p className={styles.desc}>{post.desc}</p>
            </div>
            <Button text="Read More" url={`/blog/${post._id}`} />
          </div>
        </div>
      ))}
    </div>
  );
}
