import React from "react";
import styles from "./button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "contained" | "ghost-danger";
};

export default function Button({ children, variant }: ButtonProps) {
  const getVariant = () => {
    switch (variant) {
      case "ghost-danger":
        return styles.ghostDanger;
      default:
        return styles.contained;
    }
  };

  return (
    <button className={`${styles.button} ${getVariant()}`}>{children}</button>
  );
}
