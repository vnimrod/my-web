import React from 'react';
import { NavigationItem } from '../navigation-item';
import { NavigationIcons } from '../navigation-icons';
import data from './navigation-list.texts.json';
import styles from './navigation-list.module.scss';

export const NavigationList = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navigationList}>
        {data.textItems.map((item) => (
          <NavigationItem textItem={item.text} link={item.link} />
        ))}
      </ul>
      <NavigationIcons />
    </div>
  );
};
