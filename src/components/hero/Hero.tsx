import { SearchSection } from "../../features/search/SearchSection";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.img}>
        <img src="/src/assets/images/hero.png" alt="hero" />
      </div>
      <h1>Made for those who do</h1>
      <SearchSection />
    </section>
  );
};
