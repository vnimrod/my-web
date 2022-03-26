import React from 'react';
import { PortfolioCard } from '../portfolio-card';
import data from '../portfolio-data.json';
import styles from './portfolio-card-list.module.scss';

export const PortfolioCardList = () => {
  return (
    <ul className={styles.list}>
      {data.portfolioItems.map((item) => {
        return <PortfolioCard item={item} />;
      })}
    </ul>
  );
};
