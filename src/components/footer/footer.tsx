import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.container}>
      <Link href="/terms">Terms & Conditions</Link>
      <Link href="/privacy">Privacy Policy</Link>

      <Link href="/faq">FAQ</Link>

      <Link href="/contact">Contact Us</Link>
    </div>
  );
}
