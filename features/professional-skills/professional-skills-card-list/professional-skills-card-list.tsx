import React from 'react';
import { BackendTech } from './backend-tech';
import { FrontendTech } from './frontend-tech';
import styles from './professional-skills-card-list.module.scss';
import { ProgrammingLan } from './programming-lan';

export const ProfessionalSkillsCardList = () => {
  return (
    <ul className={styles.cardList}>
      <FrontendTech />
      <BackendTech />
      <ProgrammingLan />
    </ul>
  );
};
