import React from "react";
import Button from "../button/button";
import styles from "./delete-account.module.css";

export default function DeleteAccount() {
  return (
    <div className={styles.container}>
      <h5>Delete account</h5>

      <p>
        If you delete your account you’ll be permanently removing it from our
        systems - you can’t undo it.
      </p>

      <Button variant="ghost-danger">Yes, delete my account</Button>
    </div>
  );
}
