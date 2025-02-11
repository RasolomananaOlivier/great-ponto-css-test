import React from "react";
import styles from "./user-profile.module.css";
import Image from "next/image";
import IconButton from "../icon-button/icon-button";

export default function UserProfile() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Image src="/user.png" alt="Avatar" width={36} height={36} />
        Clara
      </div>

      <IconButton icon="/settings.svg" title="Settings" />
    </div>
  );
}
