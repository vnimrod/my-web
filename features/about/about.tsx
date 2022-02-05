import React from 'react';
import { ComicPhoto } from '../comic-photo';
import texts from './about.texts.json';
import styles from './about.module.scss';

export const About = () => {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.text}>
          <span className={styles.title}>{texts.title}</span>
          <span className={styles.subTitle}>{texts.subTitle}</span>
          <span className={styles.summary}>{texts.summary}</span>
        </div>
        <ComicPhoto width="400" height="400" />
      </div>
    </>
  );
};
