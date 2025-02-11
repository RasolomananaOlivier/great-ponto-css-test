"use client";

import React, { useState } from "react";
import styles from "./drawer.module.css";
import NavItem from "../nav-item/nav-item";
import Image from "next/image";
import { boardAgents, boards, jobs, searches } from "@/constant";
import IconButton from "../icon-button/icon-button";
import UserProfile from "../user-profile/user-profile";

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
            <Image src="/logo.svg" alt="Logo" width={130} height={42} />
            <button
              className={styles.closeButton}
              onClick={closeDrawer}
              aria-label="Close navigation drawer"
            >
              ✕ {/* Close icon */}
            </button>
          </div>
          <div className={styles.drawerContent}>
            <NavItem title="My templates" icon="/template.svg" />
            <NavItem title="Search" icon="/search.svg">
              {jobs.map((job, index) => (
                <NavItem key={index} title={job} icon="/star.png" subfolder />
              ))}

              {searches.map((search, index) => (
                <NavItem
                  key={index}
                  title={search}
                  icon="/clock.svg"
                  subfolder
                />
              ))}
            </NavItem>
            <NavItem
              title="My boards"
              icon="/board.svg"
              trailing={<IconButton title="add" icon="/add.svg" />}
            >
              {boards.map((board, index) => (
                <NavItem
                  key={index}
                  title={board}
                  icon="/folder.png"
                  subfolder
                />
              ))}

              {boardAgents.map((board, index) => (
                <NavItem key={index} title={board} icon="/lock.png" subfolder />
              ))}
            </NavItem>
          </div>
          <div className={styles.drawerFooter}>
            <UserProfile />
          </div>
        </aside>
      </div>
    </>
  );
}
