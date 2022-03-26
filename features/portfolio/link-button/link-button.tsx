import React, { ReactNode } from 'react';
import styles from './link-button.module.scss';

type Props = {
  href: string;
  children: ReactNode;
};

export const Button = ({ children, href }: Props) => {
  return (
    <a href={href} target="_blank" className={styles.button}>
      {children}
    </a>
  );
};
