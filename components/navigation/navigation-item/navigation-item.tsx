import React from 'react';
import styles from './navigation-item.module.scss';

type Props = {
  textItem: string;
};

export const NavigationItem = ({ textItem }: Props) => {
  return <li className={styles.listItem}>{textItem}</li>;
};
