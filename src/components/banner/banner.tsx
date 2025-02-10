import React from "react";
import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.container}>
      <Image
        src="/banner.svg"
        alt="Banner"
        width={72}
        height={72}
        className={styles.banner}
      />

      <div className={styles.content}>
        <h1>Premium Account</h1>
        <p>
          You have a premium account, granting you access to all the remarkable
          features offered by ResumeDone. With this privilege, you can indulge
          in the freedom of downloading an unlimited number of resumes and cover
          letters in both PDF and Word formats.
        </p>
      </div>
    </div>
  );
}
