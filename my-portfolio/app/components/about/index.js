import styles from "./about.module.scss";

const About = () => {
  return (
    <section id='about' className={styles.about_container}>
      <div className={styles.img_container}>
        <img src='/avatar.png' alt='OWNED nft' />
      </div>
      <div className={styles.about_text}>
        <div>
          <h2>About me</h2>
          <p>I am located in Fredrikstad, Norway,</p>
          <p>and I have recently completed my studies at Noroff.</p>
          <p>
            Currently, I am employed as a front-end developer in my hometown.
          </p>

          <h3>Goals</h3>
          <p>My goals are to learn as much as possible about this space.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
