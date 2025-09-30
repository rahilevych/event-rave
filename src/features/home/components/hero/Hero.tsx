import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.img}>
        <img
          src="https://images.unsplash.com/photo-1613093335399-829e30811789?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hero"
        />
      </div>
      <h1>Your stage. Your energy. Your rave.</h1>
    </section>
  );
};
