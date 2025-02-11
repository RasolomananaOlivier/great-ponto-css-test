import React from "react";
import Input from "../input/input";
import styles from "./form.module.css";
import Button from "../button/button";
import Image from "next/image";

export default function Form() {
  return (
    <div className={styles.container}>
      <h1>Personal Information</h1>

      <form className={styles.form}>
        <div className={styles.innerform}>
          <div className={styles.inputContainer}>
            <div className={styles.inputRow}>
              <Input name="firstName" label="First Name" type="text" />
              <Input name="lastName" label="Last Name" type="text" />
            </div>

            <div className={styles.inputRow}>
              <Input name="postalCode" label="Postal Code" type="text" />
            </div>

            <Input name="address" label="Address" type="text" />

            <div className={styles.inputRow}>
              <Input name="email" label="Email" type="email" />
              <Input name="phone" label="Phone" type="text" />
            </div>

            <div className={styles.inputRow}>
              <Input name="password" label="Password" type="text" />
              <div style={{ width: "100%" }} />
            </div>
          </div>

          <Image src="/avatar.png" alt="Avatar" width={144} height={144} />
        </div>

        <p>
          Use this email to log in to your{" "}
          <a href="https://resumedone.io" target="_blanked">
            resumedone.io
          </a>{" "}
          account and receive notifications.
        </p>

        <div>
          <Button style={{ width: "170px" }}>Save</Button>
        </div>
      </form>
    </div>
  );
}
