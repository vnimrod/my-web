import React from 'react';
import { ProfessionalSkill } from '../../professional-skill';
import data from '../data.json';
import styles from './frontend-tech.module.scss';

export const FrontendTech = () => {
  return (
    <li className={styles.frontendContainer}>
      <ul className={styles.frontendSkills}>
        {data.frontend.map((item) => (
          <ProfessionalSkill skill={item.skill} />
        ))}
      </ul>
      <span className={styles.title}>Frontend Tech</span>
    </li>
  );
};
