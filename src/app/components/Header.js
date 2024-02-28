import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

const header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image src="/logo.png" width={180} height={50} />
        </Link>
      </div>
      <Navbar />
    </header>
  );
};

export default header;
