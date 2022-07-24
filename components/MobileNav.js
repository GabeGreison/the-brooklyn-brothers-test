import React from "react";
import styles from "./MobileNav.module.css";

const MobileNav = ({ children, open, setOpen }) => {
  return (
    <>
      <div className={styles.sidebar}>{children}</div>
      <div onClick={() => setOpen(!open)} className={styles.backGround} />
    </>
  );
};

export default MobileNav;
