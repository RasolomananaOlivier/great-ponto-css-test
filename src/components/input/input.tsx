import React from "react";
import styles from "./input.module.css";

type InputProps = {
  name: string;
  type: string;
  label: string;
};

export default function Input(props: InputProps) {
  return (
    <div className={styles.container}>
      <input
        name={props.name}
        type={props.type}
        className={styles.input}
        required
        placeholder=" "
      />
      <label htmlFor={props.name} className={styles.label}>
        {props.label}
      </label>
    </div>
  );
}
