import { SearchSection } from '../../../search/SearchSection';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.img}>
        <img
          src="https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hero"
        />
      </div>
      <h1>Made for those who do</h1>
      <SearchSection />
    </section>
  );
};
