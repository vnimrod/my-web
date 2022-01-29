import React from 'react';
import { Logo } from '../../features/logo';
import { NavigationList } from '../navigation/navigation-list';
import styles from './nav-bar.module.scss';

export const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <Logo />
      <NavigationList />
    </nav>
  );
};
