import React from 'react';
import { BackendTech } from './backend-tech';
import { FrontendTech } from './frontend-tech';
import styles from './professional-skills-card.module.scss';
import { ProgrammingLan } from './programming-lan';

export const ProfessionalSkillsCard = () => {
  return (
    <ul className={styles.cardList}>
      <FrontendTech />
      <BackendTech />
      <ProgrammingLan />
    </ul>
  );
};
