import React from "react";
import styles from "./Checkbox.module.css";

const Checkbox = ({ label, id, checked, onChange }) => {
  return (
    <label className={styles.label}>
      <input
        checked={checked}
        className={styles.toggle}
        type="checkbox"
        value={id}
        onChange={(e) => onChange(e)}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
