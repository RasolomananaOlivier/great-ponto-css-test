import React from "react";
import styles from "./button.module.css";

type ButtonProps = {
  variant?: "contained" | "ghost-danger";
} & React.PropsWithChildren<React.ComponentPropsWithoutRef<"button">>;

export default function Button({ children, variant, ...props }: ButtonProps) {
  const getVariant = () => {
    switch (variant) {
      case "ghost-danger":
        return styles.ghostDanger;
      default:
        return styles.contained;
    }
  };

  return (
    <button className={`${styles.button} ${getVariant()}`} {...props}>
      {children}
    </button>
  );
}
