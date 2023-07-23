"use client";

import styles from "./page.module.css";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          author: session.data.user.name,
        }),
      });
    } catch (err) {
      console.log(err);
    }

    e.target.reset();
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });

      router.reload(window.location.pathname);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch(`/api/posts?author=${session?.data?.user.name}`, {
        cache: "no-store",
      });

      if (!res.ok) {
        setErr(true);
      }

      const data = await res.json();
      setData(data);
      setIsLoading(false);
    };

    getData();
  }, []);

  const session = useSession();
  const router = useRouter();

  console.log(session?.data?.user.name);

  if (session.status === "loading") if (isLoading) return <div>Loading...</div>;

  if (session.status === "unauthenticated") router.push("/dashboard/login");

  if (err) return <p>Something went wrong</p>;

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {!isLoading &&
          data?.map((post) => (
            <div className={styles.post} key={post._id}>
              <div className={styles.imgContainer}>
                <Image src={post.img} alt="" fill={true} />
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postDesc}>{post.desc}</p>
              <span
                className={styles.delete}
                onClick={() => handleDelete(post._id)}
              >
                X
              </span>
            </div>
          ))}
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Add New Posts</h1>
        <input type="text" placeholder="Title" className={styles.input} />
        <input type="text" placeholder="Description" className={styles.input} />
        <input type="text" placeholder="Image" className={styles.input} />
        <textarea
          placeholder="Content"
          className={styles.textArea}
          cols={30}
          rows={10}
        />
        <button className={styles.button}>Add Post</button>
      </form>
    </div>
  );
}
