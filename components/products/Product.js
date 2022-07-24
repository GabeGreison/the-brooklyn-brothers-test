import Image from "next/image";
import React, { useState } from "react";
import styles from "./Product.module.css";

const Product = ({ images, name, description }) => {
  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <Image
          width={200}
          height={200}
          key={index}
          src={image.asset.url}
          className={styles.image}
          alt={image.alt}
        />
      ))}
      <h4>{name}</h4>
      <p className={"more-text"}> {description}</p>
    </div>
  );
};

export default Product;
