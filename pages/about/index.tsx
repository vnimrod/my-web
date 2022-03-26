import { About } from '../../features/about';
import { ProfessionalSkillsSection } from '../../features/professional-skills/professional-skills-section';
import { Portfolio } from '../../features/portfolio/portfolio-section';
import { Contact } from '../../features/contact';
import styles from '../../styles/Home.module.scss';
import { Footer } from '../../components/footer';

const Index = () => {
  return (
    <div className={styles.mainLayout}>
      <section className={styles.section}>
        <About />
      </section>
      <section className={styles.section}>
        <ProfessionalSkillsSection />
      </section>
      <section className={styles.section}>
        <Portfolio />
      </section>
      <section className={styles.section}>
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
