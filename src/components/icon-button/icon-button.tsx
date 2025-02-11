import React from "react";
import styles from "./icon-button.module.css";
import Image from "next/image";

type IconButtonProps = {
  icon: string;
  title: string;
};

export default function IconButton({ icon, title }: IconButtonProps) {
  return (
    <button className={styles.button}>
      <Image src={icon} width={20} height={20} alt={title} />
    </button>
  );
}
