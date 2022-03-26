import React from 'react';
import Image from 'next/image';
import texts from '../navigation-list-data.json';
import styles from './navigation-icons.module.scss';

export const NavigationIcons = () => {
  return (
    <ul className={styles.list}>
      {texts.iconItems.map((icon, index) => (
        <li key={`${icon}_${index}`} className={styles.listItem}>
          <a href={icon.link}>
            <Image src={icon.path} alt="" width="45" height="45" />
          </a>
        </li>
      ))}
    </ul>
  );
};
