import { Header } from "../components/Header";
import { products } from "../products/data";
import styles from "../styles/Home.module.css";
import ProductList from "../components/ProductList";
import NextHead from "../components/NextHead";

let categories = [];

categories = products.data.nodes
  .map((p) => p.category)
  .filter(function (category) {
    if (!categories.includes(category._id)) {
      categories.push(category._id);
      return true;
    }
    return false;
  });

export default function Home() {
  return (
    <>
      <NextHead title="TBB - Product List" />
      <div className={styles.container}>
        <Header />
        <ProductList
          productsData={products.data.nodes}
          categories={categories}
        />
      </div>
    </>
  );
}
