import React from "react";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
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
  }
}

export default async function BlogPost({ params }) {
  const post = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.desc}</p>
          <div className={styles.author}>
            <Image
              src={post.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.author}>{post.author}</span>
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
