import React from 'react';
import LeftBar from '../LeftBar/LeftBar';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module';

const Layout = () => {
  return (
    <main className={styles.main}>
      <LeftBar />
      <div className={styles.contentWrapper}>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
