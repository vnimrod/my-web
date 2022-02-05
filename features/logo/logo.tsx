import React from 'react';
import texts from './logo.texts.json';
import Link from 'next/link';
import styles from './logo.module.scss';

export const Logo = () => {
  return (
    <div className={styles.Logo}>
      <a href="/" className={styles.text}>
        {texts.text}
      </a>
    </div>
  );
};
