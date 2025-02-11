"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./nav-item.module.css";

type Props = {
  title: string;
  icon: string;
  subfolder?: boolean;
  children?: React.ReactNode;
  trailing?: React.ReactNode;
};

export default function NavItem({
  title,
  icon,
  subfolder,
  children,
  trailing,
}: Props) {
  const [showSubmenu, setshowSubmenu] = useState<boolean>(false);
  const [submenuHeight, setSubmenuHeight] = useState<number>(0);
  const submenuWrapperRef = useRef<HTMLDivElement>(null);
  const submenuContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submenuWrapperRef.current) {
      if (showSubmenu) {
        setSubmenuHeight(submenuContentRef.current?.offsetHeight ?? 0);
        submenuWrapperRef.current.classList.remove(
          styles["submenu-wrapper-closed"]
        );
        submenuWrapperRef.current.classList.add(styles["submenu-wrapper-open"]);
      } else {
        submenuWrapperRef.current.classList.remove(
          styles["submenu-wrapper-open"]
        );
        submenuWrapperRef.current.classList.add(
          styles["submenu-wrapper-closed"]
        );

        setTimeout(() => setSubmenuHeight(0), 300);
      }
    }
  }, [showSubmenu]);

  return (
    <>
      <div
        className={styles.container}
        onClick={() => setshowSubmenu(!showSubmenu)}
      >
        <div>
          <img src={icon} alt={title} className={styles.icon} />
          <div
            className={`${styles.title} ${subfolder ? styles.subfolder : ""}`}
          >
            {title}
          </div>
        </div>

        {trailing}
      </div>

      {children && (
        <div
          ref={submenuWrapperRef}
          className={`${styles["submenu-wrapper"]} ${
            showSubmenu
              ? styles["submenu-wrapper-open"]
              : styles["submenu-wrapper-closed"]
          }`}
          style={{ maxHeight: showSubmenu ? `${submenuHeight}px` : "0px" }}
        >
          <div ref={submenuContentRef} className={styles.submenu}>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
