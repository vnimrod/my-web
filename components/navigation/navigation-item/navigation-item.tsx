import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './navigation-item.module.scss';

type Props = {
  textItem: string;
  link: string;
};

export const NavigationItem = ({ textItem, link }: Props) => {
  const router = useRouter();
  return (
    <li className={styles.listItem}>
      <Link href={link} passHref>
        <a className={router.pathname === link ? styles.active : ''}>
          {textItem}
        </a>
      </Link>
    </li>
  );
};
