import React from 'react';
import { PortfolioCardList } from '../portfolio-card-list';
import texts from './portfolio.texts.json';
import styles from './portfolio.module.scss';

export const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <header className={styles.header}>
        <span className={styles.title1}>{texts.title1}</span>
        <span className={styles.title2}>{texts.title2}</span>
      </header>
      <PortfolioCardList />
    </div>
  );
};
