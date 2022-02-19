import React from 'react';
import styles from './professional-skill.module.scss';

type Props = {
  skill: string;
};

export const ProfessionalSkill = ({ skill }: Props) => {
  return <li>{skill}</li>;
};
