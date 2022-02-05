import React from 'react';
import Image from 'next/image';
import styles from './comic-photo.module.scss';

type Props = {
  width: string;
  height: string;
};

export const ComicPhoto = ({ width = '100', height = '100' }: Props) => {
  return <Image src="/comicImg.PNG" alt="me" width={width} height={height} />;
};
