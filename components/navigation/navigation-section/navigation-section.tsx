import React from 'react';
import { NavigationList } from '../navigation-list';
import styles from './navigation-section.module.scss';

export const NavigationSection = () => {
  return (
    <section className={styles.navigationSection}>
      <NavigationList />
    </section>
  );
};
