import React from 'react';
import Image from 'next/image';
import { ProfessionalSkill } from '../../professional-skill';
import data from '../data.json';
import styles from './programming-lan.module.scss';

export const ProgrammingLan = () => {
  return (
    <li>
      <div className={styles.chain}>
        <Image src="/chain.PNG" alt="" width="300" height="150" />
      </div>
      <ul className={styles.programmingSkills}>
        {data.programming.map((item) => (
          <ProfessionalSkill skill={item.skill} />
        ))}
      </ul>
    </li>
  );
};
