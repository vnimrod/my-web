import React from 'react';
import { ProfessionalSkillsCard } from '../professional-skills-card';
import styles from './professional-skills-card-list.module.scss';

export const ProfessionalSkillsCardList = () => {
  return (
    <div className={styles.skillsList}>
      <ProfessionalSkillsCard />
    </div>
  );
};
