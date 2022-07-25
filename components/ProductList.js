import React, { useState, useMemo } from "react";
import styles from "./ProductList.module.css";
import Product from "../components/products/Product";
import Filters from "../components/filter/Filters";
import useCheckMobileScreen from "../hooks/useCheckMobileScreen";
import MobileNav from "./MobileNav";
import FilterIcon from "./icons/FilterIcon";
import DeleteFilterIcon from "./icons/DeleteFilterIcon";

const ProductList = ({ productsData }) => {
  const isMobile = useCheckMobileScreen();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const categories = useMemo(
    () =>
      productsData
        .map((product) => product.category)
        .reduce((uniqueCategories, currentCategory) => {
          if (
            !uniqueCategories.find(
              (category) => category._id === currentCategory._id
            )
          ) {
            uniqueCategories.push(currentCategory);
          }
          return uniqueCategories;
        }, []),
    [productsData]
  );

  const toggleSelectedCategories = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
      return;
    }
    setSelectedCategories([...selectedCategories, category]);
  };

  return (
    <div>
      <h2 className={styles.title}>Productos más nuevos</h2>
      {isMobile && (
        <div className={styles.filterWrap}>
          <h3 onClick={() => setOpenMobileNav(true)} className={styles.filter}>
            Filtrar <FilterIcon className={styles.filterIcon} />
          </h3>
          <h3
            onClick={() => setSelectedCategories([])}
            className={styles.filter}
          >
            Restablecer Filtros
            <DeleteFilterIcon className={styles.filterIcon} />
          </h3>
        </div>
      )}
      <div className={styles.main}>
        {isMobile ? (
          openMobileNav && (
            <MobileNav open={openMobileNav} setOpen={setOpenMobileNav}>
              <Filters
                selectedCategories={selectedCategories}
                categories={categories}
                toggleSelectedCategories={toggleSelectedCategories}
              />
            </MobileNav>
          )
        ) : (
          <div className={styles.sideBar}>
            <Filters
              selectedCategories={selectedCategories}
              categories={categories}
              toggleSelectedCategories={toggleSelectedCategories}
            />
          </div>
        )}
        <div className={styles.products}>
          {productsData.map((product, index) => {
            if (
              selectedCategories.length < 1 ||
              selectedCategories.includes(product.category._id)
            ) {
              return (
                <Product
                  images={product.images}
                  name={product.name}
                  key={index}
                  description={product.shortDescription}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
