import { useEffect, useState } from "react"
import Filters from "../components/filter/Filters"
import Product from "../components/products/Product"
import {products} from "../products/data"
import styles from '../styles/Home.module.css'

export default function Home() {
  const [productsData] = useState(products.data.nodes)
  const [selectedCategories, setSelectedCategories] = useState([])
  let categories = [];

  categories = productsData.map((p) => p.category).filter(function(category) {
      if(!categories.includes(category._id)){
        categories.push(category._id)
          return true
      }
      return false
  })

const getSelectedCategories = (category) => {
  if(selectedCategories.includes(category)){
    setSelectedCategories(selectedCategories.filter(item => item !== category))
    return
  }
 setSelectedCategories([...selectedCategories, category])
}

useEffect(() => {
  console.log(selectedCategories)
},[selectedCategories])
  
  return (
    <div className={styles.container}>

      <h2>Latest Products</h2>

      <div className={styles.categories} >
        {categories.map((product, index) => <Filters key={index} categories={[product]} getSelectedCategories={getSelectedCategories}/>)}
      </div>

      <div className={styles.products}>
      {productsData.map((product, index) =>{
        if(selectedCategories.length < 1 || selectedCategories.includes(product.category._id)){
          return (
        <Product image={product.images} name={product.name} key={index}/>
          )}
      })} 
      </div>
    
    </div>
  )
}
