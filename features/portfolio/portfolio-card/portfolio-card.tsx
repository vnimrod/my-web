import React from 'react';
import { Button } from '../link-button';
import texts from '../portfolio-section/portfolio.texts.json';
import styles from './portfolio-card.module.scss';

type PortfolioItem = {
  text: string;
  serverRepo?: string;
  clientRepo: string;
  deployment: string;
  img: string;
};

type Props = {
  item: PortfolioItem;
};

export const PortfolioCard = ({ item }: Props) => {
  return (
    <li className={styles.listItem}>
      <span className={styles.title}>{item.text}</span>
      <img className={styles.img} src={item.img} />
      <div className={styles.cardDetails}>
        <div className={styles.links}>
          <Button href={item.deployment}>{texts.deployment}</Button>
          <Button href={item.clientRepo}>{texts.clientRepo}</Button>
          {item?.serverRepo && (
            <Button href={item.serverRepo}>{texts.serverRepo}</Button>
          )}
        </div>
      </div>
    </li>
  );
};
