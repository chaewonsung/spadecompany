import React, { memo } from 'react';
import styles from './LeftBar.module';
import Tree from '../ui/Tree';
import treeData from '../../data/tree.json';

const Nav = memo(() => {
  return (
    <nav className={styles.nav}>
      <Tree treeData={[...treeData.data]} />
    </nav>
  );
});
Nav.displayName = 'Nav';

export default Nav;
