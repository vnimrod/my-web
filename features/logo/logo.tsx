import React from 'react';
import texts from './logo.texts.json';
import styles from './logo.module.scss';

export const Logo = () => {
  return (
    <div className={styles.Logo}>
      <span className={styles.text}>{texts.text}</span>
    </div>
  );
};
