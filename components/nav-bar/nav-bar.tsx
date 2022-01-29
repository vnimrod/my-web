import React from 'react';
import { Logo } from '../../features/logo';
import { NavigationSection } from '../navigation/navigation-section';
import styles from './nav-bar.module.scss';

export const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <Logo />
      <NavigationSection />
    </nav>
  );
};
