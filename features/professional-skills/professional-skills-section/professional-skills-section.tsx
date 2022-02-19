import React from 'react';
import texts from './professional-skills-section.texts.json';
import styles from './professional-skills-section.module.scss';
import { text } from 'node:stream/consumers';
import { ProfessionalSkillsCardList } from '../professional-skills-card-list';

export const ProfessionalSkillsSection = () => {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.learnSentence}>{texts.learnSentence}</span>
        <span className={styles.title1}>{texts.title1}</span>
        <span className={styles.title2}>{texts.title2}</span>
      </header>
      <ProfessionalSkillsCardList />
    </>
  );
};
