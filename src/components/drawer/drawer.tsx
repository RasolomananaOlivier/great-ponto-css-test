"use client";

import React, { useState } from "react";
import styles from "./drawer.module.css";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        <button
          className={styles.toggler}
          onClick={toggleDrawer}
          aria-label={isOpen ? "Close drawer" : "Open drawer"}
          aria-expanded={isOpen}
        >
          ☰ {/* Hamburger icon (you can use an image or icon library here) */}
        </button>
      </nav>

      <div className={styles.container}>
        {/* Drawer Trigger Button */}

        {/* Drawer Backdrop (optional, for clicking outside to close) */}
        {isOpen && (
          <div className={styles.backdrop} onClick={closeDrawer}></div>
        )}

        {/* The Drawer Itself */}
        <aside
          className={`${styles.drawer} ${isOpen ? styles.open : "closed"}`}
          aria-hidden={!isOpen}
        >
          <div className={styles.drawerHeader}>
            <h3>Navigation</h3> {/* Drawer Header Content */}
            <button
              className={styles.closeButton}
              onClick={closeDrawer}
              aria-label="Close navigation drawer"
            >
              ✕ {/* Close icon */}
            </button>
          </div>
          <div className={styles.drawerContent}>
            {/* Drawer Content Goes Here (Navigation Links, etc.) */}
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.drawerFooter}>
            <h3>Footer</h3> {/* Drawer Header Content */}
          </div>
        </aside>
      </div>
    </>
  );
}
