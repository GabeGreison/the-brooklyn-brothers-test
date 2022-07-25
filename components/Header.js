import Image from "next/image";
import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.container}>
      <Image src={"/logo@2x.png"} alt="Tbb Logo" width={106} height={46.2} />
    </div>
  );
};
