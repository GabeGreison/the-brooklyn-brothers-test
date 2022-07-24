import Checkbox from "./Checkbox";
import styles from "./Filters.module.css";

export default function Filters({
  categories,
  toggleSelectedCategories,
  checked,
  selectedCategories,
}) {
  function onChange(e) {
    toggleSelectedCategories(e.target.value);
  }

  return (
    <div className={styles.categories}>
      <h3>Categorías</h3>
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
  );
}
