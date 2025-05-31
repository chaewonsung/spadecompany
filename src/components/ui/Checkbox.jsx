import React, { useId } from 'react';
import styles from './Checkbox.module';

const Checkbox = ({ checked = false, children, handleChange }) => {
  const id = useId();

  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={id}
        defaultChecked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.label}>
        <div className={styles.toggle}>
          <div className={styles.toggleInner}></div>
        </div>
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
