import { Header } from "../components/Header";
import { products } from "../products/data";
import styles from "../styles/Home.module.css";
import ProductList from "../components/ProductList";
import NextHead from "../components/NextHead";

export default function Home() {
  return (
    <>
      <NextHead title="TBB - Product List" />
      <div className={styles.container}>
        <Header />
        <ProductList productsData={products.data.nodes} />
      </div>
    </>
  );
}
