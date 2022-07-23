import React, { useState } from 'react'
import styles from './Product.module.css'

const Product = ({image, name}) => {
  


  return (
    <div className={styles.container}>
      {
      image.map((images,index) => 
         <img key={index} src={images.asset.url}
      className={styles.image} />)
      }
      <p>{name}</p>
    </div>
  )}


export default Product