import React, { useRef } from 'react';
import styles from './LeftBar.module';
import { useLeftBarStore } from '../../store/useLeftBarStore';
import classNames from 'classnames/bind';
import CheckboxGroup from './CheckboxGroup';
import Nav from './Nav';
import ResizeHandler from './ResizeHandler';

const cn = classNames.bind(styles);

const barStyle = {
  fixed: {
    position: 'fixed',
    left: 'max(calc((100% - var(--g-max-width)) / 2), 0)',
  },
  floated: {
    position: 'sticky',
    left: 0,
    float: 'left',
  },
};

const LeftBar = () => {
  const barRef = useRef();
  const isFloating = useLeftBarStore((state) => state.isFloating);
  const isResizable = useLeftBarStore((state) => state.isResizable);
  const width = useLeftBarStore((state) => state.width);
  return (
    <aside
      className={cn('leftBar', { resize: isResizable })}
      style={{
        ...barStyle[isFloating ? 'fixed' : 'floated'],
        width: width + 'px',
      }}
      ref={barRef}
    >
      <div className={styles.content}>
        <CheckboxGroup />
        <Nav />
      </div>
      <ResizeHandler barRef={barRef} />
    </aside>
  );
};

export default LeftBar;
