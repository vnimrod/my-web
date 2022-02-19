import React from 'react';
import { ProfessionalSkill } from '../../professional-skill';
import data from '../data.json';
import styles from './backend-tech.module.scss';

export const BackendTech = () => {
  return (
    <li className={styles.backendContainer}>
      <ul className={styles.backendSkills}>
        {data.backend.map((item) => (
          <ProfessionalSkill skill={item.skill} />
        ))}
      </ul>
      <span className={styles.title}>Backend Tech</span>
    </li>
  );
};
