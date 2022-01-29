import { About } from '../features/about';
import { ProfessionalSkillsSection } from '../features/professional-skills/professional-skills-section';
import { Portfolio } from '../features/portfolio';
import { Contact } from '../features/contact';
import styles from '../styles/Home.module.scss';

const Index = () => {
  return (
    <>
      <About />
      <ProfessionalSkillsSection />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Index;
