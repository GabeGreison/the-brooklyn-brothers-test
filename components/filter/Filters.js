import Checkbox from "./Checkbox";
import styles from "./Filters.module.css";

export default function Filters({
  categories,
  toggleSelectedCategories,
  selectedCategories,
}) {
  function onChange(e) {
    toggleSelectedCategories(e.target.value);
  }

  return (
    <>
      <h3 className={styles.categoriesTitle}>Categorías</h3>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Checkbox
            onChange={onChange}
            checked={selectedCategories.includes(category._id)}
            key={category._id}
            label={category.name}
            id={category._id}
          />
        ))}
      </div>
    </>
  );
}
