import React from 'react';
import { ProfessionalSkill } from '../../professional-skill';
import data from '../data.json';
import styles from './backend-tech.module.scss';

export const BackendTech = () => {
  return (
    <li className={styles.backendContainer}>
      <ul className={styles.backendSkills}>
        {data.backend.map((item) => (
          <ProfessionalSkill key={item.skill} skill={item.skill} />
        ))}
      </ul>
      <span className={styles.title}>Backend Tech</span>
    </li>
  );
};
