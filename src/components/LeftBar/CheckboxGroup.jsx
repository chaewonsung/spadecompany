import React from 'react';
import { useLeftBarStore } from '../../store/useLeftBarStore';
import styles from './LeftBar.module';
import Checkbox from '../ui/Checkbox';

const CheckboxGroup = () => {
  const toggleFloating = useLeftBarStore((state) => state.toggleFloating);
  const toggleResizable = useLeftBarStore((state) => state.toggleResizable);

  return (
    <div className={styles.check}>
      <Checkbox checked handleChange={toggleFloating}>
        Fixed / Floating
      </Checkbox>
      <Checkbox handleChange={toggleResizable}>Resize Handler</Checkbox>
    </div>
  );
};

export default CheckboxGroup;
