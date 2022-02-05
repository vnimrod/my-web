import React from 'react';
import { NavigationItem } from '../navigation-item';
import data from './navigation-list.texts.json';
import styles from './navigation-list.module.scss';

export const NavigationList = () => {
  return (
    <ul className={styles.navigationList}>
      {data.navBarTextItems.map((item) => (
        <NavigationItem textItem={item.text} link={item.link} />
      ))}
    </ul>
  );
};
