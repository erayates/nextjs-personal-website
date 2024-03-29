"use client";

import Link from "next/link";
import React, { useState } from "react";

import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

function MobileNavbar({ setNavbarOpen, navbarOpen }) {
  const handleMobileNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className={styles.mobileNavbar}>
      {links.map((link) => (
        <Link href={link.url} key={link.id} className={styles.mobileLink}>
          {link.title}
        </Link>
      ))}
      <div className={styles.closeIcon} onClick={() => handleMobileNavbar()}>
        x
      </div>
    </div>
  );
}

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const session = useSession();
  const router = useRouter();

  const handleRouter = () => {
    router.push("/dashboard/login");
  };

  const handleMobileNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          erayates
        </Link>
        <div className={styles.links}>
          <DarkModeToggle />
          {links.map((link) => (
            <Link href={link.url} key={link.id} className={styles.link}>
              {link.title}
            </Link>
          ))}
          {session.status === "authenticated" && (
            <button className={styles.logout} onClick={() => signOut()}>
              Logout
            </button>
          )}

          {session.status === "unauthenticated" && (
            <button className={styles.logout} onClick={() => handleRouter()}>
              Login
            </button>
          )}
        </div>
        <div className={styles.mobile}>
          <DarkModeToggle />
          <div
            className={styles.burgerIcon}
            onClick={() => handleMobileNavbar()}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </div>
      </div>
      {navbarOpen && (
        <MobileNavbar setNavbarOpen={setNavbarOpen} navbarOpen={navbarOpen} />
      )}
    </>
  );
}

export default Navbar;
